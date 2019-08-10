// bad 无意义的constructor
class A {
  constructor () {
  }
}

class A extends B {
  constructor (...args) {
    super(...args)
  }
}
