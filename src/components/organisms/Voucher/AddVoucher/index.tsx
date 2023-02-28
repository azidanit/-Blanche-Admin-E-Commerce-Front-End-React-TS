import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button, Alert } from '../../..';
import CardCouponInfo from './CardCouponInfo';
import CardCouponSettings from './CardCouponSettings';
import CardCouponType from './CardCouponType';
import style from './index.module.scss';
import useForms from './useForm';
import { Form as AForm, message } from 'antd';
import dayjs from 'dayjs';
import {
  useGetVoucherByCodeQuery,
  useLazyGetVoucherByCodeQuery,
  useLazyGetVouchersQuery,
} from '../../../../app/features/marketplace/voucherApiSlice';

interface AddVoucherProps {
  isEdit?: boolean;
  isDuplicate?: boolean;
}

const { useForm } = AForm;
const AddVoucher: React.FC<AddVoucherProps> = ({
  isEdit = false,
  isDuplicate = false,
}) => {
  const { handleSubmit, isError, isLoading, error } = useForms(isEdit);

  const { code } = useParams();

  const [form] = useForm();

  const [getVoucherByCode, { isLoading: isLoadingVoucher }] =
    useLazyGetVoucherByCodeQuery();

  const fetchDetailVoucher = async () => {
    try {
      const voucher = await getVoucherByCode({
        code: code as string,
      }).unwrap();

      if (!voucher) {
        return;
      }

      form.setFieldsValue({
        code: isDuplicate ? '' : voucher.code_suffix,
        discount_percentage: voucher.discount_percentage,
        max_discount_nominal: voucher.max_discount_nominal,
        min_order_nominal: voucher.min_order_nominal,
        quota: voucher.quota,
        period: [dayjs(voucher.start_date), dayjs(voucher.end_date)],
      });
    } catch (err) {
      const error = err as Error;
      message.error(error.message);
    }
  };

  useEffect(() => {
    if ((!isEdit && !isDuplicate) || !code) {
      return;
    }

    if (code) {
      fetchDetailVoucher();
    }
  }, [isEdit]);

  return (
    <Form className={style.form__voucher} onFinish={handleSubmit} form={form}>
      <CardCouponType />
      <CardCouponInfo isEdit={isEdit} />
      <CardCouponSettings />
      {isError && (
        <Alert message={error?.message} type="error" showIcon closable />
      )}
      <div className={style.form__voucher__actions}>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          loading={isLoading}
        >
          {isEdit ? 'Edit Voucher' : 'Create Voucher'}
        </Button>
      </div>
    </Form>
  );
};

export default AddVoucher;
