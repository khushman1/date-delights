import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const base = '/date-delights'; // Hardcoded base path

export default defineConfig({
	plugins: [sveltekit()],
	base: base // Use the hardcoded 'base' variable
});
