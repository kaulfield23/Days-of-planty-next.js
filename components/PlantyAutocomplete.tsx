import { Autocomplete, Box, TextField } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import { PlantsTypes } from 'utils/types';

interface PlantyAutocompleteProps {
  options: PlantsTypes[];
}
const PlantyAutocomplete = ({ options }: PlantyAutocompleteProps) => {
  return (
    <Box display="flex" justifyContent={'end'} m={2.5} alignItems="center">
      <FilterListIcon sx={{ mr: 1 }} />
      <Autocomplete
        disablePortal
        getOptionLabel={(option) => option.name}
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Type plant's name to search" />
        )}
      />
    </Box>
  );
};

export default PlantyAutocomplete;
