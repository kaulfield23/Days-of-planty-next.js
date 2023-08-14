import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PlantsTypes } from 'utils/types';

export interface PlantStoreSlice {
  plants: PlantsTypes[];
  comments: [];
  plantTab: number;
}
const initialState: PlantStoreSlice = {
  plants: [],
  comments: [],
  plantTab: 0,
};

export const fetchPlants = createAsyncThunk('plants/fetchPlants', async () => {
  try {
    const response = await fetch('/api/plants').then((res) => res.json());

    return response;
  } catch (e) {
    console.log(e);
  }
});

export const plantsSlice = createSlice({
  initialState,
  name: 'plants',
  reducers: {
    updatePlantTab: (state, action) => {
      state.plantTab = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPlants.pending, (state, action) => {});
    builder.addCase(fetchPlants.fulfilled, (state, action) => {
      state.plants = action.payload;
    });
  },
});

export default plantsSlice;
export const { updatePlantTab } = plantsSlice.actions;
