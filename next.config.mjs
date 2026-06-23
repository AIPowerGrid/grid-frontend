import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Cloudflare Workers don't run Next's image optimizer — serve as-is.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'api.slingacademy.com',
        port: ''
      }
    ]
  },
  transpilePackages: ['geist']
};

export default nextConfig;

// Lets `next dev` talk to the Cloudflare bindings locally (no-op in prod build).
initOpenNextCloudflareForDev();
