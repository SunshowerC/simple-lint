// good
// ./bar.js
// node_modules without jsnext:main are not analyzed by default
// 可以结合 import/ignore 设置忽略报错的引入模块，如： node_modules
import { SomeNonsenseThatDoesntExist } from 'react'
import { foo } from './foo'

export { foo as bar } from './foo'

// ./foo.js
export const foo = "I'm so foo"
