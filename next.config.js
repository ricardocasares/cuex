require("dotenv").config();

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

module.exports = withBundleAnalyzer({
  env: {
    API: process.env.API,
    API_KEY: process.env.API_KEY
  }
});
