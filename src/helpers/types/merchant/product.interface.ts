import { UploadChangeParam, UploadFile } from 'antd/es/upload';

export interface IProductForm {
  category_id: string[];
  condition: string;
  description: string;
  dimension: {
    width: number;
    height: number;
    length: number;
  };
  images: UploadChangeParam<UploadFile>;
  title: string;
  price: number | null;
  status: boolean;
  stock?: number;
  weight: number;
  firstSelect?: string[];
  firstVariant?: string;
  secondSelect?: string[];
  secondVariant?: string;
  variantItems?: IProductVariant[];
}

export interface IProductVariant {
  image: any;
  price: number;
  stock: number;
}

export interface IUploadProductImageResponse {
  image_url: string;
}

export interface ICheckProductNameRequest {
  product_name: string;
}

export interface ICheckProductNameResponse {
  is_available: boolean;
}
