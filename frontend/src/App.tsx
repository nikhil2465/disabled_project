import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ScreenReaderProvider } from './contexts/ScreenReaderContext';
import { KeyboardNavigationProvider } from './contexts/KeyboardNavigationContext';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

// Simple components for testing
const HomePage = () => (
  <div>
    <h1>Welcome to Accessibility Platform</h1>
    <p>Making the web accessible for everyone</p>
  </div>
);

const ServicesPage = () => (
  <div>
    <h1>Services</h1>
    <p>Our accessibility services</p>
  </div>
);

const AccessibilityPage = () => (
  <div>
    <h1>Accessibility Settings</h1>
    <p>Customize your accessibility experience</p>
  </div>
);

const NotFoundPage = () => (
  <div>
    <h1>Page Not Found</h1>
    <p>The page you're looking for doesn't exist</p>
  </div>
);

const Header = () => (
  <header style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
    <nav>
      <a href="/" style={{ marginRight: '20px' }}>Home</a>
      <a href="/services" style={{ marginRight: '20px' }}>Services</a>
      <a href="/accessibility">Accessibility</a>
    </nav>
  </header>
);

const Footer = () => (
  <footer style={{ padding: '20px', borderTop: '1px solid #ccc', marginTop: '40px' }}>
    <p>&copy; 2024 Accessibility Platform. All rights reserved.</p>
  </footer>
);

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <KeyboardNavigationProvider>
        <ScreenReaderProvider>
          <Router>
            <GlobalStyle />
            <div className="app">
              <Header />
              <main id="main-content" role="main" tabIndex={-1}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/accessibility" element={<AccessibilityPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </Router>
        </ScreenReaderProvider>
      </KeyboardNavigationProvider>
    </ThemeProvider>
  );
};

export default App;
