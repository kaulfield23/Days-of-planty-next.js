import {
  Box,
  FormLabel,
  styled,
  TextareaAutosize,
  Button,
  TextField,
  FormControl,
  Divider,
  Typography,
  Fade,
} from '@mui/material';
import { blue } from '@mui/material/colors';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarToday, WarningAmber, InfoRounded } from '@mui/icons-material';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
    width: 100%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 2px;
    background: white;
    border:none;

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${
        theme.palette.mode === 'dark' ? blue[600] : blue[200]
      };
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
);
type DiaryFormType = {
  name: string;
  date: Date | null;
  content: string;
  plantId: string | null;
};

interface DiaryFormProps {
  onClickClose: () => void;
  onDataAdd: () => void;
}

const DiaryForm = ({ onClickClose, onDataAdd }: DiaryFormProps) => {
  const plantId = useSearchParams().get('plantId');
  const [charNum, setCharNum] = useState(0);
  const [showDiaryForm, setShowDiaryForm] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [diaryContent, setDiaryContent] = useState<DiaryFormType>({
    name: '',
    date: new Date(),
    content: '',
    plantId: plantId,
  });

  const handleAdd = () => {
    if (diaryContent.name !== '' && diaryContent.content !== '') {
      fetch(`/api/diary`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(diaryContent),
      }).then((res) => {
        if (res.status === 200) {
          onClickClose();
          onDataAdd();
        } else {
          setShowDiaryForm(false);
        }
      });
    }
  };

  return (
    <Box>
      {showDiaryForm && (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box display="flex">
            <Box display="flex" flexDirection="column">
              <FormControl required>
                <FormLabel sx={{ textAlign: 'start', color: 'white' }}>
                  Title
                </FormLabel>
                <TextField
                  variant="outlined"
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    border: 'none',
                  }}
                  inputProps={{ maxLength: 40 }}
                  size="small"
                  onChange={(e) => {
                    setTimeout(() => {
                      setDiaryContent((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }));
                    }, 500);
                  }}
                />
              </FormControl>
            </Box>
            <Box display="flex" flexDirection="column" sx={{ ml: 0.8 }}>
              <FormControl required>
                <Box display="flex">
                  <CalendarToday sx={{ fontSize: '20px', mr: 0.7 }} />
                  <FormLabel sx={{ textAlign: 'start', color: 'white' }}>
                    Date
                  </FormLabel>
                </Box>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => {
                    setDiaryContent((prev) => ({
                      ...prev,
                      date: date,
                    }));
                    setStartDate(date!);
                  }}
                />
              </FormControl>
            </Box>
          </Box>
          <FormControl required>
            <FormLabel sx={{ textAlign: 'start', color: 'white', mt: 2 }}>
              Diary
            </FormLabel>
            <Box
              sx={{
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '10px',
              }}
            >
              <StyledTextarea
                minRows={3}
                maxLength={350}
                placeholder="Write about the plant here"
                onChange={(e) => {
                  setCharNum(e.target.value.length);
                  setTimeout(() => {
                    setDiaryContent((prev) => ({
                      ...prev,
                      content: e.target.value.trim(),
                    }));
                  }, 300);
                }}
              />
              <Divider sx={{ mt: 1 }} />
              <Box display="flex" justifyContent="space-between">
                <Typography>{`${charNum} / 350`}</Typography>
                <Button
                  variant="contained"
                  sx={{ marginTop: 0.5, color: 'white' }}
                  onClick={handleAdd}
                >
                  Add
                </Button>
              </Box>
            </Box>
            <Fade in={diaryContent.name === '' || diaryContent.content === ''}>
              <Box display="flex" alignItems="center">
                <InfoRounded sx={{ color: 'orange' }} />
                <Typography variant="h6" color="white">
                  Please fill out the form
                </Typography>
              </Box>
            </Fade>
          </FormControl>
        </Box>
      )}
      {!showDiaryForm && (
        <Box sx={{ textAlign: 'center' }}>
          <WarningAmber sx={{ fontSize: '30px', color: 'orange' }} />
          <Typography variant="h3" sx={{ color: 'white' }}>
            Something went wrong. Please try again
          </Typography>
          <Button
            variant="contained"
            color="info"
            sx={{ mt: 2 }}
            onClick={() => setShowDiaryForm(true)}
          >
            Try again
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default DiaryForm;
