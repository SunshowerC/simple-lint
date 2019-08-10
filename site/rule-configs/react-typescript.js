module.exports = {
  extends: ['./react.js', './typescript.js'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    jsx: true
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },
}
