/**
* Author: XM
* Date: 2022-05-13 23:15
*
*/

import React, { useState } from "react"
import ProTable from '@ant-design/pro-table';

import { Table } from '../';
import Query from './Query';

interface CrudProps {
  
}

const Curd: React.FC<CrudProps> = (props) => {
  return (
    <ProTable {...props} />
  )
}

export default Curd;

