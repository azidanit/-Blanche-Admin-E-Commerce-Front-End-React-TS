import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import {
  RcFile,
  UploadChangeParam,
  UploadFile,
  UploadProps,
} from 'antd/es/upload';
import React, { useState } from 'react';
import { Card, FormLabel, Input, TextArea } from '../../../atoms';
import style from './index.module.scss';
import { rules } from './validation';
import './override.scss';

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return false;
};

const CardCouponInfo: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File>();

  const handleUpload: UploadProps['onChange'] = (
    info: UploadChangeParam<UploadFile>,
  ) => {
    setFile(info.fileList[0].originFileObj);
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <Card className={style.form__promotion__item}>
      <div className={style.form__promotion__item__header}>
        <h3 className={style.form__promotion__item__header__title}>
          Promotion Information
        </h3>
      </div>
      <div className={style.form}>
        <FormLabel
          name="name"
          label="Promotion Name"
          rules={rules.name}
          className={style.form__item}
        >
          <Input type="text" className={style.form__item__input} />
        </FormLabel>
        <FormLabel
          className={style.form__item}
          name="period"
          rules={rules.period}
          label="
            Promotion Description"
        >
          <TextArea />
        </FormLabel>
        <FormLabel
          className={style.form__item}
          name="period"
          rules={rules.period}
          label="
            Image Banner"
        >
          {' '}
          <Upload
            name="avatar"
            listType="picture-card"
            className="upload__image"
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={handleUpload}
          >
            {file ? (
              <img
                src={URL.createObjectURL(file)}
                alt="avatar"
                style={{ width: '100%' }}
              />
            ) : (
              uploadButton
            )}
          </Upload>
        </FormLabel>
      </div>
    </Card>
  );
};

export default CardCouponInfo;
