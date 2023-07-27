import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import ColorIndicator from './ColorIndicator';

interface PlantCardProps {
  plants: any;
}
const PlantCard = ({ plants }: PlantCardProps) => {
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center">
      {plants.map((plant: any) => {
        return (
          <Card sx={{ maxWidth: 350, padding: 1, m: 2 }} key={plant.name}>
            <CardActionArea>
              <ColorIndicator plantCategory={plant.category} />
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
                <Typography variant="body2" color="text.secondary">
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
