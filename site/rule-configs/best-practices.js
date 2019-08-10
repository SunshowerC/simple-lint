module.exports = {
  rules: {
    // @off
    // 强制getter/setter相互对应
    // ENG:enforces getter/setter pairs in objects
    'accessor-pairs': 'off',

    // 数组的方法出了 forEach 之外， 回调函数必须有return
    // ENG:enforces return statements in callbacks of array's methods
    'array-callback-return': ['error', { allowImplicit: true }],

    // 将 var 定义的变量视为块作用域，禁止在块外使用
    // ENG:treat var statements as if they were block scoped
    'block-scoped-var': 'error',

    // @off
    // 禁止函数的循环复杂度超过 11
    // ENG:specify the maximum cyclomatic complexity allowed in a program
    complexity: ['off', 11],

    // @off
    // 在类的非静态方法中，必须存在对 this 的引用
    // ENG:enforce that class methods use "this"
    'class-methods-use-this': 'off',

    // @off
    // 禁止函数在不同分支返回不同类型的值
    // ENG:require return statements to either always or never specify values
    'consistent-return': 'off',

    // @fixable if 后面必须要有 {，除非是单行 if
    // ENG:specify curly brace conventions for all control statements
    curly: ['error', 'multi-line'],

    // switch 语句必须有 default 或者是 // no default 的注释
    // ENG:require default case in switch statements
    'default-case': ['error', { commentPattern: '^no default$' }],

    // @fixable 链式调用的时候，点号必须放在第二行开头处，禁止放在第一行结尾处
    // ENG:enforces consistent newlines before or after dots
    'dot-location': ['error', 'property'],

    // @fixable 禁止出现 foo['bar']，必须写成 foo.bar
    // ENG:encourages use of dot notation whenever possible
    'dot-notation': ['error', { allowKeywords: true }],

    // @fixable 必须使用 === 或 !==，禁止使用 == 或 !=，与 null 比较时除外
    // ENG:require the use of === and !==
    eqeqeq: ['error', 'always', { null: 'ignore' }],

    // for in 内部必须有 hasOwnProperty
    // ENG:make sure for-in loops have an if statement
    'guard-for-in': 'error',

    // @off
    // 每个文件中禁止声明超过1个类
    // ENG:enforce a maximum number of classes per file
    // TODO: semver-major (eslint 5): enable
    'max-classes-per-file': ['off', 1],

    // 不建议使用 alert、confirm、prompt，会报warning
    // ENG:disallow the use of alert, confirm, and prompt
    'no-alert': 'warn',

    // 禁止使用 caller 或 callee
    // ENG:disallow use of arguments.caller or arguments.callee
    'no-caller': 'error',

    // switch 的 case 内有变量定义的时候，必须使用大括号将 case 内变成一个代码块
    // ENG:disallow lexical declarations in case/default clauses
    'no-case-declarations': 'error',

    // 生产环境下禁止使用 debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // 禁止在正则表达式中出现形似除法操作符的开头，如 let a = /=foo/
    // @off 有代码高亮的话，在阅读这种代码时，也完全不会产生歧义或理解上的困难
    // ENG:disallow division operators explicitly at beginning of regular expression
    'no-div-regex': 'off',

    // @fixable 禁止在 else 内使用 return，必须改为提前结束,禁止使用else if语法
    // ENG:disallow else after a return in an if
    'no-else-return': ['error', { allowElseIf: false }],

    // 禁止有空函数，除非是将一个空函数设置为某个项的默认值
    // 允许：箭头函数、普通函数、类方法、对象内函数可以是空函数。
    // 禁止：getter、setter、generator、class的constructor是空函数
    // ENG:disallow empty functions, except for standalone funcs/arrows
    'no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions', 'functions', 'methods']
      }
    ],

    // 禁止解构中出现空 {} 或 []
    // ENG:disallow empty destructuring patterns
    'no-empty-pattern': 'error',

    // 禁止使用 foo == null 或 foo != null，必须使用 foo === null 或 foo !== null
    // @off foo == null 用于判断 foo 不是 undefined 并且不是 null，比较常用，故允许此写法
    // ENG:disallow comparisons to null without a type-checking operator
    'no-eq-null': 'off',

    // 禁止使用 eval
    // ENG:disallow use of eval()
    'no-eval': 'error',

    // 禁止修改原生对象
    // ENG:disallow adding to native types
    'no-extend-native': 'error',

    // @fixable 禁止出现没必要的 bind
    // ENG:disallow unnecessary function binding
    'no-extra-bind': 'error',

    // @fixable 禁止出现没必要的 label
    // ENG:disallow Unnecessary Labels
    'no-extra-label': 'error',

    // switch 的 case 内必须有 break, return 或 throw来阻止switch case的“fall through”现象,
    // 或者标有注释“falls through“表示允许 falls through 的现象
    // ENG:disallow fallthrough of case statements
    'no-fallthrough': 'error',

    // @fixable 表示小数时，禁止省略 0，比如 .5
    // ENG:disallow the use of leading or trailing decimal points in numeric literals
    'no-floating-decimal': 'error',

    // 禁止对全局变量赋值
    // ENG:disallow reassignments of native objects or read-only globals
    'no-global-assign': ['error', { exceptions: [] }],

    // @off
    // 禁止修改只读全局变量
    // 废弃于eslint v3.3.0版本，no-global-assign作为取代
    // ENG:deprecated in favor of no-global-assign
    'no-native-reassign': 'off',

    // @off
    // @fixable 禁止使用 !! ~ 等难以理解的运算符
    // ENG:disallow implicit type conversions
    'no-implicit-coercion': [
      'off',
      {
        boolean: false,
        number: true,
        string: true,
        allow: []
      }
    ],

    // @off
    // 禁止在全局作用域下定义变量或申明函数
    // ENG:disallow var and named functions in global scope
    'no-implicit-globals': 'off',

    // 禁止在 setTimeout 或 setInterval 中传入字符串，如 setTimeout('alert("Hi!")', 100);
    // ENG:disallow use of eval()-like methods
    'no-implied-eval': 'error',

    // 禁止在类之外的地方使用 this
    // @off this 的使用很灵活，事件回调中可以表示当前元素，函数也可以先用 this，等以后被调用的时候再 call
    // ENG:disallow this keywords outside of classes or class-like objects
    'no-invalid-this': 'off',

    // 禁止使用 __iterator__
    // ENG:disallow usage of __iterator__ property
    'no-iterator': 'error',

    // 禁止使用 label
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

    // 禁止使用没必要的 {} 作为代码块
    // ENG:disallow unnecessary nested blocks
    'no-lone-blocks': 'error',

    // 禁止在循环内的函数中引用了循环体内var定义的变量而造成代码并没有按预期工作。
    // ENG:disallow creation of functions within loops
    'no-loop-func': 'error',

    // @off
    // 禁止使用 magic numbers，确保特殊的数字被声明为常量
    // ENG:disallow magic numbers
    'no-magic-numbers': [
      'off',
      {
        ignore: [],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false
      }
    ],

    // @fixable 禁止出现连续的多个空格
    // ENG:disallow use of multiple spaces
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: false
      }
    ],

    // 禁止使用 \ 来换行字符串
    // ENG:disallow use of multiline strings
    'no-multi-str': 'error',

    // @off
    // 禁止直接 new 一个类而不赋值
    // ENG:disallow use of new operator when not part of the assignment or comparison
    'no-new': 'off',

    // 禁止使用 new Function，比如 let x = new Function("a", "b", "return a + b");
    // ENG:disallow use of new operator for Function object
    'no-new-func': 'error',

    // 禁止使用 new 来生成 String, Number 或 Boolean
    // ENG:disallows creating new instances of String, Number, and Boolean
    'no-new-wrappers': 'error',

    // 禁止使用 0 开头的数字表示八进制数
    // ENG:disallow use of (old style) octal literals
    'no-octal': 'error',

    // 禁止使用八进制的转义符
    // ENG:disallow use of octal escape sequences in string literals, such as
    // var foo = 'Copyright \251';
    'no-octal-escape': 'error',

    // @off
    // 禁止对函数的参数重新赋值
    // ENG:disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': 'off',

    // 禁止使用 __proto__
    // ENG:disallow usage of __proto__ property
    'no-proto': 'error',

    // 禁止重复定义变量
    // ENG:disallow declaring the same variable more then once
    'no-redeclare': 'error',

    // 禁止使用指定的对象属性
    // ENG:disallow certain object properties
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated'
      },
      {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead'
      },
      {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead'
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead'
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead'
      },
      {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead'
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead'
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.'
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.'
      },
      {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.'
      }
    ],

    // 禁止在 return 语句里赋值
    // ENG:disallow use of assignment in return statement
    'no-return-assign': ['error', 'always'],

    // 禁止在 return 语句里使用 await
    // ENG:disallow redundant `return await`
    'no-return-await': 'error',

    // 禁止出现 location.href = 'javascript:void(0)';
    // ENG:disallow use of `javascript:` urls.
    'no-script-url': 'error',

    // 禁止将自己赋值给自己
    // ENG:disallow self assignment
    // TODO: semver-major: props -> true
    'no-self-assign': [
      'error',
      {
        props: false
      }
    ],

    // 禁止将自己与自己比较
    // ENG:disallow comparisons where both sides are exactly the same
    'no-self-compare': 'error',

    // 禁止使用逗号操作符
    // ENG:disallow use of comma operator
    'no-sequences': 'error',

    // 禁止 throw 字面量，必须 throw 一个 Error 对象
    // ENG:restrict what can be thrown as an exception
    'no-throw-literal': 'error',

    // @off
    // 循环内必须对循环条件的变量有修改
    // ENG:disallow unmodified conditions of loops
    'no-unmodified-loop-condition': 'off',

    // @off
    // 禁止无用的表达式
    // ENG:disallow usage of expressions in statement position
    'no-unused-expressions': [
      'off',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false
      }
    ],

    // @fixable 禁止出现没用的 label
    // ENG:disallow unused labels
    'no-unused-labels': 'error',

    // @off
    // 禁止出现没必要的 call 或 apply
    // ENG:disallow unnecessary .call() and .apply()
    'no-useless-call': 'off',

    // 禁止出现没必要的字符串连接
    // ENG:disallow useless string concatenation
    'no-useless-concat': 'error',

    // 禁止出现没必要的转义
    // ENG:disallow unnecessary string escaping
    'no-useless-escape': 'error',

    // @fixable 禁止没必要的 return
    // ENG:disallow redundant return; keywords
    'no-useless-return': 'error',

    // 禁止使用 void
    // ENG:disallow use of void operator
    'no-void': 'error',

    // @off
    // 禁止注释开头中出现 TODO 和 FIXME 和 XXX
    // ENG:disallow usage of configurable warning terms in comments: e.g. todo
    'no-warning-comments': ['off', { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],

    // 禁止使用 with
    // ENG:disallow use of the with statement
    'no-with': 'error',

    // Promise 的 reject 中必须传入 Error 对象，而不是字面量，允许promise.reject()不带参数
    // ENG:require using Error objects as Promise rejection reasons
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

    // parseInt 必须传入第二个参数
    // ENG:require use of the second argument for parseInt()
    radix: 'error',

    // @off async function 中没有 await 的写法很常见，比如 koa 的示例中就有这种用法
    // async 函数中必须存在 await 语句
    // ENG:require `await` in `async function` (note: this is a horrible rule that should never be used)
    'require-await': 'off',

    // @off
    // 正则表达式中必须使用 u 标志
    // ENG:Enforce the use of u flag on RegExp
    'require-unicode-regexp': 'off',

    // var 必须在作用域的最前面
    // ENG:requires to declare all vars on top of their containing scope
    'vars-on-top': 'error',

    // @fixable 立即执行的函数必须符合如下格式 (function () { return { y: 1 };})()
    // ENG:require immediate function invocation to be wrapped in parentheses
    'wrap-iife': ['error', 'inside', { functionPrototypeMethods: false }],

    // @fixable 必须使用 if (foo === 5) 而不是 if (5 === foo)
    // ENG:require or disallow Yoda conditions
    yoda: 'error'
  }
}
