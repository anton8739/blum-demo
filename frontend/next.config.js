const { i18n } = require('./next-i18next.config');
const nextConfig = {
  i18n,
  env: {
    APOLLO_CLIENT_URI: 'http://localhost:1337/graphql',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    outputStandalone: true,
  },
};

module.exports = nextConfig;
