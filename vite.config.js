import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	// allows vite access to ./posts
	server: {
		fs: {
			allow: ['./']
		}
	}
};

export default config;
