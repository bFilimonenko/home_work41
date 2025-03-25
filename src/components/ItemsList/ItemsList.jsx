import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { StyledAccordion, StyledAccordionTitle, StyledButton, StyledStack } from './styledComponents.js';
import { entityMapping } from './types.js';

export const ItemsList = ({ entities, page, loadNextPage, nextPageUrl }) => {
  return (
    <StyledStack>
      {entities.map((item, key) => (
        <StyledAccordion key={`accordion-${key}`}>
          <StyledAccordionTitle
            expandIcon={<ExpandMoreIcon color="error" />}
            aria-controls={item.name}
            id={item.name}
          >
            <Typography component="span">{item.name}</Typography>
          </StyledAccordionTitle>
          <AccordionDetails>
            {entityMapping[page].map((description, key) => item[description] &&
              <Typography key={`description-${key}`} variant="body1">
                <span style={{ fontWeight: 'bold' }}>{description.replaceAll('_', ' ')}: </span>
                {item[description]}
              </Typography>,
            )}
          </AccordionDetails>
        </StyledAccordion>
      ))}

      <StyledButton variant="outlined" onClick={loadNextPage} disabled={!nextPageUrl}>Load more</StyledButton>
    </StyledStack>
  );
};