module.exports = {
  extends: ['./vue.js','./typescript.js'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      // @TODO Deprecated https://eslint.org/docs/user-guide/configuring#deprecated
      experimentalObjectRestSpread: true,
      jsx: true,
      modules: true
    }
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },
}
