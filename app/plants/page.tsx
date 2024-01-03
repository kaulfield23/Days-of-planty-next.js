'use client';

import { Box, CircularProgress, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useEffect } from 'react';
import plant from '/public/static/img/haejuplant-rv.png';
import { plantPageStyle } from 'styles/PlantPageStyle';
import PlantAvatar from 'features/plant/PlantAvatar';
import PlantTabs from 'features/plant/PlantTabs';
import usePlants from 'features/plant/hook/usePlants';

const Plants = () => {
  const plants = usePlants();

  useEffect(() => {
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
      sessionStorage.removeItem('scrollPosition');
    }
  }, []);

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
          pic={'ficus'}
          review={'This is the best website to keep me sane'}
          name={'Rubber tree'}
          bgColor={'customGreen.main'}
        />
        <PlantAvatar
          pic={'bluestar'}
          review={"I thought I wouldn't survive but I'm still alive"}
          name={'Fern'}
          bgColor={'customGrey.main'}
        />
        <PlantAvatar
          pic={'cactus'}
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
