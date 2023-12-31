'use client';

import { useEffect, useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import { useAppDispatch } from 'redux/hooks';
import { plantPageStyle } from 'styles/PlantPageStyle';
import { PlantsTypes } from 'utils/types';
import { PlantCategoryEnum } from './CategoryIndicator';
import PlantCard from './PlantCard';
import PlantyAutocomplete from './PlantyAutocomplete';
import usePlantsMutations from './hook/usePlantsMutation';

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
  const { plantTab, updatePlantTabIndex } = usePlantsMutations();

  const [value, setValue] = useState(plantTab);
  const [filteredPlants, setFilteredPlants] = useState<PlantsTypes[]>(plants);

  useEffect(() => {
    setFilteredPlants(plants);
  }, [plants]);

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
          onChange={(e, value) => {
            setValue(value);
            updatePlantTabIndex(value);
          }}
          indicatorColor="primary"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          {['ALL', 'FERN', 'TREE', 'ETC'].map((item) => (
            <Tab label={item} sx={plantPageStyle.plantTab} key={item} />
          ))}
        </Tabs>
      </Box>
      <PlantyAutocomplete
        options={plants}
        onChange={(filtered) =>
          setFilteredPlants(filtered.length > 0 ? filtered : plants)
        }
      />
      <TabPanel value={value} index={0}>
        <PlantCard plants={filteredPlants} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PlantCard
          plants={filteredPlants.filter(
            (plant) => plant.category === PlantCategoryEnum.FERN
          )}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PlantCard
          plants={filteredPlants.filter(
            (plant) => plant.category === PlantCategoryEnum.TREE
          )}
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <PlantCard
          plants={filteredPlants.filter(
            (plant) => plant.category === PlantCategoryEnum.ETC
          )}
        />
      </TabPanel>
    </Box>
  );
};

export default PlantTabs;
