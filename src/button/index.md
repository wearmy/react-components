---
nav:
  title: 组件
  path: /components
group:
  title: 通用
  path: /common
---

## Button 按钮

Demo:

```tsx
import React from 'react';
import { Button, Space, ConfigProvider } from 'wearmy';

export default () => {
  return (
    <Space>
      <Button>默认</Button>
      <Button type='primary'>Primary</Button>
      <Button type='link'>Link</Button>
      <Button type='danger'>Danger</Button>
    </Space>
  )
} 
```
