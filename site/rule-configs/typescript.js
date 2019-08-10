module.exports = {
  extends: [
    // 'plugin:@typescript-eslint/recommended',
    './rules/best-practices.js',
    './rules/possible-errors.js',
    './rules/nodejs-and-commonjs.js',
    './rules/stylistic-issues.js',
    './rules/variables.js',
    './rules/es6.js',
    './rules/strict.js',
    './rules/import.js',
    './rules/prettier.js',
    'prettier/@typescript-eslint',

  ],
  // plugins: ['typescript'],
  plugins: ['@typescript-eslint'],
  // parser: 'typescript-eslint-parser',
  parser: '@typescript-eslint/parser',
  "parserOptions": {
    "sourceType": "module"
  },
  settings: {
    'import/resolver': { typescript: {} }
  },

  // @typescript-eslint/eslint-plugin 的 规则:
  //
  //
  rules: {
    // @off
    // 要求成员重载是连续的
    '@typescript-eslint/adjacent-overload-signatures': 'off',
    // @fixable
    // 需要对数组使用T[]或数组<T> (TSLint中的数组类型).
    '@typescript-eslint/array-type': ['error', 'array'],
    // @off
    // @fixable
    // 设置禁止使用的类型
    '@typescript-eslint/ban-types': 'off',
    // @off
    // 禁止使用“/ / @ts-ignore”
    '@typescript-eslint/ban-ts-ignore': 'off',
    // @off
    // 执行camelCase命名约定
    '@typescript-eslint/camelcase': 'off',
    // @off
    // 类和接口的命名必须遵守帕斯卡命名法，比如 PersianCat
    '@typescript-eslint/class-name-casing': 'off',
    // @off
    // 显示指定函数返回值类型，确保函数返回的值是预期的类型。
    '@typescript-eslint/explicit-function-return-type': 'off',
    // @off
    // 用 private / public等可访问性修饰符
    '@typescript-eslint/explicit-member-accessibility': 'off',
    // 设置禁止使用的类型
    // '@typescript-eslint/generic-type-naming': 'error',
    //
    // @off
    // @fixable
    // 设置禁止使用的类型
    // indent === 2
    '@typescript-eslint/indent': 'off',
    // @off
    // 强制设置接口名是否以 ‘I’ 开头
    '@typescript-eslint/interface-name-prefix': 'off',
    // @off
    // @fixable
    // 在接口和类型文字中强制使用一致的成员分隔符样式
    // 遵循prettier的样式规则，多行无分号，单行分号分割。
    '@typescript-eslint/member-delimiter-style': 'off',
    // 设置禁止使用的类型
    // '@typescript-eslint/member-naming': 'error',
    // 设置禁止使用的类型
    // '@typescript-eslint/member-ordering': 'error',
    //
    // @off
    // 强制使用as类型断言代替<Type>断言(无角度括号类型断言)
    '@typescript-eslint/no-angle-bracket-type-assertion': 'off',
    // @fixable
    // 禁止使用 Array 构造函数来初始化数组，除非指定了泛型，或传入的是单个数字
    '@typescript-eslint/no-array-constructor': 'error',
    // 禁止声明空接口,接口
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: false
      }
    ],
    // @off
    // 禁止使用any
    '@typescript-eslint/no-explicit-any': 'off',
    // 设置禁止使用的类型
    // '@typescript-eslint/no-extraneous-class': 'error',
    // 设置禁止使用的类型
    // '@typescript-eslint/no-for-in-array': 'error',
    //
    // @off
    // @fixable
    // 禁止显式类型声明为变量或参数初始化为一个数字,字符串,或布尔
    '@typescript-eslint/no-inferrable-types': 'off',
    // 强制执行new和构造函数的有效定义
    '@typescript-eslint/no-misused-new': 'error', // a
    // @off If you are using the ES2015 module syntax, then you will not need this rule.
    // 标准化模块的声明方式。
    // good: declare module 'foo' {}
    // bad: declare module foo {}
    //      declare namespace foo {
    '@typescript-eslint/no-namespace': 'off',
    // @off
    // 禁止使用 ！进行非空断言
    '@typescript-eslint/no-non-null-assertion': 'off',
    // @off
    // 禁止对象文字出现在类型断言表达式中(无对象文字类型断言)
    '@typescript-eslint/no-object-literal-type-assertion': 'off', // a
    // @off
    // 禁止在构造函数中使用参数属性，强制用户显式声明类中的所有属性。
    // 如：readonly、public、private
    '@typescript-eslint/no-parameter-properties': 'off',
    // @off
    // 比起require()，更喜欢较新的es6的导入。
    '@typescript-eslint/no-require-imports': 'off',
    // 设置禁止使用的类型
    // '@typescript-eslint/no-this-alias': 'error',
    //
    // 禁止三斜杠引入方式，如 /// <reference path="" />
    // 用import
    '@typescript-eslint/no-triple-slash-reference': 'error',
    // 设置禁止使用的类型
    // '@typescript-eslint/no-type-alias': 'error',
    // @fixable
    // 设置禁止使用的类型
    // '@typescript-eslint/no-unnecessary-qualifier': 'error',
    // @fixable
    // 设置禁止使用的类型
    // '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    // @off 覆盖eslint的no-unused-vars
    // 定义过的变量必须使用
    'no-unused-vars': 'off',
    // 定义过的变量必须使用(解决了 enum 问题)
    '@typescript-eslint/no-unused-vars': 'error',

    // @off
    // eslint的no-unused-vars 已经有了
    '@typescript-eslint/no-use-before-define': 'off',
    // 设置禁止使用的类型
    // '@typescript-eslint/no-useless-constructor': 'error',
    //
    //@off
    // var foo = require("foo") is bad
    // require("foo") OR import foo = require("foo") is OK
    // 要求过于严格，webpack等配置文件中较为常用
    '@typescript-eslint/no-var-requires': 'off',
    // @off
    // @fixable
    // 接口通常比类型文字更受欢迎，因为接口可以实现、扩展和合并。
    '@typescript-eslint/prefer-interface': 'off',
    // @fixable
    // 设置禁止使用的类型
    // '@typescript-eslint/prefer-function-type': 'error',
    //
    // @fixable
    // use namespace instead of module
    // 为了防止自定义TypeScript模块和新的ES2015模块之间的进一步混淆，
    // 从TypeScript v1.5开始，namespace 是声明自定义TypeScript模块的首选方法
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    // 设置禁止使用的类型
    // '@typescript-eslint/promise-function-async': 'error',
    // 设置禁止使用的类型
    // '@typescript-eslint/restrict-plus-operands': 'error',
    //
    // @off
    // @fixable
    // 类型声明 ： 前后要保持一致的类型
    // 遵循prettier，如： let a: string = 'abc'
    '@typescript-eslint/type-annotation-spacing': 'off'
  }


}
