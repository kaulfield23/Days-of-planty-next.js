import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PlantsTypes } from 'utils/types';

export interface PlantStoreSlice {
  plants: PlantsTypes[];
  itemLoads: 'pending' | 'fulfilled' | '';
  comments: [];
}
const initialState: PlantStoreSlice = {
  plants: [],
  itemLoads: '',
  comments: [],
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPlants.pending, (state, action) => {
      state.itemLoads = action.meta.requestStatus;
    });
    builder.addCase(fetchPlants.fulfilled, (state, action) => {
      state.itemLoads = action.meta.requestStatus;
      state.plants = action.payload;
    });
  },
});

export default plantsSlice;
export const {} = plantsSlice.actions;
