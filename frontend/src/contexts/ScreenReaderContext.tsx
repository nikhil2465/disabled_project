import React, { createContext, useContext, useState, useCallback } from 'react';

interface ScreenReaderContextType {
  announce: (message: string) => void;
  isEnabled: boolean;
  toggleEnabled: () => void;
}

const ScreenReaderContext = createContext<ScreenReaderContextType | undefined>(undefined);

export const useScreenReader = () => {
  const context = useContext(ScreenReaderContext);
  if (context === undefined) {
    throw new Error('useScreenReader must be used within a ScreenReaderProvider');
  }
  return context;
};

interface ScreenReaderProviderProps {
  children: React.ReactNode;
}

export const ScreenReaderProvider: React.FC<ScreenReaderProviderProps> = ({ children }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const announce = useCallback((message: string) => {
    if (!isEnabled) return;
    
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }, [isEnabled]);

  const toggleEnabled = useCallback(() => {
    setIsEnabled(prev => !prev);
  }, []);

  const value: ScreenReaderContextType = {
    announce,
    isEnabled,
    toggleEnabled
  };

  return (
    <ScreenReaderContext.Provider value={value}>
      {children}
    </ScreenReaderContext.Provider>
  );
};
