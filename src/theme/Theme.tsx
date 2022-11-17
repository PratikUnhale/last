import { createTheme } from "@mui/material";

const primaryColor = '#042239';
const primaryLight = '#1d8fb1';
const backDrop = '#F5F4F6';

const solarisTheme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
            dark: primaryLight,
            contrastText: '#fff',
        },
        secondary: {
            main: primaryLight,
            dark: '#0033A0',
            contrastText: '#000',
        },
    },
});



export { solarisTheme, primaryColor, primaryLight, backDrop };