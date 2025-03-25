import { StyledBox, StyledMain, StyledNav, StyledTab } from './styledComponents.js';
import { Typography } from '@mui/material';
import { PAGES } from '../../PAGES.jsx';

export const Navigation = ({ page, setPage }) => {
  const handleChange = (event, newValue) => {
    setPage(newValue);
  };

  return (
    <StyledMain>
      <StyledBox>
        <Typography variant="h3" fontWeight="bold">Star Wars</Typography>
      </StyledBox>

      <StyledNav value={page} onChange={handleChange}>
        <StyledTab value={PAGES.PEOPLE} label="People" />
        <StyledTab value={PAGES.VEHICLES} label="Vehicles" />
        <StyledTab value={PAGES.PLANETS} label="Planets" />
      </StyledNav>
    </StyledMain>
  );
};