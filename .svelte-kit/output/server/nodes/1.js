

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["app/immutable/nodes/1.C80HBBg5.js","app/immutable/chunks/B2QSKqcC.js","app/immutable/chunks/CGIUej4z.js","app/immutable/chunks/MaLFSQVl.js"];
export const stylesheets = [];
export const fonts = [];
