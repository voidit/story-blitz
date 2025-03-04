import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		appDir: 'app',
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'docs',
			assets: 'docs',
			fallback: '404.html',
			precompress: true,
			strict: true,
			ssr: false,
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		}
	}
};
