// bad 解构同名
// 演示需要关闭了 prettier 和 import/no-unresolved
import { foo as foo } from "bar"

export { foo as foo }
export { goo as goo } from "bar"
const { foo: foo } = bar
const { 'foo': foo } = bar
function foo({ bar: bar }) {}
({ foo: foo }) => {}
