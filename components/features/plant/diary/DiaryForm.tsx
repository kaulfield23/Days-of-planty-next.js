import {
  Box,
  FormLabel,
  styled,
  TextareaAutosize,
  Button,
  TextField,
  FormControl,
  Divider,
} from '@mui/material';
import { blue } from '@mui/material/colors';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarToday } from '@mui/icons-material';
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

const DiaryForm = () => {
  const plantId = useSearchParams().get('plantId');
  const [diaryContent, setDiaryContent] = useState<DiaryFormType>({
    name: '',
    date: new Date(),
    content: '',
    plantId: plantId,
  });

  const handleAdd = () => {
    fetch(`/api/diary`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(diaryContent),
    }).then((res) => {
      if (res.status === 200) {
      }
    });
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box display="flex">
          <Box display="flex" flexDirection="column">
            <FormControl required>
              <FormLabel sx={{ textAlign: 'start', color: 'white' }}>
                Name
              </FormLabel>
              <TextField
                variant="outlined"
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  border: 'none',
                }}
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
                selected={new Date()}
                onChange={(date) =>
                  setDiaryContent((prev) => ({
                    ...prev,
                    date: date,
                  }))
                }
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
              maxLength={300}
              placeholder="Write about the plant here"
              onChange={(e) => {
                setTimeout(() => {
                  setDiaryContent((prev) => ({
                    ...prev,
                    content: e.target.value.trim(),
                  }));
                }, 300);
              }}
            />
            <Divider sx={{ mt: 1 }} />
            <Box>
              <Button
                variant="contained"
                sx={{ marginTop: 0.5, color: 'white' }}
                onClick={handleAdd}
              >
                Add
              </Button>
            </Box>
          </Box>
        </FormControl>
      </Box>
    </Box>
  );
};

export default DiaryForm;
