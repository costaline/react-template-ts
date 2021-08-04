const CracoAlias = require("craco-alias");
const SassResourcesLoader = require('./.config-helpers/sassResourcesLoader');

const tsConfig = require('./tsconfig.paths.json');

module.exports = function({ env }) {
  return {
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
