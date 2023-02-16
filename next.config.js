/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [process.env.BASE_URL],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cadera.t-solution.vn",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "cadera.t-solution.vn",
        pathname: "**",
      },
    ],
  },
  modularizeImports: {
    lodash: {
      transform: "lodash/{{member}}",
    },
    "date-fns": {
      transform: "date-fns/{{member}}",
    },
  },
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
};

module.exports = nextConfig;
