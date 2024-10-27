/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    disableStaticImages: true,
    loader: "default",
  },
  reactStrictMode: true,
};

export default nextConfig;
