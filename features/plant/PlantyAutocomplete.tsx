import { Autocomplete, Box, TextField } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import { PlantsTypes } from 'utils/types';
import Fuse from 'fuse.js';
import { useState } from 'react';

interface PlantyAutocompleteProps {
  options: PlantsTypes[];
  onChange: (filteredPlants: PlantsTypes[]) => void;
}
const PlantyAutocomplete = ({ options, onChange }: PlantyAutocompleteProps) => {
  const fuse = new Fuse(options, {
    keys: ['name', 'nickname', 'desc'],
    threshold: 0.4,
  });

  const fuzzySearch = (input: string) => {
    return fuse.search(input).map((result) => result.item);
  };

  return (
    <Box display="flex" justifyContent={'end'} m={2.5} alignItems="center">
      <FilterListIcon sx={{ mr: 1 }} />
      <Autocomplete
        disablePortal
        getOptionLabel={(option) => option.name}
        options={options}
        filterOptions={(options, { inputValue }) => {
          const searchedResult = fuzzySearch(inputValue);
          return searchedResult.length > 0 ? searchedResult : options;
        }}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Type plant's name to search" />
        )}
        renderOption={(props, option) => {
          return (
            <li {...props} key={option.name}>
              {option.name[0].toUpperCase() + option.name.slice(1)}
            </li>
          );
        }}
        onInputChange={(_, value) => onChange(fuzzySearch(value))}
      />
    </Box>
  );
};

export default PlantyAutocomplete;
