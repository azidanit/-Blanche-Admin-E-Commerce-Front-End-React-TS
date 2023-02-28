import React from 'react';
import { Form, Button } from '../../..';
import CardCouponInfo from './CardPromotionInfo';
import CardCouponSettings from './CardPromotionSettings';
import style from './index.module.scss';

const AddPromotion: React.FC = () => {
  return (
    <Form className={style.form__promotion}>
      <CardCouponInfo />
      <CardCouponSettings />

      <div className={style.form__promotion__actions}>
        <Button type="primary" htmlType="submit" size="large">
          Create Promotion{' '}
        </Button>
      </div>
    </Form>
  );
};

export default AddPromotion;
