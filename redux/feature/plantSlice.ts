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
    const res = await fetch('/api/plants');
    console.log(res.json());

    // return JSON.parse(res.body);
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
    builder
      .addCase(fetchPlants.pending, (state, action) => {
        // console.log(action, ' pending');
      })
      .addCase(fetchPlants.fulfilled, (state, action) => {
        state.plants = action.payload;
      });
  },
});

// export async function fetchPlants(dispatch: any) {
//   const client = await clientPromise;
//   const db = client.db('planty');
//   const plants = await db.collection('plants').find({}).toArray();
//   // return JSON.stringify(plants);
//   dispatch({ type: 'hey', payload: plants });
// }

export default plantsSlice;
export const { plantsLoad } = plantsSlice.actions;
