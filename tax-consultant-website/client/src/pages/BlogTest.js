import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CircularProgress,
  Divider,
  Card,
  CardContent,
  Grid
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { testBlogUniqueness, analyzeBlogDiversity } from '../utils/blogTest';

const BlogTest = () => {
  const [uniquenessResults, setUniquenessResults] = useState(null);
  const [diversityResults, setDiversityResults] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const runTests = () => {
      const uniqueness = testBlogUniqueness();
      const diversity = analyzeBlogDiversity();
      setUniquenessResults(uniqueness);
      setDiversityResults(diversity);
      setLoading(false);
    };

    runTests();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Blog Content Analysis
      </Typography>

      {/* Summary Statistics */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Summary Statistics
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Total Posts
                </Typography>
                <Typography variant="h4">
                  {uniquenessResults.totalPosts}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Unique Titles
                </Typography>
                <Typography variant="h4">
                  {uniquenessResults.uniqueTitles}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Unique Excerpts
                </Typography>
                <Typography variant="h4">
                  {uniquenessResults.uniqueExcerpts}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Categories
                </Typography>
                <Typography variant="h4">
                  {Object.keys(diversityResults.categoryDistribution).length}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Category Distribution */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Category Distribution</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Category</TableCell>
                  <TableCell align="right">Number of Posts</TableCell>
                  <TableCell align="right">Percentage</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.entries(diversityResults.categoryDistribution).map(([category, count]) => (
                  <TableRow key={category}>
                    <TableCell>{category}</TableCell>
                    <TableCell align="right">{count}</TableCell>
                    <TableCell align="right">
                      {((count / uniquenessResults.totalPosts) * 100).toFixed(1)}%
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>

      {/* Sample Posts */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Sample Posts</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Topics</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {uniquenessResults.samplePosts.map((post) => (
                  <TableRow key={post.id}>
                    <TableCell>{post.title}</TableCell>
                    <TableCell>{post.category}</TableCell>
                    <TableCell>{new Date(post.date).toLocaleDateString()}</TableCell>
                    <TableCell>{post.tags.join(', ')}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>

      {/* Date Distribution */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Date Distribution</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Month</TableCell>
                  <TableCell align="right">Number of Posts</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.entries(diversityResults.dateDistribution)
                  .sort((a, b) => b[0].localeCompare(a[0]))
                  .map(([month, count]) => (
                    <TableRow key={month}>
                      <TableCell>{new Date(month).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</TableCell>
                      <TableCell align="right">{count}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>

      {/* Duplicate Check Results */}
      {(uniquenessResults.duplicateTitles.length > 0 || uniquenessResults.duplicateExcerpts.length > 0) && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" color="error" gutterBottom>
            Duplicate Content Found
          </Typography>
          {uniquenessResults.duplicateTitles.length > 0 && (
            <Typography color="error">
              {uniquenessResults.duplicateTitles.length} duplicate titles found
            </Typography>
          )}
          {uniquenessResults.duplicateExcerpts.length > 0 && (
            <Typography color="error">
              {uniquenessResults.duplicateExcerpts.length} duplicate excerpts found
            </Typography>
          )}
        </Box>
      )}
    </Container>
  );
};

export default BlogTest; 