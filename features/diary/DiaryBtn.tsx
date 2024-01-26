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
        }}
        onClick={onClickWriteDiary}
      />
    </Tooltip>
  );
};

export default DiaryBtn;
