import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import clientPromise from 'lib/mongo';
import { store } from 'redux/store';
import { PlantsTypes } from 'utils/types';
export interface PlantStoreSlice {
  plants: PlantsTypes[];
  comments: [];
}
const initialState: PlantStoreSlice = {
  plants: [],
  comments: [],
};

export const fetchPlants = createAsyncThunk('plants/fetchPlants', async () => {
  try {
    const response = await fetch('/api/plants').then((res) => res.json());

    return response;
  } catch {
    console.log('error');
  }
});

export const plantsSlice = createSlice({
  initialState,
  name: 'plants',
  reducers: {
    plantsLoad: (state, action) => {
      state.plants = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPlants.fulfilled, (state, action) => {
      state.plants = action.payload;
    });
  },
});

export default plantsSlice;
export const { plantsLoad } = plantsSlice.actions;
