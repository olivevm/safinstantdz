/** @type {import('next').NextConfig} */

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "standalone",
  reactStrictMode: true,
  async redirects() {
    return [
      {
        destination: "/vote",
        permanent: true,
        source: "/",
      },
    ];
  },
  async rewrites() {
    return [
      {
        destination: process.env.NEXT_PUBLIC_API_BASE_URL + "/api/:path*",
        source: "/api/:path*",
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
