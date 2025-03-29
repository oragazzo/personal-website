const path = require('path')

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  allowedDevOrigins: ['local-origin.dev', 'localhost'],
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  output: 'standalone',
}

module.exports = nextConfig
