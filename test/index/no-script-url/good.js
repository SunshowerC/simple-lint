// good 不使用 javascript:void(0)
const foo = document.createElement('a')
a.href = ''
foo.addEventListener('click', (e) => {
  e.preventDefault()
})
