

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["app/immutable/nodes/2.BxFhfXmg.js","app/immutable/chunks/BuafDj9_.js","app/immutable/chunks/CSimxX-B.js"];
export const stylesheets = ["app/immutable/assets/2.DtBueIRF.css"];
export const fonts = [];
