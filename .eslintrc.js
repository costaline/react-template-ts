module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
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
  ],

  rules: {
    'arrow-body-style': ['warn', 'as-needed'],
    'no-use-before-define': 'off',
    'object-curly-spacing': 'warn',
    'padded-blocks': ['warn', 'never'],
    'padding-line-between-statements': ['warn',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
    ],
    semi: 'off',

    '@typescript-eslint/no-use-before-define': ['error'],

    'import/extensions': ['error', 'ignorePackages', {
      ts: 'never', tsx: 'never',
    }],
    'import/prefer-default-export': 'off',

    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'react/jsx-indent': 'warn',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-uses-react': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
