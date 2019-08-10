// good
;<div>
  <div> Children </div>
  <MyComponent>Children</MyComponent>
  <MyComponent>
    <span>Child 1</span>
    <span>Child 2</span>
  </MyComponent>
</div>

React.createElement('div', {}, 'Children')
React.createElement('div', 'Child 1', 'Child 2')
