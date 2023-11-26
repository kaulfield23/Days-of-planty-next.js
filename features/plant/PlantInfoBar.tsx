import {
  WaterDrop,
  WbSunny,
  LocalFloristOutlined,
  MacroOffOutlined,
  ShoppingCartTwoTone,
} from '@mui/icons-material';
import { Box, Divider, Tooltip, Typography } from '@mui/material';
import React from 'react';
import CategoryIndicator, { PlantCategoryEnum } from './CategoryIndicator';
import PlantCareScale from './PlantCareScale';

interface PlantInforBarProps {
  sun: number;
  water: number;
  category: string;
  flower: boolean;
  date: Date;
}
const PlantInfoBar = ({
  sun,
  water,
  category,
  flower,
  date,
}: PlantInforBarProps) => {
  return (
    <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
      <Box display="flex" justifyContent="space-around">
        <Box display="flex" flexDirection="column">
          <Box display="flex" alignItems="center" sx={{ mb: 0.8 }}>
            <WaterDrop
              sx={{
                color: '#a7d1f8',
                fontSize: { xs: '20px', sm: '30px' },
              }}
            />
            <PlantCareScale input={water} maxNum={5} color={'#a7d1f8'} />
          </Box>
          <Box display="flex" alignItems="center">
            <WbSunny
              sx={{
                color: '#ffc548',
                fontSize: { xs: '20px', sm: '30px' },
              }}
            />
            <PlantCareScale input={sun} maxNum={5} color={'#ffc548'} />
          </Box>
        </Box>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ bgcolor: 'white', mx: { xs: 0.8, sm: 2 } }}
        />
        <Box display="flex" alignItems="center">
          <CategoryIndicator
            plantCategory={category as PlantCategoryEnum}
            height={30}
            text={category}
            padding={1}
          />
          <Tooltip title={flower ? 'Flowering plant' : 'No flower'}>
            {flower ? (
              <LocalFloristOutlined
                sx={{
                  color: '#f7ffae',
                  ml: 0.5,
                  fontSize: { xs: '20px', sm: '30px' },
                }}
              />
            ) : (
              <MacroOffOutlined
                sx={{
                  color: '#f7ffae',
                  ml: 0.5,
                  fontSize: { xs: '20px', sm: '30px' },
                }}
              />
            )}
          </Tooltip>
        </Box>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ bgcolor: 'white', mx: { xs: 0.8, sm: 2 } }}
        />
        <Box display="flex" alignItems="center">
          <Tooltip title="Purchase date">
            <ShoppingCartTwoTone sx={{ mr: 0.5, fontSize: '30px' }} />
          </Tooltip>
          <Typography variant="h6">
            {new Date(date).toISOString().split('T')[0]}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PlantInfoBar;
