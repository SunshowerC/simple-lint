// bad super之前用了 this
class A extends B {
  constructor() {
    this.a = 0
    super()
  }
}
