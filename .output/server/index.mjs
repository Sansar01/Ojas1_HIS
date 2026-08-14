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
	"/assets/AppLayout-x7TZ9xUn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"be88-ig0BFnw4RzOhwyRmphoWxLFl0rQ\"",
		"mtime": "2026-08-12T08:02:31.176Z",
		"size": 48776,
		"path": "../public/assets/AppLayout-x7TZ9xUn.js"
	},
	"/assets/appointments-Dgo5ajgA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2506-p09E5XsLjTDGKEmw3nNEa9LM0MI\"",
		"mtime": "2026-08-12T08:02:31.191Z",
		"size": 9478,
		"path": "../public/assets/appointments-Dgo5ajgA.js"
	},
	"/assets/auth-CRzH69JE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2e7e-Gw5q4uX0gSU/bDjhip1RlKbMX0g\"",
		"mtime": "2026-08-12T08:02:31.194Z",
		"size": 11902,
		"path": "../public/assets/auth-CRzH69JE.js"
	},
	"/assets/billing-0Pe6h2qY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2cd7-KTOUo1OjjvwIv36GtCDYuC3NfG4\"",
		"mtime": "2026-08-12T08:02:31.196Z",
		"size": 11479,
		"path": "../public/assets/billing-0Pe6h2qY.js"
	},
	"/assets/camera-B63Cru7O.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"150-adncMs07pMisBdRGemzbfmvoiXI\"",
		"mtime": "2026-08-12T08:02:31.199Z",
		"size": 336,
		"path": "../public/assets/camera-B63Cru7O.js"
	},
	"/assets/change-password-CC4_Xw0O.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1893-MkPZLOjjl5RxCzbrLiYeBpuzAek\"",
		"mtime": "2026-08-12T08:02:31.203Z",
		"size": 6291,
		"path": "../public/assets/change-password-CC4_Xw0O.js"
	},
	"/assets/circle-alert-DaPe1FjS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fa-qeGysnba0mm3DY6htP8M3QjJ30M\"",
		"mtime": "2026-08-12T08:02:31.205Z",
		"size": 250,
		"path": "../public/assets/circle-alert-DaPe1FjS.js"
	},
	"/assets/circle-check-B8_KDfYz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b2-PaE57dl1L2vi5V/k3XI9D3pwfDo\"",
		"mtime": "2026-08-12T08:02:31.207Z",
		"size": 178,
		"path": "../public/assets/circle-check-B8_KDfYz.js"
	},
	"/assets/clock-cvWCFENs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a9-LuA4FApg1tpuDS+DezR0ExLqRDs\"",
		"mtime": "2026-08-12T08:02:31.210Z",
		"size": 169,
		"path": "../public/assets/clock-cvWCFENs.js"
	},
	"/assets/configurations-hmmNbOOI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ca2-JV92Vfsxksc3YmFE90LS9A7OT+I\"",
		"mtime": "2026-08-12T08:02:31.213Z",
		"size": 3234,
		"path": "../public/assets/configurations-hmmNbOOI.js"
	},
	"/assets/consultation-LImFyFkn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b9e-2eVfGEoHWZVpXPSaCtdQlkYTeSI\"",
		"mtime": "2026-08-12T08:02:31.215Z",
		"size": 7070,
		"path": "../public/assets/consultation-LImFyFkn.js"
	},
	"/assets/createLucideIcon-CYyYTezv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4d0-oyGQtZohFtAdW/4bVAdjw8yXT20\"",
		"mtime": "2026-08-12T08:02:31.225Z",
		"size": 1232,
		"path": "../public/assets/createLucideIcon-CYyYTezv.js"
	},
	"/assets/heart-XBKJzS6v.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"102-iwzkKkE2xenrOHJvVyzS8i4ShaQ\"",
		"mtime": "2026-08-12T08:02:31.228Z",
		"size": 258,
		"path": "../public/assets/heart-XBKJzS6v.js"
	},
	"/assets/id-card-DYUaZK19.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"143-tA10O7w/v+VHb6/4ActQR8akp3Q\"",
		"mtime": "2026-08-12T08:02:31.232Z",
		"size": 323,
		"path": "../public/assets/id-card-DYUaZK19.js"
	},
	"/assets/key-round-DQf7ineL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"163-RP46hkaZjXAXB3Qx5TXkX4DxOqo\"",
		"mtime": "2026-08-12T08:02:31.237Z",
		"size": 355,
		"path": "../public/assets/key-round-DQf7ineL.js"
	},
	"/assets/Kpi-B7fzN02H.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"49e-eQfAYkUeUS6+7jurUoVXnXjBTYw\"",
		"mtime": "2026-08-12T08:02:31.180Z",
		"size": 1182,
		"path": "../public/assets/Kpi-B7fzN02H.js"
	},
	"/assets/index-Coex0Xfg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4156a-69S2RJObQWtoLlNZJsJxGod+RwY\"",
		"mtime": "2026-08-12T08:02:31.174Z",
		"size": 267626,
		"path": "../public/assets/index-Coex0Xfg.js"
	},
	"/assets/lab-Dgns0537.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"701-5ni1+Svkkau+CFJvThxdB0TyH7k\"",
		"mtime": "2026-08-12T08:02:31.246Z",
		"size": 1793,
		"path": "../public/assets/lab-Dgns0537.js"
	},
	"/assets/log-in-BBeV8hIT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e7-nY7gcrRGaQNWx1/wRTh/eqQubq4\"",
		"mtime": "2026-08-12T08:02:31.248Z",
		"size": 231,
		"path": "../public/assets/log-in-BBeV8hIT.js"
	},
	"/assets/login-C6qpHWLn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c60-W8vwWaHtl4OBqxxAKTDPwCZuqPk\"",
		"mtime": "2026-08-12T08:02:31.252Z",
		"size": 3168,
		"path": "../public/assets/login-C6qpHWLn.js"
	},
	"/assets/master-DpMKumoI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7c3-3plf+HyQmED7YHXcSpiOQMp2LJA\"",
		"mtime": "2026-08-12T08:02:31.254Z",
		"size": 42947,
		"path": "../public/assets/master-DpMKumoI.js"
	},
	"/assets/Match-D3SkUO7z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"128d7-8lfUw1YOMbmI2Kj+zjxMT9i/oDY\"",
		"mtime": "2026-08-12T08:02:31.189Z",
		"size": 75991,
		"path": "../public/assets/Match-D3SkUO7z.js"
	},
	"/assets/patients-2md8H1f3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"80e-fOxkh0mbEbB7tB38qeEHLs34zV8\"",
		"mtime": "2026-08-12T08:02:31.257Z",
		"size": 2062,
		"path": "../public/assets/patients-2md8H1f3.js"
	},
	"/assets/pharmacy-D2NpUyHf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6de-RcT1BzO/2OGPN93SZ74VqQjVRdY\"",
		"mtime": "2026-08-12T08:02:31.257Z",
		"size": 1758,
		"path": "../public/assets/pharmacy-D2NpUyHf.js"
	},
	"/assets/phone-BcNM8S35.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"142-kc0vvcr9/Rs///4GQRZF/2h3kWo\"",
		"mtime": "2026-08-12T08:02:31.257Z",
		"size": 322,
		"path": "../public/assets/phone-BcNM8S35.js"
	},
	"/assets/queue-DhuXo7LH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2f5c-GsSlludAfzWWfJcV02eXq/efw6A\"",
		"mtime": "2026-08-12T08:02:31.257Z",
		"size": 12124,
		"path": "../public/assets/queue-DhuXo7LH.js"
	},
	"/assets/registration-CKa2WaCi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3706-EoRPvpFwzGxUAYyIUVxoMVLoZpE\"",
		"mtime": "2026-08-12T08:02:31.257Z",
		"size": 14086,
		"path": "../public/assets/registration-CKa2WaCi.js"
	},
	"/assets/reports-BOaFTh8h.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7cd-nuaf49Y2sILqF+S5YQgTXFlU0Ok\"",
		"mtime": "2026-08-12T08:02:31.257Z",
		"size": 1997,
		"path": "../public/assets/reports-BOaFTh8h.js"
	},
	"/assets/rolldown-runtime-Bh1tDfsg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"237-RWMfWL++Hyx/oSoFmTJgBJkEveY\"",
		"mtime": "2026-08-12T08:02:31.272Z",
		"size": 567,
		"path": "../public/assets/rolldown-runtime-Bh1tDfsg.js"
	},
	"/assets/routes-Y6XIGUu2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c05-p0bwgE97YPtV3wRnofGOIYF1c7Q\"",
		"mtime": "2026-08-12T08:02:31.272Z",
		"size": 7173,
		"path": "../public/assets/routes-Y6XIGUu2.js"
	},
	"/assets/shield-C5OnjqqB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"110-PAmumV/ZBNQi13HVekVDW8jbROs\"",
		"mtime": "2026-08-12T08:02:31.272Z",
		"size": 272,
		"path": "../public/assets/shield-C5OnjqqB.js"
	},
	"/assets/teleconsultation-BSYeM0vw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4104-yD6E3Wc4SoQwpbE5HOSjQWOR0Ks\"",
		"mtime": "2026-08-12T08:02:31.272Z",
		"size": 16644,
		"path": "../public/assets/teleconsultation-BSYeM0vw.js"
	},
	"/assets/styles-C6_M6R2-.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"15b85-lMf2VOdsWWXyoYRQzGku1fDRtvs\"",
		"mtime": "2026-08-12T08:02:31.301Z",
		"size": 88965,
		"path": "../public/assets/styles-C6_M6R2-.css"
	},
	"/assets/trending-up-U9UA98WF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"af-Ww8cBTJ29htwAaAypkyJY46tvYY\"",
		"mtime": "2026-08-12T08:02:31.272Z",
		"size": 175,
		"path": "../public/assets/trending-up-U9UA98WF.js"
	},
	"/assets/useApiResource-B4231qiR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2313-earWraw5h1Aw+deO0WTrBQ4Cs2o\"",
		"mtime": "2026-08-12T08:02:31.272Z",
		"size": 8979,
		"path": "../public/assets/useApiResource-B4231qiR.js"
	},
	"/assets/user-management-D-egXJgx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7637-R7CGc97RdeVCq4LyS+VjWIdagk8\"",
		"mtime": "2026-08-12T08:02:31.289Z",
		"size": 30263,
		"path": "../public/assets/user-management-D-egXJgx.js"
	},
	"/assets/user-management-users-ByshYB6q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9ac-9bcDG/O8Ap6+KgowXxHbO8jTOhw\"",
		"mtime": "2026-08-12T08:02:31.293Z",
		"size": 2476,
		"path": "../public/assets/user-management-users-ByshYB6q.js"
	},
	"/assets/user-uWaBTeu7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c4-vZ4CLEQQejpfdkQavp92fJochDY\"",
		"mtime": "2026-08-12T08:02:31.295Z",
		"size": 196,
		"path": "../public/assets/user-uWaBTeu7.js"
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
var _lazy_GPzZAA = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_GPzZAA
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
