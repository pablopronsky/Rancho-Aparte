/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  'purple-light': '#ffe2dd',
		  'purple-medium': '#FFC5BA',
		  'purple-dark': '#FF9878',
		  'pink-dark' : '#C3909C',
		  'brown-title' : '#997865',
		  'light-background': '#fffbf5',
		  'orange-light': '#FFD699',
		  'orange-medium': '#FF9933',
		  'orange-dark': '#CC6600',
		  'orange-accent': '#EFB1A5',
		  'darker-text' : '#2a282a',
		},
		keyframes: {
			wiggle: {
			  '0%, 100%': { transform: 'rotate(-3deg)' },
			  '50%': { transform: 'rotate(3deg)' },
			},
		  },
		  animation: {
			wiggle: 'wiggle 1s ease-in-out infinite',
		  },
	  },
	},
	plugins: [],
  }