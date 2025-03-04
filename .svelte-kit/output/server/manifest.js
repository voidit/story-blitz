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
		client: {start:"app/immutable/entry/start.fEeA3Oeh.js",app:"app/immutable/entry/app.XqR-JN6j.js",imports:["app/immutable/entry/start.fEeA3Oeh.js","app/immutable/chunks/xnM_MHQ-.js","app/immutable/chunks/B2QSKqcC.js","app/immutable/entry/app.XqR-JN6j.js","app/immutable/chunks/B2QSKqcC.js","app/immutable/chunks/DmuDJF2h.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
