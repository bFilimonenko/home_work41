import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';

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

export const ItemsList = ({ entities, page }) => {

  const keys = {
    accordionKey: 1,
    subKey: 1,
  };

  const generateAccordionKey = () => {
    keys.subKey = 1;
    return keys.accordionKey++;
  };

  return (
    <>
      <Box>
        {entities.map((item) => (<Accordion key={generateAccordionKey()}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={item.name}
            id={item.name}
          >
            <Typography component="span">{item.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {entityMapping[page].map((key) => item[key] &&
              <Typography key={keys.subKey++} variant="body1">
                <span style={{ fontWeight: 'bold' }}>{key.replaceAll('_', ' ')}: </span>
                {item[key]}
              </Typography>)}
          </AccordionDetails>
        </Accordion>))}
      </Box>
    </>
  );
};