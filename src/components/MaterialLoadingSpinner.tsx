import React from 'react';
import { Box, CircularProgress, Typography, Fade } from '@mui/material';

interface MaterialLoadingSpinnerProps {
  size?: number;
  message?: string;
  color?: 'primary' | 'secondary' | 'inherit';
}

const MaterialLoadingSpinner: React.FC<MaterialLoadingSpinnerProps> = ({
  size = 40,
  message = 'Loading...',
  color = 'primary',
}) => {
  return (
    <Fade in={true} timeout={300}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
        }}
      >
        <CircularProgress 
          size={size} 
          color={color}
          thickness={4}
          sx={{
            animationDuration: '1.4s',
          }}
        />
        {message && (
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{
              fontWeight: 500,
              letterSpacing: '0.5px',
            }}
          >
            {message}
          </Typography>
        )}
      </Box>
    </Fade>
  );
};

export default MaterialLoadingSpinner;