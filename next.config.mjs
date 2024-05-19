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
  basePath: "https://reddnaxx.github.io/UnitHack-2024/"
};

export default nextConfig;
