export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "app",
	appPath: "app",
	assets: new Set(["CNAME","data/prompts.json","favicon.png","styles.css"]),
	mimeTypes: {".json":"application/json",".png":"image/png",".css":"text/css"},
	_: {
		client: {start:"app/immutable/entry/start.NXSqVCog.js",app:"app/immutable/entry/app.Bn9xivEb.js",imports:["app/immutable/entry/start.NXSqVCog.js","app/immutable/chunks/BPgS13-t.js","app/immutable/chunks/BuafDj9_.js","app/immutable/entry/app.Bn9xivEb.js","app/immutable/chunks/BuafDj9_.js","app/immutable/chunks/CSimxX-B.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
