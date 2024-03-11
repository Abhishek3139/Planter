import { createSlice } from '@reduxjs/toolkit';

import { PlantState } from '../../modals/plantsModal';
import { GetAllPlants } from '../thunkApi/plantsApi';
import { RootState } from '../store';

const initialState: PlantState = {
  isLoading: false,
  error: null,
  plants: [],
};

export const plantSlice = createSlice({
  name: 'plant',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //register
    builder
      .addCase(GetAllPlants.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetAllPlants.fulfilled, (state, action: any) => {
        state.isLoading = false;
        state.plants = action.payload;
      })
      .addCase(GetAllPlants.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

// selectors
export const selectIsLoading = (state: RootState) => state.plant.isLoading;
export const selectAllPlants = (state: RootState) => state.plant.plants;

export const plantReducer = plantSlice.reducer;
