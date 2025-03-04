

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["app/immutable/nodes/2.k-l4wpIq.js","app/immutable/chunks/B2QSKqcC.js","app/immutable/chunks/DmuDJF2h.js"];
export const stylesheets = ["app/immutable/assets/2.DaOS7ADp.css"];
export const fonts = [];
