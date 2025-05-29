import { createAsyncThunk } from "@reduxjs/toolkit";
import { commonApi } from "../../api/commonApi";
import { toast } from "react-toastify";

export const GetUser = createAsyncThunk(
  'api/user',
  async (paramsPayload: string, thunkAPI) => {
    try {
      const response = await commonApi.getData(`api/v1/users/${paramsPayload}`);
      return response.data.data.doc;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response);
    }
  },
);

export const UpdateMe = createAsyncThunk(
  'auth/UpdateMe',
  async (userData:any, thunkAPI) => {
    try {
      const response = await commonApi.patchData(
        'api/v1/users/updateMe',
        userData,
      );
      toast.success(response.data.data.message)
      return response.data; 
    } catch (error: any) {
    
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);