module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },

  globals: {
    window: true,
    define: true,
    require: true,
    module: true,
  },

  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    "plugin:prettier/recommended"
  ],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },

  settings: {
    'import/resolver': {
      typescript: {},
    },
  },

  plugins: [
    'react',
    '@typescript-eslint',
    'simple-import-sort',
    'unused-imports'
  ],

  rules: {
    'arrow-body-style': ['warn', 'as-needed'],
    'global-require': 'off',
    'lines-between-class-members': ['warn', 'always'],
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'object-curly-spacing': 'warn',
    'padded-blocks': ['warn', 'never'],
    'padding-line-between-statements': ['warn',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
    ],
    'spaced-comment': 'warn',

    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-var-requires': 'off',

    'import/extensions': ['error', 'ignorePackages', {
      ts: 'never', tsx: 'never',
    }],
    'import/prefer-default-export': 'off',

    'prettier/prettier': 'warn',

    'react/destructuring-assignment': ['warn', 'always', { "ignoreClassFields": true }],
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'react/jsx-indent': 'warn',
    "react/jsx-key": ['warn', { 'checkKeyMustBeforeSpread': true }],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-sort-props': ['warn', {
      'callbacksLast': true,
      'shorthandFirst': true,
      'shorthandLast': false,
      'ignoreCase': false,
      'noSortAlphabetically': false,
      'reservedFirst': true,
    }],
    'react/jsx-uses-react': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': ['warn', { component: true, html: true }],

    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': ['warn', { groups: [
        [
          // React
          '^(react)$',
          // Node.js builtins
          `^(${require('module').builtinModules.join('|')})(/|$)`,
          // Other packages
          '^@?\\w'
        ],
        [
          // Side effects
          '^\\u0000'
        ],
        [
          // Alias imports
          '^(@|@@|@@(\\w+-?)*)(/.*(?<!\\.(jpe?g|png|svg|bmp|webp|css|scss|sass))$)',
          // Parent imports
          '^\\.\\.(?!/?$)',
          '^\\.\\./?$',
          // Relative imports
          '^\\./(?=.*!/)(?!/?$)',
          '^\\.(?!/?$)',
          '^\\./?$',
        ],
        [
          // Styles
          '\\.module\\.(css|scss|sass)$',
          '\\.scoped\\.(css|scss|sass)$',
          '\\.(css|scss|sass)$',
          // Images
          '^.+\\.bmp$',
          '^.+\\.jpe?g$',
          '^.+\\.png$',
          '^.+\\.svg$',
          '^.+\\.webp$'
        ]
      ] }],

    "unused-imports/no-unused-imports": "warn",
    "unused-imports/no-unused-vars": [ "warn", { "varsIgnorePattern": "^_$", "argsIgnorePattern": "^_$" }],
  },
};
