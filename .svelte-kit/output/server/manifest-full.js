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
		client: {start:"app/immutable/entry/start.Rk6FC925.js",app:"app/immutable/entry/app.BMtorpY9.js",imports:["app/immutable/entry/start.Rk6FC925.js","app/immutable/chunks/Z7BMQ1jb.js","app/immutable/chunks/B2QSKqcC.js","app/immutable/entry/app.BMtorpY9.js","app/immutable/chunks/B2QSKqcC.js","app/immutable/chunks/BSeVQmyM.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
