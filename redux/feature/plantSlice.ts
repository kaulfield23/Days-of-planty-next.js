import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlantsTypes } from 'utils/types';
export interface PlantStoreSlice {
  plants: PlantsTypes[];
  comments: [];
}
const initialState: PlantStoreSlice = {
  plants: [],
  comments: [],
};

export const plantsSlice = createSlice({
  initialState,
  name: 'plants',
  reducers: {
    plantsLoad: () => {},
  },
});

export default plantsSlice;
export const { plantsLoad } = plantsSlice.actions;
