import { Box, Modal } from '@mui/material';
import React from 'react';
import Comments from './Comments';
interface CommentModalProps {
  open: boolean;
  onClickClose: () => void;
}

const CommentModal = ({ open, onClickClose }: CommentModalProps) => {
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: '700px',
    bgcolor: '#968282',
    boxShadow: 24,
    p: 3,
  };
  console.log('hey');
  return (
    <Modal
      open={open}
      onClose={onClickClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Comments />
      </Box>
    </Modal>
  );
};

export default CommentModal;
