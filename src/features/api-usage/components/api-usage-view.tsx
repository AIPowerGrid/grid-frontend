'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { Card } from '@/components/ui/card';

// Dynamically load the SwaggerUI component (only on the client).
const SwaggerUI = dynamic(() => import('swagger-ui-react'), { ssr: false });

// Import the Swagger UI default CSS.
import 'swagger-ui-react/swagger-ui.css';

interface ApiUsageViewProps {
  swaggerData: any;
}

export default function ApiUsageView({ swaggerData }: ApiUsageViewProps) {
  const { paths } = swaggerData;
  if (!paths) {
    return (
      <Card className='p-6'>
        <p>No API usage information available.</p>
      </Card>
    );
  }

  // Convert swagger paths into an array of endpoints.
  const endpoints = Object.entries(paths).map(([path, methods]) => {
    // methods is an object like { get: {...}, post: {...}, ... }
    const methodEntries = Object.entries(methods);
    return { path, methods: methodEntries };
  });

  return (
    <Card className='space-y-4 p-6'>
      <h1 className='mb-4 text-2xl font-bold'>API Usage Information</h1>
      {endpoints.map((endpoint, index) => (
        <div key={index} className='mb-6'>
          <h2 className='text-xl font-semibold text-slate-700 dark:text-slate-300'>
            {endpoint.path}
          </h2>
          <ul className='ml-6 list-disc'>
            {endpoint.methods.map(([method, details]: [string, any], idx) => (
              <li key={idx} className='mt-1'>
                <strong className='uppercase'>{method}</strong>
                {details.summary && <span>: {details.summary}</span>}
                {!details.summary && details.description && (
                  <span>: {details.description}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Card>
  );
}
