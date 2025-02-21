/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['drive.google.com',"www.dropbox.com"],
  },
  basePath: '/profile',
};

module.exports = nextConfig;