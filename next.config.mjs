/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "unithack.somee.com",
      }
    ],
  },
  output: "export",
  basePath: "",
};

export default nextConfig;
