// good 字符串连接中包括一个变量或非字符串，后者是一个字符串多行的拼接
// 结合rule：prefer-template, 需要使用模板字符串的地方必须使用模板字符串
const a = 'test'
const c = `${a} str`
const b = `${1} 1`
