import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Link,
  useTheme,
  alpha
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';
import Breadcrumb from '../components/Breadcrumb';

const Sitemap = () => {
  const theme = useTheme();

  const siteStructure = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "FAQ", path: "/faq" },
        { name: "Resources", path: "/resources" },
        { name: "Blog", path: "/blog" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Corporate Services", path: "/services/corporate-services" },
        { name: "Tax Advisory", path: "/services/tax-advisory" },
        { name: "Financial Advisory", path: "/services/financial-advisory" },
        { name: "Business Consulting", path: "/services/business-consulting" },
        { name: "Bookkeeping Services", path: "/services/bookkeeping-services" },
        { name: "Litigation Services", path: "/services/litigation" },
        { name: "International Tax", path: "/services/international-tax" },
        { name: "Planning Services", path: "/services/planning" },
        { name: "Income Tax Services", path: "/services/income-tax" },
        { name: "Indirect Tax Services", path: "/services/indirect-tax" },
        { name: "Other Business Services", path: "/services/other-business" }
      ]
    },
    {
      title: "Resources & Tools",
      links: [
        { name: "Tax Calculator", path: "/calculator" },
        { name: "Company Resources", path: "/resources#company" },
        { name: "Downloads", path: "/resources#downloads" },
        { name: "Forms & Templates", path: "/resources#templates" }
      ]
    },
    {
      title: "Industries",
      links: [
        { name: "Startups", path: "/industries/startups" },
        { name: "D2C & Ecommerce", path: "/industries/d2c" },
        { name: "SaaS", path: "/industries/saas" },
        { name: "Manufacturers", path: "/industries/manufacturers" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms-of-service" },
        { name: "Sitemap", path: "/sitemap" }
      ]
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', pb: 8 }}>
      <SEO
        title="Sitemap | Rastogi & Associates"
        description="Navigate through our website structure and find all available pages and resources at Rastogi & Associates."
        url="https://www.rastogiassociates.in/sitemap"
      />

      <Breadcrumb />

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 6 },
            borderRadius: 4,
            background: alpha(theme.palette.background.paper, 0.8),
            backdropFilter: 'blur(10px)',
            border: '1px solid',
            borderColor: theme.palette.divider
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700,
              mb: 3,
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Sitemap
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              mb: 6,
              color: 'text.secondary',
              maxWidth: '800px'
            }}
          >
            Find everything you need on our website with this comprehensive sitemap.
            All our pages and resources are organized here for easy navigation.
          </Typography>

          <Grid container spacing={4}>
            {siteStructure.map((section, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: alpha(theme.palette.primary.main, 0.1),
                    background: alpha(theme.palette.background.paper, 0.5),
                    height: '100%'
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: theme.palette.primary.main
                    }}
                  >
                    {section.title}
                  </Typography>
                  <Box
                    component="ul"
                    sx={{
                      listStyle: 'none',
                      p: 0,
                      m: 0
                    }}
                  >
                    {section.links.map((link, idx) => (
                      <Box
                        component="li"
                        key={idx}
                        sx={{
                          mb: 1.5
                        }}
                      >
                        <Link
                          component={RouterLink}
                          to={link.path}
                          sx={{
                            color: 'text.primary',
                            textDecoration: 'none',
                            fontSize: '0.95rem',
                            transition: 'all 0.2s ease',
                            '&:hover': {
                              color: 'primary.main',
                              textDecoration: 'underline'
                            }
                          }}
                        >
                          {link.name}
                        </Link>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Sitemap; 