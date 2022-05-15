---
nav:
  title: 组件
  path: /components
group:
  title: 通用
  path: /common
---

## Crud 增删改查

Demo:

```tsx
import React from 'react';
import { Curd } from 'wearmy';

export default () => {

  const columns = [
    {
      title: '编号',
      dataIndex: 'id',
      search: false
    },
    {
      dataIndex: 'title',
      title: '标题'
    },
    {
      dataIndex: 'ctime',
      title: '创建时间',
      search: false
    },
  ];
  return (
    <Curd
      rowKey='id'
      columns={columns}
      pagination={{ pageSize: 10 }}
      request={async ({ pageSize, current, ...rest }, sort, filter) => {
        const res = await fetch(`/api/crud/list?page=${current}&size=${pageSize}`);
        const json = await res.json();
        return json;
      }}
    />
  )
}
```
