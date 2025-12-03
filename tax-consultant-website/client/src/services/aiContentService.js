import { API_KEYS, API_ENDPOINTS } from '../config/api.config';

async function generateContent(topic, category) {
    try {
        const prompt = `Generate a comprehensive, detailed blog post about "${topic}" in the context of ${category}. 
        The content should be professional, informative, and specific to the Indian tax and business context.
        Include recent developments, regulations, practical implications, and real-world examples.
        
        Required sections:
        1. Introduction (min 300 words)
        2. Current Scenario and Market Impact
        3. Key Regulations and Compliance Requirements
        4. Step-by-Step Implementation Guide
        5. Best Practices and Expert Tips
        6. Common Challenges and Solutions
        7. Case Studies (2-3 examples)
        8. Future Trends and Predictions
        9. Action Items for Businesses
        10. Conclusion with Key Takeaways

        Each section should have:
        - Detailed explanations with examples
        - Relevant statistics and data
        - Expert insights
        - Practical tips
        - Industry-specific implications
        
        Format the response as a JSON with the following structure:
        {
            "title": "SEO-optimized title",
            "introduction": "Detailed opening section",
            "sections": [
                {
                    "title": "Section title",
                    "content": ["Detailed paragraph 1", "Detailed paragraph 2", "Examples", "Statistics"],
                    "keyTakeaways": ["Point 1", "Point 2"],
                    "expertTips": ["Tip 1", "Tip 2"]
                }
            ],
            "caseStudies": [
                {
                    "title": "Case Study Title",
                    "industry": "Specific Industry",
                    "challenge": "Problem Statement",
                    "solution": "Implemented Solution",
                    "outcome": "Results and Benefits"
                }
            ],
            "conclusion": "Comprehensive conclusion",
            "keyPoints": ["Key Point 1", "Key Point 2"],
            "expertQuotes": ["Expert Quote 1", "Expert Quote 2"],
            "upcomingDeadlines": [
                {
                    "date": "Deadline Date",
                    "requirement": "What needs to be done",
                    "impact": "Impact of missing deadline"
                }
            ],
            "industryImpact": {
                "shortTerm": ["Impact 1", "Impact 2"],
                "longTerm": ["Future Impact 1", "Future Impact 2"]
            },
            "actionItems": ["Action 1", "Action 2"],
            "resources": ["Resource Link 1", "Resource Link 2"]
        }`;

        const response = await fetch(`${API_ENDPOINTS.GEMINI}?key=${API_KEYS.GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }],
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 2048,
                }
            })
        });

        if (!response.ok) {
            throw new Error('Failed to generate content');
        }

        const data = await response.json();
        const generatedText = data.candidates[0].content.parts[0].text;
        const content = JSON.parse(generatedText);
        return content;

    } catch (error) {
        console.error('Error generating content:', error);
        return null;
    }
}

async function generateBlogMeta(title, category) {
    try {
        const prompt = `Generate metadata for a blog post titled "${title}" in the category "${category}".
        Include relevant tags, a brief excerpt, and estimated reading time.
        Format as JSON:
        {
            "tags": ["tag1", "tag2", "tag3"],
            "excerpt": "Brief description",
            "readingTime": number
        }`;

        const response = await fetch(`${API_ENDPOINTS.GEMINI}?key=${API_KEYS.GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }],
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 1024,
                }
            })
        });

        if (!response.ok) {
            throw new Error('Failed to generate metadata');
        }

        const data = await response.json();
        const generatedText = data.candidates[0].content.parts[0].text;
        const metadata = JSON.parse(generatedText);
        return metadata;

    } catch (error) {
        console.error('Error generating metadata:', error);
        return null;
    }
}

async function generateSEOContent(topic, category) {
    if (!topic || !category) {
        console.error('Missing required parameters:', { topic, category });
        return generateMockContent(topic || 'Unknown Topic', category || 'General');
    }

    // Get current and next day dates
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    
    const formatDate = (date) => {
        return date.toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    // Get upcoming tax deadlines
    const getUpcomingDeadlines = () => {
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();
        const deadlines = [
            { date: '7', description: 'TDS/TCS deposit for the previous month' },
            { date: '10', description: 'GSTR-7/GSTR-8 filing for the previous month' },
            { date: '11', description: 'GSTR-1 filing for the previous month (turnover > 5 crores)' },
            { date: '13', description: 'GSTR-6 filing for the previous month' },
            { date: '15', description: 'PF/ESI deposit for the previous month' },
            { date: '20', description: 'GSTR-3B filing for the previous month' },
            { date: '25', description: 'GST Provisional ITC' },
            { date: '30/31', description: 'Income Tax Return filing (as applicable)' }
        ];

        return deadlines.filter(d => {
            const deadlineDay = parseInt(d.date);
            return isNaN(deadlineDay) || deadlineDay > today.getDate();
        });
    };

    try {
        const prompt = `Generate a comprehensive, SEO-optimized blog post about "${topic}" in the context of ${category} for an Indian tax and business consulting firm.

Current Date: ${formatDate(today)}
Next Day: ${formatDate(tomorrow)}
Upcoming Deadlines: ${JSON.stringify(getUpcomingDeadlines())}

The content should follow these guidelines:
1. Include relevant keywords naturally throughout the text
2. Use proper heading hierarchy (H1, H2, H3)
3. Include statistics and data when relevant
4. Focus on Indian tax laws and regulations
5. Include actionable insights and practical advice
6. Target length: 1500-2000 words
7. Include meta description and focus keywords
8. Include upcoming deadlines and future implications
9. Add preparation steps for the next day
10. Mention any upcoming changes or requirements

Format the response as a JSON with the following structure:
{
    "seo": {
        "title": "SEO-optimized title (max 60 chars)",
        "metaDescription": "Compelling meta description (max 155 chars)",
        "focusKeywords": ["keyword1", "keyword2", "keyword3"],
        "canonicalUrl": "suggested-url-slug"
    },
    "content": {
        "title": "Article title",
        "introduction": "Engaging introduction paragraph",
        "sections": [
            {
                "title": "Section title",
                "headingLevel": 2,
                "content": ["Paragraph 1", "Paragraph 2"]
            }
        ],
        "conclusion": "Concluding paragraph with call to action",
        "faqs": [
            {
                "question": "Frequently asked question",
                "answer": "Detailed answer"
            }
        ],
        "upcomingDeadlines": [],
        "nextDayPreparation": "Steps to prepare for tomorrow",
        "futureImplications": "Future changes and impacts"
    },
    "structuredData": {
        "articleType": "TaxArticle/BlogPosting",
        "keywords": ["keyword1", "keyword2"],
        "category": "category name",
        "industry": "relevant industry",
        "datePublished": "current date",
        "dateModified": "current date",
        "dateNextUpdate": "next day date"
    }
}`;

        const response = await fetch(`${API_ENDPOINTS.GEMINI}?key=${API_KEYS.GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }],
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 2048,
                }
            })
        });

        if (!response.ok) {
            console.error('API Response not OK:', await response.text());
            throw new Error('Failed to generate content');
        }

        const data = await response.json();
        console.log('Gemini API Response:', data); // Debug log

        try {
            let content;
            if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
                content = JSON.parse(data.candidates[0].content.parts[0].text);
            } else {
                throw new Error('Invalid API response structure');
            }

            // Validate and enhance the content structure
            if (!content?.seo || !content?.content || !content?.structuredData) {
                throw new Error('Invalid content structure');
            }

            // Add upcoming deadlines if not present
            if (!content.content.upcomingDeadlines) {
                content.content.upcomingDeadlines = getUpcomingDeadlines();
            }

            // Ensure all required fields exist with default values
            const validatedContent = {
                seo: {
                    title: content.seo.title || `${topic} - Guide`,
                    metaDescription: content.seo.metaDescription || `Learn about ${topic} in the context of ${category}.`,
                    focusKeywords: Array.isArray(content.seo.focusKeywords) ? content.seo.focusKeywords : [topic, category],
                    canonicalUrl: content.seo.canonicalUrl || generateSlug(topic)
                },
                content: {
                    title: content.content.title || `${topic}: A Comprehensive Guide`,
                    introduction: content.content.introduction || `A comprehensive guide about ${topic} in the context of ${category}.`,
                    sections: Array.isArray(content.content.sections) ? content.content.sections : [],
                    conclusion: content.content.conclusion || `Summary of key points about ${topic}.`,
                    faqs: Array.isArray(content.content.faqs) ? content.content.faqs : [],
                    upcomingDeadlines: content.content.upcomingDeadlines || getUpcomingDeadlines(),
                    nextDayPreparation: content.content.nextDayPreparation || `Preparation steps for ${formatDate(tomorrow)}`,
                    futureImplications: content.content.futureImplications || 'Future changes and impacts to consider'
                },
                structuredData: {
                    articleType: content.structuredData.articleType || 'BlogPosting',
                    keywords: Array.isArray(content.structuredData.keywords) ? content.structuredData.keywords : [topic, category],
                    category: content.structuredData.category || category,
                    industry: content.structuredData.industry || 'Tax and Business Consulting',
                    datePublished: formatDate(today),
                    dateModified: formatDate(today),
                    dateNextUpdate: formatDate(tomorrow)
                }
            };

            return validatedContent;
        } catch (error) {
            console.error('Error parsing AI response:', error);
            return generateMockContent(topic, category);
        }

    } catch (error) {
        console.error('Error generating content:', error);
        return generateMockContent(topic, category);
    }
}

function generateMockContent(topic, category) {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    
    const formatDate = (date) => {
        return date.toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    const getUpcomingDeadlines = () => {
        const deadlines = [
            { date: '7', description: 'TDS/TCS deposit for the previous month' },
            { date: '10', description: 'GSTR-7/GSTR-8 filing for the previous month' },
            { date: '11', description: 'GSTR-1 filing for the previous month (turnover > 5 crores)' },
            { date: '13', description: 'GSTR-6 filing for the previous month' },
            { date: '15', description: 'PF/ESI deposit for the previous month' },
            { date: '20', description: 'GSTR-3B filing for the previous month' },
            { date: '25', description: 'GST Provisional ITC' },
            { date: '30/31', description: 'Income Tax Return filing (as applicable)' }
        ];

        return deadlines.filter(d => {
            const deadlineDay = parseInt(d.date);
            return isNaN(deadlineDay) || deadlineDay > today.getDate();
        });
    };

    const mockContent = {
        seo: {
            title: `${topic} - Comprehensive Guide for Indian Businesses`,
            metaDescription: `Learn about ${topic} in the context of ${category}. Expert insights and practical advice for Indian businesses.`,
            focusKeywords: [topic, category, 'tax', 'business', 'India', 'compliance'],
            canonicalUrl: topic.toLowerCase().replace(/[^a-z0-9]+/g, '-')
        },
        content: {
            title: `${topic}: A Comprehensive Guide for Indian Businesses`,
            introduction: `In today's rapidly evolving business landscape, ${topic} plays a crucial role in organizational success. This comprehensive guide explores key aspects of ${topic} in the context of ${category}, providing valuable insights for businesses and professionals. Understanding these elements is essential for maintaining compliance and achieving strategic objectives in the current economic environment.`,
            sections: [
                {
                    title: 'Understanding the Basics',
                    headingLevel: 2,
                    content: [
                        `${topic} forms a fundamental aspect of ${category} that every business needs to understand and implement effectively. The regulatory framework in India has specific requirements that organizations must adhere to.`,
                        'Let\'s explore the key components and their significance in the Indian business context.'
                    ]
                },
                {
                    title: 'Current Updates and Changes',
                    headingLevel: 2,
                    content: [
                        `As of ${formatDate(today)}, there have been several important developments in ${topic} that businesses need to be aware of.`,
                        'Stay compliant with the latest regulatory changes and updates in the industry.'
                    ]
                },
                {
                    title: 'Preparing for Tomorrow',
                    headingLevel: 2,
                    content: [
                        `Looking ahead to ${formatDate(tomorrow)}, businesses should prepare for upcoming changes and requirements.`,
                        'Take proactive steps to ensure compliance and optimize your tax position.'
                    ]
                }
            ],
            conclusion: `Stay ahead of the curve by keeping up with the latest developments in ${topic}. Regular updates and professional guidance can help ensure compliance and optimize your tax position.`,
            faqs: [
                {
                    question: `What are the key compliance requirements for ${topic}?`,
                    answer: 'The key compliance requirements include regular filing of returns, maintaining proper documentation, and adhering to deadlines set by regulatory authorities.'
                },
                {
                    question: 'What are the upcoming changes to be aware of?',
                    answer: `As we approach ${formatDate(tomorrow)}, businesses should prepare for new filing requirements and regulatory changes. Stay in touch with your tax consultant for specific guidance.`
                }
            ],
            upcomingDeadlines: getUpcomingDeadlines(),
            nextDayPreparation: `Key preparation steps for ${formatDate(tomorrow)}:
1. Review pending compliance requirements
2. Gather necessary documentation
3. Schedule important filings
4. Update your tax calendar`,
            futureImplications: `Future changes and impacts to consider:
1. Upcoming regulatory changes
2. New compliance requirements
3. Technology adoption needs
4. Process optimization opportunities`
        },
        structuredData: {
            articleType: 'TaxArticle/BlogPosting',
            keywords: [topic, category, 'tax compliance', 'Indian taxation', 'business advisory'],
            category: category,
            industry: 'Tax and Business Consulting',
            datePublished: formatDate(today),
            dateModified: formatDate(today),
            dateNextUpdate: formatDate(tomorrow)
        }
    };

    return mockContent;
}

function generateSlug(title) {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
}

async function generateSocialContent(title, excerpt) {
    try {
        const prompt = `Generate social media content for a blog post titled "${title}" with excerpt: "${excerpt}".
        Create engaging posts for LinkedIn, Twitter, and Facebook.
        Format as JSON:
        {
            "linkedin": {
                "text": "Professional post text",
                "hashtags": ["tag1", "tag2"]
            },
            "twitter": {
                "text": "Engaging tweet text (max 280 chars)",
                "hashtags": ["tag1", "tag2"]
            },
            "facebook": {
                "text": "Engaging Facebook post",
                "hashtags": ["tag1", "tag2"]
            }
        }`;

        const response = await fetch(`${API_ENDPOINTS.GEMINI}?key=${API_KEYS.GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }],
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 1024,
                }
            })
        });

        if (!response.ok) {
            throw new Error('Failed to generate social content');
        }

        const data = await response.json();
        try {
            const socialContent = JSON.parse(data.candidates[0].content.parts[0].text);
            return socialContent;
        } catch (error) {
            console.error('Error parsing social content:', error);
            return generateMockSocialContent(title, excerpt);
        }

    } catch (error) {
        console.error('Error generating social content:', error);
        return generateMockSocialContent(title, excerpt);
    }
}

function generateMockSocialContent(title, excerpt) {
    return {
        linkedin: {
            text: `📢 New Article: ${title}\n\n${excerpt}\n\nRead more on our website for detailed insights and expert analysis. #TaxConsulting #BusinessAdvisory`,
            hashtags: ['tax', 'business', 'India', 'consulting']
        },
        twitter: {
            text: `📚 ${title}\n\n${excerpt.substring(0, 180)}... \n\nClick to learn more! #TaxAdvice #BusinessGrowth`,
            hashtags: ['tax', 'business']
        },
        facebook: {
            text: `📋 ${title}\n\n${excerpt}\n\nVisit our website for the complete guide and expert insights! #BusinessConsulting #TaxAdvisory`,
            hashtags: ['tax', 'business', 'India', 'consulting']
        }
    };
}

export { generateContent, generateBlogMeta, generateSEOContent, generateSocialContent }; 