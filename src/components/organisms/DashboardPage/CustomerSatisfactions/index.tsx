import React from 'react';
import { useGetDashboardCustomerSatisfactionsQuery } from '../../../../app/features/dashboard/dashboardApiSlice';
import style from '../index.module.scss';
import { DualAxes } from '@ant-design/plots';

interface CustomerSatisfactionsProps {
  date: {
    start_date: string;
    end_date: string;
  };
}

const CustomerSatisfactions: React.FC<CustomerSatisfactionsProps> = ({
  date,
}) => {
  const { data, isLoading } = useGetDashboardCustomerSatisfactionsQuery(date);

  const config = {
    xField: 'date',
    yField: ['review', 'count'],
    geometryOptions: [
      {
        geometry: 'column',
      },
      {
        geometry: 'line',
        lineStyle: {
          lineWidth: 2,
        },
      },
    ],
  };

  return (
    <div className={style.dp}>
      <div className={style.dp__header}>
        <h3 className={style.dp__title}>Customer Satisfactions</h3>
        <p className={style.dp__info}>
          Review is the number of average review that a business has received
          for the last 30 days. Count is the number of total review that a
          business has received for the last 30 days.
        </p>
      </div>
      {data && <DualAxes loading={isLoading} data={[data, data]} {...config} />}
    </div>
  );
};

export default CustomerSatisfactions;
