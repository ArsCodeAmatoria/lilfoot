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
    unoptimized: true
  },
  // Increase resource limits for development
  experimental: {
    workerThreads: false,
  },
  // Ensure static files are served correctly
  assetPrefix: '',
  trailingSlash: false,
};

module.exports = nextConfig;
