// bad case 中缺少阻止fall through现象的语句
switch (foo) {
  case 1:
    doSomething()
  case 2:
    doSomething()
    // no default
}