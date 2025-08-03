import React from 'react';
import {
  ThemeProvider,
  CssBaseline,
  Box,
  Typography,
  Button,
  IconButton,
  Grid,
  Card,
  CardContent,
  Chip,
  Container,
  Fade,
  Slide,
  Zoom,
  Fab,
  Divider,
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Email,
  Phone,
  Download,
  Launch,
  KeyboardArrowUp,
} from '@mui/icons-material';

import { theme } from './theme/theme';
import MaterialNavbar from './components/MaterialNavbar';
import MaterialProjectCard from './components/MaterialProjectCard';
import MaterialLoadingSpinner from './components/MaterialLoadingSpinner';
import MaterialSection from './components/MaterialSection';

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(true);
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'background.default',
          }}
        >
          <MaterialLoadingSpinner size={60} message="Loading portfolio..." />
        </Box>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
        <MaterialNavbar
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          onNavClick={scrollToSection}
        />

        {/* Hero Section */}
        <MaterialSection id="home" fullHeight>
          <Fade in={true} timeout={1000}>
            <Box sx={{ textAlign: 'center', py: 8 }}>
              <Slide direction="down" in={true} timeout={800}>
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    mb: 2,
                    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 300,
                  }}
                >
                  Carlos Andrés Galvis Pájaro
                </Typography>
              </Slide>

              <Slide direction="up" in={true} timeout={800} style={{ transitionDelay: '200ms' }}>
                <Typography
                  variant="h4"
                  component="h2"
                  color="text.secondary"
                  sx={{ mb: 3, fontWeight: 300 }}
                >
                  Software Engineering Student
                </Typography>
              </Slide>

              <Fade in={true} timeout={800} style={{ transitionDelay: '400ms' }}>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{
                    mb: 4,
                    maxWidth: 800,
                    mx: 'auto',
                    lineHeight: 1.6,
                    fontWeight: 400,
                  }}
                >
                  I'm a Systems Engineering student with experience in web development, especially using HTML, CSS, and JavaScript. I enjoy creating accessible, functional, and well-designed websites. I'm passionate about learning new technologies, collaborating in teams, and solving problems creatively.
                </Typography>
              </Fade>

              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                {[
                  { icon: GitHub, href: 'https://github.com/Charlsz', delay: 600 },
                  { icon: LinkedIn, href: 'https://www.linkedin.com/in/cgalvisp/', delay: 700 },
                  { icon: Email, href: 'mailto:cgalvis21_@hotmail.com', delay: 800 },
                  { icon: Phone, href: 'tel:+573166610293', delay: 900 },
                ].map(({ icon: Icon, href, delay }, index) => (
                  <Zoom key={index} in={true} timeout={500} style={{ transitionDelay: `${delay}ms` }}>
                    <IconButton
                      component="a"
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      color="primary"
                      size="large"
                      sx={{
                        backgroundColor: 'rgba(33, 150, 243, 0.08)',
                        '&:hover': {
                          backgroundColor: 'rgba(33, 150, 243, 0.16)',
                          transform: 'scale(1.1)',
                        },
                        transition: 'all 0.2s ease-in-out',
                      }}
                    >
                      <Icon />
                    </IconButton>
                  </Zoom>
                ))}
              </Box>
            </Box>
          </Fade>
        </MaterialSection>

        {/* About Section */}
        <MaterialSection id="about">
          <MaterialSection animation="slideUp">
            <Typography variant="h2" component="h2" sx={{ mb: 6, textAlign: 'center' }}>
              About Me
            </Typography>
          </MaterialSection>

          <Grid container spacing={4}>
            {/* Professional Experience */}
            <Grid item xs={12}>
              <MaterialSection animation="slideLeft" delay={200}>
                <Typography variant="h4" component="h3" sx={{ mb: 3 }}>
                  Professional Experience
                </Typography>
              </MaterialSection>

              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <MaterialSection animation="fade" delay={300}>
                    <Card elevation={2} sx={{ height: '100%' }}>
                      <CardContent sx={{ p: 3 }}>
                        <Typography variant="h6" component="h4" sx={{ mb: 1, fontWeight: 600 }}>
                          HRG SOLUCIONES S.A.S
                        </Typography>
                        <Typography variant="subtitle1" color="primary" sx={{ mb: 1 }}>
                          Web Developer
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                          Cartagena de Indias, Colombia | January 2024–December 2024
                        </Typography>
                        <Box component="ul" sx={{ pl: 2, m: 0 }}>
                          {[
                            'Design, development, and maintenance of responsive and functional websites',
                            'Implementation of technologies such as HTML, CSS, JavaScript, and modern frameworks',
                            'Integration of databases and backend tools',
                            'Collaboration with clients and internal teams',
                            'SEO optimization and accessibility best practices',
                          ].map((item, index) => (
                            <Typography
                              key={index}
                              component="li"
                              variant="body2"
                              color="text.secondary"
                              sx={{ mb: 0.5 }}
                            >
                              {item}
                            </Typography>
                          ))}
                        </Box>
                      </CardContent>
                    </Card>
                  </MaterialSection>
                </Grid>

                <Grid item xs={12} md={6}>
                  <MaterialSection animation="fade" delay={400}>
                    <Card elevation={2} sx={{ height: '100%' }}>
                      <CardContent sx={{ p: 3 }}>
                        <Typography variant="h6" component="h4" sx={{ mb: 1, fontWeight: 600 }}>
                          Teleperformance
                        </Typography>
                        <Typography variant="subtitle1" color="primary" sx={{ mb: 1 }}>
                          Customer Service
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                          Barranquilla, Colombia | December 2024–January 2025
                        </Typography>
                        <Box component="ul" sx={{ pl: 2, m: 0 }}>
                          {[
                            'Addressing and resolving customer inquiries',
                            'Efficiently managing requests and providing effective solutions',
                          ].map((item, index) => (
                            <Typography
                              key={index}
                              component="li"
                              variant="body2"
                              color="text.secondary"
                              sx={{ mb: 0.5 }}
                            >
                              {item}
                            </Typography>
                          ))}
                        </Box>
                      </CardContent>
                    </Card>
                  </MaterialSection>
                </Grid>
              </Grid>
            </Grid>

            {/* Education */}
            <Grid item xs={12} md={6}>
              <MaterialSection animation="slideLeft" delay={500}>
                <Typography variant="h4" component="h3" sx={{ mb: 3 }}>
                  Education
                </Typography>
                <Card elevation={2}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" component="h4" sx={{ mb: 1, fontWeight: 600 }}>
                      Universidad del Norte
                    </Typography>
                    <Typography variant="subtitle1" color="primary" sx={{ mb: 1 }}>
                      Systems and Computer Engineer
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Barranquilla, Colombia | June 2021 - Currently
                    </Typography>
                  </CardContent>
                </Card>
              </MaterialSection>
            </Grid>

            {/* Technical Skills */}
            <Grid item xs={12} md={6}>
              <MaterialSection animation="slideRight" delay={600}>
                <Typography variant="h4" component="h3" sx={{ mb: 3 }}>
                  Technical Skills
                </Typography>
                <Card elevation={2}>
                  <CardContent sx={{ p: 3 }}>
                    <Box component="ul" sx={{ pl: 2, m: 0 }}>
                      {[
                        'Programming Languages: Python, Java, JavaScript, Swift, SQL, NoSQL',
                        'Web Development: HTML, CSS, JavaScript, Responsive Design',
                        'Data Modeling and Management',
                        'Site Optimization and Performance',
                      ].map((item, index) => (
                        <Typography
                          key={index}
                          component="li"
                          variant="body2"
                          color="text.secondary"
                          sx={{ mb: 0.5 }}
                        >
                          {item}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </MaterialSection>
            </Grid>
          </Grid>
        </MaterialSection>

        {/* Projects Section */}
        <MaterialSection id="projects">
          <MaterialSection animation="slideUp">
            <Typography variant="h2" component="h2" sx={{ mb: 6, textAlign: 'center' }}>
              Projects
            </Typography>
          </MaterialSection>

          <Grid container spacing={4} sx={{ mb: 6 }}>
            {[
              {
                title: 'Pixel Runner',
                description: 'Endless Runner game featuring pixel art graphics and smooth gameplay mechanics.',
                image: '/{B36547E7-5BCC-4201-B0D4-E5CC7C13B1C0}.png',
                liveUrl: 'https://pixelrunnergame.netlify.app/',
                tags: ['Game Development', 'JavaScript', 'HTML5 Canvas'],
                delay: 200,
              },
              {
                title: 'HRG Soluciones S.A.S',
                description: 'HRG Soluciones S.A.S company website featuring electrical, construction, and maintenance services.',
                image: '/{ED4F2EA9-2112-4E15-9DFE-5C901ADA7EE2}.png',
                liveUrl: 'https://hrgsoluciones.com/',
                tags: ['Corporate Website', 'Professional Services'],
                delay: 300,
              },
              {
                title: 'Tera Studios',
                description: 'Tera Studios company website featuring modern design and professional presentation.',
                image: '/{7BC4F869-FFB6-450B-BF17-083A6463A165}.png',
                liveUrl: 'https://terastudios.netlify.app/',
                tags: ['Web Development', 'Company Website'],
                delay: 400,
              },
              {
                title: 'SimpleOS',
                description: 'A web-based terminal simulator using React + TypeScript, supporting basic system commands.',
                image: '/{0BF25356-28BA-45AE-BB5B-96181DF2CDAA}.png',
                liveUrl: 'https://simpleoscharlsz.netlify.app/',
                tags: ['React', 'TypeScript', 'Terminal Simulator'],
                delay: 500,
              },
              {
                title: 'SVG Half-tone Filter',
                description: 'Interactive SVG filter application that applies half-tone effects to images with real-time preview.',
                image: '/{B36547E7-5BCC-4201-B0D4-E5CC7C13B1C0}.png',
                liveUrl: 'https://image-svg-filter.netlify.app/',
                tags: ['SVG', 'Image Processing', 'Interactive Design'],
                delay: 600,
              },
              {
                title: 'World Time Website',
                description: 'Beautiful world clock application displaying time zones from major cities around the globe with live updates.',
                image: '/{ED4F2EA9-2112-4E15-9DFE-5C901ADA7EE2}.png',
                liveUrl: 'https://times-zones-world.netlify.app/',
                tags: ['Time Zones', 'Real-time Data', 'Global Interface'],
                delay: 700,
              },
              {
                title: 'Climate App',
                description: 'Web application that estimates temperature anomalies based on CO2 levels using a machine learning model.',
                githubUrl: 'https://github.com/Charlsz/Climate_app',
                tags: ['Machine Learning', 'Climate Analysis', 'Data Science'],
                delay: 800,
              },
            ].map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <MaterialProjectCard {...project} />
              </Grid>
            ))}
          </Grid>

          <MaterialSection animation="fade" delay={900}>
            <Card
              elevation={2}
              sx={{
                background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.1) 0%, rgba(33, 203, 243, 0.1) 100%)',
                border: '1px solid rgba(33, 150, 243, 0.2)',
                textAlign: 'center',
                p: 4,
              }}
            >
              <Typography variant="h6" sx={{ mb: 3 }}>
                To see more of my projects, feel free to check out my GitHub profile :)
              </Typography>
              <Button
                variant="contained"
                startIcon={<GitHub />}
                component="a"
                href="https://github.com/Charlsz"
                target="_blank"
                rel="noopener noreferrer"
                size="large"
                sx={{
                  backgroundColor: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                    transform: 'scale(1.05)',
                  },
                  transition: 'all 0.2s ease-in-out',
                }}
              >
                Visit GitHub Profile
              </Button>
            </Card>
          </MaterialSection>
        </MaterialSection>

        {/* Resume Section */}
        <MaterialSection id="resume">
          <MaterialSection animation="slideUp">
            <Typography variant="h2" component="h2" sx={{ mb: 6, textAlign: 'center' }}>
              Resume / Hoja de vida
            </Typography>
          </MaterialSection>

          <MaterialSection animation="fade" delay={200}>
            <Card elevation={2}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h6" sx={{ mb: 4, textAlign: 'center' }}>
                  Here you can download my resume in the language of your choice:
                </Typography>

                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MaterialSection animation="slideLeft" delay={300}>
                      <Card
                        elevation={1}
                        sx={{
                          p: 3,
                          backgroundColor: 'rgba(33, 150, 243, 0.05)',
                          border: '1px solid rgba(33, 150, 243, 0.2)',
                          '&:hover': {
                            backgroundColor: 'rgba(33, 150, 243, 0.08)',
                            transform: 'translateY(-4px)',
                          },
                          transition: 'all 0.3s ease-in-out',
                        }}
                      >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Box>
                            <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                              Resume (English)
                            </Typography>
                          </Box>
                          <Button
                            variant="contained"
                            startIcon={<Download />}
                            component="a"
                            href="/Resume_Carlos_Galvis.pdf"
                            sx={{
                              '&:hover': {
                                transform: 'scale(1.05)',
                              },
                              transition: 'transform 0.2s ease-in-out',
                            }}
                          >
                            Download PDF
                          </Button>
                        </Box>
                      </Card>
                    </MaterialSection>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <MaterialSection animation="slideRight" delay={400}>
                      <Card
                        elevation={1}
                        sx={{
                          p: 3,
                          backgroundColor: 'rgba(76, 175, 80, 0.05)',
                          border: '1px solid rgba(76, 175, 80, 0.2)',
                          '&:hover': {
                            backgroundColor: 'rgba(76, 175, 80, 0.08)',
                            transform: 'translateY(-4px)',
                          },
                          transition: 'all 0.3s ease-in-out',
                        }}
                      >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Box>
                            <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                              Hoja de vida (Español)
                            </Typography>
                          </Box>
                          <Button
                            variant="contained"
                            startIcon={<Download />}
                            component="a"
                            href="/Hoja_de_vida_Carlos_Galvis.pdf"
                            sx={{
                              backgroundColor: 'success.main',
                              '&:hover': {
                                backgroundColor: 'success.dark',
                                transform: 'scale(1.05)',
                              },
                              transition: 'all 0.2s ease-in-out',
                            }}
                          >
                            Descargar PDF
                          </Button>
                        </Box>
                      </Card>
                    </MaterialSection>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </MaterialSection>
        </MaterialSection>

        {/* Contact Section */}
        <MaterialSection id="contact">
          <MaterialSection animation="slideUp">
            <Typography variant="h2" component="h2" sx={{ mb: 6, textAlign: 'center' }}>
              Contact Me
            </Typography>
          </MaterialSection>

          <MaterialSection animation="fade" delay={200}>
            <Card elevation={2}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h6" sx={{ mb: 4, textAlign: 'center' }}>
                  I'm always open to new opportunities and collaborations. Feel free to reach out through any of the following channels:
                </Typography>

                <Grid container spacing={3}>
                  {[
                    {
                      icon: Email,
                      title: 'Email',
                      value: 'cgalvis21_@hotmail.com',
                      href: 'mailto:cgalvis21_@hotmail.com',
                      delay: 300,
                    },
                    {
                      icon: Phone,
                      title: 'Phone',
                      value: '+57 316 661 0293',
                      href: 'tel:+573166610293',
                      delay: 400,
                    },
                    {
                      icon: LinkedIn,
                      title: 'LinkedIn',
                      value: 'linkedin.com/in/cgalvisp',
                      href: 'https://www.linkedin.com/in/cgalvisp/',
                      delay: 500,
                    },
                    {
                      icon: GitHub,
                      title: 'GitHub',
                      value: 'github.com/Charlsz',
                      href: 'https://github.com/Charlsz',
                      delay: 600,
                    },
                  ].map(({ icon: Icon, title, value, href, delay }, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <MaterialSection animation="fade" delay={delay}>
                        <Card
                          elevation={1}
                          sx={{
                            p: 3,
                            '&:hover': {
                              backgroundColor: 'rgba(33, 150, 243, 0.05)',
                              transform: 'translateY(-4px)',
                            },
                            transition: 'all 0.3s ease-in-out',
                            cursor: 'pointer',
                          }}
                          component="a"
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          sx={{ textDecoration: 'none', color: 'inherit' }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Icon color="primary" />
                            <Box>
                              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                {title}
                              </Typography>
                              <Typography variant="body2" color="primary">
                                {value}
                              </Typography>
                            </Box>
                          </Box>
                        </Card>
                      </MaterialSection>
                    </Grid>
                  ))}
                </Grid>

                <Divider sx={{ my: 4 }} />

                <MaterialSection animation="fade" delay={700}>
                  <Card
                    elevation={1}
                    sx={{
                      p: 3,
                      backgroundColor: 'rgba(33, 150, 243, 0.05)',
                      border: '1px solid rgba(33, 150, 243, 0.2)',
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                      Location
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Based in Colombia
                      <br />
                      Available for remote work worldwide
                    </Typography>
                  </Card>
                </MaterialSection>
              </CardContent>
            </Card>
          </MaterialSection>
        </MaterialSection>

        {/* Scroll to Top FAB */}
        <Zoom in={showScrollTop}>
          <Fab
            color="primary"
            size="medium"
            onClick={scrollToTop}
            sx={{
              position: 'fixed',
              bottom: 24,
              right: 24,
              zIndex: 1000,
            }}
          >
            <KeyboardArrowUp />
          </Fab>
        </Zoom>
      </Box>
    </ThemeProvider>
  );
}

export default App;