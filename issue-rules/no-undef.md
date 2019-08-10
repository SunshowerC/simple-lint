# no-undef

> 问题发生条件：使用 `typescript`，并在 `*.d.ts` 声明文件中，使用了 `declare global`， 如下面代码所示：

```ts
import vue from 'vue'

declare global {
  const B: typeof vue // 这里 vue 会报 no-undef 的问题
}
```

> 目前解决方法：使用 `eslint-disable` 的注释，局部禁用该规则。或者破坏掉**问题发生条件**，例如：

```ts
import vue from 'vue'

declare namespace N {
  const B: typeof vue // 这里不会报 no-undef 的问题
}
```
