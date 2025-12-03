import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const Startups = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <SEO
        title="Tax & Compliance for Startups | Rastogi & Associates"
        description="Incorporation, ESOPs, fundraising diligence, and startup taxation handled end-to-end."
        url="https://www.rastogiassociates.in/industries/startups"
      />
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>Startups</Typography>
        <Typography color="text.secondary" sx={{ mb: 6 }}>Scale-ready finance and compliance for venture-backed and bootstrapped founders.</Typography>
        <Grid container spacing={3}>
          {["Incorporation & ROC compliance","ESOP design & taxation","Due diligence for funding","GST & TDS automation"].map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item}>
              <Paper sx={{ p: 3, height: '100%' }}>
                <Typography>{item}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Button component={Link} to="/contact" variant="contained" sx={{ mt: 4 }}>Book a Consultation</Button>
      </Container>
    </Box>
  );
};

export default Startups;


