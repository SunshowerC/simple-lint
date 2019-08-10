// good
// 此处为了演示而去掉了prettier的规则
const x = 'Line 1\n'
        + 'Line 2'

const x = 'Line 1\n' + 'Line 2' // 考虑到prettier的写法
// 考虑到 no-useless-concat规则，禁止出现没必要的字符串拼接
const x = `Line 1
            Line2`
