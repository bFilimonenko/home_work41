import backgroundImg from '/bg-img.png';
import { styled } from 'styled-components';
import { Box, Tab, Tabs } from '@mui/material';

export const StyledMain = styled.main`
    position: relative;
    width: 100vw;
    height: 320px;
    background-position: center;
    background-size: cover;
    background-image: url(${backgroundImg});
`;

export const StyledBox = styled(Box)`
    position: relative;
    max-width: 896px;
    margin: 0 auto;
    text-align: center;
    color: #ffdf20;
    padding: 72px 0;
`;

export const StyledNav = styled(Tabs)`

    position: absolute;
    inset-inline: 0;
    bottom: 0;

    & .css-hzcega-MuiTabs-list {
        display: flex;
        justify-content: center;
        gap: 8px;
        font-size: 18px;
    }
`;

export const StyledTab = styled(Tab)`
    &.css-1usuzwp-MuiButtonBase-root-MuiTab-root {
        padding: 8px 24px;
        background-color: #71717b;
        color: white;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;

        &:hover {
            background-color: #9f9fa9;
        }

        &.Mui-active {
            background-color: #e4e4e7;
        }
    }
`;