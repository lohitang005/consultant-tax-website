import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  TextField,
  InputAdornment,
  Pagination,
  useTheme,
  useMediaQuery,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Breadcrumbs,
  Link as MuiLink,
  CircularProgress,
  Alert,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ShareIcon from '@mui/icons-material/Share';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import UpdateIcon from '@mui/icons-material/Update';
import RefreshIcon from '@mui/icons-material/Refresh';
import { getBlogPosts, getTimeUntilNextUpdate, setupAutoUpdate, forceUpdate } from '../utils/blogManager';
import { alpha } from '@mui/material/styles';

const POSTS_PER_PAGE = 12;

const CATEGORIES = [
  'All Categories',
  'Tax Compliance',
  'Indirect Tax',
  'Tax Planning',
  'International Tax',
  'Corporate Services',
  'Tax Technology',
  'Tax Litigation'
];

const Blog = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('date');
  const [loading, setLoading] = useState(true);
  const [blogPosts, setBlogPosts] = useState([]);
  const [error, setError] = useState(null);
  const [countdown, setCountdown] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set up automatic content updates
    setupAutoUpdate();

    // Load initial blog posts
    loadBlogPosts();

    // Set up interval to check and update the countdown
    const interval = setInterval(() => {
      const timeUntilNext = getTimeUntilNextUpdate();
      setCountdown(timeUntilNext);
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  const loadBlogPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const posts = await getBlogPosts();
      setBlogPosts(posts);
    } catch (err) {
      console.error('Error loading blog posts:', err);
      setError('Failed to load blog posts. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = blogPosts.filter(post =>
    (selectedCategory === 'All Categories' || post?.category === selectedCategory) &&
    ((post?.title?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
     (post?.content?.introduction?.toLowerCase() || '').includes(searchTerm.toLowerCase()))
  ).sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.date || 0) - new Date(a.date || 0);
    }
    return (a.title || '').localeCompare(b.title || '');
  });

  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo(0, 0);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ py: { xs: 4, md: 8 } }}>
      <SEO
        title="Tax & Business Blog | Expert Insights | Rastogi & Associates"
        description="Stay informed with expert insights on taxation, business advisory, and corporate compliance. Read our latest blog posts for professional guidance and updates."
        url="https://www.rastogiassociates.in/blog"
        keywords={[
          'tax blog', 'business advisory', 'GST updates', 'corporate compliance', 'Delhi NCR', 'tax planning', 'legal insights'
        ]}
      />

      <Container maxWidth="lg">
        {/* Breadcrumbs */}
        <Breadcrumbs sx={{ mb: 4 }}>
          <MuiLink component={Link} to="/" color="inherit">
            Home
          </MuiLink>
          <Typography color="text.primary">Blog</Typography>
        </Breadcrumbs>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            align="center"
            sx={{
              mb: 2,
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700,
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Expert Tax & Business Insights
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{ 
              mb: 6, 
              color: 'text.secondary', 
              maxWidth: '800px', 
              mx: 'auto',
              fontSize: { xs: '1.1rem', md: '1.3rem' }
            }}
          >
            Stay informed with the latest updates in taxation, compliance, and business advisory
          </Typography>
        </motion.div>

        {/* Update Timer Section */}
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            gap: 2,
            mb: 4,
            p: 3,
            borderRadius: 2,
            bgcolor: 'background.paper',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            border: `1px solid ${theme.palette.grey[200]}`
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <UpdateIcon sx={{ color: theme.palette.primary.main }} />
            <Typography variant="subtitle1" color="text.primary" fontWeight={500}>
              Next Content Update in:
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ 
                color: theme.palette.primary.main,
                fontWeight: 600
              }}>
                {String(countdown.hours).padStart(2, '0')}
              </Typography>
              <Typography variant="caption" color="text.secondary">Hours</Typography>
            </Box>
            <Typography variant="h4" sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>:</Typography>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ 
                color: theme.palette.primary.main,
                fontWeight: 600
              }}>
                {String(countdown.minutes).padStart(2, '0')}
              </Typography>
              <Typography variant="caption" color="text.secondary">Minutes</Typography>
            </Box>
            <Typography variant="h4" sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>:</Typography>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ 
                color: theme.palette.primary.main,
                fontWeight: 600
              }}>
                {String(countdown.seconds).padStart(2, '0')}
              </Typography>
              <Typography variant="caption" color="text.secondary">Seconds</Typography>
            </Box>
          </Box>
          
          <Button
            startIcon={<RefreshIcon />}
            variant="contained"
            color="primary"
            onClick={async () => {
              try {
                setLoading(true);
                await forceUpdate();
                await loadBlogPosts();
              } catch (err) {
                console.error('Error forcing update:', err);
                setError('Failed to update content. Please try again later.');
              } finally {
                setLoading(false);
              }
            }}
            disabled={loading}
            sx={{
              ml: 2,
              bgcolor: theme.palette.primary.main,
              '&:hover': {
                bgcolor: theme.palette.primary.dark,
              }
            }}
          >
            Refresh Now
          </Button>
        </Box>

        {/* Show a subtle notification when content has been updated */}
        {loading && (
          <Alert 
            severity="info"
            sx={{ 
              mb: 4,
              bgcolor: alpha(theme.palette.primary.main, 0.05),
              color: theme.palette.primary.main,
              '& .MuiAlert-icon': {
                color: theme.palette.primary.main
              }
            }}
          >
            Updating content...
          </Alert>
        )}

        {error && (
          <Alert severity="error" sx={{ mb: 4 }}>
            {error}
          </Alert>
        )}

        {/* Search and Filter Section */}
        <Box sx={{ mb: 6 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: theme.palette.primary.main }} />
                    </InputAdornment>
                  ),
                  sx: {
                    bgcolor: 'background.paper',
                    '&:hover': {
                      bgcolor: 'background.paper',
                    },
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  label="Category"
                  sx={{
                    bgcolor: 'background.paper',
                    '&:hover': {
                      bgcolor: 'background.paper',
                    },
                  }}
                >
                  {CATEGORIES.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <FormControl fullWidth>
                <InputLabel>Sort By</InputLabel>
                <Select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  label="Sort By"
                  sx={{
                    bgcolor: 'background.paper',
                    '&:hover': {
                      bgcolor: 'background.paper',
                    },
                  }}
                >
                  <MenuItem value="date">Latest First</MenuItem>
                  <MenuItem value="title">Title</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>

        {/* Blog Posts Grid */}
        <Grid container spacing={4}>
          {currentPosts.map((post, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[4],
                  },
                  bgcolor: 'background.paper',
                  borderRadius: 3,
                  overflow: 'hidden',
                  border: `1px solid ${theme.palette.grey[200]}`
                }}
                component={Link}
                to={`/blog/${encodeURIComponent(post.topic)}`}
                style={{ textDecoration: 'none' }}
              >
                <CardContent sx={{ p: 3, flexGrow: 1 }}>
                  <Typography 
                    variant="overline" 
                    sx={{ 
                      color: theme.palette.primary.main,
                      fontWeight: 500,
                      mb: 1,
                      display: 'block'
                    }}
                  >
                    {post.category}
                  </Typography>
                  
                  <Typography 
                    variant="h6" 
                    component="h2"
                    sx={{ 
                      mb: 2,
                      fontWeight: 600,
                      lineHeight: 1.4,
                      minHeight: '3.2em',
                      color: 'text.primary'
                    }}
                  >
                    {post.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ 
                      mb: 3,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {post.content.introduction}
                  </Typography>

                  {/* Post Metadata */}
                  <Box sx={{ 
                    mt: 'auto',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2,
                    color: 'text.secondary',
                    fontSize: '0.75rem'
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <PersonIcon sx={{ mr: 0.5, fontSize: '1rem' }} />
                      <Typography variant="caption">{post.author}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <CalendarTodayIcon sx={{ mr: 0.5, fontSize: '1rem' }} />
                      <Typography variant="caption">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Pagination */}
        {totalPages > 1 && (
          <Box sx={{ mt: 6, display: 'flex', justifyContent: 'center' }}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
              size={isMobile ? 'small' : 'medium'}
              sx={{
                '& .MuiPaginationItem-root': {
                  color: 'text.secondary',
                },
                '& .Mui-selected': {
                  bgcolor: `${theme.palette.primary.main} !important`,
                  color: 'white !important'
                }
              }}
            />
          </Box>
        )}

        {/* Results Summary */}
        <Typography 
          variant="body2" 
          color="text.secondary" 
          align="center"
          sx={{ mt: 2 }}
        >
          Showing {indexOfFirstPost + 1}-{Math.min(indexOfLastPost, filteredPosts.length)} of {filteredPosts.length} articles
        </Typography>
      </Container>
    </Box>
  );
};

export default Blog;
