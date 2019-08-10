// bad 禁止：getter、setter、generator、class的constructor是空函数
const a = function* () {}
const obj = {
  b: function* () {}
}
const obj = {
  get c() {}
}
class E {
  constructor() {}
  get f() {}
  set g(value) {}
}

function* a() {}