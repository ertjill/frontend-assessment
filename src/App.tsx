import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import { Card, CardContent, Container, createTheme, CssBaseline, Stack, Typography } from '@mui/material';
import Fixed5x5GridCompass from './ components/Fixed5x5GridCompass/FixedGrid5x5Compass';
import OutlinedTextField from './ components/TextField/OutlinedTextField';
import type { Grid5x5CompassProps } from './ components/Fixed5x5GridCompass/Fixed.types';

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    background: { default: "#131827", paper: "#ffffff" },
    secondary: { main: '#ffffff', contrastText: '#000000' },
    divider: '#ffffff',
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: "#131827",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center", // horizontal centering
          alignItems: "center",     // vertical centering
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#ffffff',// default label color
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          // backgroundColor: '#f5f5f5', // background of input
          borderRadius: '8px',
          color: '#ffffff',
        },
        notchedOutline: {
          borderColor: '#f5f5f5',
        },
      },
    },
  },
});

function App() {
  const [value, setValue] = useState('2,2 NORTH');
  const [posirtionDirectionProps, setPositionDirectionProps] = useState(value);
  const [debouncedValue, setDebouncedValue] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), 800);
    return () => clearTimeout(handler);
  }, [value]);

  useEffect(() => {
    if (!debouncedValue) return;
    setPositionDirectionProps(value);
  }, [debouncedValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Fixed5x5GridCompass positionDirectionProps={posirtionDirectionProps} />
      <br />
      <OutlinedTextField label={'Input Position'} value={value}
        onChange={handleChange}
      />
      <br />
      <br />
      <Card>
        <CardContent>
          <Stack direction="row" alignItems="center" spacing={1} mb={1}>
            <InfoOutlineIcon fontSize="small" sx={{ color: 'text.secondary' }} />
            <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
              Input Format
            </Typography>
          </Stack>

          <Stack spacing={0.5}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              x and y coordinates (ranging from 0 to 4)
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Direction: One of the four cardinal directions (NORTH, EAST, SOUTH, WEST)
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
              Example: 1,1 NORTH
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}

export default App;
