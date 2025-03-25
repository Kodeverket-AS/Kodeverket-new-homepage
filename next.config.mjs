/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SANITY_PROJECT_ID: "dm8vyhbj",
    SANITY_DATASET: "production",
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
};

export default nextConfig;
