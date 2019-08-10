// good
class Hello extends React.Component {
  componentDidUpdate() {
    this.onUpdate(function callback(newName) {
      this.setState({
        name: newName
      })
    })
  }
  render() {
    return <div>Hello {this.props.name}</div>
  }
}
