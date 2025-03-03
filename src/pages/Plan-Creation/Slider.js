import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}`;
}

export default function DiscreteSliderSteps( {defaultVal,Steps,min,max}) {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Small steps"
        defaultValue={defaultVal}
        getAriaValueText={valuetext}
        step={Steps}
        marks
        min={min}
        max={max}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}