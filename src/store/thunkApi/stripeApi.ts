import { createAsyncThunk } from '@reduxjs/toolkit';
import { commonApi } from '../../api/commonApi';
import { StripePayload } from '../../modals/cartModals';

export const GetStripeUrl = createAsyncThunk(
  'api/stripePayment',
  async (stripePayload: StripePayload, thunkAPI) => {
    try {
      const response: any = await commonApi.postData(
        'api/v1/booking/checkout-session',
        stripePayload,
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response);
    }
  },
);
