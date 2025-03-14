/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use more stable settings for local development
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Increase resource limits for development
  experimental: {
    workerThreads: true,
  },
};

module.exports = nextConfig;
