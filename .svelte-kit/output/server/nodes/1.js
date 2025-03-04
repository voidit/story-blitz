

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["app/immutable/nodes/1.8TsKiHhR.js","app/immutable/chunks/B2QSKqcC.js","app/immutable/chunks/DmuDJF2h.js","app/immutable/chunks/BdjUpGV6.js"];
export const stylesheets = [];
export const fonts = [];
