import { useEffect } from 'react';
import { fetchPlants } from 'redux/feature/plantSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

export default function usePlants() {
  const plants = useAppSelector((state) => state.plantsReducer.plants);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPlants());
  }, [dispatch]);

  return plants;
}
