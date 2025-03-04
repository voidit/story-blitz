

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["app/immutable/nodes/1.C8Xo5ZQB.js","app/immutable/chunks/B2QSKqcC.js","app/immutable/chunks/DmuDJF2h.js","app/immutable/chunks/_SAXS5Ep.js"];
export const stylesheets = [];
export const fonts = [];
