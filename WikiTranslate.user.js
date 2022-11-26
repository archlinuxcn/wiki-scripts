// ==UserScript==
// @name         Wiki Translate Userscript
// @namespace    https://github.com/archlinuxcn/wiki-scripts
// @version      0.1
// @description  为中文编辑者设计的翻译辅助脚本
// @author       Archeb
// @match        https://wiki.archlinuxcn.org/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

/**
 * Original file: /npm/js-md5@0.7.3/src/md5.js
 */
!function () { "use strict"; var ERROR = "input is invalid type", WINDOW = "object" == typeof window, root = WINDOW ? window : {}; root.JS_MD5_NO_WINDOW && (WINDOW = !1); var WEB_WORKER = !WINDOW && "object" == typeof self, NODE_JS = !root.JS_MD5_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node; NODE_JS ? root = global : WEB_WORKER && (root = self); var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && "object" == typeof module && module.exports, AMD = "function" == typeof define && define.amd, ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer, HEX_CHARS = "0123456789abcdef".split(""), EXTRA = [128, 32768, 8388608, -2147483648], SHIFT = [0, 8, 16, 24], OUTPUT_TYPES = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"], BASE64_ENCODE_CHAR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), blocks = [], buffer8; if (ARRAY_BUFFER) { var buffer = new ArrayBuffer(68); buffer8 = new Uint8Array(buffer), blocks = new Uint32Array(buffer) } !root.JS_MD5_NO_NODE_JS && Array.isArray || (Array.isArray = function (t) { return "[object Array]" === Object.prototype.toString.call(t) }), !ARRAY_BUFFER || !root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function (t) { return "object" == typeof t && t.buffer && t.buffer.constructor === ArrayBuffer }); var createOutputMethod = function (r) { return function (t) { return new Md5(!0).update(t)[r]() } }, createMethod = function () { var r = createOutputMethod("hex"); NODE_JS && (r = nodeWrap(r)), r.create = function () { return new Md5 }, r.update = function (t) { return r.create().update(t) }; for (var t = 0; t < OUTPUT_TYPES.length; ++t) { var e = OUTPUT_TYPES[t]; r[e] = createOutputMethod(e) } return r }, nodeWrap = function (method) { var crypto = eval("require('crypto')"), Buffer = eval("require('buffer').Buffer"), nodeMethod = function (t) { if ("string" == typeof t) return crypto.createHash("md5").update(t, "utf8").digest("hex"); if (null == t) throw ERROR; return t.constructor === ArrayBuffer && (t = new Uint8Array(t)), Array.isArray(t) || ArrayBuffer.isView(t) || t.constructor === Buffer ? crypto.createHash("md5").update(new Buffer(t)).digest("hex") : method(t) }; return nodeMethod }; function Md5(t) { if (t) blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0, this.blocks = blocks, this.buffer8 = buffer8; else if (ARRAY_BUFFER) { var r = new ArrayBuffer(68); this.buffer8 = new Uint8Array(r), this.blocks = new Uint32Array(r) } else this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0 } Md5.prototype.update = function (t) { if (!this.finalized) { var r, e = typeof t; if ("string" !== e) { if ("object" !== e) throw ERROR; if (null === t) throw ERROR; if (ARRAY_BUFFER && t.constructor === ArrayBuffer) t = new Uint8Array(t); else if (!(Array.isArray(t) || ARRAY_BUFFER && ArrayBuffer.isView(t))) throw ERROR; r = !0 } for (var s, i, o = 0, h = t.length, f = this.blocks, a = this.buffer8; o < h;) { if (this.hashed && (this.hashed = !1, f[0] = f[16], f[16] = f[1] = f[2] = f[3] = f[4] = f[5] = f[6] = f[7] = f[8] = f[9] = f[10] = f[11] = f[12] = f[13] = f[14] = f[15] = 0), r) if (ARRAY_BUFFER) for (i = this.start; o < h && i < 64; ++o)a[i++] = t[o]; else for (i = this.start; o < h && i < 64; ++o)f[i >> 2] |= t[o] << SHIFT[3 & i++]; else if (ARRAY_BUFFER) for (i = this.start; o < h && i < 64; ++o)(s = t.charCodeAt(o)) < 128 ? a[i++] = s : (s < 2048 ? a[i++] = 192 | s >> 6 : (s < 55296 || 57344 <= s ? a[i++] = 224 | s >> 12 : (s = 65536 + ((1023 & s) << 10 | 1023 & t.charCodeAt(++o)), a[i++] = 240 | s >> 18, a[i++] = 128 | s >> 12 & 63), a[i++] = 128 | s >> 6 & 63), a[i++] = 128 | 63 & s); else for (i = this.start; o < h && i < 64; ++o)(s = t.charCodeAt(o)) < 128 ? f[i >> 2] |= s << SHIFT[3 & i++] : (s < 2048 ? f[i >> 2] |= (192 | s >> 6) << SHIFT[3 & i++] : (s < 55296 || 57344 <= s ? f[i >> 2] |= (224 | s >> 12) << SHIFT[3 & i++] : (s = 65536 + ((1023 & s) << 10 | 1023 & t.charCodeAt(++o)), f[i >> 2] |= (240 | s >> 18) << SHIFT[3 & i++], f[i >> 2] |= (128 | s >> 12 & 63) << SHIFT[3 & i++]), f[i >> 2] |= (128 | s >> 6 & 63) << SHIFT[3 & i++]), f[i >> 2] |= (128 | 63 & s) << SHIFT[3 & i++]); this.lastByteIndex = i, this.bytes += i - this.start, 64 <= i ? (this.start = i - 64, this.hash(), this.hashed = !0) : this.start = i } return 4294967295 < this.bytes && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this } }, Md5.prototype.finalize = function () { if (!this.finalized) { this.finalized = !0; var t = this.blocks, r = this.lastByteIndex; t[r >> 2] |= EXTRA[3 & r], 56 <= r && (this.hashed || this.hash(), t[0] = t[16], t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0), t[14] = this.bytes << 3, t[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash() } }, Md5.prototype.hash = function () { var t, r, e, s, i, o, h = this.blocks; this.first ? r = ((r = ((t = ((t = h[0] - 680876937) << 7 | t >>> 25) - 271733879 << 0) ^ (e = ((e = (-271733879 ^ (s = ((s = (-1732584194 ^ 2004318071 & t) + h[1] - 117830708) << 12 | s >>> 20) + t << 0) & (-271733879 ^ t)) + h[2] - 1126478375) << 17 | e >>> 15) + s << 0) & (s ^ t)) + h[3] - 1316259209) << 22 | r >>> 10) + e << 0 : (t = this.h0, r = this.h1, e = this.h2, r = ((r += ((t = ((t += ((s = this.h3) ^ r & (e ^ s)) + h[0] - 680876936) << 7 | t >>> 25) + r << 0) ^ (e = ((e += (r ^ (s = ((s += (e ^ t & (r ^ e)) + h[1] - 389564586) << 12 | s >>> 20) + t << 0) & (t ^ r)) + h[2] + 606105819) << 17 | e >>> 15) + s << 0) & (s ^ t)) + h[3] - 1044525330) << 22 | r >>> 10) + e << 0), r = ((r += ((t = ((t += (s ^ r & (e ^ s)) + h[4] - 176418897) << 7 | t >>> 25) + r << 0) ^ (e = ((e += (r ^ (s = ((s += (e ^ t & (r ^ e)) + h[5] + 1200080426) << 12 | s >>> 20) + t << 0) & (t ^ r)) + h[6] - 1473231341) << 17 | e >>> 15) + s << 0) & (s ^ t)) + h[7] - 45705983) << 22 | r >>> 10) + e << 0, r = ((r += ((t = ((t += (s ^ r & (e ^ s)) + h[8] + 1770035416) << 7 | t >>> 25) + r << 0) ^ (e = ((e += (r ^ (s = ((s += (e ^ t & (r ^ e)) + h[9] - 1958414417) << 12 | s >>> 20) + t << 0) & (t ^ r)) + h[10] - 42063) << 17 | e >>> 15) + s << 0) & (s ^ t)) + h[11] - 1990404162) << 22 | r >>> 10) + e << 0, r = ((r += ((t = ((t += (s ^ r & (e ^ s)) + h[12] + 1804603682) << 7 | t >>> 25) + r << 0) ^ (e = ((e += (r ^ (s = ((s += (e ^ t & (r ^ e)) + h[13] - 40341101) << 12 | s >>> 20) + t << 0) & (t ^ r)) + h[14] - 1502002290) << 17 | e >>> 15) + s << 0) & (s ^ t)) + h[15] + 1236535329) << 22 | r >>> 10) + e << 0, r = ((r += ((s = ((s += (r ^ e & ((t = ((t += (e ^ s & (r ^ e)) + h[1] - 165796510) << 5 | t >>> 27) + r << 0) ^ r)) + h[6] - 1069501632) << 9 | s >>> 23) + t << 0) ^ t & ((e = ((e += (t ^ r & (s ^ t)) + h[11] + 643717713) << 14 | e >>> 18) + s << 0) ^ s)) + h[0] - 373897302) << 20 | r >>> 12) + e << 0, r = ((r += ((s = ((s += (r ^ e & ((t = ((t += (e ^ s & (r ^ e)) + h[5] - 701558691) << 5 | t >>> 27) + r << 0) ^ r)) + h[10] + 38016083) << 9 | s >>> 23) + t << 0) ^ t & ((e = ((e += (t ^ r & (s ^ t)) + h[15] - 660478335) << 14 | e >>> 18) + s << 0) ^ s)) + h[4] - 405537848) << 20 | r >>> 12) + e << 0, r = ((r += ((s = ((s += (r ^ e & ((t = ((t += (e ^ s & (r ^ e)) + h[9] + 568446438) << 5 | t >>> 27) + r << 0) ^ r)) + h[14] - 1019803690) << 9 | s >>> 23) + t << 0) ^ t & ((e = ((e += (t ^ r & (s ^ t)) + h[3] - 187363961) << 14 | e >>> 18) + s << 0) ^ s)) + h[8] + 1163531501) << 20 | r >>> 12) + e << 0, r = ((r += ((s = ((s += (r ^ e & ((t = ((t += (e ^ s & (r ^ e)) + h[13] - 1444681467) << 5 | t >>> 27) + r << 0) ^ r)) + h[2] - 51403784) << 9 | s >>> 23) + t << 0) ^ t & ((e = ((e += (t ^ r & (s ^ t)) + h[7] + 1735328473) << 14 | e >>> 18) + s << 0) ^ s)) + h[12] - 1926607734) << 20 | r >>> 12) + e << 0, r = ((r += ((o = (s = ((s += ((i = r ^ e) ^ (t = ((t += (i ^ s) + h[5] - 378558) << 4 | t >>> 28) + r << 0)) + h[8] - 2022574463) << 11 | s >>> 21) + t << 0) ^ t) ^ (e = ((e += (o ^ r) + h[11] + 1839030562) << 16 | e >>> 16) + s << 0)) + h[14] - 35309556) << 23 | r >>> 9) + e << 0, r = ((r += ((o = (s = ((s += ((i = r ^ e) ^ (t = ((t += (i ^ s) + h[1] - 1530992060) << 4 | t >>> 28) + r << 0)) + h[4] + 1272893353) << 11 | s >>> 21) + t << 0) ^ t) ^ (e = ((e += (o ^ r) + h[7] - 155497632) << 16 | e >>> 16) + s << 0)) + h[10] - 1094730640) << 23 | r >>> 9) + e << 0, r = ((r += ((o = (s = ((s += ((i = r ^ e) ^ (t = ((t += (i ^ s) + h[13] + 681279174) << 4 | t >>> 28) + r << 0)) + h[0] - 358537222) << 11 | s >>> 21) + t << 0) ^ t) ^ (e = ((e += (o ^ r) + h[3] - 722521979) << 16 | e >>> 16) + s << 0)) + h[6] + 76029189) << 23 | r >>> 9) + e << 0, r = ((r += ((o = (s = ((s += ((i = r ^ e) ^ (t = ((t += (i ^ s) + h[9] - 640364487) << 4 | t >>> 28) + r << 0)) + h[12] - 421815835) << 11 | s >>> 21) + t << 0) ^ t) ^ (e = ((e += (o ^ r) + h[15] + 530742520) << 16 | e >>> 16) + s << 0)) + h[2] - 995338651) << 23 | r >>> 9) + e << 0, r = ((r += ((s = ((s += (r ^ ((t = ((t += (e ^ (r | ~s)) + h[0] - 198630844) << 6 | t >>> 26) + r << 0) | ~e)) + h[7] + 1126891415) << 10 | s >>> 22) + t << 0) ^ ((e = ((e += (t ^ (s | ~r)) + h[14] - 1416354905) << 15 | e >>> 17) + s << 0) | ~t)) + h[5] - 57434055) << 21 | r >>> 11) + e << 0, r = ((r += ((s = ((s += (r ^ ((t = ((t += (e ^ (r | ~s)) + h[12] + 1700485571) << 6 | t >>> 26) + r << 0) | ~e)) + h[3] - 1894986606) << 10 | s >>> 22) + t << 0) ^ ((e = ((e += (t ^ (s | ~r)) + h[10] - 1051523) << 15 | e >>> 17) + s << 0) | ~t)) + h[1] - 2054922799) << 21 | r >>> 11) + e << 0, r = ((r += ((s = ((s += (r ^ ((t = ((t += (e ^ (r | ~s)) + h[8] + 1873313359) << 6 | t >>> 26) + r << 0) | ~e)) + h[15] - 30611744) << 10 | s >>> 22) + t << 0) ^ ((e = ((e += (t ^ (s | ~r)) + h[6] - 1560198380) << 15 | e >>> 17) + s << 0) | ~t)) + h[13] + 1309151649) << 21 | r >>> 11) + e << 0, r = ((r += ((s = ((s += (r ^ ((t = ((t += (e ^ (r | ~s)) + h[4] - 145523070) << 6 | t >>> 26) + r << 0) | ~e)) + h[11] - 1120210379) << 10 | s >>> 22) + t << 0) ^ ((e = ((e += (t ^ (s | ~r)) + h[2] + 718787259) << 15 | e >>> 17) + s << 0) | ~t)) + h[9] - 343485551) << 21 | r >>> 11) + e << 0, this.first ? (this.h0 = t + 1732584193 << 0, this.h1 = r - 271733879 << 0, this.h2 = e - 1732584194 << 0, this.h3 = s + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + t << 0, this.h1 = this.h1 + r << 0, this.h2 = this.h2 + e << 0, this.h3 = this.h3 + s << 0) }, Md5.prototype.hex = function () { this.finalize(); var t = this.h0, r = this.h1, e = this.h2, s = this.h3; return HEX_CHARS[t >> 4 & 15] + HEX_CHARS[15 & t] + HEX_CHARS[t >> 12 & 15] + HEX_CHARS[t >> 8 & 15] + HEX_CHARS[t >> 20 & 15] + HEX_CHARS[t >> 16 & 15] + HEX_CHARS[t >> 28 & 15] + HEX_CHARS[t >> 24 & 15] + HEX_CHARS[r >> 4 & 15] + HEX_CHARS[15 & r] + HEX_CHARS[r >> 12 & 15] + HEX_CHARS[r >> 8 & 15] + HEX_CHARS[r >> 20 & 15] + HEX_CHARS[r >> 16 & 15] + HEX_CHARS[r >> 28 & 15] + HEX_CHARS[r >> 24 & 15] + HEX_CHARS[e >> 4 & 15] + HEX_CHARS[15 & e] + HEX_CHARS[e >> 12 & 15] + HEX_CHARS[e >> 8 & 15] + HEX_CHARS[e >> 20 & 15] + HEX_CHARS[e >> 16 & 15] + HEX_CHARS[e >> 28 & 15] + HEX_CHARS[e >> 24 & 15] + HEX_CHARS[s >> 4 & 15] + HEX_CHARS[15 & s] + HEX_CHARS[s >> 12 & 15] + HEX_CHARS[s >> 8 & 15] + HEX_CHARS[s >> 20 & 15] + HEX_CHARS[s >> 16 & 15] + HEX_CHARS[s >> 28 & 15] + HEX_CHARS[s >> 24 & 15] }, Md5.prototype.toString = Md5.prototype.hex, Md5.prototype.digest = function () { this.finalize(); var t = this.h0, r = this.h1, e = this.h2, s = this.h3; return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255, 255 & r, r >> 8 & 255, r >> 16 & 255, r >> 24 & 255, 255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255, 255 & s, s >> 8 & 255, s >> 16 & 255, s >> 24 & 255] }, Md5.prototype.array = Md5.prototype.digest, Md5.prototype.arrayBuffer = function () { this.finalize(); var t = new ArrayBuffer(16), r = new Uint32Array(t); return r[0] = this.h0, r[1] = this.h1, r[2] = this.h2, r[3] = this.h3, t }, Md5.prototype.buffer = Md5.prototype.arrayBuffer, Md5.prototype.base64 = function () { for (var t, r, e, s = "", i = this.array(), o = 0; o < 15;)t = i[o++], r = i[o++], e = i[o++], s += BASE64_ENCODE_CHAR[t >>> 2] + BASE64_ENCODE_CHAR[63 & (t << 4 | r >>> 4)] + BASE64_ENCODE_CHAR[63 & (r << 2 | e >>> 6)] + BASE64_ENCODE_CHAR[63 & e]; return t = i[o], s += BASE64_ENCODE_CHAR[t >>> 2] + BASE64_ENCODE_CHAR[t << 4 & 63] + "==" }; var exports = createMethod(); COMMON_JS ? module.exports = exports : (root.md5 = exports, AMD && define(function () { return exports })) }();

/**
 * Original file: /npm/fetch-jsonp@1.2.3/build/fetch-jsonp.js
 */
!function (e, t) { if ("function" == typeof define && define.amd) define(["exports", "module"], t); else if ("undefined" != typeof exports && "undefined" != typeof module) t(exports, module); else { var n = { exports: {} }; t(n.exports, n), e.fetchJsonp = n.exports } }(this, (function (e, t) { "use strict"; var n = 5e3, o = "callback"; function r() { return "jsonp_" + Date.now() + "_" + Math.ceil(1e5 * Math.random()) } function i(e) { try { delete window[e] } catch (t) { window[e] = void 0 } } function c(e) { var t = document.getElementById(e); t && document.getElementsByTagName("head")[0].removeChild(t) } t.exports = function (e) { var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], u = e, d = t.timeout || n, s = t.jsonpCallback || o, a = void 0; return new Promise((function (n, o) { var f = t.jsonpCallbackFunction || r(), l = s + "_" + f; window[f] = function (e) { n({ ok: !0, json: function () { return Promise.resolve(e) } }), a && clearTimeout(a), c(l), i(f) }, u += -1 === u.indexOf("?") ? "?" : "&"; var m = document.createElement("script"); m.setAttribute("src", "" + u + s + "=" + f), t.charset && m.setAttribute("charset", t.charset), t.nonce && m.setAttribute("nonce", t.nonce), t.referrerPolicy && m.setAttribute("referrerPolicy", t.referrerPolicy), m.id = l, document.getElementsByTagName("head")[0].appendChild(m), a = setTimeout((function () { o(new Error("JSONP request to " + e + " timed out")), i(f), c(l), window[f] = function () { i(f) } }), d), m.onerror = function () { o(new Error("JSONP request to " + e + " failed")), i(f), c(l), a && clearTimeout(a) } })) } }));


// === 翻译工具类 ===
class Translator {
    constructor() {
        this.baidu_apiurl = 'https://fanyi-api.baidu.com/api/trans/vip/translate';
        this.baidu_appid = '20151211000007653';
        this.baidu_apikey = 'IFJB6jBORFuMmVGDRude';

        this.caiyun_apiurl = 'https://api.interpreter.caiyunai.com/v1/translator';
        this.caiyun_apitoken = 'wno8rhqiranvo8ducvbw';
    }


    // 百度翻译
    async baidu_translate(text, from, to) {
        return new Promise((resolve, reject) => {
            let salt = (new Date).getTime();
            let sign = md5(this.baidu_appid + text + salt + this.baidu_apikey);
            let url = this.baidu_apiurl + '?appid=' + this.baidu_appid + '&q=' + encodeURIComponent(text) + '&from=' + from + '&to=' + to + '&salt=' + salt + '&sign=' + sign;
            // use fetchJsonp
            fetchJsonp(url).then((response) => {
                return response.json();
            }).then((json) => {
                if (json.trans_result && json.trans_result.length > 0) {
                    resolve({ translator: "百度翻译", translation: json.trans_result[0].dst });
                } else {
                    reject(json);
                }
            }).catch((error) => {
                reject(error);
            });
        });
    }

    // 彩云小译
    async caiyun_translate(text, from, to) {
        return new Promise((resolve, reject) => {
            fetch(this.caiyun_apiurl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-authorization': 'token ' + this.caiyun_apitoken
                },
                mode: 'cors',
                body: JSON.stringify({
                    source: [text],
                    trans_type: from + '2' + to,
                    request_id: 'wikitranslate'
                })
            }).then((response) => {
                return response.json();
            }).then((json) => {
                if (json.target && json.target.length > 0) {
                    resolve({ translator: "彩云小译", translation: json.target[0] })
                } else {
                    reject(json);
                }
            }).catch((error) => {
                reject(error);
            });
        });
    }

    // 生成随机英文数字
    randomChar(length) {
        let result = '';
        let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    // 预处理文本
    preprocess(text) {
        let repalce_list = {};
        // 替换所有的代码块为随机英文数字
        let pre1 = text.replace(/(\[|{|'){2}.*?(\]|}|'){2}/g, (match) => {
            let key = this.randomChar(6);
            repalce_list[key] = match;
            return key;
        });
        return { text: pre1, repalce_list };
    }

    async translate(text, from, to) {
        // 文本预处理
        let { text: proceeded, repalce_list } = this.preprocess(text);
        // 调用所有翻译API进行翻译
        let results = await Promise.all([
            this.baidu_translate(proceeded, from, to),
            this.caiyun_translate(proceeded, from, to)
        ]);
        // 合并回替换列表
        let processedResults1 = results.map((result) => {
            for (let key in repalce_list) {
                result.translation = result.translation.replace(new RegExp(key, 'ig'), repalce_list[key]);
            }
            return result;
        });
        // 在中英文之间加入空格
        let processedResults2 = processedResults1.map((result) => {
            result.translation = result.translation.replace(/([\x21-\x7e])([\u4e00-\u9fa5])/g, '$1 $2').replace(/([\u4e00-\u9fa5])([\x21-\x7e])/g, '$1 $2');
            return result;
        });

        return processedResults2;
    }
}

// === 页面Hooks ===
function addPageHooks() {
    // 添加翻译按钮
    let translateButton = document.createElement('span');
    translateButton.className = 'tab';
    translateButton.innerHTML = `<a tabindex="0" role="button" aria-expanded="false">翻译</a>`
    document.querySelector('.wikiEditor-ui .wikiEditor-ui-toolbar .tabs').appendChild(translateButton);

    let translateTabSection = document.createElement('div')
    translateTabSection.className = "booklet section section-characters section-hidden";
    translateTabSection.id = "translateTabSection";
    translateTabSection.innerHTML = `<b>Wiki Translate Userscript</b> 由 Archeb 为 <a href="https://wiki.archlinuxcn.org/">Arch Linux 中文维基</a>翻译项目制作<br>
     <span>使用方法：用鼠标在编辑器中选择要翻译的文本，然后等待翻译完毕后点击选择文本即可复制到剪贴板。建议一次只选择一句话，或多句具有强上下文逻辑关联的句子，以获得最佳效果。如果有一些六位随机字符出现，请点击重试，一般可以解决问题。</span><br>
     <span>当前状态：<span id="translateStatus">未选择</span></span><br>
     <span>翻译结果<a id="translateRetry">[重试]</a>：</span><div id="translateResult"></div>
     `;
    translateTabSection.querySelector('#translateRetry').addEventListener('click', doTextareaTranslate);
    document.querySelector('.wikiEditor-ui .wikiEditor-ui-toolbar .sections').appendChild(translateTabSection);

    translateButton.addEventListener('click', () => {
        // toggle translateTabSection
        if (translateTabSection.classList.contains('section-hidden')) {
            translateTabSection.classList.remove('section-hidden');
            translateTabSection.classList.add('section-visible');
        } else {
            translateTabSection.classList.remove('section-visible');
            translateTabSection.classList.add('section-hidden');
        }
    });

    // add mouseup event listener
    document.documentElement.addEventListener('mouseup', (event) => {
        // only handle when translateTabSection is visible
        if (translateTabSection.classList.contains('section-hidden')) {
            return;
        }
        // if activeElement is not the textbox then return
        if (document.activeElement !== document.querySelector('#wpTextbox1')) {
            return;
        }


        doTextareaTranslate();
    });
}

function doTextareaTranslate() {
    let translator = new Translator();
    // get the selection inside the textarea
    let selection = document.querySelector('#wpTextbox1').value.substring(document.querySelector('#wpTextbox1').selectionStart, document.querySelector('#wpTextbox1').selectionEnd);
    let elTranslateStatus = document.querySelector('#translateStatus');
    let elTranslateResult = document.querySelector('#translateResult');

    // if selection includes chinese characters, stop and return
    if (/[\u4e00-\u9fa5]/.test(selection)) {
        elTranslateStatus.innerText = '选择的是中文';
        elTranslateResult.innerText = '';
        return;
    }

    if (selection) {
        elTranslateStatus.innerHTML = '正在翻译...';
        elTranslateResult.innerHTML = `<span>正在翻译...</span>`;
        translator.translate(selection, 'en', 'zh').then((results) => {
            elTranslateStatus.innerHTML = '翻译完成';
            // show result from different translator accordingly with their name
            elTranslateResult.innerHTML = results.map((result) => {
                return `<span>${result.translator}：<a>${result.translation}</a></span><br>`;
            }).join('');
            // add click event listener
            elTranslateResult.querySelectorAll('a').forEach((el) => {
                el.addEventListener('click', () => {
                    navigator.clipboard.writeText(el.innerHTML);
                    elTranslateStatus.innerHTML = '已复制到剪贴板';
                    elTranslateResult.innerHTML = '';
                })
            });
        }
        ).catch((error) => {
            elTranslateStatus.innerHTML = '翻译失败';
            elTranslateResult.innerHTML = `<span>翻译失败：${error}</span>`;
        }
        );
    } else {
        elTranslateStatus.innerHTML = '未选择';
        elTranslateResult.innerHTML = '';
    }
}



// add the hook as long as the toolbar exists
window.hookcheck = setInterval(function () {
    if (document.querySelector('.wikiEditor-ui .wikiEditor-ui-toolbar .tabs')) {
        addPageHooks();
        clearInterval(window.hookcheck);
    }
}, 1000);
