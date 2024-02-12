import React from 'react';
import { modalStyle } from './diary/DiaryFormModal';
import { Modal, Box, Typography, Button } from '@mui/material';

interface ConfirmationProps {
  open: string | null;
  onClickClose: () => void;
  onConfirm: () => void;
}

const Confirmation = ({ open, onClickClose, onConfirm }: ConfirmationProps) => {
  return (
    <Modal
      open={open !== null}
      onClose={onClickClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Box
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography
            sx={{ color: 'white', fontWeight: 'bold', fontSize: '30px' }}
          >
            Are you sure you want to delete this log?
          </Typography>
          <Box display="flex" justifyContent="center" mt={6}>
            <Button
              variant="outlined"
              sx={{
                fontSize: '25px',
                color: 'white',
                border: '1px solid white',
                mr: 2,
              }}
              onClick={onClickClose}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: 'white', fontSize: '25px' }}
              onClick={onConfirm}
            >
              OK
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default Confirmation;
