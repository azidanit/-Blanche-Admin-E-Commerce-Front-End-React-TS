import React, { useEffect, useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import Sidebar from '../../molecules/Sidebar';
import style from './index.module.scss';
import { Outlet, useSearchParams } from 'react-router-dom';
import './override.scss';
import classNames from 'classnames';
import { useAppDispatch } from '../../../app/hooks';
import { parseSearchParams } from '../../../helpers/parseSearchParams';
import { setParams } from '../../../app/features/home/paramsSlice';

const { Header, Sider, Content } = Layout;

const AdminLayout: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useAppDispatch();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    dispatch(setParams(parseSearchParams(searchParams)));
  }, [searchParams]);

  return (
    <Layout className={style.merchant__layout}>
      <Sidebar collapsed={collapsed} />
      <Layout
        className={classNames(
          'merchant__layout',
          style.merchant__layout__container,
        )}
      >
        <Header className={style.merchant__layout__header}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            },
          )}
        </Header>
        <Content className={style.merchant__layout__content}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
