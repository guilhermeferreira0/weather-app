module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // Padrões de regras minhas
    'react/jsx-filename-extension': 0,
    'linebreak-style': 0,
    'import/no-extraneous-dependencies': 0,
    'react/no-deprecated': 0,
  },
};
