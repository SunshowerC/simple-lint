module.exports = {
  env: {
    node: true
  },

  rules: {
    // @off
    // 在主函数块之外使用的回调始终是return语句的一部分或紧接在语句之前
    // ENG:enforce return after a callback
    'callback-return': 'off',

    // @off
    // 所有调用require()都位于模块的顶层
    // ENG:require all requires be top-level
    'global-require': 'off',

    // @off
    // 当在Node.js中使用回调模式时，必须处理error
    // ENG:enforces error handling in callbacks (node environment)
    'handle-callback-err': 'off',

    // 不允许调用和构造Buffer()构造函数。
    // ENG:disallow use of the Buffer() constructor
    'no-buffer-constructor': 'error',

    // @off
    // 禁止require调用与常规变量声明混合
    // ENG:disallow mixing regular variable and require declarations
    'no-mixed-requires': ['off', false],

    // 禁止 new require 表达的使用。
    // ENG:disallow use of new operator with the require function
    'no-new-require': 'error',

    // 禁止字符串连接__dirname和__filename
    // path.join()和path.resolve()是任何地方正在创建的文件或目录路径为字符串连接合适的替代品。
    // ENG:disallow string concatenation with __dirname and __filename
    'no-path-concat': 'error',

    // @off
    // 禁止使用process.env以避免全局依赖
    // ENG:disallow use of process.env
    'no-process-env': 'off',

    // @off
    // 禁止 process.exit() 在Node.js JavaScript中使用
    // ENG:disallow process.exit()
    'no-process-exit': 'off',

    // @off
    // 指定你禁止在应用程序中使用的nodejs模块
    // ENG:restrict usage of specified node modules
    'no-restricted-modules': 'off',

    // @off
    // 禁止在Node.js中调用同步方法。它特别针对方法后缀“ Sync”
    // ENG:disallow use of synchronous methods (off by default)
    'no-sync': 'off'
  }
}
