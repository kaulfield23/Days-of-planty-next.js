import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { PlantsTypes } from 'utils/types';
import CategoryIndicator, { PlantCategoryEnum } from './CategoryIndicator';
import Link from 'next/link';

interface PlantCardProps {
  plants: PlantsTypes[];
}

const PlantCard = ({ plants }: PlantCardProps) => {
  const theme = useTheme();
  const isMobileSize = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center">
      {plants.length === 0 && <CircularProgress sx={{ mt: 3 }} />}
      {plants.length > 0 && (
        <>
          {plants.map((plant) => {
            const fixedPath = plant.name.includes(' ')
              ? plant.name.replace(' ', '_')
              : plant.name;
            return (
              <Link
                href={{
                  pathname: `/plants/${fixedPath}`,
                  query: { plantId: `${plant._id}` },
                }}
                onClick={() =>
                  sessionStorage.setItem(
                    'scrollPosition',
                    `${window.pageYOffset}`
                  )
                }
                key={plant.name}
              >
                <Card
                  sx={{
                    maxWidth: 350,
                    p: 1,
                    m: 1,
                    height: '97%',
                    '&:hover': {
                      transition: 'background-color 0.4s ease-out',
                      background: '#baf8f37f',
                    },
                  }}
                >
                  <CategoryIndicator
                    plantCategory={plant.category as PlantCategoryEnum}
                    height={20}
                  />
                  <CardMedia
                    component="img"
                    height={isMobileSize ? 300 : 450}
                    image={`/static/img/${plant.imgName}.png`}
                    alt={plant.name}
                  />
                  <CardContent>
                    <Typography
                      variant="h4"
                      component="div"
                      sx={{ textTransform: 'capitalize' }}
                    >
                      {plant.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {plant.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </>
      )}
    </Box>
  );
};

export default PlantCard;
