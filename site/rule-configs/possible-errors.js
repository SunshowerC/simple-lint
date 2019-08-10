module.exports = {
  rules: {
    // 禁止执行“for”循环更新子句以错误的方向移动，防止无限循环
    // ENG:Enforce “for” loop update clause moving the counter in the right direction
    'for-direction': 'error',

    // getter 必须有返回值，并且禁止返回空，比如 return;
    // ENG:Enforces that a return statement is present in property getters
    'getter-return': ['error', { allowImplicit: true }],

    // @off
    // 禁止使用异步函数作为Promise执行程序
    // ENG:disallow using an async function as a Promise executor
    // TODO: enable, semver-major
    'no-async-promise-executor': 'off',

    // 禁止将 await 写在循环里，因为这样就无法同时发送多个异步请求了
    // ENG:Disallow await inside of loops
    'no-await-in-loop': 'error',

    // 禁止与负零进行比较
    // ENG:Disallow comparisons to negative zero
    'no-compare-neg-zero': 'error',

    // 禁止在测试表达式中使用赋值语句
    // ENG:disallow assignment in conditional expressions
    'no-cond-assign': ['error', 'always'],

    // @off
    // 禁止使用 console
    // ENG:disallow use of console
    'no-console': 'off',

    // 不建议将常量作为分支条件判断中的测试表达式
    // ENG:disallow use of constant expressions in conditions
    'no-constant-condition': 'warn',

    // 禁止在正则表达式中出现 Ctrl 键的 ASCII 表示，即禁止使用 /\x1f/
    // ENG:disallow control characters in regular expressions
    'no-control-regex': 'error',

    // @fixable 禁止使用 debugger
    // ENG:disallow use of debugger
    'no-debugger': 'error',

    // 禁止在函数参数中出现重复名称的参数
    // ENG:disallow duplicate arguments in functions
    'no-dupe-args': 'error',

    // 禁止在对象字面量中出现重复名称的键名
    // ENG:disallow duplicate keys when creating object literals
    'no-dupe-keys': 'error',

    // 禁止在 switch 语句中出现重复测试表达式的 case
    // ENG:disallow a duplicate case label.
    'no-duplicate-case': 'error',

    // 禁止出现空代码块
    // ENG:disallow empty statements
    'no-empty': 'error',

    // 禁止在正则表达式中使用空的字符集 []
    // ENG:disallow the use of empty character classes in regular expressions
    'no-empty-character-class': 'error',

    // 禁止将 catch 的第一个参数 error 重新赋值
    // ENG:disallow assigning to the exception in a catch block
    'no-ex-assign': 'error',

    // @fixable 禁止不必要的布尔类型转换，比如 !! 或 Boolean
    // ENG:disallow double-negation boolean casts in a boolean context
    'no-extra-boolean-cast': 'error',

    // @off
    // @fixable 禁止函数表达式中出现多余的括号，比如 let foo = (function () { return 1 })
    // ENG:disallow unnecessary parentheses
    'no-extra-parens': [
      'off',
      'all',
      {
        conditionalAssign: true,
        nestedBinaryExpressions: false,
        returnAssign: false,
        ignoreJSX: 'all', // delegate to eslint-plugin-react
        enforceForArrowConditionals: false
      }
    ],

    // @fixable 禁止出现多余的分号
    // ENG:disallow unnecessary semicolons
    'no-extra-semi': 'off',

    // 禁止将一个函数声明重新赋值，如：
    // function foo() {}
    // foo = bar
    // ENG:disallow overwriting functions written as function declarations
    'no-func-assign': 'error',

    // 禁止在 if 代码块内出现函数声明
    // ENG:disallow function or variable declarations in nested blocks
    'no-inner-declarations': 'error',

    // 禁止在 RegExp 构造函数中出现非法的正则表达式
    // ENG:disallow invalid regular expression strings in the RegExp constructor
    'no-invalid-regexp': 'error',

    // 禁止使用特殊空白符（比如全角空格)
    // ENG:disallow irregular whitespace outside of strings and comments
    'no-irregular-whitespace': 'error',

    // @off
    // 禁止在字符类语法中使用多个代码点生成的字符
    // ENG:Disallow characters which are made with multiple code points in character class syntax
    // TODO: enable, semver-major
    'no-misleading-character-class': 'off',

    // 禁止将 Math, JSON 或 Reflect 直接作为函数调用
    // ENG:disallow the use of object properties of the global object (Math and JSON) as functions
    'no-obj-calls': 'error',

    // 禁止使用 hasOwnProperty, isPrototypeOf 或 propertyIsEnumerable
    // ENG:disallow use of Object.prototypes builtins directly
    'no-prototype-builtins': 'error',

    // @fixable 禁止在正则表达式中出现连续的空格，必须使用 /foo {3}bar/ 代替
    // ENG:disallow multiple spaces in a regular expression literal
    'no-regex-spaces': 'error',

    // 禁止在数组中出现连续的逗号，如 let foo = [,,]
    // ENG:disallow sparse arrays
    'no-sparse-arrays': 'error',

    // 禁止在普通字符串中出现模版字符串里的变量形式，如 'Hello ${name}!'
    // ENG:Disallow template literal placeholder syntax in regular strings
    'no-template-curly-in-string': 'error',

    // 禁止出现难以理解的多行表达式，如：
    // let foo = bar
    // [1, 2, 3].forEach(baz);
    // ENG:Avoid code that looks like two expressions but is actually one
    'no-unexpected-multiline': 'error',

    // 禁止在 return, throw, break 或 continue 之后还有代码
    // ENG:disallow unreachable statements after a return, throw, continue, or break statement
    'no-unreachable': 'error',

    // 禁止在 finally 中出现 return, throw, break 或 continue
    // ENG:disallow return/throw/break/continue inside finally blocks
    'no-unsafe-finally': 'error',

    // @fixable 禁止在 in 或 instanceof 操作符的左侧使用感叹号，如 if (!key in object)
    // ENG:disallow negating the left operand of relational operators
    'no-unsafe-negation': 'error',

    // @off
    // 禁止在in表达式中否定左操作数
    // 此规则在ESLint v3.3.0 中已弃用，并替换为no-unsafe-negation规则。
    // ENG:disallow negation of the left operand of an in expression
    // deprecated in favor of no-unsafe-negation
    'no-negated-in-lhs': 'off',

    // @off
    // 禁止因使用await或yield（需要原子更新）而导致竞争条件的分配
    // ENG:Disallow assignments that can lead to race conditions due to usage of await or yield
    // TODO: enable, semver-major
    'require-atomic-updates': 'off',

    // 禁止使用 foo === NaN , 使用 isNaN(foo)
    // ENG:disallow comparisons with the value NaN
    'use-isnan': 'error',

    // @off
    // 注释必须符合 JsDoc 的规范
    // ENG:ensure JSDoc comments are valid
    'valid-jsdoc': 'off',

    // typeof 表达式比较的对象必须是字符串文字或其他typeof表达式
    // 'undefined', 'object', 'boolean', 'number', 'string', 'function' 或 'symbol'
    // ENG:ensure that the results of typeof are compared against a valid string
    'valid-typeof': ['error', { requireStringLiterals: true }]
  }
}
