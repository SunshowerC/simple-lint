// bad
;<div>
  <div dangerouslySetInnerHTML={{ __html: 'HTML' }}>Children</div>

  <Hello dangerouslySetInnerHTML={{ __html: 'HTML' }}>Children</Hello>
</div>
React.createElement('div', { dangerouslySetInnerHTML: { __html: 'HTML' } }, 'Children')

React.createElement('Hello', { dangerouslySetInnerHTML: { __html: 'HTML' } }, 'Children')
