// bad 禁止解构中出现空 {} 或 []
const {} = foo;
const [] = foo;
const { a: {} } = foo
const { a: [] } = foo
function foo({}) {}
function foo([]) {}
function foo({ a: {} }) {}
function foo({ a: [] }) {}
