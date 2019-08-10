// bad 禁止设置字符串ref\
class Hello extends React.Component {
  render() {
    return <div ref="hello">Hello, world.</div>
  }
}
