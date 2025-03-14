

"use client"
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';

export default function ColorToggleButton() {
  const [alignment, setAlignment] = useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      className='flex justify-center my-8'
    >
      <ToggleButton value="design">UI/UX Design</ToggleButton>
      <ToggleButton  value="web">WEB</ToggleButton>
     
    </ToggleButtonGroup>
  )};
