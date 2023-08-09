'use client';
import { Box } from '@mui/material';
import { useAppSelector } from 'redux/hooks';

interface PlantDetailProps {
  params: { plantName: string };
}

const PlantDetail = ({ params }: PlantDetailProps) => {
  // const plants = useAppSelector((state) => state.plantsReducer.plants);

  return <Box>{''}</Box>;
};

export default PlantDetail;
