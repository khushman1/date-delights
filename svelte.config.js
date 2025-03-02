import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			strict: false, // Re-enable strict: false
			pages: 'docs',
			assets: 'docs/static',
			fallback: 'index.html',
			precompress: false
		}),
		paths: {
			base: '/date-delights'
		},
		prerender: {
			handleHttpError: 'warn'
		}
	}
};

export default config;
