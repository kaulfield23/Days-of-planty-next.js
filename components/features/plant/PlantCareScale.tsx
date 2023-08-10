import CircleIcon from '@mui/icons-material/Circle';
import React from 'react';
interface PlantCareScaleProps {
  input: number;
  maxNum: number;
  color: string;
}
const PlantCareScale = ({ input, maxNum, color }: PlantCareScaleProps) => {
  const renderScale = (index: number) => {
    return <CircleIcon sx={{ color: index < input ? color : 'white' }} />;
  };
  return (
    <>{Array.from({ length: maxNum }, (_, index) => renderScale(index))}</>
  );
};

export default PlantCareScale;
