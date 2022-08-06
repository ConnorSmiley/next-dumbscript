module.exports = {
  reactStrictMode: true,
  webpack: config => {
    // Unset client-side javascript that only works server-side
    config.module.rules.push({
      test:/\.svg$/,
      use: ['@svgr/webpack']
    })
    config.resolve.fallback = { fs: false, module: false }
    return config
  },
}
