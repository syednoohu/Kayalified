import React, { useState } from 'react';
import  './Hero.css'
import Select from './controls/Select';
import { makeStyles } from '@mui/styles';
import { red } from '@mui/material/colors';
import { Button, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';


const useStyles = makeStyles(theme => ({
  catagory :{
    background:"#fff"
  }
}))

// const useStyles = makeStyles({
//   catagory12: {
//     backgroundColor: 'yellow',
//     color: 'black',
//   },
// });


const intialValues = {
  searchTerm:'',
  catagory:'',
  location:'',
}

const catagories = [{id : "1", title:"Car"}, {id : "2", title:"Bike"}, {id : "3", title:"Scooty"}  ]
const locations  = [{id : "1", title:"Kayalpatnam"}, {id : "2", title:"Arumuganeri"}, {id : "3", title:"Tiruchendur"}, {id : "4", title:"Veerapandinpatnam"}  ]


const Hero = () => {
  const[values, setValues] = useState(intialValues);
  const classes = useStyles();

  function handleInputChange(e) {
    const {name, value } = e.target
    setValues( {...values, [name] : value})
  }
  console.log(classes);
  return (
    <section className='hero'>
      <div className="container flex">
       <h3>
          YOUR BEST BUY & SALE WEBSITE
        </h3>
        <div className="line"></div>
        <div className="hero__search flex">
          <input className='hero__search-text' type="text" />
          <Select  
            className='hero__search-catagory'
            name="catagory"
            label="catagory"
            value={values.catagory}
            onChange={handleInputChange}
            options={catagories}
          />
          <Select  
            className='hero__search-loc'
            name="location"
            label="location"
            value={values.location}
            onChange={handleInputChange}
            options={locations}
          />
          <LoadingButton
            // onClick={handleClick}
            endIcon={<SendIcon />}
            // loading={loading}
            loadingPosition="end"
            variant="contained">
             Send
          </LoadingButton>
          {/* <input className='hero__search-loc'type="text" /> */}
          {/* <input className='hero__search-btn'type="text" /> */}
        </div>
      </div>
      
    </section>
  )
};

export default Hero;
