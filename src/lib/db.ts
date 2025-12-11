import { Pool } from 'pg';
import crypto from 'crypto';

// Create a PostgreSQL connection pool with more flexible SSL settings
const poolConfig = {
  connectionString: process.env.DATABASE_URL,
  // Handle various SSL scenarios including self-signed certificates
  ssl:
    process.env.POSTGRES_SSL === 'false'
      ? false
      : {
          // Set to false to accept self-signed certificates
          rejectUnauthorized: false
        }
};

// Create a connection pool with the configured settings
const pool = new Pool(poolConfig);

// Helper function to query the database
export async function query(text: string, params?: any[]) {
  try {
    const start = Date.now();
    const res = await pool.query(text, params);
    const duration = Date.now() - start;

    // Only log queries in development
    if (process.env.NODE_ENV !== 'production') {
      console.log('Executed query', { duration, rows: res.rowCount });
    }

    return res;
  } catch (error) {
    // Log the error with more details in development
    if (process.env.NODE_ENV !== 'production') {
      console.error('Database query error:', error);
    } else {
      // In production, log minimal info to avoid leaking sensitive data
      console.error('Database error:', (error as Error).message);
    }

    // Rethrow the error so it can be handled by the caller
    throw error;
  }
}

// Generate a client ID directly from OAuth ID - no randomness at all
function generateClientId(oauthId: string): string {
  // Simply hash the OAuth ID to ensure it's consistent but not the raw ID
  return crypto.createHash('md5').update(oauthId).digest('hex');
}

// User functions
export async function getUserByOAuthId(oauthId: string) {
  const result = await query('SELECT * FROM users WHERE oauth_id = $1', [
    oauthId
  ]);
  return result.rows[0] || null;
}

export async function createUser(
  username: string,
  oauthId: string,
  apiKey: string
) {
  // Generate a client ID directly from the OAuth ID - will be 100% consistent
  const clientId = generateClientId(oauthId);

  const result = await query(
    `INSERT INTO users (
      username, 
      oauth_id, 
      api_key, 
      client_id, 
      created, 
      last_active,
      kudos,
      monthly_kudos,
      evaluating_kudos,
      usage_multiplier,
      worker_invited,
      public_workers,
      concurrency
    ) VALUES (
      $1, $2, $3, $4, NOW(), NOW(),
      100, 0, 0, 1, 0, FALSE, 30
    ) RETURNING *`,
    [username, oauthId, apiKey, clientId]
  );
  return result.rows[0];
}

export async function updateUserApiKey(userId: number, apiKey: string) {
  const result = await query(
    'UPDATE users SET api_key = $1, last_active = NOW() WHERE id = $2 RETURNING *',
    [apiKey, userId]
  );
  return result.rows[0];
}

export async function addUserRole(
  userId: number,
  role: string,
  value: string = 'TRUE'
) {
  // PostgreSQL expects TRUE/FALSE strings or boolean literals
  let boolValue;
  if (value.toUpperCase() === 'TRUE') {
    boolValue = true;
  } else if (value.toUpperCase() === 'FALSE') {
    boolValue = false;
  } else {
    boolValue = value === 'true' || value === 't' || value === '1';
  }

  // Use UPSERT (ON CONFLICT) to atomically insert or update the role
  // This prevents race conditions when multiple requests try to add the same role simultaneously
  // Assumes there's a unique constraint on (user_id, user_role) or a composite primary key
  try {
    const result = await query(
      `INSERT INTO user_roles (user_id, user_role, value) 
       VALUES ($1, $2, $3) 
       ON CONFLICT (user_id, user_role) 
       DO UPDATE SET value = $3 
       RETURNING *`,
      [userId, role, boolValue]
    );
    return result.rows[0];
  } catch (error: any) {
    // If ON CONFLICT doesn't work (no unique constraint), fall back to check-then-insert
    if (error.code === '42704' || error.message?.includes('conflict')) {
      // Try the old method as fallback
      const existingRole = await query(
        'SELECT * FROM user_roles WHERE user_id = $1 AND user_role = $2',
        [userId, role]
      );

      if (existingRole.rows.length > 0) {
        const result = await query(
          'UPDATE user_roles SET value = $3 WHERE user_id = $1 AND user_role = $2 RETURNING *',
          [userId, role, boolValue]
        );
        return result.rows[0];
      }

      const result = await query(
        'INSERT INTO user_roles (user_id, user_role, value) VALUES ($1, $2, $3) RETURNING *',
        [userId, role, boolValue]
      );
      return result.rows[0];
    }
    throw error;
  }
}

export async function getUserRoles(userId: number) {
  const result = await query('SELECT * FROM user_roles WHERE user_id = $1', [
    userId
  ]);
  return result.rows;
}
