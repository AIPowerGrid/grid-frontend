import { ApiReference } from '@scalar/nextjs-api-reference';

const configuration = {
  spec: {
    url: '/swagger.json'
  },
  servers: [{ url: 'https://api.aipowergrid.io/api' }],
  theme: 'moon'
};

export const GET = ApiReference(configuration);
