import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from '@mui/material';
import { PlantsTypes } from 'utils/types';
import ColorIndicator, { PlantCategoryEnum } from './ColorIndicator';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
// import { useRouter } from 'next/router';

interface PlantCardProps {
  plants: PlantsTypes[];
}

const PlantCard = ({ plants }: PlantCardProps) => {
  const router = useRouter();
  // const itemLoads = useAppSelector((state) => state.plantsReducer.itemLoads);

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center">
      {plants.length === 0 && <CircularProgress sx={{ mt: 3 }} />}
      {plants.length > 0 && (
        <>
          {plants.map((plant) => {
            const fixedPath = plant.name.includes(' ')
              ? plant.name.replace(' ', '_')
              : plant.name;
            console.log(plant);
            return (
              <Card sx={{ maxWidth: 350, padding: 1, m: 2 }} key={plant.name}>
                <Link
                  href={{
                    pathname: `/plants/${fixedPath}`,
                    query: { plantId: `${plant._id}` },
                  }}
                >
                  <CardActionArea>
                    <ColorIndicator
                      plantCategory={plant.category as PlantCategoryEnum}
                    />
                    <CardMedia
                      component="img"
                      height="450"
                      image={`/static/img/${plant.imgName}.png`}
                      alt={plant.name}
                    />
                    <CardContent>
                      <Typography
                        variant="h4"
                        component="div"
                        // sx={{ textTransform: 'capitalize' }}
                      >
                        {plant.name}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {plant.desc}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
              </Card>
            );
          })}
        </>
      )}
    </Box>
  );
};

export default PlantCard;
