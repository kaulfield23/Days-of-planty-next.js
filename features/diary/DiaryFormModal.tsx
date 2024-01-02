import { Box, Modal } from '@mui/material';
import DiaryForm from './DiaryForm';
interface DiaryModalProps {
  open: boolean;
  onClickClose: () => void;
  onDataAdd: () => void;
}

const DiaryFormModal = ({ open, onClickClose, onDataAdd }: DiaryModalProps) => {
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    maxWidth: '700px',
    bgcolor: '#968282',
    padding: '50px 10px',
    minHeight: '300px',
  };

  return (
    <Modal
      open={open}
      onClose={onClickClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <DiaryForm onClickClose={onClickClose} onDataAdd={onDataAdd} />
      </Box>
    </Modal>
  );
};

export default DiaryFormModal;
