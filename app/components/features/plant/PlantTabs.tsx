'use client';

import { Box, Tabs, Tab, Typography } from '@mui/material';
import { plantPageStyle } from 'app/styles/PlantPageStyle';
import { useState } from 'react';

const PlantTabs = () => {
  const [value, setValue] = useState(0);

  const TabPanel = (props: any) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  };

  return (
    <Box sx={plantPageStyle.plantTabsBox}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={(e, value) => setValue(value)}
        textColor="primary"
        indicatorColor="primary"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        {['ALL', 'TREE', 'FERN', 'ETC'].map((item) => (
          <Tab label={item} sx={plantPageStyle.plantTab} key={item} />
        ))}
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </Box>
  );
};

export default PlantTabs;
