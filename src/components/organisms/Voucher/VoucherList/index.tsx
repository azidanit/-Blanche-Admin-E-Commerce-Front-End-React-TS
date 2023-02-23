import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card } from '../../../atoms';
import TableVoucher from '../TableVoucher';
import style from './index.module.scss';

const VoucherList: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/merchant/vouchers/create');
  };

  return (
    <Card className={style.voucher__list}>
      <div className={style.voucher__list__header}>
        <h6>List Of my Voucher</h6>
        <Button type="primary" size="large" onClick={handleNavigate}>
          Create Coupon
        </Button>
      </div>
      <TableVoucher />
      <p>hhahahha</p>
    </Card>
  );
};

export default VoucherList;
