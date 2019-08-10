// bad 重复导出同一名称或者defaults

export default class MyClass { /*...*/ } // Multiple default exports.
function makeClass() { return new MyClass(...arguments) }
export default makeClass // Multiple default exports.

// or

export const foo = function () { /*...*/ } // Multiple exports of name 'foo'.
function bar() { /*...*/ }
export { bar as foo } // Multiple exports of name 'foo'.
