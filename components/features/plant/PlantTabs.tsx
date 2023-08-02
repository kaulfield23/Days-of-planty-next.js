'use client';

import { Box, Tabs, Tab } from '@mui/material';
import { useState } from 'react';
import { plantsLoad } from 'redux/feature/plantSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { plantPageStyle } from 'styles/PlantPageStyle';
import { PlantsTypes } from 'utils/types';
import { PlantCategoryEnum } from './ColorIndicator';
import PlantCard from './PlantCard';
interface PlantTabsProps {
  plants: PlantsTypes[];
}

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

const PlantTabs = ({ plants }: PlantTabsProps) => {
  const dispatch = useAppDispatch();
  dispatch(plantsLoad(plants));
  const hello = useAppSelector((state) => state.plantsReducer.plants);

  const [value, setValue] = useState(0);

  const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  };

  return (
    <Box sx={plantPageStyle.plantTabsBox}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={(e, value) => setValue(value)}
          indicatorColor="primary"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          {['ALL', 'FERN', 'TREE', 'ETC'].map((item) => (
            <Tab label={item} sx={plantPageStyle.plantTab} key={item} />
          ))}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <PlantCard plants={plants} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PlantCard
          plants={plants.filter(
            (plant) => plant.category === PlantCategoryEnum.FERN
          )}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PlantCard
          plants={plants.filter(
            (plant) => plant.category === PlantCategoryEnum.TREE
          )}
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <PlantCard
          plants={plants.filter(
            (plant) => plant.category === PlantCategoryEnum.ETC
          )}
        />
      </TabPanel>
    </Box>
  );
};

export default PlantTabs;
