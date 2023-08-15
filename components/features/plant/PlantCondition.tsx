import { Box, ClickAwayListener, Tooltip, Typography } from '@mui/material';
import {
  Favorite,
  HeartBrokenOutlined,
  ModeEdit,
  RemoveCircle,
} from '@mui/icons-material';
import { useState } from 'react';
interface PlantConditionProps {
  condition: number;
  maxNum: number;
  onClickEdit: (value) => void;
}
const PlantCondition = ({
  condition,
  maxNum,
  onClickEdit,
}: PlantConditionProps) => {
  const [hoverIndex, setHoverIndex] = useState(condition - 1);
  const [onEditMode, setOnEditMode] = useState(false);

  const handleCondition = (index: number) => {
    setHoverIndex(index);
  };

  const renderHearts = (index: number) => {
    if (onEditMode) {
      return (
        <Box
          onMouseOver={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(condition - 1)}
        >
          {onEditMode && index <= hoverIndex ? (
            <Favorite
              sx={{
                color: '#4f755f',
                cursor: onEditMode ? 'pointer' : '',
              }}
              key={`heart-${index}`}
              onClick={() => handleCondition(index)}
            />
          ) : (
            <HeartBrokenOutlined
              sx={{
                color: '#4f755f',
                cursor: onEditMode ? 'pointer' : '',
              }}
              onClick={() => handleCondition(index)}
            />
          )}
        </Box>
      );
    } else {
      return index < condition ? (
        <Favorite
          sx={{
            color: '#4f755f',
            cursor: onEditMode ? 'pointer' : '',
          }}
          key={`heart-${index}`}
          onClick={() => handleCondition(index)}
        />
      ) : (
        <HeartBrokenOutlined
          sx={{
            color: '#4f755f',
            cursor: onEditMode ? 'pointer' : '',
          }}
          onClick={() => handleCondition(index)}
        />
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
      <ClickAwayListener
        onClickAway={() => {
          setOnEditMode(false);
          onClickEdit(false);
        }}
      >
        <Box display="flex" alignItems="center">
          <Tooltip title="Edit">
            <ModeEdit
              sx={{
                cursor: 'pointer',
                ml: 1.5,
                '&:hover': { color: '#8f50b9' },
                color: onEditMode ? '#8f50b9' : '',
              }}
              onClick={() => {
                setOnEditMode(true);
                onClickEdit(true);
              }}
            />
          </Tooltip>
        </Box>
      </ClickAwayListener>
    </Box>
  );
};

export default PlantCondition;
