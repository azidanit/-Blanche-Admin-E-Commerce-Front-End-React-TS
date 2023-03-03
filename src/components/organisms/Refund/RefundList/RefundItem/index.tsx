import { Divider, Image } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../../../../helpers/capitalizeFirstLetter';
import {
  dateToDayMonthStringYear,
  dateToMinuteHourMonthStringDayYear,
} from '../../../../../helpers/parseDate';
import { IRefundRequest } from '../../../../../helpers/types/refund.interface';
import { Button, Card, Tag } from '../../../../atoms';
import style from './index.module.scss';
import { MdChatBubbleOutline } from 'react-icons/md';

interface RefundItemProps {
  refund: IRefundRequest;
}

const mapStatusToColor = {
  'waiting for seller approval': 'orange',
  'need approval': 'orange',
  refunded: 'green',
  rejected: 'red',
};

const RefundItem: React.FC<RefundItemProps> = ({ refund }) => {
  const [status, setStatus] = useState('waiting');

  useEffect(() => {
    if (refund.refund_request_statuses.length === 1) {
      if (
        refund.refund_request_statuses[0].rejected_by_seller_at &&
        refund.refund_request_statuses[0].rejected_by_admin_at
      ) {
        setStatus('rejected');
      }
      if (
        refund.refund_request_statuses[0].accepted_by_seller_at &&
        refund.refund_request_statuses[0].accepted_by_admin_at
      ) {
        setStatus('refunded');
      }
      if (
        !refund.refund_request_statuses[0].accepted_by_seller_at &&
        !refund.refund_request_statuses[0].rejected_by_seller_at
      ) {
        setStatus('waiting for seller approval');
      }
      if (
        refund.refund_request_statuses[0].accepted_by_admin_at &&
        !refund.refund_request_statuses[0].rejected_by_admin_at
      ) {
        setStatus('need approval');
      }
    }
  }, [status, refund]);

  return (
    <Card className={style.ti}>
      <div className={style.ti__header}>
        <p className={style.ti__header__title}>Request Refund</p>

        <div className={style.ti__header__date}>
          <Tag
            className={style.ct__header__tag}
            color={mapStatusToColor[status as keyof typeof mapStatusToColor]}
          >
            {capitalizeFirstLetter(status)}
          </Tag>
          <p>
            {dateToMinuteHourMonthStringDayYear(
              new Date(refund.created_at),
              ' ',
            )}
          </p>
        </div>
      </div>
      <div className={style.ti__notes}>
        <p>
          Refund request for invoice{' '}
          <span className={style.ti__invoice}>{refund.invoice_code}</span>
        </p>
      </div>
      <div className={style.ti__flex}>
        <div className={style.ti__body}>
          <Image
            src={refund.image_url}
            alt="refund"
            width={75}
            height={75}
            className={style.ti__body__img}
          />
          <div>
            <p className={style.ti__body__text}>Reason</p>
            <p className={style.ti__body__reason}>{refund.reason}</p>
          </div>
        </div>
        <div className={style.ti__right}>
          <div className={style.ti__right__item}>
            <p className={style.ti__right__text}>User</p>
            <p className={style.ti__right__value}>{refund.username}</p>
          </div>
          <div className={style.ti__right__item}>
            <p className={style.ti__right__text}>Merchant</p>
            <p className={style.ti__right__value}>{refund.merchant_domain}</p>
          </div>
        </div>
      </div>
      <Divider className={style.ti__divider} />
      <div className={style.ti__footer}>
        <Button type="primary" ghost>
          Accept
        </Button>
        <Button type="primary" ghost danger>
          Reject
        </Button>
        <Button type="primary" className={style.ti__footer__chat}>
          <MdChatBubbleOutline />
          <Link to={`/refunds/${refund.id}/messages`}>Chat</Link>
        </Button>
      </div>
    </Card>
  );
};

export default RefundItem;
