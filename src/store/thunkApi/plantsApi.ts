import { createAsyncThunk } from '@reduxjs/toolkit';

import { ParamsTypes, commonApi } from '../../api/commonApi';
import { AllPlantsResponse } from '../../modals/plantsModal';

export const GetAllPlants = createAsyncThunk(
  'api/plants',
  async (paramsPayload: ParamsTypes, thunkAPI) => {
    try {
      const response: AllPlantsResponse = await commonApi.getData('api/v1/plants', paramsPayload);
      return response.data.data.plants;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response);
    }
  },
);
export const TopCheapestPlants = createAsyncThunk('api/topCheapest', async (_, thunkAPI) => {
  try {
    const response: AllPlantsResponse = await commonApi.getData('api/v1/plants/top-5-cheap');
    return response.data.data.plants;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response);
  }
});
