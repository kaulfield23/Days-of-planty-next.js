'use client';
import { Box } from '@mui/material';
import { useAppSelector } from 'redux/hooks';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

interface PlantDetailProps {
  params: { plantName: string };
}

const PlantDetail = ({ params }: PlantDetailProps) => {
  const plants = useAppSelector((state) => state.plantsReducer.plants);
  console.log(plants, 'what');
  const plantId = useSearchParams().get('plantId');
  const plant = plants.find((item) => item._id === plantId);
  console.log(plant);
  return (
    <Box>
      <Image
        src={`/static/img/${plant?.imgName}.png`}
        width={300}
        height={400}
        alt={plant?.name}
      />
    </Box>
  );
};

export default PlantDetail;
