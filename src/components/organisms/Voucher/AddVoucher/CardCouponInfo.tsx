import { DatePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import React from 'react';
import { Card, FormLabel, Input } from '../../../atoms';
import style from './index.module.scss';
import { rules } from './validation';

const CardCouponInfo: React.FC = () => {
  const { RangePicker } = DatePicker;

  const rangePresets: {
    label: string;
    value: [Dayjs, Dayjs];
  }[] = [
    { label: 'Last 7 Days', value: [dayjs().add(-7, 'd'), dayjs()] },
    { label: 'Last 14 Days', value: [dayjs().add(-14, 'd'), dayjs()] },
    { label: 'Last 30 Days', value: [dayjs().add(-30, 'd'), dayjs()] },
    { label: 'Last 90 Days', value: [dayjs().add(-90, 'd'), dayjs()] },
  ];
  const onRangeChange = (
    dates: null | (Dayjs | null)[],
    dateStrings: string[],
  ) => {
    if (dates) {
      console.log('From: ', dates[0], ', to: ', dates[1]);
      console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
    } else {
      console.log('Clear');
    }
  };
  return (
    <Card className={style.form__voucher__item}>
      <div className={style.form__voucher__item__header}>
        <h3 className={style.form__voucher__item__header__title}>
          Voucher Information
        </h3>
      </div>
      <div className={style.form}>
        <FormLabel
          name="name"
          label="Voucher Name"
          rules={rules.name}
          className={style.form__item}
        >
          <Input
            type="text"
            addonBefore={'BLANCHE'}
            className={style.form__item__input}
          />
        </FormLabel>
        <FormLabel
          className={style.form__item}
          name="period"
          rules={rules.period}
          label="
            Voucher Period Time"
        >
          <RangePicker
            presets={rangePresets}
            showTime
            className={style.form__item__input}
            format="YYYY/MM/DD HH:mm:ss"
            onChange={onRangeChange}
            size="large"
          />
        </FormLabel>
      </div>
    </Card>
  );
};

export default CardCouponInfo;
