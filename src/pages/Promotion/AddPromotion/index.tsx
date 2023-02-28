import { Divider } from 'antd';
import React from 'react';
import { AddPromotionPage } from '../../../components';
import style from './index.module.scss';

const AddPromotion: React.FC = () => {
  return (
    <div className={style.add__voucher__page}>
      <div className={style.add__voucher__page__header}>
        <h3 className={style.add__voucher__page__header__title}>
          Create Promotion
        </h3>
        <p className={style.add__voucher__page__header__subtitle}>
          Create a new promotion for your store
        </p>
      </div>
      <Divider />
      <AddPromotionPage />
    </div>
  );
};

export default AddPromotion;
