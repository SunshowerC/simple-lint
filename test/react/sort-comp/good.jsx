// good 遵循以下顺序
// 1.静态方法和属性
// 2.生命周期方法
// 3.自定义方法
// 4.render
class Hello extends React.Component {
  displayName: 'Hello'
  render() {
    return <div>Hello</div>
  }
}
