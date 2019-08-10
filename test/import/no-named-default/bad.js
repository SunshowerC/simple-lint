// bad

// foo.js
export default 'foo'
export const bar = 'baz'

// import { default as foo } from './foo'
import { default as foo, bar } from './foo'
