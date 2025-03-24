import { StyledBox, StyledMain, StyledNav, StyledTab } from './styledComponents.js';
import { Typography } from '@mui/material';

export const Navigation = () => {
  return (
    <>
      <StyledMain>
        <StyledBox>
          <Typography variant="h3" sx={{fontWeight: 'bold'}}>Star Wars</Typography>
        </StyledBox>
        <StyledNav>
          <StyledTab value={0} label="People" />
          <StyledTab value={1} label="Vehicles" />
          <StyledTab value={2} label="Planets" />
        </StyledNav>
      </StyledMain>
    </>
  );
};