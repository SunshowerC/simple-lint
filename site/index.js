import React from 'react'
import ReactDOM from 'react-dom'

import GitHubCorners from './GitHubCorners'

// import ruleConfigIndex from './rule-configs/index'
// import ruleCommentIndex from './rule-comments/index.json'
import ruleTestIndex from './rule-tests/index.json'

import ruleeConfigVue from './rule-configs/vue'
import ruleCommentVue from './rule-comments/vue.json'
import ruleTestVue from './rule-tests/vue.json'

import ruleeConfigReact from './rule-configs/react'
import ruleCommentReact from './rule-comments/react.json'
import ruleTestReact from './rule-tests/react.json'

import ruleeConfigTS from './rule-configs/typescript'
import ruleCommentTS from './rule-comments/typescript.json'
import ruleTestTS from './rule-tests/typescript.json'

import cfImports from './rule-configs/import'
import cmImports from './rule-comments/import.json'
import ruleImports from './rule-tests/import.json'

import cfBestPractice from './rule-configs/best-practices'
import cmBestPractice from './rule-comments/best-practices.json'
import cfES6 from './rule-configs/es6'
import cmES6 from './rule-comments/es6.json'
import cfNodejsAndCommonjs from './rule-configs/nodejs-and-commonjs'
import cmNodejsAndCommonjs from './rule-comments/nodejs-and-commonjs.json'
import cfPossibleErrors from './rule-configs/possible-errors'
import cmPossibleErrors from './rule-comments/possible-errors.json'
import cfStrict from './rule-configs/strict'
import cmStrict from './rule-comments/strict.json'
import cfStylisticIssues from './rule-configs/stylistic-issues'
import cmStylisticIssues from './rule-comments/stylistic-issues.json'
import cfVariables from './rule-configs/variables'
import cmVariables from './rule-comments/variables.json'
// import cfPrettier from './rule-configs/prettier'
// import cmPrettier from './rule-comments/prettier.json'

const RULE_DATA_MAP = {
  index: {
    key: 'index',
    baseLink: 'https://eslint.org/docs/rules',
    getDetailLink: (key) => {
      return `https://eslint.org/docs/rules/${key}`
    },
    children: {
      bestPractice: {
        key: 'bestPractice',
        config: cfBestPractice,
        test: ruleTestIndex,
        comment: cmBestPractice,
        baseLink: 'https://eslint.org/docs/rules',
        getDetailLink: (key) => {
          return `https://eslint.org/docs/rules/${key}`
        }
      },
      es6: {
        key: 'es6',
        config: cfES6,
        test: ruleTestIndex,
        comment: cmES6,
        baseLink: 'https://eslint.org/docs/rules',
        getDetailLink: (key) => {
          return `https://eslint.org/docs/rules/${key}`
        }
      },
      import: {
        key: 'import',
        config: cfImports,
        test: ruleImports,
        comment: cmImports,
        baseLink: 'https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/',
        getDetailLink: (key) => {
          return `https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/${key.replace(
            'import/',
            ''
          )}.md`
        }
      },
      nodejsAndCommonjs: {
        key: 'nodejsAndCommonjs',
        config: cfNodejsAndCommonjs,
        test: ruleTestIndex,
        comment: cmNodejsAndCommonjs,
        baseLink: 'https://eslint.org/docs/rules',
        getDetailLink: (key) => {
          return `https://eslint.org/docs/rules/${key}`
        }
      },
      possibleErrors: {
        key: 'possibleErrors',
        config: cfPossibleErrors,
        test: ruleTestIndex,
        comment: cmPossibleErrors,
        baseLink: 'https://eslint.org/docs/rules',
        getDetailLink: (key) => {
          return `https://eslint.org/docs/rules/${key}`
        }
      },
      strict: {
        key: 'strict',
        config: cfStrict,
        test: ruleTestIndex,
        comment: cmStrict,
        baseLink: 'https://eslint.org/docs/rules',
        getDetailLink: (key) => {
          return `https://eslint.org/docs/rules/${key}`
        }
      },
      stylisticIssues: {
        key: 'stylisticIssues',
        config: cfStylisticIssues,
        test: ruleTestIndex,
        comment: cmStylisticIssues,
        baseLink: 'https://eslint.org/docs/rules',
        getDetailLink: (key) => {
          return `https://eslint.org/docs/rules/${key}`
        }
      },
      variables: {
        key: 'variables',
        config: cfVariables,
        test: ruleTestIndex,
        comment: cmVariables,
        baseLink: 'https://eslint.org/docs/rules',
        getDetailLink: (key) => {
          return `https://eslint.org/docs/rules/${key}`
        }
      }
      // prettier: {
      //   key: 'prettier',
      //   config: cfPossibleErrors,
      //   test: ruleTestIndex,
      //   comment: cmPossibleErrors,
      //   baseLink: 'https://eslint.org/docs/rules',
      //   getDetailLink: (key) => {
      //     return `https://eslint.org/docs/rules/${key}`
      //   },
      // },
    }
  },
  vue: {
    key: 'vue',
    config: ruleeConfigVue,
    comment: ruleCommentVue,
    test: ruleTestVue,
    baseLink: 'https://vuejs.github.io/eslint-plugin-vue/rules/',
    getDetailLink: (key) => {
      return `https://vuejs.github.io/eslint-plugin-vue/rules/${key.replace(
        'vue/',
        ''
      )}.html`
    }
  },
  react: {
    key: 'react',
    config: ruleeConfigReact,
    comment: ruleCommentReact,
    test: ruleTestReact,
    baseLink: 'https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules',
    getDetailLink: (key) => {
      return `https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/${key.replace(
        'react/',
        ''
      )}.md`
    }
  },
  typescript: {
    key: 'typescript',
    config: ruleeConfigTS,
    comment: ruleCommentTS,
    test: ruleTestTS,
    baseLink: 'https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules',
    getDetailLink: (key) => {
      return `https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules/${key.replace(
        '@typescript-eslint/',
        ''
      )}.md`
    }
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ruleData: RULE_DATA_MAP.index.children.bestPractice,
      // ruleData: RULE_DATA_MAP.react,
      childShow: true,
      showOff: true
    }
  }
  handleRuleSetChange(e) {
    if (e.target.value === 'index') {
      this.setState({ childShow: true, ruleData: RULE_DATA_MAP[e.target.value].children.bestPractice })
    } else {
      this.setState({ childShow: false, ruleData: RULE_DATA_MAP[e.target.value] })
    }
  }
  handleChildRuleSetChange(e) {
    this.setState({ ruleData: RULE_DATA_MAP.index.children[e.target.value] })
  }
  handleShowOffChange(e) {
    this.setState({
      showOff: e.target.checked
    })
  }
  renderRule(key) {
    // const isOff = this.state.ruleData.comment[key].indexOf('@off') !== -1
    const isOff = this.state.ruleData.config.rules[key].indexOf('off') !== -1
    const classify = this.state.ruleData.comment[key].indexOf('classify') !== -1
      ? this.state.ruleData.comment[key].split('classify')[0]
      : ''
    const comment = this.state.ruleData.comment[key].indexOf('classify') !== -1
      ? this.state.ruleData.comment[key].split('classify')[1].replace(/\n/, '')
      : this.state.ruleData.comment[key]
    if (isOff && !this.state.showOff) return null
    return (
      <div key={key} id={key}>
        {classify.length > 0 && (
          <div className="flex-left flex-wrap top-gap-big units-gap site-row site-classify">
            {classify}
          </div>
        )}
        <div
          className={`flex-left flex-wrap top-gap-big units-gap site-row ${
            isOff ? 'site-row-off site-row-wide' : ''
          }`}
        >
          <div className="unit-1-3 unit-1-on-mobile site-desc">
            {
              key.indexOf('/') !== -1
                ? (<a href={this.state.ruleData.getDetailLink(key)} target="__blank">{key}</a>)
                : (<a href={RULE_DATA_MAP.index.getDetailLink(key)} target="__blank">{key}</a>)
            }
            {comment.indexOf('ENG:') !== -1 ? this.renderRuleComment(comment.split('ENG:')[0]) : this.renderRuleComment(comment)}
            {comment.indexOf('ENG:') !== -1 && this.renderENGRuleComment(comment.split('ENG:')[1])}
          </div>
          <div className="unit-1-3 unit-1-on-mobile">
            {this.renderRuleTestBad(this.state.ruleData.test[key])}
          </div>
          <div className="unit-1-3 unit-1-on-mobile">
            {this.renderRuleTestGood(this.state.ruleData.test[key])}
          </div>
        </div>
      </div>
    )
  }
  renderRuleComment(comment) {
    const content = comment
      .replace(/ /g, '&nbsp;')
      .replace(/\r\n/g, '<br />')
      .replace(/\n/g, '<br />')
      .replace('@off', '<span class="text-inverse bg-danger text-small site-comment-off">$&</span>')
      .replace(
        '@fixable',
        '<span class="text-inverse bg-success text-small site-comment-fixable">$&</span>'
      )
      .replace('禁止', '<strong class="text-danger">$&</strong>')
      .replace('允许', '<strong class="text-ok">$&</strong>')
      .replace('必须', '<strong class="text-primary">$&</strong>')
    return <p className="top-gap-0" dangerouslySetInnerHTML={{ __html: content }} />
  }
  renderENGRuleComment(comment) {
    const content = comment
      .replace(/ /g, '&nbsp;')
      .replace(/\r\n/g, '<br />')
      .replace(/\n/g, '<br />')
      .replace('TODO', '<span class="text-inverse bg-warning text-small site-comment-todo">$&</span>')
    return (
      <p className="site-comment-eng top-gap-0" dangerouslySetInnerHTML={{ __html: content }} />
    )
  }
  renderRuleTestGood(test) {
    if (!test || !test.good) return null
    return (
      <pre className="language-javascript site-code">
        <code
          dangerouslySetInnerHTML={{
            __html: test.good.replace(
              /(good)/g,
              '<span class="bg-success text-inverse site-code-tag">$1</span>'
            )
            // .replace(
            //   /(\/\/ )(good)/g,
            //   '$1<span class="bg-success text-inverse site-code-tag">$2</span>'
            // )
          }}
        />
      </pre>
    )
  }
  renderRuleTestBad(test) {
    if (!test || !test.bad) return null
    return (
      <pre className="language-javascript site-code">
        <code
          dangerouslySetInnerHTML={{
            __html: test.bad
              .replace(
                /(bad)/g,
                '<span class="bg-danger text-inverse site-code-tag">$1</span>'
              )
              .replace(
                /(\/\/ )(warn)/g,
                '$1<span class="bg-warning text-inverse site-code-tag">$2</span>'
              )
              .replace(
                /(\/\/ )(prettier)/g,
                '$1<span class="bg-warning text-inverse site-code-tag">$2</span>'
              )
              // .replace(
              //   /(\/\/ )(bad)/g,
              //   '$1<span class="bg-danger text-inverse site-code-tag">$2</span>'
              // )
          }}
        />
      </pre>
    )
  }
  renderTableHeader() {
    return (
      <div className="flex-left flex-wrap units-gap hide-on-mobile">
        <h3 className="unit-1-3 unit-1-on-mobile site-table-header-text">规则说明</h3>
        <h3 className="unit-1-3 unit-1-on-mobile text-danger site-table-header-text">错误的示例</h3>
        <h3 className="unit-1-3 unit-1-on-mobile text-success site-table-header-text">
          正确的示例
        </h3>
      </div>
    )
  }
  renderHeader() {
    return (
      <div className="flex-center">
        <div className="container-fluid">
          <h1>LoanTeam ESLint 规则</h1>
          <form className="top-gap site-form">
            <label>
              切换规则：
              <select
                value={this.state.ruleData.key}
                onChange={this.handleRuleSetChange.bind(this)}
              >
                <option value="index">标准规则</option>
                <option value="react">React</option>
                <option value="vue">Vue</option>
                <option value="typescript">typescript</option>
              </select>
              {
                this.state.childShow && (
                <select
                  style={{ marginLeft: '15px', verticalAlign: '1px' }}
                  value={this.state.ruleData.key}
                  onChange={this.handleChildRuleSetChange.bind(this)}
                >
                  <option value="bestPractice">best-practices</option>
                  <option value="es6">es6</option>
                  <option value="import">import</option>
                  <option value="nodejsAndCommonjs">nodejs&&commonjs</option>
                  <option value="possibleErrors">possible-errors</option>
                  <option value="strict">strict</option>
                  <option value="stylisticIssues">stylistic-issues</option>
                  <option value="variables">variables</option>
                  {/* <option value="prettier">prettier</option> */}
                  </select>
                )
              }
            </label>
            <label>
              <input
                type="checkbox"
                checked={this.state.showOff}
                onChange={this.handleShowOffChange.bind(this)}
              />
              显示已禁用的规则
            </label>
          </form>
        </div>
      </div>
    )
  }
  renderDetailLink() {
    return (
      <div>
        <p>详情rule查看:<a href={this.state.ruleData.baseLink} target="_blank">{this.state.ruleData.baseLink}</a></p>
      </div>
    )
  }
  render() {
    return (
      <div>
        <GitHubCorners href="https://git.garena.com/shopee/loan-service/credit_frontend/eslint-config-lint" />
        {this.renderHeader()}
        <div className="flex-center">
          <div className="container-fluid">
            {this.renderTableHeader()}
            {this.renderDetailLink()}
            {Object.keys(this.state.ruleData.config.rules).map(this.renderRule.bind(this))}
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
