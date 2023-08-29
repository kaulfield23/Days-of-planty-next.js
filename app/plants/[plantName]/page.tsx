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
import PlantInfoBar from 'components/features/plant/PlantInfoBar';

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
    <Box sx={PlantDetailStyle.plantBox}>
      <BackButton />
      {plant !== undefined && (
        <Box sx={PlantDetailStyle.plantInfo}>
          <Box
            sx={{
              backgroundColor: 'white',
              textAlign: 'center',
            }}
          >
            <Image
              src={`/static/img/${plant.imgName}.png`}
              width={isMobileSize ? 300 : 400}
              height={isMobileSize ? 400 : 500}
              alt={plant.name}
            />
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
            <PlantInfoBar
              sun={plant.sun}
              water={plant.water}
              category={plant.category}
              date={plant.date}
              flower={plant.flower}
            />
            <Box sx={PlantDetailStyle.desc}>
              <Typography sx={{ fontSize: '20px' }}>{plant.desc}</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '0 auto',
              backgroundColor: 'salmon',
            }}
          >
            {/* <Diary plantId={plantId} /> */}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default PlantDetail;
