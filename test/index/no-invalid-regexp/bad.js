// bad 在 RegExp 构造函数中出现了非法的正则表达式
const reg1 = new RegExp('[')
const reg2 = new RegExp('.', 'z')
