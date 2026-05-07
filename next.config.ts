import type { NextConfig } from "next";

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})


const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://vvindsnncurwjjixlans.supabase.co', // Cseréld ki a saját Supabase azonosítódra!
        port: '',
        pathname: '/storage/v1/object/public/**', // Ez engedélyezi a public bucketeket
      },
    ],
  },
};

export default nextConfig;
