// good  Flow type导入与标准导入可以区分开来
import SomeDefaultClass, * as names from './mod'
// Flow `type` import from same module is fine
import type SomeType from './mod'
