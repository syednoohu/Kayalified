import React from 'react';
import { FormControl, InputLabel, MenuItem, Select as MuiSelect } from  '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  outer :{
    // flexBasis:'25%'
    flex:'0 1 25%'
  },
  catagory :{
    background:"#fff",
  },
  label:{
    color:'#e27423',
    fontSize: "1.6em"

  }
}))
const Select = (props) => {
  
  const { name, label, value, onChange, options } = props
  const classes = useStyles();

  return (
    <FormControl  className={classes.outer} variant='outlined'>
      <InputLabel className={classes.label}>{label}</InputLabel>
        <MuiSelect
          className={classes.catagory}
          label="Catagory"
          name={name}
          value={value}
          onChange={onChange}
        >
          <MenuItem value=' ' >All</MenuItem>
          {
            options.map(item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>))
          }
        </MuiSelect>
     </FormControl> 
  );
};

export default Select;
