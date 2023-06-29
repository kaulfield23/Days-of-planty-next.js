import { plantPageStyle } from '@/features/styles/plantPageStyles';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import plant from '../../img/haejuplant-rv.png';
import ficus from '../../img/ficus.png';
import PlantAvatar from '@/features/plant/PlantAvatar';
import cactus from '../../img/cactus.png';
import blueStar from '../../img/blueStar.png';
import PlantTabs from '@/features/plant/PlantTabs';

const Plants = () => (
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
        bgColor={'#b9e7a3'}
      />
      <PlantAvatar
        pic={blueStar.src}
        review={"I thought I wouldn't survive but I'm still alive"}
        name={'Fern'}
        bgColor={'#d3cece'}
      />
      <PlantAvatar
        pic={cactus.src}
        review={"I'm lucky that I don't need so much care"}
        name={'Cactus'}
        bgColor={'#fae790'}
      />
    </Box>
    <Box sx={{ mt: 15, textAlign: 'center' }}>
      <PlantTabs />
    </Box>
  </>
);

export default Plants;
