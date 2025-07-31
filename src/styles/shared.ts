import type { CSSProperties } from 'react';

export const colors = {
  primary: '#800020',     // Garnet
  dark: '#2c2c2c',        // Dark text
  gray: '#6e6e6e',        // Muted text
  lightGray: '#d9d9d9',   // Subtle borders
  background: '#f8f9fa',  // Light background
  white: '#fff',
  muted: '#555',
} as const;

export const heroBackgroundStyle: CSSProperties = {
  position: 'relative',
  overflow: 'hidden',
  background: '#fff',
  minHeight: '200px',
};

export const carouselContentStyle: CSSProperties = {
  margin: 0,
  padding: '20px',
  minHeight: '200px',
  color: colors.dark,
  borderRadius: '8px',
  position: 'relative',
  overflow: 'hidden',
  zIndex: 10,
};

export const sectionTitleStyle: CSSProperties = {
  color: colors.primary,
};

export const paragraphStyle: CSSProperties = {
  fontSize: '16px',
  lineHeight: '1.6',
  color: colors.dark,
};

export const primaryButtonStyle: CSSProperties = {
  background: colors.primary,
  border: 'none',
  borderRadius: '8px',
  height: '48px',
  padding: '0 32px',
  fontSize: '16px',
  fontWeight: 'bold',
};

export const secondaryButtonStyle: CSSProperties = {
  borderRadius: '8px',
  height: '48px',
  padding: '0 32px',
  fontSize: '16px',
  fontWeight: 'bold',
  borderColor: colors.primary,
  color: colors.primary,
};
