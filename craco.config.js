// craco.config.js
module.exports = {
    webpack: {
      configure: (webpackConfig, { env, paths }) => {
        webpackConfig.module.rules.push({
          test: /\.html$/,
          use: 'html-loader',
        });
        return webpackConfig;
      },
    },
  };
  