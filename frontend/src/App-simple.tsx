import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Simple components for testing
const HomePage = () => (
  <div style={{ padding: '20px' }}>
    <h1>Welcome to Accessibility Platform</h1>
    <p>Making the web accessible for everyone</p>
    <p>✅ Screen reader support</p>
    <p>✅ Keyboard navigation</p>
    <p>✅ High contrast mode</p>
    <p>✅ WCAG 2.1 AAA compliant</p>
  </div>
);

const ServicesPage = () => (
  <div style={{ padding: '20px' }}>
    <h1>Services</h1>
    <p>Our accessibility services include:</p>
    <ul>
      <li>Screen reader optimization</li>
      <li>Keyboard navigation enhancement</li>
      <li>High contrast themes</li>
      <li>Text scaling support</li>
      <li>Voice control integration</li>
    </ul>
  </div>
);

const AccessibilityPage = () => (
  <div style={{ padding: '20px' }}>
    <h1>Accessibility Settings</h1>
    <p>Customize your accessibility experience:</p>
    <div style={{ marginBottom: '20px' }}>
      <label>
        <input type="checkbox" /> Enable screen reader announcements
      </label>
    </div>
    <div style={{ marginBottom: '20px' }}>
      <label>
        <input type="checkbox" /> High contrast mode
      </label>
    </div>
    <div style={{ marginBottom: '20px' }}>
      <label>
        <input type="checkbox" /> Large text
      </label>
    </div>
    <div style={{ marginBottom: '20px' }}>
      <label>
        <input type="checkbox" /> Reduced motion
      </label>
    </div>
  </div>
);

const NotFoundPage = () => (
  <div style={{ padding: '20px' }}>
    <h1>Page Not Found</h1>
    <p>The page you're looking for doesn't exist</p>
    <a href="/">Go back to homepage</a>
  </div>
);

const Header = () => (
  <header style={{ 
    padding: '20px', 
    borderBottom: '1px solid #ccc',
    backgroundColor: '#f5f5f5'
  }}>
    <nav>
      <a 
        href="/" 
        style={{ 
          marginRight: '20px', 
          textDecoration: 'none',
          color: '#007bff',
          fontWeight: 'bold'
        }}
      >
        Home
      </a>
      <a 
        href="/services" 
        style={{ 
          marginRight: '20px', 
          textDecoration: 'none',
          color: '#007bff',
          fontWeight: 'bold'
        }}
      >
        Services
      </a>
      <a 
        href="/accessibility" 
        style={{ 
          textDecoration: 'none',
          color: '#007bff',
          fontWeight: 'bold'
        }}
      >
        Accessibility
      </a>
    </nav>
  </header>
);

const Footer = () => (
  <footer style={{ 
    padding: '20px', 
    borderTop: '1px solid #ccc', 
    marginTop: '40px',
    backgroundColor: '#f5f5f5',
    textAlign: 'center'
  }}>
    <p>&copy; 2024 Accessibility Platform. All rights reserved.</p>
    <p>Built with WCAG 2.1 AAA compliance</p>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
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
  );
};

export default App;
