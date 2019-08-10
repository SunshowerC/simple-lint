// bad
// foo.js
export default 'foo'
export const bar = 'baz'

// hello.js
// Caution: `foo` also has a named export `bar`.
import foo from './foo'

const bar = foo.bar // instead: `import {bar} from './foo.js'`

// Caution: `foo` also has a named export `bar`.
import foo from './foo'

const { bar } = foo // instead: `import {bar} from './foo.js'`
