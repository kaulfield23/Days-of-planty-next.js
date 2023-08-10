import { Box, Tooltip, Typography } from '@mui/material';
import { Favorite, HeartBrokenOutlined } from '@mui/icons-material';
interface PlantConditionProps {
  condition: number;
  maxNum: number;
}
const PlantCondition = ({ condition, maxNum }: PlantConditionProps) => {
  const renderHearts = (index: number) => {
    if (index < condition) {
      return <Favorite sx={{ color: '#4f755f' }} key={`heart-${index}`} />;
    } else {
      return <HeartBrokenOutlined sx={{ color: '#4f755f' }} />;
    }
  };
  return (
    <Tooltip
      title="Condition"
      sx={{ display: 'flex', justifyContent: 'center' }}
    >
      <Box>
        {Array.from({ length: maxNum }, (_, index) => renderHearts(index))}
      </Box>
    </Tooltip>
  );
};

export default PlantCondition;
