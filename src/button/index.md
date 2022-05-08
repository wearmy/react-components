---
nav:
  title: Components
  path: /components
---

## Button 按钮

Demo:

```tsx
import React from 'react';
import { Button, Space } from 'wearmy';

export default () => {
  return (
    <Space>
      <Button>默认</Button>
      <Button type='primary'>Primary</Button>
      <Button type='secondary'>Secondary</Button>
      <Button type='danger'>Danger</Button>
    </Space>
  )
} 
```
