

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["app/immutable/nodes/2.DyMPCu8T.js","app/immutable/chunks/B2QSKqcC.js","app/immutable/chunks/BSeVQmyM.js"];
export const stylesheets = [];
export const fonts = [];
