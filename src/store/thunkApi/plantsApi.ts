import { createAsyncThunk } from '@reduxjs/toolkit';

import { ParamsTypes, commonApi } from '../../api/commonApi';
import { AllPlantsResponse } from '../../modals/plantsModal';

export const GetAllPlants = createAsyncThunk(
  'api/plants',
  async (paramsPayload: ParamsTypes, thunkAPI) => {
    try {
      const response: AllPlantsResponse = await commonApi.getData('api/v1/plants', paramsPayload);
      return response.data.data.plants; // assuming the response contains user data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response);
    }
  },
);
// export const loginUser = createAsyncThunk(
//   'auth/loginUser',
//   async (userCredentialsLogin: userCredentialsLogin, thunkAPI) => {
//     try {
//       const response: LoginResponse = await commonApi.postData(
//         'api/v1/users/login',
//         userCredentialsLogin,
//       );
//       encryptData('token', response.data.token);
//       return response.data.data.user; // assuming the response contains user data
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(error.response);
//     }
//   },
// );
