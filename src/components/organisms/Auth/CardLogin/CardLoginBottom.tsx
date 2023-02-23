import { Divider } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import style from './index.module.scss';

const CardLoginBottom: React.FC = () => {
  return (
    <div className={style.card__login__bottom}>
      <Divider className={style.divider}>Or Login with</Divider>
      {/* TODO --> LOGIN GOOGLE BUTTON */}
    </div>
  );
};

export default CardLoginBottom;
