import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useScreenReader } from '../../contexts/ScreenReaderContext';
import { announceToScreenReader } from '../../utils/accessibility';

const ServicesContainer = styled.div`
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

const PageHeader = styled.header`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.xxl};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text};
`;

const PageDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.spacing.xxl};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const ServiceCard = styled.article`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 2px solid transparent;

  &:hover,
  &:focus-within {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const ServiceIcon = styled.div`
  width: 64px;
  height: 64px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: 24px;
  color: white;
`;

const ServiceTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};
`;

const ServiceDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ServiceFeature = styled.li`
  padding: ${({ theme }) => theme.spacing.sm} 0;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  position: relative;
  padding-left: ${({ theme }) => theme.spacing.lg};

  &:before {
    content: '✓';
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.success};
    font-weight: bold;
  }
`;

const ServiceButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 44px;
  min-width: 44px;
  width: 100%;

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.primaryHover};
    transform: translateY(-1px);
  }

  &:focus {
    outline: 3px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const FilterSection = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

const FilterButton = styled.button<{ isActive: boolean }>`
  background: ${({ isActive, theme }) => 
    isActive ? theme.colors.primary : theme.colors.surface
  };
  color: ${({ isActive, theme }) => 
    isActive ? 'white' : theme.colors.text
  };
  border: 2px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  margin: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 44px;

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-1px);
  }

  &:focus {
    outline: 3px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  category: string;
}

const ServicesPage: React.FC = () => {
  const { announce } = useScreenReader();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const services: Service[] = [
    {
      id: 'screen-reader',
      title: 'Screen Reader Support',
      description: 'Complete compatibility with all major screen readers including NVDA, JAWS, VoiceOver, and TalkBack.',
      icon: '🔊',
      features: [
        'Full ARIA support',
        'Semantic HTML structure',
        'Alternative text for images',
        'Live regions for dynamic content',
        'Screen reader testing tools'
      ],
      category: 'visual'
    },
    {
      id: 'keyboard-navigation',
      title: 'Keyboard Navigation',
      description: 'Comprehensive keyboard accessibility with intuitive navigation patterns and shortcuts.',
      icon: '⌨️',
      features: [
        'Tab order management',
        'Keyboard shortcuts',
        'Focus indicators',
        'Skip links',
        'Focus trapping'
      ],
      category: 'motor'
    },
    {
      id: 'voice-control',
      title: 'Voice Control',
      description: 'Hands-free navigation and interaction using voice commands and speech recognition.',
      icon: '🎤',
      features: [
        'Voice commands',
        'Speech-to-text',
        'Text-to-speech',
        'Voice feedback',
        'Custom voice profiles'
      ],
      category: 'motor'
    },
    {
      id: 'high-contrast',
      title: 'High Contrast Mode',
      description: 'Multiple color schemes including high contrast options for users with low vision.',
      icon: '🎨',
      features: [
        'High contrast themes',
        'Color blind friendly palettes',
        'Custom color schemes',
        'Dark mode support',
        'Blue light filter'
      ],
      category: 'visual'
    },
    {
      id: 'text-scaling',
      title: 'Text Scaling',
      description: 'Responsive typography supporting up to 200% zoom without breaking layout.',
      icon: '📝',
      features: [
        '200% zoom support',
        'Responsive fonts',
        'Text spacing controls',
        'Font customization',
        'Reading mode'
      ],
      category: 'visual'
    },
    {
      id: 'cognitive-support',
      title: 'Cognitive Support',
      description: 'Simple language and clear instructions to support users with cognitive disabilities.',
      icon: '🧠',
      features: [
        'Simple language',
        'Clear instructions',
        'Consistent navigation',
        'Error prevention',
        'Help systems'
      ],
      category: 'cognitive'
    },
    {
      id: 'image-accessibility',
      title: 'Image Accessibility',
      description: 'Comprehensive image accessibility with automatic alt-text generation and descriptions.',
      icon: '🖼️',
      features: [
        'Automatic alt-text',
        'Image descriptions',
        'Tactile graphics',
        'Audio descriptions',
        'Image analysis'
      ],
      category: 'visual'
    },
    {
      id: 'multimedia-support',
      title: 'Multimedia Support',
      description: 'Accessible audio and video content with captions, transcripts, and audio descriptions.',
      icon: '🎬',
      features: [
        'Closed captions',
        'Audio descriptions',
        'Transcripts',
        'Sign language support',
        'Playback controls'
      ],
      category: 'hearing'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'visual', label: 'Visual' },
    { id: 'hearing', label: 'Hearing' },
    { id: 'motor', label: 'Motor' },
    { id: 'cognitive', label: 'Cognitive' }
  ];

  useEffect(() => {
    announceToScreenReader('Services page loaded. Browse our accessibility services.');
  }, [announce]);

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const handleCategoryChange = (category: string): void => {
    setSelectedCategory(category);
    const categoryLabel = categories.find(cat => cat.id === category)?.label;
    announceToScreenReader(`Filtered to ${categoryLabel} services`);
  };

  const handleServiceClick = (serviceTitle: string): void => {
    announceToScreenReader(`Loading details for ${serviceTitle}...`);
  };

  return (
    <ServicesContainer role="main">
      <PageHeader>
        <PageTitle>Our Accessibility Services</PageTitle>
        <PageDescription>
          Explore our comprehensive range of accessibility services designed to support 
          disabled and blind people. Each service is built with universal accessibility 
          principles and follows WCAG 2.1 AAA guidelines.
        </PageDescription>
      </PageHeader>

      <FilterSection aria-labelledby="filter-title">
        <h2 id="filter-title" className="sr-only">
          Filter Services
        </h2>
        {categories.map(category => (
          <FilterButton
            key={category.id}
            isActive={selectedCategory === category.id}
            onClick={() => handleCategoryChange(category.id)}
            aria-pressed={selectedCategory === category.id}
          >
            {category.label}
          </FilterButton>
        ))}
      </FilterSection>

      <section aria-labelledby="services-title">
        <h2 id="services-title" className="sr-only">
          Available Services
        </h2>
        <ServicesGrid>
          {filteredServices.map((service) => (
            <ServiceCard key={service.id}>
              <ServiceIcon role="img" aria-label={`${service.title} icon`}>
                {service.icon}
              </ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceFeatures role="list">
                {service.features.map((feature, index) => (
                  <ServiceFeature key={index} role="listitem">
                    {feature}
                  </ServiceFeature>
                ))}
              </ServiceFeatures>
              <ServiceButton
                onClick={() => handleServiceClick(service.title)}
                aria-describedby={`service-${service.id}-description`}
              >
                Learn More
              </ServiceButton>
              <div id={`service-${service.id}-description`} className="sr-only">
                Get detailed information about {service.title} service
              </div>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </section>
    </ServicesContainer>
  );
};

export default ServicesPage;
