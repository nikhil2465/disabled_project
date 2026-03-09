import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useScreenReader } from '../../contexts/ScreenReaderContext';
import { announceToScreenReader } from '../../utils/accessibility';

const HomePageContainer = styled.div`
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  padding: ${({ theme }) => theme.spacing.xxl};
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.xxl};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text};
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const FeatureCard = styled.article`
  background: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const FeatureTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.primary};
`;

const FeatureDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const CTASection = styled.section`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl};
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const CTATitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const CTAButton = styled.button`
  background: white;
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 44px;
  min-width: 44px;

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.surface};
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

const HomePage: React.FC = () => {
  const { announce } = useScreenReader();

  useEffect(() => {
    // Announce page load to screen readers
    announceToScreenReader('Welcome to the Global Accessibility Platform. A comprehensive solution for disabled and blind people.');
  }, [announce]);

  const features = [
    {
      title: 'Screen Reader Support',
      description: 'Full compatibility with popular screen readers including NVDA, JAWS, VoiceOver, and TalkBack. All content is properly labeled with ARIA attributes.',
    },
    {
      title: 'Keyboard Navigation',
      description: 'Complete keyboard accessibility with intuitive navigation patterns, focus management, and keyboard shortcuts for all features.',
    },
    {
      title: 'High Contrast Mode',
      description: 'Multiple color schemes including high contrast options for users with low vision. Customizable themes to meet individual needs.',
    },
    {
      title: 'Voice Control',
      description: 'Voice command support for hands-free navigation and interaction. Compatible with built-in voice recognition software.',
    },
    {
      title: 'Text Scaling',
      description: 'Responsive typography that supports up to 200% zoom without breaking layout. Maintains readability at all sizes.',
    },
    {
      title: 'Cognitive Accessibility',
      description: 'Simple language, consistent navigation, and clear instructions to support users with cognitive disabilities.',
    },
  ];

  const handleGetStarted = (): void => {
    announceToScreenReader('Loading services page...');
    // Navigate to services page
    window.location.href = '/services';
  };

  return (
    <HomePageContainer role="main">
      <HeroSection aria-labelledby="hero-title">
        <Title id="hero-title">
          Welcome to the Global Accessibility Platform
        </Title>
        <Subtitle>
          Empowering disabled and blind people with universal access to digital services, 
          information, and opportunities. Built with accessibility at our core.
        </Subtitle>
      </HeroSection>

      <section aria-labelledby="features-title">
        <h2 id="features-title" className="sr-only">
          Platform Features
        </h2>
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </section>

      <CTASection aria-labelledby="cta-title">
        <CTATitle id="cta-title">
          Ready to Get Started?
        </CTATitle>
        <p>
          Explore our comprehensive accessibility services and discover how we can 
          help create an inclusive digital experience for everyone.
        </p>
        <CTAButton 
          onClick={handleGetStarted}
          aria-describedby="cta-description"
        >
          Explore Services
        </CTAButton>
        <p id="cta-description" className="sr-only">
          Navigate to the services page to explore our accessibility features
        </p>
      </CTASection>
    </HomePageContainer>
  );
};

export default HomePage;
