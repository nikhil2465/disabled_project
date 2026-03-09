import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
  padding: 0 ${({ theme }) => theme.spacing.lg};
  position: sticky;
  top: 0;
  z-index: 100;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
`;

const Logo = styled(Link)`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  display: flex;
  align-items: center;
  min-height: 44px;
  min-width: 44px;
  padding: ${({ theme }) => theme.spacing.sm};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primaryHover};
    text-decoration: none;
  }

  &:focus {
    outline: 3px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 2px;
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const NavigationList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: ${({ theme }) => theme.spacing.md};
`;

const NavigationItem = styled.li`
  margin: 0;
`;

const NavigationLink = styled(Link<{ isActive: boolean }>`
  color: ${({ isActive, theme }) => 
    isActive ? theme.colors.primary : theme.colors.text
  };
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  min-height: 44px;
  min-width: 44px;
  display: flex;
  align-items: center;
  transition: all 0.2s ease;
  position: relative;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primaryHover};
    background: ${({ theme }) => theme.colors.surface};
    text-decoration: none;
  }

  &:focus {
    outline: 3px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 2px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: ${({ isActive }) => isActive ? '80%' : '0'};
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    transform: translateX(-50%);
    transition: width 0.2s ease;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const AccessibilityButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  min-height: 44px;
  min-width: 44px;
  transition: all 0.2s ease;

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.primaryHover};
    transform: translateY(-1px);
    text-decoration: none;
  }

  &:focus {
    outline: 3px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const Header: React.FC = () => {
  const location = useLocation();

  const navigationItems = [
    { path: '/', label: 'Home', ariaLabel: 'Navigate to homepage' },
    { path: '/services', label: 'Services', ariaLabel: 'Navigate to services page' },
    { path: '/accessibility', label: 'Accessibility', ariaLabel: 'Navigate to accessibility settings' },
  ];

  const isActiveRoute = (path: string): boolean => {
    return location.pathname === path;
  };

  return (
    <HeaderContainer role="banner">
      <HeaderContent>
        <Logo 
          to="/" 
          aria-label="Accessibility Platform - Home"
        >
          🌍 Accessibility Platform
        </Logo>

        <Navigation role="navigation" aria-label="Main navigation">
          <NavigationList>
            {navigationItems.map((item) => (
              <NavigationItem key={item.path}>
                <NavigationLink
                  to={item.path}
                  isActive={isActiveRoute(item.path)}
                  aria-label={item.ariaLabel}
                  aria-current={isActiveRoute(item.path) ? 'page' : undefined}
                >
                  {item.label}
                </NavigationLink>
              </NavigationItem>
            ))}
          </NavigationList>

          <AccessibilityButton
            to="/accessibility"
            aria-label="Accessibility settings"
          >
            ⚙️ Accessibility
          </AccessibilityButton>
        </Navigation>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
