/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  // Whitelist images from these domains
  images: {
    domains: ["cdn.sanity.io"],
  },
};
