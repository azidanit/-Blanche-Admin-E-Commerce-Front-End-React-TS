import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ProtectedPage from '../../components/layouts/Auth/ProtectedPage';
import AdminLayout from '../../components/layouts/Admin/AdminLayout';

const Voucher = lazy(() => import('../../pages/Voucher/VoucherList'));
const AddVoucher = lazy(() => import('../../pages/Voucher/AddVoucher'));
const Promotion = lazy(() => import('../../pages/Promotion/PromotionList'));
const AddPromotion = lazy(() => import('../../pages/Promotion/AddPromotion'));

export const router = createBrowserRouter([
  {
    element: <AdminLayout />,
    children: [
      {
        path: '/',
        element: <Voucher />,
        children: [],
      },
      {
        path: '/vouchers/create',
        element: <AddVoucher />,
      },
      {
        path: '/promotions',
        element: <Promotion />,
      },
      {
        path: '/promotions/create',
        element: <AddPromotion />,
      },
    ],
  },
]);
