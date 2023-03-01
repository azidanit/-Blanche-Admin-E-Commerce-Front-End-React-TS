import { UserOutlined } from '@ant-design/icons';
import React from 'react';
import { Menu } from '../..';
import style from './index.module.scss';
import { Logo, LogoIcon } from '../../atoms';
import { Layout } from 'antd';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  collapsed: boolean;
}

const items = [
  {
    key: '',
    icon: <UserOutlined />,
    label: <Link to="/">Home</Link>,
  },
  {
    key: 'promotions',
    icon: <UserOutlined />,
    label: <Link to="/promotions">Promotion</Link>,
  },
  {
    key: 'vouchers',
    icon: <UserOutlined />,
    label: <Link to="/vouchers">Voucher</Link>,
  },
];
const { Sider } = Layout;

const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
  const location = useLocation();
  const lastPath = location.pathname.split('/').pop();

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className={style.sidebar}
      width={300}
    >
      {collapsed ? (
        <LogoIcon className={style.sidebar__logo} size="small" />
      ) : (
        <Logo className={style.sidebar__logo} size="extrasmall" />
      )}
      <Menu
        className={style.sidebar__menu}
        defaultSelectedKeys={lastPath ? [lastPath] : ['']}
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;
