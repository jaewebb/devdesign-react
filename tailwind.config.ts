import type tailwindcss from 'tailwindcss'

const config: tailwindcss.Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-open-sans)'],
        display: ['var(--font-oxanium)']
      }
    }
  },
  plugins: []
}
export default config
