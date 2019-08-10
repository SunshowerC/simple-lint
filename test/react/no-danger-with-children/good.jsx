// good
;<div>
  <div dangerouslySetInnerHTML={{ __html: 'HTML' }} />

  <Hello dangerouslySetInnerHTML={{ __html: 'HTML' }} />

  <div>Children</div>

  <Hello>Children</Hello>
</div>

React.createElement('div', { dangerouslySetInnerHTML: { __html: 'HTML' } })
React.createElement('Hello', { dangerouslySetInnerHTML: { __html: 'HTML' } })
React.createElement('div', {}, 'Children')
React.createElement('Hello', {}, 'Children')
