import React from 'react';
import { Box, Container, Fade, Slide } from '@mui/material';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface MaterialSectionProps {
  children: React.ReactNode;
  id?: string;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  sx?: object;
  animation?: 'fade' | 'slideUp' | 'slideLeft' | 'slideRight';
  delay?: number;
  fullHeight?: boolean;
}

const MaterialSection: React.FC<MaterialSectionProps> = ({
  children,
  id,
  maxWidth = 'lg',
  sx = {},
  animation = 'fade',
  delay = 0,
  fullHeight = false,
}) => {
  const { elementRef, isVisible } = useScrollAnimation();

  const getAnimation = () => {
    switch (animation) {
      case 'slideUp':
        return (
          <Slide direction="up" in={isVisible} timeout={600} style={{ transitionDelay: `${delay}ms` }}>
            <div>{children}</div>
          </Slide>
        );
      case 'slideLeft':
        return (
          <Slide direction="left" in={isVisible} timeout={600} style={{ transitionDelay: `${delay}ms` }}>
            <div>{children}</div>
          </Slide>
        );
      case 'slideRight':
        return (
          <Slide direction="right" in={isVisible} timeout={600} style={{ transitionDelay: `${delay}ms` }}>
            <div>{children}</div>
          </Slide>
        );
      default:
        return (
          <Fade in={isVisible} timeout={800} style={{ transitionDelay: `${delay}ms` }}>
            <div>{children}</div>
          </Fade>
        );
    }
  };

  return (
    <Box
      ref={elementRef}
      component="section"
      id={id}
      sx={{
        py: fullHeight ? 0 : 8,
        minHeight: fullHeight ? '100vh' : 'auto',
        display: fullHeight ? 'flex' : 'block',
        alignItems: fullHeight ? 'center' : 'stretch',
        ...sx,
      }}
    >
      <Container maxWidth={maxWidth} sx={{ width: '100%' }}>
        {getAnimation()}
      </Container>
    </Box>
  );
};

export default MaterialSection;