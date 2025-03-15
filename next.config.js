/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use more stable settings for local development
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
  // Increase resource limits for development
  experimental: {
    workerThreads: false,
  },
};

module.exports = nextConfig;
