import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ProtectedPage from '../../components/layouts/Auth/ProtectedPage';
import AdminLayout from '../../components/layouts/Admin/AdminLayout';

const Voucher = lazy(() => import('../../pages/Voucher/VoucherList'));
const AddVoucher = lazy(
  () => import('../../pages/Voucher/AddVoucher'),
);


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

     
    ],
  },
 
]);
