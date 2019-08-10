// bad React组件相关的静态类属性和生命周期方法不能有拼写错误
class MyComponent extends React.Component {
  static PropTypes = {}
}
class c2 extends React.Component {
  componentdidupdate() {}
}
