module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    'react-native/react-native': true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/ignore': ['node_modules'],
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  plugins: [
    'react',
    'react-native',
    'react-hooks',
    '@typescript-eslint',
    'unused-imports',
    'small-import'
  ],
  extends: [
    'plugin:import/warnings',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:react/recommended'
  ],
  rules: {
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      }
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'unknown',
          'parent',
          'sibling',
          'index'
        ],
        'newlines-between': 'always',
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
      }
    ],
    'import/newline-after-import': ['error', { count: 2 }],
    'import/namespace': [2, { allowComputed: true }],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxEOF: 0,
        maxBOF: 0,
      }
    ],
    'eol-last': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': ['error', 'consistent'],
    'array-bracket-newline': ['error', { multiline: true }],
    'space-in-parens': ['error', 'never'],
    'key-spacing': 'error',
    'max-len': [
      'error',
      {
        code: 150,
        tabWidth: 2,
        ignoreStrings: true,
        ignoreTrailingComments: false,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignorePattern: 'createStandardAction|createSelector',
      }
    ],
    'no-multi-spaces': ['error'],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      }
    ],
    'no-trailing-spaces': 'error',
    eqeqeq: 'error',
    'comma-dangle': ['error', { objects: 'always-multiline' }],
    'no-console': 'error',
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'object-shorthand': [2, 'always'],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'object-curly-spacing': ['error', 'always'],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          consistent: true,
          minProperties: 4,
        },
        ImportDeclaration: {
          multiline: true,
          minProperties: 5,
        },
        ExportDeclaration: {
          multiline: true,
          minProperties: 3,
        },
      }
    ],
    'keyword-spacing': ['error', { before: true }],
    indent: ['error', 2],
    'space-before-blocks': [
      'error',
      {
        functions: 'always',
        keywords: 'always',
        classes: 'always',
      }
    ],
    'react/jsx-indent': [2, 2, { indentLogicalExpressions: true }],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
    'react-hooks/rules-of-hooks': 'error',
    'react/prop-types': 0,
    'react-hooks/exhaustive-deps': 'error',
    'react/display-name': ['off'],
    'react/jsx-key': 'warn',
    'react/jsx-max-props-per-line': ['error', { maximum: 1 }],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-wrap-multilines': [
      'error',
      {
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        logical: 'parens-new-line',
        assignment: 'parens-new-line',
        declaration: 'parens-new-line',
        condition: 'parens-new-line',
        prop: 'parens-new-line',
      }
    ],
    'react/jsx-one-expression-per-line': [
      'error',
      {
        allow: 'single-child',
      }
    ],
    'react/jsx-curly-spacing': [
      'error',
      {
        when: 'always',
        spacing: { objectLiterals: 'never' },
        children: true,
      }
    ],
    '@typescript-eslint/no-empty-function': 0,
    'react-native/no-unused-styles': 'error',
    'react-native/no-single-element-style-arrays': 'error',
    'small-import/no-full-import': 'error',
  },
};
