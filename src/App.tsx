import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { CertificatesPage } from './pages/CertificatesPage';
import { BlogPage } from './pages/BlogPage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';
import { HirePage } from './pages/HirePage';
import { ROUTES } from './config/routes';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path={ROUTES.PUBLIC.ABOUT} element={<AboutPage />} />
              <Route path={ROUTES.PUBLIC.SERVICES} element={<ServicesPage />} />
              <Route path={ROUTES.PUBLIC.PORTFOLIO} element={<PortfolioPage />} />
              <Route path={ROUTES.PUBLIC.CERTIFICATES} element={<CertificatesPage />} />
              <Route path={ROUTES.PUBLIC.BLOG} element={<BlogPage />} />
              <Route path={ROUTES.PUBLIC.PRICING} element={<PricingPage />} />
              <Route path={ROUTES.PUBLIC.CONTACT} element={<ContactPage />} />
              <Route path={ROUTES.PUBLIC.HIRE} element={<HirePage />} />
              {/* Catch-all route redirecting to Home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
