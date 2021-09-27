module.exports = {
  plugins: ['react', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    mocha: true, // for test files
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
