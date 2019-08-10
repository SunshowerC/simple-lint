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
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
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
  plugins: ['vue'],
  rules: {
    //
    //
    // Base Rules
    // classify
    // 允许在 <template> 中使用 eslint-disable 的功能
    'vue/comment-directive': 'error',
    // 定义了的 jsx element 必须使用
    // 此规则仅在启用no-unused-vars规则时有效。
    'vue/jsx-uses-vars': 'error',
    //
    //
    // Priority A: Essential
    // classify
    // 计算属性禁止包含异步方法
    'vue/no-async-in-computed-properties': 'error',
    // 禁止在组件内部重复定义相同名称的属性
    // 在 vue 组件内部的 props、data、computed、methods 定义相同名称的属性的话，会覆盖以及混淆
    'vue/no-dupe-keys': 'error',
    // 禁止出现重复的属性
    // 当重复属性存在时，只有最后一个会生效，可能会造成错误
    'vue/no-duplicate-attributes': 'error',
    // 禁止出现语法错误
    'vue/no-parsing-error': ['error', { 'x-invalid-end-tag': false }],
    // 禁止覆盖保留字
    'vue/no-reserved-keys': 'error',
    // @fixable 组件的 data 属性的值必须是一个函数
    // 有必要开启这个规则，不然多个相同组件会共享同一个 data
    'vue/no-shared-component-data': 'error',
    // 禁止在计算属性中对属性修改
    // 避免在 computed 中处理不和计算属性相关的操作
    'vue/no-side-effects-in-computed-properties': 'error',
    // 禁止 <template> 使用 key 属性
    'vue/no-template-key': 'error',
    // 禁止在 <textarea> 中出现 {{message}}
    // 在 <textarea> 中插值操作，并不会如预料中正常工作，请使用 v-model 代替
    'vue/no-textarea-mustache': 'error',
    // 禁止在 components 中注册的组件未在 <template> 中使用
    // @off 不能正确识别使用 render 渲染函数的情况
    'vue/no-unused-components': 'off',
    // 禁止在 v-for 定义了变量但未使用
    'vue/no-unused-vars': 'error',
    // 禁止在同一个元素中同时使用 v-for 和 v-if 指令
    'vue/no-use-v-if-with-v-for': 'error',
    // 禁止出现难以理解的 v-if 和 v-for
    // @deprecated 这个规则被弃用,取而代之的是vue/no-use-v-if-with-v-for规则。
    'vue/no-confusing-v-for-v-if': 'error',
    // <component> 必须有 v-bind:is
    'vue/require-component-is': 'error',
    // @fixable 在定义组件 props 时，建议使用内置类型构造函数
    'vue/require-prop-type-constructor': 'error',
    // render 函数必须有返回值
    'vue/require-render-return': 'error',
    // v-for 指令的元素必须有 v-bind:key
    'vue/require-v-for-key': 'error',
    // prop 的默认值必须匹配它的类型
    // @off 太严格了
    'vue/require-valid-default-prop': 'off',
    // 计算属性必须有返回值
    'vue/return-in-computed-property': 'error',
    // 当 v-on 指令绑定了多个相同监听事件时，建议使用 exact 修饰符
    'vue/use-v-on-exact': 'error',
    // template 的根节点必须合法
    'vue/valid-template-root': 'error',
    // v-bind 指令必须合法
    'vue/valid-v-bind': 'error',
    // v-cloak 指令必须合法
    'vue/valid-v-cloak': 'error',
    // v-else-if 指令必须合法
    'vue/valid-v-else-if': 'error',
    // v-else 指令必须合法
    'vue/valid-v-else': 'error',
    // v-for 指令必须合法
    'vue/valid-v-for': 'error',
    // v-html 指令必须合法
    'vue/valid-v-html': 'error',
    // v-if 指令必须合法
    'vue/valid-v-if': 'error',
    // v-model 指令必须合法
    'vue/valid-v-model': 'error',
    // v-on 指令必须合法
    'vue/valid-v-on': 'error',
    // v-once 指令必须合法
    'vue/valid-v-once': 'error',
    // v-pre 指令必须合法
    'vue/valid-v-pre': 'error',
    // v-show 指令必须合法
    'vue/valid-v-show': 'error',
    // v-text 指令必须合法
    'vue/valid-v-text': 'error',
    //
    //
    // Priority B: Strongly Recommended
    // classify
    // @fixable 限制自定义组件的属性风格
    // @off 没必要限制
    'vue/attribute-hyphenation': 'off',
    // @fixable 限制标签的关闭括号的位置，多行情况下必须另起一行
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],
    // @fixable 限制标签的关闭括号是否要带上空格，自闭合标签需要空格
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always'
      }
    ],
    // @fixable 需要闭合的元素必须带上闭合标签
    'vue/html-end-tags': 'error',
    // @fixable 规范 <tempalte> 中标签的缩进规则
    // 2(type) 表示缩进 2 个空格
    // attribute: 1 表示属性缩进 type * 1 个空格
    // baseIndent: 1 表示嵌套元素缩进 type * 1 个空格
    // closeBracket: 0 表示闭合符号缩进 type * 0 个空格
    // ignores 定义忽略该规则的属性
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],
    // @fixable html 属性值必须用双引号括起来
    'vue/html-quotes': 'error',
    // @fixable 元素内容为空时，组件必须自闭合
    // @off 没有必要
    'vue/html-self-closing': 'off',
    // @fixable 限制每行允许的最多属性数量
    // singleline: 3 表示只有一行时，最多允许 3 个属性在同一行
    // multiline 表示多行时，最多允许一行一个属性
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    // @fixable 规范元素内容换行格式问题
    // @off 规则太过复杂，先关掉
    'vue/multiline-html-element-content-newline': 'off',
    // @fixable mustache 语法插值，两边必须带上一个空格
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    // @fixable 限制组件的 name 属性的值的风格
    // @off 没必要限制
    'vue/name-property-casing': 'off',
    // @fixable 禁止出现连续空格
    'vue/no-multi-spaces': 'error',
    // @fixable <template> 语句赋值中，禁止等号两边留有空格
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    // @fixable 规范 props 属性名称格式必须为 camelCase
    'vue/prop-name-casing': ['error', 'camelCase'],
    // props 属性必须要有 default 默认值
    // @off 没必要限制
    'vue/require-default-prop': 'off',
    // prop 必须有类型限制
    // @off 没必要限制
    'vue/require-prop-types': 'off',
    // @fixable 元素内容必须另起一行
    // @off 没必要限制
    'vue/singleline-html-element-content-newline': 'off',
    // @fixable v-bind 指令必须使用简短形式
    'vue/v-bind-style': ['error', 'shorthand'],
    // @fixable v-on 指令必须使用简短形式
    'vue/v-on-style': ['error', 'shorthand'],
    //
    //
    // Priority C: Recommended
    // classify
    // @fixable 规定组件属性的顺序
    // @off 没必要限制
    'vue/attributes-order': 'off',
    // @fixable 禁止使用 v-html
    // @off 没必要限制
    'vue/no-v-html': 'off',
    // @fixable 组件的属性必须为一定的顺序
    'vue/order-in-components': 'error',
    // 禁止在 <template> 使用 this 关键字，因为没有必要
    'vue/this-in-template': ['error', 'never']
  }
}
