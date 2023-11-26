import { Autocomplete, Box, TextField } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import { PlantsTypes } from 'utils/types';
import Fuse from 'fuse.js';

interface PlantyAutocompleteProps {
  options: PlantsTypes[];
  onChange: (filteredPlants: string[]) => void;
}
const PlantyAutocomplete = ({ options, onChange }: PlantyAutocompleteProps) => {
  const fuse = new Fuse(options, {
    keys: ['name', 'nickname', 'desc'],
    threshold: 0.4,
  });
  console.log('auto');
  const handleFilteredOption = (filteredOption: string[]) => {
    onChange(filteredOption);
  };

  return (
    <Box display="flex" justifyContent={'end'} m={2.5} alignItems="center">
      <FilterListIcon sx={{ mr: 1 }} />
      <Autocomplete
        disablePortal
        getOptionLabel={(option) => option.name}
        options={options}
        filterOptions={(options, { inputValue }) => {
          const searchedResult = fuse
            .search(inputValue)
            .map((result) => result.item);
          handleFilteredOption(
            searchedResult.map((item) => item._id) as string[]
          );
          // onChange(searchedResult.map((item) => item._id) as string[]);
          return searchedResult.length > 0 ? searchedResult : options;
        }}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Type plant's name to search" />
        )}
      />
    </Box>
  );
};

export default PlantyAutocomplete;
