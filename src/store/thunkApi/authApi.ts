import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  LoginResponse,
  RegisterResponse,
  userCredentialsLogin,
  userCredentialsRegister,
} from '../../modals/authModals';
import { commonApi } from '../../api/commonApi';
import { encryptData, errorMsg } from '../../utils/utils';

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
      if (error.response.data.message.includes('email_1 dup key')) {
        errorMsg('Email already exists');
      } else {
        errorMsg(error.response.data.message);
      }
      return thunkAPI.rejectWithValue(error.response.data);
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
      errorMsg(error.response.data.message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);
