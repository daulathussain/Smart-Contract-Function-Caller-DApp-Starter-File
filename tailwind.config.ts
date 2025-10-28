import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D0B12',
        secondary: '#BA42EE',
        accent: '#9333EA',
        dark: {
          100: '#1A1825',
          200: '#211F2E',
          300: '#2A2838',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glow': 'radial-gradient(circle at center, rgba(186, 66, 238, 0.3) 0%, transparent 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(186, 66, 238, 0.5), 0 0 10px rgba(186, 66, 238, 0.3)' },
          '100%': { boxShadow: '0 0 10px rgba(186, 66, 238, 0.8), 0 0 20px rgba(186, 66, 238, 0.5)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
