import {
  HomeOutlined,
  ReloadOutlined,
  TagOutlined,
  TagsOutlined,
} from '@ant-design/icons';
import React from 'react';
import { Menu } from '../..';
import style from './index.module.scss';
import { Logo, LogoIcon } from '../../atoms';
import { Layout, MenuProps } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { MenuDividerType } from 'rc-menu/lib/interface';

interface SidebarProps {
  collapsed: boolean;
}

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items = [
  getItem('Home', '', <HomeOutlined />),
  { type: 'divider' } as MenuDividerType,
  getItem('Refunds', 'refunds', <ReloadOutlined />),
  { type: 'divider' } as MenuDividerType,
  getItem('Promotions', 'sub1', <TagOutlined />, [
    getItem('Promotion List', 'promotions'),
    getItem('Create Promotion Banner', 'promotions/create-banner'),
  ]),
  getItem('Vouchers', 'sub2', <TagsOutlined />, [
    getItem('Voucher List', 'vouchers'),
    getItem('Create Voucher', 'vouchers/create'),
  ]),
];

const { Sider } = Layout;

const defaultOpenKeys = ['sub1', 'sub2'];

const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const lastPath = location.pathname.split('/').slice(2).join('/');

  const onClick: MenuProps['onClick'] = (e) => {
    navigate(`/${e.key}`);
  };

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
        items={items}
        mode="inline"
        defaultOpenKeys={defaultOpenKeys}
        defaultSelectedKeys={[lastPath || '']}
        onClick={onClick}
      />
    </Sider>
  );
};

export default Sidebar;
