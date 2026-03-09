import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { announceToScreenReader } from '../../utils/accessibility';

const NotFoundContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

const ErrorCode = styled.h1`
  font-size: 6rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 0 ${({ theme }) => theme.spacing.lg} 0;
  line-height: 1;
`;

const ErrorTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.xxl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  margin: 0 0 ${({ theme }) => theme.spacing.md} 0;
  color: ${({ theme }) => theme.colors.text};
`;

const ErrorDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0 0 ${({ theme }) => theme.spacing.xl} 0;
  max-width: 600px;
`;

const HomeButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
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

const NotFoundPage: React.FC = () => {
  React.useEffect(() => {
    announceToScreenReader('Page not found. Error 404. The page you are looking for does not exist.');
  }, []);

  return (
    <NotFoundContainer role="main">
      <ErrorCode>404</ErrorCode>
      <ErrorTitle>Page Not Found</ErrorTitle>
      <ErrorDescription>
        We're sorry, but the page you are looking for doesn't exist or has been moved. 
        Please check the URL or return to the homepage to continue browsing.
      </ErrorDescription>
      <HomeButton to="/" aria-label="Return to homepage">
        Go to Homepage
      </HomeButton>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
