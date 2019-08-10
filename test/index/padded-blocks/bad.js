// bad
// prettier 也会报错
// 块代码内禁止填充前后空行
if (a) {

  b()

}
// class内禁止填充前后空行
class A {

  constructor(){
    // something
    a = 1
  }

}
// switch内禁止填充前后空行
switch (a) {

  case 0: foo()

  // no default

}
