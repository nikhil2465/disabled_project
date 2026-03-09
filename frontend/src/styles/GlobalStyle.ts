import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* CSS Reset and Accessibility Base Styles */
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    line-height: 1.5;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  /* High Contrast Mode Support */
  @media (prefers-contrast: high) {
    body {
      background-color: black;
      color: white;
    }
  }

  /* Reduced Motion Support */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Focus Styles */
  :focus {
    outline: 3px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 2px;
  }

  :focus:not(:focus-visible) {
    outline: none;
  }

  :focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 2px;
  }

  /* Skip Links */
  .skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    padding: 8px;
    text-decoration: none;
    border-radius: 4px;
    z-index: 1000;
    font-weight: bold;
  }

  .skip-link:focus {
    top: 6px;
  }

  /* Screen Reader Only Text */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* Not Screen Reader Only (for showing hidden content) */
  .not-sr-only {
    position: static;
    width: auto;
    height: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    clip: auto;
    white-space: normal;
  }

  /* Heading Hierarchy */
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: 700;
    line-height: 1.3;
  }

  h1 {
    font-size: 2.5rem; /* 40px */
  }

  h2 {
    font-size: 2rem; /* 32px */
  }

  h3 {
    font-size: 1.75rem; /* 28px */
  }

  h4 {
    font-size: 1.5rem; /* 24px */
  }

  h5 {
    font-size: 1.25rem; /* 20px */
  }

  h6 {
    font-size: 1.125rem; /* 18px */
  }

  /* Links */
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 2px;
  }

  a:hover,
  a:focus {
    color: ${({ theme }) => theme.colors.primaryHover};
    text-decoration-thickness: 3px;
  }

  a:visited {
    color: ${({ theme }) => theme.colors.primaryVisited};
  }

  /* Form Elements */
  button,
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: transparent;
  }

  input,
  select,
  textarea {
    border: 2px solid ${({ theme }) => theme.colors.border};
    border-radius: 4px;
    padding: 8px 12px;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  input:focus,
  select:focus,
  textarea:focus {
    border-color: ${({ theme }) => theme.colors.focus};
    outline: none;
  }

  /* Error States */
  input[aria-invalid="true"],
  select[aria-invalid="true"],
  textarea[aria-invalid="true"] {
    border-color: ${({ theme }) => theme.colors.error};
  }

  /* Disabled States */
  button:disabled,
  input:disabled,
  select:disabled,
  textarea:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* Lists */
  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  /* Images */
  img {
    max-width: 100%;
    height: auto;
  }

  /* Tables */
  table {
    border-collapse: collapse;
    width: 100%;
  }

  th,
  td {
    padding: 8px 12px;
    text-align: left;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }

  th {
    font-weight: 700;
    background-color: ${({ theme }) => theme.colors.headerBackground};
  }

  /* Landmarks */
  [role="banner"],
  [role="navigation"],
  [role="main"],
  [role="contentinfo"],
  [role="search"],
  [role="complementary"] {
    outline: 2px dotted transparent;
  }

  [role="banner"]:focus,
  [role="navigation"]:focus,
  [role="main"]:focus,
  [role="contentinfo"]:focus,
  [role="search"]:focus,
  [role="complementary"]:focus {
    outline-color: ${({ theme }) => theme.colors.focus};
  }

  /* Print Styles */
  @media print {
    * {
      background: white !important;
      color: black !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }

    a,
    a:visited {
      text-decoration: underline;
    }

    a[href]:after {
      content: " (" attr(href) ")";
    }

    abbr[title]:after {
      content: " (" attr(title) ")";
    }

    pre,
    blockquote {
      border: 1px solid #999;
      page-break-inside: avoid;
    }

    thead {
      display: table-header-group;
    }

    tr,
    img {
      page-break-inside: avoid;
    }

    img {
      max-width: 100% !important;
    }

    p,
    h2,
    h3 {
      orphans: 3;
      widows: 3;
    }

    h2,
    h3 {
      page-break-after: avoid;
    }
  }
`;

export default GlobalStyle;
