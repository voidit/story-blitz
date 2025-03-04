

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["app/immutable/nodes/1.WVxKeXC-.js","app/immutable/chunks/B2QSKqcC.js","app/immutable/chunks/C_fMD25V.js","app/immutable/chunks/D4djBhrU.js"];
export const stylesheets = [];
export const fonts = [];
