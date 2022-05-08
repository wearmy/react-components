import React, { useEffect } from 'react';
import Layout from 'dumi-theme-default/es/layout';
import { ConfigProvider } from 'antd';
import { usePrefersColor } from 'dumi/theme';

import 'antd/dist/antd.variable.min.css';

import * as themes from 'wearmy/themes'; 

export default ({ children, ...props }) => {
  const [color] = usePrefersColor();

  useEffect(() => {
    ConfigProvider.config({
      theme: themes[color] || themes.light
    });
  }, [color]);

  return (
    <Layout {...props}>
      <ConfigProvider>
        {children}
      </ConfigProvider>
    </Layout>
  )
};
