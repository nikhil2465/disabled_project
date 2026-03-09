import React from 'react';
import styled from 'styled-components';

const StyledSkipLink = styled.a`
  position: absolute;
  top: -40px;
  left: 6px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 8px 12px;
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  z-index: 1000;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  transition: top 0.3s ease;

  &:focus {
    top: 6px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
    text-decoration: underline;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

interface SkipLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const SkipLink: React.FC<SkipLinkProps> = ({ href, children, className }) => {
  return (
    <StyledSkipLink href={href} className={className}>
      {children}
    </StyledSkipLink>
  );
};

export default SkipLink;
