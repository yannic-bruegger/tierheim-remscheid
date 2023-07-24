import adapter from '@sveltejs/adapter-static';
import {
	vitePreprocess
} from '@sveltejs/kit/vite';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			fallback: 'index.html',
			precompress: false,
		}),
		paths: { assets: "/tierheim-remscheid", base: "/tierheim-remscheid" },
	}
};

export default config;
