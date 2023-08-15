import { Box, ClickAwayListener, SxProps, Theme, Tooltip } from '@mui/material';
import { Favorite, HeartBrokenOutlined, ModeEdit } from '@mui/icons-material';
import { useState } from 'react';

interface PlantConditionProps {
  condition: number;
  maxNum: number;
  onClickEdit: (value: boolean) => void;
  onClickHeart: (value: number) => void;
}

const PlantCondition = ({
  condition,
  maxNum,
  onClickEdit,
  onClickHeart,
}: PlantConditionProps) => {
  const [hoverIndex, setHoverIndex] = useState(condition - 1);
  const [onEditMode, setOnEditMode] = useState(false);

  const iconStyle = (onEditMode: boolean) => {
    return { color: '#4f755f', cursor: onEditMode ? 'pointer' : '' };
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
              sx={iconStyle(onEditMode)}
              key={`heart-${index}`}
              onClick={() => onClickHeart(index)}
            />
          ) : (
            <HeartBrokenOutlined
              sx={iconStyle(onEditMode)}
              onClick={() => onClickHeart(index)}
            />
          )}
        </Box>
      );
    } else {
      return index < condition ? (
        <Favorite
          sx={iconStyle(onEditMode)}
          key={`heart-${index}`}
          onClick={() => onClickHeart(index)}
        />
      ) : (
        <HeartBrokenOutlined
          sx={iconStyle(onEditMode)}
          onClick={() => onClickHeart(index)}
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
        <Box>
          {Array.from({ length: maxNum }, (_, index) => (
            <Box key={`heart-${index}`}>{renderHearts(index)}</Box>
          ))}
        </Box>
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
