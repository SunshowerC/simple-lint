const assert = require('assert')
const eslint = require('eslint')

const fse = require('fs-extra')
const path = require('path')

const CLIEngine = eslint.CLIEngine
const cli = new CLIEngine()

const goodReport = cli.executeOnFiles([
  './test/**/good.js',
  // './test/**/good.ts',
  './test/**/good.tsx',
  './test/**/good.vue'
])

goodReport.results.forEach((goodReportForOneFile) => {
  // console.log('goodReport.results', goodReport)
  assert.equal(
    goodReportForOneFile.errorCount,
    0,
    `${goodReportForOneFile.filePath} should have no error ${JSON.stringify(
      goodReportForOneFile.messages[0]
    )}`
  )
})

const badReport = cli.executeOnFiles([
  './test/**/bad.js',
  './test/**/bad.ts',
  './test/**/bad.tsx',
  './test/**/bad.vue'
])

badReport.results.forEach((badReportForOneFile) => {
  assert(
    badReportForOneFile.errorCount > 0,
    `${badReportForOneFile.filePath} should have at least one error`
  )
})
/*
* my change
*/
// fse.outputFileSync(
//   path.resolve(__dirname, './dist/good.json'),
//   JSON.stringify(goodReport, null, 4),
//   'utf-8'
// )
// fse.outputFileSync(
//   path.resolve(__dirname, './dist/bad.json'),
//   JSON.stringify(badReport, null, 4),
//   'utf-8'
// )

console.log('Test passed!')
