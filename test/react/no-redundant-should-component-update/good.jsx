// good
class Foo extends React.Component {
  shouldComponentUpdate() {
    // do check
  }
  render() {
    return <div>Radical!</div>
  }
}

class Qux extends React.PureComponent {
  render() {
    return <div>Tubular!</div>
  }
}
