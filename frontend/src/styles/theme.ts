import { DefaultTheme } from 'styled-components';

export interface Theme extends DefaultTheme {
  colors: {
    primary: string;
    primaryHover: string;
    primaryVisited: string;
    secondary: string;
    secondaryHover: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    border: string;
    focus: string;
    error: string;
    warning: string;
    success: string;
    info: string;
    headerBackground: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
    wide: string;
  };
  typography: {
    fontFamily: string;
    fontSize: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    fontWeight: {
      light: number;
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
    };
    lineHeight: {
      tight: number;
      normal: number;
      relaxed: number;
    };
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

const baseTheme: Theme = {
  colors: {
    primary: '#0066cc',
    primaryHover: '#0052a3',
    primaryVisited: '#551a8b',
    secondary: '#6c757d',
    secondaryHover: '#545b62',
    background: '#ffffff',
    surface: '#f8f9fa',
    text: '#212529',
    textSecondary: '#6c757d',
    border: '#dee2e6',
    focus: '#0066cc',
    error: '#dc3545',
    warning: '#ffc107',
    success: '#28a745',
    info: '#17a2b8',
    headerBackground: '#f8f9fa',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px',
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      md: '1rem',       // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      xxl: '1.5rem',    // 24px
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  borderRadius: {
    sm: '2px',
    md: '4px',
    lg: '8px',
    xl: '12px',
  },
};

// High Contrast Theme
export const highContrastTheme: Theme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    background: '#000000',
    surface: '#1a1a1a',
    text: '#ffffff',
    textSecondary: '#cccccc',
    border: '#ffffff',
    focus: '#ffff00',
    primary: '#ffffff',
    primaryHover: '#cccccc',
    primaryVisited: '#ccccff',
    error: '#ff0000',
    warning: '#ffff00',
    success: '#00ff00',
    info: '#00ffff',
    headerBackground: '#1a1a1a',
  },
};

// Large Text Theme
export const largeTextTheme: Theme = {
  ...baseTheme,
  typography: {
    ...baseTheme.typography,
    fontSize: {
      xs: '0.9375rem',  // 15px
      sm: '1.0625rem',  // 17px
      md: '1.25rem',    // 20px
      lg: '1.375rem',   // 22px
      xl: '1.5625rem',  // 25px
      xxl: '1.875rem',  // 30px
    },
  },
};

// Dark Theme
export const darkTheme: Theme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    background: '#1a1a1a',
    surface: '#2d2d2d',
    text: '#ffffff',
    textSecondary: '#b3b3b3',
    border: '#404040',
    focus: '#4dabf7',
    primary: '#4dabf7',
    primaryHover: '#339af0',
    primaryVisited: '#9775fa',
    error: '#ff6b6b',
    warning: '#ffd43b',
    success: '#51cf66',
    info: '#74c0fc',
    headerBackground: '#2d2d2d',
  },
};

export default baseTheme;
