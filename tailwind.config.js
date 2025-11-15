/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
        'source-code-pro': ['Source Code Pro', 'monospace'],
      },
      colors: {
        paper: {
          // Light theme - Minimal Warm (from Paper Recolor Plan)
          light: {
            bg: {
              primary: '#fcfbf9',
              secondary: '#f8f7f4', 
              elevated: '#f4f3f0',
            },
            text: {
              primary: '#1a1917',
              secondary: '#4a4945',
              muted: '#6b6a66',
              subtle: '#9c9b96',
            },
            border: {
              light: '#f0efeb',
              medium: '#e8e6e0', 
              strong: '#d6d3d1',
            }
          },
          // Dark theme - Black Paper (from Paper Recolor Plan)
          dark: {
            bg: {
              primary: '#0a0a0a',
              secondary: '#1a1a1a',
              elevated: '#242424',
            },
            text: {
              primary: '#f8f8f8',
              secondary: '#d4d4d4',
              muted: '#a8a8a8',
              subtle: '#6b6b6b',
            },
            border: {
              light: '#2a2a2a',
              medium: '#383838',
              strong: '#4a4a4a',
            }
          }
        }
      }
    },
  },
  plugins: [],
}