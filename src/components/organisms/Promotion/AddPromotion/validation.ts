export const rules = {
  name: [
    {
      required: true,
      message: 'Please input voucher name',
    },
    {
      min: 3,
      message: 'Voucher name must be at least 3 characters',
    },
    {
      max: 5,
      message: 'Voucher name must be at most 5 characters',
    },
  ],
  period: [
    {
      required: true,
      message: 'Please input voucher period',
    },
  ],
  amount: [
    {
      required: true,
      message: 'Please input voucher amount',
    },
  ],
  minimum: [
    {
      required: true,
      message: 'Please input voucher minimum',
    },
  ],
  quota: [
    {
      required: true,
      message: 'Please input voucher quota',
    },
  ],
};
