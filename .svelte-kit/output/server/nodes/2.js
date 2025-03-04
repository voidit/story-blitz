

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["app/immutable/nodes/2.CaTJmL7L.js","app/immutable/chunks/B2QSKqcC.js","app/immutable/chunks/CGIUej4z.js"];
export const stylesheets = ["app/immutable/assets/2.BeI4sgpQ.css"];
export const fonts = [];
