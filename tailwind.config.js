/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'background-light': '#E8E8E8',
      'background-dark': '#1C1C1C',
      'color-primary-100': '#FFF9D4',
      'color-primary-200': '#FFF0A9',
      'color-primary-300': '#FFE67E',
      'color-primary-400': '#FFDC5E',
      'color-primary-500': '#FFCC29',
      'color-primary-600': '#DBA91D',
      'color-primary-700': '#B78814',
      'color-primary-800': '#93690D',
      'color-primary-900': '#7A5307',
      'color-secondary-100': '#FEE6CD',
      'color-secondary-200': '#FEC69B',
      'color-secondary-300': '#FE9E69',
      'color-secondary-400': '#FD7844',
      'color-secondary-500': '#FD3A07',
      'color-secondary-600': '#D92105',
      'color-secondary-700': '#B60E03',
      'color-secondary-800': '#920204',
      'color-secondary-900': '#79010B',
      'color-neutral-100': '#E8E8E8',
      'color-neutral-200': '#CFCFCF',
      'color-neutral-300': '#B5B5B5',
      'color-neutral-400': '#9C9C9C',
      'color-neutral-500': '#828282',
      'color-neutral-600': '#696969',
      'color-neutral-700': '#4F4F4F',
      'color-neutral-800': '#363636',
      'color-neutral-900': '#1C1C1C',
      'color-success-100': '#ECFDD5',
      'color-success-200': '#D5FCAC',
      'color-success-300': '#B5F681',
      'color-success-400': '#96ED60',
      'color-success-500': '#68E22F',
      'color-success-600': '#4AC222',
      'color-success-700': '#31A217',
      'color-success-800': '#1D830E',
      'color-success-900': '#0E6C09',
      'color-info-100': '#E8EDFF',
      'color-info-200': '#D1DAFF',
      'color-info-300': '#BBC7FF',
      'color-info-400': '#AAB8FF',
      'color-info-500': '#8E9FFF',
      'color-info-600': '#6777DB',
      'color-info-700': '#4754B7',
      'color-info-800': '#2D3793',
      'color-info-900': '#1B237A',
      'color-warning-100': '#FEFDCD',
      'color-warning-200': '#FEFB9C',
      'color-warning-300': '#FDF76A',
      'color-warning-400': '#FBF345',
      'color-warning-500': '#F9ED09',
      'color-warning-600': '#D6CA06',
      'color-warning-700': '#B3A804',
      'color-warning-800': '#908702',
      'color-warning-900': '#776F01',
      'color-danger-100': '#FFDFDA',
      'color-danger-200': '#FFB9B5',
      'color-danger-300': '#FF9095',
      'color-danger-400': '#FF7587',
      'color-danger-500': '#FF4772',
      'color-danger-600': '#DB336B',
      'color-danger-700': '#B72362',
      'color-danger-800': '#931658',
      'color-danger-900': '#7A0D50',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
