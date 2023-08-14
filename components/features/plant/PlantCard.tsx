import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { PlantsTypes } from 'utils/types';
import CategoryIndicator, { PlantCategoryEnum } from './ColorIndicator';
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
              <Card sx={{ maxWidth: 350, padding: 1, m: 2 }} key={plant.name}>
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
                >
                  <CardActionArea>
                    <CategoryIndicator
                      plantCategory={plant.category as PlantCategoryEnum}
                      height={20}
                    />
                    <CardMedia
                      component="img"
                      height={isMobileSize ? 350 : 450}
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
