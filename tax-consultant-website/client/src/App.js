import React from 'react';
import { 
  Routes, 
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { HelmetProvider } from 'react-helmet-async';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import AIChatBubble from './components/AIChatBubble';
import SEO from './components/SEO';
import ScrollToTop from './components/ScrollToTop';
import FloatingContactButtons from './components/ContactButtons';

// Page Components
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import FAQ from './pages/FAQ';
import Resources from './pages/Resources';
import TaxCalculator from './components/TaxCalculator';
import TestGemini from './components/TestGemini';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Sitemap from './pages/Sitemap';
// Industry Pages
import Startups from './pages/industries/Startups';
import D2C from './pages/industries/D2C';
import SaaS from './pages/industries/SaaS';
import Manufacturers from './pages/industries/Manufacturers';

// Service Pages
import Services from './pages/Services';
import CorporateServices from './pages/services/CorporateServices';
import TaxAdvisory from './pages/services/TaxAdvisory';
import FinancialAdvisory from './pages/services/FinancialAdvisory';
import BusinessConsulting from './pages/services/BusinessConsulting';
import BookKeepingServices from './pages/services/BookKeepingServices';
import LitigationServices from './pages/services/LitigationServices';
import InternationalTaxServices from './pages/services/InternationalTaxServices';
import PlanningServices from './pages/services/PlanningServices';
import IncomeTaxServices from './pages/services/IncomeTaxServices';
import IndirectTaxServices from './pages/services/IndirectTaxServices';
import OtherBusinessServices from './pages/services/OtherBusinessServices';

const Layout = () => {
  return (
    <>
      <SEO />
      <ScrollToTop />
      <Navbar />
      <Outlet />
      {/* AIChatBubble removed per request */}
      <FloatingContactButtons />
      <Footer />
    </>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "blog", element: <Blog /> },
        { path: "blog/:topic", element: <BlogPost /> },
        { path: "faq", element: <FAQ /> },
        { path: "resources", element: <Resources /> },
        { path: "calculator", element: <TaxCalculator /> },
        { path: "test-gemini", element: <TestGemini /> },
        { path: "privacy-policy", element: <PrivacyPolicy /> },
        { path: "terms-of-service", element: <TermsOfService /> },
        { path: "sitemap", element: <Sitemap /> },
        { path: "industries/startups", element: <Startups /> },
        { path: "industries/d2c", element: <D2C /> },
        { path: "industries/saas", element: <SaaS /> },
        { path: "industries/manufacturers", element: <Manufacturers /> },
        { path: "services", element: <Services /> },
        { path: "services/corporate-services", element: <CorporateServices /> },
        { path: "services/tax-advisory", element: <TaxAdvisory /> },
        { path: "services/financial-advisory", element: <FinancialAdvisory /> },
        { path: "services/business-consulting", element: <BusinessConsulting /> },
        { path: "services/bookkeeping-services", element: <BookKeepingServices /> },
        { path: "services/litigation", element: <LitigationServices /> },
        { path: "services/international-tax", element: <InternationalTaxServices /> },
        { path: "services/planning", element: <PlanningServices /> },
        { path: "services/income-tax", element: <IncomeTaxServices /> },
        { path: "services/indirect-tax", element: <IndirectTaxServices /> },
        { path: "services/other-business", element: <OtherBusinessServices /> }
      ]
    }
  ], {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }
  });

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
