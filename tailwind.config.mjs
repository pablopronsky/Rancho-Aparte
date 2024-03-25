/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  'purple-light': '#EBE5F9',
		  'purple-medium': '#9C88FF',
		  'purple-dark': '#6200EE',
		  'gray-light': '#F4F4F4',
		  'gray-medium': '#A9A9A9',
		  'gray-dark': '#404040',
		},
	  },
	},
	plugins: [],
  }