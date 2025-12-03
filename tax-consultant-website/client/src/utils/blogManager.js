import { generateDetailedContent } from './contentGenerator';
import { v4 as uuidv4 } from 'uuid';

// Cache configuration
const CACHE_KEY = 'blog_posts_cache';
const UPDATE_INTERVAL = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
const POSTS_PER_UPDATE = 10;

// Blog categories with their specific topics and title templates
const BLOG_CATEGORIES = {
  'gst-updates': {
    topics: [
      'E-invoicing System',
      'Input Tax Credit',
      'GST Returns Filing',
      'GST Compliance',
      'GST Audit',
      'GST Refunds',
      'Place of Supply',
      'GST Registration'
    ],
    titleTemplates: [
      "Complete Guide to {topic} under GST Regime",
      "Latest Updates on {topic} in GST Framework",
      "{topic} GST Compliance Requirements: A Detailed Analysis",
      "Understanding {topic} in GST: A Comprehensive Guide",
      "GST Impact on {topic}: What Businesses Need to Know"
    ]
  },
  'tax-planning': {
    topics: [
      'Personal Tax Planning',
      'Corporate Tax Strategy',
      'International Taxation',
      'Tax Saving Investments',
      'Capital Gains Tax',
      'Estate Planning',
      'Retirement Planning',
      'Real Estate Taxation'
    ],
    titleTemplates: [
      "Strategic {topic}: Expert Guidelines for {year}",
      "{topic}: Maximizing Benefits and Minimizing Risks",
      "Complete Guide to {topic} for Indian Businesses",
      "Mastering {topic}: Key Strategies and Best Practices",
      "{topic}: A Comprehensive Approach for Success"
    ]
  },
  'business-advisory': {
    topics: [
      'Business Strategy',
      'Digital Transformation',
      'Risk Management',
      'Market Entry',
      'Business Valuation',
      'Succession Planning',
      'Performance Optimization',
      'Growth Strategy'
    ],
    titleTemplates: [
      "Expert Guide to {topic} for Business Growth",
      "Implementing Effective {topic} Strategies",
      "{topic}: Best Practices for Business Success",
      "Optimizing Business Through {topic}",
      "{topic} Solutions for Modern Businesses"
    ]
  },
  'legal-insights': {
    topics: [
      'Corporate Law',
      'Tax Laws',
      'Company Compliance',
      'Legal Updates',
      'Regulatory Changes',
      'Contract Management',
      'Dispute Resolution',
      'Legal Risk Management'
    ],
    titleTemplates: [
      "Legal Framework for {topic}: Complete Analysis",
      "Understanding {topic} Regulations {year}",
      "{topic} Compliance Guide for Businesses",
      "Legal Updates on {topic}: Impact Analysis",
      "Navigating {topic} Legal Requirements"
    ]
  }
};

// Track generated content to ensure uniqueness
const contentTracker = new Set();

// Get the next update timestamp (midnight of next day)
const getNextUpdateTimestamp = () => {
  const now = new Date();
  const nextDay = new Date(now);
  nextDay.setDate(nextDay.getDate() + 1);
  nextDay.setHours(0, 0, 0, 0);
  return nextDay.getTime();
};

// Generate a unique combination of category and topic
const getUniqueTopicCombination = () => {
  const categories = Object.keys(BLOG_CATEGORIES);
  const attempts = 0;
  const maxAttempts = 50;

  while (attempts < maxAttempts) {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const topics = BLOG_CATEGORIES[category].topics;
    const topic = topics[Math.floor(Math.random() * topics.length)];
    const combination = `${category}:${topic}`;

    if (!contentTracker.has(combination)) {
      contentTracker.add(combination);
      return { category, topic };
    }
  }

  // If we can't find a unique combination, clear tracker and try again
  contentTracker.clear();
  const category = categories[Math.floor(Math.random() * categories.length)];
  const topics = BLOG_CATEGORIES[category].topics;
  const topic = topics[Math.floor(Math.random() * topics.length)];
  contentTracker.add(`${category}:${topic}`);
  return { category, topic };
};

// Generate a title for a blog post
const generateTitle = (category, topic) => {
  const templates = BLOG_CATEGORIES[category].titleTemplates;
  const template = templates[Math.floor(Math.random() * templates.length)];
  return template
    .replace('{topic}', topic)
    .replace('{year}', new Date().getFullYear());
};

// Generate new blog posts
const generateBlogPosts = async () => {
  try {
    // Get existing posts from cache
    const cachedData = localStorage.getItem(CACHE_KEY);
    let existingPosts = [];
    if (cachedData) {
      const { posts } = JSON.parse(cachedData);
      existingPosts = posts;
    }

    // Generate new posts
    const newPosts = [];
    for (let i = 0; i < POSTS_PER_UPDATE; i++) {
      const { category, topic } = getUniqueTopicCombination();
      const content = generateDetailedContent(topic, category);
      const title = generateTitle(category, topic);

      newPosts.push({
        id: uuidv4(),
        title,
        slug: `${topic.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${new Date().getFullYear()}`,
        category,
        topic,
        date: new Date().toISOString(),
        author: 'Tax Expert Team',
        content,
        readingTime: Math.ceil(content.sections.reduce((acc, section) => 
          acc + section.content.split(' ').length, 0) / 200), // 200 words per minute
        tags: [topic, category, ...BLOG_CATEGORIES[category].topics.slice(0, 3)],
        lastUpdated: new Date().toISOString()
      });
    }

    // Combine with existing posts and sort by date
    const allPosts = [...existingPosts, ...newPosts]
      .sort((a, b) => new Date(b.date) - new Date(a.date));

    // Cache the updated posts
    localStorage.setItem(CACHE_KEY, JSON.stringify({
      posts: allPosts,
      nextUpdate: getNextUpdateTimestamp(),
      lastUpdate: Date.now()
    }));

    return allPosts;
  } catch (error) {
    console.error('Error generating blog posts:', error);
    throw error;
  }
};

// Get blog posts (from cache or generate new ones)
export const getBlogPosts = async () => {
  try {
    const cachedData = localStorage.getItem(CACHE_KEY);
    
    if (cachedData) {
      const { posts, nextUpdate } = JSON.parse(cachedData);
      
      // Return cached posts if not expired
      if (Date.now() < nextUpdate) {
        return posts;
      }
    }

    // Generate new posts if cache expired or doesn't exist
    return await generateBlogPosts();
  } catch (error) {
    console.error('Error getting blog posts:', error);
    throw error;
  }
};

// Setup auto-update mechanism
export const setupAutoUpdate = () => {
  // Initial check
  getBlogPosts();

  // Check for updates every hour
  setInterval(async () => {
    try {
      const cachedData = localStorage.getItem(CACHE_KEY);
      if (cachedData) {
        const { nextUpdate } = JSON.parse(cachedData);
        if (Date.now() >= nextUpdate) {
          await generateBlogPosts();
        }
      } else {
        await generateBlogPosts();
      }
    } catch (error) {
      console.error('Error in auto-update:', error);
    }
  }, 60 * 60 * 1000); // Check every hour
};

// Force update blog posts
export const forceUpdate = async () => {
  localStorage.removeItem(CACHE_KEY);
  contentTracker.clear();
  return await generateBlogPosts();
};

export const getTimeUntilNextUpdate = () => {
  const cachedData = localStorage.getItem(CACHE_KEY);
  if (!cachedData) return { hours: 24, minutes: 0, seconds: 0 };

  const { nextUpdate } = JSON.parse(cachedData);
  const now = Date.now();
  const timeUntilNextUpdate = Math.max(0, nextUpdate - now);

  const hours = Math.floor(timeUntilNextUpdate / (60 * 60 * 1000));
  const minutes = Math.floor((timeUntilNextUpdate % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((timeUntilNextUpdate % (60 * 1000)) / 1000);

  return { hours, minutes, seconds };
};

export const getNextUpdateTime = () => {
  const cachedData = localStorage.getItem(CACHE_KEY);
  if (!cachedData) return new Date();

  const { timestamp } = JSON.parse(cachedData);
  return new Date(timestamp + UPDATE_INTERVAL);
}; 