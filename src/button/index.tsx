/**
* Author: XM
* Date: 2022-05-08 16:45
*
*/

import React from 'react';

import { Button as AtButton, ButtonProps } from 'antd';

function Button (props: ButtonProps) {
  return <AtButton type='primary' {...props} />
}

export default Button;
