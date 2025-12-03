import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Box, 
  CircularProgress, 
  Breadcrumbs,
  Chip,
  Divider,
  useTheme,
  useMediaQuery,
  Grid,
  Paper,
  Card,
  CardContent,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Alert,
  alpha
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import TimerIcon from '@mui/icons-material/Timer';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Helmet } from 'react-helmet-async';
import { generateSEOContent } from '../services/aiContentService';
import { motion } from 'framer-motion';

const BlogPost = () => {
  const { topic } = useParams();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const fetchContent = async () => {
      if (!topic) {
        setError('No topic specified');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const cachedContent = localStorage.getItem(`blog_${topic}`);
        if (cachedContent) {
          const { content: storedContent, timestamp } = JSON.parse(cachedContent);
          const age = Date.now() - timestamp;
          if (age < 24 * 60 * 60 * 1000) {
            setContent(storedContent);
            setLoading(false);
            return;
          }
        }

        const generatedContent = await generateSEOContent(topic, 'Tax and Business');
        
        if (!generatedContent || !generatedContent.content) {
          throw new Error('Invalid content structure received');
        }

        localStorage.setItem(`blog_${topic}`, JSON.stringify({
          content: generatedContent,
          timestamp: Date.now()
        }));

        setContent(generatedContent);
      } catch (err) {
        console.error('Error fetching blog content:', err);
        setError('Failed to load blog content. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [topic]);

  if (loading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error || !content || !content.content) {
    return (
      <Container>
        <Typography color="error" variant="h6" sx={{ mt: 4, textAlign: 'center' }}>
          {error || 'No content available.'}
        </Typography>
      </Container>
    );
  }

  const formattedDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Ensure all required content properties exist
  const {
    seo = {},
    structuredData = {},
    content: {
      title = '',
      introduction = '',
      sections = [],
      conclusion = '',
      faqs = []
    } = {}
  } = content;

  const {
    focusKeywords = [],
    metaDescription = '',
    canonicalUrl = ''
  } = seo;

  const {
    category = 'Uncategorized',
    articleType = 'Article',
    keywords = [],
    industry = ''
  } = structuredData;

  const renderSection = (section, index) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      key={section.title}
    >
      <Box sx={{ mb: 6 }}>
        <Typography 
          variant="h4" 
          sx={{ 
            mb: 3,
            fontWeight: 600,
            color: theme.palette.primary.main
          }}
        >
          {section.title}
        </Typography>
        {section.content.map((paragraph, idx) => (
          <Typography 
            key={idx} 
            variant="body1" 
            sx={{ 
              mb: 2,
              lineHeight: 1.8,
              color: 'text.primary',
              fontSize: '1.1rem'
            }}
          >
            {paragraph}
          </Typography>
        ))}
        
        {/* Key Takeaways */}
        {section.keyTakeaways && section.keyTakeaways.length > 0 && (
          <Box sx={{ mt: 3, pl: 2, borderLeft: `4px solid ${theme.palette.primary.main}` }}>
            <Typography variant="h6" sx={{ mb: 2, color: theme.palette.primary.main }}>
              Key Takeaways
            </Typography>
            <List dense>
              {section.keyTakeaways.map((point, idx) => (
                <ListItem key={idx} sx={{ pl: 0 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon color="primary" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText 
                    primary={point} 
                    primaryTypographyProps={{ 
                      variant: 'body2',
                      sx: { color: 'text.primary' }
                    }} 
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </Box>
    </motion.div>
  );

  const renderCaseStudies = () => (
    <Box sx={{ my: 6 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 600, color: theme.palette.primary.main }}>
        Case Studies
      </Typography>
      <Grid container spacing={3}>
        {content.content.caseStudies?.map((study, index) => (
          <Grid item xs={12} key={index}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 3, 
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 1
              }}
            >
              <Typography variant="h6" color="primary" gutterBottom>
                {study.title}
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Challenge:</strong> {study.challenge}
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Solution:</strong> {study.solution}
              </Typography>
              <Typography variant="body1">
                <strong>Outcome:</strong> {study.outcome}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords.join(', ')} />
        <link rel="canonical" href={`/blog/${canonicalUrl}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": articleType,
            "headline": title,
            "keywords": keywords.join(', '),
            "articleSection": category,
            "industry": industry
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'background.paper',
          borderBottom: `1px solid ${theme.palette.divider}`,
          pt: { xs: 4, md: 6 },
          pb: { xs: 4, md: 6 }
        }}
      >
        <Container maxWidth="lg">
          {/* Breadcrumbs */}
          <Breadcrumbs 
            separator={<NavigateNextIcon fontSize="small" />}
            sx={{ mb: 4 }}
          >
            <Link to="/" style={{ color: theme.palette.text.primary, textDecoration: 'none' }}>
              Home
            </Link>
            <Link to="/blog" style={{ color: theme.palette.text.primary, textDecoration: 'none' }}>
              Blog
            </Link>
            <Typography color="text.secondary">{title}</Typography>
          </Breadcrumbs>

          {/* Header Content */}
          <Box sx={{ maxWidth: '800px' }}>
            <Chip 
              label={category}
              size="small"
              sx={{ 
                mb: 2,
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                color: theme.palette.primary.main,
                borderRadius: 1
              }}
            />
            
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '2rem', md: '2.5rem' }, 
                fontWeight: 700, 
                mb: 3,
                color: 'text.primary'
              }}
            >
              {title}
            </Typography>

            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 3, 
                mb: 4,
                color: 'text.secondary'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CalendarTodayIcon sx={{ fontSize: '1rem' }} />
                <Typography variant="body2">{formattedDate}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <TimerIcon sx={{ fontSize: '1rem' }} />
                <Typography variant="body2">{content.readingTime} min read</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PersonIcon sx={{ fontSize: '1rem' }} />
                <Typography variant="body2">{content.author}</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={4}>
          {/* Main Content Column */}
          <Grid item xs={12} md={8}>
            {/* Introduction */}
            <Typography 
              variant="subtitle1" 
              sx={{ 
                mb: 6,
                fontSize: '1.2rem',
                lineHeight: 1.8,
                color: 'text.secondary'
              }}
            >
              {introduction}
            </Typography>

            {/* Table of Contents */}
            <Paper 
              elevation={0} 
              sx={{ 
                mb: 6,
                p: 3,
                bgcolor: alpha(theme.palette.primary.main, 0.05),
                borderRadius: 1
              }}
            >
              <Typography variant="h6" gutterBottom>Contents</Typography>
              <List dense>
                {sections.map((section, index) => (
                  <ListItem key={index} sx={{ py: 0.5 }}>
                    <ListItemText 
                      primary={section.title}
                      primaryTypographyProps={{
                        sx: { color: theme.palette.primary.main }
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>

            {/* Sections */}
            {sections.map((section, index) => renderSection(section, index))}

            {/* Case Studies */}
            {content.content.caseStudies?.length > 0 && renderCaseStudies()}

            {/* Conclusion */}
            <Box sx={{ mt: 6 }}>
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: theme.palette.primary.main }}>
                Conclusion
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                {conclusion}
              </Typography>
            </Box>
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            <Box sx={{ position: 'sticky', top: 24 }}>
              {/* Author Card */}
              <Paper 
                elevation={0} 
                sx={{ 
                  p: 3, 
                  mb: 4,
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 1
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ bgcolor: theme.palette.primary.main, mr: 2 }}>
                    <PersonIcon />
                  </Avatar>
                  <Box>
                    <Typography variant="h6">{content.author}</Typography>
                    <Typography variant="body2" color="text.secondary">Tax Expert</Typography>
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Expert in taxation and business advisory with years of experience in helping businesses navigate complex tax landscapes.
                </Typography>
              </Paper>

              {/* Key Points */}
              <Paper 
                elevation={0} 
                sx={{ 
                  p: 3,
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 1
                }}
              >
                <Typography variant="h6" gutterBottom>Key Points</Typography>
                <List dense>
                  {content.content.keyPoints?.map((point, index) => (
                    <ListItem key={index} sx={{ pl: 0 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <CheckCircleIcon color="primary" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText 
                        primary={point}
                        primaryTypographyProps={{
                          variant: 'body2',
                          sx: { color: 'text.secondary' }
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default BlogPost; 