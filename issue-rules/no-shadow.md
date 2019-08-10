# no-shadow

> 问题发生条件：使用 `typescript`，并在 `*.d.ts` 声明文件中，如下面代码所示：

```ts
import { Notice } from 'iview'

declare module 'iview/types/notice' {
  // 这里会报 no-shadow 的问题，因为 Notice 和 Notice 同名
  // 同名的情况是确实可以正常存在的，在 ts 中，一个相同的名称既可以当做类型，也可以当做变量，也可以当做命名空间
  export const Notice: Notice
}
```

> 目前解决方法：使用 `eslint-disable` 的注释，局部禁用该规则，例如：

```ts
import { Notice } from 'iview'

/* eslint-disable no-shadow  */

declare module 'iview/types/notice' {
  export const Notice: Notice
}
```
