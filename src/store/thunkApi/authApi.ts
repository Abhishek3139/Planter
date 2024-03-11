import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  LoginResponse,
  RegisterResponse,
  userCredentialsLogin,
  userCredentialsRegister,
} from '../../modals/authModals';
import { commonApi } from '../../api/commonApi';
import { encryptData } from '../../utils/utils';

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
      return response.data.data.user; // assuming the response contains user data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response);
    }
  },
);
