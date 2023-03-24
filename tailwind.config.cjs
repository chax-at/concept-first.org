/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	safelist: [
		'list-disc',
		'pl-5',
		'underline',
		'text-indigo-600',
		'text-indigo-400',
		'border-l-4',
		'border-gray-300',
		'text-red-600',
		'bg-red-50',
	],
	theme: {
		extend: {},
	},
	plugins: [],
}
