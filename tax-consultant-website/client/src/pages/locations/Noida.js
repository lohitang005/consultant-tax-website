import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import SEO from '../../components/SEO';

const Noida = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <SEO
        title="Tax Consultant in Noida | GST & Income Tax | Rastogi & Associates"
        description="Trusted tax consultant in Noida for GST, income tax filing, and corporate compliance. Schedule your consultation in Noida."
        url="https://www.rastogiassociates.in/locations/noida"
        keywords={["tax consultant Noida","GST Noida","income tax Noida"]}
        alternates={[{ hrefLang: 'en-in', href: 'https://www.rastogiassociates.in/locations/noida' }]}
        jsonLd={{ '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Rastogi & Associates - Noida', address: { '@type': 'PostalAddress', addressLocality: 'Noida', addressRegion: 'UP', addressCountry: 'IN' } }}
      />
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>Tax Consultant in Noida</Typography>
        <Typography color="text.secondary">End-to-end GST compliance and income tax services in Noida.</Typography>
      </Container>
    </Box>
  );
};

export default Noida;


