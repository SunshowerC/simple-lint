// good
function fooa() {
  return doSomething()
}
function foob() {
  switch (bar) {
    case 1:
      doSomething()
      return
    default:
      doSomethingElse()
  }
}
function fooc() {
  for (const a of bar) {
    return
  }
}
