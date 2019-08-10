// good 注意else中return的用法，且不能使用else if
function foo() {
  if (error) {
    return 'It failed'
  }
  if (loading) {
    return "It's still loading"
  }
}
// or
function foo() {
  if (x) {
    return y
  }
  return z
}
