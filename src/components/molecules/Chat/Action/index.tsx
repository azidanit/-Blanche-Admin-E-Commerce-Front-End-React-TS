import { message } from 'antd';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useAcceptRefundRequestMutation,
  useRejectRefundRequestMutation,
} from '../../../../app/features/refund/refundApiSlice';
import { capitalizeFirstLetter } from '../../../../helpers/capitalizeFirstLetter';
import { IErrorResponse } from '../../../../helpers/types/response.interface';
import { Button } from '../../../atoms';
import style from './index.module.scss';

const Action: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [accept, { isLoading: isLoadingAccept }] =
    useAcceptRefundRequestMutation();
  const [reject, { isLoading: isLoadingReject }] =
    useRejectRefundRequestMutation();

  const handleAccept = async () => {
    try {
      const data = await accept(Number(params.id) || 0).unwrap();
      navigate('/refunds');
      message.success(`Refund request ${data.invoice_code} was accepted`);
    } catch (err) {
      const error = err as IErrorResponse;
      message.error(capitalizeFirstLetter(error.message));
    }
  };

  const handleReject = async () => {
    try {
      const data = await reject(Number(params.id) || 0).unwrap();
      navigate('/refunds');
      message.success(`Refund request ${data.invoice_code} was rejected`);
    } catch (err) {
      const error = err as IErrorResponse;
      message.error(capitalizeFirstLetter(error.message));
    }
  };

  return (
    <div className={style.action}>
      <p>Do you want to accept this request?</p>
      <div className={style.action__group}>
        <Button
          type="primary"
          onClick={handleAccept}
          loading={isLoadingAccept}
          ghost
        >
          Accept
        </Button>
        <Button
          type="primary"
          onClick={handleReject}
          loading={isLoadingReject}
          ghost
          danger
        >
          Reject
        </Button>
      </div>
    </div>
  );
};

export default Action;
