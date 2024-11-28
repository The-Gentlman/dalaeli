/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.iqtel.com.au",
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
