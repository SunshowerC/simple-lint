// bad
class Foo extends React.PureComponent {
  shouldComponentUpdate() {
    // do check
  }
  render() {
    return <div>Radical!</div>
  }
}

function Bar() {
  return class Baz extends React.PureComponent {
    shouldComponentUpdate() {
      // do check
    }
    render() {
      return <div>Groovy!</div>
    }
  }
}
