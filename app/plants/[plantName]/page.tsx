'use client';
import {
  Box,
  Divider,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useAppSelector } from 'redux/hooks';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { PlantDetailStyle } from 'styles/PlantDetailStyle';
import {
  WaterDrop,
  WbSunny,
  LocalFloristOutlined,
  MacroOffOutlined,
  ShoppingCartTwoTone,
} from '@mui/icons-material';
import PlantCareScale from 'components/features/plant/PlantCareScale';
import CategoryIndicator, {
  PlantCategoryEnum,
} from 'components/features/plant/ColorIndicator';
import PlantCondition from 'components/features/plant/PlantCondition';

const PlantDetail = () => {
  const plants = useAppSelector((state) => state.plantsReducer.plants);
  const plantId = useSearchParams().get('plantId');
  const plant = plants.find((item) => item._id === plantId);

  const theme = useTheme();
  const isMobileSize = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      {plant !== undefined && (
        <Box sx={PlantDetailStyle.plantBox}>
          <Box sx={PlantDetailStyle.context}>
            <Box sx={PlantDetailStyle.header}>
              <Image
                src={`/static/img/${plant.imgName}.png`}
                width={isMobileSize ? 300 : 400}
                height={isMobileSize ? 400 : 500}
                alt={plant?.name ?? 'empty'}
                // sizes="100vw"
              />
            </Box>
            <Box sx={PlantDetailStyle.info}>
              <Typography
                variant="h4"
                sx={{ textTransform: 'capitalize', pt: 5 }}
              >
                {plant.name}
              </Typography>
              <PlantCondition condition={plant.condition} maxNum={5} />
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
                      <WaterDrop
                        sx={{
                          color: '#a7d1f8',
                          fontSize: { xs: '20px', sm: '30px' },
                        }}
                      />
                      <PlantCareScale
                        input={plant.water}
                        maxNum={5}
                        color={'#a7d1f8'}
                      />
                    </Box>
                    <Box display="flex" alignItems="center">
                      <WbSunny
                        sx={{
                          color: '#ffc548',
                          fontSize: { xs: '20px', sm: '30px' },
                        }}
                      />
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
                    sx={{ bgcolor: 'white', mx: { xs: 0.8, sm: 2 } }}
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
                      {new Date(plant.date).toISOString().split('T')[0]}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={PlantDetailStyle.desc}>
                <Typography sx={{ fontSize: '20px' }}>{plant.desc}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default PlantDetail;
