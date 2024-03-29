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
    // 可能的错误
    // classify
    // 禁止出现语法错误
    'vue/no-parsing-error': 'error',
    // 禁止重复的二级键名
    // @off 没必要限制
    'vue/no-dupe-keys': 'off',
    // 禁止覆盖保留字
    'vue/no-reserved-keys': 'error',
    // 组件的 data 属性的值必须是一个函数
    // @off 没必要限制
    'vue/no-shared-component-data': 'off',
    // 禁止 <template> 使用 key 属性
    // @off 太严格了
    'vue/no-template-key': 'off',
    // render 函数必须有返回值
    'vue/require-render-return': 'error',
    // prop 的默认值必须匹配它的类型
    // @off 太严格了
    'vue/require-valid-default-prop': 'off',
    // 计算属性必须有返回值
    'vue/return-in-computed-property': 'error',
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
    // 最佳实践
    // classify
    // 计算属性禁止包含异步方法
    'vue/no-async-in-computed-properties': 'error',
    // @fixable html 的结束标签必须符合规定
    // @off 有的标签不必严格符合规定，如 <br> 或 <br/> 都应该是合法的
    'vue/html-end-tags': 'off',
    // 禁止出现难以理解的 v-if 和 v-for
    // 这个规则被弃用,取而代之的是vue/no-use-v-if-with-v-for规则。
    'vue/no-confusing-v-for-v-if': 'error',

    // 取代上一条
    'vue/no-use-v-if-with-v-for': 'error',
    // 禁止出现重复的属性
    // 当重复属性存在时，只有最后一个会生效，可能会造成错误
    'vue/no-duplicate-attributes': 'error',
    // 禁止在计算属性中对属性修改
    // @off 太严格了
    'vue/no-side-effects-in-computed-properties': 'off',
    // 禁止在 <textarea> 中出现 {{message}}
    'vue/no-textarea-mustache': 'error',
    // 组件的属性必须为一定的顺序
    'vue/order-in-components': 'error',
    // <component> 必须有 v-bind:is
    'vue/require-component-is': 'error',
    // prop 必须有类型限制
    // @off 没必要限制
    'vue/require-prop-types': 'off',
    // v-for 指令的元素必须有 v-bind:key
    'vue/require-v-for-key': 'error',
    //
    //
    // 风格问题
    // classify
    // html 属性值必须用双引号括起来
    'vue/html-quotes': 'error',
    // @fixable 限制自定义组件的属性风格
    // @off 没必要限制
    'vue/attribute-hyphenation': 'off',
    // @fixable 没有内容时，组件必须自闭和
    // @off 没必要限制
    'vue/html-self-closing': 'off',
    // 限制每行允许的最多属性数量
    // @off 没必要限制
    'vue/max-attributes-per-line': 'off',
    // @fixable 限制组件的 name 属性的值的风格
    // @off 没必要限制
    'vue/name-property-casing': 'off',
    // @fixable 禁止出现连续空格
    'vue/no-multi-spaces': 'error',
    // @fixable 限制 v-bind 的风格
    // @off 没必要限制
    'vue/v-bind-style': 'off',
    // @fixable 限制 v-on 的风格
    // @off 没必要限制
    'vue/v-on-style': 'off',
    //
    //
    // 变量
    // classify
    // 定义了的 jsx element 必须使用
    // 此规则仅在启用no-unused-vars规则时有效。
    'vue/jsx-uses-vars': 'error'
  }
}
