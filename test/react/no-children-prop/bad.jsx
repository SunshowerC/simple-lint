// bad
;<div>
  <div children="Children" />
  <MyComponent children={<AnotherComponent />} />
  <MyComponent children={['Child 1', 'Child 2']} />
</div>
React.createElement('div', { children: 'Children' })
