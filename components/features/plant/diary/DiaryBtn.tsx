import { Button, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import DiaryFormModal from './DiaryFormModal';

const DiaryBtn = () => {
  const [open, setOpen] = useState(false);
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
        onClick={() => setOpen(true)}
      >
        Write diary
      </Button>
      {open && (
        <DiaryFormModal open={open} onClickClose={() => setOpen(false)} />
      )}
    </Box>
  );
};

export default DiaryBtn;
