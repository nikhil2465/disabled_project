// Screen reader announcement utility
export const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite'): void => {
  const announcement = document.createElement('div');
  announcement.setAttribute('aria-live', priority);
  announcement.setAttribute('aria-atomic', 'true');
  announcement.className = 'sr-only';
  announcement.textContent = message;

  document.body.appendChild(announcement);

  // Remove after announcement to prevent screen reader clutter
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
};

// Focus management utilities
export const trapFocus = (container: HTMLElement): (() => void) => {
  const focusableElements = container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  ) as NodeListOf<HTMLElement>;

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);

  // Focus first element
  if (firstElement) {
    firstElement.focus();
  }

  // Return cleanup function
  return () => {
    container.removeEventListener('keydown', handleTabKey);
  };
};

// Keyboard navigation utilities
export const handleKeyboardNavigation = (
  event: KeyboardEvent,
  callbacks: {
    onEnter?: () => void;
    onSpace?: () => void;
    onEscape?: () => void;
    onArrowUp?: () => void;
    onArrowDown?: () => void;
    onArrowLeft?: () => void;
    onArrowRight?: () => void;
    onHome?: () => void;
    onEnd?: () => void;
  }
): void => {
  switch (event.key) {
    case 'Enter':
      event.preventDefault();
      callbacks.onEnter?.();
      break;
    case ' ':
    case 'Spacebar':
      event.preventDefault();
      callbacks.onSpace?.();
      break;
    case 'Escape':
      event.preventDefault();
      callbacks.onEscape?.();
      break;
    case 'ArrowUp':
      event.preventDefault();
      callbacks.onArrowUp?.();
      break;
    case 'ArrowDown':
      event.preventDefault();
      callbacks.onArrowDown?.();
      break;
    case 'ArrowLeft':
      event.preventDefault();
      callbacks.onArrowLeft?.();
      break;
    case 'ArrowRight':
      event.preventDefault();
      callbacks.onArrowRight?.();
      break;
    case 'Home':
      event.preventDefault();
      callbacks.onHome?.();
      break;
    case 'End':
      event.preventDefault();
      callbacks.onEnd?.();
      break;
  }
};

// Color contrast utilities
export const getContrastRatio = (color1: string, color2: string): number => {
  const getLuminance = (color: string): number => {
    const rgb = color.match(/\d+/g);
    if (!rgb) return 0;

    const [r, g, b] = rgb.map(val => {
      const normalized = parseInt(val) / 255;
      return normalized <= 0.03928
        ? normalized / 12.92
        : Math.pow((normalized + 0.055) / 1.055, 2.4);
    });

    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);

  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);

  return (brightest + 0.05) / (darkest + 0.05);
};

export const meetsWCAG = (contrastRatio: number, level: 'AA' | 'AAA', size: 'normal' | 'large'): boolean => {
  const requirements = {
    AA: { normal: 4.5, large: 3.0 },
    AAA: { normal: 7.0, large: 4.5 },
  };

  return contrastRatio >= requirements[level][size];
};

// Accessibility testing utilities
export const checkAccessibility = async (element: HTMLElement): Promise<string[]> => {
  const issues: string[] = [];

  // Check for alt text on images
  const images = element.querySelectorAll('img');
  images.forEach((img, index) => {
    if (!img.alt) {
      issues.push(`Image ${index + 1} is missing alt text`);
    }
  });

  // Check for proper heading hierarchy
  const headings = element.querySelectorAll('h1, h2, h3, h4, h5, h6');
  let lastLevel = 0;
  headings.forEach(heading => {
    const currentLevel = parseInt(heading.tagName.charAt(1));
    if (currentLevel > lastLevel + 1) {
      issues.push(`Heading level skipped: h${lastLevel} to h${currentLevel}`);
    }
    lastLevel = currentLevel;
  });

  // Check for form labels
  const inputs = element.querySelectorAll('input, select, textarea');
  inputs.forEach((input, index) => {
    const hasLabel = element.querySelector(`label[for="${input.id}"]`) || 
                    input.getAttribute('aria-label') || 
                    input.getAttribute('aria-labelledby');
    
    if (!hasLabel) {
      issues.push(`Input ${index + 1} is missing a label`);
    }
  });

  // Check for ARIA roles
  const interactiveElements = element.querySelectorAll('button, a, input, select, textarea');
  interactiveElements.forEach(element => {
    if (element.tabIndex >= 0 && !element.getAttribute('role')) {
      // This is a simplified check - in reality, you'd want more sophisticated logic
      console.log('Consider adding appropriate ARIA role to interactive element');
    }
  });

  return issues;
};

// Reduced motion detection
export const prefersReducedMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// High contrast detection
export const prefersHighContrast = (): boolean => {
  return window.matchMedia('(prefers-contrast: high)').matches;
};

// Screen reader detection (heuristic)
export const isScreenReaderActive = (): boolean => {
  // This is a heuristic - screen reader detection is not perfect
  return (
    window.navigator.userAgent.includes('NVDA') ||
    window.navigator.userAgent.includes('JAWS') ||
    window.navigator.userAgent.includes('VoiceOver') ||
    window.speechSynthesis !== undefined
  );
};

// Text scaling utilities
export const getCurrentTextScale = (): number => {
  const baseFontSize = 16; // Base font size in pixels
  const computedFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
  return computedFontSize / baseFontSize;
};

export const isTextScaled = (): boolean => {
  return getCurrentTextScale() >= 1.2; // 20% increase threshold
};

// Touch target size utilities
export const getTouchTargetSize = (element: HTMLElement): { width: number; height: number } => {
  const rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
  };
};

export const meetsTouchTargetSize = (element: HTMLElement): boolean => {
  const { width, height } = getTouchTargetSize(element);
  return width >= 44 && height >= 44; // WCAG minimum 44x44px
};

// Language detection
export const getDocumentLanguage = (): string => {
  return document.documentElement.lang || 'en';
};

export const isValidLanguageCode = (langCode: string): boolean => {
  return /^[a-z]{2}(-[A-Z]{2})?$/.test(langCode);
};

// Skip link utilities
export const createSkipLinks = (): HTMLElement[] => {
  const skipLinks: HTMLElement[] = [];
  
  const targets = [
    { id: 'main-content', text: 'Skip to main content' },
    { id: 'main-navigation', text: 'Skip to navigation' },
    { id: 'search-input', text: 'Skip to search' },
  ];

  targets.forEach(target => {
    const element = document.getElementById(target.id);
    if (element) {
      const skipLink = document.createElement('a');
      skipLink.href = `#${target.id}`;
      skipLink.textContent = target.text;
      skipLink.className = 'skip-link';
      skipLinks.push(skipLink);
    }
  });

  return skipLinks;
};
