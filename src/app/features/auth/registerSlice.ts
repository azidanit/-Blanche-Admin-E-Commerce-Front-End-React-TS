import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
};

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setEmail } = registerSlice.actions;

export default registerSlice.reducer;
