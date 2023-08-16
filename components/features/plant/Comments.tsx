import {
  Box,
  FormLabel,
  styled,
  TextareaAutosize,
  Button,
  TextField,
  InputLabel,
  FormControl,
  Divider,
} from '@mui/material';
import { blue } from '@mui/material/colors';
import { PlantDetailStyle } from 'styles/PlantDetailStyle';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarToday } from '@mui/icons-material';
import { useState } from 'react';

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

const Comments = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
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
                onChange={(date) => setStartDate(date)}
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
            />
            <Divider sx={{ mt: 1 }} />
            <Box>
              <Button
                type="submit"
                variant="contained"
                sx={{ marginTop: 0.5, color: 'white' }}
              >
                Upload
              </Button>
            </Box>
          </Box>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Comments;
