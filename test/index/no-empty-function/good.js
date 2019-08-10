// good 允许：普通函数、箭头函数、class methods、object里的methods是空函数
const a = function() {}
const b = () => {}
const obj = {
  c() {}
}
function d() {}
class E {
  f() {}
  static g() {}
}
