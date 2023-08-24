'use client';

import {
  Box,
  Button,
  Divider,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
  Zoom,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { PlantDetailStyle } from 'styles/PlantDetailStyle';
import {
  WaterDrop,
  WbSunny,
  LocalFloristOutlined,
  MacroOffOutlined,
  ShoppingCartTwoTone,
  RemoveCircle,
} from '@mui/icons-material';
import PlantCareScale from 'components/features/plant/PlantCareScale';
import CategoryIndicator, {
  PlantCategoryEnum,
} from 'components/features/plant/CategoryIndicator';
import PlantCondition from 'components/features/plant/PlantCondition';
import BackButton from 'components/BackButton';
import { useState } from 'react';
import { fetchPlants } from 'redux/feature/plantSlice';
import Diary from 'components/features/plant/diary/Diary';

const PlantDetail = () => {
  const [onEditMode, setOnEditMode] = useState(false);
  const dispatch = useAppDispatch();
  const plants = useAppSelector((state) => state.plantsReducer.plants);
  const plantId = useSearchParams().get('plantId');
  const plant = plants.find((item) => item._id === plantId);

  const theme = useTheme();
  const isMobileSize = useMediaQuery(theme.breakpoints.down('sm'));

  const handleCondition = (index: number) => {
    if (onEditMode) {
      const newValue = { plantId: plantId, newCondition: index + 1 };
      fetch(`/api/plants`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newValue),
      }).then((res) => {
        if (res.status === 200) {
          dispatch(fetchPlants());
        }
      });
    }
  };

  return (
    <>
      {plant !== undefined && (
        <Box sx={PlantDetailStyle.plantBox}>
          <Box sx={!isMobileSize ? PlantDetailStyle.content : {}}>
            <BackButton />
            <Box sx={PlantDetailStyle.header}>
              <Image
                src={`/static/img/${plant.imgName}.png`}
                width={isMobileSize ? 300 : 400}
                height={isMobileSize ? 400 : 500}
                alt={plant.name}
              />
            </Box>
            <Box sx={PlantDetailStyle.infoBox}>
              <Box sx={PlantDetailStyle.info}>
                <Box display="flex" justifyContent="center" alignItems="end">
                  <Typography
                    variant="h4"
                    sx={{
                      textTransform: 'capitalize',
                      pt: 5,
                      transition: 'margin-left 0.4s ease-in-out',
                      marginLeft: onEditMode ? '-20px' : '0',
                    }}
                  >
                    {plant.name}
                  </Typography>
                  {onEditMode && (
                    <Zoom in={true}>
                      <Button
                        variant="contained"
                        color="error"
                        size="small"
                        onClick={() => handleCondition(-1)}
                        sx={{
                          ml: 2,
                          mb: 0.8,
                          backgroundColor: '#f35858',
                          color: 'white',
                        }}
                        endIcon={<RemoveCircle />}
                      >
                        Dead
                      </Button>
                    </Zoom>
                  )}
                </Box>
                <PlantCondition
                  condition={plant.condition}
                  maxNum={5}
                  onClickEdit={(value) => setOnEditMode(value)}
                  onClickHeart={(value) => handleCondition(value)}
                />
                <Typography
                  variant="h6"
                  sx={{ textTransform: 'capitalize', pt: 1 }}
                >
                  Nickname: {plant.nickname}
                </Typography>
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
                        <ShoppingCartTwoTone
                          sx={{ mr: 0.5, fontSize: '30px' }}
                        />
                      </Tooltip>
                      <Typography variant="h6">
                        {new Date(plant.date).toISOString().split('T')[0]}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box sx={PlantDetailStyle.desc}>
                  <Typography sx={{ fontSize: '20px' }}>
                    {plant.desc}
                  </Typography>
                </Box>
              </Box>
              <Divider
                orientation="vertical"
                variant="middle"
                flexItem
                sx={{ bgcolor: 'white', mx: { xs: 0.8, sm: 1 } }}
              />
              <Diary plantId={plantId} />
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default PlantDetail;
