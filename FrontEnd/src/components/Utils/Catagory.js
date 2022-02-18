import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function categorySelect() {
  return (
    <Autocomplete
      id="category-select"
      sx={{ width: 300 }}
      options={categories}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          {option.label} 
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="category"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}

const categories = [
  { code: 'AAA', label: 'Car' },
  { code: 'BBB', label: 'Bike'},
  { code: 'CCC', label: 'Scooter'},
  { code: 'DDD', label: 'House - Sale'},
  { code: 'EEE', label: 'House - Rent'},
  { code: 'FFF', label: 'Shop - Sale'},
  { code: 'GGG', label: 'Shop - Rent'},
];
