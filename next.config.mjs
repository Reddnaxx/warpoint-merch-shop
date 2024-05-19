/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "unithack.somee.com",
      }
    ],
  },
  output: "export",
  basePath: "/nextjs-github-pages",
};

export default nextConfig;
