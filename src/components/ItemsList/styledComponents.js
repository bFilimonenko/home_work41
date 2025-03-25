import { styled } from 'styled-components';
import { Button, Stack } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';

export const StyledStack = styled(Stack)`
    align-items: center;
    padding: 24px;
    height: fit-content;
`;

export const StyledAccordion = styled(Accordion)`
    width: clamp(18.75rem, 13.194rem + 27.78vw, 37.5rem);
    overflow: hidden;
    margin-bottom: 10px;

    &.MuiPaper-root {
        border: 1px solid #ffdf20;
        border-radius: 4px;
    }
`;

export const StyledAccordionTitle = styled(AccordionSummary)`
    &.MuiButtonBase-root {
        background-color: #fef9c2;
        &:hover {
            background-color: #fff085;
        }
    }
`;

export const StyledButton = styled(Button)`
    &.MuiButtonBase-root {
        border: 2px solid transparent;
        border-radius: 8px;
        color: black;
        background: linear-gradient(#ffffff, #ffffff) padding-box,
        linear-gradient(150deg, rgba(21, 93, 252, 1) 30%, rgba(250, 250, 250, 1) 55%, rgba(231, 0, 11, 1) 80%) border-box;
        text-transform: none;
    }
`;
