import React from 'react';
import { Breadcrumbs, Link, Typography, Box, Container } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Box 
      sx={{ 
        bgcolor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider',
        py: 1.5
      }}
    >
      <Container maxWidth="lg">
        <Breadcrumbs 
          separator={<NavigateNextIcon fontSize="small" />} 
          aria-label="breadcrumb"
        >
          <Link
            component={RouterLink}
            underline="hover"
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              color: 'text.secondary',
              '&:hover': { color: 'primary.main' }
            }}
            to="/"
          >
            Home
          </Link>
          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const name = value.split('-').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ');

            return last ? (
              <Typography 
                color="text.primary" 
                key={to}
                sx={{ fontWeight: 500 }}
              >
                {name}
              </Typography>
            ) : (
              <Link
                component={RouterLink}
                underline="hover"
                sx={{ 
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main' }
                }}
                to={to}
                key={to}
              >
                {name}
              </Link>
            );
          })}
        </Breadcrumbs>
      </Container>
    </Box>
  );
};

export default Breadcrumb; 