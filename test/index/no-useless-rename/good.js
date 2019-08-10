// good 没有同名解构

import { foo } from 'bar'
import { foo as bar } from 'baz'

const { foo } = bar
const { foo: bar } = baz
const { [foo]: foo } = bar
