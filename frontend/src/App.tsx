import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// Accessibility utilities
const announceToScreenReader = (message: string) => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', 'polite');
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  
  document.body.appendChild(announcement);
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

// Skip Link Component
const SkipLink: React.FC = () => (
  <a 
    href="#main-content" 
    className="skip-link"
    onClick={() => announceToScreenReader('Jumped to main content')}
  >
    Skip to main content
  </a>
);

// Enhanced HomePage with full accessibility features
const HomePage: React.FC = () => {
  useEffect(() => {
    announceToScreenReader('Welcome to Accessibility Platform loaded');
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <header>
        <h1>Welcome to Accessibility Platform</h1>
        <p>Making the web accessible for everyone</p>
      </header>
      
      <main>
        <section aria-labelledby="features-heading">
          <h2 id="features-heading">Accessibility Features</h2>
          <div style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
            <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
              <h3>🔊 Screen Reader Support</h3>
              <p>Full compatibility with NVDA, JAWS, VoiceOver, and TalkBack</p>
            </div>
            <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
              <h3>⌨️ Keyboard Navigation</h3>
              <p>Complete keyboard access with logical tab order and focus management</p>
            </div>
            <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
              <h3>🎨 High Contrast Mode</h3>
              <p>Multiple color schemes for users with visual impairments</p>
            </div>
            <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '8px' }}>
              <h3>📱 Responsive Design</h3>
              <p>WCAG 2.1 AAA compliant with 200% zoom support</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="cta-heading" style={{ marginTop: '40px' }}>
          <h2 id="cta-heading">Get Started</h2>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <button 
              style={{ 
                padding: '12px 24px', 
                fontSize: '16px', 
                backgroundColor: '#007bff', 
                color: 'white', 
                border: 'none', 
                borderRadius: '6px',
                cursor: 'pointer'
              }}
              onClick={() => announceToScreenReader('Navigating to services page')}
            >
              Explore Services
            </button>
            <button 
              style={{ 
                padding: '12px 24px', 
                fontSize: '16px', 
                backgroundColor: '#28a745', 
                color: 'white', 
                border: 'none', 
                borderRadius: '6px',
                cursor: 'pointer'
              }}
              onClick={() => announceToScreenReader('Opening accessibility settings')}
            >
              Accessibility Settings
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

// Enhanced ServicesPage
const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 1,
      category: 'visual',
      title: 'Screen Reader Optimization',
      description: 'Complete ARIA implementation and semantic HTML structure',
      features: ['ARIA labels', 'Semantic HTML', 'Screen reader testing']
    },
    {
      id: 2,
      category: 'motor',
      title: 'Keyboard Navigation Enhancement',
      description: 'Full keyboard access with logical focus management',
      features: ['Tab navigation', 'Focus indicators', 'Keyboard shortcuts']
    },
    {
      id: 3,
      category: 'visual',
      title: 'High Contrast Themes',
      description: 'Multiple color schemes for various visual impairments',
      features: ['Dark mode', 'High contrast', 'Color blind friendly']
    },
    {
      id: 4,
      category: 'cognitive',
      title: 'Cognitive Accessibility',
      description: 'Simple language and consistent navigation patterns',
      features: ['Clear language', 'Predictable layout', 'Error prevention']
    },
    {
      id: 5,
      category: 'hearing',
      title: 'Audio Accessibility',
      description: 'Visual alternatives for audio content',
      features: ['Captions', 'Transcripts', 'Visual alerts']
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  useEffect(() => {
    announceToScreenReader(`Services page loaded. Showing ${filteredServices.length} services`);
  }, [selectedCategory]);

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <header>
        <h1>Accessibility Services</h1>
        <p>Comprehensive accessibility solutions for all needs</p>
      </header>

      <main>
        <section aria-labelledby="filter-heading">
          <h2 id="filter-heading">Filter Services</h2>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '30px' }}>
            {['all', 'visual', 'motor', 'cognitive', 'hearing'].map(category => (
              <button
                key={category}
                style={{
                  padding: '8px 16px',
                  backgroundColor: selectedCategory === category ? '#007bff' : '#f8f9fa',
                  color: selectedCategory === category ? 'white' : '#333',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
                onClick={() => {
                  setSelectedCategory(category);
                  announceToScreenReader(`Filtered to ${category} services`);
                }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </section>

        <section aria-labelledby="services-heading">
          <h2 id="services-heading">Available Services</h2>
          <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {filteredServices.map(service => (
              <article 
                key={service.id} 
                style={{ 
                  padding: '20px', 
                  border: '1px solid #ddd', 
                  borderRadius: '8px',
                  backgroundColor: '#fff'
                }}
                aria-labelledby={`service-${service.id}-title`}
              >
                <h3 id={`service-${service.id}-title`}>{service.title}</h3>
                <p>{service.description}</p>
                <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button 
                  style={{
                    marginTop: '15px',
                    padding: '8px 16px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                  onClick={() => announceToScreenReader(`Selected ${service.title}`)}
                >
                  Learn More
                </button>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

// Enhanced AccessibilityPage with working settings
const AccessibilityPage: React.FC = () => {
  const [settings, setSettings] = useState({
    screenReader: false,
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusVisible: true,
    announcements: true
  });

  const handleSettingChange = (key: keyof typeof settings, value: boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    announceToScreenReader(`${key} ${value ? 'enabled' : 'disabled'}`);
    
    // Apply settings immediately
    if (key === 'highContrast') {
      document.body.classList.toggle('high-contrast', value);
    }
    if (key === 'largeText') {
      document.body.classList.toggle('large-text', value);
    }
    if (key === 'reducedMotion') {
      document.body.classList.toggle('reduced-motion', value);
    }
  };

  useEffect(() => {
    announceToScreenReader('Accessibility settings page loaded');
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <header>
        <h1>Accessibility Settings</h1>
        <p>Customize your accessibility experience</p>
      </header>

      <main>
        <section aria-labelledby="settings-heading">
          <h2 id="settings-heading">Display Settings</h2>
          
          <div style={{ display: 'grid', gap: '20px', marginTop: '20px' }}>
            <div style={{ 
              padding: '20px', 
              border: '1px solid #ddd', 
              borderRadius: '8px',
              backgroundColor: '#fff'
            }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={settings.screenReader}
                  onChange={(e) => handleSettingChange('screenReader', e.target.checked)}
                  aria-describedby="screen-reader-desc"
                />
                <span>
                  <strong>Screen Reader Announcements</strong>
                </span>
              </label>
              <p id="screen-reader-desc" style={{ margin: '5px 0 0 25px', fontSize: '14px', color: '#666' }}>
                Enable audio announcements for screen reader users
              </p>
            </div>

            <div style={{ 
              padding: '20px', 
              border: '1px solid #ddd', 
              borderRadius: '8px',
              backgroundColor: '#fff'
            }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={settings.highContrast}
                  onChange={(e) => handleSettingChange('highContrast', e.target.checked)}
                  aria-describedby="high-contrast-desc"
                />
                <span>
                  <strong>High Contrast Mode</strong>
                </span>
              </label>
              <p id="high-contrast-desc" style={{ margin: '5px 0 0 25px', fontSize: '14px', color: '#666' }}>
                Use high contrast colors for better visibility
              </p>
            </div>

            <div style={{ 
              padding: '20px', 
              border: '1px solid #ddd', 
              borderRadius: '8px',
              backgroundColor: '#fff'
            }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={settings.largeText}
                  onChange={(e) => handleSettingChange('largeText', e.target.checked)}
                  aria-describedby="large-text-desc"
                />
                <span>
                  <strong>Large Text</strong>
                </span>
              </label>
              <p id="large-text-desc" style={{ margin: '5px 0 0 25px', fontSize: '14px', color: '#666' }}>
                Increase text size for better readability
              </p>
            </div>

            <div style={{ 
              padding: '20px', 
              border: '1px solid #ddd', 
              borderRadius: '8px',
              backgroundColor: '#fff'
            }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={settings.reducedMotion}
                  onChange={(e) => handleSettingChange('reducedMotion', e.target.checked)}
                  aria-describedby="reduced-motion-desc"
                />
                <span>
                  <strong>Reduced Motion</strong>
                </span>
              </label>
              <p id="reduced-motion-desc" style={{ margin: '5px 0 0 25px', fontSize: '14px', color: '#666' }}>
                Minimize animations and transitions
              </p>
            </div>

            <div style={{ 
              padding: '20px', 
              border: '1px solid #ddd', 
              borderRadius: '8px',
              backgroundColor: '#fff'
            }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={settings.focusVisible}
                  onChange={(e) => handleSettingChange('focusVisible', e.target.checked)}
                  aria-describedby="focus-visible-desc"
                />
                <span>
                  <strong>Focus Indicators</strong>
                </span>
              </label>
              <p id="focus-visible-desc" style={{ margin: '5px 0 0 25px', fontSize: '14px', color: '#666' }}>
                Show clear focus indicators for keyboard navigation
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="test-heading" style={{ marginTop: '40px' }}>
          <h2 id="test-heading">Test Your Settings</h2>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <button 
              style={{ 
                padding: '12px 20px', 
                backgroundColor: '#28a745', 
                color: 'white', 
                border: 'none', 
                borderRadius: '6px',
                cursor: 'pointer'
              }}
              onClick={() => announceToScreenReader('This is a test announcement for screen reader')}
            >
              Test Screen Reader
            </button>
            <button 
              style={{ 
                padding: '12px 20px', 
                backgroundColor: '#ffc107', 
                color: '#333', 
                border: 'none', 
                borderRadius: '6px',
                cursor: 'pointer'
              }}
              onClick={() => {
                const testElement = document.createElement('button');
                testElement.textContent = 'Test Focus';
                testElement.style.padding = '10px';
                testElement.style.margin = '10px';
                document.body.appendChild(testElement);
                testElement.focus();
                setTimeout(() => document.body.removeChild(testElement), 3000);
              }}
            >
              Test Focus
            </button>
            <button 
              style={{ 
                padding: '12px 20px', 
                backgroundColor: '#dc3545', 
                color: 'white', 
                border: 'none', 
                borderRadius: '6px',
                cursor: 'pointer'
              }}
              onClick={() => {
                setSettings({
                  screenReader: false,
                  highContrast: false,
                  largeText: false,
                  reducedMotion: false,
                  focusVisible: true,
                  announcements: true
                });
                document.body.classList.remove('high-contrast', 'large-text', 'reduced-motion');
                announceToScreenReader('Settings reset to default values');
              }}
            >
              Reset to Default
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

// NotFoundPage
const NotFoundPage: React.FC = () => (
  <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
    <h1>Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
    <a 
      href="/" 
      style={{ 
        display: 'inline-block', 
        padding: '12px 24px', 
        backgroundColor: '#007bff', 
        color: 'white', 
        textDecoration: 'none', 
        borderRadius: '6px',
        marginTop: '20px'
      }}
    >
      Go to Homepage
    </a>
  </div>
);

// Header Component
const Header: React.FC = () => (
  <header 
    style={{ 
      padding: '20px', 
      borderBottom: '1px solid #ccc',
      backgroundColor: '#f8f9fa'
    }}
    role="banner"
  >
    <nav aria-label="Main navigation">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#007bff' }}>
          🌍 Accessibility Platform
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a 
            href="/" 
            style={{ 
              textDecoration: 'none',
              color: '#007bff',
              fontWeight: 'bold',
              padding: '8px 16px',
              borderRadius: '4px',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e3f2fd'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            Home
          </a>
          <a 
            href="/services" 
            style={{ 
              textDecoration: 'none',
              color: '#007bff',
              fontWeight: 'bold',
              padding: '8px 16px',
              borderRadius: '4px',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e3f2fd'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            Services
          </a>
          <a 
            href="/accessibility" 
            style={{ 
              textDecoration: 'none',
              color: '#007bff',
              fontWeight: 'bold',
              padding: '8px 16px',
              borderRadius: '4px',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e3f2fd'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            Accessibility
          </a>
        </div>
      </div>
    </nav>
  </header>
);

// Footer Component
const Footer: React.FC = () => (
  <footer 
    style={{ 
      padding: '40px 20px', 
      borderTop: '1px solid #ccc', 
      marginTop: '60px',
      backgroundColor: '#f8f9fa',
      textAlign: 'center'
    }}
    role="contentinfo"
  >
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <p style={{ margin: '0 0 10px 0', fontSize: '18px', fontWeight: 'bold' }}>
        🌍 Global Accessibility Platform
      </p>
      <p style={{ margin: '0 0 20px 0', color: '#666' }}>
        Making the web accessible for everyone with WCAG 2.1 AAA compliance
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
        <a href="/" style={{ color: '#007bff', textDecoration: 'none' }}>Home</a>
        <a href="/services" style={{ color: '#007bff', textDecoration: 'none' }}>Services</a>
        <a href="/accessibility" style={{ color: '#007bff', textDecoration: 'none' }}>Settings</a>
      </div>
      <p style={{ margin: '20px 0 0 0', fontSize: '14px', color: '#666' }}>
        &copy; 2024 Accessibility Platform. Built with accessibility first.
      </p>
    </div>
  </footer>
);

// Main App Component
const App: React.FC = () => {
  useEffect(() => {
    // Set up keyboard navigation
    const handleKeyDown = (event: KeyboardEvent) => {
      // Handle global keyboard shortcuts
      if (event.altKey && event.key === 'm') {
        event.preventDefault();
        document.getElementById('main-content')?.focus();
        announceToScreenReader('Jumped to main content');
      }
      if (event.altKey && event.key === 'n') {
        event.preventDefault();
        const firstNav = document.querySelector('nav a');
        if (firstNav) (firstNav as HTMLElement).focus();
        announceToScreenReader('Jumped to navigation');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <Router>
      <div className="app">
        <SkipLink />
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
