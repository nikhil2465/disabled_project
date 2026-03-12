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

// Enhanced HomePage with EnAble India content
const HomePage: React.FC = () => {
  useEffect(() => {
    announceToScreenReader('Welcome to EnAble India loaded');
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        backgroundColor: '#007bff', 
        color: 'white', 
        padding: '60px 20px', 
        textAlign: 'center',
        backgroundImage: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)'
      }} aria-labelledby="hero-heading">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 id="hero-heading" style={{ fontSize: '3rem', marginBottom: '20px', fontWeight: 'bold' }}>
            #ThePurpleEconomyMovement
          </h1>
          <p style={{ fontSize: '1.5rem', marginBottom: '30px' }}>
            Empowering Persons with Disabilities through Livelihood, Education, and Inclusion
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              style={{ 
                padding: '15px 30px', 
                fontSize: '18px', 
                backgroundColor: 'white', 
                color: '#007bff', 
                border: 'none', 
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
              onClick={() => announceToScreenReader('Navigating to What We Do page')}
            >
              What We Do
            </button>
            <button 
              style={{ 
                padding: '15px 30px', 
                fontSize: '18px', 
                backgroundColor: 'transparent', 
                color: 'white', 
                border: '2px solid white', 
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
              onClick={() => announceToScreenReader('Navigating to Get Involved page')}
            >
              Get Involved
            </button>
          </div>
        </div>
      </section>

      {/* Address Update */}
      <section style={{ padding: '40px 20px', backgroundColor: '#f8f9fa' }} aria-labelledby="address-heading">
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 id="address-heading" style={{ color: '#28a745', marginBottom: '20px' }}>
            📍 We have shifted to permanent location
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}>
            <strong>Our new address is as follows:</strong><br/>
            Survey No. 9, 'Purva Gainz,' Second Floor, Beratana Agrahara, Lavakusha Nagar,<br/>
            Hosur Main Road, Bengaluru – 560100
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section style={{ padding: '60px 20px' }} aria-labelledby="stats-heading">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 id="stats-heading" style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2.5rem' }}>
            Our Impact
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            <div style={{ textAlign: 'center', padding: '30px', backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#007bff', marginBottom: '10px' }}>351,000+</div>
              <p style={{ fontSize: '1.1rem', color: '#666' }}>Individuals Impacted Including Persons with Disabilities and Their Families</p>
            </div>
            <div style={{ textAlign: 'center', padding: '30px', backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#28a745', marginBottom: '10px' }}>70-81%</div>
              <p style={{ fontSize: '1.1rem', color: '#666' }}>Persons with Disabilities are Supporting Their Families</p>
            </div>
            <div style={{ textAlign: 'center', padding: '30px', backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#ffc107', marginBottom: '10px' }}>19</div>
              <p style={{ fontSize: '1.1rem', color: '#666' }}>Types of Disabilities We Work With</p>
            </div>
            <div style={{ textAlign: 'center', padding: '30px', backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#dc3545', marginBottom: '10px' }}>1050</div>
              <p style={{ fontSize: '1.1rem', color: '#666' }}>Locations in 28 States with 229 Partner Organizations</p>
            </div>
          </div>
        </div>
      </section>

      {/* PwD Section */}
      <section style={{ padding: '60px 20px', backgroundColor: '#f8f9fa' }} aria-labelledby="pwd-heading">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
            <div>
              <h2 id="pwd-heading" style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#007bff' }}>
                FOR PERSONS WITH DISABILITIES
              </h2>
              <p style={{ fontSize: '1.3rem', marginBottom: '30px', color: '#666' }}>
                Want job? Self employment? Training?
              </p>
              <button 
                style={{ 
                  padding: '15px 30px', 
                  fontSize: '18px', 
                  backgroundColor: '#007bff', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
                onClick={() => announceToScreenReader('Navigating to PwD page')}
              >
                To visit PwD page Click Here
              </button>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '8rem', marginBottom: '20px' }}>🏃‍♂️</div>
              <p style={{ color: '#666', fontStyle: 'italic' }}>A runner with physical disability having prosthetic lower limbs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section style={{ padding: '60px 20px' }} aria-labelledby="services-heading">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 id="services-heading" style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2.5rem' }}>
            Our Initiatives
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div style={{ padding: '30px', border: '1px solid #ddd', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🔬</div>
              <h3 style={{ color: '#007bff', marginBottom: '15px' }}>EI LABS</h3>
              <p style={{ color: '#666', marginBottom: '20px' }}>Catalysing Community for Assistive Solutions</p>
              <button 
                style={{ 
                  padding: '10px 20px', 
                  backgroundColor: '#007bff', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
                onClick={() => announceToScreenReader('Opening EI Labs page')}
              >
                Know More
              </button>
            </div>
            <div style={{ padding: '30px', border: '1px solid #ddd', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>💼</div>
              <h3 style={{ color: '#28a745', marginBottom: '15px' }}>ENABLE LIVELIHOOD</h3>
              <p style={{ color: '#666', marginBottom: '20px' }}>Coming Soon</p>
              <button 
                style={{ 
                  padding: '10px 20px', 
                  backgroundColor: '#28a745', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
                onClick={() => announceToScreenReader('Opening Enable Livelihood page')}
              >
                Know More
              </button>
            </div>
            <div style={{ padding: '30px', border: '1px solid #ddd', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🔊</div>
              <h3 style={{ color: '#ffc107', marginBottom: '15px' }}>ENABLE VAANI</h3>
              <p style={{ color: '#666', marginBottom: '20px' }}>Catalysing Community for Assistive Solutions</p>
              <button 
                style={{ 
                  padding: '10px 20px', 
                  backgroundColor: '#ffc107', 
                  color: '#333', 
                  border: 'none', 
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
                onClick={() => announceToScreenReader('Opening Enable Vaani page')}
              >
                Know More
              </button>
            </div>
            <div style={{ padding: '30px', border: '1px solid #ddd', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>👁️</div>
              <h3 style={{ color: '#dc3545', marginBottom: '15px' }}>ENABLE VISION</h3>
              <p style={{ color: '#666', marginBottom: '20px' }}>For persons with vision impairment and their trainers</p>
              <button 
                style={{ 
                  padding: '10px 20px', 
                  backgroundColor: '#dc3545', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
                onClick={() => announceToScreenReader('Opening Enable Vision page')}
              >
                Know More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section style={{ padding: '60px 20px', backgroundColor: '#f8f9fa' }} aria-labelledby="stories-heading">
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 id="stories-heading" style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2.5rem', color: '#007bff' }}>
            Success Stories
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <article style={{ padding: '30px', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} aria-labelledby="story-1-name">
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <div style={{ fontSize: '4rem', marginBottom: '10px' }}>👨‍💼</div>
                <h3 id="story-1-name" style={{ color: '#007bff', marginBottom: '5px' }}>Naveen</h3>
              </div>
              <p style={{ color: '#666', fontStyle: 'italic', marginBottom: '15px', textAlign: 'center' }}>
                "Hi, I am Naveen. I was born with hearing impairment and gradually developed low vision at the age of 10."
              </p>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                I have completed Diploma in Computer Science Engineering and BCA. I underwent training for 1 year, in Enable India's train & hire project with a large MNC. After my internship there, I was hired in the IT Asset Management team at the same MNC. Today, I am solely responsible for assigning tickets to my team and ensure resolution.
              </p>
            </article>
            
            <article style={{ padding: '30px', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} aria-labelledby="story-2-name">
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <div style={{ fontSize: '4rem', marginBottom: '10px' }}>👨‍💻</div>
                <h3 id="story-2-name" style={{ color: '#007bff', marginBottom: '5px' }}>Mohammad Sanaullah</h3>
              </div>
              <p style={{ color: '#666', fontStyle: 'italic', marginBottom: '15px', textAlign: 'center' }}>
                "I have countless experiences of giving interviews with companies, and not hearing back from them at all."
              </p>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                I reached out to EnAble India earlier this year and here I was shown the path to develop myself. I attended sessions at EnAble India to improve my resume and to prepare for upcoming interviews. Now I work at an e-commerce company as an Online Associate.
              </p>
            </article>
            
            <article style={{ padding: '30px', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} aria-labelledby="story-3-name">
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <div style={{ fontSize: '4rem', marginBottom: '10px' }}>👨‍🍳</div>
                <h3 id="story-3-name" style={{ color: '#007bff', marginBottom: '5px' }}>Johnny Jacob</h3>
              </div>
              <p style={{ color: '#666', fontStyle: 'italic', marginBottom: '15px', textAlign: 'center' }}>
                "I am Johnny Jacob and a person in the Autism Spectrum."
              </p>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                I did Employability Training at Enable India where I did projects like volunteering activities, spreading awareness about autism etc. I was employed at a Café as a kitchen assistant. Job coaches from Enable India monitored my progress at work. Today, I am included in the café, and I handle all tasks at the counter like attending customers, making coffee, serving/ packing food among other tasks.
              </p>
            </article>
            
            <article style={{ padding: '30px', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} aria-labelledby="story-4-name">
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <div style={{ fontSize: '4rem', marginBottom: '10px' }}>👩‍💼</div>
                <h3 id="story-4-name" style={{ color: '#007bff', marginBottom: '5px' }}>Asha</h3>
              </div>
              <p style={{ color: '#666', fontStyle: 'italic', marginBottom: '15px', textAlign: 'center' }}>
                "I am Asha and a person in the Autism Spectrum."
              </p>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                I was part of a collaborative training program with Enable India and a leading IT company. In the Employability Training, I learnt to interact, work in a team, time management and meet targets. After the training, I was placed as a Quality Associate. My parents are my pillars of support, strength and encouragement.
              </p>
            </article>
          </div>
        </div>
      </section>
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
                Screen Reader Announcements
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
                High Contrast Mode
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
                Large Text
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
                Reduced Motion
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
                Focus Indicators
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

// About Us Page
const AboutPage: React.FC = () => {
  useEffect(() => {
    announceToScreenReader('About Us page loaded');
  }, []);

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <header>
        <h1 style={{ fontSize: '3rem', marginBottom: '30px', color: '#007bff' }}>About EnAble India</h1>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '40px' }}>
          Empowering Persons with Disabilities through livelihood, education, and inclusion since 1999.
        </p>
      </header>

      <main>
        <section aria-labelledby="mission-heading">
          <h2 id="mission-heading" style={{ fontSize: '2rem', marginBottom: '20px', color: '#28a745' }}>Our Mission</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#666', marginBottom: '30px' }}>
            To provide economic independence and dignity to persons with disabilities by building sustainable livelihoods through education, training, and employment.
          </p>
        </section>

        <section aria-labelledby="vision-heading">
          <h2 id="vision-heading" style={{ fontSize: '2rem', marginBottom: '20px', color: '#28a745' }}>Our Vision</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#666', marginBottom: '30px' }}>
            A world where persons with disabilities live with dignity, economic independence, and equal opportunities in all spheres of life.
          </p>
        </section>

        <section aria-labelledby="values-heading">
          <h2 id="values-heading" style={{ fontSize: '2rem', marginBottom: '20px', color: '#28a745' }}>Our Values</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            <div style={{ padding: '25px', backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
              <h3 style={{ color: '#007bff', marginBottom: '15px' }}>Dignity</h3>
              <p style={{ color: '#666' }}>Respecting the inherent worth and potential of every individual</p>
            </div>
            <div style={{ padding: '25px', backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
              <h3 style={{ color: '#007bff', marginBottom: '15px' }}>Inclusion</h3>
              <p style={{ color: '#666' }}>Creating barrier-free environments and opportunities</p>
            </div>
            <div style={{ padding: '25px', backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
              <h3 style={{ color: '#007bff', marginBottom: '15px' }}>Empowerment</h3>
              <p style={{ color: '#666' }}>Building skills and confidence for independence</p>
            </div>
            <div style={{ padding: '25px', backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
              <h3 style={{ color: '#007bff', marginBottom: '15px' }}>Excellence</h3>
              <p style={{ color: '#666' }}>Delivering high-quality, impactful programs</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="team-heading" style={{ marginTop: '50px' }}>
          <h2 id="team-heading" style={{ fontSize: '2rem', marginBottom: '20px', color: '#28a745' }}>Leadership Team</h2>
          <p style={{ fontSize: '1.1rem', color: '#666' }}>
            Founded and led by disability rights advocates with decades of experience in rehabilitation, education, and employment sectors.
          </p>
        </section>
      </main>
    </div>
  );
};

// What We Do Page
const WhatWeDoPage: React.FC = () => {
  useEffect(() => {
    announceToScreenReader('What We Do page loaded');
  }, []);

  const services = [
    {
      title: 'EI LABS',
      description: 'Catalysing Community for Assistive Solutions',
      details: 'Have solutions or ideas to innovate? Partner with us!',
      color: '#007bff',
      icon: '🔬'
    },
    {
      title: 'ENABLE LIVELIHOOD',
      description: 'Economic empowerment through employment',
      details: 'Coming Soon - Building sustainable livelihood opportunities',
      color: '#28a745',
      icon: '💼'
    },
    {
      title: 'ENABLE VAANI',
      description: 'Catalysing Community for Assistive Solutions',
      details: 'Have solutions or ideas to innovate? Partner with us!',
      color: '#ffc107',
      icon: '🔊'
    },
    {
      title: 'ENABLE VISION',
      description: 'For persons with vision impairment and their trainers',
      details: 'Access to quality life through digital literacy',
      color: '#dc3545',
      icon: '👁️'
    },
    {
      title: 'ENABLE ACADEMY',
      description: 'For all stakeholders',
      details: 'Want to scale your work? Share tools or models? Run campaigns?',
      color: '#6f42c1',
      icon: '🎓'
    },
    {
      title: 'ENABLE COMMUNITY',
      description: 'For enthusiasts, students, colleges and companies',
      details: 'Explore your passion for disability inclusion',
      color: '#fd7e14',
      icon: '🤝'
    },
    {
      title: 'ENABLE INCLUSION',
      description: 'For employers and employees: PSU & government',
      details: 'Utilize potential of employees with disability',
      color: '#20c997',
      icon: '♿'
    },
    {
      title: 'GARV SE CENTER',
      description: 'Persons with Disabilities across the Country',
      details: 'An outreach plan to strengthen livelihood ecosystem',
      color: '#e83e8c',
      icon: '🏢'
    }
  ];

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <header>
        <h1 style={{ fontSize: '3rem', marginBottom: '30px', color: '#007bff' }}>What We Do</h1>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '40px' }}>
          Our comprehensive ecosystem of services and programs empowering persons with disabilities
        </p>
      </header>

      <main>
        <section aria-labelledby="services-heading">
          <h2 id="services-heading" style={{ fontSize: '2rem', marginBottom: '30px', color: '#28a745' }}>Our Initiatives</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
            {services.map((service, index) => (
              <article 
                key={index}
                style={{ 
                  padding: '30px', 
                  border: '1px solid #ddd', 
                  borderRadius: '12px',
                  backgroundColor: '#fff',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}
                aria-labelledby={`service-${index}-title`}
              >
                <div style={{ fontSize: '3rem', marginBottom: '20px', textAlign: 'center' }}>
                  {service.icon}
                </div>
                <h3 id={`service-${index}-title`} style={{ color: service.color, marginBottom: '15px', textAlign: 'center' }}>
                  {service.title}
                </h3>
                <p style={{ color: '#666', marginBottom: '15px', textAlign: 'center' }}>
                  {service.description}
                </p>
                <p style={{ color: '#666', marginBottom: '20px', fontStyle: 'italic', textAlign: 'center' }}>
                  {service.details}
                </p>
                <div style={{ textAlign: 'center' }}>
                  <button 
                    style={{ 
                      padding: '12px 24px', 
                      backgroundColor: service.color, 
                      color: 'white', 
                      border: 'none', 
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontWeight: 'bold'
                    }}
                    onClick={() => announceToScreenReader(`Opening ${service.title} page`)}
                  >
                    Visit {service.title} page
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

// Newsroom Page
const NewsroomPage: React.FC = () => {
  useEffect(() => {
    announceToScreenReader('Newsroom page loaded');
  }, []);

  const news = [
    {
      date: '2024-12-15',
      title: 'EnAble India Celebrates 25 Years of Impact',
      summary: 'Quarter century of empowering persons with disabilities through livelihood and education programs.'
    },
    {
      date: '2024-11-20',
      title: 'New Partnership with Tech Giants for Inclusive Hiring',
      summary: 'Strategic collaboration to create employment opportunities for persons with disabilities in the technology sector.'
    },
    {
      date: '2024-10-10',
      title: '#ThePurpleEconomyMovement Gains National Momentum',
      summary: 'Growing support for economic inclusion of persons with disabilities across India.'
    },
    {
      date: '2024-09-05',
      title: 'EI Labs Launches Innovation Challenge',
      summary: 'Calling for assistive technology solutions to address real-world challenges faced by persons with disabilities.'
    }
  ];

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <header>
        <h1 style={{ fontSize: '3rem', marginBottom: '30px', color: '#007bff' }}>Newsroom</h1>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '40px' }}>
          Latest updates and stories from our journey of empowerment
        </p>
      </header>

      <main>
        <section aria-labelledby="news-heading">
          <h2 id="news-heading" style={{ fontSize: '2rem', marginBottom: '30px', color: '#28a745' }}>Latest News</h2>
          <div style={{ display: 'grid', gap: '30px' }}>
            {news.map((article, index) => (
              <article 
                key={index}
                style={{ 
                  padding: '30px', 
                  border: '1px solid #ddd', 
                  borderRadius: '12px',
                  backgroundColor: '#fff',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}
                aria-labelledby={`article-${index}-title`}
              >
                <div style={{ color: '#666', fontSize: '0.9rem', marginBottom: '10px' }}>
                  {article.date}
                </div>
                <h3 id={`article-${index}-title`} style={{ color: '#007bff', marginBottom: '15px', fontSize: '1.5rem' }}>
                  {article.title}
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>
                  {article.summary}
                </p>
                <button 
                  style={{ 
                    padding: '10px 20px', 
                    backgroundColor: '#007bff', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}
                  onClick={() => announceToScreenReader('Reading full article')}
                >
                  Read More
                </button>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="media-heading" style={{ marginTop: '50px' }}>
          <h2 id="media-heading" style={{ fontSize: '2rem', marginBottom: '20px', color: '#28a745' }}>Media Coverage</h2>
          <p style={{ fontSize: '1.1rem', color: '#666' }}>
            Our work has been featured in leading national and international media outlets, highlighting the impact of our programs and the stories of transformation.
          </p>
        </section>
      </main>
    </div>
  );
};

// Get Involved Page
const GetInvolvedPage: React.FC = () => {
  useEffect(() => {
    announceToScreenReader('Get Involved page loaded');
  }, []);

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <header>
        <h1 style={{ fontSize: '3rem', marginBottom: '30px', color: '#007bff' }}>Get Involved</h1>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '40px' }}>
          Join us in our mission to empower persons with disabilities
        </p>
      </header>

      <main>
        <section aria-labelledby="opportunities-heading">
          <h2 id="opportunities-heading" style={{ fontSize: '2rem', marginBottom: '30px', color: '#28a745' }}>Ways to Support</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div style={{ padding: '30px', backgroundColor: '#f8f9fa', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>💝</div>
              <h3 style={{ color: '#007bff', marginBottom: '15px' }}>Donate</h3>
              <p style={{ color: '#666', marginBottom: '20px' }}>
                Support our programs and help transform lives through your generous contributions
              </p>
              <button 
                style={{ 
                  padding: '12px 24px', 
                  backgroundColor: '#007bff', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
                onClick={() => announceToScreenReader('Opening donation page')}
              >
                Donate Now
              </button>
            </div>
            <div style={{ padding: '30px', backgroundColor: '#f8f9fa', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🤝</div>
              <h3 style={{ color: '#28a745', marginBottom: '15px' }}>Volunteer</h3>
              <p style={{ color: '#666', marginBottom: '20px' }}>
                Share your time and skills to make a direct impact in the lives of persons with disabilities
              </p>
              <button 
                style={{ 
                  padding: '12px 24px', 
                  backgroundColor: '#28a745', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
                onClick={() => announceToScreenReader('Opening volunteer page')}
              >
                Become a Volunteer
              </button>
            </div>
            <div style={{ padding: '30px', backgroundColor: '#f8f9fa', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🤝</div>
              <h3 style={{ color: '#ffc107', marginBottom: '15px' }}>Partner</h3>
              <p style={{ color: '#666', marginBottom: '20px' }}>
                Collaborate with us to create employment opportunities and inclusive workplaces
              </p>
              <button 
                style={{ 
                  padding: '12px 24px', 
                  backgroundColor: '#ffc107', 
                  color: '#333', 
                  border: 'none', 
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
                onClick={() => announceToScreenReader('Opening partnership page')}
              >
                Partner with Us
              </button>
            </div>
            <div style={{ padding: '30px', backgroundColor: '#f8f9fa', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📢</div>
              <h3 style={{ color: '#dc3545', marginBottom: '15px' }}>Advocate</h3>
              <p style={{ color: '#666', marginBottom: '20px' }}>
                Join our advocacy efforts and help promote disability rights and inclusion
              </p>
              <button 
                style={{ 
                  padding: '12px 24px', 
                  backgroundColor: '#dc3545', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
                onClick={() => announceToScreenReader('Opening advocacy page')}
              >
                Join Advocacy
              </button>
            </div>
          </div>
        </section>

        <section aria-labelledby="campaign-heading" style={{ marginTop: '50px' }}>
          <h2 id="campaign-heading" style={{ fontSize: '2rem', marginBottom: '20px', color: '#28a745' }}>
            #ThePurpleEconomyMovement
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '30px' }}>
            Join our nationwide movement to promote economic inclusion of persons with disabilities. 
            The Purple Economy represents the untapped potential and economic contribution of persons with disabilities.
          </p>
          <div style={{ 
            padding: '30px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            borderRadius: '12px', 
            textAlign: 'center' 
          }}>
            <h3 style={{ marginBottom: '15px' }}>Be Part of the Change</h3>
            <p style={{ marginBottom: '20px' }}>
              Together, we can create a more inclusive and diverse economy that benefits everyone.
            </p>
            <button 
              style={{ 
                padding: '15px 30px', 
                backgroundColor: 'white', 
                color: '#007bff', 
                border: 'none', 
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
              onClick={() => announceToScreenReader('Joining Purple Economy Movement')}
            >
              Join the Movement
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

// Contact Us Page
const ContactPage: React.FC = () => {
  useEffect(() => {
    announceToScreenReader('Contact Us page loaded');
  }, []);

  return (
    <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <header>
        <h1 style={{ fontSize: '3rem', marginBottom: '30px', color: '#007bff' }}>Contact Us</h1>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '40px' }}>
          Get in touch with us to learn more, partner, or seek support
        </p>
      </header>

      <main>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          <section aria-labelledby="address-heading">
            <h2 id="address-heading" style={{ fontSize: '2rem', marginBottom: '20px', color: '#28a745' }}>Visit Us</h2>
            <div style={{ padding: '30px', backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
              <h3 style={{ color: '#007bff', marginBottom: '15px' }}>Head Office</h3>
              <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>
                <strong>Survey No. 9, 'Purva Gainz,' Second Floor,</strong><br/>
                Beratana Agrahara, Lavakusha Nagar,<br/>
                Hosur Main Road, Bengaluru – 560100<br/><br/>
                <strong>Phone:</strong> +918067323636<br/>
                <strong>Email:</strong> info@enableindia.org
              </p>
              <button 
                style={{ 
                  padding: '12px 24px', 
                  backgroundColor: '#007bff', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '6px',
                  cursor: 'pointer'
                }}
                onClick={() => announceToScreenReader('Getting directions to office')}
              >
                Get Directions
              </button>
            </div>
          </section>

          <section aria-labelledby="contact-heading">
            <h2 id="contact-heading" style={{ fontSize: '2rem', marginBottom: '20px', color: '#28a745' }}>Get in Touch</h2>
            <div style={{ padding: '30px', backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
              <form>
                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', color: '#333' }}>Name *</label>
                  <input 
                    id="name"
                    type="text" 
                    style={{ 
                      width: '100%', 
                      padding: '12px', 
                      border: '1px solid #ddd', 
                      borderRadius: '6px',
                      fontSize: '16px'
                    }}
                    aria-required="true"
                  />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', color: '#333' }}>Email *</label>
                  <input 
                    id="email"
                    type="email" 
                    style={{ 
                      width: '100%', 
                      padding: '12px', 
                      border: '1px solid #ddd', 
                      borderRadius: '6px',
                      fontSize: '16px'
                    }}
                    aria-required="true"
                  />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="subject" style={{ display: 'block', marginBottom: '5px', color: '#333' }}>Subject *</label>
                  <input 
                    id="subject"
                    type="text" 
                    style={{ 
                      width: '100%', 
                      padding: '12px', 
                      border: '1px solid #ddd', 
                      borderRadius: '6px',
                      fontSize: '16px'
                    }}
                    aria-required="true"
                  />
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '5px', color: '#333' }}>Message *</label>
                  <textarea 
                    id="message"
                    rows={5}
                    style={{ 
                      width: '100%', 
                      padding: '12px', 
                      border: '1px solid #ddd', 
                      borderRadius: '6px',
                      fontSize: '16px',
                      resize: 'vertical'
                    }}
                    aria-required="true"
                  />
                </div>
                <button 
                  type="submit"
                  style={{ 
                    padding: '12px 24px', 
                    backgroundColor: '#28a745', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    announceToScreenReader('Form submitted successfully');
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </div>

        <section aria-labelledby="support-heading" style={{ marginTop: '50px' }}>
          <h2 id="support-heading" style={{ fontSize: '2rem', marginBottom: '20px', color: '#28a745' }}>Support for Persons with Disabilities</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>💼</div>
              <h3 style={{ color: '#007bff', marginBottom: '10px' }}>Job Seekers</h3>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>Register for employment opportunities</p>
            </div>
            <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🎓</div>
              <h3 style={{ color: '#007bff', marginBottom: '10px' }}>Training Programs</h3>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>Enhance your skills and employability</p>
            </div>
            <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🏢</div>
              <h3 style={{ color: '#007bff', marginBottom: '10px' }}>Employers</h3>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>Hire talented persons with disabilities</p>
            </div>
            <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>🤝</div>
              <h3 style={{ color: '#007bff', marginBottom: '10px' }}>Volunteers</h3>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>Contribute your time and skills</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

// Login Page
const LoginPage: React.FC = () => {
  useEffect(() => {
    announceToScreenReader('Login page loaded');
  }, []);

  return (
    <div style={{ padding: '40px 20px', maxWidth: '500px', margin: '0 auto' }}>
      <header>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#007bff', textAlign: 'center' }}>Login</h1>
        <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '40px', textAlign: 'center' }}>
          Access your EnAble India account
        </p>
      </header>

      <main>
        <section aria-labelledby="login-form-heading">
          <h2 id="login-form-heading" className="sr-only">Login Form</h2>
          <div style={{ padding: '30px', backgroundColor: '#f8f9fa', borderRadius: '12px' }}>
            <form>
              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="login-email" style={{ display: 'block', marginBottom: '5px', color: '#333' }}>Email Address *</label>
                <input 
                  id="login-email"
                  type="email" 
                  style={{ 
                    width: '100%', 
                    padding: '12px', 
                    border: '1px solid #ddd', 
                    borderRadius: '6px',
                    fontSize: '16px'
                  }}
                  aria-required="true"
                  placeholder="Enter your email"
                />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="login-password" style={{ display: 'block', marginBottom: '5px', color: '#333' }}>Password *</label>
                <input 
                  id="login-password"
                  type="password" 
                  style={{ 
                    width: '100%', 
                    padding: '12px', 
                    border: '1px solid #ddd', 
                    borderRadius: '6px',
                    fontSize: '16px'
                  }}
                  aria-required="true"
                  placeholder="Enter your password"
                />
              </div>
              <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input 
                  id="remember-me"
                  type="checkbox" 
                  style={{ width: 'auto' }}
                />
                <label htmlFor="remember-me" style={{ color: '#333', cursor: 'pointer' }}>Remember me</label>
              </div>
              <button 
                type="submit"
                style={{ 
                  width: '100%',
                  padding: '15px', 
                  backgroundColor: '#007bff', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '16px'
                }}
                onClick={(e) => {
                  e.preventDefault();
                  announceToScreenReader('Login successful');
                }}
              >
                Login
              </button>
            </form>
            
            <div style={{ marginTop: '30px', textAlign: 'center' }}>
              <p style={{ color: '#666', marginBottom: '15px' }}>Don't have an account?</p>
              <button 
                style={{ 
                  padding: '12px 24px', 
                  backgroundColor: 'transparent', 
                  color: '#007bff', 
                  border: '2px solid #007bff', 
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
                onClick={() => announceToScreenReader('Navigating to registration page')}
              >
                Register Now
              </button>
            </div>
            
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <button 
                style={{ 
                  background: 'none',
                  border: 'none',
                  color: '#007bff', 
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  padding: 0
                }}
                onClick={() => announceToScreenReader('Opening password reset page')}
              >
                Forgot Password?
              </button>
            </div>
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
          <button 
            style={{ 
              display: 'inline-block', 
              padding: '12px 24px', 
              backgroundColor: '#007bff', 
              color: 'white', 
              textDecoration: 'none', 
              borderRadius: '6px',
              marginTop: '20px',
              border: 'none',
              cursor: 'pointer'
            }}
            onClick={() => window.location.href = '/'}
          >
            Go to Homepage
          </button>
  </div>
);

// Header Component with new navigation
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
          🌍 EnAble India
        </div>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
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
            onFocus={(e) => e.currentTarget.style.backgroundColor = '#e3f2fd'}
            onBlur={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            Home
          </a>
          <a 
            href="/about" 
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
            onFocus={(e) => e.currentTarget.style.backgroundColor = '#e3f2fd'}
            onBlur={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            About Us
          </a>
          <a 
            href="/what-we-do" 
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
            onFocus={(e) => e.currentTarget.style.backgroundColor = '#e3f2fd'}
            onBlur={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            What We Do
          </a>
          <a 
            href="/newsroom" 
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
            onFocus={(e) => e.currentTarget.style.backgroundColor = '#e3f2fd'}
            onBlur={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            Newsroom
          </a>
          <a 
            href="/get-involved" 
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
            onFocus={(e) => e.currentTarget.style.backgroundColor = '#e3f2fd'}
            onBlur={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            Get Involved
          </a>
          <a 
            href="/contact" 
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
            onFocus={(e) => e.currentTarget.style.backgroundColor = '#e3f2fd'}
            onBlur={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            Contact Us
          </a>
          <a 
            href="/login" 
            style={{ 
              textDecoration: 'none',
              color: '#007bff',
              fontWeight: 'bold',
              padding: '8px 16px',
              borderRadius: '4px',
              transition: 'background-color 0.2s',
              backgroundColor: '#007bff',
              color: 'white'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
            onFocus={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
            onBlur={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
          >
            Login
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
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>
        <div>
          <h3 style={{ marginBottom: '20px', color: '#007bff' }}>ABOUT</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a href="/about" style={{ color: '#007bff', textDecoration: 'none' }}>About Us</a>
            <a href="/events" style={{ color: '#007bff', textDecoration: 'none' }}>Events & Updates</a>
            <a href="/newsroom" style={{ color: '#007bff', textDecoration: 'none' }}>Newsroom</a>
            <a href="/careers" style={{ color: '#007bff', textDecoration: 'none' }}>Careers</a>
          </div>
        </div>
        <div>
          <h3 style={{ marginBottom: '20px', color: '#007bff' }}>DOWNLOADS</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button 
              style={{ 
                background: 'none',
                border: 'none',
                color: '#007bff', 
                textDecoration: 'none',
                cursor: 'pointer',
                padding: 0,
                textAlign: 'left'
              }}
              onClick={() => announceToScreenReader('Downloading Annual Report')}
            >
              Annual Report 2024-25
            </button>
            <button 
              style={{ 
                background: 'none',
                border: 'none',
                color: '#007bff', 
                textDecoration: 'none',
                cursor: 'pointer',
                padding: 0,
                textAlign: 'left'
              }}
              onClick={() => announceToScreenReader('Downloading Placement Cell report')}
            >
              Placement Cell report
            </button>
            <button 
              style={{ 
                background: 'none',
                border: 'none',
                color: '#007bff', 
                textDecoration: 'none',
                cursor: 'pointer',
                padding: 0,
                textAlign: 'left'
              }}
              onClick={() => announceToScreenReader('Downloading EnAble India Brochure')}
            >
              EnAble India Brochure
            </button>
            <button 
              style={{ 
                background: 'none',
                border: 'none',
                color: '#007bff', 
                textDecoration: 'none',
                cursor: 'pointer',
                padding: 0,
                textAlign: 'left'
              }}
              onClick={() => announceToScreenReader('Downloading Media Kit')}
            >
              Media Kit
            </button>
            <button 
              style={{ 
                background: 'none',
                border: 'none',
                color: '#007bff', 
                textDecoration: 'none',
                cursor: 'pointer',
                padding: 0,
                textAlign: 'left'
              }}
              onClick={() => announceToScreenReader('Downloading Prevention of Sexual Harassment Policy')}
            >
              Prevention of Sexual Harassment Policy
            </button>
          </div>
        </div>
        <div>
          <h3 style={{ marginBottom: '20px', color: '#007bff' }}>CONTACT US</h3>
          <p style={{ color: '#666', lineHeight: '1.6' }}>
            <strong>Survey No. 9, 'Purva Gainz,' Second Floor,</strong><br/>
            Beratana Agrahara, Lavakusha Nagar,<br/>
            Hosur Main Road, Bengaluru - 560100<br/>
            <strong>Phone:</strong> +918067323636
          </p>
        </div>
      </div>
      <div style={{ borderTop: '1px solid #ddd', paddingTop: '20px' }}>
        <p style={{ margin: '0 0 10px 0', fontSize: '18px', fontWeight: 'bold', color: '#007bff' }}>
          🌍 EnAble India
        </p>
        <p style={{ margin: '0 0 20px 0', color: '#666' }}>
          Empowering Persons with Disabilities through #ThePurpleEconomyMovement
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginBottom: '20px' }}>
          <a href="/" style={{ color: '#007bff', textDecoration: 'none' }}>Home</a>
          <a href="/about" style={{ color: '#007bff', textDecoration: 'none' }}>About Us</a>
          <a href="/what-we-do" style={{ color: '#007bff', textDecoration: 'none' }}>What We Do</a>
          <a href="/contact" style={{ color: '#007bff', textDecoration: 'none' }}>Contact</a>
        </div>
        <p style={{ margin: '20px 0 0 0', fontSize: '14px', color: '#666' }}>
          &copy; 2025 EnAble India. All Rights Reserved. <button 
            style={{ 
              background: 'none',
              border: 'none',
              color: '#007bff', 
              textDecoration: 'none',
              cursor: 'pointer',
              padding: 0
            }}
            onClick={() => announceToScreenReader('Opening Privacy Policy')}
          >
            Privacy Policy
          </button> | <button 
            style={{ 
              background: 'none',
              border: 'none',
              color: '#007bff', 
              textDecoration: 'none',
              cursor: 'pointer',
              padding: 0
            }}
            onClick={() => announceToScreenReader('Opening Terms of Use')}
          >
            Terms of Use
          </button>
        </p>
      </div>
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
            <Route path="/about" element={<AboutPage />} />
            <Route path="/what-we-do" element={<WhatWeDoPage />} />
            <Route path="/newsroom" element={<NewsroomPage />} />
            <Route path="/get-involved" element={<GetInvolvedPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
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
