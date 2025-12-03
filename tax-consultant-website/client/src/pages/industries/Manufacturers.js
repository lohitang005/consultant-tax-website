import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const Manufacturers = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <SEO
        title="Manufacturing Tax & Compliance | Rastogi & Associates"
        description="Excise/GST, refunds, incentives, and costing systems for manufacturing SMEs."
        url="https://www.rastogiassociates.in/industries/manufacturers"
      />
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>Manufacturers</Typography>
        <Typography color="text.secondary" sx={{ mb: 6 }}>From input credits to incentives—maximize cash flow and compliance.</Typography>
        <Grid container spacing={3}>
          {["Refund & incentive claims","Costing & inventory controls","E-way bills & compliances","Plant-wise MIS & dashboards"].map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item}>
              <Paper sx={{ p: 3, height: '100%' }}>
                <Typography>{item}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Button component={Link} to="/contact" variant="contained" sx={{ mt: 4 }}>Consult Now</Button>
      </Container>
    </Box>
  );
};

export default Manufacturers;


