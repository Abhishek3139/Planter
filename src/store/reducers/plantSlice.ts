import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { PlantState, SinglePlantType } from '../../modals/plantsModal';
import { GetAllPlants, TopCheapestPlants } from '../thunkApi/plantsApi';
import { RootState } from '../store';

const initialState: PlantState = {
  isLoading: false,
  error: null,
  plants: [],
  topCheapestPlants: [],
};

export const plantSlice = createSlice({
  name: 'plant',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //get all plants
    builder
      .addCase(GetAllPlants.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetAllPlants.fulfilled, (state, action: PayloadAction<Array<SinglePlantType>>) => {
        state.isLoading = false;
        state.plants = action.payload;
      })
      .addCase(GetAllPlants.rejected, (state) => {
        state.isLoading = false;
      })
      //get top cheapest plants
      .addCase(TopCheapestPlants.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        TopCheapestPlants.fulfilled,
        (state, action: PayloadAction<Array<SinglePlantType>>) => {
          state.isLoading = false;
          state.topCheapestPlants = action.payload;
        },
      )
      .addCase(TopCheapestPlants.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

// selectors
export const selectIsLoading = (state: RootState) => state.plant.isLoading;
export const selectAllPlants = (state: RootState) => state.plant.plants;
export const selectTopCheapestplants = (state: RootState) => state.plant.topCheapestPlants;

export const plantReducer = plantSlice.reducer;
