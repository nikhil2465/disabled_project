import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useScreenReader } from '../../contexts/ScreenReaderContext';
import { announceToScreenReader, prefersReducedMotion, prefersHighContrast } from '../../utils/accessibility';

const AccessibilityContainer = styled.div`
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

const PageHeader = styled.header`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.xxl};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text};
`;

const PageDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.spacing.xxl};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const SettingsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const SettingCard = styled.section`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 2px solid transparent;
  transition: border-color 0.2s ease;

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const SettingTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};
`;

const SettingDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const SettingControl = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ToggleSwitch = styled.button<{ isActive: boolean }>`
  position: relative;
  width: 60px;
  height: 32px;
  background: ${({ isActive, theme }) => 
    isActive ? theme.colors.success : theme.colors.border
  };
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  padding: 2px;

  &:focus {
    outline: 3px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const ToggleSwitchThumb = styled.span<{ isActive: boolean }>`
  position: absolute;
  top: 2px;
  left: ${({ isActive }) => isActive ? '28px' : '2px'};
  width: 24px;
  height: 24px;
  background: white;
  border-radius: 50%;
  transition: left 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const SelectControl = styled.select`
  padding: ${({ theme }) => theme.spacing.md};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  min-height: 44px;
  min-width: 44px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.focus};
    outline: none;
  }
`;

const RangeControl = styled.input`
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: ${({ theme }) => theme.colors.border};
  outline: none;
  margin: ${({ theme }) => theme.spacing.md} 0;

  &:focus {
    outline: 3px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 2px;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    min-height: 44px;
    min-width: 44px;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.primary};
    cursor: pointer;
    border: none;
    min-height: 44px;
    min-width: 44px;
  }
`;

const Label = styled.label`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  display: block;
`;

const ValueDisplay = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.textSecondary};
  min-width: 60px;
  text-align: center;
`;

const TestSection = styled.section`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const TestButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 44px;
  min-width: 44px;
  margin-right: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.primaryHover};
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

const AccessibilityPage: React.FC = () => {
  const { announce, isEnabled: screenReaderEnabled, toggleScreenReader } = useScreenReader();
  
  const [settings, setSettings] = useState({
    screenReader: false,
    highContrast: prefersHighContrast(),
    reducedMotion: prefersReducedMotion(),
    fontSize: 16,
    lineHeight: 1.5,
    letterSpacing: 0,
    wordSpacing: 0,
    focusVisible: true,
    announcements: true,
    keyboardShortcuts: true,
    autoScroll: false,
    imageDescriptions: true,
    videoCaptions: true,
    audioDescriptions: true,
  });

  useEffect(() => {
    announceToScreenReader('Accessibility settings page loaded. Customize your accessibility preferences.');
  }, [announce]);

  const handleSettingChange = (key: keyof typeof settings, value: any): void => {
    setSettings(prev => ({ ...prev, [key]: value }));
    announceToScreenReader(`${key} changed to ${value}`);
  };

  const handleToggle = (key: keyof typeof settings): void => {
    const newValue = !settings[key];
    handleSettingChange(key, newValue);
    
    // Apply settings immediately
    if (key === 'highContrast') {
      document.body.classList.toggle('high-contrast', newValue);
    }
    if (key === 'reducedMotion') {
      document.body.classList.toggle('reduced-motion', newValue);
    }
  };

  const handleFontSizeChange = (size: number): void => {
    handleSettingChange('fontSize', size);
    document.documentElement.style.fontSize = `${size}px`;
  };

  const handleTestScreenReader = (): void => {
    announceToScreenReader('This is a test announcement. The screen reader is working correctly.');
  };

  const handleTestKeyboard = (): void => {
    announceToScreenReader('Keyboard navigation test. Use Tab key to navigate through elements.');
  };

  const handleTestFocus = (): void => {
    announceToScreenReader('Focus indicator test. Look for visible focus outlines on interactive elements.');
  };

  const handleResetSettings = (): void => {
    setSettings({
      screenReader: false,
      highContrast: prefersHighContrast(),
      reducedMotion: prefersReducedMotion(),
      fontSize: 16,
      lineHeight: 1.5,
      letterSpacing: 0,
      wordSpacing: 0,
      focusVisible: true,
      announcements: true,
      keyboardShortcuts: true,
      autoScroll: false,
      imageDescriptions: true,
      videoCaptions: true,
      audioDescriptions: true,
    });
    
    // Reset document styles
    document.documentElement.style.fontSize = '16px';
    document.documentElement.style.lineHeight = '1.5';
    document.documentElement.style.letterSpacing = '0px';
    document.documentElement.style.wordSpacing = '0px';
    
    announceToScreenReader('Accessibility settings have been reset to default values.');
  };

  return (
    <AccessibilityContainer role="main">
      <PageHeader>
        <PageTitle>Accessibility Settings</PageTitle>
        <PageDescription>
          Customize your accessibility experience with these personalized settings. 
          All changes are applied immediately and saved for your next visit.
        </PageDescription>
      </PageHeader>

      <SettingsGrid>
        <SettingCard aria-labelledby="screen-reader-title">
          <SettingTitle id="screen-reader-title">Screen Reader</SettingTitle>
          <SettingDescription>
            Enable screen reader support for improved navigation and content reading.
          </SettingDescription>
          
          <SettingControl>
            <Label htmlFor="screen-reader-toggle">Enable Screen Reader</Label>
            <ToggleSwitch
              id="screen-reader-toggle"
              isActive={settings.screenReader}
              onClick={() => handleToggle('screenReader')}
              aria-pressed={settings.screenReader}
              aria-describedby="screen-reader-description"
            >
              <ToggleSwitchThumb isActive={settings.screenReader} />
            </ToggleSwitch>
          </SettingControl>
          <p id="screen-reader-description" className="sr-only">
            Toggle screen reader support on or off
          </p>
          
          <SettingControl>
            <Label htmlFor="announcements-toggle">Screen Reader Announcements</Label>
            <ToggleSwitch
              id="announcements-toggle"
              isActive={settings.announcements}
              onClick={() => handleToggle('announcements')}
              aria-pressed={settings.announcements}
            >
              <ToggleSwitchThumb isActive={settings.announcements} />
            </ToggleSwitch>
          </SettingControl>
        </SettingCard>

        <SettingCard aria-labelledby="visual-title">
          <SettingTitle id="visual-title">Visual Settings</SettingTitle>
          <SettingDescription>
            Adjust visual appearance for better readability and comfort.
          </SettingDescription>
          
          <SettingControl>
            <Label htmlFor="high-contrast-toggle">High Contrast Mode</Label>
            <ToggleSwitch
              id="high-contrast-toggle"
              isActive={settings.highContrast}
              onClick={() => handleToggle('highContrast')}
              aria-pressed={settings.highContrast}
            >
              <ToggleSwitchThumb isActive={settings.highContrast} />
            </ToggleSwitch>
          </SettingControl>
          
          <SettingControl>
            <Label htmlFor="font-size-select">Font Size: {settings.fontSize}px</Label>
            <RangeControl
              id="font-size-select"
              type="range"
              min="12"
              max="24"
              value={settings.fontSize}
              onChange={(e) => handleFontSizeChange(Number(e.target.value))}
              aria-valuenow={settings.fontSize}
              aria-valuemin={12}
              aria-valuemax={24}
              aria-label={`Font size ${settings.fontSize} pixels`}
            />
          </SettingControl>
          
          <SettingControl>
            <Label htmlFor="line-height-select">Line Height: {settings.lineHeight}</Label>
            <RangeControl
              id="line-height-select"
              type="range"
              min="1"
              max="2"
              step="0.1"
              value={settings.lineHeight}
              onChange={(e) => handleSettingChange('lineHeight', Number(e.target.value))}
              aria-valuenow={settings.lineHeight}
              aria-valuemin={1}
              aria-valuemax={2}
              aria-label={`Line height ${settings.lineHeight}`}
            />
          </SettingControl>
        </SettingCard>

        <SettingCard aria-labelledby="motion-title">
          <SettingTitle id="motion-title">Motion & Animation</SettingTitle>
          <SettingDescription>
            Control animations and motion for reduced motion sensitivity.
          </SettingDescription>
          
          <SettingControl>
            <Label htmlFor="reduced-motion-toggle">Reduced Motion</Label>
            <ToggleSwitch
              id="reduced-motion-toggle"
              isActive={settings.reducedMotion}
              onClick={() => handleToggle('reducedMotion')}
              aria-pressed={settings.reducedMotion}
            >
              <ToggleSwitchThumb isActive={settings.reducedMotion} />
            </ToggleSwitch>
          </SettingControl>
          
          <SettingControl>
            <Label htmlFor="auto-scroll-toggle">Auto-scroll</Label>
            <ToggleSwitch
              id="auto-scroll-toggle"
              isActive={settings.autoScroll}
              onClick={() => handleToggle('autoScroll')}
              aria-pressed={settings.autoScroll}
            >
              <ToggleSwitchThumb isActive={settings.autoScroll} />
            </ToggleSwitch>
          </SettingControl>
        </SettingCard>

        <SettingCard aria-labelledby="interaction-title">
          <SettingTitle id="interaction-title">Interaction</SettingTitle>
          <SettingDescription>
            Customize how you interact with the interface.
          </SettingDescription>
          
          <SettingControl>
            <Label htmlFor="focus-visible-toggle">Focus Indicators</Label>
            <ToggleSwitch
              id="focus-visible-toggle"
              isActive={settings.focusVisible}
              onClick={() => handleToggle('focusVisible')}
              aria-pressed={settings.focusVisible}
            >
              <ToggleSwitchThumb isActive={settings.focusVisible} />
            </ToggleSwitch>
          </SettingControl>
          
          <SettingControl>
            <Label htmlFor="keyboard-shortcuts-toggle">Keyboard Shortcuts</Label>
            <ToggleSwitch
              id="keyboard-shortcuts-toggle"
              isActive={settings.keyboardShortcuts}
              onClick={() => handleToggle('keyboardShortcuts')}
              aria-pressed={settings.keyboardShortcuts}
            >
              <ToggleSwitchThumb isActive={settings.keyboardShortcuts} />
            </ToggleSwitch>
          </SettingControl>
        </SettingCard>

        <SettingCard aria-labelledby="media-title">
          <SettingTitle id="media-title">Media Accessibility</SettingTitle>
          <SettingDescription>
            Configure accessibility options for images and videos.
          </SettingDescription>
          
          <SettingControl>
            <Label htmlFor="image-descriptions-toggle">Image Descriptions</Label>
            <ToggleSwitch
              id="image-descriptions-toggle"
              isActive={settings.imageDescriptions}
              onClick={() => handleToggle('imageDescriptions')}
              aria-pressed={settings.imageDescriptions}
            >
              <ToggleSwitchThumb isActive={settings.imageDescriptions} />
            </ToggleSwitch>
          </SettingControl>
          
          <SettingControl>
            <Label htmlFor="video-captions-toggle">Video Captions</Label>
            <ToggleSwitch
              id="video-captions-toggle"
              isActive={settings.videoCaptions}
              onClick={() => handleToggle('videoCaptions')}
              aria-pressed={settings.videoCaptions}
            >
              <ToggleSwitchThumb isActive={settings.videoCaptions} />
            </ToggleSwitch>
          </SettingControl>
          
          <SettingControl>
            <Label htmlFor="audio-descriptions-toggle">Audio Descriptions</Label>
            <ToggleSwitch
              id="audio-descriptions-toggle"
              isActive={settings.audioDescriptions}
              onClick={() => handleToggle('audioDescriptions')}
              aria-pressed={settings.audioDescriptions}
            >
              <ToggleSwitchThumb isActive={settings.audioDescriptions} />
            </ToggleSwitch>
          </SettingControl>
        </SettingCard>
      </SettingsGrid>

      <TestSection aria-labelledby="test-title">
        <SettingTitle id="test-title">Test Accessibility Features</SettingTitle>
        <SettingDescription>
          Test your accessibility settings to ensure they work as expected.
        </SettingDescription>
        
        <div>
          <TestButton onClick={handleTestScreenReader}>
            Test Screen Reader
          </TestButton>
          <TestButton onClick={handleTestKeyboard}>
            Test Keyboard Navigation
          </TestButton>
          <TestButton onClick={handleTestFocus}>
            Test Focus Indicators
          </TestButton>
          <TestButton onClick={handleResetSettings}>
            Reset to Defaults
          </TestButton>
        </div>
      </TestSection>
    </AccessibilityContainer>
  );
};

export default AccessibilityPage;
