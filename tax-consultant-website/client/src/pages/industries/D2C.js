import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const D2C = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <SEO
        title="D2C & Ecommerce Tax | Rastogi & Associates"
        description="GST, inventory valuation, marketplaces reconciliation, and profitability analytics for D2C."
        url="https://www.rastogiassociates.in/industries/d2c"
      />
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>D2C & Ecommerce</Typography>
        <Typography color="text.secondary" sx={{ mb: 6 }}>Optimize margins with accurate GST credits, returns, and reconciliations.</Typography>
        <Grid container spacing={3}>
          {["GST input credit optimization","Marketplace fee reconciliation","Inventory valuation & costing","Returns & refunds accounting"].map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item}>
              <Paper sx={{ p: 3, height: '100%' }}>
                <Typography>{item}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Button component={Link} to="/contact" variant="contained" sx={{ mt: 4 }}>Talk to an Expert</Button>
      </Container>
    </Box>
  );
};

export default D2C;


