// good 链式调用注意换行
// 同行内四个链式调用不会报错, 但是prettier会报错
_.chain({})
  .map(foo)
  .filter(bar)

/* eslint-disable-next-line */
_.chain({}).map(foo).filter(bar)
