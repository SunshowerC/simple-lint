// bad
/* eslint import/no-unresolved: ['error', { commonjs: true, caseSensitive: true }] */
import x from './foo' // reports if './foo' cannot be resolved on the filesystem

const { default: x } = require('./foo') // reported if './foo' is not found
