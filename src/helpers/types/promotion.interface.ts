export interface IGetPromotionResponse {
  total_data: number;
  total_page: number;
  current_page: number;
  promotion_banners: IPromotionBanner[];
}

export interface IPromotionBanner {
  id: number;
  name: string;
  description: string;
  image_url: string;
}

export interface IGetPromotionRequest {
  q?: string;
  page?: number;
  limit?: number;
}
