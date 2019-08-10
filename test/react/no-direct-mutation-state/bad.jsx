// bad
class Hello extends React.Component {
  constructor(props) {
    super(props)
    // Assign at instance creation time, not on a callback
    doSomethingAsync(() => {
      this.state = 'bad'
    })
  }
}
