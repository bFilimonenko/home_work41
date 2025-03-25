import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { StyledAccordion, StyledAccordionTitle, StyledButton, StyledStack } from './styledComponents.js';

const entityMapping = {
  people: [
    'birth_year',
    'eye_color',
    'gender',
    'hair_color',
    'height',
    'mass',
    'skin_color'],
  vehicles: [
    'cargo_capacity',
    'consumables',
    'cost_in_credits',
    'crew',
    'length',
    'manufacturer',
    'max_atmosphering_speed',
    'model',
    'passengers',
    'vehicle_class'],
  planets: [
    'climate',
    'diameter',
    'gravity',
    'orbital_period',
    'population',
    'rotation_period',
    'surface_water',
    'terrain'],
};

export const ItemsList = ({ entities, page, loadNextPage, nextPageUrl }) => {

  return (
    <>
      <StyledStack>
        {entities.map((item, key) => (<StyledAccordion key={key}>
          <StyledAccordionTitle
            expandIcon={<ExpandMoreIcon color='error' />}
            aria-controls={item.name}
            id={item.name}
          >
            <Typography component="span">{item.name}</Typography>
          </StyledAccordionTitle>
          <AccordionDetails>
            {entityMapping[page].map((description, key) => item[description] &&
              <Typography key={key} variant="body1">
                <span style={{ fontWeight: 'bold' }}>{description.replaceAll('_', ' ')}: </span>
                {item[description]}
              </Typography>)}
          </AccordionDetails>
        </StyledAccordion>))}

        <StyledButton variant="outlined" onClick={loadNextPage} disabled={!nextPageUrl}>Load more</StyledButton>
      </StyledStack>
    </>
  );
};