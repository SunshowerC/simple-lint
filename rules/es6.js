module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false
    }
  },

  rules: {
    // @off
    // @fixable 箭头函数能够省略 return 的时候，必须省略，比如必须写成 () => 0，禁止写成 () => { return 0 }
    // ENG:enforces no braces where they can be omitted
    // TODO: enable requireReturnForObjectLiteral?
    'arrow-body-style': [
      'off',
      'as-needed',
      {
        requireReturnForObjectLiteral: false
      }
    ],

    // @fixable 箭头函数的参数必须加括号
    // ENG:require parens in arrow function arguments
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': [
      'error',
      'always',
      {
        requireForBlockBody: true
      }
    ],

    // @fixable 箭头函数的箭头前后必须有空格
    // ENG:require space before/after arrow function's arrow
    'arrow-spacing': ['error', { before: true, after: true }],

    // constructor 中必须有 super
    // ENG:verify super() callings in constructors
    'constructor-super': 'error',

    // @fixable generator 的 * 前面禁止有空格，后面必须有空格
    // ENG:enforce the spacing around the * in generator functions
    'generator-star-spacing': ['error', { before: false, after: true }],

    // 禁止对定义过的 class 重新赋值
    // ENG:disallow modifying variables of class declarations
    'no-class-assign': 'error',

    // @fixable 禁止出现难以理解的箭头函数，比如 let x = a => 1 ? 2 : 3
    // ENG:disallow arrow functions where they could be confused with comparisons
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true
      }
    ],

    // 禁止对使用 const 定义的常量重新赋值
    // ENG:disallow modifying variables that are declared using const
    'no-const-assign': 'error',

    // 禁止重复定义类
    // ENG:disallow duplicate class members
    'no-dupe-class-members': 'error',

    // @off
    // 禁止重复 import 模块
    // 被 import/no-duplicates 取代
    // ENG:disallow importing from the same path more than once
    // replaced by https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'no-duplicate-imports': 'off',

    // 禁止使用 new 来生成 Symbol
    // ENG:disallow symbol constructor
    'no-new-symbol': 'error',

    // @off
    // 禁止 import 指定的模块
    // ENG:disallow specific imports
    'no-restricted-imports': [
      'off',
      {
        paths: [],
        patterns: []
      }
    ],

    // 禁止在 super 被调用之前使用 this 或 super
    // ENG:disallow to use this/super before super() calling in constructors.
    'no-this-before-super': 'error',

    // @fixable 禁止出现没必要的计算键名，比如 let a = { ['0']: 0 };
    // ENG:disallow useless computed property keys
    'no-useless-computed-key': 'error',

    // 禁止出现没必要的 constructor，比如 constructor(value) { super(value) }
    // ENG:disallow unnecessary constructor
    'no-useless-constructor': 'error',

    // @fixable 禁止解构时出现同样名字的的重命名，比如 let { foo: foo } = bar;
    // ENG:disallow renaming import, export, and destructured assignments to the same name
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false
      }
    ],

    // @fixable 禁止使用 var
    // ENG:require let or const instead of var
    'no-var': 'error',

    // @fixable
    // 必须使用 a = {b} 而不是 a = {b: b}
    // 必须使用 "bar": function() {} 而不是 "bar"() {}
    // 对象引用简写语法
    // ENG:require method and property shorthand syntax for object literals
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true
      }
    ],

    // @fixable 建议使用箭头函数作为回调
    // ENG:suggest using arrow functions as callbacks
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true
      }
    ],

    // @fixable 申明后不再被修改的变量必须使用 const 来申明
    // ENG:suggest using of const declaration for variables that are never modified after declared
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true
      }
    ],

    // @off
    // 必须使用解构
    // ENG:Prefer destructuring from arrays and objects
    'prefer-destructuring': [
      'off',
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: true,
          object: true
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ],

    // @fixable 必须使用 0b11111011 而不是 parseInt('111110111', 2)
    // 禁止使用parseInt来作用于二进制、八进制、十六进制的内容
    // ENG:disallow parseInt() in favor of binary, octal, and hexadecimal literals
    'prefer-numeric-literals': 'error',

    // @off
    // 建议使用 Reflect, v3.9.0 已废弃
    // ENG:suggest using Reflect methods where applicable
    'prefer-reflect': 'off',

    // @off
    // 必须使用 ...args 而不是 arguments
    // ENG:use rest parameters instead of arguments
    'prefer-rest-params': 'off',

    // @fixable
    // 当apply后的this不变时，必须使用 ... 而不是 apply，比如 foo(...args)
    // ENG:suggest using the spread operator instead of .apply()
    'prefer-spread': 'error',

    // @fixable 必须使用模版字符串而不是字符串连接
    // ENG:suggest using template literals instead of string concatenation
    'prefer-template': 'error',

    // generator 函数内必须有 yield
    // ENG:disallow generator functions that do not have yield
    'require-yield': 'error',

    // @fixable ... 的后面禁止有空格
    // ENG:enforce spacing between object rest-spread
    'rest-spread-spacing': ['error', 'never'],

    // @off
    // @fixable import 必须按规则排序
    // ENG:import sorting
    'sort-imports': [
      'off',
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
      }
    ],

    // 创建 Symbol 时必须传入参数
    // ENG:require a Symbol description
    'symbol-description': 'error',

    // @fixable ${name} 内的首尾禁止有空格
    // ENG:enforce usage of spacing in template strings
    'template-curly-spacing': 'error',

    // @fixable yield* 后面必须要有空格
    // ENG:enforce spacing around the * in yield* expressions
    'yield-star-spacing': ['error', 'after']
  }
}
