import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
    vitePreprocess(), 
    mdsvex({
      extensions: ['.md']
    })
  ],
	kit: {
		adapter: adapter({
      // defaults from https://svelte.dev/docs/kit/adapter-static
			pages: 'build',
			assets: 'build',
			fallback: undefined, // TODO: create 404.html
			precompress: false,
			strict: true
    }),
    // serve to the correct Github Page URL
    paths: {
      base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
    }
	},
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
