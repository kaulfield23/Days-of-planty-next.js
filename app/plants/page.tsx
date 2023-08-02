import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import plant from '/public/static/img/haejuplant-rv.png';
import ficus from '/public/static/img/ficus.png';
import cactus from '/public/static/img/cactus.png';
import blueStar from '/public/static/img/blueStar.png';
import clientPromise from 'lib/mongo';
import PlantAvatar from 'components/features/plant/PlantAvatar';
import PlantTabs from 'components/features/plant/PlantTabs';
import { plantPageStyle } from 'styles/PlantPageStyle';

async function getPlantsData() {
  const client = await clientPromise;
  const db = client.db('planty');
  const plants = await db.collection('plants').find({}).toArray();
  return JSON.stringify(plants);
}

const Plants = async () => {
  const data = await getPlantsData();

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
        <PlantTabs plants={JSON.parse(data)} />
      </Box>
    </>
  );
};

export default Plants;
