const { i18n } = require('./next-i18next.config');
const nextConfig = {
  i18n,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    outputStandalone: true,
  },
};

module.exports = nextConfig;
