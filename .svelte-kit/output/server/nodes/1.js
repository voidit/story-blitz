

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["app/immutable/nodes/1.BuN0gZ3w.js","app/immutable/chunks/B2QSKqcC.js","app/immutable/chunks/BSeVQmyM.js","app/immutable/chunks/Z7BMQ1jb.js"];
export const stylesheets = [];
export const fonts = [];
