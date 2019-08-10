module.exports = {
  extends: [
    './rules/best-practices.js',
    './rules/possible-errors.js',
    './rules/nodejs-and-commonjs.js',
    './rules/stylistic-issues.js',
    './rules/variables.js',
    './rules/es6.js',
    './rules/strict.js',
    './rules/import.js',
    './rules/prettier.js'
  ],
  parser: 'babel-eslint',
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
  // root: true,
  rules: {
    // https://github.com/eslint/typescript-eslint-parser#known-issues
    // TODO: enable rules?
    // 'no-useless-rename': [
    //   'error',
    //   {
    //     ignoreDestructuring: false,
    //     ignoreImport: false,
    //     ignoreExport: false
    //   }
    // ]
  }
}
