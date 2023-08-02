import { Box } from '@mui/material';
import { theme } from 'styles/theme';

export enum PlantCategoryEnum {
  FERN = 'fern',
  ALL = 'all',
  TREE = 'tree',
  ETC = 'etc',
}

interface ColorIndicatorProps {
  plantCategory: PlantCategoryEnum;
}
const ColorIndicator = ({ plantCategory }: ColorIndicatorProps) => {
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

  return <Box bgcolor={tagColor} sx={{ height: '20px' }} />;
};

export default ColorIndicator;
