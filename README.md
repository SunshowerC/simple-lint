# @finance/eslint-config-loan

> Simple Eslint

---

* [@finance/eslint-config-loan](#financeeslint-config-loan)
  * [安装使用](#安装使用)
  * [配置集](#配置集)
  * [配置解读](#配置解读)
  * [使用方法](#使用方法)
    * [基本项目（不使用 vue、react、typescript）](#基本项目不使用-vuereacttypescript)
    * [typescript 项目：](#typescript-项目)
    * [vue 项目：](#vue-项目)
    * [vue&typescript 项目：](#vuetypescript-项目)
    * [react 项目：](#react-项目)
    * [react&typescript 项目：](#reacttypescript-项目)
  * [规则站点](#规则站点)
    * [目录结构](#目录结构)
    * [自动化部署说明](#自动化部署说明)
  * [暂有问题的规则列表](#暂有问题的规则列表)

---

## 安装使用

使用 `npm` 安装：

```shell
npm set registry https://npm.garenanow.com
npm install @finance/eslint-config-loan
```

或者使用 `yarn` 安装：

```shell
yarn config set registry https://npm.garenanow.com
yarn add @finance/eslint-config-loan
```

> **注意：**另外还需要根据使用的配置集，手动安装对应的依赖包。安装方式参考下面的**使用方法**。

## 配置集

根据项目使用的技术背景，分别对应不同的 eslint 配置集：

- index.js，es默认配置集，规则在rules目录下
- typescript.js，typescript 配置集，包含默认配置集、@typescript-eslint/eslint-plugin规则
- vue.js，vue 配置集：包含默认配置集、eslint-plugin-vue 规则
- vue-typescript.js，vue&typescript 配置集：包含默认配置集、vue 配置集、typescript 配置集
- react.js，react 配置集：包含默认配置集、eslint-plugin-react
- react-typescript.js，react&typescript 配置集：包含默认配置集、react 配置集、typescript 配置集

## 配置解读

我们对每一条配置，都有详尽的注释，这样不仅方便了我们自己查阅某项配置的意义和原因，也使大家更容易配置出自己心目中的规则：

- 每一条配置都有注释说明此配置的用途
- 对于理解困难的配置，都在注释中有举例
- 对于有争议的配置，都在注释中说明了为什么要这么配置的原因
- 对于关闭掉的配置，都在注释中有对应的原因说明，以及 @off 的标识
- 对于能够 autofix 的配置，都在注释中有标注 @fixable

## 使用方法

### 基本项目（不使用 vue、react、typescript）

依赖包安装

```shell
npm install babel-eslint@^9.0.0 eslint@^5.15.0 eslint-config-prettier@^4.1.0 eslint-plugin-import@^2.16.0 eslint-plugin-prettier@^3.0.1 prettier@1.14.3 --save-dev --save-exact
```

> 并不需要手动添加 prettier 配置文件，因为已内置于 `eslint-config-loan` 中

或者使用 `yarn` 安装：

```shell
yarn add eslint@^5.15.0 eslint-config-prettier@^4.1.0 eslint-plugin-import@^2.16.0 eslint-plugin-prettier@^3.0.1 prettier@1.14.3 --dev
```

在项目的 `.eslintrc.js` 配置文件中，如下设置：

```js
module.exports = {
  // 或简写 ['@finance/loan']
  extends: ['@finance/eslint-config-loan']
}
```

### typescript 项目：

依赖包安装

```shell
npm install eslint@^5.15.0 eslint-config-prettier@^4.1.0 eslint-plugin-import@^2.16.0 eslint-plugin-prettier@^3.0.1 prettier@1.14.3 typescript@^3.3.3333 eslint-import-resolver-typescript@^1.1.1 @typescript-eslint/eslint-plugin@^1.4.2 @typescript-eslint/parser@^1.4.2 --save-dev --save-exact
```

> 并不需要手动添加 prettier 配置文件，因为已内置于 `eslint-config-loan` 中

或者使用 `yarn` 安装：

```shell
yarn add eslint@^5.15.0 eslint-config-prettier@^4.1.0 eslint-plugin-import@^2.16.0 eslint-plugin-prettier@^3.0.1 prettier@1.14.3 typescript@^3.3.3333 eslint-import-resolver-typescript@^1.1.1 @typescript-eslint/eslint-plugin@^1.4.2 @typescript-eslint/parser@^1.4.2 --dev
```

在项目的 `.eslintrc.js` 配置文件中，如下设置：

```js
module.exports = {
  // 或简写 ['@finance/loan/typescript']
  extends: ['@finance/eslint-config-loan/typescript']
}
```

### vue 项目：

依赖包安装

```shell
npm install babel-eslint@^9.0.0 eslint@^5.15.0 eslint-config-prettier@^4.1.0 eslint-plugin-import@^2.16.0 eslint-plugin-prettier@^3.0.1 eslint-plugin-vue@^5.2.2 prettier@1.14.3 --save-dev --save-exact
```

> 并不需要手动添加 prettier 配置文件，因为已内置于 `eslint-config-loan` 中

或者使用 `yarn` 安装：

```shell
yarn add babel-eslint@^9.0.0 eslint@^5.15.0 eslint-config-prettier@^4.1.0 eslint-plugin-import@^2.16.0 eslint-plugin-prettier@^3.0.1 eslint-plugin-vue@^5.2.2 prettier@1.14.3 --dev
```

在项目的 `.eslintrc.js` 配置文件中，如下设置：

```js
module.exports = {
  // 或简写 ['@finance/loan/vue']
  extends: ['@finance/eslint-config-loan/vue']
}
```

### vue&typescript 项目：

依赖包安装

```shell
npm install eslint@^5.15.0 eslint-config-prettier@^4.1.0 eslint-plugin-import@^2.16.0 eslint-plugin-prettier@^3.0.1 eslint-plugin-vue@^5.2.2 prettier@1.14.3 typescript@^3.3.3333 eslint-import-resolver-typescript@^1.1.1 @typescript-eslint/eslint-plugin@^1.4.2 @typescript-eslint/parser@^1.4.2 --save-dev --save-exact
```

> 并不需要手动添加 prettier 配置文件，因为已内置于 `eslint-config-loan` 中

或者使用 `yarn` 安装：

```shell
yarn add eslint@^5.15.0 eslint-config-prettier@^4.1.0 eslint-plugin-import@^2.16.0 eslint-plugin-prettier@^3.0.1 eslint-plugin-vue@^5.2.2 prettier@1.14.3 typescript@^3.3.3333 eslint-import-resolver-typescript@^1.1.1 @typescript-eslint/eslint-plugin@^1.4.2 @typescript-eslint/parser@^1.4.2 --dev
```

在项目的 `.eslintrc.js` 配置文件中，如下设置：

```js
module.exports = {
  // 或简写 ['@finance/loan/vue-typescript']
  extends: ['@finance/eslint-config-loan/vue-typescript']
}
```

### react 项目：

依赖包安装

```shell
npm install babel-eslint@^9.0.0 eslint@^5.15.0 eslint-config-prettier@^4.1.0 eslint-plugin-import@^2.16.0 eslint-plugin-prettier@^3.0.1 eslint-plugin-react@^7.12.3 prettier@1.14.3 --save-dev --save-exact
```

> 并不需要手动添加 prettier 配置文件，因为已内置于 `eslint-config-loan` 中

或者使用 `yarn` 安装：

```shell
yarn add babel-eslint@^9.0.0 eslint@^5.15.0 eslint-config-prettier@^4.1.0 eslint-plugin-import@^2.16.0 eslint-plugin-prettier@^3.0.1 eslint-plugin-react@^7.12.3 prettier@1.14.3 --dev
```

在项目的 `.eslintrc.js` 配置文件中，如下设置：

```js
module.exports = {
  // 或简写 ['@finance/loan/react']
  extends: ['@finance/eslint-config-loan/react']
}
```

### react&typescript 项目：

依赖包安装

```shell
npm install eslint@^5.15.0 eslint-config-prettier@^4.1.0 eslint-plugin-import@^2.16.0 eslint-plugin-prettier@^3.0.1 eslint-plugin-react@^7.12.3 prettier@1.14.3 typescript@^3.3.3333 eslint-import-resolver-typescript@^1.1.1 @typescript-eslint/eslint-plugin@^1.4.2 @typescript-eslint/parser@^1.4.2 --save-dev --save-exact
```

> 并不需要手动添加 prettier 配置文件，因为已内置于 `eslint-config-loan` 中

或者使用 `yarn` 安装：

```shell
yarn add eslint@^5.15.0 eslint-config-prettier@^4.1.0 eslint-plugin-import@^2.16.0 eslint-plugin-prettier@^3.0.1 eslint-plugin-react@^7.12.3 prettier@1.14.3 typescript@^3.3.3333 eslint-import-resolver-typescript@^1.1.1 @typescript-eslint/eslint-plugin@^1.4.2 @typescript-eslint/parser@^1.4.2 --dev
```

在项目的 `.eslintrc.js` 配置文件中，如下设置：

```js
module.exports = {
  // 或简写 ['@finance/loan/react-typescript']
  extends: ['@finance/eslint-config-loan/react-typescript']
}
```

## 规则站点

site目录为规则配置站点，基于react实现

### 目录结构

- test
  具体规则的 good 和 bad 示例代码
- scripts
  处理 rule 规则，rule 规则注释， rule 对应的示例代码
- site
  根据 scripts 处理好的数据， 在页面中展示


## 暂有问题的规则列表

这里记录存在问题的 eslint 规则，即可能使用场景是正确的，但 eslint 还是校验报错（如果问题已修复，请及时更新文档）。有问题的规则列表如下：

- [@typescript-eslint/no-unused-vars](./issue-rules/@typescript-eslint-no-unused-vars.md)
- [no-undef](./issue-rules/no-undef.md)
- [no-shadow](./issue-rules/no-shadow.md)
