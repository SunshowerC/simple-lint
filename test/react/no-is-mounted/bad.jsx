// bad
class Hello extends React.Component {
  handleClick() {
    setTimeout(function() {
      if (this.isMounted()) {
        return 2
      }
    })
  }
  render() {
    return <div onClick={this.handleClick.bind(this)}>Hello</div>
  }
}
