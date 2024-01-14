// config-overrides.js
const path = require('path');

module.exports = function override(config, env) {
  // Add a rule to handle .html files using raw-loader
  config.module.rules.push({
    test: /\.html$/,
    use: 'raw-loader',
  });

  return config;
};
