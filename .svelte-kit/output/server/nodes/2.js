

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["app/immutable/nodes/2.-ubjVZkG.js","app/immutable/chunks/B2QSKqcC.js","app/immutable/chunks/C_fMD25V.js"];
export const stylesheets = ["app/immutable/assets/2.xtW7T6Dp.css"];
export const fonts = [];
