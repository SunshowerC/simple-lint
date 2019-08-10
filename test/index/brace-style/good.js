// good 推荐的大括号代码风格，同一行时也被允许。
function foo() {
  return true
}
if (foo) {
  bar()
}
if (foo) bar()
// eslint-disable-next-line
if (foo) { bar() } // 这个规则允许大括号在同一行，但是prettier/prettier中不推荐
