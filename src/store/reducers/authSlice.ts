import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { encryptData } from '../../utils/utils';
import { RootState } from '../store';

interface UserData {
  _id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthState {
  isLoading: boolean;
  user: UserData | null;
  error: string | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoading: false,
  user: null,
  error: null,
  isLoggedIn: false,
};

export interface ErrorState {
  status: string;
  message: string;
}
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userCredentials: { email: string; password: string }, thunkAPI) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_BASE_URL}api/v1/users/login`,
        userCredentials,
      );
      encryptData('token', response.data.token);
      return response.data; // assuming the response contains user data
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
    builder
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
        // debugger;
        state.isLoading = false;
        state.error = action.payload.data.message;
      });
  },
});

// selectors
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectLoginError = (state: RootState) => state.auth.error;

export const authReducer = authSlice.reducer;
