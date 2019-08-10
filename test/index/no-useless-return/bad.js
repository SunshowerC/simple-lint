// bad 冗余的return
function foo() {
  return
}
function foo() {
  doSomething()
  return
}
function foo() {
  if (condition) {
    bar()
    return
  }
}

function foo() {
  switch (bar) {
    case 1:
      doSomething()
      break
    default:
      doSomethingElse()
      return
  }
}
