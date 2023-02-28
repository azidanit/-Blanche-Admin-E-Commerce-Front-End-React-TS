import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetPromotionsQuery } from '../../../../app/features/marketplace/promotionApiSlice';
import { useAppSelector } from '../../../../app/hooks';
import { Button, Image, Tag } from '../../../atoms';
import { Pagination } from '../../../molecules';

interface DataType {
  key: string;
  name: string;
  image: React.ReactNode;
  description: string;
}

const limit = 6;

const TablePromotion: React.FC = () => {
  const params = useAppSelector((state) => state.params);
  const navigate = useNavigate();
  const { data: promotions, isLoading } = useGetPromotionsQuery({});

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
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
  const dataSource: DataType[] | undefined = promotions?.promotion_banners.map(
    (item) => ({
      key: item.name,
      name: item.name,
      image: <Image src={item.image_url} alt={item.name} />,
      description: item.description,
    }),
  );
  return (
    <>
      <Table
        columns={columns}
        dataSource={dataSource}
        loading={isLoading}
        pagination={false}
        scroll={{ x: 800 }}
      />
      {promotions &&
        promotions.total_data > limit &&
        Boolean(promotions.promotion_banners.length) && (
          <div>
            <Pagination
              total={promotions.total_data}
              pageSize={limit}
              showSizeChanger={false}
            />
          </div>
        )}
    </>
  );
};

export default TablePromotion;
