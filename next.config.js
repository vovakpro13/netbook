/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  experimental: { appDir: true },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
