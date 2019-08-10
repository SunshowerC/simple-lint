const confusingBrowserGlobals = require('confusing-browser-globals')

module.exports = {
  rules: {
    // @off
    // 变量必须在定义的时候赋值
    // ENG:enforce or disallow variable initializations at definition
    'init-declarations': 'off',

    // @off
    // 禁止 catch 的参数名与定义过的变量重复
    // ENG:disallow the catch clause parameter name being the same as a variable in the outer scope
    'no-catch-shadow': 'off',

    // 禁止使用 delete
    // ENG:disallow deletion of variables
    'no-delete-var': 'error',

    // 禁止 label 名称与定义过的变量重复
    // ENG:disallow labels that share a name with a variable
    'no-label-var': 'error',

    // @off
    // 禁止使用指定的全局变量
    // ENG:disallow specific globals
    'no-restricted-globals': ['off', 'isFinite', 'isNaN'].concat(confusingBrowserGlobals),

    // 禁止变量名与上层作用域内的定义过的变量重复
    // ENG:disallow declaration of variables already declared in the outer scope
    'no-shadow': 'error',

    // 禁止使用保留字作为变量名
    // disallow shadowing of names such as arguments
    'no-shadow-restricted-names': 'error',

    // 禁止使用未定义的变量
    // disallow use of undeclared variables unless mentioned in a /*global */ block
    'no-undef': 'error',

    // @fixable 禁止将 undefined 赋值给变量
    // disallow use of undefined when initializing variables
    'no-undef-init': 'error',

    // @off
    // 禁止对 undefined 重新赋值
    // disallow use of undefined variable
    // TODO: enable?
    'no-undefined': 'off',

    // 定义过的变量必须使用
    // disallow declaration of variables that are not used in the code
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

    // 变量必须先定义后使用
    // disallow use of variables before they are defined
    'no-use-before-define': ['error', { functions: false, classes: true, variables: true }]
  }
}
