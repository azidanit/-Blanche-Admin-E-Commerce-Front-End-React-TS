import { createSlice } from '@reduxjs/toolkit';
import { IGetProfileResponse } from '../../../helpers/types';

interface StateProps {
  user: IGetProfileResponse | null;
  isLoggedIn: boolean;
}

const initialState: StateProps = {
  user: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, logout, setIsLoggedIn } = authSlice.actions;

export default authSlice.reducer;
