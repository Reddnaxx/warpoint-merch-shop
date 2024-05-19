/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "unithack.somee.com",
      }
    ],
  },
};

export default nextConfig;
