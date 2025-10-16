/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "./",
  images: {
    domains: ["www.golestan.com", "www.1dayoff.com"],
    unoptimized: true,
  },
};

export default nextConfig;
