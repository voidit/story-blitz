export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "app",
	appPath: "app",
	assets: new Set(["data/prompts.json","favicon.png","styles.css"]),
	mimeTypes: {".json":"application/json",".png":"image/png",".css":"text/css"},
	_: {
		client: {start:"app/immutable/entry/start.DJPets2I.js",app:"app/immutable/entry/app.CDP4JFQ9.js",imports:["app/immutable/entry/start.DJPets2I.js","app/immutable/chunks/Btp9mkx8.js","app/immutable/chunks/B2QSKqcC.js","app/immutable/entry/app.CDP4JFQ9.js","app/immutable/chunks/B2QSKqcC.js","app/immutable/chunks/C_fMD25V.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
