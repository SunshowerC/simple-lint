// bad
/* eslint import/no-unresolved: 'error' */

// ./baz.js
// will follow 'jsnext:main', if available
import { dontCreateStore } from 'redux'
import { notFoo } from './foo'

// ES7 proposal
export { notFoo as defNotBar } from './foo'

// ./foo.js
export const foo = "I'm so foo"
