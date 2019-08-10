// good 没有引用循环体内定义的变量或者即使引用了也没有造成歧义
let i
let a
for (i = 10; i; i--) {
  a = function() {}
  a()
}
for (let j = 10; i; i--) {
  a = function() {
    return j
  }
  a()
}
