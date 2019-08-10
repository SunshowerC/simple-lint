// bad 实际上rule： no-var，以及禁止使用var

/* eslint no-shadow: "error" */
var a = 3
function b() {
  var a = 10
}
