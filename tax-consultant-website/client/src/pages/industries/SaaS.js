import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const SaaS = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <SEO
        title="SaaS Finance & Tax | Rastogi & Associates"
        description="Revenue recognition, foreign remittances, GST on exports, and TDS for SaaS companies."
        url="https://www.rastogiassociates.in/industries/saas"
      />
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>SaaS</Typography>
        <Typography color="text.secondary" sx={{ mb: 6 }}>Clean books, compliant billing, and investor-grade reporting for SaaS.</Typography>
        <Grid container spacing={3}>
          {["Revenue recognition (IND AS)","Export of services & LUT","FDI/FIRC/FC-GPR filings","TDS on subscriptions & contractors"].map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item}>
              <Paper sx={{ p: 3, height: '100%' }}>
                <Typography>{item}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Button component={Link} to="/contact" variant="contained" sx={{ mt: 4 }}>Schedule a Call</Button>
      </Container>
    </Box>
  );
};

export default SaaS;


