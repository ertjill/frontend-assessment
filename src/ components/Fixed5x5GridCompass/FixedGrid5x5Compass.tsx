import * as React from 'react';
import { useState, useEffect } from 'react';
import NavigationIcon from '@mui/icons-material/Navigation';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import type { Grid5x5CompassProps } from './Fixed.types';
import { coordinatesPositionStringParser } from '../../utils/coordinatesPositionStringParser';

export default function Fixed5x5GridCompass({ positionDirectionProps = '2,2 NORTH' }) {
  const [positionDirection, setPositionDirection] = useState<Grid5x5CompassProps>({});
  const [error, setError] = useState<string | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Parse input safely using useEffect
  useEffect(() => {
    try {
      const parsed = coordinatesPositionStringParser(positionDirectionProps);
      setPositionDirection(parsed);
      setError(null);
    } catch (err: any) {
      setError(err.message || 'Invalid input!');
      setSnackbarOpen(true);
      setPositionDirection({});
    }
  }, [positionDirectionProps]);

  const NUMBER_OF_ROWS = 5;
  const NUMBER_OF_COLUMNS = 5;

  const coordinates = React.useMemo(() => {
    const coords = Array.from({ length: NUMBER_OF_ROWS * NUMBER_OF_COLUMNS }, (_, index) => ({
      y: Math.floor(index / NUMBER_OF_COLUMNS),
      x: (NUMBER_OF_COLUMNS - 1) - (index % NUMBER_OF_COLUMNS) // reverse x
    }));

    return coords.reverse(); // reverse once inside useMemo
  }, []);



  const directionToDegrees: Record<string, number> = {
    NORTH: 0,
    EAST: 90,
    SOUTH: 180,
    WEST: 270,
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
      <Box
        sx={{
          display: 'grid',
          gap: 1,
          width: '100%',
          minWidth: 300,
          aspectRatio: '1 / 1',
        }}
      >
        <Grid
          container
          sx={{
            border: '1px solid',
            borderColor: (theme) => theme.palette.divider,
            '& > div': {
              border: '1px solid',
              borderColor: (theme) => theme.palette.divider,
            },
          }}
        >
          {coordinates.map((coord, index) => (
            <Grid
              display="flex"
              justifyContent="center"
              alignItems="center"
              key={index}
              minHeight={20}
              minWidth={20}
              padding={0}
              margin={0}
              size={{ xs: 12 / 5, sm: 12 / 5, md: 12 / 5, lg: 12 / 5 }}
            >
              {coord.x === positionDirection.x && coord.y === positionDirection.y && (
                <NavigationIcon
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    transform: `rotate(${directionToDegrees[positionDirection.direction ?? 'NORTH']}deg)`,
                  }}
                />
              )}
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Snackbar for errors */}
      <Snackbar
        open={snackbarOpen && error !== null}
        autoHideDuration={4000}

        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="error" onClose={() => setSnackbarOpen(false)}>
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
}
