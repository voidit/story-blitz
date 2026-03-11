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
		client: {start:"app/immutable/entry/start.CZUNcIZd.js",app:"app/immutable/entry/app.DZU7dT0I.js",imports:["app/immutable/entry/start.CZUNcIZd.js","app/immutable/chunks/Br9SxUbc.js","app/immutable/chunks/BuafDj9_.js","app/immutable/entry/app.DZU7dT0I.js","app/immutable/chunks/BuafDj9_.js","app/immutable/chunks/CSimxX-B.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
