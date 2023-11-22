'use client';

import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
  Zoom,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { PlantDetailStyle } from 'styles/PlantDetailStyle';
import { RemoveCircle } from '@mui/icons-material';
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
      {plant !== undefined && (
        <Box
          sx={{
            display: { xl: 'flex' },
            flexDirection: { xs: 'column' },
            justifyContent: 'center',
          }}
        >
          <BackButton />
          <Box sx={PlantDetailStyle.plantInfo}>
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
                  fontSize: { xs: '25px', sm: '30px' },
                  maxWidth: { xs: '250px', sm: '500px' },
                  textTransform: 'capitalize',
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
          <Box sx={PlantDetailStyle.logBox}>
            <Diary plantId={plantId} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default PlantDetail;
