/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SANITY_PROJECT_ID: "6ci6a7t9",
    SANITY_DATASET: "production",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",

        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
