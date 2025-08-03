import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Chip,
  IconButton,
  Box,
  Fade,
  Zoom,
  Skeleton,
} from '@mui/material';
import {
  Launch as LaunchIcon,
  GitHub as GitHubIcon,
  Image as ImageIcon,
  Warning as WarningIcon,
} from '@mui/icons-material';

interface MaterialProjectCardProps {
  title: string;
  description: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  tags: string[];
  delay?: number;
}

const MaterialProjectCard: React.FC<MaterialProjectCardProps> = ({
  title,
  description,
  image,
  liveUrl,
  githubUrl,
  tags,
  delay = 0,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageLoaded(false);
    setImageError(true);
    console.error(`Failed to load image for project "${title}":`, image);
  };

  return (
    <Fade in={true} timeout={600} style={{ transitionDelay: `${delay}ms` }}>
      <Card
        elevation={2}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
          boxShadow: isHovered 
            ? '0px 8px 25px rgba(0,0,0,0.3)' 
            : '0px 2px 8px rgba(0,0,0,0.15)',
          '&:hover': {
            '& .MuiCardMedia-root': {
              transform: 'scale(1.05)',
            },
          },
        }}
      >
        {image && (
          <Box sx={{ position: 'relative', overflow: 'hidden', height: 200 }}>
            {!imageLoaded && !imageError && (
              <Skeleton 
                variant="rectangular" 
                width="100%" 
                height={200}
                animation="wave"
              />
            )}
            
            {imageError && (
              <Box
                sx={{
                  height: 200,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'error.dark',
                  color: 'error.contrastText',
                }}
              >
                <WarningIcon sx={{ fontSize: 48, mb: 1, opacity: 0.7 }} />
                <Typography variant="body2" align="center" sx={{ px: 2 }}>
                  Image failed to load
                </Typography>
                <Typography variant="caption" align="center" sx={{ px: 2, mt: 0.5, opacity: 0.7 }}>
                  {image}
                </Typography>
              </Box>
            )}

            <CardMedia
              component="img"
              height="200"
              image={image}
              alt={`${title} screenshot`}
              onLoad={handleImageLoad}
              onError={handleImageError}
              sx={{
                display: imageLoaded && !imageError ? 'block' : 'none',
                transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            />

            <Fade in={isHovered} timeout={200}>
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  p: 1,
                  display: 'flex',
                  gap: 0.5,
                }}
              >
                {liveUrl && (
                  <Zoom in={isHovered} timeout={300} style={{ transitionDelay: '100ms' }}>
                    <IconButton
                      component="a"
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        color: 'text.primary',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 1)',
                          transform: 'scale(1.1)',
                        },
                        transition: 'all 0.2s ease-in-out',
                      }}
                    >
                      <LaunchIcon fontSize="small" />
                    </IconButton>
                  </Zoom>
                )}
                {githubUrl && (
                  <Zoom in={isHovered} timeout={300} style={{ transitionDelay: '150ms' }}>
                    <IconButton
                      component="a"
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        color: 'text.primary',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 1)',
                          transform: 'scale(1.1)',
                        },
                        transition: 'all 0.2s ease-in-out',
                      }}
                    >
                      <GitHubIcon fontSize="small" />
                    </IconButton>
                  </Zoom>
                )}
              </Box>
            </Fade>
          </Box>
        )}

        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Typography 
            gutterBottom 
            variant="h6" 
            component="h3"
            sx={{
              fontWeight: 600,
              color: 'text.primary',
              mb: 1.5,
            }}
          >
            {title}
          </Typography>
          
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{
              lineHeight: 1.6,
              mb: 2,
            }}
          >
            {description}
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
            {tags.map((tag, index) => (
              <Zoom 
                key={tag} 
                in={true} 
                timeout={300} 
                style={{ transitionDelay: `${delay + index * 50}ms` }}
              >
                <Chip
                  label={tag}
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(33, 150, 243, 0.12)',
                    color: 'primary.light',
                    border: '1px solid rgba(33, 150, 243, 0.3)',
                    fontWeight: 500,
                    '&:hover': {
                      backgroundColor: 'rgba(33, 150, 243, 0.2)',
                      transform: 'scale(1.05)',
                    },
                    transition: 'all 0.2s ease-in-out',
                  }}
                />
              </Zoom>
            ))}
          </Box>
        </CardContent>

        {!image && (liveUrl || githubUrl) && (
          <CardActions sx={{ p: 2, pt: 0 }}>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {liveUrl && (
                <IconButton
                  component="a"
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(33, 150, 243, 0.08)',
                      transform: 'scale(1.1)',
                    },
                    transition: 'all 0.2s ease-in-out',
                  }}
                >
                  <LaunchIcon />
                </IconButton>
              )}
              {githubUrl && (
                <IconButton
                  component="a"
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(33, 150, 243, 0.08)',
                      transform: 'scale(1.1)',
                    },
                    transition: 'all 0.2s ease-in-out',
                  }}
                >
                  <GitHubIcon />
                </IconButton>
              )}
            </Box>
          </CardActions>
        )}
      </Card>
    </Fade>
  );
};

export default MaterialProjectCard;