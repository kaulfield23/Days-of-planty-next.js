'use client';

import { Box, CircularProgress, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useEffect } from 'react';
import plant from '/public/static/img/haejuplant-rv.png';
import ficus from '/public/static/img/ficus.png';
import cactus from '/public/static/img/cactus.png';
import blueStar from '/public/static/img/blueStar.png';
import PlantAvatar from 'components/features/plant/PlantAvatar';
import { plantPageStyle } from 'styles/PlantPageStyle';
import { fetchPlants } from 'redux/feature/plantSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import PlantTabs from 'components/features/plant/PlantTabs';

const Plants = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPlants());
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
      sessionStorage.removeItem('scrollPosition');
    }
  }, [dispatch]);

  const plants = useAppSelector((state) => state.plantsReducer.plants);

  return (
    <>
      <Box sx={plantPageStyle.header}>
        <Box sx={plantPageStyle.titleBox}>
          <Typography variant="h1" sx={plantPageStyle.title}>
            Plants
          </Typography>
          <Box sx={plantPageStyle.titleDesc}>
            <Typography variant="h5" sx={plantPageStyle.title}>
              Check out my plants and their conditions
            </Typography>
          </Box>
        </Box>
        <Box sx={plantPageStyle.bgPic}>
          <Image src={plant} alt="my plants" width={300} />
        </Box>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-around"
        sx={{ mt: 10 }}
      >
        <PlantAvatar
          pic={ficus.src}
          review={'This is the best website to keep me sane'}
          name={'Rubber tree'}
          bgColor={'customGreen.main'}
        />
        <PlantAvatar
          pic={blueStar.src}
          review={"I thought I wouldn't survive but I'm still alive"}
          name={'Fern'}
          bgColor={'customGrey.main'}
        />
        <PlantAvatar
          pic={cactus.src}
          review={"I'm lucky that I don't need so much care"}
          name={'Cactus'}
          bgColor={'customYellow.main'}
        />
      </Box>
      <Box sx={{ mt: 15, textAlign: 'center' }}>
        <>
          {plants === undefined && <CircularProgress sx={{ mt: 3 }} />}
          {plants !== undefined && <PlantTabs plants={plants} />}
        </>
      </Box>
    </>
  );
};

export default Plants;
