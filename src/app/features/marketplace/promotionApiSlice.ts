import { ExportOutlined } from '@ant-design/icons';
import {
  IGetPromotionRequest,
  IGetPromotionResponse,
} from '../../../helpers/types/promotion.interface';
import { apiSlice } from '../../api/apiSlice';

export const promotionApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getPromotions: build.query<IGetPromotionResponse, IGetPromotionRequest>({
      query: () => ({
        url: '/marketplace/promotion-banners',
        method: 'GET',
      }),
      transformResponse: (response: { data: IGetPromotionResponse }) =>
        response.data,
      transformErrorResponse: (response) => response.data,
      providesTags: ['Promotions'],
    }),
  }),
});

export const { useGetPromotionsQuery } = promotionApi;
