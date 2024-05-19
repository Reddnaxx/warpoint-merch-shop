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
  basePath: "/UnitHack-2024"
};

export default nextConfig;
