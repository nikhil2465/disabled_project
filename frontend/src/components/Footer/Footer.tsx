import React from 'react';
import styled from 'styled-components';
import { announceToScreenReader } from '../../utils/accessibility';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.surface};
  border-top: 2px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.xl} 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const FooterSection = styled.section`
  margin: 0;
`;

const FooterTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text};
  margin: 0 0 ${({ theme }) => theme.spacing.md} 0;
`;

const FooterList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const FooterListItem = styled.li`
  margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  padding: ${({ theme }) => theme.spacing.xs} 0;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: color 0.2s ease;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.lg} 0;
  text-align: center;
`;

const Copyright = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
`;

const AccessibilityInfo = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (description: string): void => {
    announceToScreenReader(`Opening ${description}`);
  };

  return (
    <FooterContainer role="contentinfo">
      <FooterContent>
        <FooterGrid>
          <FooterSection aria-labelledby="about-title">
            <FooterTitle id="about-title">About</FooterTitle>
            <FooterList>
              <FooterListItem>
                <FooterLink 
                  href="/about" 
                  onClick={() => handleLinkClick('About page')}
                >
                  About Us
                </FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink 
                  href="/mission" 
                  onClick={() => handleLinkClick('Mission page')}
                >
                  Our Mission
                </FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink 
                  href="/team" 
                  onClick={() => handleLinkClick('Team page')}
                >
                  Team
                </FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink 
                  href="/contact" 
                  onClick={() => handleLinkClick('Contact page')}
                >
                  Contact
                </FooterLink>
              </FooterListItem>
            </FooterList>
          </FooterSection>

          <FooterSection aria-labelledby="services-title">
            <FooterTitle id="services-title">Services</FooterTitle>
            <FooterList>
              <FooterListItem>
                <FooterLink 
                  href="/services/screen-reader" 
                  onClick={() => handleLinkClick('Screen reader services')}
                >
                  Screen Reader Support
                </FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink 
                  href="/services/keyboard" 
                  onClick={() => handleLinkClick('Keyboard navigation services')}
                >
                  Keyboard Navigation
                </FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink 
                  href="/services/voice-control" 
                  onClick={() => handleLinkClick('Voice control services')}
                >
                  Voice Control
                </FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink 
                  href="/services/high-contrast" 
                  onClick={() => handleLinkClick('High contrast services')}
                >
                  High Contrast
                </FooterLink>
              </FooterListItem>
            </FooterList>
          </FooterSection>

          <FooterSection aria-labelledby="resources-title">
            <FooterTitle id="resources-title">Resources</FooterTitle>
            <FooterList>
              <FooterListItem>
                <FooterLink 
                  href="/docs/accessibility" 
                  onClick={() => handleLinkClick('Accessibility documentation')}
                >
                  Accessibility Guide
                </FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink 
                  href="/docs/standards" 
                  onClick={() => handleLinkClick('WCAG standards documentation')}
                >
                  WCAG Standards
                </FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink 
                  href="/tutorials" 
                  onClick={() => handleLinkClick('Tutorials page')}
                >
                  Tutorials
                </FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink 
                  href="/blog" 
                  onClick={() => handleLinkClick('Blog page')}
                >
                  Blog
                </FooterLink>
              </FooterListItem>
            </FooterList>
          </FooterSection>

          <FooterSection aria-labelledby="support-title">
            <FooterTitle id="support-title">Support</FooterTitle>
            <FooterList>
              <FooterListItem>
                <FooterLink 
                  href="/help" 
                  onClick={() => handleLinkClick('Help center')}
                >
                  Help Center
                </FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink 
                  href="/faq" 
                  onClick={() => handleLinkClick('FAQ page')}
                >
                  FAQ
                </FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink 
                  href="/feedback" 
                  onClick={() => handleLinkClick('Feedback page')}
                >
                  Feedback
                </FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink 
                  href="/community" 
                  onClick={() => handleLinkClick('Community page')}
                >
                  Community
                </FooterLink>
              </FooterListItem>
            </FooterList>
          </FooterSection>
        </FooterGrid>

        <FooterBottom>
          <Copyright>
            © {currentYear} Global Accessibility Platform. All rights reserved.
          </Copyright>
          <AccessibilityInfo>
            Built with WCAG 2.1 AAA compliance. Committed to universal accessibility.
          </AccessibilityInfo>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
