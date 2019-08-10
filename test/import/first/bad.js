// bad
/* eslint import/first: 'error' */
import foo from './foo'
// something nonImport
import bar from './bar' // <- reported

// or

import foo from 'foo'
import bar from './bar'

import * as _ from 'lodash' // <- reported
