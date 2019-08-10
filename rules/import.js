module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: ['import'],

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.json']
      }
    },
    'import/extensions': ['.js', '.mjs', '.jsx'],
    'import/core-modules': [],
    'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$']
  },

  rules: {
    // Static analysis:
    // classify
    // 确保导入模块存在且区分大小写，不满足导入时报告错误。支持ES6、commonjs
    // ENG:ensure imports point to files/modules that can be resolved
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],

    // 确保导入的内容有export
    // ENG:ensure named imports coupled with named exports
    'import/named': 'error',

    // @off
    // 如果请求默认导入，则如果导入模块中没有默认导出，则此规则将报告。
    // ENG:ensure default import coupled with default export
    'import/default': 'off',

    // @off
    // 当 import * as xxx from ...时， xxx.zzz引用的属性名称必须在导出文件中有命名export
    'import/namespace': 'off',

    // Helpful warnings:
    // classify
    // 禁止重复导出名称 或 重复导出defaults
    // ENG:disallow invalid exports, e.g. multiple defaults
    'import/export': 'error',

    // ENG:do not allow a default import name to match a named export
    'import/no-named-as-default': 'error',

    // 当导出文件中已有你需要的变量名，禁止通过default import值再重新获取。
    // 而是用 import { xxx } from xxx 的方式导入
    // ENG:warn on accessing default export property names that are also named exports
    'import/no-named-as-default-member': 'error',

    // @off
    // ENG:disallow use of jsdoc-marked-deprecated imports
    'import/no-deprecated': 'off',

    // @off
    // 禁止使用无关的包
    // ENG:Forbid the use of extraneous packages
    // paths are treated both as absolute paths, and relative to process.cwd()
    'import/no-extraneous-dependencies': [
      'off',
      {
        devDependencies: [
          'test/**', // tape, common npm pattern
          'tests/**', // also common npm pattern
          'spec/**', // mocha, rspec-like pattern
          '**/__tests__/**', // jest pattern
          '**/__mocks__/**', // jest pattern
          'test.{js,jsx}', // repos with a single test file
          'test-*.{js,jsx}', // repos with multiple top-level test files
          '**/*{.,_}{test,spec}.{js,jsx}', // tests where the extension or filename suffix denotes that it is a test
          '**/jest.config.js', // jest config
          '**/vue.config.js', // vue-cli config
          '**/webpack.config.js', // webpack config
          '**/webpack.config.*.js', // webpack config
          '**/rollup.config.js', // rollup config
          '**/rollup.config.*.js', // rollup config
          '**/gulpfile.js', // gulp config
          '**/gulpfile.*.js', // gulp config
          '**/Gruntfile{,.js}', // grunt config
          '**/protractor.conf.js', // protractor config
          '**/protractor.conf.*.js' // protractor config
        ],
        optionalDependencies: false
      }
    ],

    // 禁止使用带有var或let的可变导出。
    // ENG:Forbid mutable exports
    'import/no-mutable-exports': 'error',

    // Module systems:
    // classify
    // 禁止AMD require/define方式导入
    // ENG:disallow AMD require/define
    'import/no-amd': 'error',
    // @off
    // ENG:disallow require()
    'import/no-commonjs': 'off',

    // @off
    // ENG:No Node.js builtin modules
    // TODO: enable?
    'import/no-nodejs-modules': 'off',

    // Style guide
    // classify
    // import 必须在非导入语句 的前面。绝对路径的导入要在相对路径的前面
    // ENG:disallow non-import statements appearing before import statements
    'import/first': 'error',

    // @off
    // 请使用import/first
    // ENG:disallow non-import statements appearing before import statements
    // deprecated: use `import/first`
    'import/imports-first': 'off',

    // 禁止多次导入同一个已解析路径
    // ENG:disallow duplicate imports
    'import/no-duplicates': 'error',

    // @off
    // ENG:disallow namespace imports
    // TODO: enable?
    'import/no-namespace': 'off',

    // 确保在导入路径中一致使用文件扩展名,但其中js，mjs，jsx建议忽略
    // ENG:Ensure consistent use of file extension within the import path
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never'
      }
    ],

    // @fixable
    // import语句应该遵循一定的顺序。node内建模块、第三方库模块、内部定义的模块文件
    // ENG:ensure absolute imports are above relative imports and that unassigned imports are ignored
    // TODO: enforce a stricter convention in module import order?
    'import/order': ['error', { groups: [['builtin', 'external', 'internal']] }],

    // @fixable
    // import / Require() 后要空出一个空行
    // ENG:Require a newline after the last import/require in a group
    'import/newline-after-import': 'error',

    // @off
    // ENG:Require modules with a single export to use a default export
    'import/prefer-default-export': 'off',

    // @off
    // ENG:Restrict which files can be imported in a given folder
    'import/no-restricted-paths': 'off',

    // @off
    // ENG:Forbid modules to have too many dependencies
    'import/max-dependencies': ['off', { max: 10 }],

    // 禁止使用绝对路径导入模块
    // ENG:Forbid import of modules using absolute paths
    'import/no-absolute-path': 'error',

    // 禁止使用表达式调用require()
    // ENG:Forbid require() calls with expressions
    'import/no-dynamic-require': 'error',

    // @off
    // ENG:prevent importing the submodules of other modules
    'import/no-internal-modules': [
      'off',
      {
        allow: []
      }
    ],

    // @off
    // ENG:Warn if a module could be mistakenly parsed as a script by a consumer
    // leveraging Unambiguous JavaScript Grammar
    // this should not be enabled until this proposal has at least been *presented* to TC39.
    // At the moment, it's not a thing.
    'import/unambiguous': 'off',

    // 禁止在导入中使用Webpack加载程序语法。
    // ENG:Forbid Webpack loader syntax in imports
    'import/no-webpack-loader-syntax': 'error',

    // @off
    // ENG:Prevent unassigned imports
    // importing for side effects is perfectly acceptable, if you need side effects.
    'import/no-unassigned-import': 'off',

    // 禁止把 default 作为本地命名导入
    // ENG:Prevent importing the default as if it were named
    'import/no-named-default': 'error',

    // @off
    // ENG:Reports if a module's default export is unnamed
    'import/no-anonymous-default-export': [
      'off',
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowLiteral: false,
        allowObject: false
      }
    ],

    // @off
    // ENG:This rule enforces that all exports are declared at the bottom of the file.
    // TODO: enable?
    'import/exports-last': 'off',

    // @off
    // ENG:Reports when named exports are not grouped together in a single export declaration
    // or when multiple assignments to CommonJS module.exports or exports object are present
    // in a single file.
    'import/group-exports': 'off',

    // @off
    // ENG:forbid default exports. this is a terrible rule, do not use it.
    'import/no-default-export': 'off',

    // 禁止模块导入自己
    // ENG:Forbid a module from importing itself
    'import/no-self-import': 'error',

    // 禁止模块引用造成的循环。
    // ENG:Forbid cyclical dependencies between modules
    'import/no-cycle': ['error', { maxDepth: Infinity }],

    // 使用此规则可防止导入和require语句中出现不必要的路径段。
    // ENG:Ensures that there are no useless path segments
    'import/no-useless-path-segments': 'error',

    // @off
    // ENG:dynamic imports require a leading comment with a webpackChunkName
    'import/dynamic-import-chunkname': [
      'off',
      {
        importFunctions: [],
        webpackChunknameFormat: '[0-9a-zA-Z-_/.]+'
      }
    ],

    // @off
    // ENG:Use this rule to prevent imports to folders in relative parent paths.
    'import/no-relative-parent-imports': 'off'
  }
}
