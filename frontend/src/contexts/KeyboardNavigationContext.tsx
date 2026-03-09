import React, { createContext, useContext, useState, useCallback } from 'react';

interface KeyboardNavigationContextType {
  isKeyboardUser: boolean;
  setIsKeyboardUser: (isKeyboard: boolean) => void;
  navigateFocus: (direction: 'next' | 'previous') => void;
}

const KeyboardNavigationContext = createContext<KeyboardNavigationContextType | undefined>(undefined);

export const useKeyboardNavigation = () => {
  const context = useContext(KeyboardNavigationContext);
  if (context === undefined) {
    throw new Error('useKeyboardNavigation must be used within a KeyboardNavigationProvider');
  }
  return context;
};

interface KeyboardNavigationProviderProps {
  children: React.ReactNode;
}

export const KeyboardNavigationProvider: React.FC<KeyboardNavigationProviderProps> = ({ children }) => {
  const [isKeyboardUser, setIsKeyboardUser] = useState(false);

  const navigateFocus = useCallback((direction: 'next' | 'previous') => {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const currentIndex = Array.from(focusableElements).indexOf(document.activeElement as Element);
    
    let nextIndex;
    if (direction === 'next') {
      nextIndex = (currentIndex + 1) % focusableElements.length;
    } else {
      nextIndex = currentIndex === 0 ? focusableElements.length - 1 : currentIndex - 1;
    }
    
    const nextElement = focusableElements[nextIndex] as HTMLElement;
    if (nextElement) {
      nextElement.focus();
    }
  }, []);

  const value: KeyboardNavigationContextType = {
    isKeyboardUser,
    setIsKeyboardUser,
    navigateFocus
  };

  return (
    <KeyboardNavigationContext.Provider value={value}>
      {children}
    </KeyboardNavigationContext.Provider>
  );
};
