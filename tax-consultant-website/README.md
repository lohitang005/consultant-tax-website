# Rastogi & Associates - Tax Consultant Website

A modern, responsive website for Rastogi & Associates, a professional tax consultancy firm. Built with React and Material-UI, featuring AI-powered assistance and comprehensive tax services information.

## Features

- Modern, responsive design
- AI Tax Assistant for instant queries
- Comprehensive service information
- Interactive tax calculator
- Blog section with industry insights
- Resource center with downloadable materials
- Contact forms and location information

## Tech Stack

- React.js
- Material-UI (MUI)
- React Router v6
- Node.js
- Express.js
- MongoDB

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB

### Installation

1. Clone the repository
```bash
git clone [repository-url]
cd tax-consultant-website
```

2. Install dependencies for client
```bash
cd client
npm install
```

3. Install dependencies for server
```bash
cd ../server
npm install
```

4. Create environment variables
Create `.env` files in both client and server directories with necessary configurations.

5. Start the development servers

For client:
```bash
cd client
npm start
```

For server:
```bash
cd server
npm start
```

## Project Structure

```
tax-consultant-website/
├── client/                 # Frontend React application
│   ├── public/            # Static files
│   └── src/               # Source files
│       ├── components/    # Reusable components
│       ├── pages/         # Page components
│       ├── services/      # API services
│       └── utils/         # Utility functions
└── server/                # Backend Node.js/Express application
    ├── config/           # Configuration files
    ├── controllers/      # Route controllers
    ├── models/          # Database models
    └── routes/          # API routes
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Parth Rastogi - parth@rastogiassociates.com

## License

This project is proprietary and confidential. All rights reserved.
