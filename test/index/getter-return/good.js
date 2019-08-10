// good getter 有返回值
const user = {
  get name() {
    return 'Alex'
  }
}
class User {
  get name() {
    return this.name
  }
}
