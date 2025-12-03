import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import SEO from '../../components/SEO';

const Delhi = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 } }}>
      <SEO
        title="Tax Consultant in Delhi | GST, Income Tax, Litigation | Rastogi & Associates"
        description="Leading tax consultant in Delhi for GST, income tax, corporate compliance, and litigation. Book a consultation with Rastogi & Associates in Delhi."
        url="https://www.rastogiassociates.in/locations/delhi"
        keywords={["tax consultant Delhi","GST consultant Delhi","income tax filing Delhi","tax litigation Delhi"]}
        alternates={[{ hrefLang: 'en-in', href: 'https://www.rastogiassociates.in/locations/delhi' }]}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Rastogi & Associates - Delhi',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Office No. G-9, Ground Floor, Pearls Best Heights-1, Netaji Subhash Palace (NSP), Pitampura',
            addressLocality: 'New Delhi',
            postalCode: '110034',
            addressRegion: 'DL',
            addressCountry: 'IN'
          }
        }}
      />
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ fontWeight: 800, mb: 2 }}>Tax Consultant in Delhi</Typography>
        <Typography color="text.secondary">Expert GST, income tax, and corporate advisory services in New Delhi.</Typography>
      </Container>
    </Box>
  );
};

export default Delhi;


