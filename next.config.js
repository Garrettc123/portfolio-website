/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  env: {
    CUSTOM_ENV: process.env.CUSTOM_ENV || 'production',
  },
}

module.exports = nextConfig
