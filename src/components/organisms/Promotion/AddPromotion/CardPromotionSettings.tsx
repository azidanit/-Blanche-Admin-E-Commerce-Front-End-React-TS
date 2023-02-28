import { DatePicker, RadioChangeEvent } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import React from 'react';
import { RadioButtonGroup } from '../../..';
import { Card, FormLabel, Input, InputNumber } from '../../../atoms';
import style from './index.module.scss';
import { rules } from './validation';

const values = ['Fixed Amount'];

const CardCouponSettings: React.FC = () => {
  const [discountType, setDiscountType] = React.useState<string>(values[0]);

  const handleChange = (e: RadioChangeEvent) => {
    setDiscountType(e.target.value);
  };

  return (
    <Card className={style.form__promotion__item}>
      <div className={style.form__promotion__item__header}>
        <h3 className={style.form__promotion__item__header__title}>
          Promotion Settings
        </h3>
      </div>
      <div className={style.form}>
        <FormLabel
          className={style.form__item}
          label="Page URL"
          name="amount"
          rules={rules.amount}
        >
          <InputNumber
            className={style.form__item__input}
            addonBefore={'http.blanche.com&q?='}
          />
        </FormLabel>
      </div>
    </Card>
  );
};

export default CardCouponSettings;
