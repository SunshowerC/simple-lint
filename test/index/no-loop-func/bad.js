// bad 引用了循环体内定义的变量而造成了代码没有按预期工作
let i = 10
let a
for (i = 10; i > 5; i--) {
  (function () {
    return i
  }())
}
while (i) {
  a = function () {
    return i
  }
  a()
}
