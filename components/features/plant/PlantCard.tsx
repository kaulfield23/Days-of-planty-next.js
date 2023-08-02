import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { PlantsTypes } from 'utils/types';
import ColorIndicator, { PlantCategoryEnum } from './ColorIndicator';
import { useRouter } from 'next/navigation';

interface PlantCardProps {
  plants: PlantsTypes[];
}
const PlantCard = ({ plants }: PlantCardProps) => {
  const router = useRouter();

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center">
      {plants.map((plant) => {
        return (
          <Card
            sx={{ maxWidth: 350, padding: 1, m: 2 }}
            key={plant.name}
            onClick={() => {
              const fixedPath = plant.name.includes(' ')
                ? plant.name.replace(' ', '_')
                : plant.name;
              router.push(`/plants/${fixedPath}`);
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
                <Typography sx={{ fontSize: 12 }}>Nickname</Typography>
                <Typography variant="h4" component="div">
                  {plant.nickname}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {plant.desc}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </Box>
  );
};

export default PlantCard;
