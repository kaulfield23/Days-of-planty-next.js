import { Box, CircularProgress, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { DiaryStyle } from 'styles/DiaryStyle';
import { DiaryTypes } from 'utils/types';
import { InfoOutlined } from '@mui/icons-material';
import DiaryBtn from './DiaryBtn';
import DiaryFormModal from './DiaryFormModal';

interface DiaryProps {
  plantId: string | null;
}

const Diary = ({ plantId }: DiaryProps) => {
  const [logs, setLogs] = useState<DiaryTypes[]>();
  const [modalOpen, setModalOpen] = useState(false);
  const logList = useRef<null | HTMLDivElement>(null);

  const fetchData = () => {
    fetch(`/api/diary?plantId=${plantId}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) =>
        setLogs(
          data.map((item: DiaryTypes) => ({
            _id: item._id,
            content: item.content,
            date: new Date(item.date),
            name: item.name,
            plantId: item.plantId,
          }))
        )
      );
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (logs !== undefined) {
    logs.sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  const scrollUp = () => {
    logList?.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box>
      {logs === undefined && (
        <Box width="300px">
          <CircularProgress sx={{ color: 'white' }} />
        </Box>
      )}
      {logs !== undefined && (
        <>
          {logs.length === 0 && (
            <Box sx={DiaryStyle.zeroLog}>
              <InfoOutlined sx={{ fontSize: '50px', mb: 2 }} />
              <Typography variant="h5">
                No logs to display. Please write a diary about this plant
              </Typography>
            </Box>
          )}
          {logs.length !== 0 && (
            <Box sx={DiaryStyle.diarySection}>
              <Typography
                variant="h4"
                color="customBlack.main"
                sx={{ textAlign: 'center' }}
              >
                Log
              </Typography>
              <Box sx={DiaryStyle.logBox} ref={logList}>
                {logs.map((log, index) => {
                  return (
                    <Box
                      sx={{
                        mb: 4,
                        '&:hover': {
                          bgcolor: '#6d616127',
                        },
                        color: '#2b2828',
                        p: 1,
                      }}
                      key={`log-${index}`}
                    >
                      <Box sx={DiaryStyle.titleDate}>
                        <Typography variant="h6">Title : {log.name}</Typography>
                        <Typography variant="h6">
                          {log.date.toISOString().split('T')[0]}
                        </Typography>
                      </Box>
                      <Typography variant="body1">{log.content}</Typography>
                    </Box>
                  );
                })}
                <Typography variant="h2"></Typography>
              </Box>
              <DiaryBtn onClickWriteDiary={() => setModalOpen(true)} />
              {modalOpen && (
                <DiaryFormModal
                  open={modalOpen}
                  onClickClose={() => setModalOpen(false)}
                  onDataAdd={() => {
                    fetchData();
                    scrollUp();
                  }}
                />
              )}
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default Diary;
