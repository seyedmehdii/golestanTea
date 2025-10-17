import withPWA from "next-pwa";

const nextConfig = {
  images: {
    domains: ["www.golestan.com", "www.1dayoff.com"],
    unoptimized: true,
  },
};

export default withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
})(nextConfig);
