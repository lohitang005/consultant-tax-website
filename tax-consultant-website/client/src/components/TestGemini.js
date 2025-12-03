import React, { useState } from 'react';
import { generateContent, generateBlogMeta } from '../services/aiContentService';
import { 
    Button, 
    Container, 
    Paper, 
    Typography, 
    CircularProgress,
    Box
} from '@mui/material';

const TestGemini = () => {
    const [loading, setLoading] = useState(false);
    const [content, setContent] = useState(null);
    const [error, setError] = useState(null);

    const testGeneration = async () => {
        setLoading(true);
        setError(null);
        try {
            // Test content generation
            const testContent = await generateContent(
                'Recent changes in GST e-invoicing system',
                'GST Updates'
            );
            
            if (testContent) {
                // If content generation successful, test metadata generation
                const testMeta = await generateBlogMeta(
                    testContent.title,
                    'GST Updates'
                );
                
                setContent({
                    content: testContent,
                    metadata: testMeta
                });
            } else {
                setError('Failed to generate content');
            }
        } catch (err) {
            setError(err.message || 'An error occurred during content generation');
        }
        setLoading(false);
    };

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h4" gutterBottom>
                Gemini API Test
            </Typography>
            
            <Button 
                variant="contained" 
                onClick={testGeneration}
                disabled={loading}
                sx={{ mb: 4 }}
            >
                {loading ? 'Generating...' : 'Test Content Generation'}
            </Button>

            {loading && (
                <Box display="flex" justifyContent="center" my={4}>
                    <CircularProgress />
                </Box>
            )}

            {error && (
                <Paper sx={{ p: 2, mb: 2, bgcolor: '#ffebee' }}>
                    <Typography color="error">
                        Error: {error}
                    </Typography>
                </Paper>
            )}

            {content && (
                <Paper sx={{ p: 3 }}>
                    <Typography variant="h5" gutterBottom>
                        Generated Content:
                    </Typography>
                    
                    <Typography variant="h6" color="primary" gutterBottom>
                        {content.content.title}
                    </Typography>

                    <Typography variant="body1" paragraph>
                        Introduction: {content.content.introduction}
                    </Typography>

                    {content.content.sections.map((section, index) => (
                        <Box key={index} sx={{ mb: 2 }}>
                            <Typography variant="h6" gutterBottom>
                                {section.title}
                            </Typography>
                            {section.content.map((paragraph, pIndex) => (
                                <Typography key={pIndex} paragraph>
                                    {paragraph}
                                </Typography>
                            ))}
                        </Box>
                    ))}

                    <Typography variant="body1" paragraph>
                        Conclusion: {content.content.conclusion}
                    </Typography>

                    <Box sx={{ mt: 3, p: 2, bgcolor: '#f5f5f5' }}>
                        <Typography variant="h6" gutterBottom>
                            Generated Metadata:
                        </Typography>
                        <Typography variant="body1">
                            Tags: {content.metadata.tags.join(', ')}
                        </Typography>
                        <Typography variant="body1">
                            Reading Time: {content.metadata.readingTime} minutes
                        </Typography>
                        <Typography variant="body1">
                            Excerpt: {content.metadata.excerpt}
                        </Typography>
                    </Box>
                </Paper>
            )}
        </Container>
    );
};

export default TestGemini; 