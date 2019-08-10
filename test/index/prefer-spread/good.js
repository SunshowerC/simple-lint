// good 正确使用apply 和 ...
foo(...args)
obj.foo(...args)

// The `this` binding is different.
foo.apply(obj, args)
obj.foo.apply(null, args)
obj.foo.apply(otherObj, args)

// The argument list is not variadic. 参数是不可变的
foo.apply(undefined, [1, 2, 3])
foo.apply(null, [1, 2, 3])
obj.foo.apply(obj, [1, 2, 3])
