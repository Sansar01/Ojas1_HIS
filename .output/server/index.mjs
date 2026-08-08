globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-08-08T05:26:53.611Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/assets/api-Po7yPvhk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4eb-fiUzv+RKw07l+ek3dk8nACBe5/4\"",
		"mtime": "2026-08-08T06:53:21.500Z",
		"size": 1259,
		"path": "../public/assets/api-Po7yPvhk.js"
	},
	"/assets/AppLayout-1m__cFxR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3da2-5GDokasVAzR1nEzaYrtC1nOJUEc\"",
		"mtime": "2026-08-08T06:53:21.456Z",
		"size": 15778,
		"path": "../public/assets/AppLayout-1m__cFxR.js"
	},
	"/assets/appointments-BMg72Hpv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2506-BR3cqiQKI8spdAbp3qbFG/z3pJw\"",
		"mtime": "2026-08-08T06:53:21.503Z",
		"size": 9478,
		"path": "../public/assets/appointments-BMg72Hpv.js"
	},
	"/assets/auth-DTWS63k5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"27f1-itOkrcN4cl26JGkq+toiAFwLaSE\"",
		"mtime": "2026-08-08T06:53:21.506Z",
		"size": 10225,
		"path": "../public/assets/auth-DTWS63k5.js"
	},
	"/assets/billing-CsGygcLO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2cd7-wvv98UJZXhxLOwegQmlBwLNSRYQ\"",
		"mtime": "2026-08-08T06:53:21.510Z",
		"size": 11479,
		"path": "../public/assets/billing-CsGygcLO.js"
	},
	"/assets/camera-CPf7LCGN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"150-SXEvwRUSDmwKx5CpCeIb+37gxco\"",
		"mtime": "2026-08-08T06:53:21.523Z",
		"size": 336,
		"path": "../public/assets/camera-CPf7LCGN.js"
	},
	"/assets/change-password-BKvLUMlE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"18bc-H8wna5cclY+rnCMf7qm/5CdF/ho\"",
		"mtime": "2026-08-08T06:53:21.526Z",
		"size": 6332,
		"path": "../public/assets/change-password-BKvLUMlE.js"
	},
	"/assets/circle-alert-BBsM2Wc3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fa-JGVN4acYdGf5qLPyJio+ozvjm+U\"",
		"mtime": "2026-08-08T06:53:21.544Z",
		"size": 250,
		"path": "../public/assets/circle-alert-BBsM2Wc3.js"
	},
	"/assets/circle-check-BGuwg75L.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b2-TOumhxIG9M1CEpoD2oN/yFbTT/Q\"",
		"mtime": "2026-08-08T06:53:21.553Z",
		"size": 178,
		"path": "../public/assets/circle-check-BGuwg75L.js"
	},
	"/assets/clock-CupwYr6y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a9-UfN9XKR36LTgNRtFwN3GDKAw1i0\"",
		"mtime": "2026-08-08T06:53:21.917Z",
		"size": 169,
		"path": "../public/assets/clock-CupwYr6y.js"
	},
	"/assets/configurations-DKc1okOK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c9d-1x+XEVNoFypV1iyI61g9CsVGNqs\"",
		"mtime": "2026-08-08T06:53:22.303Z",
		"size": 3229,
		"path": "../public/assets/configurations-DKc1okOK.js"
	},
	"/assets/consultation-DKdfAZy5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b9e-0rbNPfp077/xmNc4FWAeSF10qK0\"",
		"mtime": "2026-08-08T06:53:22.305Z",
		"size": 7070,
		"path": "../public/assets/consultation-DKdfAZy5.js"
	},
	"/assets/createLucideIcon-CpYySHc-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4d0-U8JkQaZs6NALFsKRQFgDoQTeMZ4\"",
		"mtime": "2026-08-08T06:53:22.308Z",
		"size": 1232,
		"path": "../public/assets/createLucideIcon-CpYySHc-.js"
	},
	"/assets/heart-h4-aCDym.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"102-kCwfjsAobxwxYqFNYpabqEbSvyU\"",
		"mtime": "2026-08-08T06:53:22.312Z",
		"size": 258,
		"path": "../public/assets/heart-h4-aCDym.js"
	},
	"/assets/id-card-D5CrDyV5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"143-XJXM30IR2WNrxdB8spesosbNKsA\"",
		"mtime": "2026-08-08T06:53:22.317Z",
		"size": 323,
		"path": "../public/assets/id-card-D5CrDyV5.js"
	},
	"/assets/index-DgFg-rt0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"415a2-D5ipJtgksLzMGI/uXJZ1hyaYhHc\"",
		"mtime": "2026-08-08T06:53:21.453Z",
		"size": 267682,
		"path": "../public/assets/index-DgFg-rt0.js"
	},
	"/assets/key-round-UKm06S_B.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"163-/KuquCUjRxSiwfPd1Ju3N056eNI\"",
		"mtime": "2026-08-08T06:53:22.320Z",
		"size": 355,
		"path": "../public/assets/key-round-UKm06S_B.js"
	},
	"/assets/Kpi-ChGp9JCn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"49e-tKc/4IRoD/juRhru+T5U9hw3E1M\"",
		"mtime": "2026-08-08T06:53:21.465Z",
		"size": 1182,
		"path": "../public/assets/Kpi-ChGp9JCn.js"
	},
	"/assets/lab-yOctSWtJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"701-xU/9CSEy1GuLbyI5wudLZbdhZbA\"",
		"mtime": "2026-08-08T06:53:22.323Z",
		"size": 1793,
		"path": "../public/assets/lab-yOctSWtJ.js"
	},
	"/assets/log-in-Bz2XlloO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e7-VqT7phz/O0TNF+LcJ+fcgHCHPAA\"",
		"mtime": "2026-08-08T06:53:22.328Z",
		"size": 231,
		"path": "../public/assets/log-in-Bz2XlloO.js"
	},
	"/assets/login-BYfM0w6X.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c7e-5VKk6qPksIJ7UpdHTq/1N5p/dx4\"",
		"mtime": "2026-08-08T06:53:22.332Z",
		"size": 3198,
		"path": "../public/assets/login-BYfM0w6X.js"
	},
	"/assets/master-Cl0W7UGU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7c3-QjpiKuqqEVxqlqaqe58UKbn9vbA\"",
		"mtime": "2026-08-08T06:53:22.353Z",
		"size": 42947,
		"path": "../public/assets/master-Cl0W7UGU.js"
	},
	"/assets/Match-C6ah-vs9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"128d2-m8Jy0CFpdkAXIAJ2fHiDwQARku0\"",
		"mtime": "2026-08-08T06:53:21.491Z",
		"size": 75986,
		"path": "../public/assets/Match-C6ah-vs9.js"
	},
	"/assets/patients-CjdynX80.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"80e-TstWfVeC8xCVNQPLYkWsbMxzcMI\"",
		"mtime": "2026-08-08T06:53:22.357Z",
		"size": 2062,
		"path": "../public/assets/patients-CjdynX80.js"
	},
	"/assets/pharmacy-CUlAUlaE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6de-3+fHA1RUDLHW35bvzAFb6YcJ62w\"",
		"mtime": "2026-08-08T06:53:22.361Z",
		"size": 1758,
		"path": "../public/assets/pharmacy-CUlAUlaE.js"
	},
	"/assets/phone-B9OF9RWe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"142-/jBIM6BccCVOHQmPfJvSPwrEqGg\"",
		"mtime": "2026-08-08T06:53:22.363Z",
		"size": 322,
		"path": "../public/assets/phone-B9OF9RWe.js"
	},
	"/assets/queue-DV3674Bs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2f5c-BjuwgMvvfiQsmlhUwVXdI7VCwa4\"",
		"mtime": "2026-08-08T06:53:22.368Z",
		"size": 12124,
		"path": "../public/assets/queue-DV3674Bs.js"
	},
	"/assets/registration-DYvjOAlp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3706-ixbmACWTerTj7Wjm0tvSlqgCiPI\"",
		"mtime": "2026-08-08T06:53:22.371Z",
		"size": 14086,
		"path": "../public/assets/registration-DYvjOAlp.js"
	},
	"/assets/reports-CqS5uwf1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7cd-q8ysn++3PeqkudLtE1kwIPCYP1s\"",
		"mtime": "2026-08-08T06:53:22.374Z",
		"size": 1997,
		"path": "../public/assets/reports-CqS5uwf1.js"
	},
	"/assets/rolldown-runtime-Bh1tDfsg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"237-RWMfWL++Hyx/oSoFmTJgBJkEveY\"",
		"mtime": "2026-08-08T06:53:22.377Z",
		"size": 567,
		"path": "../public/assets/rolldown-runtime-Bh1tDfsg.js"
	},
	"/assets/routes-DrunveM9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c02-6+j+uPIHNEeSj7GwIs9YmLKt/DI\"",
		"mtime": "2026-08-08T06:53:22.379Z",
		"size": 7170,
		"path": "../public/assets/routes-DrunveM9.js"
	},
	"/assets/shield-ByGho0-Z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"110-MwFeHtecLro3ZiycGjUuWUuZeFE\"",
		"mtime": "2026-08-08T06:53:22.382Z",
		"size": 272,
		"path": "../public/assets/shield-ByGho0-Z.js"
	},
	"/assets/teleconsultation-B4G5fAfF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4102-u6PtpsFUlmG4Qe8h76wTcRLBHh0\"",
		"mtime": "2026-08-08T06:53:22.385Z",
		"size": 16642,
		"path": "../public/assets/teleconsultation-B4G5fAfF.js"
	},
	"/assets/styles-C6_M6R2-.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"15b85-lMf2VOdsWWXyoYRQzGku1fDRtvs\"",
		"mtime": "2026-08-08T06:53:22.409Z",
		"size": 88965,
		"path": "../public/assets/styles-C6_M6R2-.css"
	},
	"/assets/trending-up-c5edgXrL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"af-wc5/piC48q20Vqe9TvbLBvzntSE\"",
		"mtime": "2026-08-08T06:53:22.388Z",
		"size": 175,
		"path": "../public/assets/trending-up-c5edgXrL.js"
	},
	"/assets/useApiResource-BBxc6GOA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2332-Arj/C5+Fubg05YoTVQ69s4bPxJs\"",
		"mtime": "2026-08-08T06:53:22.391Z",
		"size": 9010,
		"path": "../public/assets/useApiResource-BBxc6GOA.js"
	},
	"/assets/user-dj7Ung18.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c4-/gohsdoPo6yUSWt9L1+x74N8ZEU\"",
		"mtime": "2026-08-08T06:53:22.394Z",
		"size": 196,
		"path": "../public/assets/user-dj7Ung18.js"
	},
	"/assets/user-management-TPzu_O6p.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6f7e-VTOrh/0q4Kc6ZNlxGiqfy6xnzz4\"",
		"mtime": "2026-08-08T06:53:22.399Z",
		"size": 28542,
		"path": "../public/assets/user-management-TPzu_O6p.js"
	},
	"/assets/user-management-users-DNHBBwnU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9ac-kB5u1QqXci+z9THisyYD5uF8gsg\"",
		"mtime": "2026-08-08T06:53:22.401Z",
		"size": 2476,
		"path": "../public/assets/user-management-users-DNHBBwnU.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_mhTOAL = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_mhTOAL
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
