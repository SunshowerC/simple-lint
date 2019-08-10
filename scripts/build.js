const path = require('path')
const fse = require('fs-extra')

const babylon = require('babylon')
const Prism = require('prismjs')

const rules = [
  'index',
  'react',
  'vue',
  'typescript',
  'react-typescript',
  'vue-typescript',
  'import'
]
const indexDatailRules = [
  'best-practices',
  'es6',
  'import',
  'nodejs-and-commonjs',
  'possible-errors',
  'prettier',
  'strict',
  'stylistic-issues',
  'variables'
]

rules.forEach((rule) => {
  copyRuleConfigs(rule) // 把rule规则复制到 site/rule-config
  buildRuleComments(rule) // 把规则和注释用key-value的方式对应起来，存储在site/rule-comments
  buildRuleTests(rule) // 把对应的规则与需要展示的 防转译的html 代码 key-value 对应起来，存储在 site/rule-test下
})

function ruleComments(filename, fileContent) {
  const fileAST = babylon.parse(fileContent)

  // 将每条规则对应的注释保存在这个对象中
  const ruleComments = {}
  let rulesStart = false
  // 临时存储当前的注释
  let commentLines = []

  fileAST.tokens.forEach((token) => {
    // 从 rules 开始遍历
    if (token.value === 'rules') {
      rulesStart = true
    }
    if (rulesStart) {
      if (token.type === 'CommentLine') {
        // 如果是注释，则存储在 commentLines 中
        commentLines.push(token.value.replace(/^ /, ''))
        // 如果时空行注释，则清除当前存储的注释
        if (token.value === '') {
          commentLines = []
        }
        // 如果某一行不是注释，并且之前存储过了注释，则说明该行是一条规则
      } else if (commentLines.length > 0) {
        ruleComments[token.value] = commentLines.join('\n')
        commentLines = []
      }
    }
  })

  fse.outputFileSync(
    path.resolve(__dirname, `../site/rule-comments/${filename}.json`),
    JSON.stringify(ruleComments, null, 4),
    'utf-8'
  )
}
function buildRuleComments(filename) {
  // 在这里内部进行index文件的判断和操作的区分。
  if (filename === 'index') {
    indexDatailRules.forEach((file) => {
      const fileContent = fse.readFileSync(path.resolve(__dirname, `../rules/${file}.js`), 'utf-8')
      ruleComments(file, fileContent)
    })
  } else if (filename !== 'import') {
    const fileContent = fse.readFileSync(path.resolve(__dirname, `../${filename}.js`), 'utf-8')
    ruleComments(filename, fileContent)
  }
}

function copyRuleConfigs(filename) {
  if (filename === 'index') {
    indexDatailRules.map((detail) => {
      fse.copySync(
        path.resolve(__dirname, `../rules/${detail}.js`),
        path.resolve(__dirname, `../site/rule-configs/${detail}.js`)
      )
    })
  } else if (filename !== 'import') {
    fse.copySync(
      path.resolve(__dirname, `../${filename}.js`),
      path.resolve(__dirname, `../site/rule-configs/${filename}.js`)
    )
  }
}

function buildRuleTests(dirname) {
  let prefix = ''
  if (
    dirname === 'react'
    || dirname === 'vue'
    || dirname === 'import'
  ) {
    prefix = `${dirname}/`
  }
  if (dirname === 'typescript') {
    prefix = '@typescript-eslint/'
  }
  const ruleTests = {}
  const dirnameList = fse.readdirSync(path.resolve(__dirname, `../test/${dirname}`))
  dirnameList.forEach((subDirname) => {
    ruleTests[`${prefix}${subDirname}`] = {
      good: '',
      bad: ''
    }
    const subDirpath = path.resolve(__dirname, `../test/${dirname}/${subDirname}`)
    if (!fse.lstatSync(subDirpath).isDirectory()) {
      return
    }

    fse.readdirSync(subDirpath).forEach((filename) => {
      const goodOrBad = filename.indexOf('good') === 0 ? 'good' : 'bad'
      const highlightedContent = Prism.highlight(
        fse.readFileSync(path.resolve(subDirpath, filename), 'utf-8'),
        Prism.languages.javascript
      )
      ruleTests[`${prefix}${subDirname}`][goodOrBad] = highlightedContent
    })
  })

  fse.outputFileSync(
    path.resolve(__dirname, `../site/rule-tests/${dirname}.json`),
    JSON.stringify(ruleTests, null, 4),
    'utf-8'
  )
}
