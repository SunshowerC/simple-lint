// good
/* eslint-disable prettier/prettier */
function foo() { return true }
if (foo) { bar = 0 }

// perfet 根据prettier/prettier，换行是更好的写法
function foo() {
  return true
}
if (foo) {
  bar = 0
}
