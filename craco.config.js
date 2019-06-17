const { loaderByName, getLoader } = require('@craco/craco');

module.exports = {
  babel: {
    plugins: [
      ["module-resolver", {
        root: ["./src"],
        alias: { "~": "./src" }
      }]
    ]
  },
  webpack: {
    configure: (webpackConfig) => {
      const lm = getLoader(webpackConfig, loaderByName('babel-loader'));
      const loader = lm.match.loader;
      loader.rules = [
        {
          loader: loader.loader,
          options: {
            presets: [...loader.options.presets]
          }
        },
        {
          loader: 'linaria/loader',
          options: {
            cacheDirectory: 'src/.linaria_cache',
            sourceMap: process.env.NODE_ENV !== 'production',
            babelOptions: {
              presets: loader.options.presets
            }
          }
        }
      ];
      return webpackConfig;
    }
  }
};
