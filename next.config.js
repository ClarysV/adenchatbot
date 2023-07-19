const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,

  webpack(config, { isServer, dev }) {

    process.env.OPENAI_API_KEY = "824dc9d1708b45219043148791cab850"
    process.env.OPENAI_API_HOST = "https://cweaoaiagp04openai01.openai.azure.com/"
    process.env.OPENAI_API_TYPE = "azure"
    process.env.OPENAI_API_VERSION = "2023-03-15-preview"
    process.env.AZURE_DEPLOYMENT_ID = "qa_model"
    process.env.DEFAULT_MODEL = "gpt-35-turbo"

    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };

    return config;
  },
};

module.exports = nextConfig;
