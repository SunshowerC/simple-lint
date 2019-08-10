// bad new后面的类没有小括号
// prettier 也会报错
const person = new Person
const person = new (Person)
