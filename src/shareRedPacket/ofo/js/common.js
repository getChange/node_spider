!function (e) {
    function t(r) {
        if (n[r])return n[r].exports;
        var o = n[r] = {exports: {}, id: r, loaded: !1};
        return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    }

    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}([function (e, t, n) {
    "use strict";
    var r = n(1), o = n(5), i = n(4), s = n(8);
    n(9);
    var a = n(6);
    n(10);
    var c = n(11);
    n(12);
    var u = n(14), d = n(7);
    window.OFO_ENV = i, window.ofoResponseProxy = o.ofoResponseProxy, window.ofoHandleDeepLink = o.handleLink, window.sendDebug = a, window.getOfoToken = s, window.tip = c, window.saTrackCompat = r, window.Cookies = d, document.addEventListener("DOMContentLoaded", function () {
        u.FastClick.attach(document.body)
    })
}, function (e, t, n) {
    "use strict";
    var r = n(2), o = n(4), i = n(5), s = {}, a = function (e, t, n) {
        var a = {};
        a[t] = n, o.ofoAppVersionGte("1.8.8", 11850) ? i.ofoResponseProxy("trackEvent", [e, t, n]) : (a.Source = o.sourceForSa, Object.keys(s).forEach(function (e) {
            a[e] = s[e]
        }), r.track(e, a))
    }, c = function (e, t) {
        console.warn("Event " + e + " dropped. Use new methods instead.")
    };
    c.view = function (e, t) {
        a(e.trim().replace(/\-/g, "_").replace(/\./g, ""), "View", t)
    }, c.click = function (e, t) {
        a(e.trim().replace(/\-/g, "_").replace(/\./g, ""), "Click", t)
    }, c.addGlobal = function (e, t) {
        s[e] = t
    }, o.currentEnv === o.ENV.WEBAPP_ITSELF ? window.alert("bridgedSensorAnalytics used improperly!") : o.currentEnv === o.ENV.INSIDE_NEW_IOS_APP || o.currentEnv === o.ENV.INSIDE_NEW_ANDROID_APP ? r.getAppStatus(function (e) {
        r.identify(e.distinct_id), Object.keys(e).filter(function (e) {
            return "distinct_id" !== e
        }).forEach(function (t) {
            s[t] = e[t]
        }), console.log("Initialized app_info with (app) ", s), r.quick("autoTrack")
    }) : o.currentEnv === o.ENV.INSIDE_WEBAPP && (s = o.iframingAncestorWhichIsWebApp.getSaInfoForFrameContent(), console.log("Initialized app_info with (web) ", s), r.quick("autoTrack")), e.exports = c
}, function (e, t, n) {
    e.exports = function (e) {
        var t = e.name;
        return window.sensorsDataAnalytic201505 = t, window[t] = {_q: [], para: e}, window[t]
    }({sdk_url: "/common/sensorsdata.sdk.js", name: "sa", server_url: "https://scofo.ofo.so:8443/sa"}), n(3)
}, function (module, exports) {
    try {
        !function (sd) {
            function app_js_bridge() {
                function e(e) {
                    r = e, _.isJSONString(r) && (r = JSON.parse(r)), o && o(r)
                }

                function t() {
                    "object" == typeof window.SensorsData_APP_JS_Bridge && window.SensorsData_APP_JS_Bridge.sensorsdata_call_app && (r = SensorsData_APP_JS_Bridge.sensorsdata_call_app(), _.isJSONString(r) && (r = JSON.parse(r)))
                }

                function n() {
                    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
                        var e = document.createElement("iframe");
                        e.setAttribute("src", "sensorsanalytics://getAppInfo"), document.documentElement.appendChild(e), e.parentNode.removeChild(e), e = null
                    }
                }

                var r = null, o = null;
                window.sensorsdata_app_js_bridge_call_js = function (t) {
                    e(t)
                }, sd.getAppStatus = function (e) {
                    return n(), t(), e ? void(null === r ? o = e : e(r)) : r
                }
            }

            function start_heatmap() {
            }

            if (sd = window[sd], "function" != typeof sd && "object" != typeof sd || sd.has_load_sdk)return !1;
            sd._t = sd._t || 1 * new Date, sd.has_load_sdk = !0, "object" != typeof JSON && (JSON = {}), function () {
                "use strict";
                function f(e) {
                    return 10 > e ? "0" + e : e
                }

                function this_value() {
                    return this.valueOf()
                }

                function quote(e) {
                    return rx_escapable.lastIndex = 0, rx_escapable.test(e) ? '"' + e.replace(rx_escapable, function (e) {
                        var t = meta[e];
                        return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                    }) + '"' : '"' + e + '"'
                }

                function str(e, t) {
                    var n, r, o, i, s, a = gap, c = t[e];
                    switch (c && "object" == typeof c && "function" == typeof c.toJSON && (c = c.toJSON(e)), "function" == typeof rep && (c = rep.call(t, e, c)), typeof c) {
                        case"string":
                            return quote(c);
                        case"number":
                            return isFinite(c) ? String(c) : "null";
                        case"boolean":
                        case"null":
                            return String(c);
                        case"object":
                            if (!c)return "null";
                            if (gap += indent, s = [], "[object Array]" === Object.prototype.toString.apply(c)) {
                                for (i = c.length, n = 0; i > n; n += 1)s[n] = str(n, c) || "null";
                                return o = 0 === s.length ? "[]" : gap ? "[\n" + gap + s.join(",\n" + gap) + "\n" + a + "]" : "[" + s.join(",") + "]", gap = a, o
                            }
                            if (rep && "object" == typeof rep)for (i = rep.length, n = 0; i > n; n += 1)"string" == typeof rep[n] && (r = rep[n], o = str(r, c), o && s.push(quote(r) + (gap ? ": " : ":") + o)); else for (r in c)Object.prototype.hasOwnProperty.call(c, r) && (o = str(r, c), o && s.push(quote(r) + (gap ? ": " : ":") + o));
                            return o = 0 === s.length ? "{}" : gap ? "{\n" + gap + s.join(",\n" + gap) + "\n" + a + "}" : "{" + s.join(",") + "}", gap = a, o
                    }
                }

                var rx_one = /^[\],:{}\s]*$/, rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, rx_four = /(?:^|:|,)(?:\s*\[)+/g, rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
                "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
                    return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
                }, Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value);
                var gap, indent, meta, rep;
                "function" != typeof JSON.stringify && (meta = {
                    "\b": "\\b",
                    "\t": "\\t",
                    "\n": "\\n",
                    "\f": "\\f",
                    "\r": "\\r",
                    '"': '\\"',
                    "\\": "\\\\"
                }, JSON.stringify = function (e, t, n) {
                    var r;
                    if (gap = "", indent = "", "number" == typeof n)for (r = 0; n > r; r += 1)indent += " "; else"string" == typeof n && (indent = n);
                    if (rep = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length))throw new Error("JSON.stringify");
                    return str("", {"": e})
                }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
                    function walk(e, t) {
                        var n, r, o = e[t];
                        if (o && "object" == typeof o)for (n in o)Object.prototype.hasOwnProperty.call(o, n) && (r = walk(o, n), void 0 !== r ? o[n] = r : delete o[n]);
                        return reviver.call(e, t, o)
                    }

                    var j;
                    if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function (e) {
                            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                        })), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, "")))return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({"": j}, "") : j;
                    throw new SyntaxError("JSON.parse")
                })
            }();
            var _ = sd._ = {};
            sd.para = sd.para || {}, sd.para_default = {
                max_referrer_string_length: 500,
                max_string_length: 1e3,
                cross_subdomain: !0,
                show_log: !0,
                debug_mode: !1,
                debug_mode_upload: !1,
                session_time: 0,
                use_client_time: !1,
                source_channel: [],
                vtrack_ignore: {},
                auto_init: !0
            };
            for (var i in sd.para_default)void 0 === sd.para[i] && (sd.para[i] = sd.para_default[i]);
            /sa\.gif[^\/]*$/.test(sd.para.server_url) || (sd.para.server_url = sd.para.server_url.replace(/\/sa$/, "/sa.gif").replace(/(\/sa)(\?[^\/]+)$/, "/sa.gif$2")), sd.para.debug_mode_url = sd.para.debug_mode_url || sd.para.server_url.replace("sa.gif", "debug"), sd.para.noCache === !0 ? sd.para.noCache = "?" + (new Date).getTime() : sd.para.noCache = "";
            var detector = {};
            !function () {
                function e(e) {
                    return Object.prototype.toString.call(e)
                }

                function t(t) {
                    return "[object Object]" === e(t)
                }

                function n(t) {
                    return "[object Function]" === e(t)
                }

                function r(e, t) {
                    for (var n = 0, r = e.length; r > n && t.call(e, e[n], n) !== !1; n++);
                }

                function o(e) {
                    if (!g.test(e))return null;
                    var t, n, r, o, i;
                    if (-1 !== e.indexOf("trident/") && (t = /\btrident\/([0-9.]+)/.exec(e), t && t.length >= 2)) {
                        r = t[1];
                        var s = t[1].split(".");
                        s[0] = parseInt(s[0], 10) + 4, i = s.join(".")
                    }
                    t = g.exec(e), o = t[1];
                    var a = t[1].split(".");
                    return "undefined" == typeof i && (i = o), a[0] = parseInt(a[0], 10) - 4, n = a.join("."), "undefined" == typeof r && (r = n), {
                        browserVersion: i,
                        browserMode: o,
                        engineVersion: r,
                        engineMode: n,
                        compatible: r !== n
                    }
                }

                function i(e) {
                    if (d)try {
                        var t = d.twGetRunPath.toLowerCase(), n = d.twGetSecurityID(u), r = d.twGetVersion(n);
                        if (t && -1 === t.indexOf(e))return !1;
                        if (r)return {version: r}
                    } catch (o) {
                    }
                }

                function s(r, o, i) {
                    var s = n(o) ? o.call(null, i) : o;
                    if (!s)return null;
                    var a = {name: r, version: c, codename: ""}, u = e(s);
                    if (s === !0)return a;
                    if ("[object String]" === u) {
                        if (-1 !== i.indexOf(s))return a
                    } else {
                        if (t(s))return s.hasOwnProperty("version") && (a.version = s.version), a;
                        if (s.exec) {
                            var d = s.exec(i);
                            if (d)return d.length >= 2 && d[1] ? a.version = d[1].replace(/_/g, ".") : a.version = c, a
                        }
                    }
                }

                function a(e, t, n, o) {
                    var i = S;
                    r(t, function (t) {
                        var n = s(t[0], t[1], e);
                        return n ? (i = n, !1) : void 0
                    }), n.call(o, i.name, i.version)
                }

                var c = "-1", u = window, d = u.external, l = u.navigator.userAgent || "", f = u.navigator.appVersion || "", p = u.navigator.vendor || "", g = /\b(?:msie |ie |trident\/[0-9].*rv[ :])([0-9.]+)/, h = /\bbb10\b.+?\bversion\/([\d.]+)/, _ = /\bblackberry\b.+\bversion\/([\d.]+)/, m = /\bblackberry\d+\/([\d.]+)/, v = [["nokia", function (e) {
                    return -1 !== e.indexOf("nokia ") ? /\bnokia ([0-9]+)?/ : /\bnokia([a-z0-9]+)?/
                }], ["samsung", function (e) {
                    return -1 !== e.indexOf("samsung") ? /\bsamsung(?:[ \-](?:sgh|gt|sm))?-([a-z0-9]+)/ : /\b(?:sgh|sch|gt|sm)-([a-z0-9]+)/
                }], ["wp", function (e) {
                    return -1 !== e.indexOf("windows phone ") || -1 !== e.indexOf("xblwp") || -1 !== e.indexOf("zunewp") || -1 !== e.indexOf("windows ce")
                }], ["pc", "windows"], ["ipad", "ipad"], ["ipod", "ipod"], ["iphone", /\biphone\b|\biph(\d)/], ["mac", "macintosh"], ["mi", /\bmi[ \-]?([a-z0-9 ]+(?= build|\)))/], ["hongmi", /\bhm[ \-]?([a-z0-9]+)/], ["aliyun", /\baliyunos\b(?:[\-](\d+))?/], ["meizu", function (e) {
                    return e.indexOf("meizu") >= 0 ? /\bmeizu[\/ ]([a-z0-9]+)\b/ : /\bm([0-9cx]{1,4})\b/
                }], ["nexus", /\bnexus ([0-9s.]+)/], ["huawei", function (e) {
                    var t = /\bmediapad (.+?)(?= build\/huaweimediapad\b)/;
                    return -1 !== e.indexOf("huawei-huawei") ? /\bhuawei\-huawei\-([a-z0-9\-]+)/ : t.test(e) ? t : /\bhuawei[ _\-]?([a-z0-9]+)/
                }], ["lenovo", function (e) {
                    return -1 !== e.indexOf("lenovo-lenovo") ? /\blenovo\-lenovo[ \-]([a-z0-9]+)/ : /\blenovo[ \-]?([a-z0-9]+)/
                }], ["zte", function (e) {
                    return /\bzte\-[tu]/.test(e) ? /\bzte-[tu][ _\-]?([a-su-z0-9\+]+)/ : /\bzte[ _\-]?([a-su-z0-9\+]+)/
                }], ["vivo", /\bvivo(?: ([a-z0-9]+))?/], ["htc", function (e) {
                    return /\bhtc[a-z0-9 _\-]+(?= build\b)/.test(e) ? /\bhtc[ _\-]?([a-z0-9 ]+(?= build))/ : /\bhtc[ _\-]?([a-z0-9 ]+)/
                }], ["oppo", /\boppo[_]([a-z0-9]+)/], ["konka", /\bkonka[_\-]([a-z0-9]+)/], ["sonyericsson", /\bmt([a-z0-9]+)/], ["coolpad", /\bcoolpad[_ ]?([a-z0-9]+)/], ["lg", /\blg[\-]([a-z0-9]+)/], ["android", /\bandroid\b|\badr\b/], ["blackberry", function (e) {
                    return e.indexOf("blackberry") >= 0 ? /\bblackberry\s?(\d+)/ : "bb10"
                }]], b = [["wp", function (e) {
                    return -1 !== e.indexOf("windows phone ") ? /\bwindows phone (?:os )?([0-9.]+)/ : -1 !== e.indexOf("xblwp") ? /\bxblwp([0-9.]+)/ : -1 !== e.indexOf("zunewp") ? /\bzunewp([0-9.]+)/ : "windows phone"
                }], ["windows", /\bwindows nt ([0-9.]+)/], ["macosx", /\bmac os x ([0-9._]+)/], ["iOS", function (e) {
                    return /\bcpu(?: iphone)? os /.test(e) ? /\bcpu(?: iphone)? os ([0-9._]+)/ : -1 !== e.indexOf("iph os ") ? /\biph os ([0-9_]+)/ : /\bios\b/
                }], ["yunos", /\baliyunos ([0-9.]+)/], ["Android", function (e) {
                    return e.indexOf("android") >= 0 ? /\bandroid[ \/-]?([0-9.x]+)?/ : e.indexOf("adr") >= 0 ? e.indexOf("mqqbrowser") >= 0 ? /\badr[ ]\(linux; u; ([0-9.]+)?/ : /\badr(?:[ ]([0-9.]+))?/ : "android"
                }], ["chromeos", /\bcros i686 ([0-9.]+)/], ["linux", "linux"], ["windowsce", /\bwindows ce(?: ([0-9.]+))?/], ["symbian", /\bsymbian(?:os)?\/([0-9.]+)/], ["blackberry", function (e) {
                    var t = e.match(h) || e.match(_) || e.match(m);
                    return t ? {version: t[1]} : "blackberry"
                }]], w = [["edgehtml", /edge\/([0-9.]+)/], ["trident", g], ["blink", function () {
                    return "chrome" in u && "CSS" in u && /\bapplewebkit[\/]?([0-9.+]+)/
                }], ["webkit", /\bapplewebkit[\/]?([0-9.+]+)/], ["gecko", function (e) {
                    var t;
                    return (t = e.match(/\brv:([\d\w.]+).*\bgecko\/(\d+)/)) ? {version: t[1] + "." + t[2]} : void 0
                }], ["presto", /\bpresto\/([0-9.]+)/], ["androidwebkit", /\bandroidwebkit\/([0-9.]+)/], ["coolpadwebkit", /\bcoolpadwebkit\/([0-9.]+)/], ["u2", /\bu2\/([0-9.]+)/], ["u3", /\bu3\/([0-9.]+)/]], y = [["edge", /edge\/([0-9.]+)/], ["sogou", function (e) {
                    return e.indexOf("sogoumobilebrowser") >= 0 ? /sogoumobilebrowser\/([0-9.]+)/ : e.indexOf("sogoumse") >= 0 || / se ([0-9.x]+)/
                }], ["theworld", function () {
                    var e = i("theworld");
                    return "undefined" != typeof e ? e : "theworld"
                }], ["360", function (e) {
                    var t = i("360se");
                    return "undefined" != typeof t ? t : -1 !== e.indexOf("360 aphone browser") ? /\b360 aphone browser \(([^\)]+)\)/ : /\b360(?:se|ee|chrome|browser)\b/
                }], ["maxthon", function () {
                    try {
                        if (d && (d.mxVersion || d.max_version))return {version: d.mxVersion || d.max_version}
                    } catch (e) {
                    }
                    return /\b(?:maxthon|mxbrowser)(?:[ \/]([0-9.]+))?/
                }], ["micromessenger", /\bmicromessenger\/([\d.]+)/], ["qq", /\bm?qqbrowser\/([0-9.]+)/], ["green", "greenbrowser"], ["tt", /\btencenttraveler ([0-9.]+)/], ["liebao", function (e) {
                    if (e.indexOf("liebaofast") >= 0)return /\bliebaofast\/([0-9.]+)/;
                    if (-1 === e.indexOf("lbbrowser"))return !1;
                    var t;
                    try {
                        d && d.LiebaoGetVersion && (t = d.LiebaoGetVersion())
                    } catch (n) {
                    }
                    return {version: t || c}
                }], ["tao", /\btaobrowser\/([0-9.]+)/], ["coolnovo", /\bcoolnovo\/([0-9.]+)/], ["saayaa", "saayaa"], ["baidu", /\b(?:ba?idubrowser|baiduhd)[ \/]([0-9.x]+)/], ["ie", g], ["mi", /\bmiuibrowser\/([0-9.]+)/], ["opera", function (e) {
                    var t = /\bopera.+version\/([0-9.ab]+)/, n = /\bopr\/([0-9.]+)/;
                    return t.test(e) ? t : n
                }], ["oupeng", /\boupeng\/([0-9.]+)/], ["yandex", /yabrowser\/([0-9.]+)/], ["ali-ap", function (e) {
                    return e.indexOf("aliapp") > 0 ? /\baliapp\(ap\/([0-9.]+)\)/ : /\balipayclient\/([0-9.]+)\b/
                }], ["ali-ap-pd", /\baliapp\(ap-pd\/([0-9.]+)\)/], ["ali-am", /\baliapp\(am\/([0-9.]+)\)/], ["ali-tb", /\baliapp\(tb\/([0-9.]+)\)/], ["ali-tb-pd", /\baliapp\(tb-pd\/([0-9.]+)\)/], ["ali-tm", /\baliapp\(tm\/([0-9.]+)\)/], ["ali-tm-pd", /\baliapp\(tm-pd\/([0-9.]+)\)/], ["uc", function (e) {
                    return e.indexOf("ucbrowser/") >= 0 ? /\bucbrowser\/([0-9.]+)/ : e.indexOf("ubrowser/") >= 0 ? /\bubrowser\/([0-9.]+)/ : /\buc\/[0-9]/.test(e) ? /\buc\/([0-9.]+)/ : e.indexOf("ucweb") >= 0 ? /\bucweb([0-9.]+)?/ : /\b(?:ucbrowser|uc)\b/
                }], ["chrome", / (?:chrome|crios|crmo)\/([0-9.]+)/], ["android", function (e) {
                    return -1 !== e.indexOf("android") ? /\bversion\/([0-9.]+(?: beta)?)/ : void 0
                }], ["blackberry", function (e) {
                    var t = e.match(h) || e.match(_) || e.match(m);
                    return t ? {version: t[1]} : "blackberry"
                }], ["safari", /\bversion\/([0-9.]+(?: beta)?)(?: mobile(?:\/[a-z0-9]+)?)? safari\//], ["webview", /\bcpu(?: iphone)? os (?:[0-9._]+).+\bapplewebkit\b/], ["firefox", /\bfirefox\/([0-9.ab]+)/], ["nokia", /\bnokiabrowser\/([0-9.]+)/]], S = {
                    name: "na",
                    version: c
                }, k = function (e) {
                    e = (e || "").toLowerCase();
                    var t = {};
                    a(e, v, function (e, n) {
                        var r = parseFloat(n);
                        t.device = {name: e, version: r, fullVersion: n}, t.device[e] = r
                    }, t), a(e, b, function (e, n) {
                        var r = parseFloat(n);
                        t.os = {name: e, version: r, fullVersion: n}, t.os[e] = r
                    }, t);
                    var n = o(e);
                    return a(e, w, function (e, r) {
                        var o = r;
                        n && (r = n.engineVersion || n.engineMode, o = n.engineMode);
                        var i = parseFloat(r);
                        t.engine = {
                            name: e,
                            version: i,
                            fullVersion: r,
                            mode: parseFloat(o),
                            fullMode: o,
                            compatible: !!n && n.compatible
                        }, t.engine[e] = i
                    }, t), a(e, y, function (e, r) {
                        var o = r;
                        n && ("ie" === e && (r = n.browserVersion), o = n.browserMode);
                        var i = parseFloat(r);
                        t.browser = {
                            name: e,
                            version: i,
                            fullVersion: r,
                            mode: parseFloat(o),
                            fullMode: o,
                            compatible: !!n && n.compatible
                        }, t.browser[e] = i
                    }, t), t
                };
                detector = k(l + " " + f + " " + p)
            }();
            var ArrayProto = Array.prototype, FuncProto = Function.prototype, ObjProto = Object.prototype, slice = ArrayProto.slice, toString = ObjProto.toString, hasOwnProperty = ObjProto.hasOwnProperty, LIB_VERSION = "1.6.18";
            sd.lib_version = LIB_VERSION;
            var error_msg = [], is_first_visitor = !1, just_test_distinctid = 0, just_test_distinctid_2 = 0, just_test_distinctid_detail = 0, just_test_distinctid_detail2 = 0, source_channel_standard = "utm_source utm_medium utm_campaign utm_content utm_term", logger = "object" == typeof logger ? logger : {};
            logger.info = function () {
                if (!sd.para.show_log)return !1;
                if ("object" == typeof console && console.log)try {
                    return console.log.apply(console, arguments)
                } catch (e) {
                    console.log(arguments[0])
                }
            }, function () {
                var e = (FuncProto.bind, ArrayProto.forEach), t = ArrayProto.indexOf, n = Array.isArray, r = {}, o = _.each = function (t, n, o) {
                    if (null == t)return !1;
                    if (e && t.forEach === e)t.forEach(n, o); else if (t.length === +t.length) {
                        for (var i = 0, s = t.length; s > i; i++)if (i in t && n.call(o, t[i], i, t) === r)return !1
                    } else for (var a in t)if (hasOwnProperty.call(t, a) && n.call(o, t[a], a, t) === r)return !1
                };
                _.logger = logger, _.extend = function (e) {
                    return o(slice.call(arguments, 1), function (t) {
                        for (var n in t)void 0 !== t[n] && (e[n] = t[n])
                    }), e
                }, _.extend2Lev = function (e) {
                    return o(slice.call(arguments, 1), function (t) {
                        for (var n in t)void 0 !== t[n] && (_.isObject(t[n]) && _.isObject(e[n]) ? _.extend(e[n], t[n]) : e[n] = t[n])
                    }), e
                }, _.coverExtend = function (e) {
                    return o(slice.call(arguments, 1), function (t) {
                        for (var n in t)void 0 !== t[n] && void 0 === e[n] && (e[n] = t[n])
                    }), e
                }, _.isArray = n || function (e) {
                        return "[object Array]" === toString.call(e)
                    }, _.isFunction = function (e) {
                    try {
                        return /^\s*\bfunction\b/.test(e)
                    } catch (t) {
                        return !1
                    }
                }, _.isArguments = function (e) {
                    return !(!e || !hasOwnProperty.call(e, "callee"))
                }, _.toArray = function (e) {
                    return e ? e.toArray ? e.toArray() : _.isArray(e) ? slice.call(e) : _.isArguments(e) ? slice.call(e) : _.values(e) : []
                }, _.values = function (e) {
                    var t = [];
                    return null == e ? t : (o(e, function (e) {
                        t[t.length] = e
                    }), t)
                }, _.include = function (e, n) {
                    var i = !1;
                    return null == e ? i : t && e.indexOf === t ? -1 != e.indexOf(n) : (o(e, function (e) {
                        return i || (i = e === n) ? r : void 0
                    }), i)
                }
            }(), _.inherit = function (e, t) {
                return e.prototype = new t, e.prototype.constructor = e, e.superclass = t.prototype, e
            }, _.trim = function (e) {
                return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            }, _.isObject = function (e) {
                return "[object Object]" == toString.call(e) && null != e
            }, _.isEmptyObject = function (e) {
                if (_.isObject(e)) {
                    for (var t in e)if (hasOwnProperty.call(e, t))return !1;
                    return !0
                }
                return !1
            }, _.isUndefined = function (e) {
                return void 0 === e
            }, _.isString = function (e) {
                return "[object String]" == toString.call(e)
            }, _.isDate = function (e) {
                return "[object Date]" == toString.call(e)
            }, _.isBoolean = function (e) {
                return "[object Boolean]" == toString.call(e)
            }, _.isNumber = function (e) {
                return "[object Number]" == toString.call(e) && /[\d\.]+/.test(String(e))
            }, _.isJSONString = function (e) {
                try {
                    JSON.parse(e)
                } catch (t) {
                    return !1
                }
                return !0
            }, _.decodeURIComponent = function (e) {
                var t = "";
                try {
                    t = decodeURIComponent(e)
                } catch (n) {
                    t = e
                }
                return t
            }, _.encodeDates = function (e) {
                return _.each(e, function (t, n) {
                    _.isDate(t) ? e[n] = _.formatDate(t) : _.isObject(t) && (e[n] = _.encodeDates(t))
                }), e
            }, _.formatDate = function (e) {
                function t(e) {
                    return 10 > e ? "0" + e : e
                }

                return e.getFullYear() + "-" + t(e.getMonth() + 1) + "-" + t(e.getDate()) + " " + t(e.getHours()) + ":" + t(e.getMinutes()) + ":" + t(e.getSeconds()) + "." + t(e.getMilliseconds())
            }, _.searchObjDate = function (e) {
                _.isObject(e) && _.each(e, function (t, n) {
                    _.isObject(t) ? _.searchObjDate(e[n]) : _.isDate(t) && (e[n] = _.formatDate(t))
                })
            }, _.formatString = function (e) {
                return e.length > sd.para.max_string_length ? (logger.info("字符串长度超过限制，已经做截取--" + e), e.slice(0, sd.para.max_string_length)) : e
            }, _.searchObjString = function (e) {
                _.isObject(e) && _.each(e, function (t, n) {
                    _.isObject(t) ? _.searchObjString(e[n]) : _.isString(t) && (e[n] = _.formatString(t))
                })
            }, _.unique = function (e) {
                for (var t, n = [], r = {}, o = 0; o < e.length; o++)t = e[o], t in r || (r[t] = !0, n.push(t));
                return n
            }, _.strip_sa_properties = function (e) {
                return _.isObject(e) ? (_.each(e, function (t, n) {
                    if (_.isArray(t)) {
                        var r = [];
                        _.each(t, function (e) {
                            _.isString(e) ? r.push(e) : logger.info("您的数据-", t, "的数组里的值必须是字符串,已经将其删除")
                        }), 0 !== r.length ? e[n] = r : (delete e[n], logger.info("已经删除空的数组"))
                    }
                    _.isString(t) || _.isNumber(t) || _.isDate(t) || _.isBoolean(t) || _.isArray(t) || (logger.info("您的数据-", t, "-格式不满足要求，我们已经将其删除"), delete e[n])
                }), e) : e
            }, _.strip_empty_properties = function (e) {
                var t = {};
                return _.each(e, function (e, n) {
                    null != e && (t[n] = e)
                }), t
            }, _.utf8Encode = function (e) {
                e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
                var t, n, r, o = "", i = 0;
                for (t = n = 0, i = e.length, r = 0; i > r; r++) {
                    var s = e.charCodeAt(r), a = null;
                    128 > s ? n++ : a = s > 127 && 2048 > s ? String.fromCharCode(s >> 6 | 192, 63 & s | 128) : String.fromCharCode(s >> 12 | 224, s >> 6 & 63 | 128, 63 & s | 128), null !== a && (n > t && (o += e.substring(t, n)), o += a, t = n = r + 1)
                }
                return n > t && (o += e.substring(t, e.length)), o
            }, _.detector = detector, _.base64Encode = function (e) {
                var t, n, r, o, i, s, a, c, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", d = 0, l = 0, f = "", p = [];
                if (!e)return e;
                e = _.utf8Encode(e);
                do t = e.charCodeAt(d++), n = e.charCodeAt(d++), r = e.charCodeAt(d++), c = t << 16 | n << 8 | r, o = c >> 18 & 63, i = c >> 12 & 63, s = c >> 6 & 63, a = 63 & c, p[l++] = u.charAt(o) + u.charAt(i) + u.charAt(s) + u.charAt(a); while (d < e.length);
                switch (f = p.join(""), e.length % 3) {
                    case 1:
                        f = f.slice(0, -2) + "==";
                        break;
                    case 2:
                        f = f.slice(0, -1) + "="
                }
                return f
            }, _.UUID = function () {
                var e = function () {
                    for (var e = 1 * new Date, t = 0; e == 1 * new Date;)t++;
                    return e.toString(16) + t.toString(16)
                }, t = function () {
                    return Math.random().toString(16).replace(".", "")
                }, n = function (e) {
                    function t(e, t) {
                        var n, r = 0;
                        for (n = 0; n < t.length; n++)r |= i[n] << 8 * n;
                        return e ^ r
                    }

                    var n, r, o = navigator.userAgent, i = [], s = 0;
                    for (n = 0; n < o.length; n++)r = o.charCodeAt(n), i.unshift(255 & r), i.length >= 4 && (s = t(s, i), i = []);
                    return i.length > 0 && (s = t(s, i)), s.toString(16)
                };
                return function () {
                    var r = String(screen.height * screen.width);
                    r = r && /\d{5,}/.test(r) ? r.toString(16) : String(31242 * Math.random()).replace(".", "").slice(0, 8);
                    var o = e() + "-" + t() + "-" + n() + "-" + r + "-" + e();
                    return o ? (just_test_distinctid_2 = 1, o) : (just_test_distinctid_2 = 2, (String(Math.random()) + String(Math.random()) + String(Math.random())).slice(2, 15))
                }
            }(), _.getQueryParam = function (e, t) {
                t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var n = "[\\?&]" + t + "=([^&#]*)", r = new RegExp(n), o = r.exec(e);
                return null === o || o && "string" != typeof o[1] && o[1].length ? "" : _.decodeURIComponent(o[1]).replace(/\+/g, " ")
            }, _.urlParse = function (e) {
                var t = function (e) {
                    this._fields = {
                        Username: 4,
                        Password: 5,
                        Port: 7,
                        Protocol: 2,
                        Host: 6,
                        Path: 8,
                        URL: 0,
                        QueryString: 9,
                        Fragment: 10
                    }, this._values = {}, this._regex = null, this._regex = /^((\w+):\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/, "undefined" != typeof e && this._parse(e)
                };
                return t.prototype.setUrl = function (e) {
                    this._parse(e)
                }, t.prototype._initValues = function () {
                    for (var e in this._fields)this._values[e] = ""
                }, t.prototype.getUrl = function () {
                    var e = "";
                    return e += this._values.Origin, e += this._values.Port ? ":" + this._values.Port : "", e += this._values.Path, e += this._values.QueryString ? "?" + this._values.QueryString : ""
                }, t.prototype._parse = function (e) {
                    this._initValues();
                    var t = this._regex.exec(e);
                    if (!t)throw"DPURLParser::_parse -> Invalid URL";
                    for (var n in this._fields)"undefined" != typeof t[this._fields[n]] && (this._values[n] = t[this._fields[n]]);
                    this._values.Hostname = this._values.Host.replace(/:\d+$/, ""), this._values.Origin = this._values.Protocol + "://" + this._values.Hostname
                }, new t(e)
            }, _.hasStandardBrowserEnviroment = function () {
                return window ? document ? navigator ? screen ? void 0 : "screen" : "navigator" : "document" : "window"
            }, _.bindReady = function (e) {
                function t() {
                    return !r && (r = !0, void e())
                }

                function n() {
                    if (!r)try {
                        document.documentElement.doScroll("left"), t()
                    } catch (e) {
                        setTimeout(n, 10)
                    }
                }

                var r = !1;
                if (document.addEventListener)document.addEventListener("DOMContentLoaded", t, !1); else if (document.attachEvent) {
                    try {
                        var o = null != window.frameElement
                    } catch (i) {
                    }
                    document.documentElement.doScroll && !o && n(), document.attachEvent("onreadystatechange", function () {
                        "complete" === document.readyState && t()
                    })
                }
                if (window.addEventListener)window.addEventListener("load", t, !1); else if (window.attachEvent)window.attachEvent("onload", t); else {
                    var s = window.onload;
                    window.onload = function () {
                        s && s(), t()
                    }
                }
            }, _.addEvent = function () {
                function e(e, n, r) {
                    var o = function (o) {
                        if (o = o || t(window.event)) {
                            o.target = o.srcElement;
                            var i, s, a = !0;
                            return _.isFunction(r) && (i = r(o)), s = n.call(e, o), (!1 === i || !1 === s) && (a = !1), a
                        }
                    };
                    return o
                }

                function t(e) {
                    return e && (e.preventDefault = t.preventDefault, e.stopPropagation = t.stopPropagation), e
                }

                var n = function (t, n, r) {
                    if (t.addEventListener)t.addEventListener(n, r, !1); else {
                        var o = "on" + n, i = t[o];
                        t[o] = e(t, r, i)
                    }
                };
                t.preventDefault = function () {
                    this.returnValue = !1
                }, t.stopPropagation = function () {
                    this.cancelBubble = !0
                }, n.apply(null, arguments)
            }, _.cookie = {
                get: function (e) {
                    for (var t = e + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
                        for (var o = n[r]; " " == o.charAt(0);)o = o.substring(1, o.length);
                        if (0 == o.indexOf(t))return _.decodeURIComponent(o.substring(t.length, o.length))
                    }
                    return null
                }, set: function (e, t, n, r, o) {
                    r = "undefined" == typeof r ? sd.para.cross_subdomain : r;
                    var i = "", s = "", a = "";
                    if (n = "undefined" == typeof n ? 730 : n, r) {
                        var c = document.location.hostname.match(/[a-z0-9][a-z0-9\-]+\.[a-z\.]{2,6}$/i), u = c ? c[0] : "";
                        i = u ? "; domain=." + u : ""
                    }
                    if (0 !== n) {
                        var d = new Date;
                        "s" === String(n).slice(-1) ? d.setTime(d.getTime() + 1e3 * Number(String(n).slice(0, -1))) : d.setTime(d.getTime() + 24 * n * 60 * 60 * 1e3), s = "; expires=" + d.toGMTString()
                    }
                    o && (a = "; secure"), document.cookie = e + "=" + encodeURIComponent(t) + s + "; path=/" + i + a
                }, remove: function (e, t) {
                    t = "undefined" == typeof t ? sd.para.cross_subdomain : t, _.cookie.set(e, "", -1, t)
                }
            }, _.localStorage = {
                get: function (e) {
                    return window.localStorage.getItem(e)
                }, parse: function (e) {
                    var t;
                    try {
                        t = JSON.parse(_.localStorage.get(e)) || null
                    } catch (n) {
                    }
                    return t
                }, set: function (e, t) {
                    window.localStorage.setItem(e, t)
                }, remove: function (e) {
                    window.localStorage.removeItem(e)
                }, isSupport: function () {
                    var e = !0;
                    try {
                        var t = "__sensorsdatasupport__", n = "testIsSupportStorage";
                        _.localStorage.set(t, n), _.localStorage.get(t) !== n && (e = !1), _.localStorage.remove(t)
                    } catch (r) {
                        e = !1
                    }
                    return e
                }
            }, _.xhr = function (e) {
                if (e) {
                    var t = new XMLHttpRequest;
                    return "withCredentials" in t ? t : "undefined" != typeof XDomainRequest ? new XDomainRequest : t
                }
                if (XMLHttpRequest)return new XMLHttpRequest;
                if (window.ActiveXObject)try {
                    return new ActiveXObject("Msxml2.XMLHTTP")
                } catch (n) {
                    try {
                        return new ActiveXObject("Microsoft.XMLHTTP")
                    } catch (n) {
                    }
                }
            }, _.ajax = function (e) {
                function t(e) {
                    try {
                        return JSON.parse(e)
                    } catch (t) {
                        return {}
                    }
                }

                var n = _.xhr(e.cors);
                e.type || (e.type = e.data ? "POST" : "GET"), e = _.extend({
                    success: function () {
                    }, error: function () {
                    }
                }, e), n.onreadystatechange = function () {
                    4 == n.readyState && (n.status >= 200 && n.status < 300 || 304 == n.status ? e.success(t(n.responseText)) : e.error(t(n.responseText), n.status), n.onreadystatechange = null, n.onload = null)
                }, n.open(e.type, e.url, !0);
                try {
                    if (n.withCredentials = !0, _.isObject(e.header))for (var r in e.header)n.setRequestHeader(r, e.header[r]);
                    e.data && (n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), "application/json" === e.contentType ? n.setRequestHeader("Content-type", "application/json; charset=UTF-8") : n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"))
                } catch (o) {
                }
                n.send(e.data || null)
            }, _.url = function () {
                function e() {
                    return new RegExp(/(.*?)\.?([^\.]*?)\.?(com|net|org|biz|ws|in|me|co\.uk|co|org\.uk|ltd\.uk|plc\.uk|me\.uk|edu|mil|br\.com|cn\.com|eu\.com|hu\.com|no\.com|qc\.com|sa\.com|se\.com|se\.net|us\.com|uy\.com|ac|co\.ac|gv\.ac|or\.ac|ac\.ac|af|am|as|at|ac\.at|co\.at|gv\.at|or\.at|asn\.au|com\.au|edu\.au|org\.au|net\.au|id\.au|be|ac\.be|adm\.br|adv\.br|am\.br|arq\.br|art\.br|bio\.br|cng\.br|cnt\.br|com\.br|ecn\.br|eng\.br|esp\.br|etc\.br|eti\.br|fm\.br|fot\.br|fst\.br|g12\.br|gov\.br|ind\.br|inf\.br|jor\.br|lel\.br|med\.br|mil\.br|net\.br|nom\.br|ntr\.br|odo\.br|org\.br|ppg\.br|pro\.br|psc\.br|psi\.br|rec\.br|slg\.br|tmp\.br|tur\.br|tv\.br|vet\.br|zlg\.br|br|ab\.ca|bc\.ca|mb\.ca|nb\.ca|nf\.ca|ns\.ca|nt\.ca|on\.ca|pe\.ca|qc\.ca|sk\.ca|yk\.ca|ca|cc|ac\.cn|com\.cn|edu\.cn|gov\.cn|org\.cn|bj\.cn|sh\.cn|tj\.cn|cq\.cn|he\.cn|nm\.cn|ln\.cn|jl\.cn|hl\.cn|js\.cn|zj\.cn|ah\.cn|gd\.cn|gx\.cn|hi\.cn|sc\.cn|gz\.cn|yn\.cn|xz\.cn|sn\.cn|gs\.cn|qh\.cn|nx\.cn|xj\.cn|tw\.cn|hk\.cn|mo\.cn|cn|cx|cz|de|dk|fo|com\.ec|tm\.fr|com\.fr|asso\.fr|presse\.fr|fr|gf|gs|co\.il|net\.il|ac\.il|k12\.il|gov\.il|muni\.il|ac\.in|co\.in|org\.in|ernet\.in|gov\.in|net\.in|res\.in|is|it|ac\.jp|co\.jp|go\.jp|or\.jp|ne\.jp|ac\.kr|co\.kr|go\.kr|ne\.kr|nm\.kr|or\.kr|li|lt|lu|asso\.mc|tm\.mc|com\.mm|org\.mm|net\.mm|edu\.mm|gov\.mm|ms|nl|no|nu|pl|ro|org\.ro|store\.ro|tm\.ro|firm\.ro|www\.ro|arts\.ro|rec\.ro|info\.ro|nom\.ro|nt\.ro|se|si|com\.sg|org\.sg|net\.sg|gov\.sg|sk|st|tf|ac\.th|co\.th|go\.th|mi\.th|net\.th|or\.th|tm|to|com\.tr|edu\.tr|gov\.tr|k12\.tr|net\.tr|org\.tr|com\.tw|org\.tw|net\.tw|ac\.uk|uk\.com|uk\.net|gb\.com|gb\.net|vg|sh|kz|ch|info|ua|gov|name|pro|ie|hk|com\.hk|org\.hk|net\.hk|edu\.hk|us|tk|cd|by|ad|lv|eu\.lv|bz|es|jp|cl|ag|mobi|eu|co\.nz|org\.nz|net\.nz|maori\.nz|iwi\.nz|io|la|md|sc|sg|vc|tw|travel|my|se|tv|pt|com\.pt|edu\.pt|asia|fi|com\.ve|net\.ve|fi|org\.ve|web\.ve|info\.ve|co\.ve|tel|im|gr|ru|net\.ru|org\.ru|hr|com\.hr|ly|xyz)$/)
                }

                function t(e) {
                    return _.decodeURIComponent(e.replace(/\+/g, " "))
                }

                function n(e, t) {
                    var n = e.charAt(0), r = t.split(n);
                    return n === e ? r : (e = parseInt(e.substring(1), 10), r[0 > e ? r.length + e : e - 1])
                }

                function r(e, n) {
                    for (var r = e.charAt(0), o = n.split("&"), i = [], s = {}, a = [], c = e.substring(1), u = 0, d = o.length; d > u; u++)if (i = o[u].match(/(.*?)=(.*)/), i || (i = [o[u], o[u], ""]), "" !== i[1].replace(/\s/g, "")) {
                        if (i[2] = t(i[2] || ""), c === i[1])return i[2];
                        a = i[1].match(/(.*)\[([0-9]+)\]/), a ? (s[a[1]] = s[a[1]] || [], s[a[1]][a[2]] = i[2]) : s[i[1]] = i[2]
                    }
                    return r === e ? s : s[c]
                }

                return function (t, o) {
                    var i, s = {};
                    if ("tld?" === t)return e();
                    if (o = o || window.location.toString(), !t)return o;
                    if (t = t.toString(), i = o.match(/^mailto:([^\/].+)/))s.protocol = "mailto", s.email = i[1]; else {
                        if ((i = o.match(/(.*?)\/#\!(.*)/)) && (o = i[1] + i[2]), (i = o.match(/(.*?)#(.*)/)) && (s.hash = i[2], o = i[1]), s.hash && t.match(/^#/))return r(t, s.hash);
                        if ((i = o.match(/(.*?)\?(.*)/)) && (s.query = i[2], o = i[1]), s.query && t.match(/^\?/))return r(t, s.query);
                        if ((i = o.match(/(.*?)\:?\/\/(.*)/)) && (s.protocol = i[1].toLowerCase(), o = i[2]), (i = o.match(/(.*?)(\/.*)/)) && (s.path = i[2], o = i[1]), s.path = (s.path || "").replace(/^([^\/])/, "/$1").replace(/\/$/, ""), t.match(/^[\-0-9]+$/) && (t = t.replace(/^([^\/])/, "/$1")), t.match(/^\//))return n(t, s.path.substring(1));
                        if (i = n("/-1", s.path.substring(1)), i && (i = i.match(/(.*?)\.(.*)/)) && (s.file = i[0], s.filename = i[1], s.fileext = i[2]), (i = o.match(/(.*)\:([0-9]+)$/)) && (s.port = i[2], o = i[1]), (i = o.match(/(.*?)@(.*)/)) && (s.auth = i[1], o = i[2]), s.auth && (i = s.auth.match(/(.*)\:(.*)/), s.user = i ? i[1] : s.auth, s.pass = i ? i[2] : void 0), s.hostname = o.toLowerCase(), "." === t.charAt(0))return n(t, s.hostname);
                        e() && (i = s.hostname.match(e()), i && (s.tld = i[3], s.domain = i[2] ? i[2] + "." + i[3] : void 0, s.sub = i[1] || void 0)), s.port = s.port || ("https" === s.protocol ? "443" : "80"), s.protocol = s.protocol || ("443" === s.port ? "https" : "http")
                    }
                    return t in s ? s[t] : "{}" === t ? s : void 0
                }
            }(), _.dom = {}, _.info = {
                initPage: function () {
                    var e = document.referrer, t = e ? _.url("hostname", e) : e, n = e ? _.url("domain", e) : e, r = location.href, o = r ? _.url("hostname", r) : r, i = r ? _.url("domain", r) : r;
                    this.pageProp = {
                        referrer: e,
                        referrer_host: t,
                        referrer_domain: n,
                        url: r,
                        url_host: o,
                        url_domain: i
                    }
                }, pageProp: {}, campaignParams: function () {
                    var e = source_channel_standard.split(" "), t = "", n = {};
                    return _.isArray(sd.para.source_channel) && sd.para.source_channel.length > 0 && (e = e.concat(sd.para.source_channel), e = _.unique(e)), _.each(e, function (e) {
                        t = _.getQueryParam(location.href, e), t.length && (n[e] = t)
                    }), n
                }, campaignParamsStandard: function (e, t) {
                    e = e || "", t = t || "";
                    var n = _.info.campaignParams(), r = {}, o = {};
                    for (var i in n)-1 !== (" " + source_channel_standard + " ").indexOf(" " + i + " ") ? r[e + i] = n[i] : o[t + i] = n[i];
                    return {$utms: r, otherUtms: o}
                }, properties: function () {
                    return {
                        $os: detector.os.name,
                        $model: detector.device.name,
                        $os_version: String(detector.os.version),
                        $screen_height: Number(screen.height) || 0,
                        $screen_width: Number(screen.width) || 0,
                        $lib: "js",
                        $lib_version: String(LIB_VERSION),
                        $browser: detector.browser.name,
                        $browser_version: String(detector.browser.version)
                    }
                }, currentProps: {}, register: function (e) {
                    _.extend(_.info.currentProps, e)
                }
            }, sd.sendState = {}, sd.sendState._complete = 0, sd.sendState._receive = 0, sd.sendState.getSendCall = function (e, t) {
                ++this._receive;
                var n = "_state" + this._receive, r = this;
                this[n] = document.createElement("img"), this[n].onload = this[n].onerror = function (e) {
                    r[n].onload = null, r[n].onerror = null, delete r[n], ++r._complete, "function" == typeof t && t()
                }, e._nocache = (String(Math.random()) + String(Math.random()) + String(Math.random())).slice(2, 15), logger.info(e), e = JSON.stringify(e), -1 !== sd.para.server_url.indexOf("?") ? this[n].src = sd.para.server_url + "&data=" + encodeURIComponent(_.base64Encode(e)) : this[n].src = sd.para.server_url + "?data=" + encodeURIComponent(_.base64Encode(e))
            };
            var saNewUser = {
                checkIsAddSign: function (e) {
                    "track" === e.type && (null !== _.cookie.get("sensorsdata_is_new_user") ? e.properties.$is_first_day = !0 : e.properties.$is_first_day = !1)
                }, is_first_visit_time: !1, checkIsFirstTime: function (e) {
                    "track" === e.type && (this.is_first_visit_time ? (e.properties.$is_first_time = !0, this.is_first_visit_time = !1) : e.properties.$is_first_time = !1)
                }, storeInitCheck: function () {
                    if (is_first_visitor) {
                        var e = new Date, t = {h: 23 - e.getHours(), m: 59 - e.getMinutes(), s: 59 - e.getSeconds()};
                        _.cookie.set("sensorsdata_is_new_user", "true", 3600 * t.h + 60 * t.m + t.s + "s"), this.is_first_visit_time = !0
                    } else null === _.cookie.get("sensorsdata_is_new_user") && (this.checkIsAddSign = function (e) {
                        "track" === e.type && (e.properties.$is_first_day = !1)
                    }), this.checkIsFirstTime = function (e) {
                        "track" === e.type && (e.properties.$is_first_time = !1)
                    }
                }, checkIsFirstLatest: function () {
                    var e = _.info.pageProp.url_domain, t = _.info.pageProp.referrer_domain;
                    "" !== e && e !== t && sd.register({
                        $latest_referrer: _.info.pageProp.referrer,
                        $latest_referrer_host: _.info.pageProp.referrer_host
                    });
                    var n = _.info.campaignParamsStandard("$latest_", "_latest_"), r = n.$utms, o = n.otherUtms;
                    _.isEmptyObject(r) || sd.register(r),
                    _.isEmptyObject(o) || sd.register(o)
                }
            }, saEvent = {};
            saEvent.checkOption = {
                regChecks: {regName: /^((?!^distinct_id$|^original_id$|^time$|^properties$|^id$|^first_id$|^second_id$|^users$|^events$|^event$|^user_id$|^date$|^datetime$)[a-zA-Z_$][a-zA-Z\d_$]{0,99})$/i},
                checkPropertiesKey: function (e) {
                    var t = this, n = !0;
                    return _.each(e, function (e, r) {
                        t.regChecks.regName.test(r) || (n = !1)
                    }), n
                },
                check: function (e, t) {
                    return "string" == typeof this[e] ? this[this[e]](t) : this[e](t)
                },
                str: function (e) {
                    return !!_.isString(e) || (logger.info("请检查参数格式,必须是字符串"), !0)
                },
                properties: function (e) {
                    return _.strip_sa_properties(e), !e || (_.isObject(e) ? !!this.checkPropertiesKey(e) || (logger.info("properties里的key必须是由字符串数字_组成，且不能是系统保留字"), !0) : (logger.info("properties可以没有，但有的话必须是对象"), !0))
                },
                propertiesMust: function (e) {
                    return _.strip_sa_properties(e), void 0 === e || !_.isObject(e) || _.isEmptyObject(e) ? (logger.info("properties必须是对象且有值"), !0) : !!this.checkPropertiesKey(e) || (logger.info("properties里的key必须是由字符串数字_组成，且不能是系统保留字"), !0)
                },
                event: function (e) {
                    return !(!_.isString(e) || !this.regChecks.regName.test(e)) || (logger.info("请检查参数格式,必须是字符串,且eventName必须是字符串_开头,且不能是系统保留字"), !0)
                },
                test_id: "str",
                group_id: "str",
                distinct_id: function (e) {
                    return !(!_.isString(e) || !/^.{1,255}$/.test(e)) || (logger.info("distinct_id必须是不能为空，且小于255位的字符串"), !1)
                }
            }, saEvent.check = function (e) {
                var t = !0;
                for (var n in e)if (!this.checkOption.check(n, e[n]))return !1;
                return t
            }, saEvent.send = function (e, t) {
                var n = {
                    distinct_id: store.getDistinctId(),
                    lib: {$lib: "js", $lib_method: "code", $lib_version: String(LIB_VERSION)},
                    properties: {}
                };
                if ("string" != typeof store.getDistinctId() || "" == typeof store.getDistinctId()) {
                    var r = "";
                    switch (store.getDistinctId()) {
                        case null:
                            r = "null";
                            break;
                        case void 0:
                            r = "undefined";
                            break;
                        case"":
                            r = "空";
                            break;
                        default:
                            r = String(store.getDistinctId())
                    }
                    error_msg.push("distinct_id-" + just_test_distinctid + "-" + just_test_distinctid_2 + "-" + r + "-" + just_test_distinctid_detail + "-" + just_test_distinctid_detail2)
                }
                _.extend(n, e), error_msg.length > 0 && (n.jssdk_error = error_msg.join("--")), _.isObject(e.properties) && !_.isEmptyObject(e.properties) && _.extend(n.properties, e.properties), _.isObject(t) && _.extend(n.lib, t), e.type && "profile" === e.type.slice(0, 7) || (n.properties = _.extend({}, _.info.properties(), store.getProps(), store.getSessionProps(), _.info.currentProps, n.properties)), n.properties.$time && _.isDate(n.properties.$time) ? (n.time = 1 * n.properties.$time, delete n.properties.$time) : sd.para.use_client_time && (n.time = 1 * new Date), _.searchObjDate(n), _.searchObjString(n), saNewUser.checkIsAddSign(n), saNewUser.checkIsFirstTime(n), sd.para.debug_mode === !0 ? (logger.info(n), this.debugPath(JSON.stringify(n), t)) : sd.sendState.getSendCall(n, t)
            }, saEvent.debugPath = function (e, t) {
                var n = "";
                n = -1 !== sd.para.debug_mode_url.indexOf("?") ? sd.para.debug_mode_url + "&data=" + encodeURIComponent(_.base64Encode(e)) : sd.para.debug_mode_url + "?data=" + encodeURIComponent(_.base64Encode(e)), _.ajax({
                    url: n,
                    type: "GET",
                    cors: !0,
                    header: {"Dry-Run": String(sd.para.debug_mode_upload)}
                })
            };
            var store = sd.store = {
                _sessionState: {}, _state: {}, getProps: function () {
                    return this._state.props
                }, getSessionProps: function () {
                    return this._sessionState
                }, getDistinctId: function () {
                    return this._state.distinct_id
                }, getFirstId: function () {
                    return this._state.first_id
                }, toState: function (e) {
                    var t = null;
                    null != e && _.isJSONString(e) ? (t = JSON.parse(e), t.distinct_id ? this._state = t : (this.set("distinct_id", _.UUID()), error_msg.push("toStateParseDistinctError"))) : (this.set("distinct_id", _.UUID()), error_msg.push("toStateParseError"))
                }, initSessionState: function () {
                    var e = _.cookie.get("sensorsdata2015session"), t = null;
                    null !== e && "object" == typeof(t = JSON.parse(e)) && (this._sessionState = t)
                }, setOnce: function (e, t) {
                    e in this._state || this.set(e, t)
                }, set: function (e, t) {
                    this._state = this._state || {}, this._state[e] = t, this.save()
                }, change: function (e, t) {
                    this._state[e] = t
                }, setSessionProps: function (e) {
                    var t = this._sessionState;
                    _.extend(t, e), this.sessionSave(t)
                }, setSessionPropsOnce: function (e) {
                    var t = this._sessionState;
                    _.coverExtend(t, e), this.sessionSave(t)
                }, setProps: function (e) {
                    var t = this._state.props || {};
                    _.extend(t, e), this.set("props", t)
                }, setPropsOnce: function (e) {
                    var t = this._state.props || {};
                    _.coverExtend(t, e), this.set("props", t)
                }, sessionSave: function (e) {
                    this._sessionState = e, _.cookie.set("sensorsdata2015session", JSON.stringify(this._sessionState), 0)
                }, save: function () {
                    _.cookie.set("sensorsdata2015jssdkcross", JSON.stringify(this._state), 730, sd.para.cross_subdomain)
                }, init: function () {
                    navigator.cookieEnabled || (error_msg.push("cookieNotEnable"), _.localStorage.isSupport || error_msg.push("localStorageNotEnable")), this.initSessionState();
                    var e = _.cookie.get(sd.para.cross_subdomain ? "sensorsdata2015jssdkcross" : "sensorsdata2015jssdk");
                    null === e ? (is_first_visitor = !0, just_test_distinctid = 1, this.set("distinct_id", _.UUID())) : (just_test_distinctid = 2, just_test_distinctid_detail = JSON.stringify(e), just_test_distinctid_detail2 = navigator.userAgent + "^_^" + document.cookie, this.toState(e)), saNewUser.storeInitCheck(), saNewUser.checkIsFirstLatest()
                }
            }, commonWays = {
                getUtm: function () {
                    return _.info.campaignParams()
                }, getStayTime: function () {
                    return (new Date - sd._t) / 1e3
                }, setInitReferrer: function () {
                    var e = document.referrer.slice(0, sd.para.max_referrer_string_length);
                    sd.setOnceProfile({_init_referrer: e, _init_referrer_host: _.info.pageProp.referrer_host})
                }, setSessionReferrer: function () {
                    var e = document.referrer.slice(0, sd.para.max_referrer_string_length);
                    store.setSessionPropsOnce({
                        _session_referrer: e,
                        _session_referrer_host: _.info.pageProp.referrer_host
                    })
                }, setDefaultAttr: function () {
                    _.info.register({
                        _current_url: location.href,
                        _referrer: document.referrer.slice(0, sd.para.max_referrer_string_length),
                        _referring_host: _.info.pageProp.referrer_host
                    })
                }, allTrack: function () {
                    if (!document || !document.body)return setTimeout(this.allTrack, 1e3), !1;
                    if ("has_init" === sd.allTrack)return !1;
                    sd.allTrack = "has_init";
                    var e = {
                        getProps: function (e, t) {
                            var n = {};
                            if (n._el_tagname = e, n._el_name = t.getAttribute("name"), n._el_id = t.getAttribute("id"), n._el_classname = "string" == typeof t.className ? t.className : null, n._el_href = t.getAttribute("href"), t.textContent) {
                                var r = _.trim(t.textContent);
                                r && (r = r.replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)), n._el_value = r
                            }
                            return n = _.strip_empty_properties(n), n.$url = location.href, n.$url_path = location.pathname, n
                        }, clickEvents: function (e) {
                            var t = {}, n = e.target, r = n.tagName.toLowerCase();
                            if (-1 !== " button a input ".indexOf(" " + r + " ")) {
                                if ("input" === r) {
                                    if ("button" !== n.getAttribute("type") && "submit" !== n.getAttribute("type"))return !1;
                                    t._el_value = n.value
                                }
                                _.extend(t, this.getProps(r, n)), "a" === r ? _.trackLink({event: e}, "_web_event", t) : sd.track("_web_event", t)
                            }
                        }
                    };
                    _.addEvent(document, "click", function (t) {
                        e.clickEvents(t)
                    })
                }, autoTrackWithoutProfile: function (e) {
                    this.autoTrack(_.extend(e, {not_set_profile: !0}))
                }, autoTrack: function (e, t) {
                    e = _.isObject(e) ? e : {};
                    var n = _.info.campaignParams(), r = {};
                    for (var o in n)-1 !== (" " + source_channel_standard + " ").indexOf(" " + o + " ") ? r["$" + o] = n[o] : r[o] = n[o];
                    is_first_visitor && !e.not_set_profile && sd.setOnceProfile(_.extend({
                        $first_visit_time: new Date,
                        $first_referrer: document.referrer.slice(0, sd.para.max_referrer_string_length),
                        $first_browser_language: navigator.language,
                        $first_referrer_host: _.info.pageProp.referrer_host
                    }, r)), e.not_set_profile && delete e.not_set_profile, sd.track("$pageview", _.extend({
                        $referrer: document.referrer.slice(0, sd.para.max_referrer_string_length),
                        $referrer_host: _.info.pageProp.referrer_host,
                        $url: location.href,
                        $url_path: location.pathname,
                        $title: document.title
                    }, r, e), t)
                }
            };
            sd.quick = function () {
                var e = slice.call(arguments), t = e[0], n = e.slice(1);
                return "string" == typeof t && commonWays[t] ? commonWays[t].apply(commonWays, n) : void("function" == typeof t ? t.apply(sd, n) : logger.info("quick方法中没有这个功能" + e[0]))
            }, sd.track = function (e, t, n) {
                saEvent.check({event: e, properties: t}) && saEvent.send({type: "track", event: e, properties: t}, n)
            }, _.trackLink = function (e, t, n) {
                function r(e) {
                    function r() {
                        i || (i = !0, location.href = o.href)
                    }

                    e.preventDefault();
                    var i = !1;
                    setTimeout(r, 1e3), sd.track(t, n, r)
                }

                e = e || {};
                var o = null;
                return e.ele && (o = e.ele), e.event && (o = e.event.target), n = n || {}, !(!o || "object" != typeof o) && (!o.href || /^javascript/.test(o.href) || o.target ? (sd.track(t, n), !1) : (e.event && r(e.event), void(e.ele && _.addEvent(e.ele, "click", function (e) {
                    r(e)
                }))))
            }, sd.trackLink = function (e, t, n) {
                _.trackLink({ele: e}, t, n)
            }, sd.trackLinks = function (e, t, n) {
                return n = n || {}, !(!e || "object" != typeof e) && (!(!e.href || /^javascript/.test(e.href) || e.target) && void _.addEvent(e, "click", function (r) {
                    function o() {
                        i || (i = !0, location.href = e.href)
                    }

                    r.preventDefault();
                    var i = !1;
                    setTimeout(o, 1e3), sd.track(t, n, o)
                }))
            }, sd.setProfile = function (e, t) {
                saEvent.check({propertiesMust: e}) && saEvent.send({type: "profile_set", properties: e}, t)
            }, sd.setOnceProfile = function (e, t) {
                saEvent.check({propertiesMust: e}) && saEvent.send({type: "profile_set_once", properties: e}, t)
            }, sd.appendProfile = function (e, t) {
                saEvent.check({propertiesMust: e}) && (_.each(e, function (t, n) {
                    _.isString(t) ? e[n] = [t] : _.isArray(t) || (delete e[n], logger.info("appendProfile属性的值必须是字符串或者数组"))
                }), _.isEmptyObject(e) || saEvent.send({type: "profile_append", properties: e}, t))
            }, sd.incrementProfile = function (e, t) {
                function n(e) {
                    for (var t in e)if (!/-*\d+/.test(String(e[t])))return !1;
                    return !0
                }

                var r = e;
                _.isString(e) && (e = {}, e[r] = 1), saEvent.check({propertiesMust: e}) && (n(e) ? saEvent.send({
                    type: "profile_increment",
                    properties: e
                }, t) : logger.info("profile_increment的值只能是数字"))
            }, sd.deleteProfile = function (e) {
                saEvent.send({type: "profile_delete"}, e), store.set("distinct_id", _.UUID())
            }, sd.unsetProfile = function (e, t) {
                var n = e, r = {};
                _.isString(e) && (e = [], e.push(n)), _.isArray(e) ? (_.each(e, function (e) {
                    _.isString(e) ? r[e] = !0 : logger.info("profile_unset给的数组里面的值必须时string,已经过滤掉", e)
                }), saEvent.send({type: "profile_unset", properties: r}, t)) : logger.info("profile_unset的参数是数组")
            }, sd.identify = function (e, t) {
                var n = store.getFirstId();
                "undefined" == typeof e ? n ? store.set("first_id", _.UUID()) : store.set("distinct_id", _.UUID()) : saEvent.check({distinct_id: e}) ? t === !0 ? n ? store.set("first_id", e) : store.set("distinct_id", e) : n ? store.change("first_id", e) : store.change("distinct_id", e) : logger.info("identify的参数必须是字符串")
            }, sd.trackSignup = function (e, t, n, r) {
                saEvent.check({
                    distinct_id: e,
                    event: t,
                    properties: n
                }) && (saEvent.send({
                    original_id: store.getFirstId() || store.getDistinctId(),
                    distinct_id: e,
                    type: "track_signup",
                    event: t,
                    properties: n
                }, r), store.set("distinct_id", e))
            }, sd.trackAbtest = function (e, t) {
            }, sd.registerPage = function (e) {
                saEvent.check({properties: e}) ? _.extend(_.info.currentProps, e) : logger.info("register输入的参数有误")
            }, sd.register = function (e) {
                saEvent.check({properties: e}) ? store.setProps(e) : logger.info("register输入的参数有误")
            }, sd.registerOnce = function (e) {
                saEvent.check({properties: e}) ? store.setPropsOnce(e) : logger.info("registerOnce输入的参数有误")
            }, sd.registerSession = function (e) {
                saEvent.check({properties: e}) ? store.setSessionProps(e) : logger.info("registerSession输入的参数有误")
            }, sd.registerSessionOnce = function (e) {
                saEvent.check({properties: e}) ? store.setSessionPropsOnce(e) : logger.info("registerSessionOnce输入的参数有误")
            }, sd.login = function (e) {
                if (saEvent.check({distinct_id: e})) {
                    var t = store.getFirstId(), n = store.getDistinctId();
                    e !== n && (t ? sd.trackSignup(e, "$SignUp") : (store.set("first_id", n), sd.trackSignup(e, "$SignUp")))
                } else logger.info("login的参数必须是字符串")
            }, sd.logout = function (e) {
                var t = store.getFirstId();
                t ? (store.set("first_id", ""), e === !0 ? store.set("distinct_id", _.UUID()) : store.set("distinct_id", t)) : logger.info("没有first_id，logout失败")
            }, sd.init = function () {
                _.isObject(sd.sdkMain) && sd.sdkMain._init()
            }, sd._init = function () {
                app_js_bridge(), _.info.initPage(), store.init(), sd._q && _.isArray(sd._q) && sd._q.length > 0 && _.each(sd._q, function (e) {
                    sd[e[0]].apply(sd, slice.call(e[1]))
                })
            }, sd._init()
        }(window.sensorsDataAnalytic201505)
    } catch (err) {
        !function () {
            var e = window.sensorsDataAnalytic201505;
            "string" == typeof e && (e = window[e], null == e || "function" != typeof e && "object" != typeof e || e.track && e.track("_js_sdk_error", {
                _js_sdk_error_msg: err,
                $url: location.href
            }))
        }()
    }
}, function (e, t) {
    "use strict";
    t.ENV = {
        UNKNOWN: "u",
        WEBAPP_ITSELF: "W",
        INSIDE_WEBAPP: "w",
        INSIDE_NEW_IOS_APP: "I",
        INSIDE_NEW_ANDROID_APP: "A",
        LIKELY_TO_BE_INSIDE_OLD_IOS_APP: "i",
        LIKELY_TO_BE_INSIDE_OLD_ANDROID_APP: "a"
    }, t.query = function (e) {
        var t = e || window.location.search;
        "?" === t.charAt(0) && (t = t.substr(1));
        var n = {};
        return t.split("&").filter(function (e) {
            return e.length > 0
        }).forEach(function (e) {
            var t = e.split("="), r = decodeURIComponent(t.shift());
            n[r] = decodeURIComponent(t.join("="))
        }), n
    };
    var n = navigator.userAgent.indexOf("iPhone OS") > 0, r = navigator.userAgent.indexOf("Android") > 0;
    t.isInWeChat = navigator.userAgent.indexOf("MicroMessenger") >= 0, t.isInAlipay = navigator.userAgent.indexOf("AlipayClient") >= 0;
    var o = navigator.userAgent.split(/\s+/).map(function (e) {
        return e.match(/OfoApp\/([0-9\.]+)/)
    }).filter(function (e) {
        return e
    })[0];
    t.iframingAncestorWhichIsWebApp = function (e) {
        var t;
        try {
            do {
                if (t = e, "OFO_BUILD_DATE" in t)return t;
                e = t.parent
            } while (e !== t)
        } catch (n) {
        }
        return null
    }(window);
    var i = function (e, t) {
        for (var n, r = function (e) {
            return parseInt(e)
        }, o = e.split(".").map(r), i = t.split(".").map(r), s = 0; s < o.length && s < i.length && !(n = o[s] - i[s]); s++);
        var a = n || o.length - i.length;
        return a > 0 ? 1 : a < 0 ? -1 : 0
    };
    t.currentEnv = t.iframingAncestorWhichIsWebApp === window ? t.ENV.WEBAPP_ITSELF : t.iframingAncestorWhichIsWebApp ? t.ENV.INSIDE_WEBAPP : o ? n ? r ? t.ENV.UNKNOWN : i("1.8.2", o[1]) <= 0 ? t.ENV.INSIDE_NEW_IOS_APP : t.ENV.LIKELY_TO_BE_INSIDE_OLD_IOS_APP : r ? t.ENV.INSIDE_NEW_ANDROID_APP : t.ENV.UNKNOWN : "ofoToken" in window && !t.isInWeChat || "native" === t.query().from ? n ? r ? t.ENV.UNKNOWN : t.ENV.LIKELY_TO_BE_INSIDE_OLD_IOS_APP : r ? t.ENV.LIKELY_TO_BE_INSIDE_OLD_ANDROID_APP : t.ENV.UNKNOWN : t.ENV.UNKNOWN;
    var s = t.query().backend;
    t.API_HOST = {
            "common.ofo.so": "san.ofo.so",
            "qa-common.ofo.so": s || "qa-mastertest.ofo.so",
            "qacommonapi.ofo.so": s || "api-test.ofo.so",
            "ofo-staging.ofo.so": "san.ofo.so",
            "testcommon.ofo.so": "testonline.ofo.so"
        }[window.location.host] || window.location.host, t.ofoAppVersion = o ? o[1] : null, t.isLikelyInApp = t.currentEnv === t.ENV.LIKELY_TO_BE_INSIDE_OLD_IOS_APP || t.currentEnv === t.ENV.LIKELY_TO_BE_INSIDE_OLD_ANDROID_APP || t.currentEnv === t.ENV.INSIDE_NEW_IOS_APP || t.currentEnv === t.ENV.INSIDE_NEW_ANDROID_APP, t.isInNewApp = t.currentEnv === t.ENV.INSIDE_NEW_IOS_APP || t.currentEnv === t.ENV.INSIDE_NEW_ANDROID_APP, t.sourceForApi = t.currentEnv === t.ENV.LIKELY_TO_BE_INSIDE_OLD_IOS_APP || t.currentEnv === t.ENV.INSIDE_NEW_IOS_APP ? 1 : t.currentEnv === t.ENV.LIKELY_TO_BE_INSIDE_OLD_ANDROID_APP || t.currentEnv === t.ENV.INSIDE_NEW_ANDROID_APP ? 2 : t.isInAlipay ? t.isInWeChat ? -3 : -2 : t.isInWeChat ? -1 : 0, t.sourceForSa = t.currentEnv === t.ENV.LIKELY_TO_BE_INSIDE_OLD_IOS_APP || t.currentEnv === t.ENV.INSIDE_NEW_IOS_APP ? 1 : t.currentEnv === t.ENV.LIKELY_TO_BE_INSIDE_OLD_ANDROID_APP || t.currentEnv === t.ENV.INSIDE_NEW_ANDROID_APP ? 2 : t.isInAlipay ? t.isInWeChat ? -3 : -2 : t.isInWeChat ? -1 : 0, t.ofoAppVersionGte = function (e, n) {
        return !!t.ofoAppVersion && (t.currentEnv === t.ENV.INSIDE_NEW_IOS_APP && null !== e && void 0 !== e && i(e, o[1]) <= 0 || t.currentEnv === t.ENV.INSIDE_NEW_ANDROID_APP && null !== n && void 0 !== n && parseInt(o[1]) >= n)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(4), o = n(6);
    if (window.ofoGlobals && window.ofoGlobals.get) {
        var i = JSON.parse(window.ofoGlobals.get());
        Object.keys(i).forEach(function (e) {
            window[e] = i[e]
        })
    }
    var s = function (e, t) {
        var n = e.wx;
        n && n.ready(function () {
            n.showOptionMenu(), n.onMenuShareTimeline({
                title: t[0],
                link: t[3],
                imgUrl: t[2]
            }), n.onMenuShareAppMessage({title: t[0], desc: t[1], link: t[3], imgUrl: t[2]})
        })
    };
    t.ofoResponseProxy = function (e, t) {
        if ("saClick" !== e) {
            if ("setTitle" === e && !r.isLikelyInApp)return void(window.top.document.title = t[0]);
            if (("setTitle" !== e || !r.isLikelyInApp || r.ofoAppVersionGte("1.8.1", 11e3)) && ("shareConfig" !== e || !r.isLikelyInApp || r.ofoAppVersionGte("1.8.4", 11e3))) {
                if ("shareConfig" === e) {
                    if (r.isInWeChat && r.currentEnv === r.ENV.INSIDE_WEBAPP)return void s(r.iframingAncestorWhichIsWebApp, t);
                    if (r.isInWeChat && window.wx)return void s(window, t)
                }
                if ("openExternal" === e && r.currentEnv === r.ENV.INSIDE_NEW_IOS_APP && (e = "toSafari"), window.ofoResponse)try {
                    window.ofoResponse[e].apply(window.ofoResponse, t)
                } catch (n) {
                    o("BridgeError", {
                        exception: {
                            message: n.message,
                            stack: n.error ? n.error.stack : n.filename + ":" + n.lineno + ":" + n.colno
                        }, name: e, params: t
                    })
                } else if (r.currentEnv === r.ENV.LIKELY_TO_BE_INSIDE_OLD_IOS_APP) {
                    var i = document.createElement("iframe");
                    i.setAttribute("src", "ofowebviewresponse://" + e + "/" + encodeURI(JSON.stringify(t))), document.documentElement.appendChild(i), setTimeout(function () {
                        return i.parentNode.removeChild(i)
                    })
                } else r.currentEnv === r.ENV.INSIDE_NEW_IOS_APP && window.webkit.messageHandlers.ofo_iOS.postMessage({
                    method: e,
                    params: t
                })
            }
        }
    }, t.handleLink = function (e, t) {
        return r.iframingAncestorWhichIsWebApp ? void r.iframingAncestorWhichIsWebApp.ofoHandleDeepLink(e) : void(r.isLikelyInApp ? (window.location.replace(e), r.isInNewApp || setTimeout(function () {
            return window.alert("您可能需要更新至最新版 ofo app 才能使用此功能。")
        }, 1e3)) : "ofoapp://use" === e ? window.location.replace("/newdist/?Journey") : "ofoapp://purchase" === e ? window.location.replace("/newdist/?Purchase") : "ofoapp://bond" === e && window.location.replace("/newdist/?Identification"))
    }
}, function (e, t, n) {
    "use strict";
    var r = n(7), o = n(8), i = n(4), s = function () {
        var e = r.get("ofo_debug_stat_uniq_iden");
        e || (e = Date.now().toString(36) + "_" + Math.random().toString(36).substr(2, 8), r.set("ofo_debug_stat_uniq_iden", e, {
            expires: 3650,
            domain: ".ofo.so"
        }));
        var t = {userAgent: navigator.userAgent, windowLoaded: Date.now()}, n = function (e) {
            var t = new XMLHttpRequest;
            t.open("POST", "//bug.ofo.so/statisticV4"), t.setRequestHeader("Content-type", "application/json"), t.onload = function () {
                var n = JSON.parse(t.responseText);
                return n.ack_sent !== e.sent || n.ack_rand !== e.rand || 0 !== n.status && 1 !== n.status ? void console.log("Debug log unexpected!") : (console.log("Debug log " + (1 === n.status ? "duplicated" : "sent") + "!"), void r.set("ofo_debug_stat_buffer", (r.getJSON("ofo_debug_stat_buffer") || []).filter(function (t) {
                    return !(t.sent === e.sent && t.rand === e.rand)
                })))
            }, t.onerror = function () {
                console.log("Debug log failed!")
            };
            var n;
            try {
                n = JSON.stringify(e)
            } catch (o) {
                e.extra = "[JSON.stringify failed]", n = JSON.stringify(e)
            }
            t.send(n)
        }, i = function () {
            var e = r.getJSON("ofo_debug_stat_buffer");
            e && e.length && e.forEach(n)
        }, s = function (i, s) {
            var a = {
                sent: Date.now(),
                rand: Math.floor(32768 * Math.random()),
                type: i,
                token: o(),
                url: window.location.href,
                uniqIden: e
            };
            document.referrer && (a.referrer = document.referrer), console.log("Debug sent: " + i, s), Object.keys(t).forEach(function (e) {
                a[e] = t[e]
            }), a.extra = s, r.set("ofo_debug_stat_buffer", (r.getJSON("ofo_debug_stat_buffer") || []).concat(a)), n(a)
        };
        return i(), s
    }(), a = function (e, t, n) {
        t && "object" == typeof t ? Object.keys(t).forEach(function (r) {
            a(e + "$" + r, t[r], n)
        }) : n[e] = t
    }, c = function () {
        var e = {userAgent: navigator.userAgent, windowLoaded: Date.now()};
        return function (t, n, r) {
            var s = {token: o(), extra: n, location: {}, currentEnv: i.currentEnv};
            Object.keys(e).forEach(function (t) {
                s[t] = e[t]
            }), ["host", "protocol", "pathname", "search", "hash"].forEach(function (e) {
                s.location[e] = window.location[e]
            });
            var c = ["utm_source", "utm_campaign", "utm_medium", "utm_term", "utm_content", "from"];
            r && (c = c.concat(r));
            var u;
            s.query = {}, u = i.query(), c.forEach(function (e) {
                e in u && (s.query[e] = u[e])
            });
            var d = {Source: i.sourceForSa};
            a("_SD", s, d), sa.track("_SD$" + t, d)
        }
    }(), u = function (e, t, n) {
        return "ofo.so" !== window.location.hostname.substr(window.location.hostname.length - 6) ? void console.log("当前域名不是 ofo.so，已跳过统计发送。") : (s(e, t), void c(e, t, n))
    };
    window.addEventListener("error", function (e) {
        "NOT_AN_EXCEPTION" !== e.error && u("JsError", {
            message: e.message,
            stack: e.error ? e.error.stack : e.filename + ":" + e.lineno + ":" + e.colno
        })
    }), e.exports = u
}, function (e, t, n) {
    var r = !1;
    !function (t) {
        var n = !1;
        if ("function" == typeof r && r.amd && (r(t), n = !0), e.exports = t(), n = !0, !n) {
            var o = window.Cookies, i = window.Cookies = t();
            i.noConflict = function () {
                return window.Cookies = o, i
            }
        }
    }(function () {
        function e() {
            for (var e = 0, t = {}; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)t[r] = n[r]
            }
            return t
        }

        function t(n) {
            function r(t, o, i) {
                var s;
                if ("undefined" != typeof document) {
                    if (arguments.length > 1) {
                        if (i = e({path: "/"}, r.defaults, i), "number" == typeof i.expires) {
                            var a = new Date;
                            a.setMilliseconds(a.getMilliseconds() + 864e5 * i.expires), i.expires = a
                        }
                        try {
                            s = JSON.stringify(o), /^[\{\[]/.test(s) && (o = s)
                        } catch (c) {
                        }
                        return o = n.write ? n.write(o, t) : encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)), t = t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), t = t.replace(/[\(\)]/g, escape), document.cookie = [t, "=", o, i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
                    }
                    t || (s = {});
                    for (var u = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, l = 0; l < u.length; l++) {
                        var f = u[l].split("="), p = f.slice(1).join("=");
                        '"' === p.charAt(0) && (p = p.slice(1, -1));
                        try {
                            var g = f[0].replace(d, decodeURIComponent);
                            if (p = n.read ? n.read(p, g) : n(p, g) || p.replace(d, decodeURIComponent), this.json)try {
                                p = JSON.parse(p)
                            } catch (c) {
                            }
                            if (t === g) {
                                s = p;
                                break
                            }
                            t || (s[g] = p)
                        } catch (c) {
                        }
                    }
                    return s
                }
            }

            return r.set = r, r.get = function (e) {
                return r.call(r, e)
            }, r.getJSON = function () {
                return r.apply({json: !0}, [].slice.call(arguments))
            }, r.defaults = {}, r.remove = function (t, n) {
                r(t, "", e(n, {expires: -1}))
            }, r.withConverter = t, r
        }

        return t(function () {
        })
    })
}, function (e, t, n) {
    "use strict";
    var r = n(7), o = /^.{16,}$/;
    o.test(window.ofoToken) && (window.localStorage && window.localStorage.setItem("ofo-tokened", window.ofoToken), r.set("ofo-tokened", window.ofoToken)), e.exports = function () {
        var e, t, n = window;
        try {
            do {
                if (e = n, t = e.ofoToken, o.test(t))return t;
                n = e.parent
            } while (n !== e)
        } catch (i) {
        }
        return console.log("COOKIE RESULT: " + r.get("ofo-tokened")), o.test(t) ? t : window.localStorage && (t = localStorage.getItem("ofo-tokened"), o.test(t)) ? t : (t = r.get("ofo-tokened"), o.test(t) ? t : null)
    }
}, function (module, exports) {
    "use strict";
    var tryJson = function (e) {
        try {
            return JSON.stringify(e)
        } catch (t) {
            return e.toString() + " (JSON.stringify failed)"
        }
    }, buffer = [];
    window.addEventListener("error", function (e) {
        addResult({
            source: "window.onerror",
            stack: e.error ? e.error.stack : e.filename + ":" + e.lineno + ":" + e.colno,
            message: e.message
        })
    }), ["error", "warn", "log", "info"].map(function (e) {
        var t = console[e];
        console[e] = function () {
            t.apply(console, arguments), addResult({
                source: "console." + e,
                stack: (new Error).stack,
                message: Array.prototype.map.call(arguments, function (e) {
                    return tryJson(e)
                }).join(", ")
            })
        }
    });
    var actions = "", showResult, addResult = function (e) {
        buffer.push(e), showResult && showResult(e)
    }, openDebugConsole = function () {
        var dom = function (e, t, n) {
            var r = document.createElement(e);
            return r.style.position = "absolute", r.style.color = "#000", r.style.fontSize = "14px", Object.keys(n).forEach(function (e) {
                r.style.setProperty(e, n[e], "important")
            }), t.appendChild(r), r
        }, consoleWrap = dom("div", document.body, {
            top: "32px",
            left: "32px",
            bottom: "32px",
            right: "32px",
            border: "2px solid #000",
            display: "none",
            "z-index": "66666"
        });
        consoleWrap.className = "ofo-iff";
        var outputs = dom("div", consoleWrap, {
            top: "32px",
            left: "0",
            bottom: "32px",
            right: "0",
            overflow: "scroll",
            background: "#fff"
        }), input = dom("input", consoleWrap, {
            bottom: "0",
            height: "32px",
            left: "0",
            border: "0 none",
            padding: "0",
            background: "#fcc",
            "line-height": "32px",
            width: "100%",
            "border-right": "64px solid transparent",
            "box-sizing": "border-box"
        }), button = dom("button", consoleWrap, {
            bottom: "0",
            height: "32px",
            width: "64px",
            right: "0",
            border: "0 none",
            padding: "0",
            "text-align": "center",
            background: "#ccf",
            "line-height": "32px"
        });
        showResult = function (e) {
            var t = document.createElement("b");
            t.appendChild(document.createTextNode(e.source)), outputs.appendChild(t);
            var n;
            "stack" in e && (n = document.createElement("i"), n.appendChild(document.createTextNode(" [stack]")), n.addEventListener("click", function () {
                addResult({source: "stack", message: e.stack})
            }), outputs.appendChild(n));
            var r = document.createElement("pre");
            r.appendChild(document.createTextNode(e.message)), outputs.appendChild(r), outputs.scrollTop = outputs.scrollHeight, outputs.scrollLeft = 0
        }, button.appendChild(document.createTextNode("EVAL")), button.addEventListener("click", function () {
            addResult({source: "eval", message: tryJson(eval(input.value))})
        });
        var close = dom("div", consoleWrap, {
            top: "0",
            height: "32px",
            left: "0",
            right: "0",
            border: "0 none",
            padding: "0",
            "text-align": "center",
            background: "#ccf",
            "line-height": "32px"
        });
        close.appendChild(document.createTextNode("CLOSE")), close.addEventListener("click", function () {
            showResult = null, document.body.removeChild(consoleWrap)
        }), buffer.forEach(showResult), consoleWrap.style.setProperty("display", "block", "important")
    }, idens = {};
    document.addEventListener("touchstart", function (e) {
        if (!showResult) {
            var t = e.changedTouches[0];
            idens[t.identifier] = Date.now()
        }
    }), document.addEventListener("touchend", function (e) {
        if (!showResult) {
            var t = e.changedTouches[0], n = Date.now() - idens[t.identifier];
            actions += n > 1200 ? "L" : n < 400 ? "S" : " ", delete idens[t.identifier], actions.length > 15 && (actions = actions.substr(5)), actions.indexOf("LSLSLS") >= 0 && (actions = "", window.confirm("Open debug console?") && openDebugConsole())
        }
    })
}, function (e, t) {
    !function (e, t, n, r, o, i, s) {
        e.GoogleAnalyticsObject = o, e[o] = e[o] || function () {
                (e[o].q = e[o].q || []).push(arguments)
            }, e[o].l = 1 * new Date, i = t.createElement(n), s = t.getElementsByTagName(n)[0], i.async = 1, i.src = r, s.parentNode.insertBefore(i, s)
    }(window, document, "script", "https://www.google-analytics.com/analytics.js", "ga"), ga("create", "UA-74862604-1", "auto"), ga("send", "pageview"), window.addEventListener("error", function (e) {
        ga("send", "event", "JsError", e.message, e.error ? e.error.stack : e.filename + ":" + e.lineno + ":" + e.colno)
    })
}, function (e, t) {
    e.exports = function (e, t) {
        var n, r = "", o = !0;
        console.log(e), r = "<div style='padding:15px 20px;background:rgba(0,0,0,.75);color:#fff;border-radius:4px;text-align:center;min-width:160px;'><p data-label='tip-text' style='font-size: 14px;line-height:20px;margin:0;'>" + e + "</p></div>", t && (o = !1, r = "<div style='padding:15px 20px;background:rgba(0,0,0,.75);color:#fff;border-radius:4px;text-align:center;min-width:160px;'><p data-label='tip-text' style='font-size: 14px;line-height:20px;margin:0;'>" + e + "</p><button data-label='tip-ok'>确定,我知道了</button></div>"), (n = document.body.querySelector('[data-label="tip"]')) ? n.querySelector('[data-label="tip-text"]').innerHTML = e : (n = document.createElement("div"), n.className = "ofo-iff", n.setAttribute("data-label", "tip"), document.body.appendChild(n), n.setAttribute("style", "position:fixed;width:100%;height:100%;z-index:9999; justify-content:center;align-items:center;display: flex;top:0;opacity:0;padding:0 20px;box-sizing:border-box !important;-webkit-transition: opacity 0.2s linear 0s, height 0s linear 0s;")), n.innerHTML = r, setTimeout(function () {
            n.style.opacity = 1
        }, 10), n.timeoutHandle && clearTimeout(n.timeoutHandle), o ? n.timeoutHandle = setTimeout(function () {
            n.style.opacity = 0, n.timeoutHandle = setTimeout(function () {
                document.body.removeChild(n)
            }, 200)
        }, 1500) : n.querySelector('[data-label="tip-ok"]').onclick = function () {
            n.style.opacity = 0, setTimeout(function () {
                document.body.removeChild(n)
            }, 200), t()
        }
    }
}, function (e, t, n) {
    "use strict";
    var r, o = n(4), i = (n(11), n(6)), s = function () {
        var e = new XMLHttpRequest;
        e.open("post", "//" + o.API_HOST + "/ofo/wechat/config"), e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), e.onload = function () {
            var t = JSON.parse(e.responseText).values.info;
            return t.url !== window.location.href ? void i("WXNonMatch", {config: t}) : void wx.config({
                debug: !1,
                appId: t.appid,
                timestamp: t.timestamp,
                nonceStr: t.noncestr,
                signature: t.signature,
                jsApiList: t.jsApiList
            })
        }, e.send("url=" + encodeURIComponent(window.location.href))
    }, a = function () {
        window.location.href !== r && (r = window.location.href, s())
    }, c = function (e, t) {
        return function () {
            e.apply(history, arguments), t()
        }
    };
    window.top === window && o.isInWeChat && (n(13), wx.error(function (e) {
        i("WXError", {message: e})
    }), a(), window.addEventListener("popstate", a), window.addEventListener("hashchange", a), history.pushState = c(history.pushState, a), history.replaceState = c(history.replaceState, a), setInterval(a, 500))
}, function (e, t) {
    !function (e, t) {
        function n(t, n, r) {
            e.WeixinJSBridge ? WeixinJSBridge.invoke(t, o(n), function (e) {
                s(t, e, r)
            }) : u(t, r)
        }

        function r(t, n, r) {
            e.WeixinJSBridge ? WeixinJSBridge.on(t, function (e) {
                r && r.trigger && r.trigger(e), s(t, e, n)
            }) : r ? u(t, r) : u(t, n)
        }

        function o(e) {
            return e = e || {}, e.appId = A.appId, e.verifyAppId = A.appId, e.verifySignType = "sha1", e.verifyTimestamp = A.timestamp + "", e.verifyNonceStr = A.nonceStr, e.verifySignature = A.signature, e
        }

        function i(e) {
            return {
                timeStamp: e.timestamp + "",
                nonceStr: e.nonceStr,
                "package": e["package"],
                paySign: e.paySign,
                signType: e.signType || "SHA1"
            }
        }

        function s(e, t, n) {
            var r, o, i;
            switch (delete t.err_code, delete t.err_desc, delete t.err_detail, r = t.errMsg, r || (r = t.err_msg, delete t.err_msg, r = a(e, r), t.errMsg = r), n = n || {}, n._complete && (n._complete(t), delete n._complete), r = t.errMsg || "", A.debug && !n.isInnerInvoke && alert(JSON.stringify(t)), o = r.indexOf(":"), i = r.substring(o + 1)) {
                case"ok":
                    n.success && n.success(t);
                    break;
                case"cancel":
                    n.cancel && n.cancel(t);
                    break;
                default:
                    n.fail && n.fail(t)
            }
            n.complete && n.complete(t)
        }

        function a(e, t) {
            var n, r, o = e, i = h[o];
            return i && (o = i), n = "ok", t && (r = t.indexOf(":"), n = t.substring(r + 1), "confirm" == n && (n = "ok"), "failed" == n && (n = "fail"), -1 != n.indexOf("failed_") && (n = n.substring(7)), -1 != n.indexOf("fail_") && (n = n.substring(5)), n = n.replace(/_/g, " "), n = n.toLowerCase(), ("access denied" == n || "no permission to execute" == n) && (n = "permission denied"), "config" == o && "function not exist" == n && (n = "ok"), "" == n && (n = "fail")), t = o + ":" + n
        }

        function c(e) {
            var t, n, r, o;
            if (e) {
                for (t = 0, n = e.length; n > t; ++t)r = e[t], o = g[r], o && (e[t] = o);
                return e
            }
        }

        function u(e, t) {
            if (!(!A.debug || t && t.isInnerInvoke)) {
                var n = h[e];
                n && (e = n), t && t._complete && delete t._complete, console.log('"' + e + '",', t || "")
            }
        }

        function d() {
            0 != P.preVerifyState && (w || y || A.debug || "6.0.2" > x || P.systemType < 0 || I || (I = !0, P.appId = A.appId, P.initTime = N.initEndTime - N.initStartTime, P.preVerifyTime = N.preVerifyEndTime - N.preVerifyStartTime, D.getNetworkType({
                isInnerInvoke: !0,
                success: function (e) {
                    var t, n;
                    P.networkType = e.networkType, t = "http://open.weixin.qq.com/sdk/report?v=" + P.version + "&o=" + P.preVerifyState + "&s=" + P.systemType + "&c=" + P.clientVersion + "&a=" + P.appId + "&n=" + P.networkType + "&i=" + P.initTime + "&p=" + P.preVerifyTime + "&u=" + P.url, n = new Image, n.src = t
                }
            })))
        }

        function l() {
            return (new Date).getTime()
        }

        function f(t) {
            S && (e.WeixinJSBridge ? t() : _.addEventListener && _.addEventListener("WeixinJSBridgeReady", t, !1))
        }

        function p() {
            D.invoke || (D.invoke = function (t, n, r) {
                e.WeixinJSBridge && WeixinJSBridge.invoke(t, o(n), r)
            }, D.on = function (t, n) {
                e.WeixinJSBridge && WeixinJSBridge.on(t, n)
            })
        }

        var g, h, _, m, v, b, w, y, S, k, E, x, I, O, N, P, A, T, C, D;
        if (!e.jWeixin)return g = {
            config: "preVerifyJSAPI",
            onMenuShareTimeline: "menu:share:timeline",
            onMenuShareAppMessage: "menu:share:appmessage",
            onMenuShareQQ: "menu:share:qq",
            onMenuShareWeibo: "menu:share:weiboApp",
            onMenuShareQZone: "menu:share:QZone",
            previewImage: "imagePreview",
            getLocation: "geoLocation",
            openProductSpecificView: "openProductViewWithPid",
            addCard: "batchAddCard",
            openCard: "batchViewCard",
            chooseWXPay: "getBrandWCPayRequest"
        }, h = function () {
            var e, t = {};
            for (e in g)t[g[e]] = e;
            return t
        }(), _ = e.document, m = _.title, v = navigator.userAgent.toLowerCase(), b = navigator.platform.toLowerCase(), w = !(!b.match("mac") && !b.match("win")), y = -1 != v.indexOf("wxdebugger"), S = -1 != v.indexOf("micromessenger"), k = -1 != v.indexOf("android"), E = -1 != v.indexOf("iphone") || -1 != v.indexOf("ipad"), x = function () {
            var e = v.match(/micromessenger\/(\d+\.\d+\.\d+)/) || v.match(/micromessenger\/(\d+\.\d+)/);
            return e ? e[1] : ""
        }(), I = !1, O = !1, N = {
            initStartTime: l(),
            initEndTime: 0,
            preVerifyStartTime: 0,
            preVerifyEndTime: 0
        }, P = {
            version: 1,
            appId: "",
            initTime: 0,
            preVerifyTime: 0,
            networkType: "",
            preVerifyState: 1,
            systemType: E ? 1 : k ? 2 : -1,
            clientVersion: x,
            url: encodeURIComponent(location.href)
        }, A = {}, T = {_completes: []}, C = {state: 0, data: {}}, f(function () {
            N.initEndTime = l()
        }), D = {
            config: function (e) {
                A = e, u("config", e);
                var t = A.check !== !1;
                f(function () {
                    var e, r, o;
                    if (t)n(g.config, {verifyJsApiList: c(A.jsApiList)}, function () {
                        T._complete = function (e) {
                            N.preVerifyEndTime = l(), C.state = 1, C.data = e
                        }, T.success = function () {
                            P.preVerifyState = 0
                        }, T.fail = function (e) {
                            T._fail ? T._fail(e) : C.state = -1
                        };
                        var e = T._completes;
                        return e.push(function () {
                            d()
                        }), T.complete = function () {
                            for (var t = 0, n = e.length; n > t; ++t)e[t]();
                            T._completes = []
                        }, T
                    }()), N.preVerifyStartTime = l(); else {
                        for (C.state = 1, e = T._completes, r = 0, o = e.length; o > r; ++r)e[r]();
                        T._completes = []
                    }
                }), A.beta && p()
            }, ready: function (e) {
                0 != C.state ? e() : (T._completes.push(e), !S && A.debug && e())
            }, error: function (e) {
                "6.0.2" > x || O || (O = !0, -1 == C.state ? e(C.data) : T._fail = e)
            }, checkJsApi: function (e) {
                var t = function (e) {
                    var t, n, r = e.checkResult;
                    for (t in r)n = h[t],
                    n && (r[n] = r[t], delete r[t]);
                    return e
                };
                n("checkJsApi", {jsApiList: c(e.jsApiList)}, function () {
                    return e._complete = function (e) {
                        if (k) {
                            var n = e.checkResult;
                            n && (e.checkResult = JSON.parse(n))
                        }
                        e = t(e)
                    }, e
                }())
            }, onMenuShareTimeline: function (e) {
                r(g.onMenuShareTimeline, {
                    complete: function () {
                        n("shareTimeline", {
                            title: e.title || m,
                            desc: e.title || m,
                            img_url: e.imgUrl || "",
                            link: e.link || location.href,
                            type: e.type || "link",
                            data_url: e.dataUrl || ""
                        }, e)
                    }
                }, e)
            }, onMenuShareAppMessage: function (e) {
                r(g.onMenuShareAppMessage, {
                    complete: function () {
                        n("sendAppMessage", {
                            title: e.title || m,
                            desc: e.desc || "",
                            link: e.link || location.href,
                            img_url: e.imgUrl || "",
                            type: e.type || "link",
                            data_url: e.dataUrl || ""
                        }, e)
                    }
                }, e)
            }, onMenuShareQQ: function (e) {
                r(g.onMenuShareQQ, {
                    complete: function () {
                        n("shareQQ", {
                            title: e.title || m,
                            desc: e.desc || "",
                            img_url: e.imgUrl || "",
                            link: e.link || location.href
                        }, e)
                    }
                }, e)
            }, onMenuShareWeibo: function (e) {
                r(g.onMenuShareWeibo, {
                    complete: function () {
                        n("shareWeiboApp", {
                            title: e.title || m,
                            desc: e.desc || "",
                            img_url: e.imgUrl || "",
                            link: e.link || location.href
                        }, e)
                    }
                }, e)
            }, onMenuShareQZone: function (e) {
                r(g.onMenuShareQZone, {
                    complete: function () {
                        n("shareQZone", {
                            title: e.title || m,
                            desc: e.desc || "",
                            img_url: e.imgUrl || "",
                            link: e.link || location.href
                        }, e)
                    }
                }, e)
            }, startRecord: function (e) {
                n("startRecord", {}, e)
            }, stopRecord: function (e) {
                n("stopRecord", {}, e)
            }, onVoiceRecordEnd: function (e) {
                r("onVoiceRecordEnd", e)
            }, playVoice: function (e) {
                n("playVoice", {localId: e.localId}, e)
            }, pauseVoice: function (e) {
                n("pauseVoice", {localId: e.localId}, e)
            }, stopVoice: function (e) {
                n("stopVoice", {localId: e.localId}, e)
            }, onVoicePlayEnd: function (e) {
                r("onVoicePlayEnd", e)
            }, uploadVoice: function (e) {
                n("uploadVoice", {localId: e.localId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1}, e)
            }, downloadVoice: function (e) {
                n("downloadVoice", {serverId: e.serverId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1}, e)
            }, translateVoice: function (e) {
                n("translateVoice", {localId: e.localId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1}, e)
            }, chooseImage: function (e) {
                n("chooseImage", {
                    scene: "1|2",
                    count: e.count || 9,
                    sizeType: e.sizeType || ["original", "compressed"],
                    sourceType: e.sourceType || ["album", "camera"]
                }, function () {
                    return e._complete = function (e) {
                        if (k) {
                            var t = e.localIds;
                            t && (e.localIds = JSON.parse(t))
                        }
                    }, e
                }())
            }, previewImage: function (e) {
                n(g.previewImage, {current: e.current, urls: e.urls}, e)
            }, uploadImage: function (e) {
                n("uploadImage", {localId: e.localId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1}, e)
            }, downloadImage: function (e) {
                n("downloadImage", {serverId: e.serverId, isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1}, e)
            }, getNetworkType: function (e) {
                var t = function (e) {
                    var t, n, r, o = e.errMsg;
                    if (e.errMsg = "getNetworkType:ok", t = e.subtype, delete e.subtype, t)e.networkType = t; else switch (n = o.indexOf(":"), r = o.substring(n + 1)) {
                        case"wifi":
                        case"edge":
                        case"wwan":
                            e.networkType = r;
                            break;
                        default:
                            e.errMsg = "getNetworkType:fail"
                    }
                    return e
                };
                n("getNetworkType", {}, function () {
                    return e._complete = function (e) {
                        e = t(e)
                    }, e
                }())
            }, openLocation: function (e) {
                n("openLocation", {
                    latitude: e.latitude,
                    longitude: e.longitude,
                    name: e.name || "",
                    address: e.address || "",
                    scale: e.scale || 28,
                    infoUrl: e.infoUrl || ""
                }, e)
            }, getLocation: function (e) {
                e = e || {}, n(g.getLocation, {type: e.type || "wgs84"}, function () {
                    return e._complete = function (e) {
                        delete e.type
                    }, e
                }())
            }, hideOptionMenu: function (e) {
                n("hideOptionMenu", {}, e)
            }, showOptionMenu: function (e) {
                n("showOptionMenu", {}, e)
            }, closeWindow: function (e) {
                e = e || {}, n("closeWindow", {}, e)
            }, hideMenuItems: function (e) {
                n("hideMenuItems", {menuList: e.menuList}, e)
            }, showMenuItems: function (e) {
                n("showMenuItems", {menuList: e.menuList}, e)
            }, hideAllNonBaseMenuItem: function (e) {
                n("hideAllNonBaseMenuItem", {}, e)
            }, showAllNonBaseMenuItem: function (e) {
                n("showAllNonBaseMenuItem", {}, e)
            }, scanQRCode: function (e) {
                e = e || {}, n("scanQRCode", {
                    needResult: e.needResult || 0,
                    scanType: e.scanType || ["qrCode", "barCode"]
                }, function () {
                    return e._complete = function (e) {
                        var t, n;
                        E && (t = e.resultStr, t && (n = JSON.parse(t), e.resultStr = n && n.scan_code && n.scan_code.scan_result))
                    }, e
                }())
            }, openProductSpecificView: function (e) {
                n(g.openProductSpecificView, {pid: e.productId, view_type: e.viewType || 0, ext_info: e.extInfo}, e)
            }, addCard: function (e) {
                var t, r, o, i, s = e.cardList, a = [];
                for (t = 0, r = s.length; r > t; ++t)o = s[t], i = {card_id: o.cardId, card_ext: o.cardExt}, a.push(i);
                n(g.addCard, {card_list: a}, function () {
                    return e._complete = function (e) {
                        var t, n, r, o = e.card_list;
                        if (o) {
                            for (o = JSON.parse(o), t = 0, n = o.length; n > t; ++t)r = o[t], r.cardId = r.card_id, r.cardExt = r.card_ext, r.isSuccess = !!r.is_succ, delete r.card_id, delete r.card_ext, delete r.is_succ;
                            e.cardList = o, delete e.card_list
                        }
                    }, e
                }())
            }, chooseCard: function (e) {
                n("chooseCard", {
                    app_id: A.appId,
                    location_id: e.shopId || "",
                    sign_type: e.signType || "SHA1",
                    card_id: e.cardId || "",
                    card_type: e.cardType || "",
                    card_sign: e.cardSign,
                    time_stamp: e.timestamp + "",
                    nonce_str: e.nonceStr
                }, function () {
                    return e._complete = function (e) {
                        e.cardList = e.choose_card_info, delete e.choose_card_info
                    }, e
                }())
            }, openCard: function (e) {
                var t, r, o, i, s = e.cardList, a = [];
                for (t = 0, r = s.length; r > t; ++t)o = s[t], i = {card_id: o.cardId, code: o.code}, a.push(i);
                n(g.openCard, {card_list: a}, e)
            }, chooseWXPay: function (e) {
                n(g.chooseWXPay, i(e), e)
            }
        }, t && (e.wx = e.jWeixin = D), D
    }(window, !0)
}, function (e, t) {
    var n = !1;
    !function () {
        "use strict";
        function t(e, n) {
            function r(e, t) {
                return function () {
                    return e.apply(t, arguments)
                }
            }

            var i;
            if (n = n || {}, this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = n.touchBoundary || 10, this.layer = e, this.tapDelay = n.tapDelay || 200, this.tapTimeout = n.tapTimeout || 700, !t.notNeeded(e)) {
                for (var s = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], a = this, c = 0, u = s.length; c < u; c++)a[s[c]] = r(a[s[c]], a);
                o && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)), e.addEventListener("click", this.onClick, !0), e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1), e.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function (t, n, r) {
                    var o = Node.prototype.removeEventListener;
                    "click" === t ? o.call(e, t, n.hijacked || n, r) : o.call(e, t, n, r)
                }, e.addEventListener = function (t, n, r) {
                    var o = Node.prototype.addEventListener;
                    "click" === t ? o.call(e, t, n.hijacked || (n.hijacked = function (e) {
                            e.propagationStopped || n(e)
                        }), r) : o.call(e, t, n, r)
                }), "function" == typeof e.onclick && (i = e.onclick, e.addEventListener("click", function (e) {
                    i(e)
                }, !1), e.onclick = null)
            }
        }

        var r = navigator.userAgent.indexOf("Windows Phone") >= 0, o = navigator.userAgent.indexOf("Android") > 0 && !r, i = /iP(ad|hone|od)/.test(navigator.userAgent) && !r, s = i && /OS 4_\d(_\d)?/.test(navigator.userAgent), a = i && /OS [6-7]_\d/.test(navigator.userAgent), c = navigator.userAgent.indexOf("BB10") > 0;
        t.prototype.needsClick = function (e) {
            switch (e.nodeName.toLowerCase()) {
                case"button":
                case"select":
                case"textarea":
                    if (e.disabled)return !0;
                    break;
                case"input":
                    if (i && "file" === e.type || e.disabled)return !0;
                    break;
                case"label":
                case"iframe":
                case"video":
                    return !0
            }
            return /\bneedsclick\b/.test(e.className)
        }, t.prototype.needsFocus = function (e) {
            switch (e.nodeName.toLowerCase()) {
                case"textarea":
                    return !0;
                case"select":
                    return !o;
                case"input":
                    switch (e.type) {
                        case"button":
                        case"checkbox":
                        case"file":
                        case"image":
                        case"radio":
                        case"submit":
                            return !1
                    }
                    return !e.disabled && !e.readOnly;
                default:
                    return /\bneedsfocus\b/.test(e.className)
            }
        }, t.prototype.sendClick = function (e, t) {
            var n, r;
            document.activeElement && document.activeElement !== e && document.activeElement.blur(), r = t.changedTouches[0], n = document.createEvent("MouseEvents"), n.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), n.forwardedTouchEvent = !0, e.dispatchEvent(n)
        }, t.prototype.determineEventType = function (e) {
            return o && "select" === e.tagName.toLowerCase() ? "mousedown" : "click"
        }, t.prototype.focus = function (e) {
            var t;
            i && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type && "month" !== e.type ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus()
        }, t.prototype.updateScrollParent = function (e) {
            var t, n;
            if (t = e.fastClickScrollParent, !t || !t.contains(e)) {
                n = e;
                do {
                    if (n.scrollHeight > n.offsetHeight) {
                        t = n, e.fastClickScrollParent = n;
                        break
                    }
                    n = n.parentElement
                } while (n)
            }
            t && (t.fastClickLastScrollTop = t.scrollTop)
        }, t.prototype.getTargetElementFromEventTarget = function (e) {
            return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
        }, t.prototype.onTouchStart = function (e) {
            var t, n, r;
            if (e.targetTouches.length > 1)return !0;
            if (t = this.getTargetElementFromEventTarget(e.target), n = e.targetTouches[0], i) {
                if (r = window.getSelection(), r.rangeCount && !r.isCollapsed)return !0;
                if (!s) {
                    if (n.identifier && n.identifier === this.lastTouchIdentifier)return e.preventDefault(), !1;
                    this.lastTouchIdentifier = n.identifier, this.updateScrollParent(t)
                }
            }
            return this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, this.touchStartX = n.pageX, this.touchStartY = n.pageY, e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(), !0
        }, t.prototype.touchHasMoved = function (e) {
            var t = e.changedTouches[0], n = this.touchBoundary;
            return Math.abs(t.pageX - this.touchStartX) > n || Math.abs(t.pageY - this.touchStartY) > n
        }, t.prototype.onTouchMove = function (e) {
            return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && (this.trackingClick = !1, this.targetElement = null), !0)
        }, t.prototype.findControl = function (e) {
            return void 0 !== e.control ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
        }, t.prototype.onTouchEnd = function (e) {
            var t, n, r, c, u, d = this.targetElement;
            if (!this.trackingClick)return !0;
            if (e.timeStamp - this.lastClickTime < this.tapDelay)return this.cancelNextClick = !0, !0;
            if (e.timeStamp - this.trackingClickStart > this.tapTimeout)return !0;
            if (this.cancelNextClick = !1, this.lastClickTime = e.timeStamp, n = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, a && (u = e.changedTouches[0], d = document.elementFromPoint(u.pageX - window.pageXOffset, u.pageY - window.pageYOffset) || d, d.fastClickScrollParent = this.targetElement.fastClickScrollParent), r = d.tagName.toLowerCase(), "label" === r) {
                if (t = this.findControl(d)) {
                    if (this.focus(d), o)return !1;
                    d = t
                }
            } else if (this.needsFocus(d))return e.timeStamp - n > 100 || i && window.top !== window && "input" === r ? (this.targetElement = null, !1) : (this.focus(d), this.sendClick(d, e), i && "select" === r || (this.targetElement = null, e.preventDefault()), !1);
            return !(!i || s || (c = d.fastClickScrollParent, !c || c.fastClickLastScrollTop === c.scrollTop)) || (this.needsClick(d) || (e.preventDefault(), this.sendClick(d, e)), !1)
        }, t.prototype.onTouchCancel = function () {
            this.trackingClick = !1, this.targetElement = null
        }, t.prototype.onMouse = function (e) {
            return !this.targetElement || (!!e.forwardedTouchEvent || (!e.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), !1))))
        }, t.prototype.onClick = function (e) {
            var t;
            return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === e.target.type && 0 === e.detail || (t = this.onMouse(e), t || (this.targetElement = null), t)
        }, t.prototype.destroy = function () {
            var e = this.layer;
            o && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1)
        }, t.notNeeded = function (e) {
            var t, n, r, i;
            if ("undefined" == typeof window.ontouchstart)return !0;
            if (n = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
                if (!o)return !0;
                if (t = document.querySelector("meta[name=viewport]")) {
                    if (t.content.indexOf("user-scalable=no") !== -1)return !0;
                    if (n > 31 && document.documentElement.scrollWidth <= window.outerWidth)return !0
                }
            }
            if (c && (r = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/), r[1] >= 10 && r[2] >= 3 && (t = document.querySelector("meta[name=viewport]")))) {
                if (t.content.indexOf("user-scalable=no") !== -1)return !0;
                if (document.documentElement.scrollWidth <= window.outerWidth)return !0
            }
            return "none" === e.style.msTouchAction || "manipulation" === e.style.touchAction || (i = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1], !!(i >= 27 && (t = document.querySelector("meta[name=viewport]"), t && (t.content.indexOf("user-scalable=no") !== -1 || document.documentElement.scrollWidth <= window.outerWidth))) || ("none" === e.style.touchAction || "manipulation" === e.style.touchAction))
        }, t.attach = function (e, n) {
            return new t(e, n)
        }, "function" == typeof n && "object" == typeof n.amd && n.amd ? n(function () {
            return t
        }) : "undefined" != typeof e && e.exports ? (e.exports = t.attach, e.exports.FastClick = t) : window.FastClick = t
    }()
}]);