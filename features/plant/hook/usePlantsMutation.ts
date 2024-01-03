import { updatePlantTab } from 'redux/feature/plantSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

export default function usePlantsMutations() {
  const dispatch = useAppDispatch();
  const plantTab = useAppSelector((state) => state.plantsReducer.plantTab ?? 0);

  const updatePlantTabIndex = (value: number) => {
    dispatch(updatePlantTab(value));
  };
  return { plantTab, updatePlantTabIndex };
}
