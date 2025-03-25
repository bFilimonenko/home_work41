import { StyledBox, StyledMain, StyledNav, StyledTab } from './styledComponents.js';
import { Typography } from '@mui/material';
import { useState } from 'react';
import { PAGES } from '../../App.jsx';

export const Navigation = ({ setPage }) => {

  const [value, setValue] = useState(PAGES.PEOPLE);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setPage(newValue);
  };

  return (
    <>
      <StyledMain>
        <StyledBox>
          <Typography variant="h3" sx={{ fontWeight: 'bold' }}>Star Wars</Typography>
        </StyledBox>

        <StyledNav value={value} onChange={handleChange}>
          <StyledTab value={PAGES.PEOPLE} label="People" onClick={() => {
            console.log(value);
          }} />
          <StyledTab value={PAGES.VEHICLES} label="Vehicles" onClick={() => {
            console.log(value);
          }} />
          <StyledTab value={PAGES.PLANETS} label="Planets" onClick={() => {
            console.log(value);
          }} />
        </StyledNav>
      </StyledMain>
    </>
  );
};