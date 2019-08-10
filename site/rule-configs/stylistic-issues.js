module.exports = {
  rules: {
    // @off
    // @fixable 打开之后和关闭数组括号之前强制执行换行符。
    // ENG:enforce line breaks after opening and before closing array brackets
    // TODO: enable? semver-major
    'array-bracket-newline': ['off', 'consistent'], // object option alternative: { multiline: true, minItems: 3 }

    // @off
    // @fixable 配置数组的元素之间的换行格式
    // ENG:enforce line breaks between array elements
    // TODO: enable? semver-major
    'array-element-newline': ['off', { multiline: true, minItems: 3 }],

    // @fixable 数组的括号内的前后禁止有空格
    // ENG:enforce spacing inside array brackets
    'array-bracket-spacing': ['error', 'never'],

    // @fixable 代码块如果在一行内，那么大括号内的首尾必须有空格，比如 function () { alert('Hello') }
    // ENG:enforce spacing inside single-line blocks
    'block-spacing': ['error', 'always'],

    // @fixable 块强制执行一致的大括号样式。
    // 允许块的打开和关闭括号位于同一行
    // ENG:enforce one true brace style
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // @off
    // 变量名必须是 camelcase 风格的
    // ENG:require camel case names
    // TODO: semver-major (eslint 5): add ignoreDestructuring: false option
    camelcase: 'off',

    // @off
    // @fixable 注释的首字母必须大写
    // ENG:enforce or disallow capitalization of the first letter of a comment
    'capitalized-comments': [
      'off',
      'never',
      {
        line: {
          ignorePattern: '.*',
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true
        },
        block: {
          ignorePattern: '.*',
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true
        }
      }
    ],

    // @fixable 禁止使用尾随逗号
    // ENG:require trailing commas in multiline object literals
    'comma-dangle': ['error', 'never'],

    // @fixable 逗号前禁止有空格，逗号后必须要有空格
    // ENG:enforce spacing before and after comma
    'comma-spacing': ['error', { before: false, after: true }],

    // @fixable 禁止在行首写逗号
    // ENG:enforce one true comma style
    'comma-style': [
      'error',
      'last',
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
          NewExpression: false
        }
      }
    ],

    // @fixable 用作对象的计算属性时，中括号内的首尾禁止有空格
    // ENG:disallow padding inside computed properties
    'computed-property-spacing': ['error', 'never'],

    // @off
    // 限制 this 的别名
    // ENG:enforces consistent naming when capturing the current execution context
    'consistent-this': 'off',

    // @fixable 文件最后一行必须有一个空行
    // ENG:enforce newline at the end of file, with no multiple empty lines
    'eol-last': ['error', 'always'],

    // @fixable 函数名和执行它的括号之间禁止有空格
    // ENG:enforce spacing between functions and their invocations
    'func-call-spacing': ['error', 'never'],

    // @off
    // 函数赋值给变量的时候，函数名必须与变量名一致
    // ENG:requires function names to match the name of the variable or property to which they are
    // assigned
    // TODO: semver-major (eslint 5): add considerPropertyDescriptor: true
    'func-name-matching': [
      'off',
      'always',
      {
        includeCommonJSModuleExports: false
      }
    ],

    // @off
    // 函数必须有名字
    // ENG:require function expressions to have a name
    'func-names': 'off',

    // @off
    // 必须只使用函数声明或只使用函数表达式
    // ENG:enforces use of function declarations or expressions
    // TODO: enable
    'func-style': ['off', 'expression'],

    // @fixable 在函数括号内强制执行一致的换行符
    // ENG:enforce consistent line breaks inside function parentheses
    'function-paren-newline': ['error', 'consistent'],

    // @off
    // 禁止使用指定的标识符
    // ENG:Blacklist certain identifiers to prevent them being used
    'id-blacklist': 'off',

    // @off
    // 限制变量名长度
    // ENG:this option enforces minimum and maximum identifier lengths
    // (variable names, property names etc.)
    'id-length': 'off',

    // @off
    // 限制变量名必须匹配指定的正则表达式
    // ENG:require identifiers to match the provided regular expression
    'id-match': 'off',

    // @fixable 使用隐式返回强制执行箭头函数体的位置
    // 在箭头函数体之前禁止换行。
    // ENG:Enforce the location of arrow function bodies with implicit returns
    'implicit-arrow-linebreak': ['error', 'beside'],

    // @fixable 一个缩进必须用2个空格替代
    // ENG:this option sets a specific tab width for your code
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        // MemberExpression: null,
        FunctionDeclaration: {
          parameters: 1,
          body: 1
        },
        FunctionExpression: {
          parameters: 1,
          body: 1
        },
        CallExpression: {
          arguments: 1
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
        ignoredNodes: [
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild'
        ],
        ignoreComments: false
      }
    ],

    // @off
    // @fixable jsx 中的属性必须用双引号
    // ENG:specify whether double or single quotes should be used in JSX attributes
    'jsx-quotes': ['off', 'prefer-double'],

    // @fixable 对象字面量中冒号前面禁止有空格，后面必须有空格
    // ENG:enforces spacing between keys and values in object literal properties
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],

    // @fixable 关键字前后必须有空格
    // return,throw,case 后面有空格
    // ENG:require a space before & after certain keywords
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {
          return: { after: true },
          throw: { after: true },
          case: { after: true }
        }
      }
    ],

    // @off
    // 单行注释必须写在上一行
    // ENG:enforce position of line comments
    // TODO: enable?
    'line-comment-position': [
      'off',
      {
        position: 'above',
        ignorePattern: '',
        applyDefaultPatterns: true
      }
    ],

    // @fixable 限制换行符为 LF
    // ENG:disallow mixed 'LF' and 'CRLF' as linebreaks
    'linebreak-style': ['error', 'unix'],

    // @off
    // @fixable 要求或禁止类成员之间的空行
    // ENG:require or disallow an empty line between class members
    'lines-between-class-members': ['off', 'always', { exceptAfterSingleLine: false }],

    // @off
    // @fixable 注释前后必须有空行
    // ENG:enforces empty lines around comments
    'lines-around-comment': 'off',

    // @fixable 强制执行指令前后的空白换行符。
    // 此规则在ESLint v4.0.0 中已弃用，并由padding-line-between-statements规则替换。
    // ENG:require or disallow newlines around directives
    'lines-around-directive': [
      'error',
      {
        before: 'always',
        after: 'always'
      }
    ],

    // @off
    // 限制代码块嵌套的深度
    // ENG:specify the maximum depth that blocks can be nested
    'max-depth': ['off', 4],

    // 限制一行的长度 为 100
    // 指定制表符的字符宽度 为 2
    // 此规则忽略 url、字符串、模版字符串、正则表达式的长度
    // ENG:specify the maximum length of a line in your program
    'max-len': [
      'error',
      100,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ],

    // @off
    // 限制一个文件最多的行数
    // ENG:specify the max number of lines in a file
    'max-lines': [
      'off',
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true
      }
    ],

    // @off
    // 每个函数的最大行数
    // ENG:enforce a maximum function length
    'max-lines-per-function': [
      'off',
      {
        max: 50,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true
      }
    ],

    // @off
    // 限制函数嵌套层数
    // ENG:specify the maximum depth callbacks can be nested
    'max-nested-callbacks': 'off',

    // @off
    // 限制函数参数数量
    // ENG:limits the number of parameters that can be used in the function declaration.
    'max-params': ['off', 3],

    // @off
    // 限制函数块中的语句数量
    // ENG:specify the maximum number of statement allowed in a function
    'max-statements': ['off', 10],

    // @off
    // 限制一行中的语句数量
    // ENG:restrict the number of statements per line
    'max-statements-per-line': ['off', { max: 1 }],

    // @off
    // 为多行注释强制执行特定样式
    // ENG:enforce a particular style for multiline comments
    'multiline-comment-style': ['off', 'starred-block'],

    // @off
    // 三元表达式必须得换行
    // ENG:require multiline ternary
    // TODO: enable?
    'multiline-ternary': ['off', 'never'],

    // new 后面的类名必须首字母大写
    // ENG:require a capital letter for constructors
    'new-cap': [
      'error',
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List']
      }
    ],

    // @fixable new 后面的类必须有小括号
    // ENG:disallow the omission of parentheses when invoking a constructor with no arguments
    'new-parens': 'error',

    // @off
    // 在变量声明后要求或禁止空行
    // ENG:allow/disallow an empty newline after var statement
    'newline-after-var': 'off',

    // @off
    // 在return语句之前需要一个空行
    'newline-before-return': 'off',

    // 链式调用必须换行, 允许链达到4层
    // ENG:enforces new line after each method call in the chain to make it
    // more readable and easy to maintain
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

    // 禁止使用 Array 构造函数
    // ENG:disallow use of the Array constructor
    'no-array-constructor': 'error',

    // @off
    // 禁止使用位运算
    // ENG:disallow use of bitwise operators
    'no-bitwise': 'off',

    // @off
    // 禁止使用 continue
    // ENG:disallow use of the continue statement
    'no-continue': 'off',

    // @off
    // 禁止在代码后添加内联注释
    // ENG:disallow comments inline after code
    'no-inline-comments': 'off',

    // @fixable 禁止 else 中只有一个单独的 if
    // ENG:disallow if as the only statement in an else block
    'no-lonely-if': 'error',

    // 禁止混用不同的操作符，比如 let foo = a && b < 0 || c > 0 || d + 1 === 0
    // ENG:disallow un-paren'd mixes of different operators
    'no-mixed-operators': [
      'error',
      {
        // the list of arthmetic groups disallows mixing `%` and `**`
        // with other arithmetic operators.
        groups: [
          ['%', '**'],
          ['%', '+'],
          ['%', '-'],
          ['%', '*'],
          ['%', '/'],
          ['**', '+'],
          ['**', '-'],
          ['**', '*'],
          ['**', '/'],
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof']
        ],
        allowSamePrecedence: false
      }
    ],

    // 禁止混用空格和缩进
    // ENG:disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 'error',

    // 禁止连续赋值，比如 a = b = c = 5
    // ENG:disallow use of chained assignment expressions
    'no-multi-assign': ['error'],

    // @fixable 禁止出现超过2行的连续空行
    // ENG:disallow multiple empty lines and only one newline at the end
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],

    // @off
    // 禁止 if 里面有否定的表达式，比如：
    // if (a !== b) {
    //     doSomething();
    // } else {
    //     doSomethingElse();
    // }
    // ENG:disallow negated conditions
    'no-negated-condition': 'off',

    // 禁止使用嵌套的三元表达式，比如 a ? b : c ? d : e
    // ENG:disallow nested ternary expressions
    'no-nested-ternary': 'error',

    // 禁止直接 new Object
    // ENG:disallow use of the Object constructor
    'no-new-object': 'error',

    // @off
    // 禁止使用 ++ 或 --
    // ENG:disallow use of unary operators, ++ and --
    'no-plusplus': 'off',

    // @off
    // 禁止使用特定的语法
    // ENG:disallow certain syntax forms
    'no-restricted-syntax': [
      'off',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
      },
      {
        selector: 'ForOfStatement',
        message:
          'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.'
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
      }
    ],

    // @fixable 禁止函数标识符与其应用程序之间的间距
    // 此规则在ESLint v3.3.0 中已弃用，并由 func-call-spacing 规则替换。
    // ENG:disallow space between function identifier and application
    'no-spaced-func': 'error',

    // 禁止使用 tabs
    // ENG:disallow tab characters entirely
    'no-tabs': 'error',

    // @off
    // 禁止使用三元表达式
    // ENG:disallow the use of ternary operators
    'no-ternary': 'off',

    // @fixable 禁止行尾有空格
    // ENG:disallow trailing whitespace at the end of lines
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: false,
        ignoreComments: false
      }
    ],

    // @off
    // 禁止变量名出现下划线
    // ENG:disallow dangling underscores in identifiers
    'no-underscore-dangle': [
      'off',
      {
        allow: [],
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: true
      }
    ],

    // @fixable 当存在更简单的替代方案时，禁止使用三元运算符。
    // 禁止使用条件表达式作为默认赋值模式，如 let a = x ? x : 1
    // 必须使用 !a 替代 a ? false : true
    // ENG:disallow the use of Boolean literals in conditional expressions
    // also, prefer `a || b` over `a ? a : b`
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // @fixable 禁止属性前有空格，比如 foo. bar()
    // ENG:disallow whitespace before properties
    'no-whitespace-before-property': 'error',

    // @fixable 禁止 if 后面不加大括号而写两行代码
    // ENG:enforce the location of single-line statements
    'nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],

    // @fixable 对象字面量只有一行时，大括号内的首尾必须有空格
    // ENG:require padding inside curly braces
    'object-curly-spacing': ['error', 'always'],

    // @fixable 大括号内的首尾必须有换行
    // ENG:enforce line breaks between braces
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          minProperties: 4,
          multiline: true,
          consistent: true
        },
        ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
        ImportDeclaration: {
          minProperties: 4,
          multiline: true,
          consistent: true
        },
        ExportDeclaration: {
          minProperties: 4,
          multiline: true,
          consistent: true
        }
      }
    ],

    // @fixable 对象字面量内的属性每行必须只有一个,或者所有属性在同一行
    // ENG:enforce "same line" or "multiple line" on object properties.
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true
      }
    ],

    // 禁止变量申明时用逗号一次申明多个
    // ENG:allow just one var statement per function
    'one-var': ['error', 'never'],

    // @fixable 变量申明必须每行一个
    // 遵守'one-var'规则即可
    // ENG:require a newline around variable declaration
    'one-var-declaration-per-line': ['error', 'always'],

    // @fixable 必须使用 x += y 而不是 x = x + y
    // 需要尽可能使用赋值运算符
    // ENG:require assignment operator shorthand where possible or prohibit it entirely
    'operator-assignment': ['error', 'always'],

    // @fixable 需要换行的时候，操作符必须放在行首，比如：
    // let foo = 1
    //        + 2
    // ENG:Requires operator at the beginning of the line in multiline statements
    'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],

    // @fixable
    // 块语句中禁止要空行
    // ENG:disallow padding within blocks
    'padded-blocks': ['error', { blocks: 'never', classes: 'never', switches: 'never' }],

    // @off
    // @fixable 限制语句之间的空行规则，比如变量定义完之后必须要空行
    // ENG:Require or disallow padding lines between statements
    'padding-line-between-statements': 'off',

    // @off
    // ENG:Prefer use of an object spread over Object.assign
    // TODO: semver-major (eslint 5): enable
    'prefer-object-spread': 'off',

    // @fixable 对象字面量的键名禁止用引号括起来
    // ENG:require quotes around object literal property names
    'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

    // @fixable 必须使用单引号，禁止使用双引号
    // ENG:specify whether double or single quotes should be used
    quotes: ['error', 'single', { avoidEscape: true }],

    // @off
    // 必须使用 jsdoc 风格的注释
    // ENG:do not require jsdoc
    'require-jsdoc': 'off',

    // @fixable 结尾禁止有分号
    // ENG:require or disallow use of semicolons instead of ASI
    semi: ['error', 'never'],

    // @fixable 一行有多个语句时，分号前面禁止有空格，分号后面必须有空格
    // ENG:enforce spacing before and after semicolons
    'semi-spacing': ['error', { before: false, after: true }],

    // @fixable 分号必须写在行首
    // ENG:Enforce location of semicolons
    'semi-style': ['error', 'first'],

    // @off
    // 对象字面量的键名必须排好序
    // ENG:requires object keys to be sorted
    'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],

    // @off
    // 变量申明必须排好序
    // ENG:sort variables within the same declaration block
    'sort-vars': 'off',

    // @fixable if, function 等的大括号之前必须要有空格，比如 if (a) {
    // ENG:require or disallow space before blocks
    'space-before-blocks': 'error',

    // @fixable
    // 函数的小括号之前禁止要有空格
    // 异步箭头函数的小括号之前必须要有空格
    // ENG:require or disallow space before function opening parenthesis
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],

    // @fixable 小括号内的首尾禁止有空格
    // ENG:require or disallow spaces inside parentheses
    'space-in-parens': ['error', 'never'],

    // @fixable 操作符左右必须有空格，比如 let sum = 1 + 2;
    // ENG:require spaces around operators
    'space-infix-ops': 'error',

    // @fixable new, typeof 等后面必须有空格，++, -- 等禁止有空格，比如：
    // let foo = new Person();
    // bar = bar++;
    // ENG:Require or disallow spaces before/after unary operators
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
        overrides: {}
      }
    ],

    // @fixable 注释的斜线或 * 后必须有空格
    // ENG:require or disallow a space immediately following the // or /* in a comment
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: ['-', '+'],
          markers: ['=', '!'] // space here to support sprockets directives
        },
        block: {
          exceptions: ['-', '+'],
          markers: ['=', '!'], // space here to support sprockets directives
          balanced: true
        }
      }
    ],

    // @fixable case 的冒号前禁止有空格，冒号后必须有空格
    // ENG:Enforce spacing around colons of switch statements
    'switch-colon-spacing': ['error', { after: true, before: false }],

    // @fixable 模版字符串的 tag 之后禁止有空格，比如 tag`Hello World`
    // ENG:Require or disallow spacing between template tags and their literals
    'template-tag-spacing': ['error', 'never'],

    // @fixable 文件开头禁止有 BOM
    // ENG:require or disallow the Unicode Byte Order Mark
    'unicode-bom': ['error', 'never'],

    // @off
    // @fixable 正则表达式必须有括号包起来
    // ENG:require regex literals to be wrapped in parentheses
    'wrap-regex': 'off'
  }
}
