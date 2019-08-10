// bad
import React, { PropTypes } from 'react'

React.render(<MyComponent />, root)
React.unmountComponentAtNode(root)
React.findDOMNode(this.refs.foo)
React.renderToString(<MyComponent />)
React.renderToStaticMarkup(<MyComponent />)
React.createClass({ /* Class object */ })

const propTypes = {
  foo: PropTypes.bar
}

React.DOM.div()
