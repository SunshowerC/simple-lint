// bad 链式调用超出了4个没有换行
// prettier/prettier 要求每个链式调用都换行
_.chain({}).map(foo).filter(bar).map(foo).map(foo)

// 为什么要在eslintrc中特地加上这个字段才会生效
