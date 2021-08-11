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
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },

  plugins: [
    'import',
    'react',
    '@typescript-eslint',
    'simple-import-sort',
    'unused-imports',
  ],

  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    react: {
      version: 'detect',
    }
  },

  rules: {
    'arrow-body-style': ['warn', 'as-needed'],
    'dot-notation': 'off',
    'global-require': 'off',
    'lines-between-class-members': ['warn', 'always'],
    'no-console': 'warn',
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'object-curly-newline': 'off',
    'object-curly-spacing': ['warn', 'always'],
    'padded-blocks': ['warn', 'never'],
    'padding-line-between-statements': ['warn',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
    ],
    'spaced-comment': 'warn',

    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-use-before-define': ["error", { "functions": false }],
    '@typescript-eslint/no-var-requires': 'off',

    'import/export': 'off',
    'import/extensions': ['error', 'ignorePackages', {
      ts: 'never', tsx: 'never',
    }],
    'import/no-unresolved': 'error',

    'prettier/prettier': 'warn',

    'react/destructuring-assignment': ['warn', 'always', {
      ignoreClassFields: true
    }],
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'react/jsx-key': ['warn', { checkKeyMustBeforeSpread: true }],
    'react/jsx-sort-props': ['warn', {
      callbacksLast: true,
      shorthandFirst: true,
      shorthandLast: false,
      ignoreCase: false,
      noSortAlphabetically: false,
      reservedFirst: true,
    }],
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
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
      ],
    ] }],

    "unused-imports/no-unused-imports": "warn",
    "unused-imports/no-unused-vars": [ "warn", {
      "varsIgnorePattern": "^_$", "argsIgnorePattern": "^_$"
    }],
  },
}
