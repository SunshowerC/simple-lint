// good
/* eslint import/first: 'error' */
// 1. node "builtin" modules
import fs from 'fs'
import path from 'path'
// 2. "external" modules
import _ from 'lodash'
import chalk from 'chalk'
// 3. "internal" modules
import foo from './src/foo'
