const CracoAlias = require("craco-alias");
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const SassResourcesLoader = require('./.config-helpers/sassResourcesLoader');

const tsConfig = require('./tsconfig.paths.json');

module.exports = function({ env }) {
  const plugins = [];

  if (process.env.REACT_APP_BUNDLE_TREEMAP === 'true') {
    plugins.push(new BundleAnalyzerPlugin())
  }

  return {
    webpack: {
      plugins: [...plugins],
    },
    plugins: [
      {
        plugin: CracoAlias,
        options: {
          source: 'tsconfig',
          baseUrl: tsConfig.compilerOptions.baseUrl,
          tsConfigPath: './tsconfig.paths.json'
        }
      },
      {
        plugin: SassResourcesLoader,
        options: {
          resources: ['./src/assets/styles/prepend-resources.scss'],
          hoistUseStatements: true,
        },
      }
    ]
  }
}
