import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { encryptData } from '../../utils/utils';
import { RootState } from '../store';
import { AuthState } from '../../modals/authModals';
import { RegisterUser, loginUser } from '../thunkApi/authApi';

const initialState: AuthState = {
  isLoading: false,
  user: null,
  error: null,
  isLoggedIn: false,
  isRegistered: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //register
    builder
      .addCase(RegisterUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(RegisterUser.fulfilled, (state, action: any) => {
        state.isLoading = false;
        state.user = action.payload.data;
        state.isRegistered = true;
      })
      .addCase(RegisterUser.rejected, (state) => {
        state.isLoading = false;
      })

      //login
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = true;
        state.user = action.payload;
        state.error = null;
        encryptData('isLoggedIn', true);
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload.data;
      });
  },
});

// selectors
export const selectLoginLoading = (state: RootState) => state.auth.isLoading;
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectIsRegistered = (state: RootState) => state.auth.isRegistered;
export const selectLoginError = (state: RootState) => state.auth.error;

export const authReducer = authSlice.reducer;
