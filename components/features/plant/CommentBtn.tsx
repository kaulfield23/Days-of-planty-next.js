import { Button, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import CommentModal from './CommentModal';

const CommentBtn = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box
      sx={{
        position: { xs: '', sm: 'absolute' },
        bottom: { xs: 0, sm: 40 },
        right: { xs: 0, sm: 40 },
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
      {open && <CommentModal open={open} onClickClose={() => setOpen(false)} />}
    </Box>
  );
};

export default CommentBtn;
