import { Button, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface DiaryBtnProps {
  onClickWriteDiary: () => void;
}

const DiaryBtn = ({ onClickWriteDiary }: DiaryBtnProps) => {
  return (
    <Box
      sx={{
        position: { xs: '', md: 'absolute' },
        bottom: { xs: 0, md: 40 },
        right: { xs: 0, md: 40 },
        mt: 1,
      }}
    >
      <Button
        type="submit"
        variant="contained"
        startIcon={<AddIcon />}
        sx={{
          marginTop: 0.5,
          color: 'white',
          fontWeight: 'bold',
        }}
        onClick={onClickWriteDiary}
      >
        Write diary
      </Button>
    </Box>
  );
};

export default DiaryBtn;
