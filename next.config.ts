import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'godfathersbailbonds.us',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'maps.googleapis.com',
      },
    ],
  },
  async redirects() {
    return [
      // Redirect WordPress-style /blog/[slug]/ → /[slug]/
      {
        source: '/blog/:slug/',
        destination: '/:slug/',
        permanent: true,
      },
      {
        source: '/blog/:slug',
        destination: '/:slug/',
        permanent: true,
      },
      // Common WordPress URL patterns
      {
        source: '/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug/',
        destination: '/:slug/',
        permanent: true,
      },
      {
        source: '/category/:slug/',
        destination: '/blog/',
        permanent: true,
      },
      {
        source: '/category/:slug',
        destination: '/blog/',
        permanent: true,
      },
      {
        source: '/tag/:slug/',
        destination: '/blog/',
        permanent: true,
      },
      // Normalize trailing slash for contact
      {
        source: '/contact',
        destination: '/contact-us/',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
