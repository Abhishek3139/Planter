import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { User, UserState } from '../../modals/userModals';
import { RootState } from '../store';
import { GetUser, UpdateMe } from '../thunkApi/user';

const initialState: UserState = {
  isLoading: false,
  error: null,
  user: {} as User,
  isUserUpdated:false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //get all plants
    builder
      .addCase(GetUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(GetUser.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(UpdateMe.pending, (state) => {
        state.isLoading = true;
        state.isUserUpdated=false
      })
      .addCase(UpdateMe.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isUserUpdated=true
      })
      .addCase(UpdateMe.rejected, (state,action) => {
        state.isLoading = false;
        state.error=action.payload
        state.isUserUpdated=false
      })
      
  },
});

// selectors
export const selectIsLoading = (state: RootState) => state.plant.isLoading;
export const selectUser = (state: RootState) => state.user.user;
export const selectUserError = (state: RootState) => state.user.error;
export const selectIsUserUpdated = (state: RootState) => state.user.isUserUpdated;



export const userReducer = userSlice.reducer;
