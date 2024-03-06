import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { encryptData } from '../../utils/utils';
import { RootState } from '../store';
import {
  AuthState,
  LoginResponse,
  RegisterResponse,
  userCredentialsLogin,
  userCredentialsRegister,
} from '../../modals/authModals';
import { commonApi } from '../../api/commonApi';

const initialState: AuthState = {
  isLoading: false,
  user: null,
  error: null,
  isLoggedIn: false,
  isRegistered: false,
};
export const RegisterUser = createAsyncThunk(
  'auth/registerUser',
  async (userCredentialsRegister: userCredentialsRegister, thunkAPI) => {
    try {
      const response: RegisterResponse = await commonApi.postData(
        'api/v1/users/signup',
        userCredentialsRegister,
      );
      return response.data.data.user; // assuming the response contains user data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response);
    }
  },
);
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userCredentialsLogin: userCredentialsLogin, thunkAPI) => {
    try {
      const response: LoginResponse = await commonApi.postData(
        'api/v1/users/login',
        userCredentialsLogin,
      );
      encryptData('token', response.data.token);
      return response.data.data.data.user; // assuming the response contains user data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response);
    }
  },
);

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
        // debugger;
        state.isLoading = false;
      })

      //login
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.error = null;
        encryptData('isLoggedIn', true);
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload.data.message;
      });
  },
});

// selectors
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectIsRegistered = (state: RootState) => state.auth.isRegistered;

export const selectLoginError = (state: RootState) => state.auth.error;

export const authReducer = authSlice.reducer;
