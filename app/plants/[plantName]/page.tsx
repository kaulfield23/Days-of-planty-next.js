'use client';
import { Box, Divider, Tooltip, Typography } from '@mui/material';
import { useAppSelector } from 'redux/hooks';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { PlantDetailStyle } from 'styles/PlantDetailStyle';
import { WaterDrop, WbSunny, FilterVintage, Grass } from '@mui/icons-material';
import PlantCareScale from 'components/features/plant/PlantCareScale';

import CategoryIndicator, {
  PlantCategoryEnum,
} from 'components/features/plant/ColorIndicator';

const PlantDetail = () => {
  const plants = useAppSelector((state) => state.plantsReducer.plants);
  const plantId = useSearchParams().get('plantId');
  const plant = plants.find((item) => item._id === plantId);

  return (
    <>
      {plant !== undefined && (
        <Box sx={PlantDetailStyle.background}>
          <Box sx={PlantDetailStyle.header}>
            <Box sx={PlantDetailStyle.imgBox}></Box>
            <Image
              src={`/static/img/${plant.imgName}.png`}
              width={400}
              height={500}
              alt={plant?.name ?? 'empty'}
            />
          </Box>
          <Box sx={PlantDetailStyle.info}>
            <Typography
              variant="h4"
              sx={{ textTransform: 'capitalize', pt: 5 }}
            >
              {plant!.name}
            </Typography>
            <Typography
              variant="h6"
              sx={{ textTransform: 'capitalize', pt: 1 }}
            >
              Nickname: {plant.nickname}
            </Typography>
            <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
              <Box display="flex" justifyContent="space-around" width="50%">
                <Box display="flex" flexDirection="column">
                  <Box display="flex" alignItems="center" sx={{ mb: 0.8 }}>
                    <WaterDrop sx={{ color: '#a7d1f8', fontSize: '40px' }} />
                    <PlantCareScale
                      input={plant.water}
                      maxNum={5}
                      color={'#a7d1f8'}
                    />
                  </Box>
                  <Box display="flex" alignItems="center">
                    <WbSunny sx={{ color: '#ffc548', fontSize: '40px' }} />
                    <PlantCareScale
                      input={plant.sun}
                      maxNum={5}
                      color={'#ffc548'}
                    />
                  </Box>
                </Box>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{ bgcolor: 'white', mx: 2 }}
                />
                <Box display="flex" alignItems="center">
                  <CategoryIndicator
                    plantCategory={plant.category as PlantCategoryEnum}
                    height={30}
                    text={plant.category}
                    padding={1}
                  />
                  <Tooltip
                    title={plant.flower ? 'Flowering plant' : 'No flower'}
                  >
                    {plant.flower ? (
                      <FilterVintage sx={{ color: '#ff6969', ml: 0.5 }} />
                    ) : (
                      <Grass sx={{ color: '#ceffcc', ml: 0.5 }} />
                    )}
                  </Tooltip>
                </Box>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{ bgcolor: 'white', mx: 2 }}
                />
                <Box display="flex" flexDirection="column">
                  <Box display="flex" alignItems="center" sx={{ mb: 0.8 }}>
                    <WaterDrop sx={{ color: '#a7d1f8', fontSize: '40px' }} />
                    <PlantCareScale
                      input={plant.water}
                      maxNum={5}
                      color={'#a7d1f8'}
                    />
                  </Box>
                  <Box display="flex" alignItems="center">
                    <WbSunny sx={{ color: '#ffc548', fontSize: '40px' }} />
                    <PlantCareScale
                      input={plant.sun}
                      maxNum={5}
                      color={'#ffc548'}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default PlantDetail;
