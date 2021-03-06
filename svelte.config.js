import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: ['.svelte', '.svx'],
	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex({
			layout: './src/layouts/post.svelte'
		})
	],

	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					src: path.resolve('./src/')
				}
			}
		}
	}
};

export default config;
