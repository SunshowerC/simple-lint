# @typescript-eslint/no-unused-vars

> 问题发生条件：使用 `typescript`，并在 `*.d.ts` 声明文件中，使用了 `declare global` 和命名空间 `namespace`。如下面代码所示：

```ts
// *.d.ts 文件

// 下面这行代码 TableColumn 会报 @typescript-eslint/no-unused-vars 的错误
// 即使 TableColumn 已经被使用了
import { TableColumn } from 'iview'

declare global {
  namespace N {
    export interface IA {
      column: TableColumn
    }
  }
}
```

> 目前解决方法：使用 `eslint-disable` 的注释，局部禁用该规则。或者破坏掉**问题发生条件**，即不要结合使用 `declare global` 和 `namespace`。例如：

```ts
// 下面 TableColumn 不会报 @typescript-eslint/no-unused-vars 的错误
import { TableColumn } from 'iview'

namespace N {
  export interface IA {
    column: TableColumn
  }
}
```
