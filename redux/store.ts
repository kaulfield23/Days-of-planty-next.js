import { configureStore } from '@reduxjs/toolkit';
import plantsSlice from './feature/plantSlice';

export const store = configureStore({
  reducer: {
    plantsReducer: plantsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
