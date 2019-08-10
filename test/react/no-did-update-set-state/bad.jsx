// bad
class Hello extends React.Component {
  componentDidUpdate() {
    this.setState({
      name: this.props.name.toUpperCase()
    })
  }
  render() {
    return <div>Hello {this.state.name}</div>
  }
}
