// bad 不允许将if语句作为else块中的唯一语句。
if (condition) {
  // ...
} else {
  if (anotherCondition) {
    // ...
  }
}

if (condition) {
  // ...
} else {
  if (anotherCondition) {
    // ...
  } else {
    // ...
  }
}
