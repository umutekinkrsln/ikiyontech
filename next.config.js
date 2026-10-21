/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // Docker imajı için gerekli
};

module.exports = nextConfig;
