/**
 * Application Constants
 * URLs, breakpoints, global configurations
 */

// Social media links
export const SOCIAL_LINKS = {
  github: 'https://github.com/BAASprogrammer',
  linkedin: 'https://linkedin.com/in/baassprogrammer',
  twitter: 'https://twitter.com/baassprogrammer',
  email: 'barbara@example.com',
} as const;

// Project URLs
export const PROJECTS = {
  agendaApp: 'https://agenda-app-kappa.vercel.app/',
  guitarStore: 'https://guitar-store-react-js.vercel.app/',
  municipalidad: 'https://municipalidad-x.vercel.app/',
} as const;

// Section IDs
export const SECTION_IDS = {
  about: 'about',
  skills: 'skills',
  experience: 'experience',
  projects: 'projects',
  contact: 'contact',
} as const;

// Breakpoints (must match tailwind.config.js)
export const BREAKPOINTS = {
  xs: 360,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// Environment variables
export const ENV = {
  formspreeId: import.meta.env.VITE_FORMSPREE_ID || '',
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
} as const;
