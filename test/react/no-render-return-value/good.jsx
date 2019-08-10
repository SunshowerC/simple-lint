// good
ReactDOM.render(<App ref={doSomethingWithInst} />, document.body)

ReactDOM.render(<App />, document.body, doSomethingWithInst)
