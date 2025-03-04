

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["app/immutable/nodes/1.CE1i86rz.js","app/immutable/chunks/B2QSKqcC.js","app/immutable/chunks/C_fMD25V.js","app/immutable/chunks/_mfDETSw.js"];
export const stylesheets = [];
export const fonts = [];
