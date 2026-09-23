/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        // Surfaces — warm, faintly green-tinted light backgrounds.
        surface: {
          DEFAULT: '#F7F9F4',
          alt: '#ECF1E6',    // alternating sections
          white: '#FFFFFF',  // cards on surface
        },
        // Text — deep green-black scale.
        ink: {
          DEFAULT: '#14211A', // headings, primary text
          soft: '#47594E',    // body copy
          faint: '#8A9A8F',   // labels, captions
        },
        // Primary accent — deep evergreen (crew uniforms, bins, rig).
        accent: {
          DEFAULT: '#2E5E4E',
          light: '#E4F0E9',   // tints, selected states
          dark: '#234A3D',    // hovers
        },
        // Secondary accent — high-visibility safety amber.
        hi: {
          DEFAULT: '#E8A317',
          light: '#FBF3DF',
          dark: '#C4870E',
        },
        // Tertiary neutral.
        neutral: '#7D8C82',
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 4px 24px rgba(20, 33, 26, 0.06)',
        lift: '0 8px 32px rgba(20, 33, 26, 0.08)',
      },
    },
  },
  plugins: [],
};
