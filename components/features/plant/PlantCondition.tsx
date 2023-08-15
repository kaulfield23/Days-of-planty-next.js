import {
  Box,
  ClickAwayListener,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import { Favorite, HeartBrokenOutlined, ModeEdit } from '@mui/icons-material';
import { useState } from 'react';
interface PlantConditionProps {
  condition: number;
  maxNum: number;
}
const PlantCondition = ({ condition, maxNum }: PlantConditionProps) => {
  const [hoverIndex, setHoverIndex] = useState(0);
  const [onEditMode, setOnEditMode] = useState(false);

  const handleCondition = (index: number) => {
    console.log(index + 1);
    setHoverIndex(index);
  };

  const hello = () => {
    console.log('hello');
  };

  const bye = () => {
    console.log('bye');
  };
  const renderHearts = (index: number) => {
    if (index < condition) {
      return (
        <Box
          onMouseOver={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(0)}
        >
          <Favorite
            sx={{
              color: onEditMode && index < hoverIndex ? '#f35959' : '#4f755f',
              cursor: onEditMode ? 'pointer' : '',
              '&:hover': {
                color: onEditMode && index <= hoverIndex ? '#f35959' : '',
              },
            }}
            key={`heart-${index}`}
            onClick={() => handleCondition(index)}
          />
        </Box>
      );
    } else {
      return (
        <Box
          onMouseOver={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(0)}
        >
          <HeartBrokenOutlined
            sx={{
              color: onEditMode && index < hoverIndex ? '#f35959' : '#4f755f',
              cursor: onEditMode ? 'pointer' : '',
              '&:hover': { color: onEditMode ? '#f35959' : '' },
            }}
            onClick={() => handleCondition(index)}
          />
        </Box>
      );
    }
  };

  return (
    <Box display="flex" justifyContent="center">
      <Tooltip
        title="Condition"
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <>
          {Array.from({ length: maxNum }, (_, index) => (
            <Box key={`heart-${index}`}>{renderHearts(index)}</Box>
          ))}
        </>
      </Tooltip>
      <ClickAwayListener onClickAway={() => setOnEditMode(false)}>
        <Tooltip title="Edit">
          <ModeEdit
            sx={{
              cursor: 'pointer',
              ml: 1.5,
              '&:hover': { color: '#8f50b9' },
              color: onEditMode ? '#8f50b9' : '',
            }}
            onClick={() => setOnEditMode(true)}
          />
        </Tooltip>
      </ClickAwayListener>
    </Box>
  );
};

export default PlantCondition;
