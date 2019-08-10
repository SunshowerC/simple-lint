// good 单行 if/while 可以不要 {}
if (foo) console.log(foo)
while (foo && bar) baz()

// good if/while 多行后有 {
if (foo) {
  console.log(foo)
}
while (foo) {
  console.log(foo--)
}
