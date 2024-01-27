import { Add } from '@mui/icons-material';
import { Tooltip } from '@mui/material';

interface DiaryBtnProps {
  onClickWriteDiary: () => void;
}

const DiaryBtn = ({ onClickWriteDiary }: DiaryBtnProps) => {
  return (
    <Tooltip title="Add a log">
      <Add
        sx={{
          color: '#459acf',
          fontSize: '37px',
          cursor: 'pointer',
          backgroundColor: '#f0f08d',
          borderRadius: '5px',
        }}
        onClick={onClickWriteDiary}
      />
    </Tooltip>
  );
};

export default DiaryBtn;
