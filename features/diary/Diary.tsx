import {
  Box,
  CircularProgress,
  Divider,
  IconButton,
  Typography,
} from '@mui/material';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { DiaryStyle } from 'styles/DiaryStyle';
import { DiaryTypes } from 'utils/types';
import { Delete, InfoOutlined } from '@mui/icons-material';
import AddBtn from './AddBtn';
import DiaryFormModal from './DiaryFormModal';
import Confirmation from 'features/Confirmation';

interface DiaryProps {
  plantId: string | null;
}

const Diary = ({ plantId }: DiaryProps) => {
  const [logs, setLogs] = useState<DiaryTypes[]>();
  const [modalOpen, setModalOpen] = useState(false);
  const [logId, setLogId] = useState<string | null>(null);
  const logList = useRef<null | HTMLDivElement>(null);

  const fetchData = useCallback(async () => {
    const res = await fetch(`/api/diary?plantId=${plantId}`, { method: 'GET' });
    const data = await res.json();
    setLogs(
      data.map((item: DiaryTypes) => ({
        _id: item._id,
        content: item.content,
        date: new Date(item.date),
        name: item.name,
        plantId: item.plantId,
      }))
    );
  }, [plantId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const sortedLogs = useMemo(() => {
    if (logs !== undefined) {
      return logs.sort((a, b) => b.date.getTime() - a.date.getTime());
    }
  }, [logs]);

  const scrollUp = () => {
    logList?.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = () => {
    setLogId(null);
    fetch(`/api/diary`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(logId),
    }).then((res) => {
      if (res.status === 200) {
        fetchData();
      }
    });
  };

  return (
    <Box sx={{ marginBottom: '20px' }}>
      {sortedLogs === undefined && (
        <Box width="300px" display="flex" justifyContent="center">
          <CircularProgress sx={{ color: 'white' }} />
        </Box>
      )}
      {sortedLogs !== undefined && (
        <>
          {sortedLogs.length !== 0 && (
            <Box sx={DiaryStyle.diarySection}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 1,
                }}
              >
                <Typography
                  variant="h4"
                  color="customBlack.main"
                  sx={{ marginX: 'auto', pl: '18px' }}
                >
                  Logs
                </Typography>
                <AddBtn onClickWriteDiary={() => setModalOpen(true)} />
              </Box>
              <Box sx={DiaryStyle.logBox} ref={logList}>
                {sortedLogs.map((log, index) => {
                  return (
                    <Box
                      sx={{
                        mb: 1,
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
                        <Box display="flex" alignItems="center">
                          <Typography variant="h6" sx={{ mr: 0.2 }}>
                            {log.date.toISOString().split('T')[0]}
                          </Typography>
                          <IconButton
                            onClick={() => {
                              setLogId(log._id.toString());
                            }}
                          >
                            <Delete color="error" />
                          </IconButton>
                        </Box>
                      </Box>
                      <Typography variant="body1">{log.content}</Typography>
                      <Divider sx={{ mt: 2 }} />
                    </Box>
                  );
                })}
              </Box>
            </Box>
          )}
          {sortedLogs.length === 0 && (
            <Box sx={DiaryStyle.zeroLog}>
              <InfoOutlined sx={{ fontSize: '50px', mb: 2 }} />
              <Typography variant="h5">
                No logs to display. Please write a diary about this plant
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: '10px',
                  p: 1,
                  mt: 2,
                  backgroundColor: '#f0f08d',
                  color: '#459acf',
                  cursor: 'pointer',
                }}
                onClick={() => setModalOpen(true)}
              >
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '25px',
                  }}
                >
                  Add
                </Typography>
              </Box>
            </Box>
          )}
        </>
      )}
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
      {logId && (
        <Confirmation
          open={logId}
          onClickClose={() => setLogId(null)}
          onConfirm={handleDelete}
        />
      )}
    </Box>
  );
};

export default Diary;
