'use strict';

module.exports = {
  plugins: [ 'eslint-plugin-mocha' ],
  extends: [
    'eslint:recommended',
    require.resolve('./rules/main')
  ],
  rules: {},
  env: {
    node: true,
    mocha: true,
    es6: true
  },
  globals: {
    '__rewire_reset_all__': true,
    expect: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 8,
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false,
      experimentalObjectRestSpread: true
    }
  }
};
