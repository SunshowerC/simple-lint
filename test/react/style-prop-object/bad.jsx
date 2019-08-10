// bad
;<div>
  <div style="color: 'red'" />
  <div style={true} />
</div>

React.createElement('div', { style: "color: 'red'" })

React.createElement('div', { style: true })
