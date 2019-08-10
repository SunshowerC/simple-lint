// good 使用回调函数设置 ref
class Hello extends React.Component {
  componentDidMount() {
    const component = this.hello
    // ...do something with component
  }
  render() {
    return (
      <div
        ref={(c) => {
          this.hello = c
        }}
      >
        Hello, world.
      </div>
    )
  }
}
