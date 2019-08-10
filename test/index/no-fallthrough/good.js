// good case中有必要的return | break | throw
// 或者标有注释“falls through“表示允许 falls through 的现象
switch (foo) {
  case 1:
    doSomething()
    break
  // return;
  // throw new Error('xx');
  case 2:
    doSomething()
  // no default
}
switch (foo) {
  case 1:
    doSomething()
  // falls through
  case 2:
    doSomething()
  // no default
}
