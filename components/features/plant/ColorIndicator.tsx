import { Box, Typography } from '@mui/material';
import { theme } from 'styles/theme';

export enum PlantCategoryEnum {
  FERN = 'fern',
  ALL = 'all',
  TREE = 'tree',
  ETC = 'etc',
}

interface ColorIndicatorProps {
  plantCategory: PlantCategoryEnum;
  height: number;
  text?: string;
  padding?: number;
}
const CategoryIndicator = ({
  plantCategory,
  height,
  text,
  padding,
}: ColorIndicatorProps) => {
  let tagColor;

  if (plantCategory === PlantCategoryEnum.ALL) {
    tagColor = 'customPink.main';
  } else if (plantCategory === PlantCategoryEnum.FERN) {
    tagColor = 'customGrey.main';
  } else if (plantCategory === PlantCategoryEnum.TREE) {
    tagColor = 'customGreen.main';
  } else {
    tagColor = 'customYellow.main';
  }

  return (
    <Box
      bgcolor={tagColor}
      sx={{
        height: height,
        padding: padding,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {text && (
        <Typography
          variant="h6"
          sx={{ color: '#292621', textTransform: 'capitalize' }}
        >
          {text}
        </Typography>
      )}
    </Box>
  );
};

export default CategoryIndicator;
