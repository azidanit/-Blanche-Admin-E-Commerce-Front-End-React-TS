import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetMessageRefundRequestQuery } from '../../app/features/refund/refundApiSlice';
import { Chat } from '../../components';
import style from './index.module.scss';

const Messages: React.FC = () => {
  const params = useParams();
  const { data, isLoading } = useGetMessageRefundRequestQuery(
    Number(params.id) || 0,
    { pollingInterval: 60000 },
  );

  return (
    <div className={style.messages}>
      {data && <Chat sender_id={1} data={data} />}
    </div>
  );
};

export default Messages;
