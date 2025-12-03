import { getTopicImage } from '../utils/imageUtils';
import { generateDetailedContent, estimateWordCount } from '../utils/contentGenerator';

export const blogCategories = [
  {
    id: "gst-updates",
    name: "GST Updates",
    description: "Latest updates and changes in GST regulations",
    topics: [
      "E-invoicing",
      "Input Tax Credit",
      "GST Returns",
      "Place of Supply",
      "Reverse Charge",
      "Export-Import",
      "Refunds",
      "Registration"
    ]
  },
  {
    id: "tax-planning",
    name: "Tax Planning",
    description: "Strategic tax planning advice for individuals and businesses",
    topics: [
      "Income Tax",
      "Tax Saving",
      "Deductions",
      "Capital Gains",
      "International Taxation",
      "Corporate Tax",
      "Personal Tax",
      "Real Estate Tax"
    ]
  },
  {
    id: "business-advisory",
    name: "Business Advisory",
    description: "Expert business consulting and advisory services",
    topics: [
      "Business Strategy",
      "Financial Planning",
      "Risk Management",
      "Growth Strategy",
      "Market Entry",
      "Business Valuation",
      "Mergers & Acquisitions",
      "Restructuring"
    ]
  },
  {
    id: "legal-insights",
    name: "Legal Insights",
    description: "Analysis of legal developments affecting businesses",
    topics: [
      "Company Law",
      "Contract Law",
      "Labor Laws",
      "Intellectual Property",
      "Dispute Resolution",
      "Regulatory Compliance",
      "Legal Updates",
      "Case Analysis"
    ]
  },
  {
    id: "industry-news",
    name: "Industry News",
    description: "Latest developments across various industries",
    topics: [
      "Manufacturing",
      "IT & Software",
      "Real Estate",
      "Healthcare",
      "E-commerce",
      "Financial Services",
      "Retail",
      "Startups"
    ]
  },
  {
    id: "corporate-compliance",
    name: "Corporate Compliance",
    description: "Updates on corporate compliance requirements",
    topics: [
      "ROC Compliance",
      "SEBI Regulations",
      "Directors' Responsibilities",
      "Annual Compliance",
      "Corporate Governance",
      "Statutory Audits",
      "Due Diligence",
      "Regulatory Filing"
    ]
  },
  {
    id: "international-business",
    name: "International Business",
    description: "Insights on international trade and business",
    topics: [
      "Cross-border Trade",
      "FEMA Compliance",
      "Transfer Pricing",
      "International Tax",
      "Foreign Investment",
      "Trade Agreements",
      "Export Compliance",
      "Global Markets"
    ]
  }
];

const titleTemplates = {
  "gst-updates": [
    "Complete Guide to {topic} under GST Regime {year}",
    "Latest Updates on {topic} in GST Framework {year}",
    "{topic} GST Compliance Requirements {year}",
    "Understanding {topic} in GST: A Comprehensive Guide",
    "GST Impact on {topic}: What Businesses Need to Know"
  ],
  "tax-planning": [
    "Strategic Tax Planning for {topic} {year}",
    "Tax Saving Tips for {topic} {year}",
    "Tax Benefits Available for {topic} {year}",
    "Maximizing Tax Efficiency in {topic}",
    "{topic} Tax Planning: Expert Guidelines"
  ],
  "business-advisory": [
    "Expert Guide to {topic} for Business Growth",
    "Implementing Effective {topic} Strategies",
    "{topic} Best Practices for Business Success",
    "Optimizing Business Through {topic}",
    "{topic} Solutions for Modern Businesses"
  ],
  "legal-insights": [
    "Legal Framework for {topic}: Complete Analysis",
    "Understanding {topic} Regulations {year}",
    "{topic} Compliance Guide for Businesses",
    "Legal Updates on {topic}: Impact Analysis",
    "Navigating {topic} Legal Requirements"
  ],
  "industry-news": [
    "{topic} Industry Trends and Analysis {year}",
    "Latest Developments in {topic} Sector",
    "{topic} Market Outlook and Opportunities",
    "Emerging Trends in {topic} Industry",
    "{topic} Sector: Challenges and Solutions"
  ],
  "corporate-compliance": [
    "{topic} Compliance Guidelines {year}",
    "Essential {topic} Requirements for Businesses",
    "Managing {topic} Effectively",
    "{topic} Compliance: Best Practices",
    "Updated {topic} Regulations {year}"
  ],
  "international-business": [
    "Global {topic} Strategies for Businesses",
    "International {topic} Guidelines {year}",
    "{topic} in Global Business Context",
    "Cross-border {topic} Management",
    "Navigating International {topic} Requirements"
  ]
};

const excerptTemplates = {
  "gst-updates": [
    "Stay updated with the latest developments in {topic} under GST. This comprehensive guide covers recent changes, compliance requirements, and expert insights.",
    "Understanding {topic} is crucial for GST compliance. Learn about recent updates, practical implications, and compliance strategies.",
    "Navigate the complexities of {topic} in GST with our expert guide. Get insights on recent changes and compliance requirements."
  ],
  "tax-planning": [
    "Optimize your tax planning with our expert guide on {topic}. Learn about available benefits, strategies, and compliance requirements.",
    "Discover effective tax planning strategies for {topic}. Our experts provide insights on maximizing benefits while ensuring compliance.",
    "Master the art of tax planning for {topic} with our comprehensive guide. Learn about latest regulations and optimization strategies."
  ],
  "business-advisory": [
    "Enhance your business performance with expert insights on {topic}. Learn about proven strategies, best practices, and implementation approaches.",
    "Transform your business operations with our comprehensive guide to {topic}. Discover key strategies and practical solutions.",
    "Stay ahead of the competition with our expert analysis of {topic}. Learn about emerging trends and effective implementation methods."
  ],
  "legal-insights": [
    "Stay compliant with the latest legal developments in {topic}. Our expert analysis covers key changes and compliance requirements.",
    "Navigate the legal complexities of {topic} with our comprehensive guide. Learn about recent updates and compliance strategies.",
    "Understand the legal framework of {topic} with our detailed analysis. Get expert insights on compliance and risk management."
  ],
  "industry-news": [
    "Stay informed about the latest developments in {topic}. Our analysis covers industry trends, challenges, and opportunities.",
    "Get comprehensive insights into the {topic} sector. Learn about market dynamics, emerging trends, and future outlook.",
    "Understand the evolving landscape of {topic} with our expert analysis. Discover key industry developments and strategic implications."
  ],
  "corporate-compliance": [
    "Ensure compliance excellence in {topic} with our comprehensive guide. Learn about regulatory requirements and best practices.",
    "Master the complexities of {topic} compliance with our expert insights. Stay updated with the latest regulatory changes.",
    "Navigate corporate compliance in {topic} effectively. Our guide covers key requirements and implementation strategies."
  ],
  "international-business": [
    "Expand your global business knowledge about {topic}. Learn about international best practices and cross-border strategies.",
    "Navigate the complexities of international {topic} with our comprehensive guide. Get insights on global business practices.",
    "Master global business strategies for {topic}. Our expert analysis covers international regulations and best practices."
  ]
};

export const generateBlogPosts = () => {
  const posts = [];
  const currentYear = new Date().getFullYear();

  // Generate 1000 blog posts
  for (let i = 1; i <= 1000; i++) {
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * 365)); // Random date within last year

    const category = blogCategories[Math.floor(Math.random() * blogCategories.length)];
    const topic = category.topics[Math.floor(Math.random() * category.topics.length)];
    
    const templates = titleTemplates[category.id] || titleTemplates["gst-updates"];
    const titleTemplate = templates[Math.floor(Math.random() * templates.length)];
    
    const title = titleTemplate
      .replace('{topic}', topic)
      .replace('{year}', currentYear);

    // Get excerpt template for the category or fallback to gst-updates
    const categoryExcerpts = excerptTemplates[category.id] || excerptTemplates["gst-updates"];
    const excerptTemplate = categoryExcerpts[Math.floor(Math.random() * categoryExcerpts.length)];
    const excerpt = excerptTemplate.replace(/{topic}/g, topic.toLowerCase());

    // Generate detailed content
    const detailedContent = generateDetailedContent(topic, category.id);

    posts.push({
      id: i,
      title: title,
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      category: category.name,
      categoryId: category.id,
      date: date.toISOString(),
      author: "Tax Expert Team",
      excerpt: excerpt,
      image: getTopicImage(category.id, topic),
      tags: [topic, category.name, ...category.topics.slice(0, 3)],
      detailedContent: detailedContent,
      readingTime: Math.ceil(estimateWordCount(detailedContent) / 200) // Assuming 200 words per minute
    });
  }

  return posts;
}; 