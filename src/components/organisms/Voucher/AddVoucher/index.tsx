import React from 'react';
import { Form, Button } from '../../..';
import CardCouponInfo from './CardCouponInfo';
import CardCouponSettings from './CardCouponSettings';
import CardCouponType from './CardCouponType';
import style from './index.module.scss';

const AddVoucher: React.FC = () => {
  return (
    <Form className={style.form__voucher}>
      <CardCouponType />
      <CardCouponInfo />
      <CardCouponSettings />

      <div className={style.form__voucher__actions}>
        <Button type="primary" htmlType="submit" size="large">
          Create Voucher{' '}
        </Button>
      </div>
    </Form>
  );
};

export default AddVoucher;
