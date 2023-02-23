import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';
import { Button, Tag } from '../../../atoms';
import CardQuota from './CardQuota';
import CardTimePeriod from './CardTimePerod';
import CardVoucher from './CardVoucher';

interface DataType {
  key: string;
  name: React.ReactNode;
  quota: React.ReactNode;
  period: React.ReactNode;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Voucher Info',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <div>{text}</div>,
  },
  {
    title: 'Quota Usage',
    dataIndex: 'quota',
    key: 'quota',
  },
  {
    title: 'Time Period',
    dataIndex: 'period',
    key: 'period',
  },
  {
    title: 'Action',
    key: 'action',
    render: (record) => (
      <Space size="middle" direction="vertical">
        <Button danger>Delete</Button>
        <Button>Duplicate</Button>
        <Button>Update</Button>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: <CardVoucher />,
    quota: <CardQuota />,
    period: <CardTimePeriod />,
  },
];

const TableVoucher: React.FC = () => (
  <>
    <Table columns={columns} dataSource={data} />
  </>
);

export default TableVoucher;
