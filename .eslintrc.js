module.exports = {
  plugins: ['truffle', 'react', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    mocha: true, // for test files
    'truffle/globals': true, // same as "truffle/truffle": true
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
