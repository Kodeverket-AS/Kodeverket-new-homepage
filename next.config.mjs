/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SANITY_PROJECT_ID: "dm8vyhbj",
    SANITY_DATASET: "production",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
       
        pathname: "/**", },
    ],
  },
};

export default nextConfig;
