import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$components: path.resolve("./src/components"),
			$routes: path.resolve("./src/routes"),
			$styles: path.resolve("./src/styles"),
			$data: path.resolve("./src/data"),
			$static: path.resolve("./static"),
			$lib: path.resolve("./src/lib"),
			$svg: path.resolve("./src/svg")
		}
	}
});