import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["app/immutable/nodes/0.Nw5wlCz3.js","app/immutable/chunks/B2QSKqcC.js","app/immutable/chunks/BSeVQmyM.js"];
export const stylesheets = [];
export const fonts = [];
