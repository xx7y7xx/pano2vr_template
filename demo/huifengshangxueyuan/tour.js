
/*
	krpano Embedding Script
	krpano 1.16.9 (build 2013-10-28)
*/
function createPanoViewer(e) {
    function ot(e) {
        return ("" + e).toLowerCase()
    }

    function ut(e, t) {
        return e[d](t) >= 0
    }

    function at() {
        var t, r, i, s, o, u, a = n.location;
        a = a.search || a.hash;
        if (a) {
            t = a[W](1)[R]("&");
            for (r = 0; r < t[x]; r++) i = t[r], s = i[d]("="), s == -1 && (s = i[x]), o = i[W](0, s), u = i[W](s + 1), o == _ || ot(o) == M ? e[M] = u : e[Z](o, u)
        }
    }

    function ft(e) {
        return e[H] = at, e
    }

    function lt() {
        var l, c, h, m, g, y, b, w, S;
        if (s == p) {
            function T() {
                var e, n, i, s, o, u, a;
                if (t[Y]) {
                    e = t[Y]["Shockwave Flash"];
                    if (typeof e == "object") {
                        n = e.description;
                        if (n) {
                            i = v, t[O] && (s = t[O]["application/x-shockwave-flash"], s && (s.enabledPlugin || (i = p)));
                            if (i) {
                                o = n[R](" ");
                                for (u = 0; u < o[x]; ++u) {
                                    a = parseFloat(o[u]);
                                    if (isNaN(a)) continue;
                                    return a
                                }
                            }
                        }
                    }
                }
                if (r.ActiveXObject) try {
                    e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                    if (e) {
                        n = e.GetVariable("$version");
                        if (n) return parseFloat(n[R](" ")[1][R](",").join("."))
                    }
                } catch (f) {}
                return 0
            }

            function N() {
                var e, t, i = p,
                    s = n[A]("div");
                for (e = 0; e < 5; e++)
                    if (typeof s.style[["p", "msP", "MozP", "WebkitP", "OP"][e] + "erspective"] != X) {
                        i = v, e == 3 && r[nt] && (t = r[nt]("(-webkit-transform-3d)"), t && (i = t.matches == v));
                        break
                    }
                return i
            }

            function C() {
                var e, t, r = E,
                    i = p;
                try {
                    e = n[A]("canvas");
                    for (t = 0; t < 4; t++) {
                        r = e.getContext(["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"][t]);
                        if (r) break
                    }
                    r && (i = v)
                } catch (s) {}
                return r = E, e = E, i
            }
            if (e.isDevice("iphone|ipad|ipod") && i[d]("opera mini") < 0) a = f = v;
            else {
                u = T(), u >= 10.1 && (o = v), l = N(), c = C(), h = ot(t.platform), m = 0, g = 0, y = 0, b = i[d]("firefox/"), b < 0 && (b = i[d]("gecko/")), b >= 0 && (m = parseInt(i[U](1 + i[d]("/", b)), 10)), b = i[d]("chrome"), b > 0 && (y = parseInt(i[U](b + 7), 10)), b = i[d](K), b > 0 && (g = parseInt(i[U](b + 8), 10), m >= 18 && (g = 4)), l && (g > 0 && g < 4 && (l = p), m > 3 && m < 18 && g > 1 && (c = l = p), c || (h[d](Q) < 0 && m > 3 && g < 1 && (l = p), y > 9 && y < 20 && (l = p)));
                if (l || c) {
                    a = v, w = i[d]("blackberry") >= 0 || i[d]("rim tablet") >= 0 || i[d]("bb10") >= 0, S = (t.msMaxTouchPoints | 0) > 1;
                    if (g >= 4 || w || S) f = v
                }
            }
            s = v
        }
    }
    var t, n, r, i, s, o, u, a, f, l, c, h, p = !1,
        d = "indexOf",
        v = !0,
        m = "addEventListener",
        g = "externalMouseEvent",
        y = "target",
        b = "wmode",
        w = "targetelement",
        E = null,
        S = "onerror",
        x = "length",
        T = "getElementById",
        N = "bgcolor",
        C = "onmousewheel",
        k = "flashbasepath",
        L = "enable_mousewheel_js_bugfix",
        A = "createElement",
        O = "mimeTypes",
        M = "html5",
        _ = "useHTML5",
        D = "params",
        P = "externalMouseEvent2",
        H = "passQueryParameters",
        B = "always",
        j = "srcElement",
        F = "consolelog",
        I = "onready",
        q = "never",
        R = "split",
        U = "slice",
        z = "xml",
        W = "substring",
        X = "undefined",
        V = "vars",
        $ = "basepath",
        J = "mwheel",
        K = "android",
        Q = "mac",
        G = "stopPropagation",
        Y = "plugins",
        Z = "addVariable",
        et = "preventDefault",
        tt = "lastIndexOf",
        nt = "matchMedia",
        rt = '" />',
        it = "auto",
        st = "only";
    return t = navigator, n = document, r = window, i = ot(t.userAgent), s = p, o = p, u = 0, a = p, f = p, e || (e = {}), l = e[H] === v, e.swf || (e.swf = "krpano.swf"), e[z] === undefined && (e[z] = e.swf[R](".swf").join(".xml")), e.id || (e.id = "krpanoSWFObject"), e.width || (e.width = "100%"), e.height || (e.height = "100%"), e[N] || (e[N] = "#000000"), e[b] || (e[b] = E), e[y] || (e[y] = E), e[M] || (e[M] = it), e[J] === undefined && (e[J] = v), e[V] || (e[V] = []), e[D] || (e[D] = []), e[I] || (e[I] = E), e[$] ? e[k] = e[$] : (c = "./", h = e.swf[tt]("/"), h >= 0 && (c = e.swf[U](0, h + 1)), e[$] = c), e.isDevice = function(e) {
        var t, n, r, s = "all",
            o = ["ipad", "iphone", "ipod", K];
        for (t in o) i[d](o[t]) >= 0 && (s += "|" + o[t]);
        e = ot(e)[R]("|");
        if (e == E) return v;
        n = e[x];
        for (t = 0; t < n; t++) {
            r = e[t];
            if (s[d](r) >= 0) return v
        }
        return p
    }, e[Z] = function(t, n) {
        t = ot(t), t == "pano" || t == z ? e[z] = n : e[V][t] = n
    }, e.addParam = function(t, n) {
        e[D][ot(t)] = n
    }, e[_] !== undefined && (e[M] = e[_]), e[_] = function(t) {
        e[M] = t
    }, e.isHTML5possible = function() {
        return lt(), a
    }, e.isFlashpossible = function() {
        return lt(), o
    }, e[S] || (e[S] = function(t) {
        var n = e[w];
        n ? n.innerHTML = '<table width="100%" height="100%"><tr valign="middle"><td><center>ERROR:<br/><br/>' + t + "<br/><br/></center></td></tr></table>" : alert("ERROR: " + t)
    }), e.embed = function(s) {
        var c, h, _, H, R, W, $, K;
        s && (e[y] = s), e[w] = n[T](e[y]);
        if (!e[w]) e[S]("No Embedding Target");
        else {
            l && at(), e[J] == p && (e[V]["control.disablewheel"] = v), e[F] && (e[V][F] = e[F]), lt(), c = ot(e[M]), h = o, _ = a, c == q ? _ = p : ut(c, st) && (h = p), ut(c, B) ? (o = h = p, a = _ = v) : _ && (c == "whenpossible" || ut(c, "prefer") || ut(c, it) && f) && (h = p);
            if (h && o) {
                function Z(e) {
                    function S(e) {
                        function a() {
                            r[m] ? (r[m]("DOMMouseScroll", c, p), r[m]("mousewheel", c, p), n[m]("mousedown", f, p), n[m]("mouseup", l, p)) : (r.opera ? r.attachEvent(C, c) : r[C] = n[C] = c, n.onmousedown = f, n.onmouseup = l)
                        }

                        function f(e) {
                            e || (e = r.event, e[y] = e[j]), u = e ? e[y] : E
                        }

                        function l(e) {
                            var t, i, s, a, f, l, c, h;
                            e || (e = r.event, e[y] = e[j]), t = 0, i = o[x];
                            for (t = 0; t < i; t++) {
                                s = o[t];
                                if (s) {
                                    a = n[s.id];
                                    if (a && s.needfix) {
                                        f = a.getBoundingClientRect(), l = a == e[y], c = a == u, h = e.clientX >= f.left && e.clientX < f.right && e.clientY >= f.top && e.clientY < f.bottom;
                                        if ((l || c) && h == p) try {
                                            a[P] && a[P](0, "mouseUp")
                                        } catch (d) {}
                                    }
                                }
                            }
                            return v
                        }

                        function c(t) {
                            var i, u, a, f, l, c;
                            t || (t = r.event, t[y] = t[j]), i = 0, u = p, t.wheelDelta ? (i = t.wheelDelta / 120, r.opera && s && (i /= 4 / 3)) : t.detail && (i = -t.detail, s == p && (i /= 3));
                            if (i) {
                                a = 0, f = o[x];
                                for (a = 0; a < f; a++) {
                                    l = o[a];
                                    if (l) {
                                        c = n[l.id];
                                        if (c && c == t[y]) {
                                            try {
                                                c.jswheel ? c.jswheel(i) : c[g] ? c[g](i) : c[L] && (c[L](), c[g] && c[g](i))
                                            } catch (h) {}
                                            u = v;
                                            break
                                        }
                                    }
                                }
                            }
                            e[J] == p && (u = p);
                            if (u) return t[G] && t[G](), t[et] && t[et](), t.cancelBubble = v, t.cancel = v, t.returnValue = p, p
                        }
                        var i, s = ot(t.appVersion)[d](Q) >= 0,
                            o = r._krpMW,
                            u = E;
                        o || (o = r._krpMW = new Array, a()), i = e[b], o.push({
                            id: e.id,
                            needfix: s || !!r.chrome || i == "opaque" || i == "transparent"
                        })
                    }
                    var i, s, o, u, a, f = "",
                        l = e[V],
                        c = e[D],
                        h = e.id;
                    for (;;) {
                        s = n[T](h);
                        if (!s) break;
                        h += String.fromCharCode(48 + Math.floor(9 * Math.random())), e.id = h
                    }
                    e[b] && (c[b] = e[b]), e[N] && (c[N] = e[N]), e[z] !== undefined && (l[z] = e[z]), e[b] = ot(c[b]), c.allowfullscreen = "true", c.allowscriptaccess = B;
                    for (i in l) f != "" && (f += "&"), f += encodeURIComponent(i) + "=" + encodeURIComponent(l[i]);
                    c.flashvars = f, e[k] && (c.base = e[k]), o = "", u = ' id="' + h + '" width="' + e.width + '" height="' + e.height + '" style="outline:none;" ', a = "_krpcb_" + h, !e[I] || (r[a] = function() {
                        try {
                            delete r[a]
                        } catch (t) {
                            r[a] = E
                        }
                        e[I](n[T](h))
                    });
                    if (t[Y] && t[O] && t[O][x]) {
                        o = '<embed name="' + h + '"' + u + 'type="application/x-shockwave-flash" src="' + e.swf + '" ';
                        for (i in c) o += i + '="' + c[i] + '" ';
                        o += " />"
                    } else {
                        o = "<object" + u + 'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"><param name="movie" value="' + e.swf + rt;
                        for (i in c) o += '<param name="' + i + '" value="' + c[i] + rt;
                        o += "</object>"
                    }
                    e[w].innerHTML = o, S(e)
                }
                u >= 11.4 && (H = v, ot(t.platform)[d](Q) >= 0 && ot(t.vendor)[d]("apple") >= 0 && (R = i[d]("webkit/"), R > 0 && (R = parseFloat(i[U](R + 7)), !isNaN(R) && R > 0 && R < 534 && (H = p))), H && e[b] == E && !e[D][b] && (e[b] = "direct")), Z(e)
            } else if (_ && a) {
                function nt(t) {
                    function h(e, t, r) {
                        var i, s = n.getElementsByTagName("head");
                        s && (s = s[0]), s || (s = n.body), s ? (i = n[A]("script"), i.type = "text/javascript", i.async = v, i.onload = t, i[S] = r, i.src = f + e, s.appendChild(i)) : r()
                    }

                    function d() {
                        return typeof krpanoJS !== X
                    }

                    function m() {
                        return !!r.krpanoreg && !!r.krpanokey
                    }

                    function g() {
                        s = v, b()
                    }

                    function b() {
                        i == p && (m() || s) && d() && (i = v, e[V][z] = e[z], e[D] = e, e.htmltarget = e[y], krpanojs_init(t))
                    }

                    function w() {
                        t[S]("HTML5 Version not available!")
                    }
                    var i, s, o, u = "krpanoiphone.js",
                        a = "krpanoiphone.license.js",
                        f = "./",
                        l = t.swf,
                        c = l[tt]("/");
                    c >= 0 && (f = l[U](0, c + 1)), i = p, s = p, o = m() | 0 | (d() | 0) << 1, o == 0 ? (h(a, b, g), h(u, b, w)) : o == 1 ? h(u, b, w) : o == 2 ? g() : b()
                }
                nt(e)
            } else W = "", $ = c != q, K = o == p && (c == q || !ut(c, B) && !ut(c, st)), K && (W += "Adobe Flashplayer 10.1 (or higher)"), K && $ && (W += " or a<br/>"), $ && (W += "HTML5 Browser with CSS 3D Transforms or WebGL support"), K && $ && (W += " are"), W += " required!", e[S](W)
        }
    }, ft(e)
}

function removepano(e) {
    var t, n, r, i, s = document.getElementById(e);
    if (s) {
        t = window._krpMW;
        if (t)
            for (n = 0; n < t.length; n++) {
                r = t[n];
                if (r && r.id === e) {
                    t.splice(n, 1);
                    break
                }
            }
        s.unload && s.unload(), i = s.parentNode, i && i.removeChild(s)
    }
}

function embedpano(e) {
    createPanoViewer(e).embed()
}

function createswf(e, t, n, r, i) {
    return createPanoViewer({
        swf: e,
        id: t,
        width: n,
        height: r,
        bgcolor: i
    })
}

function createkrpanoJSviewer(e, t, n) {
    return createPanoViewer({
        id: e,
        width: t,
        height: n,
        html5: "always"
    })
}
var embedPanoViewer, createkrpanoSWFviewer;
embedPanoViewer = embedpano, createkrpanoSWFviewer = createswf;
/*
	krpano HTML5 Viewer
	krpano 1.16.9 (build 2013-10-28)
*/
var krpanoJS = {
    version: "1.16.9",
    build: "2013-10-28"
};

// Added by d3vin
function hereDoc(f) {
  return f.toString().
      replace(/^[^\/]+\/\*!?/, '').
      replace(/\*\/[^\/]+$/, '');
}

function embedhtml5(gd, Bb) {
    function hd() {
        function A(a) {
            return ("" + a).toLowerCase()
        }

        function W(a, b) {
            var c = 0,
                d = 0,
                e, f = a.length,
                k;
            for (e = 0; e < f; e++)
                if (k = a.charCodeAt(e), 32 >= k) c++;
                else break;
            for (e = f - 1; 0 < e; e--)
                if (k = a.charCodeAt(e), 32 >= k) d++;
                else break;
            if (void 0 === b && (e = a.charAt(c), k = a.charAt(f - d - 1), ("'" == e && "'" == k || '"' == e && '"' == k) && 3 == a.split(e).length)) c++, d++;
            return a = a.slice(c, f - d)
        }

        function Fa(a) {
            return 0 <= _[308].indexOf(String(a).toLowerCase())
        }

        function Wa(a, b) {
            return _[461] == b ? Number(a) : _[57] == b ? Fa(a) : _[38] == b ? null == a ? null : String(a) : a
        }

        function Ga(a) {
            return (1E3 * Number(a) | 0) / 1E3
        }

        function mb(a, b, c, d) {
            a.__defineGetter__(b, c);
            void 0 !== d && a.__defineSetter__(b, d)
        }

        function Xa(a, b, c) {
            var d = "_" + b;
            a[d] = c;
            a.__defineGetter__(b, function() {
                return a[d]
            });
            a.__defineSetter__(b, function(b) {
                a[d] = Wa(b, typeof c);
                a.haschanged = !0
            })
        }

        function Rb() {
            for (var a = 0; 4100 > a; a++);
        }

        function va(a) {
            a && a.preventDefault()
        }

        function x(a, b, c, d) {
            a && a.addEventListener(b, c, d)
        }

        function O(a, b, c, d) {
            a && a.removeEventListener(b, c, d)
        }

        function U(a) {
            var b = B.createElement(1 == a ? "img" : 2 == a ? _[459] : "div");
            b && (1 == a && "off" != yc) && (b.crossOrigin = yc);
            return b
        }

        function nb(a) {
            return function() {
                return a.apply(a, arguments)
            }
        }

        function sb(a) {
            return a.split("<").join("&lt;").split(">").join("&gt;")
        }

        function ja(a, b) {
            var c = "(" + (a >> 16 & 255) + "," + (a >> 8 & 255) + "," + (a & 255);
            return void 0 !== b ? "rgba" + c + "," + b + ")" : "rgb" + c + ")"
        }

        function Ob(a) {
            return a.split("[").join("<").split("<<").join("[").split("]").join(">").split(">>").join("]")
        }

        function hc(a, b) {
            a = Number(a);
            for (b = Number(b); 0 > a;) a += 360;
            for (; 360 < a;) a -= 360;
            var c = Math.abs(b - a),
                d = Math.abs(b - (a - 360)),
                e = Math.abs(b - (a + 360));
            d < c && d < e ? a -= 360 : e < c && e < d && (a += 360);
            return a
        }

        function rb(a) {
            if (a) {
                var b = a.indexOf("?");
                0 <= b && (a = a.slice(0, b));
                b = a.indexOf("#");
                0 <= b && (a = a.slice(0, b))
            }
            return a
        }

        function Qb(a) {
            a = rb(a);
            var b = a.lastIndexOf("/"),
                c = a.lastIndexOf("\\");
            c > b && (b = c);
            return a.slice(b + 1)
        }

        function Ab(a, b) {
            var c = String(a).charCodeAt(0);
            return 48 <= c && 57 >= c ? ($(3, b + _[127]), !1) : !0
        }

        function Pb(a, b, c, d) {
            for (; 32 >= a.charCodeAt(b);) b++;
            for (; 32 >= a.charCodeAt(c - 1);) c--;
            var e = a.charCodeAt(b);
            if (37 == e) a = N(a.slice(b + 1, c), d);
            else if (103 == e && "get(" == a.slice(b, b + 4)) {
                for (b += 4; 32 >= a.charCodeAt(b);) b++;
                for (c = a.lastIndexOf(")"); 32 >= a.charCodeAt(c - 1);) c--;
                a = N(a.slice(b, c), d)
            } else {
                d = a.charCodeAt(b);
                if ((39 == d || 34 == d) && d == a.charCodeAt(c - 1)) b++, c--;
                a = a.slice(b, c)
            }
            return a
        }

        function id(a) {
            var b = [];
            if (null == a || void 0 == a) return b;
            var c, d = 0,
                e, f, k = 0;
            a = A(a);
            e = a.length;
            for (c = 0; c < e; c++) f = a.charCodeAt(c), 40 == f ? k++ : 41 == f ? k-- : 46 == f && 0 == k && (b.push(a.slice(d, c)), d = c + 1);
            b.push(a.slice(d));
            return b
        }

        function ea(a, b) {
            a = A(a);
            var c, d, e, f;
            e = Sb[a];
            null != e && (void 0 !== e && "" != e) && zc(e, null, b);
            f = Sb.getArray();
            d = f.length;
            for (c = 0; c < d; c++) e = f[c][a], null != e && (void 0 !== e && "" != e) && zc(e, null, b)
        }

        function I(a, b, c, d, e) {
            var f = null,
                k, l = id(a);
            k = l.length;
            if (1 == k && d && (f = l[0], void 0 !== d[f])) {
                d[f] = _[57] == typeof d[f] ? Fa(b) : b;
                return
            }
            var r = m,
                f = null;
            1 < k && (f = l[k - 1]);
            for (a = 0; a < k; a++) {
                var j = l[a],
                    h = a == k - 1,
                    p = null,
                    q = j.indexOf("[");
                0 < q && (p = Pb(j, q + 1, j.length - 1, d), j = j.slice(0, q));
                q = !1;
                if (void 0 === r[j]) {
                    if (c) break;
                    h || (null == p ? r[j] = new Tb : (r[j] = new Ya(Tb), q = !0))
                } else q = !0;
                if (q && !1 == h && !0 == r[j].isArray && null != p)
                    if (h = null, r = r[j], h = c ? r.getItem(p) : r.createItem(p)) {
                        if (a == k - 2 && "name" == f) {
                            b = A(b);
                            p != b && (null == b || "null" == b || "" == b ? r.removeItem(p) : r.renameItem(p, b));
                            break
                        }
                        r = h;
                        continue
                    } else break;
                h ? r[j] = !0 == e ? b : Wa(b, typeof r[j]) : r = r[j]
            }
        }

        function N(a, b) {
            var c, d, e, f = id(a);
            d = f.length;
            if (1 == d && _[270] == f[0]) return b ? b._type + "[" + b.name + "]" : "";
            if (1 == d && b && (e = f[0], b.hasOwnProperty(e))) return b[e];
            var k = m;
            for (c = 0; c < d; c++) {
                e = f[c];
                var l = c == d - 1,
                    r = null,
                    j = e.indexOf("[");
                0 < j && (r = Pb(e, j + 1, e.length - 1, b), e = e.slice(0, j));
                if (k && void 0 !== k[e]) {
                    if (null != r && (j = k[e]) && j.isArray)
                        if (e = j.getItem(r)) {
                            if (l) return e;
                            k = e;
                            continue
                        } else break;
                    if (l) return k[e];
                    k = k[e]
                } else break
            }
            return null
        }

        function zc(a, b, c) {
            Q.callaction(a, b, c)
        }

        function gd(a, b, c) {
            zc(a, b ? N(b) : null, c ? Fa(c) : null)
        }

        function $(a, b) {
            if (!jd && (0 < a || m.debugmode)) b = ["DEBUG", "INFO", _[396], "ERROR", _[324]][a] + ": " + b, G.log(b), 2 < a && m.showerrors && setTimeout(function() {
                try {
                    G.showlog(!0)
                } catch (a) {}
            }, 500)
        }

        function ka(a, b) {
            if (!jd) {
                a = "" + a;
                var c = 0 < A(a).indexOf("load");
                a = sb(a).split("[br]").join("<br/>");
                var d = Ba.createItem(_[374]),
                    e = Ba.createItem(_[373]);
                d.sprite || (d.create(), G.controllayer.appendChild(d.sprite));
                e.sprite || (e.create(), G.controllayer.appendChild(e.sprite));
                var f;
                d.loaded = !0;
                d.align = _[58];
                d.width = "100%";
                d.height = "100%";
                d.alpha = 0.5;
                d.keep = !0;
                f = d.sprite.style;
                f.backgroundColor = _[21];
                f.zIndex = 99999998;
                c && (e.visible = !1);
                e.loaded = !0;
                e.align = _[119];
                e.y = 0;
                e.width = "105%";
                var k = h.ie || h.android ? -2 : 2;
                e.height = k + 46 / F;
                e.keep = !0;
                f = e.sprite.style;
                f.backgroundColor = _[21];
                f.color = _[35];
                f.fontFamily = h.realDesktop && !h.ie ? _[50] : _[52];
                f.fontSize = "12px";
                f.margin = "-2px";
                f.border = _[234];
                b || (b = _[244]);
                e.sprite.innerHTML = _[136] + b + "<br/>" + a + _[267];
                f.zIndex = 99999999;
                f[Ac] = _[190];
                e.jsplugin = {
                    onresize: function() {
                        var a = e.sprite.childNodes[0].clientHeight;
                        e.height = k + Math.max(46, a) / F;
                        0 >= a && (e.imageheight = 1)
                    }
                };
                d.updatepos();
                e.updatepos();
                c && setTimeout(function() {
                    try {
                        e.visible = !0
                    } catch (a) {}
                }, 500)
            }
        }

        function hd() {
            kd.stop();
            Ca.unregister();
            G.remove()
        }

        function Rd() {
            this.caller = this.args = this.cmd = null;
            this.breakable = !1
        }

        function Ub(a, b, c) {
            if (null == a || "" == a) return null;
            for (var d = 0, e = 0, f = 0, k = 0, l = 0, r = 0, j = 0, h = 0, p = "", p = 0;;)
                if (p = a.charCodeAt(l), 0 < p && 32 >= p) l++;
                else break;
            for (var q = [], e = a.length, d = l; d < e; d++)
                if (p = a.charCodeAt(d), 0 == h && 0 == j && 40 == p) f++;
                else if (0 == h && 0 == j && 41 == p) {
                if (k++, f == k) {
                    r = d + 1;
                    p = a.slice(l, r);
                    q.push(p);
                    for (l = r;;)
                        if (p = a.charCodeAt(l), 0 < p && 32 >= p) l++;
                        else break;
                    p = a.charCodeAt(l);
                    if (59 != p) {
                        r = e;
                        break
                    }
                    for (l++;;)
                        if (p = a.charCodeAt(l), 59 == p || 0 < p && 32 >= p) l++;
                        else break;
                    d = l
                }
            } else 34 == p ? 0 == j ? j = 1 : 1 == j && (j = 0) : 39 == p ? 0 == j ? j = 2 : 2 == j && (j = 0) : 91 == p && 0 == j ? h++ : 93 == p && 0 == j && h--;
            r != e && (p = a.slice(l, e), 0 < p.length && q.push(p));
            a = null;
            e = q.length;
            for (d = 0; d < e; d++) {
                p = q[d];
                j = p.indexOf("[");
                k = p.indexOf("]");
                f = p.indexOf("(");
                0 < j && (0 < k && f > j && f < k) && (f = p.indexOf("(", k));
                l = k = null;
                0 < f ? (k = p.slice(0, f), l = W(p.slice(f + 1, p.lastIndexOf(")")), !1), 0 >= l.length && (l = null)) : (k = p, l = null);
                k = W(k);
                r = [];
                if (null != l) {
                    var n, h = l.length,
                        f = 0,
                        K = -1,
                        g = -1,
                        wa = j = 0,
                        p = null;
                    for (n = 0; n < h; n++) p = l.charCodeAt(n), 0 == j && 40 == p ? f++ : 0 == j && 41 == p ? f-- : 34 == p ? 1 == j && 0 <= K ? (K = -1, j = 0) : 0 == j && (K = n, j = 1) : 39 == p && (2 == j && 0 <= g ? (g = -1, j = 0) : 0 == j && (g = n, j = 2)), 44 == p && (0 == f && 0 == j) && (p = W(l.slice(wa, n)), r.push(p), wa = n + 1);
                    0 == f && (p = W(l.slice(wa, n)), r.push(p))
                }
                null == a && (a = []);
                f = new Rd;
                f.cmd = c ? k : A(k);
                f.args = r;
                f.caller = b;
                a.push(f)
            }
            return a
        }

        function ic() {
            this.z = this.y = this.x = 0;
            this.to_euler_xyz = function() {
                var a = new ic;
                a.x = -Math.atan2(-this.y, Math.sqrt(this.x * this.x + this.z * this.z)) / la;
                a.y = Math.atan2(this.x, this.z) / la + 180;
                return a
            }
        }

        function Bc(a) {
            return _[33] !== typeof Float32Array ? new Float32Array(void 0 !== a ? a : 16) : void 0 !== a ? a : Array(16)
        }

        function ld(a, b) {
            var c = b.x,
                d = b.y,
                e = b.z;
            b.x = c * a[0] + d * a[4] + e * a[8];
            b.y = c * a[1] + d * a[5] + e * a[9];
            b.z = c * a[2] + d * a[6] + e * a[10]
        }

        function Sd(a, b, c) {
            var d, e, f;
            d = -b * la;
            b = Math.cos(d);
            e = Math.sin(d);
            d = -a * la;
            a = Math.cos(d);
            f = Math.sin(d);
            d = -c * la;
            c = Math.cos(d);
            d = Math.sin(d);
            return Bc([a * c - f * e * d, a * d + f * e * c, -f * b, 0, -b * d, b * c, e, 0, f * c + a * e * d, f * d - a * e * c, a * b, 0, 0, 0, 0, 1])
        }

        function Cc(a, b) {
            var c = Qa.getArray(),
                d = c.length,
                e, f = s.r_rmatrix,
                k = Ha,
                l = oa,
                r = F,
                j = 0.5 * k,
                w = 0.5 * l,
                p = s.r_zoom,
                q = s.r_hlookat,
                n = s.r_vlookat,
                K = s.r_vlookatA,
                g = s.r_yoff,
                wa = s.r_zoff,
                D = s._camroll,
                H = s._stereographic,
                C = 50;
            0 < wa && (H ? C -= wa : (C = 20 - wa, -125 > C && (C = -125)));
            var y = 0,
                aa = 0;
            e = 0;
            void 0 !== b && (e = b, d = e + 1);
            var m = jc,
                tb = h.realDesktop && 250 > p ? 1.5 : 0,
                A = Dc;
            Dc = !1;
            var z = Ve,
                M = We;
            z[1] = j;
            z[5] = Td;
            z[9] = q;
            z[15] = m + "," + m + "," + m;
            for (m = xa; e < d; e++) {
                var u = c[e];
                if (u && (A && u.sprite && (u.sprite.style.opacity = Number(u._alpha) * Ec), u._visible && u.loaded && (a || u.poschanged))) {
                    u.poschanged = !1;
                    var R = u.sprite,
                        L = Number(u._flying),
                        y = (1 - L) * Number(u._ath),
                        aa = (1 - L) * Number(u._atv);
                    0 < L && (y += L * hc(q, u._ath), aa += L * hc(n, u._atv));
                    var Fc = !1,
                        ra = (180 - y) * la,
                        da = aa * la,
                        V = new ic;
                    V.x = 1E3 * Math.cos(da) * Math.cos(ra);
                    V.z = 1E3 * Math.cos(da) * Math.sin(ra);
                    V.y = 1E3 * Math.sin(da);
                    ld(f, V);
                    if (u._distorted) {
                        R.style.pointerEvents = 50 <= V.z && u._enabled ? "auto" : "none";
                        Fc = !0;
                        ra = (da = u._scale) ? u._scale : 1;
                        ra = ra * (1 - L) + L * (ra / (p / (l / 2)));
                        u._scale = 1;
                        u.updatepluginpos();
                        u._scale = da;
                        var t = u.pixelwidth,
                            S = u.pixelheight,
                            v = da = 1;
                        u._use_css_scale && (da = t / u.imagewidth, v = S / u.imageheight);
                        var x = 0.5 * -S,
                            Da = String(u._edge),
                            B = V = 0,
                            Vb = u._oxpix,
                            G = u._oypix,
                            V = V + 0.5 * -t / da,
                            B = B + x / v;
                        0 <= Da.indexOf("left") ? V += +t / 2 / da : 0 <= Da.indexOf(_[2]) && (V += -t / 2 / da);
                        0 <= Da.indexOf("top") ? B += +S / 2 / v : 0 <= Da.indexOf(_[1]) && (B += -S / 2 / v);
                        t = -500;
                        S = u._deepscale;
                        2 == Ia && (S *= 15);
                        S /= 1 + L + tb;
                        0 < wa && (S = 1);
                        ra *= S;
                        t *= S;
                        Vb *= S;
                        G *= S;
                        0 < wa && (S = -((q - y) % 360), -180 > S && (S += 360), 180 < S && (S -= 360), S *= Math.cos(n / 90), Da = s.hfov, !1 == H && (Da = 90), 0 > S && (S = -S), S > Da && (Fc = !1));
                        z[3] = w + g * (1 - L);
                        z[7] = -(K * (1 - L) + n * L);
                        z[11] = Ga(-y);
                        z[13] = Ga(aa);
                        z[17] = t;
                        z[19] = Ga(u._rotate + L * D);
                        z[21] = Vb;
                        z[23] = G;
                        u.inverserotation ? (z[25] = "Y(" + Ga(u.ry), z[27] = "X(" + Ga(u.rx), z[29] = "Z(" + Ga(-u.rz)) : (z[25] = "Z(" + Ga(u.rz), z[27] = "X(" + Ga(-u.rx), z[29] = "Y(" + Ga(-u.ry));
                        z[31] = ra * da;
                        z[33] = ra * v;
                        z[35] = V;
                        z[37] = B;
                        R.style[m] = z.join("")
                    } else if (V.z >= C && (y = p / (V.z + wa), V.x = V.x * y + j, V.y = V.y * y + w + g, 8E3 > Math.abs(V.x) && 8E3 > Math.abs(V.y))) {
                        ra = 1;
                        if (u.zoom || u.distorted) ra *= Number(2 * (1 - L) * y + L * F) / F, 20 < ra && (ra = 20);
                        u.updatepluginpos();
                        t = u.pixelwidth;
                        S = u.pixelheight;
                        v = da = 1;
                        u._use_css_scale && (da = t / u.imagewidth, v = S / u.imageheight);
                        y = V.x;
                        aa = V.y;
                        0 == u.accuracy2 && (y = Math.round(y), aa = Math.round(aa));
                        Da = String(u._edge);
                        B = V = 0;
                        Vb = u._oxpix;
                        G = u._oypix;
                        0 <= Da.indexOf("left") ? V += +t / 2 / da : 0 <= Da.indexOf(_[2]) && (V += -t / 2 / da);
                        0 <= Da.indexOf("top") ? B += +S / 2 / v : 0 <= Da.indexOf(_[1]) && (B += -S / 2 / v);
                        Da = 2 * ra * (Math.max(t, S) * u._scale + Math.max(Vb, G));
                        0 < y + Da && (0 < aa + Da && y - Da < k && aa - Da < l) && (u._use_css_scale ? ra *= r : (t *= r, S *= r, V *= r, B *= r), M[1] = Ga(y), M[3] = Ga(aa), M[5] = Ga(-(t / da) / 2), M[7] = Ga(-(S / v) / 2), M[9] = Ga(u._rotate - D * (1 - L)), M[11] = Vb, M[13] = G, M[15] = ra * da, M[17] = ra * v, M[19] = Ga(V), M[21] = Ga(B), L = M.join(""), 2 > Ia && 0.5 < Number(u.zorder2) && (L = _[297] + (999999999E3 + u._zdeep) + "px) " + L), R.style[xa] = L, Fc = !0)
                    }
                    u = Fc ? "" : "none";
                    u != R.style.display && (R.style.display = u)
                }
            }
        }

        function Xe() {
            var a = s.haschanged,
                b = !1;
            Wb++;
            var c = G.resizeCheck(),
                d = Q.processAnimations(),
                a = a | s.haschanged;
            if (!h.ios || h.ios && "5" <= h.iosversion) d = !1;
            d |= md;
            md = !1;
            d && (s._hlookat += ((Wb & 1) - 0.5) / (1 + s.r_zoom), a = !0);
            a |= ma.handleloading();
            !1 == Q.blocked && (a |= Ca.handleFrictions(), ma.checkautorotate(s.haschanged) && (a = b = !0));
            a || c ? (sa.startFrame(), ma.updateview(b, !0), sa.finishFrame()) : (s.updateView(), Cc(!1));
            ma.updateplugins(c);
            h.desktop && ma.checkHovering()
        }
        var kc = this;
        try {
            !Object.prototype.__defineGetter__ && Object.defineProperty({}, "x", {
                get: function() {
                    return !0
                }
            }).x && (Object.defineProperty(Object.prototype, _[210], {
                enumerable: !1,
                configurable: !0,
                value: function(a, b) {
                    Object.defineProperty(this, a, {
                        get: b,
                        enumerable: !0,
                        configurable: !0
                    })
                }
            }), Object.defineProperty(Object.prototype, _[208], {
                enumerable: !1,
                configurable: !0,
                value: function(a, b) {
                    Object.defineProperty(this, a, {
                        set: b,
                        enumerable: !0,
                        configurable: !0
                    })
                }
            }))
        } catch (lf) {}
        var Ma = navigator,
            B = document,
            t = window,
            Na = Math.PI,
            la = Na / 180,
            Ud = Number.NaN,
            nd = 0,
            ga = t.performance && t.performance.now ? function() {
                return t.performance.now() - nd
            } : function() {
                return (new Date).getTime() - nd
            },
            nd = ga(),
            Gc = String.fromCharCode,
            m = null,
            ob = 0,
            eb = 0,
            Ha = 0,
            oa = 0,
            F = 1,
            lc = 1,
            Hc = 0,
            fb = null,
            na = null,
            Y = null,
            ib = null,
            Sb = null,
            Ic = null,
            Qa = null,
            X = null,
            v = null,
            Ba = null,
            s = null,
            Za = null,
            $a = null,
            Wb = 0,
            Ja = 14,
            od = null,
            Jc = [_[313], _[436]],
            Ka = null,
            yc = "",
            pd = !1,
            md = !1,
            qd = !1,
            Cb = 0,
            h = {
                runDetection: function(a) {
                    function b() {
                        var a = screen.width,
                            b = screen.height,
                            c = h.topAccess ? top : t,
                            d = c.innerWidth,
                            g = c.innerHeight,
                            c = c.orientation | 0,
                            e = a / (b + 1),
                            f = d / (g + 1);
                        if (1 < e && 1 > f || 1 > e && 1 < f) e = a, a = b, b = e;
                        r.width = a;
                        r.height = b;
                        r.orientation = c;
                        h.window = {
                            width: d,
                            height: g
                        };
                        a /= d;
                        return h.pagescale = a
                    }
                    var c = "multires flash html5 html mobile tablet desktop ie webkit ios iosversion iphone ipod ipad retina hidpi android androidstock blackberry touchdevice gesturedevice fullscreensupport windows mac linux air standalone".split(" "),
                        d, e, f, k, l = B.documentElement;
                    e = c.length;
                    for (d = 0; d < e; d++) f = c[d], h[f] = !1;
                    h.html5 = h.html = !0;
                    h.iosversion = 0;
                    h.css3d = !1;
                    h.webgl = !1;
                    h.topAccess = !1;
                    h.simulator = !1;
                    var r = h.screen = {};
                    try {
                        top && top.document && (h.topAccess = !0)
                    } catch (j) {}
                    var w = Ma.platform,
                        c = A(w);
                    f = Ma.userAgent;
                    var p = A(f),
                        q = d = "";
                    0 <= c.indexOf("win") ? h.windows = !0 : 0 <= c.indexOf("mac") ? h.mac = !0 : 0 <= c.indexOf("linux") && (h.linux = !0);
                    var n = t.devicePixelRatio,
                        K = 2 <= n;
                    e = 1;
                    var g = 0 <= c.indexOf("ipod"),
                        wa = 0 <= c.indexOf(_[40]),
                        D = 0 <= c.indexOf("ipad"),
                        H = wa || g || D,
                        C = 0 <= p.indexOf(_[415]),
                        y = !1,
                        aa = !1,
                        m = !1,
                        tb = f.indexOf(_[424]),
                        s = f.indexOf(_[417]),
                        c = !1,
                        z = 0;
                    lc = b();
                    if (H) {
                        h.ios = !0;
                        d = w;
                        k = f.indexOf("OS ");
                        if (0 < k && (k += 3, z = f.slice(k, f.indexOf(" ", k)).split("_").join("."), d += _[416] + z, h.iosversion = z, "6.0" <= z && (wa && !K || g && K))) h._iOS6_canvas_bug = !0;
                        y = wa || g;
                        aa = D;
                        h.iphone = wa || g;
                        h.ipod = g;
                        h.ipad = D;
                        h.retina = K;
                        if (wa || g) e /= 2
                    } else if (C)
                        if (k = f.indexOf(_[410]), z = parseFloat(f.slice(k + 8)), h.android = !0, h.androidversion = z, d = f.slice(k, f.indexOf(";", k)), y = 0 < A(p).indexOf(_[123]), aa = !y, d += y ? _[409] : _[402], k = f.indexOf(")"), 5 < k && (z = f.slice(0, k).lastIndexOf(";"), 5 < z && (K = f.indexOf(_[447], z), 0 < K && (k = K), d += " (" + f.slice(z + 2, k) + ")")), 0 < s && (n = lc), aa && 1 < n) {
                            if (h.hidpi = !0, e = n, 0 <= tb || 0 < s || 1 < lc) h.hidpi = !1, e = 1
                        } else {
                            if (y) {
                                h.hidpi = 1 < n;
                                e = n / 2;
                                0.5 > e && (e = 0.5);
                                if (0 <= tb || 1 < lc) h.hidpi = !1, e = 0.5;
                                0 < s && (h.hidpi = !1, e = 0.5)
                            }
                        } else {
                        if (0 <= p.indexOf(_[304]) || 0 <= p.indexOf(_[327]) || 0 <= p.indexOf("bb10")) h.blackberry = !0, d = _[279], c = !0;
                        0 <= p.indexOf("ipad") || 0 <= p.indexOf(_[40]) ? m = !0 : 0 <= p.indexOf(_[453]) ? (aa = !0, d += _[454]) : 0 <= p.indexOf(_[123]) ? (y = !0, d += _[457], e = 0.5) : m = !0
                    }
                    g = Ma.vendor && 0 <= Ma.vendor.indexOf("Apple");
                    wa = t.opera;
                    K = !1;
                    m && (d = _[385] + w);
                    k = f.indexOf(_[398]);
                    if (0 < k && (g || wa || C)) k += 8, z = f.slice(k, f.indexOf(" ", k)), g ? (h.safari = !0, h.safariversion = z, q = _[445]) : (C && (q = _[222], c = !0), wa && (h.opera = !0, h.operaversion = z, q = "Opera")), q += " " + z;
                    H && (k = f.indexOf(_[441]), 0 < k && (h.safari = !0, k += 6, z = parseFloat(f.slice(k, f.indexOf(" ", k))), h.crios = z, q = _[112] + z.toFixed(1)));
                    k = tb;
                    if (0 <= k) z = parseFloat(f.slice(k + 7)), h.chrome = !0, h.chromeversion = z, q = _[112] + z.toFixed(1), k = p.indexOf("opr/"), 0 < k && (q = _[429] + parseFloat(f.slice(k + 4)).toFixed(1) + _[339], c = !0), C && 28 > z && (c = !0), C && (1 < n && 20 > z) && (h.hidpi = !0, e = n, y && (e /= 2));
                    else if (k = s, 0 > k && (k = f.indexOf(_[428])), 0 <= k && (z = parseFloat(f.slice(1 + f.indexOf("/", k))), h.firefox = !0, h.firefoxversion = z, q = _[376] + (isNaN(z) ? "" : z.toFixed(1)), C && (c = !0)), k = f.indexOf("MSIE "), K = 0 <= k || 0 <= f.indexOf(_[413])) m = h.ie = !0, aa = !1, q = _[197], 0 < p.indexOf(_[364]) || 0 < p.indexOf(_[240]) ? (y = !0, m = !1, q = _[420] + q, e = 1) : 0 < p.indexOf("arm;") && 1 < Ma.msMaxTouchPoints && (aa = !0, m = !1, q = _[299] + q, c = !0), 0 <= k ? (z = f.slice(k + 4, f.indexOf(";", k)), h.ieversion = parseFloat(z), q += z) : (k = f.indexOf("rv:"), 0 <= k && (z = parseFloat(f.slice(k + 3)), !isNaN(z) && (10 <= z && 100 > z) && (h.ieversion = z, q += " " + z.toFixed(1)))), d = q, q = "";
                    h.android && (h.androidstock = !(h.chrome || h.firefox || h.opera));
                    if (0 < (k = p.indexOf(_[412]))) z = parseFloat(p.slice(k + 7)), !isNaN(z) && 0 < z && (h.webkit = !0, h.webkitversion = z);
                    h.pixelratio = isNaN(n) ? 1 : n;
                    var p = {},
                        M = U(),
                        n = function(a) {
                            for (var b = ["ms", "Moz", _[427], "O"], c = 0; 5 > c; c++) {
                                var d = 0 < c ? b[c - 1] + a.slice(0, 1).toUpperCase() + a.slice(1) : a;
                                if (void 0 !== M.style[d]) return d
                            }
                            return null
                        };
                    p.prefix = K ? "ms" : h.firefox ? "moz" : h.safari || h.chrome || h.androidstock ? _[60] : "";
                    p.perspective = n(_[293]);
                    p.transform = n(_[347]);
                    p.backgroundsize = n(_[237]);
                    p.boxshadow = n(_[354]);
                    p.boxshadow_style = _[233] == p.boxshadow ? _[195] : _[261] == p.boxshadow ? _[216] : _[98];
                    C && "4.0" > h.androidversion && (p.perspective = null);
                    if (p.perspective && (h.css3d = !0, _[198] == p.perspective && t.matchMedia && (n = t.matchMedia(_[166])))) h.css3d = !0 == n.matches;
                    M = null;
                    n = h;
                    tb = null;
                    try {
                        for (var u = U(2), s = 0; 4 > s && !(tb = u.getContext([_[67], _[75], _[101], _[99]][s])); s++);
                    } catch (R) {}
                    n.webgl = null != tb;
                    n = {};
                    n.useragent = f;
                    n.platform = w;
                    u = n.events = {};
                    n.css = p;
                    if (H || C || void 0 !== l.ontouchstart) h.touchdevice = !0, h.gesturedevice = !0;
                    w = 0;
                    if ((Ma.msPointerEnabled || Ma.pointerEnabled) && h.ie) H = Ma.msMaxTouchPoints || Ma.maxTouchPoints, Ma.msPointerEnabled && (w = 2), Ma.pointerEnabled && (w = 1), h.touchdevice = 0 < H, h.gesturedevice = 1 < H;
                    u.touchstart = [_[317], _[288], _[258]][w];
                    u.touchmove = [_[103], _[287], _[257]][w];
                    u.touchend = [_[107], _[355], _[283]][w];
                    u.touchcancel = [_[281], _[252], _[221]][w];
                    u.gesturestart = [_[262], _[84], _[84]][w];
                    u.gesturechange = [_[251], _[80], _[80]][w];
                    u.gestureend = [_[322], _[86], _[86]][w];
                    u.pointerover = [_[7], _[7], _[27]][w];
                    u.pointerout = [_[5], _[5], _[19]][w];
                    h.pointerEvents = function() {
                        if (h.firefox) return !0;
                        var a = B.createElement("x"),
                            b = t.getComputedStyle,
                            c = a.style;
                        if (!(_[85] in c)) return !1;
                        c.pointerEvents = "auto";
                        c.pointerEvents = "x";
                        l.appendChild(a);
                        b = b && "auto" === b(a, "").pointerEvents;
                        l.removeChild(a);
                        return !!b
                    }();
                    q && (d += " - " + q);
                    h.realDesktop = m;
                    a = a.vars ? A(a.vars.simulatedevice) : null;
                    _[353] == a && (0 <= f.indexOf(_[124]) || 0 <= f.indexOf("iPod") ? a = _[40] : 0 <= f.indexOf("iPad") && (a = "ipad"));
                    h.touchdeviceNS = h.touchdevice;
                    a = _[40] == a ? 1 : "ipad" == a ? 2 : 0;
                    0 < a && (h.simulator = !0, h.crios = 0, d += " - " + (1 == a ? _[124] : "iPad") + _[326], e = a / 2, y = 1 == a, aa = 2 == a, m = !1, h.ios = !0, h.iphone = y, h.ipad = aa, h.touchdevice = !0, h.gesturedevice = !0);
                    h.browser = n;
                    h.infoString = d;
                    h.mobile = y;
                    h.tablet = aa;
                    h.desktop = m;
                    h.getViewportScale = b;
                    F = e;
                    !1 == h.simulator && (!1 != B.fullscreenEnabled && !1 != B.mozFullScreenEnabled && !1 != B.webkitFullScreenEnabled && !1 != B.webkitFullscreenEnabled && !1 != B.msFullscreenEnabled) && (a = [_[204], _[168], _[165], _[164], _[185]], d = -1, e = null, f = _[211], l[a[0]] ? (e = "", d = 0) : l[a[1]] ? (e = "moz", d = 1) : l[a[2]] ? (e = _[60], d = 2) : l[a[3]] ? (e = _[60], d = 3) : l[a[4]] && (e = "MS", f = _[206], d = 4), 0 <= d && !1 == c && (h.fullscreensupport = !0, u.fullscreenchange = e + f, u.requestfullscreen = a[d]));
                    h.buildList();
                    delete h.runDetection
                },
                buildList: function() {
                    var a, b = "all";
                    for (a in h) a == A(a) && h[a] && (b += "|" + a);
                    h.haveList = b
                },
                checkSupport: function(a) {
                    a = A(a).split("|");
                    if (null == a) return !0;
                    var b, c, d = a.length;
                    for (b = 0; b < d; b++) {
                        var e = a[b].split("+"),
                            f = !1;
                        for (c = 0; c < e.length; c++) {
                            var k = e[c],
                                l = !1;
                            33 == k.charCodeAt(0) && (k = k.slice(1), l = !0);
                            if (0 == k.indexOf("ios") && h.ios) {
                                if (h.iosversion >= k.slice(3))
                                    if (l) {
                                        f = !1;
                                        break
                                    } else f = !0
                            } else if (0 <= h.haveList.indexOf(k))
                                if (l) {
                                    f = !1;
                                    break
                                } else f = !0;
                            else if (l) f = !0;
                            else {
                                f = !1;
                                break
                            }
                        }
                        if (f) return !0
                    }
                    return !1
                }
            },
            Ra = 0,
            Xb = 0,
            Vd = 0,
            rd = !0,
            Ia = 0,
            Kc = 0,
            Db = 0,
            jd = !1,
            xa = null,
            sd = null,
            td = null,
            ud = null,
            Ac = null,
            Lc = null,
            vd = !1,
            ab = 0,
            Tb = function() {
                var a = this;
                a._type = "base";
                a.registerattribute = function(b, c, d, e) {
                    b = A(b);
                    d && e ? (a.hasOwnProperty(b) && (c = Wa(a[b], typeof c)), a.__defineGetter__(b, e), a.__defineSetter__(b, d), d(c)) : a[b] = a.hasOwnProperty(b) ? Wa(a[b], typeof c) : c
                };
                a.createobject = function(b) {
                    b = A(b);
                    try {
                        return a.hasOwnProperty(b) ? a[b] : a[b] = new Tb
                    } catch (c) {}
                    return null
                };
                a.removeobject = a.removeattribute = function(b) {
                    b = A(b);
                    try {
                        a[b] = null, delete a[b]
                    } catch (c) {}
                };
                a.createarray = function(b) {
                    b = A(b);
                    return a[b] && a[b].isArray ? a[b] : a[b] = new Ya(Tb)
                };
                a.removearray = function(b) {
                    b = A(b);
                    a[b] && a[b].isArray && (a[b] = null, delete a[b])
                };
                a.getattributes = function() {
                    var b = [],
                        c = ["index", _[382]],
                        d;
                    for (d in a) _[10] != typeof a[d] && (-1 == c.indexOf(d) && "_" != d.charAt(0)) && b.push(d);
                    return b
                }
            },
            Ya = function(a, b) {
                var c = [],
                    d = {};
                this.isArray = !0;
                this.isDynArray = !0 == b;
                this.__defineGetter__("count", function() {
                    return c.length
                });
                this.__defineSetter__("count", function(a) {
                    0 == a ? (c = [], d = {}) : c.length = a
                });
                this.createItem = function(b, f) {
                    var k = -1,
                        l = null,
                        k = String(b).charCodeAt(0);
                    if (48 <= k && 57 >= k) {
                        if (f) return null;
                        k = parseInt(b, 10);
                        l = c[k];
                        if (null == l || void 0 == l) l = null != a ? new a : {}, l.name = "n" + k, l.index = k, c[k] = l, d[l.name] = l
                    } else if (b = A(b), l = d[b], null == l || void 0 == l) l = f ? f : null != a ? new a : {}, k = c.push(l) - 1, l.index = k, l.name = b, c[k] = l, d[b] = l;
                    return l
                };
                this.getItem = function(a) {
                    var b = -1,
                        b = String(a).charCodeAt(0);
                    48 <= b && 57 >= b ? (b = parseInt(a, 10), a = c[b]) : a = d[A(a)];
                    return a
                };
                this.getArray = function() {
                    return c
                };
                this.renameItem = function(a, b) {
                    var k = -1,
                        k = String(a).charCodeAt(0);
                    48 <= k && 57 >= k ? (k = parseInt(a, 10), k = c[k]) : k = d[A(a)];
                    k && (delete d[k.name], b = A(b), k.name = b, d[b] = k)
                };
                this.removearrayitem = this.removeItem = function(a) {
                    var b = -1,
                        b = null;
                    a = String(a);
                    b = String(a).charCodeAt(0);
                    48 <= b && 57 >= b ? (b = parseInt(a, 10), b = c[b]) : b = d[A(a)];
                    if (b) {
                        d[b.name] = null;
                        delete d[b.name];
                        c.splice(b.index, 1);
                        var k;
                        k = c.length;
                        for (a = b.index; a < k; a++) c[a].index--
                    }
                    return b
                }
            },
            ya = {},
            Wd = function(a) {
                for (var b = Ye, c = [], d, e, f, k, l, r = a.length, j = 0, h = 0; j < r;) d = b.indexOf(a.charAt(j++)), e = b.indexOf(a.charAt(j++)), k = b.indexOf(a.charAt(j++)), l = b.indexOf(a.charAt(j++)), d = d << 2 | e >> 4, e = (e & 15) << 4 | k >> 2, f = (k & 3) << 6 | l, c[h++] = d, 64 != k && (c[h++] = e), 64 != l && (c[h++] = f);
                return c
            },
            Xd = function(a, b, c) {
                if (null == a) return null;
                !0 == b && m.basedir && 0 > a.indexOf("://") && 0 != a.indexOf("/") && (a = m.basedir + a);
                a = a.split("\\").join("/");
                null == ha.firstxmlpath && (ha.firstxmlpath = "");
                null == ha.currentxmlpath && (ha.currentxmlpath = "");
                null == ha.swfpath && (ha.swfpath = "");
                null == ha.htmlpath && (ha.htmlpath = "");
                for (b = a.indexOf("%"); 0 <= b;) {
                    var d = a.indexOf("%", b + 1);
                    if (d > b) {
                        var e = a.slice(b + 1, d),
                            f = null;
                        if (36 == e.charCodeAt(0)) {
                            if (e = N(e.slice(1)), null != e) {
                                a = a.slice(0, b) + e + a.slice(d + 1);
                                b = a.indexOf("%");
                                continue
                            }
                        } else switch (e) {
                            case _[383]:
                                f = !0 == c ? "" : ha.firstxmlpath;
                                break;
                            case _[328]:
                                f = ha.currentxmlpath;
                                break;
                            case _[421]:
                                f = !0 == c ? "" : ha.swfpath;
                                break;
                            case _[386]:
                                f = !0 == c ? "" : ha.htmlpath;
                                break;
                            case _[391]:
                                f = !0 == c ? "" : m.basedir
                        }
                        null != f ? (d++, "/" == a.charAt(d) && d++, a = f + a.slice(d), b = a.indexOf("%")) : b = a.indexOf("%", b + 1)
                    } else b = -1
                }
                return a
            },
            wd = function(a, b, c) {
                var d, e;
                if (0 <= (d = b.indexOf(_[303])))
                    if ((e = b.indexOf(_[271])) > d) b = b.slice(d + 11, e);
                d = null;
                void 0 !== c ? e = b : (c = b.slice(0, 8), e = b.slice(8));
                if ("KENC" != c.slice(0, 4)) return b;
                var f = !1,
                    k = b = 0,
                    k = 0;
                b = String(c).charCodeAt(4);
                if (80 == b || 82 == b || 71 == b) k = String(c).charCodeAt(5), 85 == k && (k = String(c).charCodeAt(6), 66 == k && (f = !0));
                if (!f) return a && $(3, a + _[139]), null;
                if (Ja & 32 && 80 == b) return a && ka(a + _[46]), null;
                a = Wd(e);
                c = b;
                var l, r;
                b = [];
                b.length = 256;
                if (80 == c || 82 == c) {
                    r = 15;
                    e = _[78];
                    82 == c && od && (r = 127, e = od);
                    l = a[65] & 7;
                    for (c = 0; 128 > c; c++) b[2 * c] = a[c], b[2 * c + 1] = String(e).charCodeAt(c & r);
                    r = a.length - 128 - l;
                    l += 128
                } else if (71 == c) {
                    l = a[4];
                    r = (a[l] ^ l) & 15 | ((a[2 + l] ^ l) >> 2 & 63) << 4 | ((a[1 + l] ^ l) >> 1 & 63) << 10 | ((a[3 + l] ^ l) & 63) << 16;
                    for (c = 0; 256 > c; c++) b[c] = a[c] ^ a[256 + r + l + 2 * c];
                    l = 256
                }
                Yd.srand(b, 256);
                a = Yd.flip(a, l, r);
                null != a && (d = Zd(a));
                return d
            },
            Zd = function(a) {
                for (var b = "", c = 0, d = 0, e = 0, f = 0, k = a.length; c < k;) d = a[c], 128 > d ? (b += Gc(d), c++) : 191 < d && 224 > d ? (e = a[c + 1], b += Gc((d & 31) << 6 | e & 63), c += 2) : (e = a[c + 1], f = a[c + 2], d = (d & 15) << 12 | (e & 63) << 6 | f & 63, 65279 != d && (b += Gc(d)), c += 3);
                return b
            },
            ha = ya,
            Ye = _[128];
        ha.firstxmlpath = null;
        ha.currentxmlpath = null;
        ha.swfpath = null;
        ha.htmlpath = null;
        ha.parsePath = Xd;
        var Yd = new function() {
            var a, b, c;
            this.srand = function(d, e) {
                var f, k, l, r, j = [];
                j.length = 256;
                for (f = 0; 256 > f; f++) j[f] = f;
                for (k = f = 0; 256 > f; f++) k = k + j[f] + d[f % e] & 255, r = j[f], j[f] = j[k], j[k] = r;
                for (l = k = f = 0; 256 > l; l++) f = f + 1 & 255, k = k + j[f] & 255, r = j[f], j[f] = j[k], j[k] = r;
                a = j;
                b = f;
                c = k
            };
            this.flip = function(d, e, f) {
                var k = [],
                    l, r;
                k.length = f;
                var j = a,
                    h = b,
                    p = c;
                for (l = 0; l < f; l++, e++) h = h + 1 & 255, p = p + j[h] & 255, k[l] = d[e] ^ a[j[h] + j[p] & 255], r = j[h], j[h] = j[p], j[p] = r;
                b = h;
                c = p;
                return k
            }
        };
        ha.loadfile = function(a, b, c) {
            ha.loadfile2(a, null, b, c)
        };
        //d3vin:load plugins
        ha.loadfile2 = function(a, b, c, d) {
            var e = {
                errmsg: !0
            };
            e.rqurl = a;
            a = Xd(a);
            var f = e.url = a,
                k = function(b, c) {
                    d && d(e);
                    e.errmsg && $(3, a + _[25] + c + ")")
                },
                l = new XMLHttpRequest;
            void 0 !== l.overrideMimeType && b && l.overrideMimeType(b);
            l.onreadystatechange = function() {
                if (4 == l.readyState) {
                    var a = l.status,
                        b = l.responseText;
                    0 == a && b || 200 == a || 304 == a ? (a = wd(f, b), e.data = a, null != a ? c && c(e) : d && d(e)) : void 0 !== k ? k(f, l.status) : ka(f + _[25] + l.status + ")")
                }
            };
            try {
                l.open("GET", f, !0), l.send(null)
            } catch (h) {
                void 0 !== k ? k(f, l.e) : ka(f + _[70])
            }
        };
        ha.resolvecontentencryption = wd;
        ha.b64u8 = function(a) {
            return Zd(Wd(a))
        };
        ha.decodeLicense = function(a) {
            a = (new DOMParser).parseFromString(a, _[20]);
            if (a = P.findxmlnode(a, _[397])) {
                var b = wd(null, a.firstChild.nodeValue, _[360]);
                if (b) {
                    if (a = a.attributes.regname) a = a.nodeValue;
                    var b = b.split(";"),
                        c = {},
                        d;
                    for (d = 0; d < b.length; d++) {
                        var e = b[d].split("=");
                        2 == e.length && (c[e[0]] = e[1])
                    }
                    if (c.user == a) return c
                }
            }
            return null
        };
        var P = {},
            $d = function(a) {
                var b, c, d = a.childNodes,
                    e;
                c = d.length;
                for (b = 0; b < c; b++)
                    if (e = d.item(b)) switch (e.nodeType) {
                        case 1:
                            $d(e);
                            break;
                        case 8:
                            a.removeChild(e), b--, c--
                    }
            },
            ae = function(a, b) {
                var c, d, e = a.childNodes,
                    f = -1;
                d = e.length;
                if (1 <= d)
                    for (c = 0; c < d; c++)
                        if (A(e[c].nodeName) == b) {
                            f = c;
                            break
                        }
                return 0 <= f ? e[f] : null
            },
            be = function(a, b, c) {
                for (var d, e, f, k, l, r, j, w = a.length, p = new XMLSerializer, q = 0; q < w; q++)
                    if ((d = a[q]) && d.nodeName && "#text" != d.nodeName)
                        if (e = d.nodeName, e = A(e), e = null == b && _[64] == e ? null : b ? b + "." + e : e, f = d.attributes, !f || !(f.devices && !1 == h.checkSupport(f.devices.nodeValue))) {
                            j = (k = f && f.name ? f.name.nodeValue : null) ? !0 : !1;
                            if (c) {
                                if ((_[41] == e || "layer" == e) && c & 4) continue;
                                if (_[11] == e && c & 128) continue;
                                if (_[43] == e && c & 65536) continue;
                                if (c & 64 && k)
                                    if (_[41] == e || "layer" == e) {
                                        var n = Ba.getItem(k);
                                        if (n && n._pCD && n.keep) continue
                                    } else if (_[11] == e && (n = Qa.getItem(k)) && n._pCD && n.keep) continue
                            }
                            if (e)
                                if (j) {
                                    if (_[12] == e || "data" == e || "scene" == e) {
                                        $d(d);
                                        j = null;
                                        if ((_[12] == e || "data" == e) && d.childNodes && 1 <= d.childNodes.length)
                                            for (n = 0; n < d.childNodes.length; n++)
                                                if (4 == d.childNodes[n].nodeType) {
                                                    j = d.childNodes[n].nodeValue;
                                                    break
                                                }
                                        null == j && (j = p.serializeToString(d), j = j.slice(j.indexOf(">") + 1, j.lastIndexOf("</")), _[12] == e && (j = j.split(_[435]).join('"').split(_[434]).join("'").split(_[433]).join(String.fromCharCode(160)).split("&amp;").join("&")));
                                        I(e + "[" + k + _[34], j);
                                        if (f) {
                                            n = f.length;
                                            for (j = 0; j < n; j++) l = f[j], r = A(l.nodeName), l = l.nodeValue, "name" != r && (r = e + "[" + k + "]." + A(r), I(r, l))
                                        }
                                        continue
                                    }
                                    e = e + "[" + k + "]";
                                    if (!Ab(k, e)) continue;
                                    I(e + ".name", k)
                                } else if ((k = N(e)) && k.isArray && !k.isDynArray) k = "n" + String(k.count), e = e + "[" + k + "]", I(e + ".name", k);
                            if (f) {
                                n = f.length;
                                for (j = 0; j < n; j++) l = f[j], r = A(l.nodeName), l = l.nodeValue, k = e ? e + "." : "", "name" != r && (r = k + A(r), I(r, l))
                            }
                            d.childNodes && 0 < d.childNodes.length && be(d.childNodes, e, c)
                        }
            },
            ce = function(a, b) {
                var c = null,
                    d, e;
                e = a.length;
                for (d = 0; d < e; d++)
                    if (c = a[d], !c || !(c.nodeName && _[12] == A(c.nodeName))) {
                        var f = c.attributes;
                        if (f) {
                            var k, l = f.length;
                            for (k = 0; k < l; k++) {
                                var h = f[k],
                                    j = A(h.nodeName),
                                    w = j.indexOf("url");
                                if (0 == w || 0 < w && w == j.length - 3) j = h.nodeValue, 0 < j.indexOf("://") || 47 == j.charCodeAt(0) || "" != j && (j = b + j), h.nodeValue = j
                            }
                        }
                        c.childNodes && 0 < c.childNodes.length && ce(c.childNodes, b)
                    }
            },
            de = function(a, b) {
                var c = rb(b),
                    d = c.lastIndexOf("/"),
                    e = c.lastIndexOf("\\");
                e > d && (d = e);
                0 < d && (c = c.slice(0, d + 1), ce(a, c))
            },
            //d3vin-start
            //function name : resolvexmlencryption
            //a : xml document, <encrypted>...
            //b : xml filename, tour.xml
            //d3vin-end
            ee = function(a, b) {
                var c = ae(a, _[332]);
                if (c) {
                    var d = "",
                        e, f;
                    f = c.childNodes.length;
                    for (e = 0; e < f; e++) d += c.childNodes[e].nodeValue;
                    if (c = ya.resolvecontentencryption(b, d))
                    {
                      //d3vin-start
                      var xml_dom_after_decrypt = (c = (new DOMParser).parseFromString(c, _[20])) && c.documentElement && _[31] == c.documentElement.nodeName ? ($(3, b + _[18]), null) : c;
                      //d3vin-end
                      //d3vin-start
                      var xhttp = new XMLHttpRequest();
                      xhttp.open("GET", b.replace(".xml", ".decrypted.xml"), false);
                      xhttp.send();
                      xml_dom_after_decrypt = xhttp.responseXML;
                      //d3vin-end
                      return xml_dom_after_decrypt;
                    }
                    ka(b + _[46]);
                    return null
                }
                return Ja & 32 ? (ka(b + _[46]), null) : a
            },
            fe = function(a, b) {
                var c, d, e;
                if (null != P.xmlIncludeNode) {
                    e = rb(a.url);
                    if ((d = a.responseXML) && d.documentElement && _[31] == d.documentElement.nodeName) {
                        ka(e + _[18]);
                        return
                    }
                    //d3vin-start
                    //d=xml dom (encrypted)
                    //a.url="skin/vtourskin.xml"
                    //d3vin-end
                    d = ee(d, a.url);
                    if (null == d) return;
                    de(d.childNodes, e);
                    c = d.childNodes;
                    var f = P.xmlIncludeNode.parentNode;
                    if (null != f.parentNode) {
                        var k = 0;
                        e = c.length;
                        if (1 < e)
                            for (d = 0; d < e; d++)
                                if (_[64] == A(c[d].nodeName)) {
                                    k = d;
                                    break
                                }
                        d = null;
                        if (void 0 === P.xmlDoc.importNode) {
                            var l = function(a, b) {
                                var c, d;
                                switch (a.nodeType) {
                                    case 1:
                                        var e = P.xmlDoc.createElement(a.nodeName);
                                        if (a.attributes && 0 < a.attributes.length) {
                                            c = 0;
                                            for (d = a.attributes.length; c < d;) e.setAttribute(a.attributes[c].nodeName, a.getAttribute(a.attributes[c++].nodeName))
                                        }
                                        if (b && a.childNodes && 0 < a.childNodes.length) {
                                            c = 0;
                                            for (d = a.childNodes.length; c < d;) e.appendChild(l(a.childNodes[c++], b))
                                        }
                                        return e;
                                    case 3:
                                    case 4:
                                    case 8:
                                        return P.xmlDoc.createTextNode(a.nodeValue)
                                }
                            };
                            d = l(c[k], !0)
                        } else d = P.xmlDoc.importNode(c[k], !0);
                        f.insertBefore(d, P.xmlIncludeNode);
                        f.removeChild(P.xmlIncludeNode)
                    } else P.xmlDoc = d;
                    P.xmlAllNodes = [];
                    P.addNodes(P.xmlDoc.childNodes);
                    P.xmlIncludeNode = null
                }
                f = !1;
                e = P.xmlAllNodes.length;
                for (d = 0; d < e; d++)
                    if (c = P.xmlAllNodes[d], k = null, null != c.nodeName) {
                        k = A(c.nodeName);
                        if (_[408] == k) {
                            var k = c.attributes,
                                r, j = k.length,
                                w = !1;
                            for (r = 0; r < j; r++) {
                                var p = k[r];
                                _[411] == p.nodeName && !1 == h.checkSupport(p.nodeValue) && (w = !0)
                            }
                            if (!1 == w)
                                for (r = 0; r < j; r++)
                                    if (p = k[r], "url" == A(p.nodeName)) {
                                        f = !0;
                                        w = p.nodeValue;
                                        P.xmlIncludeNode = c;
                                        //d3vin: load skin/vtourskin.xml
                                        var q = ya.parsePath(w),
                                            n = new XMLHttpRequest;
                                        n.url = q;
                                        void 0 !== n.overrideMimeType && n.overrideMimeType(_[20]);
                                        n.onreadystatechange = function() {
                                            if (4 == n.readyState) {
                                                var a = n.status;
                                                0 == a || 200 == a || 304 == a ? n.responseXML ? fe(n, b) : 200 == a ? ka(q + _[18]) : ka(q + _[69]) : ka(q + _[25] + n.status + ")")
                                            }
                                        };
                                        try {
                                            n.open("GET", q, !0), n.send(null)
                                        } catch (K) {
                                            ka(w + _[70])
                                        }
                                    }
                        }
                        if (f) break
                    }!1 == f && b()
            },
            Ze = P;
        P.resolvexmlencryption = ee;
        P.resolvexmlincludes = function(a, b) {
            var c = a.childNodes;
            P.xmlDoc = a;
            P.xmlAllNodes = [];
            P.addNodes(c);
            de(c, m.xml.url);
            P.xmlIncludeNode = null;
            fe(null, b)
        };
        P.parsexml = be;
        P.xmlDoc = null;
        P.xmlAllNodes = null;
        P.xmlIncludeNode = null;
        P.addNodes = function(a) {
            var b, c, d;
            d = a.length;
            for (c = 0; c < d; c++)
                if ((b = a[c]) && b.nodeName && _[12] != A(b.nodeName)) P.xmlAllNodes.push(b), b.childNodes && 0 < b.childNodes.length && P.addNodes(b.childNodes)
        };
        Ze.findxmlnode = ae;
        var fa = {
            linear: function(a, b, c) {
                return c * a + b
            },
            easeinquad: function(a, b, c) {
                return c * a * a + b
            },
            easeoutquad: function(a, b, c) {
                return -c * a * (a - 2) + b
            }
        };
        fa[_[22]] = fa.easeoutquad;
        fa.easeinoutquad = function(a, b, c) {
            return (1 > (a /= 0.5) ? c / 2 * a * a : -c / 2 * (--a * (a - 2) - 1)) + b
        };
        fa.easeincubic = function(a, b, c) {
            return c * a * a * a + b
        };
        fa.easeoutcubic = function(a, b, c) {
            return c * ((a -= 1) * a * a + 1) + b
        };
        fa.easeinquart = function(a, b, c) {
            return c * a * a * a * a + b
        };
        fa.easeoutquart = function(a, b, c) {
            return -c * ((a = a / 1 - 1) * a * a * a - 1) + b
        };
        fa.easeinquint = function(a, b, c) {
            return c * a * a * a * a * a + b
        };
        fa.easeoutquint = function(a, b, c) {
            return c * ((a = a / 1 - 1) * a * a * a * a + 1) + b
        };
        fa.easeinsine = function(a, b, c) {
            return -c * Math.cos(a * (Na / 2)) + c + b
        };
        fa.easeoutsine = function(a, b, c) {
            return c * Math.sin(a * (Na / 2)) + b
        };
        fa.easeinexpo = function(a, b, c) {
            return 0 == a ? b : c * Math.pow(2, 10 * (a - 1)) + b - 0.001 * c
        };
        fa.easeoutexpo = function(a, b, c) {
            return 1 == a ? b + c : 1.001 * c * (-Math.pow(2, -10 * a) + 1) + b
        };
        fa.easeincirc = function(a, b, c) {
            return -c * (Math.sqrt(1 - a * a) - 1) + b
        };
        fa.easeoutcirc = function(a, b, c) {
            return c * Math.sqrt(1 - (a = a / 1 - 1) * a) + b
        };
        fa.easeoutbounce = function(a, b, c) {
            return a < 1 / 2.75 ? c * 7.5625 * a * a + b : a < 2 / 2.75 ? c * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) + b : a < 2.5 / 2.75 ? c * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) + b : c * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) + b
        };
        fa.easeinbounce = function(a, b, c) {
            return c - fa.easeoutbounce(1 - a, 0, c) + b
        };
        fa.getTweenfu = function(a) {
            a = A(a);
            "" == a || "null" == a ? a = _[48] : void 0 === fa[a] && ($(2, _[260] + a + _[138]), a = _[48]);
            return fa[a]
        };
        var Q = {};
        (function() {
            function a(a, b, c) {
                var d, g = a.length;
                c = !0 != c;
                for (d = 0; d < g; d++) {
                    var e = String(a[d]);
                    c && "null" == ("" + e).toLowerCase() ? a[d] = null : ")" == e.charAt(e.length - 1) && "get(" == e.slice(0, 4).toLowerCase() && (e = String(N(W(e.slice(4, e.length - 1)), b)), a[d] = e)
                }
            }

            function b(a, b) {
                var c = "",
                    d, g, e, f, j;
                e = a.length;
                j = b.length;
                for (g = 0; g < e; g++) d = a.charAt(g), "%" == d ? (g++, d = a.charCodeAt(g) - 48, 0 <= d && 9 >= d ? (g + 1 < e && (f = a.charCodeAt(g + 1) - 48, 0 <= f && 9 >= f && (g++, d = 10 * d + f)), c = d < j ? c + String(b[d]) : c + "null") : c = -11 == d ? c + "%" : c + ("%" + a.charAt(g))) : c += d;
                return c
            }

            function c(a, c, d, g) {
                d = Array.prototype.slice.call(d);
                d.splice(0, 0, a);
                c = b(c, d);
                j.callaction(c, g, !0)
            }

            function d(a) {
                var b = w,
                    c = b.length,
                    d;
                for (d = 0; d < c; d++)
                    if (b[d].id == a) {
                        b.splice(d, 1);
                        break
                    }
            }

            function e(a) {
                var b = a.length;
                if (2 == b || 3 == b) {
                    var c = N(a[b - 2], j.actioncaller),
                        d = N(a[b - 1], j.actioncaller);
                    null == c && (c = a[b - 2]);
                    null == d && (d = a[b - 1]);
                    return [a[0], parseFloat(c), parseFloat(d)]
                }
                return null
            }

            function f(a, b, c) {
                var d = 1 == b.length ? N(b[0], c) : b[1],
                    d = 0 == a ? escape(d) : unescape(d);
                I(b[0], d, !1, c, !0)
            }

            function k(a) {
                var b = a.position;
                1 == a.motionmode ? (b *= a.Tmax, b <= a.T1 ? b *= a.accelspeed / 2 * b : b > a.T1 && b <= a.T1 + a.T2 ? b = a.S1 + (b - a.T1) * a.Vmax : (b -= a.T1 + a.T2, b = a.Vmax * b + a.breakspeed / 2 * b * b + a.S1 + a.S2), b = 0 != a.Smax ? b / a.Smax : 1) : 2 == a.motionmode && (b = a.tweenfu(b, 0, 1));
                s.hlookat = a.startH + b * (a.destH - a.startH);
                s.vlookat = a.startV + b * (a.destV - a.startV);
                s.fov = a.startF + b * (a.destF - a.startF)
            }

            function l(a) {
                var b = a.waitfor;
                "load" == b ? ma.isLoading() && (a.position = 0) : _[66] == b && ma.isBlending() && (a.position = 0)
            }

            function h(a) {
                var b = a.varname,
                    c = parseFloat(a.startval),
                    d = parseFloat(a.endval),
                    g = null != a.startval ? 0 < String(a.startval).indexOf("%") : !1,
                    e = null != a.endval ? 0 < String(a.endval).indexOf("%") : !1;
                e ? g || (c = 0) : g && 0 == d && (e = !0);
                var g = 0,
                    f = a.position,
                    g = a.tweenmap(f, c, d - c);
                1 <= f && (g = d);
                I(b, e ? g + "%" : g, !0, a.actioncaller);
                null != a.updatefu && j.callaction(a.updatefu, a.actioncaller)
            }
            var j = Q;
            j.busy = !1;
            j.blocked = !1;
            j.queue = [];
            j.actioncaller = null;
            var w = [],
                p = [],
                q = null,
                n = 0,
                K = function() {
                    this.id = null;
                    this.blocking = !1;
                    this.position = this.maxruntime = this.starttime = 0;
                    this.updatefu = this.actioncaller = this.donecall = this.process = null
                };
            j.isblocked = function() {
                if (j.blocked) {
                    var a = q;
                    if (a) q = null, j.stopall(), "break" != A(a) && j.callaction(a), j.processactions();
                    else return !0
                }
                return !1
            };
            j.callaction = function(a, b, c) {
                if (a && "null" != a && "" != a) {
                    var d = typeof a;
                    if (_[10] === d) a();
                    else if (_[114] !== d && (a = Ub(a, b))) {
                        var d = a.length,
                            g = 0 < j.queue.length,
                            e = !1;
                        for (b = 0; b < d; b++) {
                            var f = a[b];
                            _[290] == f.cmd && (e = !0);
                            f.breakable = e;
                            !0 == c ? j.queue.splice(b, 0, f) : j.queue.push(f)
                        }!1 == g && j.processactions()
                    }
                }
            };
            var g = !1;
            j.processactions = function() {
                if (!g) {
                    g = !0;
                    for (var c = null, d = null, e = null, f = null, l = 0, k = j.queue; null != k && 0 < k.length;) {
                        if (j.busy || j.blocked) {
                            g = !1;
                            return
                        }
                        l++;
                        if (1E4 < l) {
                            $(2, _[78]);
                            k.length = 0;
                            break
                        }
                        c = k.shift();
                        d = String(c.cmd);
                        e = c.args;
                        c = c.caller;
                        j.actioncaller = c;
                        if ((!c || !c._busyonloaded || !c._destroyed) && "//" != d.slice(0, 2))
                            if ("call" == d && (d = A(e.shift())), a(e, c, "set" == d), void 0 !== j[d]) j[d].apply(j[d], e);
                            else if (c && void 0 !== c[d]) f = c[d], _[10] === typeof f ? f.apply(f, e) : j.callaction(c[d], c, !0);
                        else {
                            if (_[12] == d || "call" == d) d = A(e.shift());
                            f = null;
                            if (null != (f = N(d))) {
                                var h = typeof f;
                                _[10] === h ? f.apply(f, e) : _[114] === h ? $(2, _[77] + sb(d)) : (e.splice(0, 0, d), f = b(f, e), j.callaction(f, c, !0))
                            } else(f = N(_[419] + d + _[34])) ? (e.splice(0, 0, d), f = b(f, e), j.callaction(f, c, !0)) : $(2, _[77] + sb(d))
                        }
                    }
                    j.blocked || (q = null);
                    j.actioncaller = null;
                    g = !1
                }
            };
            j.processAnimations = function(a) {
                var b = !1,
                    c = w,
                    d = c.length,
                    g, e = ga();
                a = !0 == a;
                for (g = 0; g < d; g++) {
                    var f = c[g],
                        l = (e - f.starttime) / 1E3 / f.maxruntime;
                    isNaN(l) && (l = 1);
                    1 < l && (l = 1);
                    f.position = l;
                    null != f.process && (b = !0, f.process(f), l = f.position);
                    if (1 <= l || a) c.splice(g, 1), d--, g--, f.blocking ? (j.blocked = !1, j.processactions()) : f.donecall && !1 == a && j.callaction(f.donecall, f.actioncaller)
                }
                j.blocked && (b = !1);
                return b
            };
            j.stopall = function() {
                var a, b, c = j.queue;
                b = c.length;
                for (a = 0; a < b; a++) {
                    var d = c[a];
                    d && d.breakable && (d.cmd = "//")
                }
                w = [];
                j.blocked = !1
            };
            j.breakall = function() {
                j.processAnimations(!0)
            };
            j.oninterrupt = function(a) {
                q = a
            };
            j.delayedcall = function() {
                var a = arguments,
                    b = a.length,
                    c = 0;
                3 == b && (c++, b--);
                2 == b && (b = new K, b.maxruntime = Number(a[c]), b.donecall = a[c + 1], b.starttime = ga(), b.actioncaller = j.actioncaller, b.id = 0 < c ? "ID" + A(a[0]) : "DC" + ++n, d(b.id), w.push(b))
            };
            j.stopdelayedcall = function(a) {
                d("ID" + A(a))
            };
            j.set = function() {
                var a = arguments;
                2 == a.length && I(a[0], a[1], !1, j.actioncaller)
            };
            j.copy = function() {
                var a = arguments;
                2 == a.length && I(a[0], N(a[1], j.actioncaller), !1, j.actioncaller)
            };
            j.push = function() {
                var a = arguments;
                1 == a.length && p.push(N(a[0], j.actioncaller))
            };
            j.pop = function() {
                var a = arguments;
                1 == a.length && I(a[0], p.pop(), !1, j.actioncaller)
            };
            j[_[423]] = function() {
                var a = arguments,
                    b = a.length,
                    c = a[0],
                    d = A(N(c, j.actioncaller));
                if (1 == b) I(c, !Fa(d), !0, j.actioncaller);
                else if (3 <= b) {
                    var g;
                    b--;
                    for (g = 1; g <= b; g++) {
                        var e = A(a[g]),
                            f = !1;
                        !isNaN(Number(d)) && !isNaN(Number(e)) ? Number(d) == Number(e) && (f = !0) : d == e && (f = !0);
                        if (f) {
                            g++;
                            g > b && (g = 1);
                            I(c, a[g], !0, j.actioncaller);
                            break
                        }
                    }
                }
            };
            j.roundval = function() {
                var a = arguments;
                if (1 <= a.length) {
                    var b = Number(N(a[0], j.actioncaller)),
                        c = 2 == a.length ? parseInt(a[1]) : 0,
                        b = 0 == c ? Math.round(b).toString() : b.toFixed(c);
                    I(a[0], b, !1, j.actioncaller, !0)
                }
            };
            j.inc = function() {
                var a = arguments,
                    b = a.length;
                if (1 <= b) {
                    var c = Number(N(a[0], j.actioncaller)) + (1 < b ? Number(a[1]) : 1);
                    3 < b && c > Number(a[2]) && (c = Number(a[3]));
                    I(a[0], c, !0, j.actioncaller)
                }
            };
            j.dec = function() {
                var a = arguments,
                    b = a.length;
                if (1 <= b) {
                    var c = Number(N(a[0], j.actioncaller)) - (1 < b ? Number(a[1]) : 1);
                    3 < b && c < Number(a[2]) && (c = Number(a[3]));
                    I(a[0], c, !0, j.actioncaller)
                }
            };
            j.add = function() {
                var a = e(arguments);
                a && I(a[0], a[1] + a[2], !1, j.actioncaller)
            };
            j.sub = function() {
                var a = e(arguments);
                a && I(a[0], a[1] - a[2], !1, j.actioncaller)
            };
            j.mul = function() {
                var a = e(arguments);
                a && I(a[0], a[1] * a[2], !1, j.actioncaller)
            };
            j.div = function() {
                var a = e(arguments);
                a && I(a[0], a[1] / a[2], !1, j.actioncaller)
            };
            j.mod = function() {
                var a = e(arguments);
                if (a) {
                    var b = a[1],
                        c = b | 0,
                        b = b + (-c + c % (a[2] | 0));
                    I(a[0], b, !1, j.actioncaller)
                }
            };
            j.pow = function() {
                var a = e(arguments);
                a && I(a[0], Math.pow(a[1], a[2]), !1, j.actioncaller)
            };
            j.screentosphere = function() {
                var a = arguments;
                if (4 == a.length) {
                    var b = j.actioncaller,
                        c = s.screentosphere(Number(N(a[0], b)), Number(N(a[1], b)));
                    I(a[2], c.x, !1, b);
                    I(a[3], c.y, !1, b)
                }
            };
            j.spheretoscreen = function() {
                var a = arguments;
                if (4 == a.length) {
                    var b = j.actioncaller,
                        c = s.spheretoscreen(Number(N(a[0], b)), Number(N(a[1], b)));
                    I(a[2], c.x, !1, b);
                    I(a[3], c.y, !1, b)
                }
            };
            j.escape = function() {
                f(0, arguments, j.actioncaller)
            };
            j.unescape = function() {
                f(1, arguments, j.actioncaller)
            };
            j.txtadd = function() {
                var a = arguments,
                    b, c = a.length,
                    d = 2 == c ? String(N(a[0], j.actioncaller)) : "";
                "null" == d && (d = "");
                for (b = 1; b < c; b++) d += a[b];
                I(a[0], d, !1, j.actioncaller, !0)
            };
            j.subtxt = function() {
                var a = arguments,
                    b = a.length;
                if (2 <= b) {
                    var c = N(a[1], j.actioncaller),
                        c = null == c ? String(a[1]) : String(c),
                        c = c.substr(2 < b ? Number(a[2]) : 0, 3 < b ? Number(a[3]) : void 0);
                    I(a[0], c, !1, j.actioncaller)
                }
            };
            j.indexoftxt = function() {
                var a = arguments,
                    b = a.length;
                3 <= b && (b = String(a[1]).indexOf(String(a[2]), 3 < b ? Number(a[3]) : 0), I(a[0], b, !1, j.actioncaller))
            };
            j.txtreplace = function() {
                var a = arguments,
                    b = a.length;
                if (3 == b || 4 == b) {
                    var b = 3 == b ? 0 : 1,
                        c = N(a[b], j.actioncaller);
                    if (c) var d = a[b + 2],
                        c = c.split(a[b + 1]).join(d);
                    I(a[0], c, !1, j.actioncaller)
                }
            };
            j.showlog = function() {
                var a = arguments,
                    a = !(1 == a.length && !1 == Fa(a[0]));
                G.showlog(a)
            };
            j.trace = function() {
                var a = arguments,
                    b, c = a.length,
                    d = "",
                    g = j.actioncaller;
                for (b = 0; b < c; b++) var e = a[b],
                    f = N(e, g),
                    d = null != f ? d + f : d + e;
                $(1, d)
            };
            j[_[462]] = function() {
                var a = arguments,
                    b, c = a.length,
                    d = j.actioncaller;
                for (b = 0; b < c; b++) a: {
                    var g = d,
                        e = void 0,
                        f = void 0,
                        l = void 0,
                        k = id(a[b]),
                        f = k.length;
                    if (1 == f && g && (l = k[0], g.hasOwnProperty(l))) {
                        g[l] = null;
                        delete g[l];
                        break a
                    }
                    for (var h = m, e = 0; e < f; e++) {
                        var l = k[e],
                            r = e == f - 1,
                            p = null,
                            n = l.indexOf("[");
                        0 < n && (p = Pb(l, n + 1, l.length - 1, g), l = l.slice(0, n));
                        if (void 0 !== h[l]) {
                            if (null != p && (n = h[l], n.isArray))
                                if (l = n.getItem(p))
                                    if (r) break a;
                                    else {
                                        h = l;
                                        continue
                                    } else break;
                            if (r) {
                                h[l] = null;
                                delete h[l];
                                break a
                            } else h = h[l]
                        } else break
                    }
                }
            };
            j.error = function(a) {
                ka(a)
            };
            j.openurl = function() {
                var a = arguments;
                t.open(a[0], 0 < a.length ? a[1] : _[422])
            };
            j.loadscene = function() {
                var a = arguments;
                if (0 < a.length) {
                    var b = a[0],
                        c = N(_[115] + b + _[34]),
                        d = N(_[115] + b + _[345]);
                    d && (d += ";");
                    // d3vin-start
                    alert(GLUE_URL[b]);
                    //document.getElementById("pano-iframe").src = GLUE_URL[b];
                    return;
                    // d3vin-end
                    null == c ? $(3, 'loadscene() - scene "' + b + '" not found') : (m.xml.scene = b, ma.loadxml(_[369] + c + _[342], a[1], a[2], a[3], d))
                }
            };
            j.js = function(b) {
                var c = Ub(b, null, !0);
                if (c) {
                    c = c[0];
                    a(c.args, j.actioncaller);
                    var d = !1;
                    if (_[10] == typeof t[c.cmd]) {
                        d = !0;
                        try {
                            t[c.cmd].apply(t[c.cmd], c.args)
                        } catch (g) {
                            d = !1
                        }
                    }
                    if (!1 == d) {
                        c = c.cmd + (0 < c.args.length ? "('" + c.args.join("','") + "');" : "();");
                        try {
                            eval(c)
                        } catch (e) {
                            $(2, 'js() - calling Javascript "' + b + '" failed: ' + e)
                        }
                    }
                }
            };
            j.setfov = function() {
                var a = arguments;
                1 == a.length && (s.fov = Number(a[0]))
            };
            j.lookat = function() {
                var a = arguments;
                2 <= a.length && (s.hlookat = Number(a[0]), s.vlookat = Number(a[1]), 2 < a.length && (s.fov = Number(a[2])))
            };
            j.adjusthlookat = function() {
                var a = arguments;
                1 == a.length && (s.hlookat = hc(s.hlookat, Number(a[0])))
            };
            j.loop = function() {
                c("loop", _[163], arguments, j.actioncaller)
            };
            j.asyncloop = function() {
                c(_[334], _[134], arguments, j.actioncaller)
            };
            j["for"] = function() {
                c("for", _[131], arguments, j.actioncaller)
            };
            j.asyncfor = function() {
                c(_[384], "if(%5!=NEXTLOOP,%1);if(%2,%4;%3;delayedcall(0,asyncfor(%1,%2,%3,%4,NEXTLOOP)););", arguments, j.actioncaller)
            };
            j["if"] = function() {
                var a = arguments,
                    b = null,
                    c = null,
                    d = null,
                    g = j.actioncaller;
                if (2 <= a.length) {
                    b = a[0];
                    if (null == b || "" == b) b = _[23];
                    c = a[1];
                    3 == a.length && (d = a[2]);
                    var e = null,
                        f = null,
                        a = null,
                        l, k = b.length,
                        h = 0,
                        r = 0,
                        p = !1,
                        n = 0,
                        L = 0,
                        q = !1,
                        w = [],
                        da = 0,
                        K = 0;
                    for (l = 0; l < k; l++) K = b.charCodeAt(l), 32 >= K && !1 == q ? (0 < r && (w[da++] = b.substr(h, r), r = 0), p = !1) : ((61 == K || 33 == K || 62 == K || 60 == K) && !1 == q ? !1 == p && (0 < r ? (w[da++] = b.substr(h, r), r = 0) : 0 == da && (w[da++] = ""), p = !0, h = l) : (91 == K ? (n++, q = !0) : 93 == K ? (n--, 0 == n && 0 == L && (q = !1)) : (39 == K || 34 == K) && 0 == L ? (L = K, q = !0) : K == L && (L = 0, 0 == n && (q = !1)), p && (0 < r && (w[da++] = b.substr(h, r), r = 0), p = !1, h = l), 0 == r && (h = l)), r++);
                    0 < r && (w[da++] = b.substr(h, r));
                    2 == da && (w[da++] = "");
                    b = w;
                    1 == b.length ? e = b[0] : 3 == b.length && (e = W(b[0]), a = b[1], f = W(b[2]));
                    b = e ? N(e, g) : null;
                    l = f ? N(f, g) : null;
                    null == a || "===" == a || "!==" == a ? null == a && null == b && (isNaN(Number(e)) || (b = e)) : (null == b && (b = e), null == l && (l = f));
                    e = 0;
                    _[38] == typeof b && (e = A(b), "true" == e || "1" == e ? b = !0 : _[23] == e || "0" == e ? b = !1 : (e = Number(e), isNaN(e) || (b = e)));
                    _[38] == typeof l && (e = A(l), "true" == e || "1" == e ? l = !0 : _[23] == e || "0" == e ? l = !1 : (e = Number(e), isNaN(e) || (l = e)));
                    e = !1;
                    if (null == a) e = b ? !0 : !1;
                    else if ("===" == a || "==" == a || "EQ" == a) e = b == l;
                    else if ("!==" == a || "!=" == a) e = b != l;
                    else if ("<=" == a || "LE" == a) e = b <= l;
                    else if (">=" == a || "GE" == a) e = b >= l;
                    else if (">" == a || "&gt;" == a || "GT" == a) e = b > l;
                    else if ("<" == a || "&lt;" == a || "LT" == a) e = b < l;
                    e ? j.callaction(c, g, !0) : j.callaction(d, g, !0)
                }
            };
            j.ifnot = function() {
                var a = arguments;
                j["if"](a[0], a[2], a[1])
            };
            j.lookto = function() {
                var a = arguments,
                    b = a.length;
                if (2 <= b) {
                    var c = j.actioncaller,
                        e = new K;
                    d(_[121]);
                    e.id = _[121];
                    e.actioncaller = c;
                    !0 == Fa(a[5]) ? (e.blocking = !1, e.donecall = a[6]) : (e.blocking = !0, j.blocked = !0);
                    4 < b && void 0 === a[4] && b--;
                    3 < b && void 0 === a[3] && b--;
                    2 < b && void 0 === a[2] && b--;
                    var g = Number(a[0]),
                        f = Number(a[1]),
                        l = 2 < b ? Number(a[2]) : s.fov,
                        h = 3 < b ? a[3] : null,
                        r = 4 < b ? Fa(a[4]) : !0;
                    if (!isNaN(g) && !isNaN(f) && !isNaN(l)) {
                        var p = 1,
                            a = 720,
                            b = -720,
                            c = 720,
                            n = s.hlookat,
                            q = n,
                            m = s.vlookat,
                            L = s.fov;
                        if (r) {
                            for (; - 90 > f || 90 < f;) - 90 > f ? (f = -180 - f, g += 180) : 90 < f && (f = 180 - f, g -= 180);
                            for (; 0 > n;) n += 360;
                            for (; 360 < n;) n -= 360;
                            for (; 0 > g;) g += 360;
                            for (; 360 < g;) g -= 360;
                            for (; - 180 > m;) m += 360;
                            for (; 180 < m;) m -= 360;
                            n = hc(n, g);
                            m = hc(m, f);
                            r = n - q;
                            n -= r;
                            g -= r
                        }
                        e.startH = n;
                        e.startV = m;
                        e.startF = L;
                        e.destH = g;
                        e.destV = f;
                        e.destF = l;
                        g = Math.sqrt((g - n) * (g - n) + (f - m) * (f - m) + (l - L) * (l - L));
                        h && ((h = Ub(h)) && (h = h[0]), h && (f = h.cmd, l = h.args, _[458] == f ? (p = 0, c = 360, 1 == h.args.length && (c = parseFloat(l[0]))) : _[456] == f ? (p = 1, 0 < h.args.length && (a = parseFloat(l[0])), 1 < h.args.length && (b = parseFloat(l[1])), 2 < h.args.length && (c = parseFloat(l[2])), a = +Math.abs(a), b = -Math.abs(b), c = +Math.abs(c)) : "tween" == f && (p = 2, e.tweenfu = fa.getTweenfu(l[0]), e.maxruntime = parseFloat(l[1]), isNaN(e.maxruntime) && (e.maxruntime = 0.5))));
                        e.motionmode = p;
                        0 == p ? e.maxruntime = g / c : 1 == p && (p = g, h = c * c / (2 * a), g = c / a, f = -(c * c) / (2 * b), l = -c / b, n = p - (h + f), m = n / c, 0 > m && (c = Math.sqrt(2 * p * a * b / (b - a)), h = c * c / (2 * a), g = c / a, f = -(c * c) / (2 * b), l = -c / b, m = n = 0), L = g + m + l, e.accelspeed = a, e.breakspeed = b, e.Vmax = c, e.Tmax = L, e.Smax = p, e.T1 = g, e.T2 = m, e.T3 = l, e.S1 = h, e.S2 = n, e.S3 = f, e.maxruntime = L);
                        e.starttime = ga();
                        e.process = k;
                        w.push(e)
                    }
                }
            };
            j.looktohotspot = function() {
                var a = arguments,
                    b = j.actioncaller,
                    c = Qa.getItem(1 > a.length ? b ? b.name : "" : a[0]);
                if (c) {
                    var b = c.ath,
                        c = c.atv,
                        d = 30,
                        e = Number(a[1]);
                    isNaN(e) || (d = e);
                    j.lookto(b, c, d, a[2], a[3])
                }
            };
            j.moveto = function() {
                var a = arguments;
                2 <= a.length && j.lookto(a[0], a[1], s.fov, a[2])
            };
            j.zoomto = function() {
                var a = arguments;
                1 <= a.length && j.lookto(s.hlookat, s.vlookat, a[0], a[1])
            };
            j.wait = function() {
                var a = arguments;
                if (1 == a.length) {
                    var a = a[0],
                        b = A(a);
                    if ("load" == b || _[66] == b) a = 0;
                    else {
                        b = "time";
                        a = Number(a);
                        if (isNaN(a)) return;
                        0 >= a && (b = _[66], a = 0)
                    }
                    var c = new K;
                    c.waitfor = b;
                    c.maxruntime = a;
                    c.process = l;
                    c.starttime = ga();
                    c.actioncaller = j.actioncaller;
                    c.id = "WAIT" + ++n;
                    c.blocking = !0;
                    j.blocked = !0;
                    w.push(c)
                }
            };
            j.tween = function() {
                var a = arguments,
                    b = a.length;
                if (2 <= b) {
                    var c = j.actioncaller,
                        e = new K,
                        g = A(a[0]),
                        f = g,
                        l = a[1],
                        k = !1;
                    c && (0 > g.indexOf(".") && c.hasOwnProperty(g)) && (f = c._type + "[" + c.name + "]." + g, k = !0);
                    e.id = f;
                    e.varname = g;
                    e.actioncaller = c;
                    e.startval = k ? c[g] : N(g, c);
                    if (null == e.startval || "" == e.startval) e.startval = 0;
                    e.endval = l;
                    c = 2 < b ? String(a[2]) : "0.5";
                    if (0 < c.indexOf("(") && (g = Ub(c))) k = g[0], _[381] == k.cmd && (g = Number(k.args[0]), c = Number(k.args[1]), l = Math.abs(parseFloat(l) - parseFloat(e.startval)), c = c * l / g);
                    c = parseFloat(c);
                    isNaN(c) && (c = 0.5);
                    e.maxruntime = c;
                    e.tweenmap = fa.getTweenfu(3 < b ? a[3] : _[48]);
                    4 < b && ("wait" == A(a[4]) ? (e.blocking = !0, j.blocked = !0) : e.donecall = a[4]);
                    5 < b && (e.updatefu = a[5]);
                    e.starttime = ga();
                    e.process = h;
                    d(f);
                    w.push(e)
                }
            };
            j.stoptween = function() {
                var a = j.actioncaller,
                    b = arguments,
                    c = b.length,
                    e;
                for (e = 0; e < c; e++) {
                    var g = A(b[e]);
                    (!(a && 0 > g.indexOf(".")) || !d(a._type + "[" + a.name + "]." + g)) && d(g)
                }
            };
            j.invalidatescreen = function() {
                Xb = ga();
                s.haschanged = !0
            };
            j.updatescreen = function() {
                s.haschanged = !0
            };
            j.loadpano = function(a, b, c, d, e) {
                ma.loadpano(a, b, c, d, e)
            };
            j.loadxml = function(a, b, c, d, e) {
                ma.loadxml(a, b, c, d, e)
            };
            j.updateobject = function() {};
            j.fscommand = function() {};
            j.freezeview = function() {};
            j.showtext = function() {};
            j.reloadpano = function() {};
            j.addlensflare = function() {};
            j.removelensflare = function() {};
            j.SAcall = function(a) {
                var c = N(_[12]);
                if ((a = Ub(a)) && c) {
                    var d, e;
                    e = a.length;
                    for (d = 0; d < e; d++) {
                        var g = a[d];
                        if (g) {
                            var f = g.cmd,
                                l = c.getItem(f);
                            l && !0 == Fa(l.secure) ? (g = g.args, g.splice(0, 0, f), j.callaction(b(l.content, g))) : $(2, _[379] + f + _[243])
                        }
                    }
                }
            }
        })();
        var G = {},
            ge = function(a) {
                a = _[159] + a;
                t.console ? t.console.log(a) : alert(a)
            },
            Yb = function(a, b, c, d, e, f) {
                var k = U(),
                    l = k.style;
                l.position = _[0];
                "LT" == a ? (l.left = b, l.top = c) : (l.left = b, l.bottom = c);
                l.width = d;
                l.height = e;
                l.overflow = _[4];
                !1 === f && (l.webkitUserSelect = l.MozUserSelect = l.msUserSelect = l.oUserSelect = l.userSelect = "none");
                return k
            },
            xd = function(a) {
                if (E.fullscreen = a) t.activekrpanowindow = Ea.id;
                ea(!0 == a ? _[201] : _[209])
            },
            he = function(a) {
                ub && (va(a), E.onResize(a), setTimeout(mc, 250))
            },
            vb = function(a, b) {
                for (var c = a.style, d = b.length, e = 0, e = 0; e < d; e += 2) c[b[e]] = b[e + 1]
            },
            ie = function() {
                xd(!(!B.fullscreenElement && !B.mozFullScreenElement && !B.webkitIsFullScreen && !B.webkitFullscreenElement && !B.msFullscreenElement))
            },
            je = function() {
                if (ub) {
                    var a = t.innerHeight,
                        b = eb;
                    a < b ? E.__scrollpage_yet = !0 : E.__scrollpage_yet && (E.__scrollpage_yet = !1, mc());
                    if (a != b) E.onResize(null)
                }
            },
            mc = function() {
                var a = t.innerWidth,
                    b = t.innerHeight;
                E.__scrollpage_yet && b == eb && (E.__scrollpage_yet = !1);
                var c = screen.height - 64,
                    d = 268;
                26 <= h.crios && (c += 44, d = 300);
                (320 == a && b != c || a == screen.height && b != d) && t.scrollTo(0, 1)
            },
            yd = function(a, b) {
                va(a);
                var c = "none" == bb.style.display ? "" : "none";
                void 0 !== b && (c = !0 == b ? "" : "none");
                bb.style.display = c;
                pa.scrollTop = pa.scrollHeight
            },
            ke = function() {
                Mc && (La.removeChild(Mc), Mc = null);
                var a, b = U();
                a = 25;
                h.androidstock && h.hidpi ? a = 38 : h.mobile && (a = 14, h.androidstock ? a = 14 * h.pixelratio : h.android && h.chrome && (a = 25 / h.pixelratio));
                vb(b, [_[54], _[0], "left", "50%", "top", "50%", _[65], _[35], _[104], a + "px", _[45], "none", _[85], "none"]);
                a = b.style;
                a.zIndex = 999999;
                a.opacity = 0.67;
                a = U();
                vb(a, "position;relative;left;-50%;top;-25px;fontFamily;sans-serif;textShadow;#000000 1px 1px 2px;lineHeight;110%".split(";"));
                a.innerHTML = _[375] + (Ka && Ka[1] && 6 < W(Ka[1], !1).length ? Ka[1] : _[137]) + _[340];
                b.appendChild(a);
                La.appendChild(b);
                Mc = b
            },
            E = G;
        E.fullscreen = !1;
        var le = !0,
            ub = !1,
            zd = !1;
        E.__scrollpage_yet = !1;
        var nc = null,
            Ea = null,
            La = null;
        E.htmltarget = null;
        E.viewerlayer = null;
        E.controllayer = null;
        E.panolayer = null;
        E.pluginlayer = null;
        var bb = E.hotspotlayer = null,
            pa = null,
            pb = null,
            Eb = null,
            me = 0,
            ne = 0,
            Nc = !1,
            Ad = !1;
        E.build = function(a) {
            function b() {
                yd(null, !1)
            }
            var c = a.target,
                d = a.id,
                e = B.getElementById(c);
            if (!e) return ge(_[140] + c), !1;
            for (var c = null, f = d, k = 1;;)
                if (c = B.getElementById(d))
                    if (_[231] == f) k++, d = f + k;
                    else return ge(_[135] + d), !1;
            else break;
            c = U();
            c.id = d;
            c.style.position = _[108];
            c.style.overflow = _[4];
            c.style.lineHeight = _[61];
            c.style.fontWeight = _[61];
            c.style.fontStyle = _[61];
            c.tabIndex = -1;
            c.style.outline = 0;
            d = _[21];
            a.bgcolor && (d = a.bgcolor);
            a = A(a.wmode);
            if (_[294] == a || _[425] == a) d = null;
            null != d && (c.style.background = d);
            e.appendChild(c);
            Ea = c;
            E.htmltarget = e;
            E.viewerlayer = c;
            La = Yb("LT", 0, 0, "100%", "100%", !1);
            vb(La, "msTouchAction none msContentZooming none -webkit-tap-highlight-color rgba(255,255,255,0)".split(" "));
            E.controllayer = La;
            d = Yb("LT", 0, 0, "100%", "100%");
            E.panolayer = d;
            vb(d, [_[238], "none"]);
            e = Yb("LT", 0, 0, "100%", "100%", !1);
            vb(e, [sd, _[30]]);
            a = e;
            h.android && h.firefox && (f = Yb("LT", 0, 0, "1px", "1px"), f.style.background = _[207], f.style.pointerEvents = "none", f.style.zIndex = 999999999, f.style[xa] = _[17], e.appendChild(f));
            f = h.hidpi ? 216 : 156;
            bb = Yb("LB", 0, 0, "100%", f + "px", !0);
            bb.style.display = "none";
            if (!0 !== h.opera && (2 > Ia && (bb.style[xa] = _[17]), h.ios && !1 == h.simulator || h.android && h.chrome)) bb.style[xa] = _[17];
            h.ie && (bb.style.zIndex = 999999999);
            k = Yb("LT", 0, 0, "100%", "100%", !0);
            k.style.opacity = 0.67;
            h.android && h.opera && (k.style.borderTop = _[149]);
            vb(k, [_[228], _[21], Ac, _[365] + (h.hidpi ? 16 : 8) + _[321], _[100], (h.hidpi ? 6 : 8) + "px", _[418], 0.67]);
            pa = B.createElement("pre");
            var l = null;
            h.mac && (l = _[256] + (t.chrome ? "1px" : "0"));
            h.realDesktop ? (pa.style.fontFamily = _[50], pa.style.fontSize = "11px", l && (pa.style.fontSize = "13px", pa.style.textShadow = l)) : (pa.style.fontFamily = _[52], pa.style.fontSize = h.iphone && h.retina ? "8px" : h.hidpi ? "20px" : h.android && h.mobile && !1 == h.androidstock ? "9px" : "13px");
            vb(pa, [_[54], _[0], "left", "5px", "top", "0px", _[42], "left", _[285], 0, _[268], h.realDesktop ? "16px" : 0, _[318], 0, _[245], 0, _[96], "none", _[63], 0, _[100], (h.realDesktop ? 10 : 8) + "px", _[44], "100%", _[39], f - 10 + "px", _[356], "auto", _[192], "none", _[406], "block", _[351], "left", _[311], _[387], _[45], "none", _[65], _[35]]);
            pb = U();
            l && (pb.style.textShadow = l);
            vb(pb, [_[54], _[0], _[2], 0, _[1], 0, _[44], h.iphone && h.retina ? "24px" : h.hidpi ? "60px" : "34px", _[39], f - 10 + "px", _[212], "none", _[254], "none", _[443], _[36], _[155], _[189], _[310], h.realDesktop ? _[50] : _[52], _[104], h.iphone && h.retina ? "6px" : h.realDesktop ? "10px" : h.hidpi ? "18px" : "9px", _[65], _[35]]);
            pb.innerHTML = "CLOSE";
            x(pb, _[103], va, !0);
            x(pb, _[107], b, !0);
            x(pb, _[6], b, !0);
            bb.appendChild(k);
            bb.appendChild(pa);
            bb.appendChild(pb);
            c.appendChild(La);
            La.appendChild(d);
            0 < h.iosversion && "5" > h.iosversion && (a = U(), a.style.position = _[0], e.appendChild(a), La.style.webkitTransformStyle = _[30], e.style.webkitTransformStyle = "flat");
            La.appendChild(e);
            d = U();
            d.style.position = _[0];
            d.style.webkitTransformStyle = _[30];
            a.appendChild(d);
            c.appendChild(bb);
            E.pluginlayer = e;
            E.hotspotlayer = a;
            h.fullscreensupport && x(B, h.browser.events.fullscreenchange, ie);
            Eb = [c.style.width, c.style.height];
            E.onResize(null);
            x(t, _[120], E.onResize, !1);
            h.iphone && h.safari && x(t, _[117], je, !1);
            x(t, _[76], he, !1);
            return !0
        };
        E.setFullscreen = function(a) {
            if (h.fullscreensupport)
                if (a) Ea[h.browser.events.requestfullscreen]();
                else try {
                    B.exitFullscreen && B.exitFullscreen(), B.mozCancelFullScreen && B.mozCancelFullScreen(), B.webkitCancelFullScreen && B.webkitCancelFullScreen(), B.webkitExitFullscreen && B.webkitExitFullscreen(), B.msExitFullscreen && B.msExitFullscreen()
                } catch (b) {} else {
                    var c = B.body,
                        d = c.style;
                    if (a) E.fsbkup = [d.padding, d.margin, d.overflow, c.scrollTop, c.scrollLeft, t.pageYOffset], d.padding = "0 0", d.margin = "0 0", d.overflow = _[4], c.scrollTop = "0", c.scrollLeft = "0", c.appendChild(Ea), Ea.style.position = _[0], Ea.style.left = 0, Ea.style.top = 0, Ea.style.width = "100%", Ea.style.height = "100%", Ca.domUpdate(), t.scrollTo(0, 0), xd(!0);
                    else if (a = E.fsbkup) E.htmltarget.appendChild(Ea), d.padding = a[0], d.margin = a[1], d.overflow = a[2], c.scrollTop = a[3], c.scrollLeft = a[4], Ea.style.position = _[108], Ca.domUpdate(), t.scrollTo(0, a[5]), E.fsbkup = null, xd(!1)
                }
        };
        E.onResize = function(a, b) {
            Nc = b;
            va(a);
            var c = Ea,
                d = "100%",
                e = "100%";
            null == Eb && (Eb = [c.style.width, c.style.height]);
            Eb && (d = Eb[0], e = Eb[1], "" == d && (d = "100%"), "" == e && (e = "100%"), Eb = null);
            var f = kc.so;
            f && (f.width && (d = f.width), f.height && (e = f.height));
            E.fullscreen && (d = e = "100%");
            var k = c.parentNode,
                l = 0,
                r = c;
            do
                if (l = r.offsetHeight, 0 >= l) {
                    if (r = r.parentNode, null == r) {
                        l = t.innerHeight;
                        break
                    }
                } else break;
            while (1);
            f = 0;
            for (r = c; r && "body" != A(r.nodeName);) f++, r = r.parentNode;
            var k = k ? k.offsetHeight : t.innerHeight,
                j = c.clientWidth,
                r = d,
                c = e;
            0 < String(d).indexOf("%") ? d = parseFloat(d) * j / 100 : (d = parseFloat(d), r = d + "px");
            0 < String(e).indexOf("%") ? e = parseFloat(e) * l / 100 : (e = parseFloat(e), c = e + "px");
            1 > e && (e = 100);
            l = screen.width;
            j = screen.height;
            h.iphone && 320 == l && "4.0" > h.iosversion && 480 > j && (j = 480);
            var w = t.innerWidth,
                p = t.innerHeight;
            h.ios && 2 >= f && (26 <= h.crios && k > p && (p = e = k), "7" <= h.iosversion && e > p && (e = p, ub = zd = !0, setTimeout(mc, 10)));
            if (le)
                if (le = !1, h.iphone) {
                    if (320 == w && p >= j - 124 ? p = j - 124 : w == j && 208 <= p && (p = 208), 2 >= f) {
                        if (w == d && p && (320 == d && e == j - 124 || d == j && (208 == e || 320 == e))) ub = !0;
                        if (26 <= h.crios && (320 == d || d == j)) ub = !0
                    }
                } else h.ipad && (28 <= h.crios && 2 >= f) && (d > e != l > j && (f = l, l = j, j = f), d == l && e == j - 20 && (zd = ub = !0));
            ub && (zd ? (d = w, e = p) : 320 == t.innerWidth ? (d = 320, e = j - 64, h.crios && (e += 44)) : (d = j, e = 320 == t.innerHeight ? 320 : 268, 26 <= h.crios && (e = 300)), r = d + "px", c = e + "px");
            h.getViewportScale();
            f = r;
            Ca && Ca.focusLoss();
            ub && null == nc && (nc = setInterval(mc, 4E3), setTimeout(mc, 250));
            k = !1;
            if (ob != d || eb != e || Nc) k = !0, Nc = !1, ob = d, eb = e;
            Za && (Za._pxw = Za.pixelwidth = Za.imagewidth = ob / F, Za._pxh = Za.pixelheight = Za.imageheight = eb / F);
            $a && ($a._pxw = $a.pixelwidth = $a.imagewidth = ob / F, $a._pxh = $a.pixelheight = $a.imageheight = eb / F);
            k && (fb && fb.calc(ob, eb), ea(_[55]), k = !1);
            fb ? (k |= fb.calc(ob, eb), La.style.left = fb.pixelx * F + "px", La.style.top = fb.pixely * F + "px", La.style.width = Ha + "px", La.style.height = oa + "px", d = Ha, e = oa) : (Ha = ob, oa = eb);
            Hc = Math.max(4 * e / 3, d);
            Ea.style.width = f;
            Ea.style.height = c;
            sa.size(d, e);
            Ad = !0;
            k && ea(_[55]);
            ma.updateview(!1, !0);
            E.resizeCheck(!0);
            Nc = !1
        };
        E.resizeCheck = function(a) {
            var b = !1,
                c = Ea,
                d = c.clientWidth,
                c = c.clientHeight;
            if (d != me || c != ne || a || fb && fb.haschanged)
                if (me = d, ne = c, b = !0, !0 == a) b = !1;
                else E.onResize(null);
            Ad && !0 !== a && (b = !0, Ad = !1);
            255 == (Wb & 511) && 0 == (Ja & 1) && ke();
            return b
        };
        var Zb = "";
        E.log = function(a) {
            if ("cls" == a) pa.innerHTML = "";
            else if ("d" == a) ke();
            else {
                var b = 4 > h.firefoxversion ? 4096 : 1E4;
                Zb += a + "\n";
                Zb.length > b ? (Zb = Zb.slice(-b / 2, -1), pa.innerHTML = Zb) : pa.firstChild ? pa.firstChild.nodeValue += "\n" + a : pa.innerHTML += a;
                pa.scrollTop = pa.scrollHeight;
                kc.so.vars && (Fa(kc.so.vars.consolelog) && t.console && t.console.log) && t.console.log(a)
            }
        };
        E.showlog = function(a) {
            yd(null, a)
        };
        E.togglelog = yd;
        E.getMousePos = function(a, b) {
            var c;
            if (_[33] != typeof WebKitPoint) c = new WebKitPoint, c.x = a.pageX, c.y = a.pageY, c = t.webkitConvertPointFromPageToNode(b ? b : La, c);
            else {
                c = {};
                var d = b ? b : La,
                    e = d.getBoundingClientRect();
                c.x = Math.round(a.clientX - e.left - d.clientLeft + d.scrollLeft);
                c.y = Math.round(a.clientY - e.top - d.clientTop + d.scrollTop)
            }
            return c
        };
        E.remove = function() {
            null != nc && (clearInterval(nc), nc = null);
            try {
                O(t, _[120], E.onResize, !1), h.iphone && h.safari && O(t, _[117], je, !1), O(t, _[76], he, !1), h.fullscreensupport && O(B, h.browser.events.fullscreenchange, ie), E.htmltarget.removeChild(Ea), E.htmltarget = null, E.viewerlayer = null, E.controllayer = null, E.panolayer = null, E.pluginlayer = null, La = Ea = pb = pa = bb = E.hotspotlayer = null
            } catch (a) {}
        };
        var Mc = null,
            Ca = {},
            $b = function() {
                var a = A(Y.usercontrol);
                return _[68] == a || "all" == a
            },
            Oc = function(a) {
                return a && (a = a.pointerType, 4 == a || _[68] == a) ? !0 : !1
            },
            oe = function(a) {
                for (; 0 < jb.length && !(100 >= a - jb[0].t);) jb.shift()
            },
            oc = function(a, b, c, d) {
                b = s.inverseProject(a, b);
                var e = s.inverseProject(c, d);
                d = (Math.atan2(e.z, e.x) - Math.atan2(b.z, b.x)) / la;
                b = -(Math.atan2(b.y, Math.sqrt(b.x * b.x + b.z * b.z)) - Math.atan2(e.y, Math.sqrt(e.x * e.x + e.z * e.z))) / la;
                if (c < a && 0 > d || c > a && 0 < d) d = -d;
                return {
                    h: d,
                    v: b
                }
            },
            pe = function(a) {
                var b = Math.tan(Math.min(0.5 * s.fov, 45) * la);
                a *= Math.min(10 * b, 1);
                Pc = !0;
                Fb += a
            },
            qe = function(a, b, c, d) {
                $b() ? (a = oc(a, b, c, d), Gb = !1, Sa = a.h, Ta = a.v, s.hlookat += Sa, s.vlookat += Ta, ma.updateview()) : Ta = Sa = 0
            },
            wb = function(a) {
                (B.hidden || B.webkitHidden || B.mozHidden || B.msHidden) && ac(a)
            },
            ac = function(a) {
                bc();
                a && (_[56] == a.type && !1 === a.persisted && (jd = !0), v.down && Qc(a));
                for (var b in Rc) m.keycode = b, ea(_[113]), Rc[b] = !1;
                m.hlookat_moveforce = m.vlookat_moveforce = m.fov_moveforce = 0;
                m.keycode = 0;
                Pc = pc = Gb = !1;
                Fb = Bd = Sc = Tc = Sa = Ta = xb = Hb = 0
            },
            Uc = function(a) {
                var b = 0;
                !0 != Y.disablewheel && (va(a), Ra = ga(), $b() && (a.wheelDelta ? b = a.wheelDelta / -120 : a.detail && (b = a.detail, !1 == h.mac && (b /= 3)), pe(b * Y.mousefovchange), m.wheeldelta_raw = -b, m.wheeldelta = 3 * -b, ea(_[87])))
            },
            se = function(a) {
                var b = G.viewerlayer;
                !1 != (B.activeElement == b) && t.activekrpanowindow == b.id && (b = a.keyCode, !1 == (a.altKey || a.ctrlKey || a.shiftKey || 111 < b && 124 > b) && va(a), m.keycode = b, Rc[b] = !0, ea(_[335]), 79 == b && (m.logkey || !(Ja & 1)) && G.togglelog(), re(b, 1), 27 == b && (bc(), G.fullscreen && (G.fsbkup || h.opera) && G.setFullscreen(!1)))
            },
            te = function(a) {
                var b = G.viewerlayer;
                !1 != (B.activeElement == b) && t.activekrpanowindow == b.id && (a = a.keyCode, m.keycode = a, Rc[a] = !1, ea(_[113]), re(a, 0))
            },
            re = function(a, b) {
                var c = A(Y.usercontrol);
                if ("all" == c || "keyb" == c) a = "," + a + ",", 0 <= ("," + Y.keycodesin + ",").indexOf(a) ? m.fov_moveforce = -b : 0 <= ("," + Y.keycodesout + ",").indexOf(a) ? m.fov_moveforce = +b : 0 <= ("," + Y.keycodesleft + ",").indexOf(a) ? m.hlookat_moveforce = -b : 0 <= ("," + Y.keycodesright + ",").indexOf(a) ? m.hlookat_moveforce = +b : 0 <= ("," + Y.keycodesup + ",").indexOf(a) ? m.vlookat_moveforce = Y.keybinvert ? +b : -b : 0 <= ("," + Y.keycodesdown + ",").indexOf(a) && (m.vlookat_moveforce = Y.keybinvert ? -b : +b)
            },
            ue = function(a) {
                Ra = ga();
                a = kb(a);
                v.x = a.x / F;
                v.y = a.y / F;
                v.moved = !0
            },
            Wc = function(a) {
                Ra = ga();
                var b, c, d = a.changedTouches ? a.changedTouches : [a];
                c = d.length;
                var e = A(a.type),
                    f = 0 <= e.indexOf("start") || 0 <= e.indexOf("down"); - 99 != Ib && f && (Vc = !0);
                for (b = 0; b < c; b++) {
                    var e = d[b],
                        k = e.pointerId ? e.pointerId : e.identifier; - 99 == Ib && f && (Ib = k);
                    if (Ib == k) {
                        c = kb(e);
                        v.x = c.x / F;
                        v.y = c.y / F;
                        v.moved = !0;
                        if (0 == (Ja & 16) && (!1 == h.realDesktop || 10 <= h.ieversion && !Oc(a)) && v.x > ob / F - 22 && v.y > eb / F - 32 && a.type == ba.touchstart) ve = e.pageY, x(J, ba.touchend, we, !0);
                        break
                    }
                }
            },
            we = function(a) {
                a = a.changedTouches ? a.changedTouches : [a];
                O(J, ba.touchend, we, !0); - 120 > a[0].pageY - ve && G.showlog(!0)
            },
            bc = function() {
                if (cc) {
                    try {
                        J.removeChild(cc), J.removeChild(qc)
                    } catch (a) {}
                    qc = cc = null
                }
            },
            xe = function(a) {
                if (cc) bc();
                else {
                    va(a);
                    a = kb(a);
                    var b = a.x,
                        c = a.y,
                        d = bc;
                    a = function() {
                        var a = U();
                        n = a.style;
                        n.marginTop = n.marginBottom = q[17] + w;
                        n.height = 1 + w;
                        n.backgroundColor = ja(q[18]);
                        "none" != q[19] && (n.borderBottom = _[331] + ja(q[19]));
                        g.appendChild(a)
                    };
                    var e = function(a, b, c) {
                            var e = U();
                            n = e.style;
                            n.padding = q[20] + w;
                            n.border = q[21] + _[15] + ja(q[22]);
                            n.borderRadius = q[23] + w;
                            n.marginTop = q[24] + w;
                            n.marginBottom = q[24] + w;
                            c && b ? (n.cursor = _[36], e.onmouseover = function() {
                                n = this.style;
                                n.background = ja(q[25]);
                                n.border = q[21] + _[15] + ja(q[26]);
                                n.color = ja(q[27])
                            }, e.onmouseout = function() {
                                n = this.style;
                                n.background = "none";
                                n.border = q[21] + _[15] + ja(q[22]);
                                n.color = ja(q[4])
                            }, e.onmousedown = function(a) {
                                a.stopPropagation()
                            }, e.oncontextmenu = function(a) {
                                va(a);
                                a.stopPropagation();
                                e.onclick()
                            }, e.onclick = function() {
                                d();
                                Q.callaction(c)
                            }, Ca.touch && x(e, h.browser.events.touchstart, e.onclick, !0)) : (!1 == b && (n.color = ja(q[5])), n.cursor = _[22]);
                            b = U();
                            b.style.marginLeft = q[28] + w;
                            b.style.marginRight = q[29] + w;
                            b.innerHTML = a;
                            e.appendChild(b);
                            g.appendChild(e)
                        },
                        f = function() {
                            e(_[147], !0, function() {
                                Q.openurl(_[199])
                            })
                        },
                        k = function() {
                            e(G.fullscreen ? p.exitfs : p.enterfs, !0, function() {
                                m.fullscreen = !m.fullscreen
                            })
                        },
                        l = function() {
                            e((B ? "" : _[110] + m.version + _[220] + m.build + _[235]) + h.infoString + sa.infoString, !0, null)
                        },
                        r = function() {
                            Ka && Ka[2] && e(Ka[2], !0, function() {
                                Q.openurl(Ka[3])
                            })
                        },
                        j = function() {
                            var a = K.getBoundingClientRect(),
                                d = a.width,
                                a = a.height,
                                e = c;
                            if (0 < d && 0 < a) {
                                for (; b + d > Ha;) b -= d / 2;
                                0 > b && (b = 0);
                                c + a > oa && (c -= a);
                                0 > c && (e > oa / 2 ? (c = e - a, 0 > c && (c = 4)) : (c = e, c + a > oa && (c = oa - 4 - a)));
                                n = K.style;
                                n.left = b + w;
                                n.top = c + w
                            } else 10 > ++R && setTimeout(j, 32)
                        },
                        w = "px",
                        p = m.contextmenu,
                        q = A(h.mac ? "default|14|default|0xFFFFFF|0x000000|0xBBBBBB|0|0|5|2|2|8|0x66000000|0|0|1|4|5|0xEEEEEE|none|1|0|0|0|3|0xEEEEEE|0|0|20|12" : "default|default|1.5|0xFFFFFF|0x000000|0xBBBBBB|1|0xDDDDDD|2|2|2|8|0x66000000|0|0|2|2|5|0xEEEEEE|none|4|0|0|0|3|0xEEEEEE|0|0|18|12").split("|"),
                        n = null,
                        K = U();
                    K.onselectstart = _[255];
                    n = K.style;
                    n.position = _[0];
                    n.zIndex = 99999999999;
                    n[xa] = _[17];
                    n.font = "menu";
                    _[22] != q[1] && (n.fontSize = q[1] + w);
                    _[22] != q[2] && (n.lineHeight = 100 * Number(q[2]) + "%");
                    n.background = ja(q[3]);
                    n.color = ja(q[4]);
                    n.border = q[6] + _[15] + ja(q[7]);
                    n.borderRadius = q[8] + w;
                    n.minWidth = 150 + w;
                    n.textAlign = "left";
                    n[Ac] = q[9] + "px " + q[10] + "px " + q[11] + "px " + ja(q[12], (q[12] >> 24) / 255);
                    var g = U(),
                        n = g.style;
                    n.border = q[13] + _[15] + ja(q[14]);
                    n.paddingTop = q[15] + w;
                    n.paddingBottom = q[16] + w;
                    K.appendChild(g);
                    var s = p.item.getArray(),
                        D, H, C = 0,
                        y, t = s.length,
                        v, B = 0 != (Ja & 16),
                        F = B,
                        z = B,
                        M = !1,
                        u = !1;
                    for (v = 0; v < t; v++)
                        if (D = s[v])
                            if (H = D.caption) H = Ob(unescape(H)), D.separator && 0 < C && a(), y = A(H), _[64] == y ? !1 == F && (F = !0, f(), C++) : Ka && _[370] == y ? !1 == z && (z = !0, r(), C++) : _[93] == y ? (M = !0, h.fullscreensupport && (k(), C++)) : _[292] == y ? (u = !0, l(), C++) : D.visible ? (e(H, D.enabled, D.onclick), C++) : !1 == D.visible && (D.separator && 0 < C) && g.removeChild(g.lastChild);
                    Ka && !1 == z && (0 < C && (a(), C = 0), r());
                    !1 == F && (0 < C && a(), f());
                    !1 == M && !0 == p.fullscreen && h.fullscreensupport && k();
                    !1 == u && !0 == p.versioninfo && (a(), l());
                    n = K.style;
                    n.left = _[106];
                    n.top = "10px";
                    var R = 0;
                    setTimeout(j, 16);
                    cc = K;
                    qc = U();
                    a = qc.style;
                    a.position = _[0];
                    a.zIndex = 99999999998;
                    a[xa] = _[17];
                    a.width = "100%";
                    a.height = "100%";
                    J.appendChild(qc);
                    J.appendChild(cc)
                }
            },
            Cd = function(a, b) {
                var c = a.timeStamp | 0;
                500 < c && 500 > c - Cb ? Cb = 0 : (t.activekrpanowindow = G.viewerlayer.id, G.viewerlayer.focus(), Ra = ga(), va(a), !Q.isblocked() && 0 == (a.button | 0) && (bc(), !0 != b ? (x(t, _[8], Xc, !0), x(t, _[3], rc, !0), h.topAccess && x(top, _[3], Qc, !0)) : x(h.topAccess ? top : t, ba.touchend, Yc, !0), c = kb(a), gb = c.x, hb = c.y, Jb = a.timeStamp, yb = 0, v.down = !0, v.up = !1, v.moved = !1, v.downx = v.x = c.x / F, v.downy = v.y = c.y / F, ea(_[90])))
            },
            Xc = function(a) {
                va(a);
                var b = kb(a);
                v.x = b.x / F;
                v.y = b.y / F;
                v.moved = !0;
                if (_[37] == A(Y.mousetype)) {
                    pc = !0;
                    var c = oc(gb, hb, b.x, b.y).h; - 180 > c ? c = 360 + c : 180 < c && (c = -360 + c);
                    yb += c
                } else qe(gb, hb, b.x, b.y);
                gb = b.x;
                hb = b.y;
                Jb = a.timeStamp
            },
            rc = function(a, b) {
                Ra = ga();
                va(a);
                O(t, _[8], Xc, !0);
                O(t, _[3], rc, !0);
                h.topAccess && O(top, _[3], Qc, !0);
                Gb = !0;
                v.down = !1;
                !1 == v.up && (v.up = !0, ea(_[102]), !0 !== b && (!1 == v.moved || 5 > Math.abs(v.x - v.downx) && 5 > Math.abs(v.y - v.downy)) && ea(_[111]))
            },
            Qc = function(a) {
                rc(a, !0)
            },
            ye = function(a) {
                Cb = a.timeStamp | 0;
                if (sc) {
                    if (Oc(a)) {
                        a.currentPoint && (a.currentPoint.properties && !1 == a.currentPoint.properties.isLeftButtonPressed) && (a.button = 0);
                        Cb = 0;
                        Cd(a, !0);
                        return
                    }
                    dc && (cb++, 2 == cb && (Dd = 1), Kb.addPointer(a.pointerId), J.setPointerCapture ? J.setPointerCapture(a.pointerId) : J.msSetPointerCapture && J.msSetPointerCapture(a.pointerId))
                }
                t.activekrpanowindow = G.viewerlayer.id;
                Ra = ga();
                !1 == G.__scrollpage_yet && va(a);
                bc();
                if (!lb && !Q.isblocked()) {
                    var b = a.changedTouches ? a.changedTouches[0] : a,
                        c = kb(b);
                    Lb = b.pointerId ? b.pointerId : b.identifier;
                    gb = c.x;
                    hb = c.y;
                    Jb = a.timeStamp;
                    jb = [];
                    yb = 0;
                    v.down = !0;
                    v.up = !1;
                    v.moved = !1;
                    v.downx = v.x = c.x / F;
                    v.downy = v.y = c.y / F;
                    ea(_[90])
                }
            },
            Ae = function(a) {
                if (sc) {
                    if (Oc(a)) {
                        v.down && Xc(a);
                        return
                    }
                    if (1 < cb) return
                }
                var b = $b(),
                    c = h.opera && a.touches ? a.touches : a.changedTouches ? a.changedTouches : [a];
                if (b && !1 == Ed && 1 < c.length) b = c[0].pageX - c[1].pageX, c = c[0].pageY - c[1].pageY, c = Math.sqrt(b * b + c * c), 1 > c && (c = 1), !1 == ec ? (ec = !0, ze = c, Zc(a)) : Fd(a, c / ze);
                else if (Ra = ga(), !1 == G.__scrollpage_yet && va(a), !lb && !1 != b && (c = a.changedTouches ? a.changedTouches[0] : a, Lb == (c.pointerId ? c.pointerId : c.identifier))) {
                    c = kb(c);
                    _[37] == A(Y.touchtype) ? (pc = !0, b = oc(gb, hb, c.x, c.y).h, -180 > b ? b = 360 + b : 180 < b && (b = -360 + b), yb += b) : qe(gb, hb, c.x, c.y);
                    gb = c.x;
                    hb = c.y;
                    Jb = a.timeStamp;
                    a = gb;
                    var b = hb,
                        d = Jb;
                    oe(d);
                    jb.push({
                        x: a,
                        y: b,
                        t: d
                    }); - 99 == Ib && (v.x = c.x / F, v.y = c.y / F)
                }
            },
            Yc = function(a) {
                Ib = -99;
                Vc = !1;
                if (sc) {
                    O(h.topAccess ? top : t, ba.touchend, Yc, !0);
                    cb--;
                    0 > cb && (cb = 0);
                    if (2 > cb && lb) {
                        fc(a);
                        return
                    }
                    if (Oc(a)) {
                        rc(a);
                        return
                    }
                }
                ec && (fc(a), ec = !1);
                !1 == G.__scrollpage_yet && va(a);
                if (lb) Lb = -99;
                else {
                    var b = a.changedTouches ? a.changedTouches[0] : a;
                    if (Lb == (b.pointerId ? b.pointerId : b.identifier)) {
                        Lb = -99;
                        b = kb(b);
                        v.x = b.x / F;
                        v.y = b.y / F;
                        gb = b.x;
                        hb = b.y;
                        Jb = a.timeStamp;
                        a = gb;
                        var b = hb,
                            c = Jb;
                        oe(c);
                        jb.push({
                            x: a,
                            y: b,
                            t: c
                        });
                        _[37] != A(Y.touchtype) && ($b() && 1 < jb.length ? (b = jb[0], c = jb[jb.length - 1], a = (c.t - b.t) / 15, 0 < a && (b = oc(b.x, b.y, c.x, c.y), Gb = !0, Sa = b.h / a, Ta = b.v / a)) : (Gb = !1, Ta = Sa = 0));
                        v.down = !1;
                        !1 == v.up && (v.up = !0, ea(_[102]), (!1 == v.moved || 5 > Math.abs(v.x - v.downx) && 5 > Math.abs(v.y - v.downy)) && ea(_[111]))
                    }
                }
            },
            Be = function() {
                ec = !1;
                Ib = Lb = -99;
                lb = !1;
                cb = 0
            },
            Zc = function(a) {
                dc && 2 > cb || (va(a), lb = !0, Ce = s.fov, Lb = -99, v.down = !1)
            },
            Fd = function(a, b) {
                var c = void 0 !== b ? b : a.scale;
                if (dc) {
                    if (2 > cb) return;
                    !1 == lb && Zc(a);
                    c = Dd *= c
                }
                va(a);
                Ra = ga();
                if ($b()) {
                    Ta = Sa = 0;
                    var d = 2 / la,
                        e = 1 / Math.tan(Ce / d),
                        c = Math.atan(1 / (e * c)) * d;
                    m.wheeldelta = c > s.fov ? -3 : 3;
                    m.wheeldelta_raw = m.wheeldelta / 3;
                    s.fov = c;
                    ea(_[87]);
                    ma.updateview()
                }
            },
            fc = function(a) {
                lb && (lb = !1);
                Vc = !1;
                va(a)
            },
            Va = Ca;
        Va.mouse = !1;
        Va.touch = !1;
        var kb = null,
            ba = null,
            J = null,
            Rc = [],
            lb = !1,
            ve = 0,
            Ed = !1,
            ec = !1,
            ze = 1,
            Ce = 90,
            Lb = -99,
            gb = 0,
            hb = 0,
            Jb = 0,
            jb = [],
            Ib = -99,
            Vc = !1,
            sc = !1,
            dc = !1,
            Kb = null,
            cb = 0,
            Dd = 1,
            Gb = !1,
            Sa = 0,
            Ta = 0,
            pc = !1,
            Sc = 0,
            Tc = 0,
            Bd = 0,
            yb = 0,
            Pc = !1,
            Fb = 0,
            xb = 0,
            Hb = 0,
            cc = null,
            qc = null;
        Va.registerControls = function(a) {
            J = a;
            ba = h.browser.events;
            kb = G.getMousePos;
            h.ie && (dc = (sc = Ma.msPointerEnabled || Ma.pointerEnabled) && (1 < Ma.msMaxTouchPoints || 1 < Ma.maxTouchPoints));
            Ed = dc || !1 == h.simulator && h.ios || void 0 !== B.documentElement.ongesturestart;
            a = !(!1 == h.simulator && h.ios || h.android || 10 <= h.ieversion && h.touchdeviceNS);
            var b = h.touchdeviceNS;
            if (b && (h.mobile || h.tablet) && !1 == h.simulator) a = !1;
            Va.mouse = a;
            Va.touch = b;
            ba.mouse = a;
            ba.touch = b;
            x(B, _[109], se, !1);
            x(B, "keyup", te, !1);
            x(h.topAccess ? top : t, _[32], ac, !0);
            x(h.topAccess ? top : t, _[56], ac, !0);
            x(B, _[79], wb);
            x(B, _[71], wb);
            x(B, _[73], wb);
            x(B, _[74], wb);
            if (a || sc) x(J, _[83], Uc, !1), x(J, _[95], Uc, !1);
            a && (x(t, _[8], ue, !0), x(J, _[6], Cd, !1));
            (a && h.realDesktop || h.ie) && x(J, _[32], xe, !1);
            b && (x(J, ba.touchstart, Wc, !0), x(J, ba.touchmove, Wc, !0), x(J, ba.touchstart, ye, !1), x(J, ba.touchmove, Ae, !0), x(J, ba.touchend, Yc, !0), x(J, ba.touchcancel, Be, !0), Ed && (x(J, ba.gesturestart, Zc, !1), x(J, ba.gesturechange, Fd, !1), x(J, ba.gestureend, fc, !0), dc && (x(J, _[82], fc, !0), Kb = new MSGesture, Kb.target = J)))
        };
        Va.domUpdate = function() {
            if (Kb) {
                var a = J;
                cb = 0;
                Va.unregister();
                Va.registerControls(a)
            }
        };
        Va.unregister = function() {
            Kb && (Kb = Kb.target = null);
            O(B, _[109], se, !1);
            O(B, "keyup", te, !1);
            O(h.topAccess ? top : t, _[32], ac, !0);
            O(h.topAccess ? top : t, _[56], ac, !0);
            h.topAccess && O(top, _[3], Qc, !0);
            O(B, _[79], wb);
            O(B, _[71], wb);
            O(B, _[73], wb);
            O(B, _[74], wb);
            O(t, _[8], ue, !0);
            O(t, _[8], Xc, !0);
            O(t, _[3], rc, !0);
            O(J, _[83], Uc, !1);
            O(J, _[95], Uc, !1);
            O(J, _[6], Cd, !1);
            O(J, _[32], xe, !1);
            O(J, ba.touchstart, Wc, !0);
            O(J, ba.touchmove, Wc, !0);
            O(J, ba.touchstart, ye, !1);
            O(J, ba.touchmove, Ae, !0);
            O(J, ba.touchend, Yc, !0);
            O(J, ba.touchcancel, Be, !0);
            O(J, ba.gesturestart, Zc, !1);
            O(J, ba.gesturechange, Fd, !1);
            O(J, ba.gestureend, fc, !0);
            O(J, _[82], fc, !0);
            kb = ba = J = null
        };
        Va.handleFrictions = function() {
            var a, b = a = !1,
                c = m.hlookat_moveforce,
                d = m.vlookat_moveforce,
                e = m.fov_moveforce;
            0 != e && pe(Y.keybfovchange * e);
            if (0 != c || 0 != d || 0 != xb || 0 != Hb) {
                var f = Y.keybfriction,
                    b = Y.keybspeed,
                    e = s.hlookat,
                    k = s.vlookat,
                    l = Y.keybaccelerate * Math.tan(Math.min(0.5 * Number(s.fov), 45) * la);
                xb += c * l;
                c = Hb += d * l;
                d = xb;
                xb *= f;
                Hb *= f;
                f = Math.sqrt(c * c + d * d);
                0 < f ? (c /= f, d /= f) : d = c = 0;
                f > b && (f = b);
                d *= f;
                e = 180 >= (Math.floor(k) % 360 + 450) % 360 ? e + d : e - d;
                k += c * f;
                s.hlookat = e;
                s.vlookat = k;
                f < 0.05 * l && (Hb = xb = 0);
                b = !0
            }
            a |= b;
            if (Gb) b = Math.pow(Y.touchfriction, 0.92), Sa *= b, Ta *= b, b = Math.sqrt(Ta * Ta + Sa * Sa), e = Math.min(0.04 * Hc / s.r_zoom, 0.5), 0 != b && (s.hlookat += Sa, s.vlookat += Ta), b < e && (Gb = !1, Ta = Sa = 0), a |= 1;
            else if (pc) {
                var b = v,
                    e = Bd,
                    k = Sc,
                    l = Tc,
                    d = 0.025 * Y.mouseaccelerate,
                    f = Y.mousespeed,
                    h = Y.mousefriction,
                    c = !1;
                if ($b()) {
                    if (b.down && (b.x != b.downx || b.y != b.downy)) {
                        var j = oc(b.downx, b.downy, b.x, b.y);
                        j.h = yb;
                        k = e * k - j.h * d;
                        l = e * l - j.v * d;
                        e = Math.sqrt(k * k + l * l);
                        0 < e && (k /= e, l /= e, e > f && (e = f))
                    }
                    s.hlookat += e * k;
                    s.vlookat += e * l * Y.mouseyfriction;
                    e *= h;
                    d = Math.min(0.04 * Hc / s.r_zoom, 0.5);
                    !1 == b.down && e < d && (c = !0)
                } else c = !0;
                c && (pc = !1, yb = l = k = e = 0);
                Bd = e;
                Sc = k;
                Tc = l;
                a |= 1
            }
            Pc && (b = s.fov, e = Fb, k = !1, 0 < Math.abs(e) && (k = e, l = Y.fovspeed, c = s.fovmin, d = s.fovmax, e *= Y.fovfriction, Math.abs(k) > l && (k = l * (k / Math.abs(k))), b += k * (0.9 * (b / 90) + 0.1), b < c && (b = c, e = 0), b > d && (b = d, e = 0), s.fov = b, Fb = e, k = !0), b = Math.min(0.1, Math.tan(Math.min(0.5 * s.fov, 45) * la)), Math.abs(Fb) < b && (Fb = 0, Pc = !1), a |= k);
            return a
        };
        Va.stopFrictions = function(a) {
            0 == (0 | a) && (a = 3);
            a & 1 && (Sc = Sa = 0);
            a & 2 && (Tc = Ta = 0)
        };
        Va.isMultiTouch = function() {
            return lb || ec || 1 < cb || Vc
        };
        Va.focusLoss = ac;
        var ta = null,
            T = null,
            ma = {},
            tc = function(a, b) {
                !0 !== b ? s.haschanged = !0 : (!0 !== a && (Xb = ga()), ea(_[277]), s.updateView(), ta && sa.renderpano(ta, 2), T && sa.renderpano(T, 1), Cc(!0), ea(_[247]))
            },
            Ee = function(a, b, c, d, e) {
                Aa.count++;
                Aa.id = Aa.count;
                if (De()) {
                    Q.busy = !0;
                    m.xml.url = "";
                    m.xml.content = a;
                    var f = (new DOMParser).parseFromString(a, _[20]);
                    P.resolvexmlincludes(f, function() {
                        f = P.xmlDoc;
                        Gd(f, b, c, d, e)
                    })
                }
            },
            De = function() {
                return 1 < Aa.count && Aa.removeid != Aa.id && (Aa.removeid = Aa.id, ea(_[274], !0), Aa.removeid != Aa.id) ? !1 : !0
            },
            Fe = function(a) {
                var b, c, d = "";
                a = rb(a);
                b = a.lastIndexOf("/");
                c = a.lastIndexOf("\\");
                c > b && (b = c);
                0 <= b && (d = a.slice(0, b + 1));
                return d
            },
            Gd = function(a, b, c, d, e) {
                na.currentmovingspeed = 0;
                uc = !1;
                ca = T ? 64 : 0;
                c && (c = A(c), 0 <= c.indexOf(_[282]) && (ca |= 4), 0 <= c.indexOf(_[266]) && (ca |= 128), 0 <= c.indexOf(_[344]) && (ca |= 16), 0 <= c.indexOf(_[368]) && (ca |= 32), 0 <= c.indexOf("merge") && (ca |= 16448), 0 <= c.indexOf(_[312]) && (ca |= 256), 0 <= c.indexOf(_[371]) && (ca |= 4), 0 <= c.indexOf(_[414]) && (ca |= 36), 0 <= c.indexOf(_[341]) && (uc = !0, ca |= 65536), 0 <= c.indexOf(_[276]) && I(_[92], 0));
                var f = 0 != (ca & 64) && 0 == (ca & 256);
                if (0 == (ca & 4)) {
                    var k = Ba.getArray();
                    c = k.length;
                    var l;
                    for (l = 0; l < c; l++) {
                        var h = k[l];
                        if (h && (!1 == f || !1 == h.keep)) h.sprite && (h.visible = !1, h.parent = null, G.pluginlayer.removeChild(h.sprite)), h.destroy(), Ba.removeItem(l), l--, c--
                    }
                }
                if (0 == (ca & 128)) {
                    k = Qa.getArray();
                    c = k.length;
                    for (l = 0; l < c; l++)
                        if ((h = k[l]) && (!1 == f || !1 == h.keep)) {
                            if (h.sprite) {
                                h.visible = !1;
                                h.parent = null;
                                try {
                                    G.hotspotlayer.removeChild(h.sprite)
                                } catch (j) {}
                            }
                            h.destroy();
                            Qa.removeItem(l);
                            l--;
                            c--
                        }
                }
                f = Sb.getArray();
                c = f.length;
                for (l = 0; l < c; l++)
                    if ((k = f[l]) && !1 == Fa(k.keep)) Sb.removeItem(l), l--, c--;
                if (!1 == uc) {
                    if (0 >= zb && d && (d = A(d), 0 == d.indexOf(_[426]) && (zb = parseFloat(d.slice(6)), isNaN(zb) || 0 > zb))) zb = 2;
                    T && (ta && (ta.destroy(), ta = null), ta = T, ta.stop(), T = null);
                    ca & 32 && (Z[0] = s.hlookat, Z[1] = s.vlookat, Z[2] = s.camroll, Z[3] = s.fov, Z[4] = s.fovtype, Z[5] = s.fovmin, Z[6] = s.fovmax, Z[7] = s.maxpixelzoom, Z[8] = s.fisheye, Z[9] = s.fisheyefovlink, Z[10] = s.stereographic, Z[12] = s.pannini, Z[13] = s.architectural, Z[14] = s.architecturalonlymiddle);
                    0 == (ca & 16384) && s.defaults();
                    s.limitview = "auto";
                    s.hlookatmin = Number.NaN;
                    s.hlookatmax = Number.NaN;
                    s.vlookatmin = Number.NaN;
                    s.vlookatmax = Number.NaN;
                    m.preview && delete m.preview;
                    m.image && delete m.image;
                    m.onstart = null;
                    X = m.image = {};
                    m.preview && delete m.preview;
                    X.type = null;
                    X.multires = !1;
                    X.tiled = !1;
                    X.tilesize = 0;
                    X.tiledimagewidth = 0;
                    X.tiledimageheight = 0;
                    X.baseindex = 1;
                    X.level = new Ya;
                    X.hfov = 360;
                    X.vfov = 180;
                    X.voffset = 0
                }
                if (a && a.documentElement && _[31] == a.documentElement.nodeName) ka(a.baseURI + _[18]);
                else {
                    P.parsexml(a.childNodes, null, ca);
                    m.xmlversion = m.version;
                    m.version = m.buildversion;
                    $c = e;
                    if ((a = b) && "null" != a) {
                        if (_[38] == typeof a) {
                            b = a.split("&");
                            a = {};
                            for (var w in b) d = b[w].split("="), a[d[0]] = d[1]
                        }
                        for (var p in a) "xml" != p && I(p, a[p])
                    }
                    Ge()
                }
            },
            Ge = function() {
                var a, b, c = m.plugin.getArray(),
                    d = m.hotspot.getArray(),
                    e;
                b = c.length;
                for (a = 0; a < b; a++) {
                    var f = c[a];
                    if (f && f.layer && f.layer.isArray) {
                        var k = f.layer.getArray();
                        e = k.length;
                        for (b = 0; b < e; b++) {
                            var l = k[b];
                            l && (l.parent = f.name, l.keep = f.keep, Ba.createItem(l.name, l))
                        }
                        f.plugin = null;
                        f.layer = null;
                        a--;
                        b = c.length
                    }
                }
                b = c.length;
                for (a = 0; a < b; a++)
                    if ((f = c[a]) && !1 == f._pCD) f.loadstyle(), f._pCD = !0;
                b = d.length;
                for (a = 0; a < b; a++)
                    if ((c = d[a]) && !1 == c._pCD) c.loadstyle(), c._pCD = !0;
                if (!1 != He(!0) && (!1 == uc && (ca & 32 && (s.hlookat = Z[0], s.vlookat = Z[1], s.camroll = Z[2], s.fov = Z[3], s.fovtype = Z[4], s.fovmin = Z[5], s.fovmax = Z[6], s.maxpixelzoom = Z[7], s.fisheye = Z[8], s.fisheyefovlink = Z[9], s.stereographic = Z[10], s.pannini = Z[12], s.architectural = Z[13], s.architecturalonlymiddle = Z[14]), ma.updateview(), ta && ta.removemainpano(), Rb(), "1" == ib.html5rendermode ? rd = !0 : "2" == ib.html5rendermode && (rd = !1), void 0 !== ib.hardwarelimit && (ab = parseFloat(ib.hardwarelimit), isNaN(ab) && (ab = 0)), void 0 !== ib.usedesktopimages && (vd = Fa(ib.usedesktopimages)), Mb = !0, Ic.progress = 0, T = sa.createPano(), T.create(), 0 < zb && (Hd = !0, T.setBlend(0), Dc = !0, Ec = 0)), Q.busy = !1, a = m.onstart, $c && (a = $c, $c = null), d = Aa.id, Q.callaction(a, null, !0), d == Aa.id && (ea(_[250]), d == Aa.id))) {
                    !1 == uc && (Ie(), Je());
                    a = Qa.getArray();
                    d = a.length;
                    for (c = 0; c < d; c++)
                        if ((f = a[c]) && null == f.sprite) f.create(), G.hotspotlayer.appendChild(f.sprite);
                    He();
                    ea(_[55]);
                    ma.updateview();
                    Q.processactions()
                }
            },
            He = function(a) {
                var b = Ba.getArray(),
                    c = b.length,
                    d, e = !0;
                for (d = 0; d < c; d++) {
                    var f = b[d];
                    if (f) {
                        var k = !1;
                        !0 == a ? !0 == f.preload && _[13] != f.type && !1 == f.loaded && (f.onloaded = Ge, f.altonloaded = null, k = !0, e = !1) : (!0 == f.preload && (f.preload = !1, f.onloaded = null), k = !0);
                        k && null == f.sprite && (f.create(), null == f._parent && G.pluginlayer.appendChild(f.sprite))
                    }
                }
                return e
            },
            Ie = function() {
                var a = A(N(_[278])),
                    b = N(_[300]);
                if (b && ("null" == a || _[53] == a)) {
                    a = sa.createCube();
                    a.create(!1);
                    var c = N(_[194]);
                    if (null != c) {
                        var c = A(c),
                            d = [0, 1, 2, 3, 4, 5];
                        d[c.indexOf("l")] = 0;
                        d[c.indexOf("f")] = 1;
                        d[c.indexOf("r")] = 2;
                        d[c.indexOf("b")] = 3;
                        d[c.indexOf("u")] = 4;
                        d[c.indexOf("d")] = 5;
                        a.striporder = d
                    }
                    a.loadcubestrip(b);
                    T.setpreview(a);
                    tc(!1, !0)
                } else if (0 == a.indexOf("grid")) {
                    if (b = Ub(a))
                        if (b = b[0], "grid" == b.cmd) {
                            var e = b.args,
                                b = void 0 == e[1] ? 10 : parseInt(e[1]),
                                a = void 0 == e[2] ? 10 : parseInt(e[2]),
                                c = void 0 == e[3] ? 400 : parseInt(e[3]),
                                d = void 0 == e[4] ? 6710886 : parseInt(e[4]),
                                f = void 0 == e[5] ? 2236962 : parseInt(e[5]),
                                e = void 0 == e[6] ? void 0 == e[4] ? 16777215 : d : parseInt(e[6]),
                                d = ja(d),
                                f = ja(f),
                                e = ja(e),
                                k = sa.createCube();
                            k.create(!1);
                            var c = c + 1,
                                l = h.desktop ? c : 255;
                            k.imagesize = l;
                            k.setimagesize(l, l, null);
                            k.allocfaces();
                            for (var l = k.cubesize, r = l / c, a = a * r, b = b * r, j = r = 0, w = 0, r = 0; 6 > r; r++) {
                                var j = k.canvassizes[r][0],
                                    w = k.canvassizes[r][1],
                                    p = (j - l) / 2,
                                    q = (w - l) / 2,
                                    n;
                                !1 == sa.webgl ? n = k.faces[r] : (n = U(2), n.width = j, n.height = w);
                                var m = n.getContext("2d");
                                m.fillStyle = f;
                                m.fillRect(0, 0, j, w);
                                m.fillStyle = d;
                                for (j = 0; j < c; j += a) m.fillRect(p, q + j, c, 1);
                                for (j = 0; j < c; j += b) m.fillRect(p + j, q, 1, c);
                                if (e != d) {
                                    m.fillStyle = e;
                                    for (w = 0; w < c; w += a)
                                        for (j = 0; j < c; j += b) m.fillRect(p + j, q + w, 1, 1)
                                }
                                sa.drawtileimage(k, r, n)
                            }
                            k.url = null;
                            k.isloading = !1;
                            k.loaddone = !0;
                            T.setpreview(k);
                            tc(!1, !0);
                            Id()
                        }
                } else Id()
            },
            Id = function() {
                ea(_[202]);
                ea(_[333])
            },
            Je = function() {
                qd = !1;
                var a = null != N(_[29]),
                    b = (h.iphone && h.retina || (h.tablet || h.desktop || h.android) || !1 == a) && null != N(_[28]),
                    c = !1;
                if (!1 == h.desktop && !1 == vd && (a || b)) c = b ? qb(_[28]) : qb(_[29]), !1 == c && ka(_[143]);
                else {
                    var d = X.type;
                    if (null == d)
                        if (X.left || X.cube) d = "cube";
                        else if (X.cubestrip) d = _[53];
                    else if (X.sphere) d = _[460];
                    else if (X.cylinder) d = _[389];
                    else if (X.zoomify) d = _[393];
                    else if (X.qtvr) d = "qtvr";
                    else if (X.video) d = "video";
                    else {
                        if (X.mobile || X.tablet) d = "cube"
                    } else d = A(d);
                    if ("cube" == d) {
                        if (X.multires && X.level) {
                            a = X.level.getArray();
                            d = a.length;
                            b = h.iphone && h.retina || h.ipad || h.android ? 1100 : h.iphone ? 512 : 2560;
                            0 < ab && (b = ab + 256);
                            a.sort(function(a, b) {
                                return +parseInt(a.tiledimagewidth, 10) - parseInt(b.tiledimagewidth, 10)
                            });
                            for (d -= 1; 0 <= d && !(a[d].tiledimagewidth <= b); d--);
                            0 <= d && (c = qb(_[273] + d + "]", !0))
                        }!1 == c && (h.desktop || vd ? (c = qb(_[43]), !1 == c && (c = qb(_[28])), !1 == c && (c = qb(_[29]))) : c = qb(_[43]))
                    } else _[53] == d ? (c = sa.createCube(), c.create(!1), c.loadcubestrip(X.cubestrip.url), T.setpano(c), c = !0, tc(!1, !0)) : null != d && (b ? c = qb(_[28]) : a && (c = qb(_[29])), !1 == c && ka(_[145]))
                }
            },
            qb = function(a, b) {
                var c = _[148].split(" "),
                    d = h.iphone ? [0, 1, 2, 3, 4, 5] : [1, 0, 2, 4, 5, 3],
                    e = Array(6),
                    f, k, l = N(a + "." + c[6] + ".url"),
                    r = "";
                if (l) {
                    if (r = ya.parsePath(l))
                        for (f = 0; 6 > f; f++) k = d[f], l = String(c[k]).charAt(0), e[f] = r.split("%s").join(l)
                } else
                    for (f = 0; 6 > f; f++)
                        if (k = d[f], r = ya.parsePath(N(a + "." + c[k] + ".url"))) e[f] = r;
                        else return !1; var j, w, c = sa.createCube(),
                    p = 1,
                    l = 1;
                b && (l = X.baseindex, f = N(a), r = X.tilesize, f = parseInt(f.tiledimagewidth, 10), p = Math.ceil(f / r), c.tiled = !0, c.tilespl = p, c.tilesize = r, c.imagesize = f);
                c.create(!0);
                for (f = 0; 6 > f; f++)
                    if (k = d[f], r = e[f], !1 == b) c.loadtile(k, 0, 0, r);
                    else
                        for (j = 0; j < p; j++)
                            for (w = 0; w < p; w++) c.loadtile(k, w, j, $e(r, String(w + l), String(j + l)));
                Mb = Jd = !0;
                T.setpano(c);
                tc(!1, !0);
                return !0
            },
            Kd = function(a) {
                ta && (ta.destroy(), ta = null);
                T && (T.destroy(), T = null);
                Mb = !0;
                setTimeout(af, a)
            },
            af = function() {
                T = sa.createPano();
                T.create();
                Ie();
                Je()
            },
            db = ma;
        //d3vin-start
        //a:tour.xml
        //d3vin-end
        db.loadpano = function(a, b, c, d, e) {
            Aa.count++;
            Aa.id = Aa.count;
            if (De())
                if (0 > A(c).indexOf(_[309]) && I(_[92], 0), "null" == A(a) && (a = null), a) {
                    Q.busy = !0;
                    null == ya.firstxmlpath ? ya.firstxmlpath = Fe(a) : a = ya.parsePath(a, !0);
                    ya.currentxmlpath = Fe(a);
                    m.xml.url = a;
                    m.xml.content = null;
                    m.xml.scene = null;
                    var f = Aa.id,
                        k = new XMLHttpRequest;
                    void 0 !== k.overrideMimeType && k.overrideMimeType(_[20]);
                    k.onreadystatechange = function() {
                        if (f == Aa.id && 4 == k.readyState) {
                            var l = k.status;
                            if (0 == l || 200 == l || 304 == l) {
                                var j = k.responseXML;
                                if (j && j.childNodes) {
                                    var h = j.childNodes,
                                        p = h.length;
                                    0 == p ? j = null : 2 == p && h[1] && _[31] == h[1].nodeName && (j = null)
                                }
                                j ? (j = P.resolvexmlencryption(j, a), null != j && P.resolvexmlincludes(j, function() {
                                    j = P.xmlDoc;
                                    Gd(j, b, c, d, e)
                                })) : 200 == l ? ka(a + _[18]) : ka(a + _[69])
                            } else ka(a + _[25] + k.status + ")")
                        }
                    };
                    try {
                        //d3vin: load tour.xml
                        k.open("GET", a, !0), k.send(null)
                    } catch (l) {
                        ka(a + _[154] + l)
                    }
                } else Ee(_[200], b, c, d, e)
        };
        db.loadxml = Ee;
        db.loadxmldoc = Gd;
        db.updateview = tc;
        db.updateplugins = function(a) {
            var b = Ba.getArray(),
                c = b.length,
                d;
            for (d = 0; d < c; d++) {
                var e = b[d];
                e && (a || e.poschanged) && e.loaded && e.updatepos()
            }
        };
        db.handleloading = function() {
            var a = !1;
            !1 == vc && (ta && (a |= ta.checkloading()), T && (a |= T.checkloading()));
            Mb = T && (null != T.panocube && T.panocube.isloading && !T.panocube.loaddone || null != T.previewcube && T.previewcube.isloading && !T.previewcube.loaddone);
            Jd && !0 != Mb && (Jd = !1, ea(_[239]));
            var b = qa.commands;
            if (0 < b.length && (Mb = !0, 1 < ga() - qa.lastdraw)) {
                var c = b.splice(0, 8);
                Rb();
                qa.ctx.drawImage(qa.image, c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7]);
                qa.lastdraw = ga();
                if (0 == b.length) {
                    if (h.androidstock) {
                        for (var b = c[7], c = qa.ctx.getImageData(c[4], c[5], 1, b).data, d = 0, e = b, f = b; f > d;) 0 == c[4 * (f - 1) + 3] ? e = f : d = f, f = e + d >> 1;
                        if (1 > f / b) return $(2, _[132]), qa.commands = [], qa.image = null, qa.ctx = null, Rb(), 0 == ab || 512 < ab ? (ab = 512, Kd(2500)) : 512 == ab ? (ab = 256, Kd(2500)) : Kd(6E3), !0
                    }
                    qa.image && (qa.image.okay = !0, qa.image.src = null);
                    qa.image = null;
                    qa.ctx = null
                }
                Rb()
            }
            if (T && ta)
                if (!1 == vc) {
                    if (null == T.previewcube || T.previewcube && !0 == T.previewcube.loaddone) vc = !0, ad = -1
                } else a = 0, 0 < zb && (-1 == ad && (ad = ga()), a = (ga() - ad) / 1E3 / zb, 1 < a && (a = 1), a = 1 - a * a * a, 0 > a && (a = 0), T.setBlend(1 - a), Dc = !0, Ec = 1 - a), 0 == a && (ta && (ta.destroy(), ta = null), Hd = vc = !1), a = !0;
            return a
        };
        db.checkautorotate = function(a) {
            var b = ga();
            a && (Xb = b);
            Xb > Ra && (Ra = Xb);
            a = b - Ra;
            a > 1E3 * m.idletime && Ra != Vd && (Vd = Ra, ea(_[440]));
            a = b - Xb;
            if (na.enabled && a > 1E3 * na.waittime) {
                var c = s._hlookat;
                a = s._vlookat;
                var b = s._fov,
                    d = Math.tan(Math.min(0.5 * b, 45) * la),
                    e = na.accel,
                    f = na.speed,
                    k = na.currentmovingspeed,
                    e = e / 60,
                    f = f / 60;
                0 < f ? (k += e * e, k > f && (k = f)) : (k -= e * e, k < f && (k = f));
                na.currentmovingspeed = k;
                c += d * k;
                d = Math.abs(d * k);
                s._hlookat = c;
                c = parseFloat(na.horizon);
                isNaN(c) || (c = (c - a) / 60, e = Math.abs(c), 0 < e && (e > d && (c = d * c / e), a += c, s._vlookat = a));
                a = parseFloat(na.tofov);
                isNaN(a) || (a < s.fovmin && (a = s.fovmin), a > s.fovmax && (a = s.fovmax), a = (a - b) / 60, c = Math.abs(a), 0 < c && (c > d && (a = d * a / c), b += a, s._fov = b));
                return !0
            }
            na.currentmovingspeed = 0;
            return !1
        };
        var qa = function() {};
        db.drawimagequeue = qa;
        qa.busy = function() {
            return 0 < qa.commands.length
        };
        qa.ctx = null;
        qa.image = null;
        qa.commands = [];
        qa.lastdraw = 0;
        var Z = [],
            Aa = {
                count: 0,
                id: 0
            },
            ca = 0,
            uc = !1,
            zb = 0,
            Jd = !1,
            Mb = !1,
            Hd = !1,
            vc = !1,
            ad = !1;
        db.isLoading = function() {
            return Mb
        };
        db.isBlending = function() {
            return Hd || vc
        };
        var $c = null;
        db.previewdone = Id;
        var $e = function(a, b, c) {
            var d = "",
                e = a.length,
                f, k = !1,
                l = 0,
                h;
            for (f = 0; f < e; f++) {
                var j = a.charAt(f);
                if ("%" == j) k = !0, l = 0;
                else if ("0" == j) k ? l++ : d += j;
                else if (k)
                    if (k = !1, h = null, 0 <= _[380].indexOf(j) ? h = b : 0 <= _[430].indexOf(j) && (h = c), null != h) {
                        for (; h.length <= l;) h = "0" + h;
                        d += h
                    } else d += "%" + j;
                else k = !1, d += j
            }
            return d
        };
        db.checkHovering = function() {
            if (!(1 == (Wb & 1) || Q.blocked)) {
                var a = [Ba.getArray(), Qa.getArray()],
                    b, c, d, e, f;
                for (f = 0; 2 > f; f++) {
                    b = a[f];
                    d = b.length;
                    for (e = 0; e < d; e++)(c = b[e]) && (c._visible && c.hovering && c.onhover) && Q.callaction(c.onhover, c)
                }
            }
        };
        var sa = {},
            bf = function() {
                var a = Oa;
                try {
                    var b = a.COMPILE_STATUS,
                        c = a.createShader(a.VERTEX_SHADER);
                    a.shaderSource(c, "attribute vec3 vx;attribute vec2 tx;uniform float sh;uniform float ch;uniform mat4 wm;uniform mat4 pm;varying vec2 tt;void main(){vec3 vs=1000.0*normalize(vx);vec2 c2=vec2(vx.x,vx.z);c2=c2/max(1.0,length(c2));vec3 vc=1000.0*vec3(c2.x,clamp(vx.y*inversesqrt(1.0+vx.x*vx.x+vx.z*vx.z),-30.0,+30.0),c2.y);vec3 vv=vx*(1.0-sh)+sh*(vs*(1.0-ch)+vc*ch);gl_Position=pm*wm*vec4(vv,1);tt=tx;}");
                    a.compileShader(c);
                    if (!a.getShaderParameter(c, b)) return !1;
                    var d = a.createShader(a.FRAGMENT_SHADER);
                    a.shaderSource(d, "#ifdef GL_ES\n#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n#endif\nuniform float aa;uniform sampler2D sm;varying vec2 tt;void main(){vec4 c=texture2D(sm,vec2(tt.s,tt.t)" + (h.opera || h.ie ? "" : ",-1.0") + ");gl_FragColor=vec4(c.rgb,c.a*aa);}");
                    a.compileShader(d);
                    if (!a.getShaderParameter(d, b)) return !1;
                    var e = a.createProgram();
                    a.attachShader(e, c);
                    a.attachShader(e, d);
                    a.linkProgram(e);
                    if (!a.getProgramParameter(e, a.LINK_STATUS)) return !1;
                    a.useProgram(e);
                    Ld = a.getAttribLocation(e, "vx");
                    Md = a.getAttribLocation(e, "tx");
                    Ke = a.getUniformLocation(e, "sh");
                    Le = a.getUniformLocation(e, "ch");
                    Me = a.getUniformLocation(e, "aa");
                    Ne = a.getUniformLocation(e, "sm");
                    Oe = a.getUniformLocation(e, "pm");
                    Pe = a.getUniformLocation(e, "wm");
                    a.enableVertexAttribArray(Ld);
                    a.enableVertexAttribArray(Md);
                    za.sh = e;
                    za.vs = c;
                    za.ps = d
                } catch (f) {
                    return !1
                }
                return !0
            },
            Qe = function(a) {
                if (a) {
                    var b = Oa;
                    b.deleteBuffer(a.vx);
                    b.deleteBuffer(a.tx);
                    b.deleteBuffer(a.ix);
                    a.vx = null;
                    a.tx = null;
                    a.ix = null;
                    a.vxd = null;
                    a.txd = null;
                    a.ixd = null;
                    a.tcnt = 0
                }
            },
            Ua = sa,
            ia = Ua.webgl = !1,
            Pa = null,
            Oa = null,
            za = null,
            wc = 0,
            Ld, Md, Ke, Le, Me, Ne, Oe, Pe, ua, gc, Nb, bd, cd, Nd, dd, Re, Od, Se, ed;
        Ua.setup = function(a) {
            var b, c = null;
            Ua.reset();
            if (2 == a) {
                try {
                    Pa = U(2);
                    Pa.style.position = _[0];
                    Pa.style.left = 0;
                    for (b = Pa.style.top = 0; 4 > b && !(c = Pa.getContext([_[67], _[75], _[101], _[99]][b])); b++);
                } catch (d) {}
                Pa && c && (Oa = c, za = {}, bf() && (ua = c.TEXTURE_2D, gc = c.TEXTURE0, Nb = c.ARRAY_BUFFER, bd = c.ELEMENT_ARRAY_BUFFER, cd = c.RGBA, Nd = c.RGB, dd = c.UNSIGNED_BYTE, Re = c.UNSIGNED_SHORT, Od = c.FLOAT, Se = c.TRIANGLES, ed = c.STATIC_DRAW, c.clearColor(0, 0, 0, 0), c.disable(c.DEPTH_TEST), c.depthFunc(c.NEVER), c.enable(c.BLEND), c.blendFunc(c.SRC_ALPHA, c.ONE_MINUS_SRC_ALPHA), c.enable(c.CULL_FACE), c.cullFace(c.FRONT), wc = c.getParameter(c.MAX_TEXTURE_SIZE), 4096 < wc && (wc = 4096), 2048 >= wc && (h.firefox && !h.mac && !h.android) && (h.css3d = !1), G.panolayer.appendChild(Pa), Ua.infoString = _[378], ia = !0, Ua.webgl = !0));
                !1 == ia && (Oa = Pa = null, a = 1, h.webgl = !1)
            }
            1 == a && (Ua.infoString = "", h.webgl = !1);
            h.buildList()
        };
        Ua.reset = function() {
            if (ia) {
                var a = Oa;
                za && (a.deleteProgram(za.sh), a.deleteShader(za.vs), a.deleteShader(za.ps), za.obj0 && (Qe(za.obj0), Qe(za.obj), za.obj0 = null, za.obj = null), za = null);
                ia = !1;
                Oa = Pa = null
            }
        };
        Ua.size = function(a, b) {
            if (ia) {
                var c = (h.android && !1 == h.androidstock || h.blackberry) && !1 == h.hidpi ? h.pixelratio : 1,
                    d = a * c + 0.5 | 0,
                    c = b * c + 0.5 | 0;
                if (Pa.width != d || Pa.height != c) {
                    Pa.width = d;
                    Pa.height = c;
                    Pa.style.width = a + "px";
                    Pa.style.height = b + "px";
                    var e = Oa.drawingBufferWidth | 0,
                        f = Oa.drawingBufferHeight | 0;
                    if (0 >= e || 0 >= f) e = d, f = c;
                    Oa.viewport(0, 0, e, f);
                    h.gl = {
                        width: e,
                        height: f
                    }
                }
            } else h.gl = {
                width: 0,
                height: 0
            }, ta && ta.updateviewport(), T && T.updateviewport()
        };
        Ua.startFrame = function() {
            if (ia) {
                var a = Oa;
                a.clear(a.COLOR_BUFFER_BIT)
            }
        };
        Ua.finishFrame = function() {
            if (ia) {
                var a = Oa;
                h.androidstock && a.finish()
            }
        };
        Ua.drawtileimage = function(a, b, c) {
            var d = !1;
            if (ia) {
                d = Oa;
                if (!a.textures) return;
                if (!1 == a.tiled || 1 == a.tilespl) {
                    var e = !1,
                        f = h.opera || h.ie ? "" : A(ib.mipmapping),
                        k = "force" == f,
                        l = wc;
                    void 0 !== ib.hardwarelimit && (l = parseFloat(ib.hardwarelimit));
                    if (!0 != h.blackberry && (k || c.width > l))
                        if (k && (l = 1536 < c.width ? 2048 : 1024), c.width != l || c.height != l) {
                            var r = U(2);
                            r.width = l;
                            r.height = l;
                            r.getContext("2d").drawImage(c, 0, 0, c.width, c.height, 0, 0, l, l);
                            c = r
                        }
                    l = a.textures[b];
                    null == l ? (l = d.createTexture(), d.activeTexture(gc), d.bindTexture(ua, l), d.texParameteri(ua, d.TEXTURE_WRAP_T, d.CLAMP_TO_EDGE), d.texParameteri(ua, d.TEXTURE_WRAP_S, d.CLAMP_TO_EDGE), d.texParameteri(ua, d.TEXTURE_MAG_FILTER, d.LINEAR), (k || "auto" == f) && 1024 <= c.width && 0 == (c.width & c.width - 1) ? (d.texParameteri(ua, d.TEXTURE_MIN_FILTER, d.LINEAR_MIPMAP_LINEAR), e = !0) : d.texParameteri(ua, d.TEXTURE_MIN_FILTER, d.LINEAR), a.textures[b] = l) : (d.activeTexture(gc), d.bindTexture(ua, l));
                    d.texImage2D(ua, 0, Nd, Nd, dd, c);
                    e && d.generateMipmap(ua)
                } else l = a.textures[b], null == l ? (l = d.createTexture(), d.activeTexture(gc), d.bindTexture(ua, l), d.texParameteri(ua, d.TEXTURE_WRAP_T, d.CLAMP_TO_EDGE), d.texParameteri(ua, d.TEXTURE_WRAP_S, d.CLAMP_TO_EDGE), d.texParameteri(ua, d.TEXTURE_MAG_FILTER, d.LINEAR), d.texParameteri(ua, d.TEXTURE_MIN_FILTER, d.LINEAR), d.texImage2D(ua, 0, cd, a.canvassize, a.canvassize, 0, cd, dd, null), a.textures[b] = l) : (d.activeTexture(gc), d.bindTexture(ua, l)), d.texSubImage2D(ua, 0, c.th * a.tilesize, c.tv * a.tilesize, cd, dd, c);
                d.bindTexture(ua, null);
                d = !0
            } else if (!1 == a.usecanvas || !0 == pd) {
                k = [1, 3, 0, 2, 4, 5];
                c = [];
                e = a.faces[b];
                for (f = 0; 6 > f; f++) c[k[f]] = f;
                k = c[b];
                for (f = 0; 6 > f; f++)
                    if (f != b && (l = c[f], r = a.faces[f], r.parentNode == a.layer && k < l)) {
                        a.layer.insertBefore(e, r);
                        e = null;
                        break
                    }
                e && a.layer.appendChild(e);
                !1 == a.usecanvas && (d = !0)
            }
            return d
        };
        Ua.renderpano = function(a, b) {
            if (ia) {
                var c = Oa,
                    d = Ha,
                    e = oa,
                    f = a.stopped && a.state ? a.state : s.getState();
                a.state = f;
                var k = f.h,
                    l = f.v,
                    h = f.z,
                    j = f.r,
                    w = 1 / (0.5 * d),
                    p = -1 / (0.5 * e),
                    e = f.zf,
                    q = f.yf,
                    d = Math.min(e / 200, 1),
                    f = 0 < e ? f.ch : 0,
                    w = new Float32Array([w, 0, 0, 0, 0, p, 0, 0, 0, 0, 65535 / 65536, 1, 0, 0, 65535 / 65536 - 1, 0]),
                    k = Sd(k - 90, -l, j),
                    n = Bc([h, 0, 0, 0, 0, h, 0, 0, 0, q, 1, 0, 0, e * q, e, 1]),
                    h = Bc(),
                    l = n[0],
                    j = n[1],
                    q = n[2],
                    p = n[3],
                    m = n[4],
                    g = n[5],
                    t = n[6],
                    D = n[7],
                    H = n[8],
                    C = n[9],
                    y = n[10],
                    A = n[11],
                    v = n[12],
                    B = n[13],
                    F = n[14],
                    n = n[15],
                    z = k[0],
                    M = k[1],
                    u = k[2],
                    R = k[3];
                h[0] = z * l + M * m + u * H + R * v;
                h[1] = z * j + M * g + u * C + R * B;
                h[2] = z * q + M * t + u * y + R * F;
                h[3] = z * p + M * D + u * A + R * n;
                z = k[4];
                M = k[5];
                u = k[6];
                R = k[7];
                h[4] = z * l + M * m + u * H + R * v;
                h[5] = z * j + M * g + u * C + R * B;
                h[6] = z * q + M * t + u * y + R * F;
                h[7] = z * p + M * D + u * A + R * n;
                z = k[8];
                M = k[9];
                u = k[10];
                R = k[11];
                h[8] = z * l + M * m + u * H + R * v;
                h[9] = z * j + M * g + u * C + R * B;
                h[10] = z * q + M * t + u * y + R * F;
                h[11] = z * p + M * D + u * A + R * n;
                z = k[12];
                M = k[13];
                u = k[14];
                R = k[15];
                h[12] = z * l + M * m + u * H + R * v;
                h[13] = z * j + M * g + u * C + R * B;
                h[14] = z * q + M * t + u * y + R * F;
                h[15] = z * p + M * D + u * A + R * n;
                c.uniform1i(Ne, 0);
                c.uniform1f(Me, a.alpha);
                c.uniform1f(Ke, d);
                c.uniform1f(Le, f);
                c.uniformMatrix4fv(Oe, !1, w);
                c.uniformMatrix4fv(Pe, !1, h);
                d = [];
                a.previewcube && a.previewcube.visible && d.push(a.previewcube);
                a.panocube && a.panocube.visible && d.push(a.panocube);
                k = d.length;
                for (f = 0; f < k; f++)
                    if (h = d[f], l = 10 < e ? h.obj : h.obj0, h && h.textures && l) {
                        c.bindBuffer(Nb, l.vx);
                        c.vertexAttribPointer(Ld, 3, Od, !1, 0, 0);
                        c.bindBuffer(Nb, l.tx);
                        c.vertexAttribPointer(Md, 2, Od, !1, 0, 0);
                        c.bindBuffer(bd, l.ix);
                        for (w = 0; 6 > w; w++) h.textures[w] && (c.activeTexture(gc), c.bindTexture(ua, h.textures[w]), c.drawElements(Se, l.tcnt, Re, 2 * w * l.tcnt))
                    }
            } else a.render(b)
        };
        Ua.createPano = function() {
            return new cf
        };
        Ua.createCube = function() {
            return new df
        };
        var cf = function() {
                var a = this;
                a.hlookat = 0;
                a.vlookat = 0;
                a.zoom = 1;
                a.previewcube = null;
                a.panocube = null;
                a.layer = null;
                a.alpha = 1;
                var b = !1,
                    c = !1;
                a.stopped = !1;
                a.create = function() {
                    if (!ia) {
                        var b = U(),
                            c = b.style;
                        c.position = _[0];
                        c.left = 0;
                        c.top = 0;
                        a.layer = b;
                        G.panolayer.appendChild(b)
                    }
                };
                a.destroy = function() {
                    try {
                        ia ? (a.previewcube && (a.previewcube.destroy(), a.previewcube = null), a.panocube && (a.panocube.destroy(), a.panocube = null)) : (a.previewcube && (c && a.layer.removeChild(a.previewcube.layer), a.previewcube = null), a.panocube && (b && a.layer.removeChild(a.panocube.layer), a.panocube = null), G.panolayer.removeChild(a.layer))
                    } catch (d) {}
                    b = c = !1;
                    a.previewcube = null;
                    a.panocube = null;
                    a.layer = null
                };
                a.removemainpano = function() {
                    ia ? (a.previewcube && (a.previewcube.visible = !0), a.panocube && (a.panocube.destroy(), a.panocube = null)) : (!1 == c && a.previewcube && (a.layer.appendChild(a.previewcube.layer), c = !0), a.panocube && (b && (a.layer.removeChild(a.panocube.layer), b = !1), a.panocube = null))
                };
                a.stop = function() {
                    a.stopped = !0
                };
                a.checkloading = function() {
                    if (a.stopped) return !1;
                    var b = !1,
                        d = [a.previewcube, a.panocube],
                        k, l, r;
                    r = d.length;
                    var j = 0,
                        w = 0;
                    for (k = 0; k < r; k++) {
                        var p = d[k],
                            q = !0;
                        if (p && p.isloading) {
                            var n = p.images,
                                m;
                            m = n.length;
                            var g = p.fmax | 0,
                                s = p.fhave | 0;
                            m > g && (g = m);
                            for (l = 0; l < m; l++) {
                                var D = n[l],
                                    H = D.naturalWidth,
                                    C = D.naturalHeight;
                                if (0 == p.imagesize && 0 < H && 0 < C) {
                                    p.imagesize = H;
                                    if (!1 == p.setimagesize(H, C, D)) {
                                        p.isloading = !1;
                                        p.images = [];
                                        break
                                    }
                                    p.allocfaces();
                                    b = !0
                                }
                                D.complete && 0 < H && 0 < C ? (!1 == D.done && D.drawtile(), D.done ? (b = !0, s++, n.splice(l, 1), m--, l--) : q = !1) : q = !1
                            }
                            p.fmax = g;
                            p.fhave = s;
                            1 == k && (j += g, w += s);
                            p.isloading = !q;
                            p.loaddone = q;
                            0 == k && q && ma.previewdone();
                            q && 1 == k && !1 == ia && setTimeout(function() {
                                try {
                                    var b = a.panocube,
                                        c, d, e, g, f, l, j, k, L = h.windows && h.safari || h.androidstock ? 1 : 2;
                                    e = b.cubesize;
                                    if (b.usecanvas) {
                                        var r = 4;
                                        Db && (r = 6, L = 1);
                                        for (c = 0; c < r; c++)
                                            if (g = b.faces[c], j = g.getContext("2d"), f = (b.canvassizes[c][0] - e) / 2, l = (b.canvassizes[c][1] - e) / 2, j) {
                                                j.imageSmoothingEnabled = !1;
                                                if (0 < f)
                                                    if (1 == L) {
                                                        k = j.getImageData(f, l, 1, e);
                                                        for (d = 0; d < f; d++) j.putImageData(k, d, l);
                                                        k = j.getImageData(f + e - 1, l, 1, e);
                                                        for (d = 0; d < f; d++) j.putImageData(k, f + e + d, l)
                                                    } else j.drawImage(g, f, l, 1, e, 0, l, f, e), j.drawImage(g, f + e - 1, l, 1, e, f + e, l, f, e);
                                                if (0 < l)
                                                    if (1 == L) {
                                                        k = j.getImageData(0, l, g.width, 1);
                                                        for (d = 0; d < l; d++) j.putImageData(k, 0, d);
                                                        k = j.getImageData(0, l + e - 1, g.width, 1);
                                                        for (d = 0; d < l; d++) j.putImageData(k, 0, l + e + d)
                                                    } else j.drawImage(g, 0, l, g.width, 1, 0, 0, g.width, l), j.drawImage(g, 0, l + e - 1, g.width, 1, 0, l + e, g.width, l)
                                            }
                                    }
                                } catch (p) {}
                            }, 10)
                        }
                    }
                    c && !1 == qd && (a.panocube && !1 == a.panocube.isloading && !1 == ma.drawimagequeue.busy()) && (c = !1, !1 == ia ? setTimeout(function() {
                        try {
                            c && (a.layer && a.previewcube) && (a.layer.removeChild(a.previewcube.layer), c = a.previewcube.visible = !1)
                        } catch (b) {}
                    }, 1500) : a.previewcube.visible = !1);
                    0 < j && (Ic.progress = w / j);
                    return b
                };
                a.updateviewport = function() {
                    var b = Ha,
                        c = oa,
                        d = b / 2 + "px",
                        l = c / 2 + "px";
                    ia || (a.layer.style.width = b + "px", a.layer.style.height = c + "px", 0 == Ia && (a.previewcube && (b = a.previewcube.layer) && (b.style[ud] = d + " " + l), a.panocube && (b = a.panocube.layer) && (b.style[ud] = d + " " + l)))
                };
                a.setBlend = function(b) {
                    ia ? a.alpha = b : a.layer && (a.layer.style.opacity = b)
                };
                var d = _[133].split(" ");
                a.render = function() {
                    var b = Ha,
                        c = oa,
                        k = [a.panocube, a.previewcube],
                        l, r, j = a.stopped && a.state ? a.state : s.getState();
                    a.state = j;
                    var m = j.h,
                        p = j.v,
                        q = j.z,
                        n = j.r,
                        j = j.yf,
                        K, g, t;
                    if (!ia) {
                        l = h.iosversion && "4" > h.iosversion ? "" : "px";
                        var D = Ia;
                        0 == D && (a.layer.style[h.browser.css.perspective] = q + l, a.layer.style[xa] = _[91] + j + "px)");
                        r = k.length;
                        for (l = 0; l < r; l++) {
                            var H = k[l];
                            if (H && (g = H.cubesize, 0 < g))
                                if (0 == D) K = 0.5 * (b - g), g = 0.5 * (c - g), t = 100 * l, H.layer.style[xa] = _[372] + -n + _[26] + q + _[88] + -p + _[47] + m + "deg) " + (0 < t ? _[363] + t + "," + t + "," + t + ") " : "") + _[91] + g + _[214] + K + "px)";
                                else {
                                    t = 1 + l;
                                    2 == D && (t *= 5);
                                    t = _[265] + b / 2 + "px," + c / 2 + _[187] + j + _[219] + q + _[264] + -n + _[26] + q + _[88] + -p + _[47] + m + _[249] + t + "," + t + "," + t + ") ";
                                    for (K = 0; 6 > K; K++) {
                                        var C = -g / 2,
                                            C = _[122] + d[K] + _[253] + (C - (H.canvassizes[K][0] - g) / 2) + "px," + (C - (H.canvassizes[K][1] - g) / 2) + "px," + C + "px) ",
                                            y = H.faces[K];
                                        y.style.position = _[0];
                                        y.style[xa + _[62]] = "0 0";
                                        y.style[xa] = t + C
                                    }
                                }
                        }
                    }
                };
                a.setpreview = function(b) {
                    a.previewcube = b;
                    ia || (a.layer.appendChild(b.layer), a.updateviewport());
                    c = !0
                };
                a.setpano = function(c) {
                    a.panocube = c;
                    ia || (a.layer.appendChild(c.layer), a.updateviewport());
                    b = !0
                }
            },
            df = function() {
                function a(a, b, c, d) {
                    this.tcnt = a;
                    this.vxd = b;
                    this.txd = c;
                    this.ixd = d;
                    this.ix = this.tx = this.vx = null
                }

                function b(a) {
                    var b = Oa;
                    b.bindBuffer(Nb, a.vx = b.createBuffer());
                    b.bufferData(Nb, new Float32Array(a.vxd), ed);
                    b.bindBuffer(Nb, a.tx = b.createBuffer());
                    b.bufferData(Nb, new Float32Array(a.txd), ed);
                    b.bindBuffer(bd, a.ix = b.createBuffer());
                    b.bufferData(bd, new Uint16Array(a.ixd), ed)
                }

                function c(b, c) {
                    var d = [],
                        e = [],
                        f = [];
                    if (isNaN(c) || 0 >= c) c = 1;
                    var k, h, m, g, s, D, H, C, y, t, A, v, B, z, F, u, x = [
                        [-1, 0, 0, 0, 1, 0, 0, 0, -1],
                        [0, 0, -1, 0, 1, 0, 1, 0, 0],
                        [1, 0, 0, 0, 1, 0, 0, 0, 1],
                        [0, 0, 1, 0, 1, 0, -1, 0, 0],
                        [0, -1, 0, 0, 0, -1, 1, 0, 0],
                        [0, 1, 0, 0, 0, 1, 1, 0, 0]
                    ];
                    for (k = 0; 6 > k; k++) {
                        C = x[k][0];
                        y = x[k][1];
                        t = x[k][2];
                        A = x[k][3];
                        v = x[k][4];
                        B = x[k][5];
                        z = x[k][6];
                        F = x[k][7];
                        u = x[k][8];
                        for (m = 0; m <= c; m++)
                            for (h = 0; h <= c; h++) g = h / c, s = m / c, e.push(g), e.push(s), g = 2 * (g - 0.5), s = 2 * (s - 0.5), D = C * g + y * s + t, H = A * g + v * s + B, g = z * g + F * s + u, d.push(b * D), d.push(b * H), d.push(b * g);
                        t = k * (c + 1) * (c + 1);
                        for (m = 0; m < c; m++)
                            for (h = 0; h < c; h++) D = t + h + m * (c + 1), H = D + 1, C = D + (c + 1), y = C + 1, f.push(D), f.push(H), f.push(C), f.push(H), f.push(y), f.push(C)
                    }
                    return new a(6 * c * c, d, e, f)
                }
                var d = this,
                    e = 0 | h._cubeOverlap,
                    f = [1, 3, 0, 2, 4, 5];
                d.layer = null;
                d.visible = !0;
                d.usecanvas = !0;
                d.canvassize = 0;
                d.cubesize = 0;
                d.imagesize = 0;
                d.canvassizes = [];
                d.cubesizes = [];
                d.tiled = !1;
                d.tilespl = 0;
                d.tilesize = 0;
                d.faces = Array(6);
                d.isloading = !0;
                d.loaddone = !1;
                d.cubestrip = !1;
                d.images = [];
                d.create = function(a) {
                    var e;
                    if (ia) d.obj || (e = a = null, null == za.obj0 ? (a = c(1E3, 1), e = c(1E3, 49), b(a), b(e), za.obj0 = a, za.obj = e) : (a = za.obj0, e = za.obj), d.obj0 = a, d.obj = e);
                    else {
                        if (!1 == rd && !0 == a && (!1 == d.tiled || 1 == d.tilespl)) d.usecanvas = !1;
                        var j = d.layer = U();
                        j.style.position = _[0];
                        j.style.pointerEvents = "none";
                        0 < Ia ? (j.style.width = "100%", j.style.height = "100%", j.style.overflow = _[4]) : j.style[sd] = _[30];
                        for (e = 0; 6 > e; e++) {
                            a = f[e];
                            var k = U(d.usecanvas ? 2 : 1);
                            k.width = 16;
                            k.height = 16;
                            k.style.overflow = _[4];
                            2 == Ia && (k.style.overflow = _[59], k.style.position = _[0], k.style.left = 0, k.style.top = 0, k.style[xa] = _[191], k.style.overflow = _[4]);
                            d.faces[a] = k;
                            d.usecanvas && !1 == pd && j.appendChild(k)
                        }
                    }
                    0 < d.imagesize && d.allocfaces()
                };
                d.destroy = function() {
                    if (ia) {
                        var a = Oa;
                        d.obj0 = null;
                        d.obj = null;
                        if (d.textures) {
                            var b, c;
                            for (b = 0; 6 > b; b++) c = d.textures[b], d.textures[b] = null, a.deleteTexture(c);
                            d.textures = null
                        }
                    }
                };
                d.loadtile = function(a, b, c, e) {
                    var f = null,
                        f = d.usecanvas ? U(1) : d.faces[a];
                    f.load = function() {};
                    f.side = a;
                    f.th = b;
                    f.tv = c;
                    f.url = e;
                    f.done = !1;
                    f.drawtile = d.drawtile;
                    x(f, "load", function() {
                        this.okay = !0
                    }, !1);
                    x(f, _[24], function() {
                        !0 !== this.okay && (this.done = !0, $(3, _[89] + this.url + _[105]))
                    }, !1);
                    f.src = e;
                    f.load(e);
                    d.images.push(f);
                    d.isloading = !0
                };
                var k = 0;
                d.drawtile = function() {
                    if (!ma.drawimagequeue.busy() && Wb != k) {
                        k = Wb;
                        Rb();
                        var a = 1 == this.side || 3 == this.side ? e : 0,
                            b = 3 >= this.side ? e : 0;
                        Db && (a = b = e);
                        if (!sa.drawtileimage(d, this.side, this)) {
                            var c = d.imagesize,
                                f = d.cubesize,
                                p = this.th,
                                q = this.tv,
                                n = d.faces[this.side].getContext("2d");
                            if (n)
                                if (ma.drawimagequeue.ctx = n, ma.drawimagequeue.image = this, n = ma.drawimagequeue.commands, !1 == d.tiled || 1 == d.tilespl)
                                    if (h._iOS6_canvas_bug) {
                                        p = 1;
                                        p = U(2);
                                        p.width = 1;
                                        p.height = c;
                                        p = p.getContext("2d");
                                        p.drawImage(this, 0, 0, 1, c, 0, 0, 1, c);
                                        for (var p = p.getImageData(0, 0, 1, c).data, q = 0, m = c, g = c; g > q;) 0 == p[4 * (g - 1) + 3] ? m = g : q = g, g = m + q >> 1;
                                        p = g / c;
                                        0 >= p && (p = 1);
                                        n.push(0, 0, c, c, a, b / p, f, f / p)
                                    } else n.push(0, 0, c, c, a, b, f, f);
                            else m = this.naturalWidth, g = this.naturalHeight, c = f / c, 1 == c ? n.push(0, 0, m, g, a + p * d.tilesize * c, b + q * d.tilesize * c, m * c, g * c) : n.push(0, 0, m, g, a + p * d.tilesize * c - 0.5, b + q * d.tilesize * c - 0.5, m * c + 1, g * c + 1)
                        }
                        this.done = !0
                    }
                };
                d.loadcubestrip = function(a) {
                    d.cubestrip = !0;
                    a = ya.parsePath(a);
                    var b = U(1);
                    b.url = a;
                    b.done = !1;
                    b.drawtile = d.drawcubestrip;
                    x(b, _[24], function() {
                        $(3, _[89] + this.url + _[105])
                    }, !1);
                    b.src = a;
                    d.images.push(b);
                    d.isloading = !0
                };
                d.drawcubestrip = function() {
                    var a = d.imagesize,
                        b = d.cubesize,
                        c = d.canvassize,
                        f = this.naturalWidth / a,
                        k = this.naturalHeight / a;
                    Rb();
                    var h = [0, 1, 2, 3, 4, 5];
                    d.striporder && (h = d.striporder);
                    var n, m, g;
                    for (m = 0; m < k; m++)
                        for (n = 0; n < f; n++) {
                            g = h[m * f + n];
                            if (ia) {
                                var s = U(2);
                                s.width = a;
                                s.height = a;
                                s.getContext("2d").drawImage(this, n * a, m * a, a, a, 0, 0, a, a)
                            } else {
                                var D = d.faces[g].getContext("2d");
                                if (D) {
                                    var H = 1 == g || 3 == g ? e : 0,
                                        C = 3 >= g ? e : 0;
                                    Db && (H = C = e);
                                    0 < e && (0 < C && (D.drawImage(this, n * a + 0, m * a + 0, a, 1, H, 0, a, C), D.drawImage(this, n * a + 0, m * a + a - 1, a, 1, H, c - C, a, C)), 0 < H && (D.drawImage(this, n * a + 0, m * a + 0, 1, a, 0, H, H, a), D.drawImage(this, n * a + a - 1, m * a + 0, 1, a, c - H, H, H, a)));
                                    D.drawImage(this, n * a, m * a, a, a, H, C, b, b)
                                }
                            }
                            sa.drawtileimage(d, g, s)
                        }
                    this.done = !0
                };
                d.setimagesize = function(a, b, c) {
                    if (d.cubestrip)
                        if (3 * a == 2 * b) a /= 2;
                        else if (2 * a == 3 * b) a /= 3;
                    else if (1 * a == 6 * b) a /= 6;
                    else if (6 * a == 1 * b) a /= 1;
                    else return c && $(2, _[161] + c.src + _[158]), !1;
                    d.imagesize = a;
                    return !0
                };
                d.allocfaces = function() {
                    if (ia) {
                        var a = d.imagesize;
                        d.canvassize = a;
                        d.cubesize = a;
                        d.canvassizes = [
                            [a, a],
                            [a, a],
                            [a, a],
                            [a, a],
                            [a, a],
                            [a, a]
                        ];
                        d.textures || (d.textures = [null, null, null, null, null, null])
                    } else {
                        var b = h.iphone && h.retina ? 800 : h.realDesktop ? 2560 : h.ipad || h.android || h.tablet ? 1024 : 600;
                        h.desktop && h.safari && (b = 2E3);
                        0 < ab && (b = ab);
                        h.ipod && h.retina && 640 < b && (b = 640);
                        var c = a = d.imagesize,
                            a = a + 2 * e;
                        a > b && (a = b, c = a - 2 * e);
                        2 == Ia && 0 != c % 256 && (e = 1, a += 2);
                        if (d.usecanvas && (h.chrome && !1 == h.webgl || 0 == Ia && a > (h.realDesktop ? 2E3 : 1024))) qd = !0;
                        d.canvassize = a;
                        d.cubesize = c;
                        var b = -(0.5 * c) + "px",
                            c = [0, 0, 0, 0, -90, 90],
                            f = [90, 0, -90, -180, 0, 0],
                            k, q = !h.realDesktop ? h.iosversion ? "3.2" > h.iosversion : !1 : !1;
                        for (k = 0; 6 > k; k++) {
                            var n = d.faces[k],
                                m = 1 == k || 3 == k ? 0 : e,
                                g = 3 >= k ? 0 : e;
                            Db && (m = g = 0);
                            if (!q || q && 0 < k) n.style.position = _[0];
                            n.width = a - 2 * m;
                            n.height = a - 2 * g;
                            d.canvassizes[k] = [n.width, n.height];
                            Db ? (n.style.left = -e + "px", n.style.top = -e + "px", n.style.width = a + "px", n.style.height = a + "px") : (n.style.left = "0px", n.style.top = "0px", n.style.width = n.width + "px", n.style.height = n.height + "px");
                            n.style[xa] = _[358] + c[k] + _[47] + f[k] + _[26] + b + ")"
                        }
                    }
                }
            },
            ef = function() {
                function a(a) {
                    var b = Ha,
                        c = oa;
                    return "VFOV" == a ? c : "HFOV" == a ? b : "DFOV" == a ? Math.sqrt(b * b + c * c) : Math.max(b, 4 * c / 3)
                }
                var b = this;
                b.haschanged = !1;
                var c = _[125].split(" "),
                    d = [_[359], _[248], _[401], _[162]],
                    e;
                for (e in c) Xa(b, c[e], 0);
                for (e in d) Xa(b, d[e], !1);
                Xa(b, _[400], "VFOV");
                b.defaults = function() {
                    b._hlookat = 0;
                    b._vlookat = 0;
                    b._architectural = 0;
                    b._architecturalonlymiddle = !1;
                    b._fov = 90;
                    b._fovtype = h.desktop ? "VFOV" : "MFOV";
                    b._camroll = 0;
                    b._maxpixelzoom = Number.NaN;
                    b._stereographic = !1;
                    b._pannini = !1;
                    b._fisheye = 0;
                    b._fisheyefovlink = 0.5;
                    b.fovmin = 50;
                    b.fovmax = 179;
                    b.r_zoom = 1;
                    b.r_yoff = 0;
                    b.r_zoff = 0;
                    b.haschanged = !1;
                    b.limitview = "auto";
                    b.hlookatmin = Number.NaN;
                    b.hlookatmax = Number.NaN;
                    b.vlookatmin = Number.NaN;
                    b.vlookatmax = Number.NaN
                };
                b.inverseProject = function(a, c) {
                    var d, e, f, h, q, n, m, g;
                    f = -1E3;
                    q = f / b.r_zoom;
                    d = (a - Ha / 2) * q;
                    e = (c - oa / 2 - b.r_yoff) * q;
                    q = 1 / Math.sqrt(d * d + e * e + f * f);
                    d *= q;
                    e *= q;
                    f *= q;
                    h = b.r_zoff;
                    if (0 < h) {
                        if (!1 == b._stereographic && (g = Math.atan(1E3 / h) / la - 1, (1 > -f ? Math.acos(-f) / la : 0) > g)) n = -e, m = d, q = n * n + m * m, 0 < q && (q = 1 / Math.sqrt(q), n *= q, m *= q), g *= la, q = Math.sin(g), d = q * m, e = -q * n, f = -Math.cos(g);
                        n = h * f;
                        m = n * n - (h * h - 1E6);
                        0 < m && (q = -n + Math.sqrt(m), d *= q, e *= q, f = f * q - -h, q = 1 / Math.sqrt(d * d + e * e + f * f), d *= q, e *= q, f *= q)
                    }
                    h = new ic;
                    h.x = d;
                    h.y = e;
                    h.z = f;
                    return h
                };
                var f = b.fovRemap = function(b, c, d) {
                    b = Math.tan(b / 360 * Na);
                    c = a(c);
                    d = a(d);
                    return b = 360 * Math.atan(b * d / c) / Na
                };
                b.screentosphere = function(a, c) {
                    var d = new ic,
                        e = b.inverseProject(a * F, c * F),
                        f, h = b.r_rmatrix;
                    f = h[0];
                    var m = h[1],
                        n = h[2],
                        s = h[4],
                        g = h[5],
                        t = h[6],
                        D = h[8],
                        H = h[9],
                        h = h[10],
                        C = 1 / (f * g * h + m * t * D + s * H * n - D * g * n - s * m * h - H * t * f);
                    f = Bc([(g * h - H * t) * C, (-m * h + H * n) * C, (m * t - g * n) * C, 0, (-s * h + D * t) * C, (f * h - D * n) * C, (-f * t + s * n) * C, 0, (s * H - D * g) * C, (-f * H + D * m) * C, (f * g - s * m) * C, 0, 0, 0, 0, 1]);
                    ld(f, e);
                    e = e.to_euler_xyz();
                    e.x *= -1;
                    e.y += 90;
                    180 < e.y && (e.y -= 360);
                    d.x = e.y;
                    d.y = e.x;
                    d.z = 0;
                    return d
                };
                b.spheretoscreen = function(a, c) {
                    var d = new ic,
                        e = (180 - a) * la,
                        f = c * la;
                    d.x = 1E3 * Math.cos(f) * Math.cos(e);
                    d.z = 1E3 * Math.cos(f) * Math.sin(e);
                    d.y = 1E3 * Math.sin(f);
                    ld(b.r_rmatrix, d);
                    e = d.z + b.r_zoff;
                    10 <= e ? (e = b.r_zoom / e, d.x = (d.x * e + 0.5 * Ha) / F, d.y = (d.y * e + 0.5 * oa) / F + b.r_yoff) : (d.x = Ud, d.y = Ud);
                    return d
                };
                b.updateView = function() {
                    var a = b._fov,
                        c = b._hlookat,
                        d = b._vlookat,
                        e = b._camroll,
                        m = h.webgl ? b._fisheye : 0,
                        p = b._fisheyefovlink,
                        q = b._stereographic,
                        n = 0;
                    a < b.fovmin && (a = b.fovmin);
                    a > b.fovmax && (a = b.fovmax);
                    179 < a && (a = 179);
                    if (0 < m) {
                        var t = f(a, b._fovtype, "VFOV");
                        q ? (170 < a && (a = 170), n = 1E3 * m * Math.sin(0.5 * Math.pow(Math.min(t / 130, 1), 2 * p) * Na), 1E3 < n && (n = 1E3)) : (m += Math.pow(Math.min(m, 1), 10) / 10, n = m * Math.sin(0.5 * Math.pow(t / 180, p) * Na), n = 3E3 * n * n)
                    }
                    var g = 0,
                        v = 0,
                        D = 0,
                        p = Number(b.hlookatmin),
                        t = Number(b.hlookatmax),
                        H = Number(b.vlookatmin),
                        C = Number(b.vlookatmax);
                    isNaN(H) && (H = -90);
                    isNaN(C) && (C = 90);
                    isNaN(p) && (p = -180);
                    isNaN(t) && (t = 180);
                    if (C < H) var y = H,
                        H = C,
                        C = y;
                    t < p && (y = p, p = t, t = y);
                    var y = t - p,
                        B = C - H,
                        F = !1,
                        x = !0,
                        G = 180;
                    switch (A(b.limitview)) {
                        case "off":
                        case _[23]:
                            y = 360;
                            p = -180;
                            t = 180;
                            H = -1E5;
                            C = 1E5;
                            break;
                        case "auto":
                            y = 360, p = -180, t = 180, H = -90, C = 90;
                        case _[449]:
                            break;
                        case _[367]:
                        case _[343]:
                            x = !1;
                        case "range":
                            360 > y && (F = !0), D = f(a, b._fovtype, "HFOV"), D > y && (D = y, x && (a = f(D, "HFOV", b._fovtype))), g = f(a, b._fovtype, "VFOV"), g > B && (g = B, x && (a = f(g, "VFOV", b._fovtype))), G = g, v = g *= 0.5, D *= 0.5, -89.9 >= H && (g = 0), 89.9 <= C && (v = 0)
                    }
                    d - g < H ? (d = H + g, Ca.stopFrictions(2)) : d + v > C && (d = C - v, Ca.stopFrictions(2));
                    F && (D = -d * la, v = 0.5 * Ha, g = 0.5 * oa, G = g / Math.tan(0.5 * G * la), 0 < D && (g = -g), v = 1 / Math.sqrt(1 + (v * v + g * g) / (G * G)), g = g / G * v, G = Math.acos(-v * Math.sin(D) + g * Math.cos(D)) - Na / 2, isNaN(G) && (G = -Na / 2), v = Math.acos((v * Math.cos(D) + g * Math.sin(D)) / Math.sin(G + Na / 2)), isNaN(v) && (v = 0), D = 180 * v / Na, 2 * D >= y && (x && (D = f(y, "HFOV", b._fovtype), D < a && (a = D)), D = y / 2));
                    360 > y && (y = !1, c - D < p ? (c = p + D, y = !0) : c + D > t && (c = t - D, y = !0), y && (Ca.stopFrictions(1), 0 != na.currentmovingspeed && (na.currentmovingspeed = 0, na.speed *= -1)));
                    b._fov = a;
                    b._hlookat = c;
                    b._vlookat = d;
                    a = f(a, b._fovtype, "MFOV");
                    0 < m && !1 == q ? (t = f(a, "MFOV", "VFOV"), m = Math.asin(1E3 * Math.sin(0.5 * t * la) / (1E3 + 0.72 * n)), m = 0.5 * oa / Math.tan(m)) : m = 0.5 * Hc / Math.tan(a / 114.591559);
                    b.hfov = f(a, "MFOV", "HFOV");
                    b.r_fov = a;
                    b.r_zoom = m;
                    b.r_zoff = n;
                    b.r_vlookat = d;
                    q = Number(b._architectural);
                    0 < q ? (!1 == b._architecturalonlymiddle && (p = Math.abs(d / 90), 1 < p && (p = 1), p = Math.tan(0.25 * p * Na), q *= 1 - p), b.r_yoff = q * (-d * (oa / Math.tan(f(a, "MFOV", "VFOV") / 114.591559)) / 90), d *= 1 - q) : b.r_yoff = 0;
                    b.r_rmatrix = Sd(c - 90, -d, e);
                    c = Math.floor(1E6 * c) / 1E6;
                    d = Math.floor(1E6 * d) / 1E6;
                    e = Math.floor(1E6 * e) / 1E6;
                    b.r_hlookat = c;
                    b.r_vlookatA = d;
                    b.r_roll = e;
                    a = !1 == h.realDesktop && h.ios && "5" > h.iosversion || h.androidstock || Db ? "" : "px";
                    jc = !1 == h.simulator && (h.iphone || h.ipad) ? 0.25 : 1;
                    h.ie && (jc = 5);
                    if (h.androidstock || h.android && h.chrome || h.blackberry) jc = s.r_zoom / 1E3 / 4;
                    Td = _[269] + m + a + _[323] + -e + _[26] + (m - jc * (n / 2)) + "px) ";
                    b.haschanged = !1
                };
                b.getState = function() {
                    return {
                        h: b._hlookat,
                        v: b.r_vlookatA,
                        z: b.r_zoom,
                        r: b._camroll,
                        zf: b.r_zoff,
                        yf: b.r_yoff,
                        ch: b._pannini ? 1 : 0,
                        vr: null
                    }
                };
                b.defaults()
            },
            ff = function() {
                var a = this;
                a.defaults = function() {
                    a.usercontrol = "all";
                    a.mousetype = _[37];
                    a.touchtype = _[455];
                    a.mouseaccelerate = 1;
                    a.mousespeed = 10;
                    a.mousefriction = 0.8;
                    a.mouseyfriction = 1;
                    a.mousefovchange = 1;
                    a.keybaccelerate = 0.5;
                    a.keybspeed = 10;
                    a.keybfriction = 0.9;
                    a.keybfovchange = 0.75;
                    a.keybinvert = !1;
                    a.fovspeed = 3;
                    a.fovfriction = 0.9;
                    a.camrollreset = !0;
                    a.keycodesleft = "37";
                    a.keycodesright = "39";
                    a.keycodesup = "38";
                    a.keycodesdown = "40";
                    a.keycodesin = "";
                    a.keycodesout = "";
                    a.touchfriction = 0.87;
                    a.zoomtocursor = !1;
                    a.zoomoutcursor = !0;
                    a.disablewheel = !1
                };
                a.defaults()
            },
            gf = function() {
                var a = this;
                a.haschanged = !1;
                a.mode = _[42];
                a.pixelx = 0;
                a.pixely = 0;
                a.pixelwidth = 0;
                a.pixelheight = 0;
                Xa(a, _[42], _[58]);
                Xa(a, "x", "0");
                Xa(a, "y", "0");
                Xa(a, _[44], "100%");
                Xa(a, _[39], "100%");
                Xa(a, "left", "0");
                Xa(a, "top", "0");
                Xa(a, _[2], "0");
                Xa(a, _[1], "0");
                a.calc = function(b, c) {
                    var d = 1 / F,
                        e = _[63] == A(a.mode),
                        f = e ? a._left : a._x,
                        h = e ? a._top : a._y,
                        l = e ? a._right : a._width,
                        m = e ? a._bottom : a._height,
                        f = 0 < f.indexOf("%") ? parseFloat(f) / 100 * b * d : Number(f),
                        l = 0 < l.indexOf("%") ? parseFloat(l) / 100 * b * d : Number(l),
                        h = 0 < h.indexOf("%") ? parseFloat(h) / 100 * c * d : Number(h),
                        m = 0 < m.indexOf("%") ? parseFloat(m) / 100 * c * d : Number(m),
                        f = f / d,
                        h = h / d,
                        l = l / d,
                        m = m / d;
                    e ? (l = b - f - l, m = c - h - m) : (e = A(a._align), 0 <= e.indexOf("left") || (f = 0 <= e.indexOf(_[2]) ? b - l - f : (b - l) / 2 + f), 0 <= e.indexOf("top") || (h = 0 <= e.indexOf(_[1]) ? c - m - h : (c - m) / 2 + h));
                    a.pixelx = Math.round(f * d);
                    a.pixely = Math.round(h * d);
                    e = !1;
                    f = Math.round(l);
                    l = Math.round(m);
                    if (Ha != f || oa != l) e = !0, Ha = f, oa = l;
                    a.pixelwidth = f * d;
                    a.pixelheight = l * d;
                    a.haschanged = !1;
                    return e
                }
            },
            xc = function() {
                function a() {
                    var a = Number(g._alpha);
                    g.sprite && (_[11] == g._type && (a *= Ec), g.sprite.style.opacity = a);
                    g.autoalpha && (a = 0 < a, a != g._visible && (g.visible = a))
                }

                function b() {
                    if (g.sprite && null != g._zorder) {
                        var a = parseInt(g._zorder);
                        !isNaN(a) && 0 <= a ? (g.sprite.style.zIndex = C + a, g._zdeep = a, g._deepscale = 100 / (200 + a)) : (g._zdeep = 0, g._deepscale = 0.5)
                    }
                }

                function c() {
                    g.sprite && (g.sprite.style.overflow = g._maskchildren ? _[4] : _[59])
                }

                function d(a, b) {
                    b && (b = a._enabled) && _[13] == a.type && (b = !1 != a.bgcapture);
                    a._enabledstate = b;
                    var c = a.sprite.style;
                    c.cursor = b && a._handcursor ? _[36] : _[22];
                    c.pointerEvents = b ? "auto" : "none";
                    if (c = a._childs) {
                        var e, f, g;
                        f = c.length;
                        for (e = 0; e < f; e++)(g = c[e]) && g.sprite && d(g, b)
                    }
                }

                function e() {
                    if (g.sprite) {
                        var a = g._enabled;
                        H && (a = g.bgcapture);
                        if (a && g._parent) a: {
                            for (a = f(g._parent); a;) {
                                if (!1 == a._enabled || !1 == a.children) {
                                    a = !1;
                                    break a
                                }
                                if (a._parent) a = f(a._parent);
                                else break
                            }
                            a = !0
                        }
                        a != g._enabledstate && d(g, a)
                    }
                }

                function f(a) {
                    var b = null;
                    if (a) {
                        var b = a = A(a),
                            c = Ba,
                            d = a.indexOf("[");
                        0 < d && (b = a.slice(0, d), _[11] == b && (c = Qa), a = a.slice(d + 1, a.indexOf("]")));
                        if ("stage" == b) return null == Za.sprite && (Za.sprite = G.viewerlayer, Za.loaded = !0), Za;
                        if (_[394] == b) return null == $a.sprite && (a = U(), b = a.style, b.position = _[0], b.width = "100%", b.height = "100%", b.overflow = _[4], b.zIndex = "0", b.pointerEvents = "none", G.controllayer.parentNode.insertBefore(a, G.controllayer), $a.sprite = a, $a.loaded = !0), $a;
                        b = c.getItem(a)
                    }
                    return b
                }

                function k(a) {
                    if (g._parent != a) {
                        if (g._parent) {
                            var b = f(g._parent);
                            if (b) {
                                var c = b._childs;
                                if (c) {
                                    var d, h;
                                    h = c.length;
                                    for (d = 0; d < h; d++)
                                        if (c[d] === g) {
                                            c.splice(d, 1);
                                            h--;
                                            break
                                        }
                                    0 == h && (c = null);
                                    b._childs = c;
                                    b.poschanged = !0
                                }
                            }
                        }
                        a && ((b = f(a)) ? b.sprite ? (null == b._childs && (b._childs = []), b._use_css_scale = !1, g._use_css_scale = !1, b._childs.push(g), b.sprite.appendChild(g.sprite), b.poschanged = !0) : setTimeout(function() {
                            g._parent = null;
                            k(a)
                        }, 16) : a = null);
                        null == a && G.pluginlayer.appendChild(g.sprite);
                        g._parent = a;
                        g.poschanged = !0;
                        e()
                    }
                }

                function l() {
                    var a = this.kobject;
                    a && !1 == D && (a = a.url, 0 < A(a).indexOf(".swf") ? $(2, g._type + "[" + g.name + _[72] + Qb(a)) : $(3, g._type + "[" + g.name + _[203] + a))
                }

                function r(a) {
                    if (u && (O(t, a.type, r, !0), _[3] == a.type ? (B.body.style.webkitUserSelect = B.body.style.backupUserSelect, O(t, _[8], j, !0), O(t, _[3], r, !0)) : (O(t, h.browser.events.touchmove, j, !0), O(t, h.browser.events.touchend, r, !0)), u.pressed)) {
                        u.pressed = !1;
                        if (u._ondowncrop || u._onovercrop) u.hovering && u._onovercrop ? K(u, u._onovercrop) : K(u, u._crop);
                        Q.callaction(u.onup, u);
                        E || Q.blocked || Q.callaction(u.onclick, u)
                    }
                }

                function j(a, b) {
                    var c = a.changedTouches && 0 < a.changedTouches.length ? a.changedTouches[0] : a,
                        d = c.pageX,
                        c = c.pageY;
                    !0 === b ? M = [d, c] : M ? (d -= M[0], c -= M[1], 4 < d * d + c * c && (E = !0)) : (M = null, O(t, a.type, j, !0))
                }

                function s(a, b) {
                    var c = a.timeStamp | 0,
                        d = !0;
                    switch (a.type) {
                        case _[27]:
                        case _[7]:
                        case _[14]:
                            if (!0 == b && (c = _[13] == u.type, (u._enabled && !c || c && u.bgcapture) && u._handcursor)) g.sprite.style.cursor = _[36];
                            c = u.sprite;
                            for (d = 0; c;) {
                                var e = c.kobject;
                                if (e) {
                                    if (!1 == e._enabled || 0 < d && !1 == e.children) return;
                                    d++;
                                    c = c.parentNode
                                } else break
                            }
                            for (d = u.sprite; d;) {
                                if (e = d.kobject) !1 == e.hovering && (e.hovering = !0, !1 == e.pressed && e._onovercrop && K(e, e._onovercrop), Q.blocked || Q.callaction(e.onover, e));
                                else break;
                                d = d.parentNode
                            }
                            break;
                        case _[19]:
                        case _[5]:
                        case _[9]:
                            for (c = (d = a.relatedTarget) ? d.kobject : null; d && null == c;)
                                if (d = d.parentNode) c = d.kobject;
                                else break;
                            for (d = u.sprite; d;) {
                                if (e = d.kobject) {
                                    for (var f = !1, k = c; k;) {
                                        if (e == k) {
                                            f = !0;
                                            break
                                        }
                                        if (k.sprite && k.sprite.parentNode) k = k.sprite.parentNode.kobject;
                                        else break
                                    }
                                    if (!1 == f) !0 == e.hovering && (e.hovering = !1, !1 == e.pressed && e._onovercrop && K(e, e._crop), Q.callaction(e.onout, e));
                                    else break
                                } else break;
                                d = d.parentNode
                            }
                            break;
                        case _[6]:
                            if (500 < c && 500 > c - Cb) {
                                Cb = 0;
                                break
                            }
                            if (d = 0 == (a.button | 0)) B.body.style.backupUserSelect = B.body.style.webkitUserSelect, B.body.style.webkitUserSelect = "none", j(a, !0), x(t, _[3], r, !0), x(t, _[8], j, !0), E = !1, u.pressed = !0, u._ondowncrop && K(u, u._ondowncrop), Q.blocked || Q.callaction(u.ondown, u);
                            break;
                        case h.browser.events.touchstart:
                            Cb = c;
                            if (Ca.isMultiTouch()) break;
                            E = !1;
                            if (d = 0 == (a.button | 0)) j(a, !0), x(t, h.browser.events.touchend, r, !0), x(t, h.browser.events.touchmove, j, !0), u.pressed = !0, u._ondowncrop && K(u, u._ondowncrop), Q.blocked || Q.callaction(u.ondown, u)
                    }
                }

                function p(a, b) {
                    if (a === b) return !1;
                    for (; b && b !== a;) b = b.parentNode;
                    return b === a
                }

                function q(a) {
                    Ra = ga();
                    var b = a.type;
                    if (!(_[6] == b || b == h.browser.events.touchstart) || !Q.isblocked()) {
                        var c = a.target.kobject;
                        _[27] == b ? b = _[7] : _[19] == b && (b = _[5]);
                        null == c && (c = g);
                        if ((!(_[7] == b || _[5] == b) || 4 == a.pointerType || _[68] == a.pointerType) && c) {
                            var c = a.timeStamp,
                                d = g._eP;
                            c != g._eT && (d = 0);
                            if (_[14] == b || _[7] == b) {
                                var f = a.relatedTarget;
                                if (this === f || p(this, f)) return
                            } else if (_[9] == b || _[5] == b)
                                if (f = a.relatedTarget, this === f || p(this, f)) return;
                            0 == c && (_[14] == b && !1 == g.hovering ? d = 0 : _[9] == b && !0 == g.hovering && (d = 0));
                            if (g._enabled && !H || H && g.bgcapture) {
                                if (!1 == g.children && a.stopPropagation(), 0 == d && (!1 == g.children && 1 == a.eventPhase || 2 <= a.eventPhase)) d = 1, g.jsplugin && g.jsplugin.hittest && (b = G.getMousePos(a.changedTouches ? a.changedTouches[0] : a, g.sprite), g.jsplugin.hittest(b.x * g.imagewidth / g.pixelwidth, b.y * g.imageheight / g.pixelheight) || (d = 2)), 1 == d && (u = g, s(a), g.capture && (null == g.jsplugin && va(a), a.stopPropagation()))
                            } else if (!1 == h.pointerEvents && (B.msElementsFromPoint && 0 == d && 2 == a.eventPhase) && (f = a.type, _[6] == f || _[3] == f || _[14] == f || _[9] == f || _[27] == f || _[19] == f || _[7] == f || _[5] == f || f == h.browser.events.touchstart || f == h.browser.events.touchend))
                                if (b = B.msElementsFromPoint(a.clientX, a.clientY)) {
                                    (_[9] == f || _[19] == f || _[5] == f) && e();
                                    for (f = 0; f < b.length; f++) {
                                        var k = b[f].kobject ? b[f].kobject : null;
                                        if (k) {
                                            var l = _[13] == k.type;
                                            if (!0 == (k._enabled && !l || l && k.bgcapture))
                                                if (d = 1, u = k, s(a, !0), k.capture) {
                                                    null == g.jsplugin && va(a);
                                                    a.stopPropagation();
                                                    break
                                                }
                                        } else break
                                    }
                                }
                            g._eT = c;
                            g._eP = d
                        }
                    }
                }

                function n() {
                    if (g.sprite) {
                        var a = Number(g._bgcolor),
                            b = Number(g._bgalpha);
                        isNaN(a) && (a = 0);
                        isNaN(b) && (b = 0);
                        0 == b ? g.sprite.style.background = "none" : g.sprite.style.backgroundColor = ja(a, b)
                    }
                }

                function K(a, b) {
                    var c = 0,
                        d = 0,
                        e = a.loader;
                    e && (c = e.naturalWidth, d = e.naturalHeight);
                    b && (b = String(b).split("|"), 4 == b.length && (c = b[2], d = b[3]));
                    null == a.jsplugin && !1 == a._isNE() && (a.imagewidth = c, a.imageheight = d, e = a._gOSF(), e & 1 && (a._width = String(c)), e & 2 && (a._height = String(d)));
                    a.updatepos()
                }
                var g = this;
                g.prototype = Tb;
                this.prototype.call(this);
                g._type = _[41];
                g.layer = g.plugin = new Ya(xc);
                g.createvar = function(a, b, c) {
                    var d = "_" + a;
                    g[d] = void 0 === b ? null : b;
                    g.__defineGetter__(a, function() {
                        return g[d]
                    });
                    void 0 !== c ? g.__defineSetter__(a, function(a) {
                        g[d] = a;
                        c()
                    }) : g.__defineSetter__(a, function(a) {
                        g[d] = a;
                        g.poschanged = !0
                    })
                };
                var E = !1,
                    D = !1,
                    H = !1,
                    C = 0,
                    y = 3,
                    aa = !1;
                g._isNE = function() {
                    return D
                };
                g._gOSF = function() {
                    return y
                };
                g.sprite = null;
                g.loader = null;
                g.jsplugin = null;
                g._use_css_scale = !1;
                g._finalxscale = 1;
                g._finalyscale = 1;
                g._eT = 0;
                g._eP = 0;
                g._pCD = !1;
                g.__defineGetter__("type", function() {
                    return _[49] == g.url ? _[13] : _[43]
                });
                g.__defineSetter__("type", function(a) {
                    _[13] == A(a) && (g.url = _[49])
                });
                g.imagewidth = 0;
                g.imageheight = 0;
                g.pixelwidth = 0;
                g.pixelheight = 0;
                g._pxw = 0;
                g._pxh = 0;
                g.pressed = !1;
                g.hovering = !1;
                g.loading = !1;
                g.loaded = !1;
                g.loadedurl = null;
                g.loadingurl = null;
                g.preload = !1;
                g.keep = !1;
                g.poschanged = !1;
                g.style = null;
                g.capture = !0;
                g.children = !0;
                g.autoalpha = !1;
                g._deepscale = 0.5;
                g._zdeep = 0;
                g.accuracy = 0;
                g._dyn = !1;
                g.onloaded = null;
                g.altonloaded = null;
                var J = g.createvar,
                    I = function(a, b) {
                        var c = "_" + a;
                        g[c] = null;
                        g.__defineGetter__(a, function() {
                            return g[c]
                        });
                        g.__defineSetter__(a, b)
                    };
                J(_[392], !0, e);
                J(_[329], !0, e);
                J(_[272], !1, c);
                J(_[377], null, function() {
                    var a = g._jsborder;
                    0 >= parseInt(a) && (g._jsborder = a = null);
                    g.sprite && (g.sprite.style.border = a);
                    null != a && (g._use_css_scale = !1)
                });
                J(_[452], null, function() {
                    if (null != g.sprite) {
                        var a = g._alturl;
                        g._alturl = null;
                        g.url = a
                    }
                });
                J("url", null, function() {
                    if ("" == g._url || "null" == g._url) g._url = null;
                    null != g._url ? g.reloadurl() : (g.jsplugin && g.jsplugin.unloadplugin && g.jsplugin.unloadplugin(), g.jsplugin = null, g.loadedurl = null, g.loadingurl = null, g.loading = !1, g.loaded = !1)
                });
                J("scale", 1);
                J(_[242], !1, function() {
                    aa = !0
                });
                J(_[122], 0);
                J("alpha", 1, a);
                J(_[448], null, b);
                J(_[59], !0, function() {
                    g.sprite && (!1 == g._visible ? g.sprite.style.display = "none" : g.poschanged = !0)
                });
                J("crop", null, function() {
                    K(g, g._crop)
                });
                g._childs = null;
                g._parent = null;
                g.__defineGetter__(_[118], function() {
                    return g._parent
                });
                g.__defineSetter__(_[118], function(a) {
                    if (null == a || "" == a || "null" == A(a)) a = null;
                    g.sprite ? k(a) : g._parent = a
                });
                for (var P = [_[42], "edge", _[330], _[325]], z = 0; z < P.length; z++) J(P[z]);
                I(_[44], function(a) {
                    0 == 0 * parseFloat(a) ? y &= 2 : a && "prop" == a.toLowerCase() ? (a = "prop", y &= 2) : (a = null, y |= 1);
                    g._width = a;
                    g.poschanged = !0
                });
                I(_[39], function(a) {
                    0 == 0 * parseFloat(a) ? y &= 1 : a && "prop" == a.toLowerCase() ? (a = "prop", y &= 1) : (a = null, y |= 2);
                    g._height = a;
                    g.poschanged = !0
                });
                I("x", function(a) {
                    0 != 0 * parseFloat(a) && (a = null);
                    g._x = a;
                    g.poschanged = !0
                });
                I("y", function(a) {
                    0 != 0 * parseFloat(a) && (a = null);
                    g._y = a;
                    g.poschanged = !0
                });
                I("ox", function(a) {
                    0 != 0 * parseFloat(a) && (a = null);
                    g._ox = a;
                    g.poschanged = !0
                });
                I("oy", function(a) {
                    0 != 0 * parseFloat(a) && (a = null);
                    g._oy = a;
                    g.poschanged = !0
                });
                g.loadstyle = function(a) {
                    null == a && (a = g.style);
                    if (a) {
                        g.style = a;
                        a = a.split("|");
                        var b, c;
                        c = a.length;
                        for (b = 0; b < c; b++) {
                            var d = N(_[444] + a[b] + "]");
                            if (d)
                                for (var e in d) {
                                    var f = A(e);
                                    if ("name" != f && "index" != f && "_type" != f) {
                                        var h = d[e];
                                        _[10] !== typeof h && (g[f] = _[57] == typeof g[f] ? Fa(h) : h)
                                    }
                                }
                        }
                    }
                };
                g.getmouse = function(a) {
                    var b = 0,
                        c = 0;
                    if (_[33] != typeof WebKitPoint) c = new WebKitPoint, c.x = v.x, c.y = v.y, c = t.webkitConvertPointFromNodeToPage(G.controllayer, c), c = t.webkitConvertPointFromPageToNode(g.sprite, c), b = c.x, c = c.y;
                    else var c = G.controllayer,
                        d = g.sprite,
                        e = c.getBoundingClientRect(),
                        f = d.getBoundingClientRect(),
                        b = v.x - f.left - d.clientLeft + e.left + c.clientLeft,
                        c = v.y - f.top - d.clientTop + e.top + c.clientTop;
                    a && (b = b * g.imagewidth / g.pixelwidth, c = c * g.imageheight / g.pixelheight);
                    return {
                        x: b,
                        y: c
                    }
                };
                g.create = function() {
                    g._pCD = !0;
                    g.alturl && (g.url = g.alturl, g._alturl = null);
                    g.altscale && (g.scale = g.altscale, delete g.altscale);
                    var d = g.sprite = U(),
                        f = g.loader = U(1);
                    d.kobject = g;
                    f.kobject = g;
                    d.style.display = "none";
                    d.style.position = _[0];
                    C = _[41] == g._type ? 3001 : 2001;
                    d.style.zIndex = C;
                    c();
                    e();
                    a();
                    b();
                    g._jsborder && (g.jsborder = g._jsborder);
                    Ca.touch && (x(d, h.browser.events.touchstart, q, !0), x(d, h.browser.events.touchstart, q, !1));
                    Ca.mouse && (x(d, _[6], q, !0), x(d, _[6], q, !1));
                    if (h.desktop && (Ca.mouse || h.ie)) !1 == Ca.mouse && h.ie ? (x(d, h.browser.events.pointerover, q, !0), x(d, h.browser.events.pointerover, q, !1), x(d, h.browser.events.pointerout, q, !0), x(d, h.browser.events.pointerout, q, !1)) : (x(d, _[14], q, !0), x(d, _[14], q, !1), x(d, _[9], q, !0), x(d, _[9], q, !1));
                    x(f, _[24], l, !0);
                    x(f, "load", g.loadurl_done, !1);
                    if (d = g._parent) g._parent = null, k(d);
                    null != g._url && g.reloadurl()
                };
                g.destroy = function() {
                    g.jsplugin && g.jsplugin.unloadplugin && g.jsplugin.unloadplugin();
                    g.jsplugin = null;
                    g.loaded = !1;
                    g._destroyed = !0;
                    g.parent = null;
                    var a = g._childs;
                    if (a) {
                        var b, c, a = a.slice();
                        c = a.length;
                        for (b = 0; b < c; b++) a[b].parent = null;
                        g._childs = null
                    }
                };
                g.getfullpath = function() {
                    return g._type + "[" + g.name + "]"
                };
                g.changeorigin = function() {
                    var a = arguments,
                        b = null,
                        c = null;
                    if (0 < a.length) {
                        var d = null,
                            e = 0,
                            h = 0,
                            k = 0,
                            l = 0,
                            j = F,
                            n = Ha / j,
                            m = oa / j,
                            p = g._parent;
                        if (p && (p = f(p))) !1 == g._use_css_scale ? (n = p._pxw * j, m = p._pxh * j) : (n = p.imagewidth * j, m = p.imageheight * j);
                        j = g.imagewidth;
                        p = g.imageheight;
                        b = 0;
                        d = String(g._width);
                        "" != d && null != d && (0 < d.indexOf("%") ? j = parseFloat(d) / 100 * n : "prop" == d.toLowerCase() ? b = 1 : j = d);
                        d = String(g._height);
                        "" != d && null != d && (0 < d.indexOf("%") ? p = parseFloat(d) / 100 * m : "prop" == d.toLowerCase() ? b = 2 : p = d);
                        1 == b ? j = p * g.imagewidth / g.imageheight : 2 == b && (p = j * g.imageheight / g.imagewidth);
                        b = c = A(a[0]);
                        1 < a.length && (c = A(a[1]));
                        var a = String(g._align),
                            q = g._edge ? A(g._edge) : "null";
                        if ("null" == q || _[442] == q) q = a;
                        (d = String(g._x)) && (e = 0 < d.indexOf("%") ? parseFloat(d) / 100 * n : parseFloat(d));
                        isNaN(e) && (e = 0);
                        (d = String(g._y)) && (h = 0 < d.indexOf("%") ? parseFloat(d) / 100 * m : parseFloat(d));
                        isNaN(h) && (h = 0);
                        if (d = a) k = 0 <= d.indexOf("left") ? 0 + e : 0 <= d.indexOf(_[2]) ? n - e : n / 2 + e, l = 0 <= d.indexOf("top") ? 0 + h : 0 <= d.indexOf(_[1]) ? m - h : m / 2 + h;
                        1 != g._scale && (j *= g._scale, p *= g._scale);
                        k = 0 <= q.indexOf("left") ? k + 0 : 0 <= q.indexOf(_[2]) ? k + -j : k + -j / 2;
                        l = 0 <= q.indexOf("top") ? l + 0 : 0 <= q.indexOf(_[1]) ? l + -p : l + -p / 2;
                        d = a = 0;
                        a = 0 <= b.indexOf("left") ? 0 + e : 0 <= b.indexOf(_[2]) ? n - e : n / 2 + e;
                        d = 0 <= b.indexOf("top") ? 0 + h : 0 <= b.indexOf(_[1]) ? m - h : m / 2 + h;
                        a = 0 <= c.indexOf("left") ? a + 0 : 0 <= c.indexOf(_[2]) ? a + -j : a + -j / 2;
                        d = 0 <= c.indexOf("top") ? d + 0 : 0 <= c.indexOf(_[1]) ? d + -p : d + -p / 2;
                        g._align = b;
                        g._edge = c;
                        g._x = 0 <= b.indexOf(_[2]) ? String(e + a - k) : String(e - a + k);
                        g._y = 0 <= b.indexOf(_[1]) ? String(h + d - l) : String(h - d + l)
                    }
                };
                g.resetsize = function() {
                    g.loaded && (g._width = String(g.imagewidth), g._height = String(g.imageheight), y = 3, g.poschanged = !0)
                };
                g.registercontentsize = function(a, b) {
                    null != a && (g.imagewidth = Number(a), y & 1 && (g._width = String(a)));
                    null != b && (g.imageheight = Number(b), y & 2 && (g._height = String(b)));
                    g.poschanged = !0
                };
                var M = null,
                    u = null;
                g.reloadurl = function() {
                    if (g.sprite) {
                        var a = ya.parsePath(g.url);
                        if (g.loading) {
                            if (g.loadingurl == a) return;
                            g.loader.kobject = null;
                            O(g.loader, _[24], l, !0);
                            O(g.loader, "load", g.loadurl_done, !1);
                            g.loader.src = null;
                            g.loader = U(1);
                            g.loader.kobject = g;
                            x(g.loader, _[24], l, !0);
                            x(g.loader, "load", g.loadurl_done, !1)
                        }
                        if (g.loadedurl != a)
                            if (D = !1, g.loadedurl = null, _[49] == a) H = D = !0, g.loader.src = null, g.loadedurl = a, g.createvar(_[404], g.bgcolor ? Number(g.bgcolor) : 0, n), g.createvar(_[405], g.bgalpha ? Number(g.bgalpha) : 0, n), g.createvar(_[348], Fa(g.bgcapture), e), e(), n(), g.jsplugin = {
                                onresize: function(a, b) {
                                    a = g.pixelwidth;
                                    b = g.pixelheight;
                                    g.imagewidth = a / g.scale;
                                    g.imageheight = b / g.scale;
                                    aa = !0;
                                    return !1
                                }
                            }, g.loadurl_done();
                            else if (0 <= a.indexOf(_[241])) {
                            D = !0;
                            g.loader.src = null;
                            g.loadedurl = a;
                            var b = new hf;
                            b.registerplugin(m, g.getfullpath(), g);
                            g.jsplugin = b;
                            !1 == g._dyn ? (b.updatehtml(), g.loadurl_done()) : setTimeout(function() {
                                b.updatehtml();
                                g.loadurl_done()
                            }, 7)
                        } else 0 <= a.indexOf(".js") ? (D = !0, g.loader.src = null, ya.loadfile2(a, _[227], function(b) {
                            g.loadedurl = a;
                            b = b.data;
                            if (null != b) {
                                var c = 'the file "' + a + '" is not a krpano plugin!';
                                try {
                                    eval(b + ";")
                                } catch (d) {
                                    c = 'parsing "' + a + '" failed: ' + d
                                }
                                _[10] == typeof krpanoplugin ? (b = new krpanoplugin, b.registerplugin(m, g.getfullpath(), g), g._nativeelement = !0, g.jsplugin = b, g.loadurl_done()) : $(3, c)
                            }
                        })) : A(a).indexOf(".swf") == a.length - 4 ? $(2, g._type + "[" + g.name + _[72] + Qb(a)) : g.loader.src != a && (g.loaded && g.preload && (g.preload = !1, g.onloaded = null), g.loading = !0, g.loaded = !1, g.loadingurl = a, g.loader.src = a)
                    }
                };
                g.loadurl_done = function() {
                    if (!0 != g._destroyed) {
                        !1 == D && (g.sprite.style.backgroundImage = 'url("' + g.loader.src + '")');
                        K(g, g._crop);
                        g.loading = !1;
                        aa = g.loaded = !0;
                        !1 == D && (g.loadedurl = g.loadingurl);
                        g.poschanged = !0;
                        !1 == (h.iphone && h.retina) && (null == g.jsborder && !1 == D && null == g.parent && null == g._childs) && (g._use_css_scale = !0);
                        if (!1 == h.realDesktop && "5" > h.iosversion && (1 == (g.imagewidth & 1) || 1 == (g.imageheight & 1))) g._use_css_scale = !1;
                        g._busyonloaded = Q.busy || Q.blocked;
                        g._busyonloaded && Q.callaction(_[160], g, !0);
                        Q.callaction(null != g.altonloaded ? g.altonloaded : g.onloaded, g, !0)
                    }
                };
                var R = null;
                g.updatepluginpos = g.updatepos = function() {
                    var a = _[11] == g._type;
                    g.poschanged = !1;
                    var b = g.sprite,
                        c = g.loader;
                    if (b && (c || !1 != D)) {
                        var d = g._align,
                            e = g._scale;
                        d || (d = _[58]);
                        var k = g._use_css_scale,
                            j = g.imagewidth,
                            l = g.imageheight,
                            n = !1,
                            m = g._crop;
                        g.pressed && g._ondowncrop ? m = g._ondowncrop : g.hovering && g._onovercrop && (m = g._onovercrop);
                        m && (m = String(m).split("|"), 4 == m.length ? (m[0] |= 0, m[1] |= 0, m[2] |= 0, m[3] |= 0) : m = null);
                        var p = g.scale9grid;
                        p && (p = String(p).split("|"), 4 <= p.length ? (p[0] |= 0, p[1] |= 0, p[2] |= 0, p[3] |= 0, k = g._use_css_scale = !1, g._scalechildren = !1) : p = null);
                        var q = F,
                            r = Ha,
                            s = oa;
                        a && g.distorted && (q = 1, r = s = 1E3);
                        var C = 1,
                            t = 1,
                            u = g._parent,
                            H = !0;
                        if (u) {
                            var y = f(u);
                            y ? (y.poschanged && y.updatepos(), !1 == k ? (r = y._pxw * q, s = y._pxh * q) : (r = y.imagewidth * q, s = y.imageheight * q), y._scalechildren ? (C = r / q / y.imagewidth, t = s / q / y.imageheight) : (C *= y._finalxscale, t *= y._finalyscale), !1 == y.loaded && (H = !1, b.style.display = "none")) : $(3, 'no parent "' + u + '" found')
                        }
                        var w = g._width,
                            v = g._height,
                            z = g._x,
                            A = g._y,
                            u = g._ox,
                            K = g._oy;
                        w && 0 < String(w).indexOf("%") ? w = parseFloat(w) * (r / q) / (100 * C) : null == w && (w = j);
                        v && 0 < String(v).indexOf("%") ? v = parseFloat(v) * (s / q) / (100 * t) : null == v && (v = l);
                        "prop" == w && (w = Number(v) * j / l);
                        "prop" == v && (v = Number(w) * l / j);
                        w = Number(w) * q * e * C;
                        v = Number(v) * q * e * t;
                        0 > w && (w = r + w);
                        0 > v && (v = s + v);
                        z && 0 < String(z).indexOf("%") ? z = parseFloat(z) * (r / q) / (100 * C) : null == z && (z = 0);
                        A && 0 < String(A).indexOf("%") ? A = parseFloat(A) * (s / q) / (100 * t) : null == A && (A = 0);
                        z = Number(z) * q * C;
                        A = Number(A) * q * t;
                        u = u && 0 < String(u).indexOf("%") ? parseFloat(u) * w / 100 / q : null == u ? 0 : u * C;
                        K = K && 0 < String(K).indexOf("%") ? parseFloat(K) * v / 100 / q : null == K ? 0 : K * t;
                        u = Number(u) * q;
                        K = Number(K) * q;
                        0 == g.accuracy && (w = Math.round(w), v = Math.round(v));
                        var e = w / j,
                            B = v / l,
                            x = w / q,
                            q = v / q;
                        if (x != g._pxw || q != g._pxh) g._pxw = x, g._pxh = q, g.pixelwidth = x / C, g.pixelheight = q / t, n = !0;
                        this._scalechildren ? (g._finalxscale = e, g._finalyscale = B) : (g._finalxscale = C, g._finalyscale = t);
                        k ? (b.style.width = j + "px", b.style.height = l + "px") : (b.style.width = w + "px", b.style.height = v + "px");
                        if (p) {
                            var x = p,
                                G = w,
                                J = v,
                                E = m,
                                m = g.sprite,
                                l = g.loader,
                                M;
                            M = F;
                            5 == x.length && (M *= Number(x[4]));
                            c = l.naturalWidth;
                            j = l.naturalHeight;
                            null == E && (E = [0, 0, c, j]);
                            p = 'url("' + l.src + '")';
                            if (null == R) {
                                R = Array(9);
                                for (C = 0; 9 > C; C++) l = U(), l.kobject = g, l.imgurl = null, l.style.position = _[0], l.style.overflow = _[4], R[C] = l, m.appendChild(l)
                            }
                            for (var C = [E[0] + 0, E[0] + x[0], E[0] + x[0] + x[2], E[0] + E[2]], t = [E[1] + 0, E[1] + x[1], E[1] + x[1] + x[3], E[1] + E[3]], q = [x[0], x[2], E[2] - x[0] - x[2]], x = [x[1], x[3], E[3] - x[1] - x[3]], G = [q[0] * M | 0, G - ((q[0] + q[2]) * M | 0), q[2] * M | 0], I = [x[0] * M | 0, J - ((x[0] + x[2]) * M | 0), x[2] * M | 0], N = [0, G[0], G[0] + G[1]], O = [0, I[0], I[0] + I[1]], P, Q, E = 0; 3 > E; E++)
                                for (M = 0; 3 > M; M++) l = R[3 * E + M], J = l.style, P = G[M] / q[M], Q = I[E] / x[E], l.imgurl != p && (l.imgurl = p, J.backgroundImage = p), J[td] = c * P + "px " + j * Q + "px", J.backgroundPosition = -C[M] * P + "px " + -t[E] * Q + "px", J.left = N[M] + "px", J.top = O[E] + "px", J.width = G[M] + "px", J.height = I[E] + "px";
                            m.style.background = "none"
                        } else {
                            if (R) {
                                try {
                                    for (j = 0; 9 > j; j++) R[j].kobject = null, b.removeChild(R[j])
                                } catch (T) {}
                                R = null;
                                g.sprite && g.loader && (g.sprite.style.backgroundImage = 'url("' + g.loader.src + '")')
                            }
                            m ? (j = -m[0], m = -m[1], k || (j *= e, m *= B), b.style.backgroundPosition = j + "px " + m + "px") : b.style.backgroundPosition = "0 0";
                            c && (b.style[td] = !1 == k ? c.naturalWidth * e + "px " + c.naturalHeight * B + "px" : c.naturalWidth + "px " + c.naturalHeight + "px")
                        }
                        if (g.jsplugin && g.jsplugin.onresize && (g._pxw != g.imagewidth || g._pxh != g.imageheight)) m = [g.imagewidth, g.imageheight], g.imagewidth = g._pxw, g.imageheight = g._pxh, !0 === g.jsplugin.onresize(g._pxw, g._pxh) && (g.imagewidth = m[0], g.imageheight = m[1]);
                        g._oxpix = u;
                        g._oypix = K;
                        l = "";
                        c = m = 0;
                        if (!1 == a) {
                            m = g._edge;
                            if (null == m || "" == m) m = d;
                            a = j = 0;
                            j = 0 <= m.indexOf("left") ? j + 0 : 0 <= m.indexOf(_[2]) ? j + -w : j + -w / 2;
                            a = 0 <= m.indexOf("top") ? a + 0 : 0 <= m.indexOf(_[1]) ? a + -v : a + -v / 2;
                            m = 0 <= d.indexOf("left") ? z + j : 0 <= d.indexOf(_[2]) ? r - z + j : r / 2 + z + j;
                            c = 0 <= d.indexOf("top") ? A + a : 0 <= d.indexOf(_[1]) ? s - A + a : s / 2 + A + a;
                            g._finalx = m;
                            g._finaly = c;
                            k && (r = d = 1, s = g.imagewidth / 2, z = g.imageheight / 2, l = A = 0, y && !1 == y._scalechildren && (d /= y.pixelwidth / y.imagewidth, r /= y.pixelheight / y.imageheight, A = -j * (1 - d), l = -a * (1 - r)), l = _[51] + (-s + A) + "px," + (-z + l) + _[316] + e * d + "," + B * r + _[263] + s + "px," + z + "px) ");
                            0 == g.accuracy && (m = Math.round(m), c = Math.round(c));
                            y = w / 2 + j;
                            v = v / 2 + a;
                            k && (y /= e, v /= B, u /= e, K /= B);
                            l = _[51] + m + "px," + c + "px) " + l + _[51] + -y + "px," + -v + _[291] + g._rotate + _[217] + (y + u) + "px," + (v + K) + "px)";
                            2 > Ia && !0 !== h.opera ? l = _[152] + l : h.androidstock && (l = _[181] + l);
                            xa ? b.style[xa] = l : (b.style.left = m + "px", b.style.top = c + "px");
                            k = g._visible && H ? "" : "none";
                            k != b.style.display && (b.style.display = k)
                        }
                        if (n || aa) {
                            if (b = g._childs) {
                                n = b.length;
                                for (j = 0; j < n; j++) b[j].updatepos()
                            }
                            aa = !1
                        }
                    }
                }
            },
            hf = function() {
                function a(a) {
                    a && 0 == a.indexOf("data:") && ((a = N("data[" + a.slice(5) + _[34])) || (a = ""));
                    return a
                }

                function b(a) {
                    if (a && a.parentNode) try {
                        a.parentNode.removeChild(a)
                    } catch (b) {}
                }

                function c(a) {
                    a && (a.style.left = _[106], G.viewerlayer.appendChild(a))
                }

                function d() {
                    if (f) {
                        var b = f.html,
                            d = f.css,
                            b = b ? a(b) : "",
                            d = d ? a(d) : "";
                        h = "none" != f._autosize;
                        var j = parseFloat(f.roundedge);
                        isNaN(j) && (j = 0);
                        var y = Fa(f.border),
                            v = parseFloat(f.borderwidth);
                        isNaN(v) && (v = 1);
                        var x = f.bordercolor,
                            x = x ? parseInt(x) : 0,
                            B = parseFloat(f.borderalpha);
                        isNaN(B) && (B = 1);
                        var E = Fa(f.background),
                            z = parseInt(f.backgroundcolor),
                            M = parseFloat(f.backgroundalpha);
                        isNaN(M) && (M = 1);
                        var u = Number(f.shadow);
                        isNaN(u) && (u = 0);
                        var J = Number(f.textshadow);
                        isNaN(J) && (J = 0);
                        b = Ob(b);
                        if (1 != F) {
                            var L = d.indexOf(_[97]);
                            if (0 <= L) {
                                var I = parseInt(d.slice(L + 10));
                                0 < I && (I *= F, d = d.slice(0, L + 10) + I + "px" + d.slice(d.indexOf(";", L)))
                            }
                            for (L = 0;;)
                                if (L = b.indexOf(_[97], L), 0 <= L) {
                                    var N = b.indexOf("px", L);
                                    0 < N && (I = parseInt(b.slice(L + 10)), 0 < I && (I *= F, b = b.slice(0, L + 10) + I + b.slice(N)));
                                    L += 1
                                } else break
                        }
                        L = d.split("}").join("{").split("{");
                        if (1 < L.length) {
                            N = [];
                            for (d = 1; d < L.length; d += 2) {
                                var I = W(L[d - 1]),
                                    O = L[d],
                                    P = "p" == A(I) ? "div" : I,
                                    b = b.split("<" + I).join("<" + P + _[362] + O + "' "),
                                    b = b.split("</" + I + ">").join("</" + P + ">");
                                N.push(L[d])
                            }
                            d = ""
                        }
                        b = 1 <= F ? !0 == f.vcenter && !1 == h ? _[142] + b + _[16] : _[144] + b + _[16] : !0 == f.vcenter && !1 == h ? _[141] + b + _[16] : _[156] + b + _[16];
                        !0 == f.vcenter && (b = _[126] + b + _[196]);
                        b = b.split("<p").join(_[157] + 2.5 * F + _[186] + 5 * F + "px;' ");
                        b = b.split("</p>").join(_[16]);
                        L = _[193];
                        !1 == h && (L += _[275]);
                        N = 0.8;
                        1 == Kc && (N = 0.78);
                        N *= F;
                        0 < u && (u *= F, I = f.shadowangle * Na / 180, L += Lc + ":" + Math.round(u * Math.cos(I)) + "px " + Math.round(u * Math.sin(I)) + "px " + N * f.shadowrange + "px " + ja(f.shadowcolor, M * f.shadowalpha) + ";");
                        0 < J && (J *= F, I = f.textshadowangle * Na / 180, L += _[259] + Math.round(J * Math.cos(I)) + "px " + Math.round(J * Math.sin(I)) + "px " + N * f.textshadowrange + "px " + ja(f.textshadowcolor, M * f.textshadowalpha) + ";");
                        g = 1;
                        y && 0 < v ? (g = v * F, L += _[403] + v * F + _[15] + ja(x, M * B) + ";") : g = v = 0;
                        0 < j && (L += _[236] + 0.5 * F * (j + v) + "px;");
                        E && (L += _[205] + ja(z, M) + ";");
                        L += _[450] + f.imagewidth * F + _[188];
                        L += d;
                        b = unescape(b);
                        j = b.split(_[116]);
                        if (1 < j.length) {
                            for (d = 1; d < j.length; d++) j[d - 1].lastIndexOf("href") > j[d - 1].length - 10 ? (b = j[d].indexOf('"'), 0 < b && (y = j[d].slice(0, b), y = y.split("<").join("[").split(">").join("]"), j[d] = _[146] + G.viewerlayer.id + _[346] + y + "','" + f.getfullpath() + "');" + j[d].slice(b))) : j[d] = _[116] + j[d];
                            b = j.join("")
                        }
                        b = '<div style="' + L + '">' + b + _[16];
                        f.sprite.style.color = _[21];
                        f.sprite.style[_[45]] = "none";
                        n && n.parentNode == f.sprite && (q = n, n = null);
                        null == n && (n = U(), t = n.style, t.position = _[0], t.left = t.top = -g + "px", t.width = f.imagewidth * F + 2 * g + "px", t.height = "100%", t.fontSize = 12 * F + "px", t.fontFamily = "Times");
                        n.innerHTML = b;
                        c(n);
                        l = !1;
                        f.loaded = !0;
                        f.scalechildren = f.scalechildren;
                        s = 0;
                        null == m && (m = setTimeout(e, p))
                    }
                }

                function e() {
                    m = null;
                    l = !1;
                    if (f && n) {
                        j = !0;
                        var a = n && n.parentNode == f.sprite,
                            d = 0;
                        if (!1 == h) d = f.imageheight * F, 1 > d && (d = 1);
                        else {
                            try {
                                d = n.childNodes[0].clientHeight, 3 > d && (d = 0)
                            } catch (C) {}
                            if (1 > d && a && n.parentNode && 1 > n.parentNode.clientHeight) {
                                c(n);
                                s = 0;
                                null == m && (m = setTimeout(e, p));
                                j = !1;
                                return
                            }
                        }
                        0 < d ? (f._enabledstate = null, f.enabled = f._enabled, t.top = t.left = -g + "px", l = !0, q && q.parentNode == f.sprite ? (f.sprite.replaceChild(n, q), q = null) : (b(q), q = null, f.sprite.appendChild(n)), !1 != h && (d = Math.round(d / F), d != f._height && (f._height = d, f.poschanged = !0, _[11] == f._type ? Cc(!0, f.index) : f.updatepluginpos(), f.onautosized && Q.callaction(f.onautosized, f, !0)))) : (s++, 10 > s ? null == m && (m = setTimeout(e, 2 * p)) : (q && q.parentNode == f.sprite && (f.sprite.replaceChild(n, q), q = null), f.height = 0, h = !1));
                        j = !1
                    }
                }
                var f = null,
                    h = !1,
                    l = !1,
                    m = null,
                    j = !1,
                    s = 0,
                    p = 10,
                    q = null,
                    n = null,
                    t = null,
                    g = 1;
                this.registerplugin = function(a, b, c) {
                    f = c;
                    a = f.html;
                    b = f.css;
                    delete f.html;
                    delete f.css;
                    f.registerattribute(_[388], "none", function(a) {
                        f._autosize = A(a)
                    }, function() {
                        return f._autosize
                    });
                    f.registerattribute(_[307], "none" != f._autosize, function(a) {
                        h = a;
                        f._autosize = a ? _[119] : "none"
                    }, function() {
                        return h
                    });
                    f.registerattribute(_[390], !1);
                    f.registerattribute(_[96], !0);
                    f.registerattribute(_[224], 1);
                    f.registerattribute(_[223], 16777215);
                    f.registerattribute(_[63], !1);
                    f.registerattribute(_[302], 1);
                    f.registerattribute(_[298], 1);
                    f.registerattribute(_[295], 0);
                    f.registerattribute(_[336], 0);
                    f.registerattribute(_[437], 0);
                    f.registerattribute(_[289], 4);
                    f.registerattribute(_[286], 45);
                    f.registerattribute(_[284], 0);
                    f.registerattribute(_[280], 1);
                    f.registerattribute(_[305], 0);
                    f.registerattribute(_[215], 4);
                    f.registerattribute(_[232], 45);
                    f.registerattribute(_[230], 0);
                    f.registerattribute(_[229], 1);
                    f.registerattribute("blur", 0);
                    f.registerattribute(_[361], 0);
                    f.registercontentsize(400, 300);
                    f.sprite.style.pointerEvents = "none";
                    f.createvar("html", a, d);
                    f.createvar("css", b, d)
                };
                this.unloadplugin = function() {
                    f && (f.loaded = !1, m && clearTimeout(m), b(q), b(n));
                    f = m = t = n = q = null
                };
                var v = F;
                this.onresize = function(a, b) {
                    if (v != F) v = F, d();
                    else {
                        if (f) {
                            f.registercontentsize(a, b);
                            if (j) return;
                            n && (l && (t.left = t.top = -g + "px"), n.childNodes[0].style.width = a * F + "px", t.width = a * F + 2 * g + "px", h ? (l = !1, s = f.sprite.style.height = 0, null == m && (m = setTimeout(e, p))) : t.height = b * F - 0 + "px")
                        }
                        return !1
                    }
                };
                this.updatehtml = d
            },
            Dc = !1,
            Ec = 1,
            jf = function() {
                function a() {
                    !1 == h.css3d && b._distorted && (b._distorted = !1, b.zoom = !0);
                    b.poschanged = !0;
                    b.sprite && (b._visible && b.loaded && Cc(!0, b.index), b.sprite.style[xa + _[62]] = b._distorted ? "0 0" : _[407])
                }
                var b = this;
                b.prototype = xc;
                this.prototype.call(this);
                b._type = _[11];
                var c = b.createvar;
                c("ath", 0);
                c("atv", 0);
                c(_[431], 0);
                c("zoom", !1);
                c("rx", 0);
                c("ry", 0);
                c("rz", 0);
                c(_[350], !1, a);
                b.accuracy2 = 1;
                b.zorder2 = 0;
                b.inverserotation = !1;
                b.point = new Ya(null);
                var d = b.create;
                b.create = function() {
                    d();
                    a()
                };
                b.updatepos = function() {
                    b.poschanged = !0
                };
                b.getcenter = function() {
                    var a = arguments;
                    2 == a.length && (I(a[0], b.ath, !1, this), I(a[1], b.atv, !1, this))
                }
            },
            Td = "",
            jc = 1,
            Ve = "translate3D(;;px,;;px,0px) ;;rotateX(;;deg) rotateY(;;deg) rotateY(;;deg) rotateX(;;deg) scale3D(;;) translateZ(;;px) rotate(;;deg) translate(;;px,;;px) rotate;;deg) rotate;;deg) rotate;;deg) scale(;;,;;) translate(;;px,;;px)".split(";"),
            We = "translate(;;px,;;px) translate(;;px,;;px) rotate(;;deg) translate(;;px,;;px) scale(;;,;;) translate(;;px,;;px)".split(";"),
            kf = function() {
                this.fullscreen = h.fullscreensupport;
                this.versioninfo = !0;
                this.enterfs = _[320];
                this.exitfs = _[226];
                this.item = new Ya(function() {
                    this.visible = this.enabled = !0;
                    this.caption = null;
                    this.separator = !1;
                    this.onclick = null
                })
            },
            kd, Te = function() {
                Pd && (Qd(), fd(Te))
            },
            Pd = !0,
            Qd = null,
            Ue = 0,
            fd = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame;
        kd = {
            start: function(a) {
                if (!fd || h.ios) fd = function(a) {
                    var c = (new Date).getTime(),
                        d = Math.max(0, 16 - (c - Ue));
                    t.setTimeout(a, d);
                    Ue = c + d
                };
                Pd = !0;
                Qd = a;
                fd(Te)
            },
            stop: function() {
                Pd = !1;
                Qd = null
            }
        };
        kc.init = function(a) {
            kc.so = a;
            h.runDetection(a);
            if (h.css3d || h.webgl) xa = h.browser.css.transform, sd = xa + "Style", ud = xa + _[62];
            td = h.browser.css.backgroundsize;
            Ac = h.browser.css.boxshadow;
            Lc = _[98];
            var b = h.webkit && 534 > h.webkitversion;
            b && (Lc = _[357] + Lc);
            h.ios && !1 == h.simulator ? (Ia = 0, "5" <= h.iosversion && 1 != lc && (Ia = 1, h._cubeOverlap = 4)) : h.android ? (Ia = 2, h._cubeOverlap = 0, h.chrome && (Ia = 1, Kc = 0, h._cubeOverlap = 4)) : (h.windows || h.mac) && b ? (Db = 1, Kc = Ia = 0, h._cubeOverlap = 4) : (Ia = 1, Kc = 0, h._cubeOverlap = 8, h.chrome && (h._cubeOverlap = 22 <= h.chromeversion && 25 >= h.chromeversion ? 64 : 4));
            m = new Tb;
            m.set = I;
            m.get = N;
            m.call = zc;
            m.trace = $;
            m["true"] = !0;
            m[_[23]] = !1;
            m.version = _[432];
            m.build = _[319];
            m.buildversion = m.version;
            m.debugmode = !1;
            m.tweentypes = fa;
            m.basedir = _[315];
            m[Jc[0]] = m[Jc[1]] = !0;
            m.haveexternalinterface = !0;
            m.havenetworkaccess = !0;
            m.device = h;
            m.browser = h.browser;
            m._have_top_access = h.topAccess;
            m._isrealdesktop = h.realDesktop;
            m.iosversion = h.iosversion;
            m.isphone = h.iphone;
            m.ispad = h.ipad;
            m.isandroid = h.android;
            m.ishtml5 = !0;
            m.isflash = !1;
            m.ismobile = h.mobile;
            m.istablet = h.tablet;
            m.isdesktop = h.desktop;
            m.istouchdevice = h.touchdevice;
            m.isgesturedevice = h.gesturedevice;
            m.__defineGetter__(_[314], function() {
                return ob / F
            });
            m.__defineGetter__(_[296], function() {
                return eb / F
            });
            mb(m, _[306], function() {
                return F
            }, function(a) {
                a = Number(a);
                isNaN(a) && (a = 1);
                1E-4 < Math.abs(a - F) && (F = a, G.onResize(null, !0))
            });
            fb = m.area = new gf;
            m.wheeldelta = 0;
            m.wheeldelta_raw = Number.NaN;
            m.keycode = 0;
            m.idletime = 0.5;
            m.__defineGetter__(_[352], ga);
            m.__defineGetter__(_[438], Math.random);
            mb(m, _[93], function() {
                return G.fullscreen
            }, function(a) {
                G.setFullscreen(Fa(a))
            });
            mb(m, _[349], function() {
                return ya.swfpath
            }, function(a) {
                ya.swfpath = a
            });
            m.hlookat_moveforce = 0;
            m.vlookat_moveforce = 0;
            m.fov_moveforce = 0;
            v = m.mouse = {};
            v.down = !1;
            v.up = !1;
            v.moved = !1;
            v.downx = 0;
            v.downy = 0;
            v.x = 0;
            v.y = 0;
            v.__defineGetter__(_[439], function() {
                return v.x + fb.pixelx
            });
            v.__defineGetter__(_[446], function() {
                return v.y + fb.pixely
            });
            s = m.view = new ef;
            m.screentosphere = s.screentosphere;
            m.spheretoscreen = s.spheretoscreen;
            m.loadFile = ya.loadfile;
            m.decodeLicense = ya.decodeLicense;
            m.parsepath = m.parsePath = ya.parsePath;
            m.contextmenu = new kf;
            Y = m.control = new ff;
            ib = m.display = {
                mipmapping: "auto"
            };
            X = m.image = {};
            Ba = m.plugin = new Ya(xc);
            m.layer = Ba;
            Qa = m.hotspot = new Ya(jf);
            Sb = m.events = new Ya(null, !0);
            Sb.dispatch = ea;
            Ic = m.progress = {};
            Ic.progress = 0;
            Za = new xc;
            $a = new xc;
            Ba.alpha = 1;
            Ba.visible = !0;
            Qa.alpha = 1;
            Qa.visible = !0;
            m.xml = {};
            m.xml.url = "";
            m.xml.content = null;
            m.xml.scene = null;
            b = m.security = {};
            mb(b, "cors", function() {
                return yc
            }, function(a) {
                yc = a
            });
            na = m.autorotate = {};
            na.enabled = !1;
            na.waittime = 1.5;
            na.accel = 1;
            na.speed = 10;
            na.horizon = 0;
            na.tofov = null;
            na.currentmovingspeed = 0;
            var b = m,
                c = function(a) {
                    return function(b, c) {
                        void 0 === c ? I(b, Math[a](f(b))) : I(b, Math[a](f(c)))
                    }
                },
                d = {},
                e = _[130].split(" "),
                f = function(a) {
                    var b = N(a);
                    return Number(null !== b ? b : a)
                },
                k;
            for (k in e) {
                var l = e[k];
                d[l] = c(l)
            }
            d.pi = Na;
            d.atan2 = function(a, b, c) {
                I(a, Math.atan2(f(b), f(c)))
            };
            d.min = function() {
                var a = arguments,
                    b = a.length,
                    c = 3 > b ? 0 : 1,
                    d = f(a[c]);
                for (c++; c < b; c++) d = Math.min(d, f(a[c]));
                I(a[0], d)
            };
            d.max = function() {
                var a = arguments,
                    b = a.length,
                    c = 3 > b ? 0 : 1,
                    d = f(a[c]);
                for (c++; c < b; c++) d = Math.max(d, f(a[c]));
                I(a[0], d)
            };
            d.pow = Q.pow;
            b.math = d;
            m.action = new Ya;
            m.scene = new Ya;
            m.data = new Ya;
            m.addlayer = m.addplugin = function(a) {
                if (Ab(a, _[184] + a + ")") && (a = Ba.createItem(a)) && null == a.sprite) a._dyn = !0, a.create(), null == a._parent && G.pluginlayer.appendChild(a.sprite)
            };
            m.removelayer = m.removeplugin = function(a) {
                var b = Ba.getItem(a);
                b && (b.visible = !1, b.parent = null, b.sprite && G.pluginlayer.removeChild(b.sprite), b.destroy(), Ba.removeItem(a))
            };
            m.addhotspot = function(a) {
                if (Ab(a, _[301] + a + ")") && (a = Qa.createItem(a))) null == a.sprite && (a._dyn = !0, a.create(), G.hotspotlayer.appendChild(a.sprite)), md = !0
            };
            m.removehotspot = function(a) {
                var b = Qa.getItem(a);
                if (b) {
                    b.visible = !1;
                    b.parent = null;
                    if (b.sprite) try {
                        G.hotspotlayer.removeChild(b.sprite)
                    } catch (c) {}
                    b.destroy();
                    Qa.removeItem(a)
                }
            };
            if (!G.build(a)) return !1;
            Y.layer = G.controllayer;
            $(1, _[110] + m.version + _[366] + m.build + (m.debugmode ? _[399] : ")"));
            k = !(h.androidstock || h.android && h.firefox && 22 > h.firefoxversion || h.ios);
            a.html5 && (b = A(a.html5), 0 <= b.indexOf(_[67]) ? k = !0 : 0 <= b.indexOf("css3d") && (k = !1));
            h.webgl && k ? sa.setup(2) : sa.setup(1);
            $(1, h.infoString + sa.infoString);
            a && (a.basepath && "" != a.basepath) && (ya.swfpath = a.basepath);
            G.onResize(null);
            h.android && h.androidstock && !1 == h.webgl && (pd = !0);
            Ca.registerControls(G.controllayer);
            kd.start(Xe);
            if (!h.css3d && !h.webgl && 0 > A(a.html5).indexOf(_[451])) ka(_[129]);
            else {
                var r, j = [],
                    e = {},
                    l = !0;
                k = !1;
                var b = [],
                    w = c = null,
                    d = Gc(100),
                    p = A(_[153]).split(";"),
                    q;
                if (null != Bb && "" != Bb) {
                    q = ya.b64u8(Bb);
                    var n = q.split(";");
                    q = Bb = null;
                    if (n[0] == p[0])
                        for (q = 1; q < n.length; q++) {
                            var x = n[q],
                                g = x.slice(3);
                            if ("" != x && "" != g) switch (_[151].indexOf(x.slice(0, 3)) / 3 | 0) {
                                case 1:
                                    Ja = parseInt(g);
                                    l = 0 == (Ja & 1);
                                    break;
                                case 2:
                                    r = g;
                                    j.push(p[1] + "=" + g);
                                    break;
                                case 3:
                                    j.push(p[2] + g);
                                    break;
                                case 4:
                                    b.push(g);
                                    j.push(p[3] + "=" + g);
                                    break;
                                case 5:
                                    g = parseInt(g);
                                    c = new Date;
                                    c.setFullYear(g >> 16, (g >> 8 & 15) - 1, g & 63);
                                    break;
                                case 6:
                                    w = g;
                                    break;
                                case 7:
                                    var E = x = g.length;
                                    if (128 > x)
                                        for (; 128 > E;) g += g.charAt(E % x), E++;
                                    od = g;
                                    break;
                                case 8:
                                    break;
                                case 9:
                                    Ka = g.split("|");
                                    4 != Ka.length && (Ka = null);
                                    break;
                                default:
                                    j.push(x)
                            }
                        }
                    q = B.location;
                    q = A(q.search || q.hash);
                    if (0 < q.indexOf(_[81])) {
                        ka(j.join(", "), A(_[81]).toUpperCase());
                        return
                    }
                    0 < q.indexOf(_[218]) && (null == a.vars && (a.vars = {}), a.vars.consolelog = !0, Ja = Ja & 1 | 14);
                    n = null
                } else if (j = t.krpanoreg, n = t.krpanokey, x = "", j && n) {
                    for (q = g = 0; 384 > q; q++) {
                        var E = n[2 * q + 0] + g,
                            D = n[2 * q + 1],
                            H = j.charCodeAt(q % j.length),
                            g = g + (E + H - D);
                        59 == E ? (x = x.split("="), 2 == x.length && (e[x[0]] = x[1]), x = "") : x += String.fromCharCode(E)
                    }
                    e[p[1]] != j ? k = !0 : (l = e[p[5]], _[177] == l || _[180] == l || _[173] == l || _[171] == l || _[170] == l || _[167] == l || _[175] == l || _[178] == l || _[183] == l || _[179] == l || _[176] == l || _[174] == l || _[169] == l || _[182] == l || _[172] == l ? l = k = !0 : (r = j, Ja = 15, l = !1))
                }
                j = A(B[p[3]]);
                0 == j.indexOf(_[463]) && (j = j.slice(4));
                q = "" == j || _[338] == j || _[337] == j || 0 == j.indexOf(p[4]);
                if (0 == (Ja & 2) && q) k = !0;
                else if (!q && (q = j.indexOf(".") + 1, 0 > j.indexOf(".", q) && (q = 0), n = j, j = j.slice(q), 0 == j.indexOf(_[395]) && _[94] != j && (k = !0), (e = e[p[3]]) && j != e && _[94] == e && (l = !0), 0 < b.length)) {
                    k = !0;
                    for (q = 0; q < b.length; q++)
                        if (j == b[q] || n == b[q]) {
                            k = !1;
                            break
                        }
                }
                if (null != c && new Date > c) ka(_[213]), null != w && setTimeout(function() {
                    t.location = w
                }, 500);
                else if (k) ka(_[246]);
                else {
                    Ka && $(1, Ka[0]);
                    !1 == l && (r ? $(1, _[225] + r) : l = !0);
                    (l || 0 == (Ja & 1)) && G.log(d);
                    r = null;
                    a.xml && (r = a.xml);
                    a.vars && (a.vars.xml && (r = a.vars.xml), r || (r = a.vars.pano));
                    0 == (Ja & 4) && (a.vars = null);
                    Ja & 16 && (m[Jc[0]] = m[Jc[1]] = !1);
                    k = G.viewerlayer;
                    Ja & 8 ? (k.get = nb(N), k.set = nb(I), k.call = gd) : (k.set = function() {
                        $(2, _[150])
                    }, k.get = Ka ? nb(N) : k.set, k.call = nb(Q.SAcall));
                    k.screentosphere = s.screentosphere;
                    k.spheretoscreen = s.spheretoscreen;
                    k.unload = hd;
                    Q.loadpano(r, a.vars);
                    if (a.onready) a.onready(k);
                    return !0
                }
            }
        }
    }
    var Ob = Bb;
    Bb = null;
    var rb = Ob.length - 3,
        Wa, W, mb, nb = "",
        Pb = "",
        Qb = 1,
        sb = 0,
        Ab = [],
        Rd = [1, 48, 55, 53, 38, 51, 52, 3];
    mb = Ob.charCodeAt(4);
    for (Wa = 5; Wa < rb; Wa++) W = Ob.charCodeAt(Wa), 92 <= W && W--, 34 <= W && W--, W -= 32, W = (W + 3 * Wa + 59 + Rd[Wa & 7] + mb) % 93, mb = (23 * mb + W) % 32749, W += 32, 124 == W ? 0 == Qb ? sb ^= 1 : 1 == sb ? sb = 0 : (Ab.push(nb), nb = "", Qb = 0) : (W = String.fromCharCode(W), 0 == sb ? nb += W : Pb += W, Qb++);
    0 < Qb && Ab.push(nb);
    W = 0;
    for (rb += 3; Wa < rb;) W = W << 5 | Ob.charCodeAt(Wa++) - 53;
    W != mb && (Ab = null);
    Bb = Pb;
    var _ = Ab;
    _ && _[33] != typeof krpanoJS && (new hd).init(gd)
} // embedhtml5 end

function krpanojs_init(c) {
    var xxdebug1 = function(e) {
        //console.log(e);
        //console.log("===============================");
        var c = String.fromCharCode,
            n = 1,
            k = e.length,
            b = null,
            g = null,
            a = 0,
            h = 0,
            m = 0,
            d = 0,
            j = 0,
            l = 0,
            f = 0;
        try {
            c.apply(null, (new Uint8Array(4)).subarray(2))
        } catch (p) {
            n = 0
        }
        g = n ? Uint8Array : Array;
        for (b = new g(4 * k / 5); a < k;) m = e.charCodeAt(a++) - 35, d = e.charCodeAt(a++) - 35, j = e.charCodeAt(a++) - 35, l = e.charCodeAt(a++) - 35, f = e.charCodeAt(a++) - 35, 56 < m && m--, 56 < d && d--, 56 < j && j--, 56 < l && l--, 56 < f && f--, f += 85 * (85 * (85 * (85 * m + d) + j) + l), b[h++] = f >> 24 & 255, b[h++] = f >> 16 & 255, b[h++] = f >> 8 & 255, b[h++] = f & 255;
        g = new g(b[2] <<
            16 | b[1] << 8 | b[0]);
        k = 8 + (b[6] << 16 | b[5] << 8 | b[4]);
        a = 8;
        for (h = 0; a < k;) {
            m = b[a++];
            d = m >> 4;
            for (j = d + 240; 255 === j; d += j = b[a++]);
            for (l = a + d; a < l;) g[h++] = b[a++];
            if (a === k) break;
            f = h - (b[a++] | b[a++] << 8);
            d = m & 15;
            for (j = d + 240; 255 === j; d += j = b[a++]);
            for (l = h + d + 4; h < l;) g[h++] = g[f++]
        }
        b.length = 0;
        k = g.length;
        e = "";
        if (n)
            for (a = 0; a < k; a += 32E3) e += c.apply(null, g.subarray(a, a + 32E3));
        else
            for (a = 0; a < k; a += 32E3) e += c.apply(null, g.slice(a, a + 32E3));
        //console.log(e);
        //console.log("===============================");
        return e
    };
    c.params || (c.params = c);
    c.vars && (c.params.vars = c.vars);
    c.htmltarget && (c.params.target = c.htmltarget);
    embedhtml5(c.params, "krp:SL*7ZlfB]#2R]NVFM-!_B-tw2yK-m_IV3mCHEm`;NPf(3rGkt#N~S)S%T$VxoAAw7<*$|TvHltR0n{m0M5A=2<.+S(8M&r|z/w4k-,>t8DCa9-FqQL71`;>l[n9mAJ3ZNKNtE{4#9ETBP8,iizpYr_b1o_qT,_(LhP*.I=8:[r}kax3s'QBC,Q6>E92nW/77Lt<fj{A/G1vU-Jnz`~-JR]/FS<YGzJ0I!H[OKKKnK~0S3'BNSP<Wqmh%/>eL}rQA~5h/2@xdDn9;-(wJk?$Z~Sh$U/@g*g}#T%SK,2eM;M?ssCz[(q|^q=,:Kv=~`RA`3#Xs)5qB>Z,2Ckt+4:q5?@|O2K,GMM+k:z-=D`mZ_D=H(!D]dIb|[B8ql&wK2Mpj%7;^Kn 0CAL;*[oGBESz~=vISdujI5,lRWY9ls,c{n`Eq>Cxe[o!Y+acVy,OX[w%F.aY?w_Bkguu5wNgy|Aj_WaKTdhZL;tOES>otcN)$xip$HuuGN<w2(G1{|6%QL0>=CKH}`cFr2Q7P4gOdfgyemsmDzq|A,R8^vuh@*{`j{=2!4|]0ZHDrezmm,,m>?Z9dgpHe|e^{lELgW}(Nzg`+(vh#YK <*{&ZsRrhCTawaXj)Bk:N'z@vX&!n|,~-a-cg}Oq1XF6y^Uqbj@Q$XK,oE lsU+{LtqclX>y<xAosIimlEm'atBhNW<17cJc?b`B'%$/953:`cB9zhQA:dS-@}@9Cj2?zf,;'n24tC<rYdnA{w%xP)_U}tvmj>X!??(BUg5m&QqY[K3D+d}n6 XP{:IaHkLNyyu<VJXI39'lZ%Z?2:j_{v`[>CCJB,>y)Q;JO1 XVI4R_.]6-NGL`Emf3X/FqiYDE{UnUj/#1nOQ{=RyGMJ'mRAn+PxYoAZEr*0-yG|yU+&1n5#CD}'gd5dJ7mlw7Qv6dpw-nQ>6H!Kp8CA&^&r=vJWP/k:gE,2_Y~S1bB)OBM~k#NfkJLgs qX]RIh^'KT!+d^k>XS&oWC]JE>KR|4A,ve(k^[;yU 5W}H)6%/<INJz[}O*0:HnK.HwoN%,h)X3^yi~@1dkUhr)hRgxl%}NMP$8*VT6pVb-2E`vB5}E>jJv`8BLl5y?yxnm#h.}}TR$4rR:oU2wG:1W<L&t[bD/ey[ZdgdJ{Yei-'e%MwiL7J*I6/{`+9bOK,*%kzkfKJ4XP&I5.!CpglJYd>.;jOw,(PLFNy!hq>6Bac8Mc*iDiFK4Wo3OkKpD4a_?pZ`3s|`rnuz8Q(c/}`W-IW8ueOQ!*A+^<7?Uv'D)ti]=^W,x}I5>b%ag}QEm9G_5 y__KvGNTu$aj}>ck`A[BmEl939h|Z{g3HOWUF]*xTgr$9*'&Pc#(<f1&>A/mGV PT`:Mf<1`qsG`^m67+|<WA7e,-fn8B8.>'o2Hqg0kb80N,]mtngli,W'Q5AlQKDV(lN3>%L(gWRC3A+-T,DiBXfga?3Cfo&-C9iE<,l@~?uZ65]m%~&E,mTYE.w@p<nP>dlrMKej_HO?h|+T![PGL7N,5Q7LQV^'9}j.^[4.ht0|U[eh/_T%uQYg8$4M42qOIBe 0/`XD>i6 Q8Vm]e&ikwbQ|j_kQ#ncZ>r*1-J%~%f,dv<?#Dj:Pknsg&==y%D0 A-o]7rP_{r58[472; pUP-1}::(@7qxet.W?Z,iDzwI3nxSk)o9|yD/Z}>1-<cNjCP/GKms$-x4u>>m3`j0@ _Qn^S`*+o`g{}g1~dqLCKXe$r,k5g88Xkc2^wo=!8>#ww`8K)vYqw=a{CbfuM;YE}A]AcXh)T!dB:FhQud-C=:;hb3|*ug#RlKet[!q@SJ+n hyejq4Y5f[5X/d`_Z-HZ(_-l?sF:iUf{d2bJ)h:T]P~6H`=!{HT6!?P]{No7*0F?&=5z*pXzG,7W.3'pPv2=1/{qlz%:!OiJ&g^WHtZ_J@w3+b-3@V04&wJ.pAF1PU!Xp3Ui{M+mjeVu=t'_lc2Lkq8]'';;kPv'E@J.m: ($[PyG8~g(I8lI[Ey#0NGx$304Y!<R!~#-wUXIO)}Zr:_2pf6=Reg|6x|87Pi4#u}CK(/MV,~vO]!=k_vvu'e?;T1$CCAz}C%v]Q8%tBSe+S*:}if:~,yaH7*:uEa4%ejV7t:bv{q1`<+eN9T/ZlNN@gci7r.qbYy3O]+]'B/#dC*JQ+E7:1AkL)d_':%zt#x%!/t82XeL K'y%K:I/SKFrH!&KX@`_dHq?6X>,bB8SV.Am=l1 MX|2.M/|'y,P;Q8:*z9/^aZ_j~):PBQ7`M+vnf3:`:H56GmtBw^P,cu`,.55[sn?i2$%(aos$VH9X*(o):MR+r28JS>l|N&|C.h~}N&F+50vR2fOoxH 3nBzN>+rD4w9n$rYOu0PS}?l9d nqyNM$0`U<RckCa/5Kv`1eE?ux;c&*S7#_T~Zxjtgk.e C62OPTJm Oy9:.@cWIi*Tw~I[Wr(_!LQ0xn~RC]L&|FQO@RT%q&.p$C~2kjK_* YC59Z+kp.h]>Ln$lm7r/aHKhKkWUZGEKE.?Ot?~yfV'X_Z&e@=(8qO}HW*#`luVR*jP#<Ine{v-)VG/d9$hx=8!4DxIM7~:{?5g[M+E_:GjI.Pq7w[ v/@9gsc a2@E}?7?a-aIs&!Gt<hYyE .iud=L1'~fp~3(D/{.|2&AKAAaa?`5I~Yh2=98RCw4$6ji?^}JX~,=qdJ?,i[19w&;b'7v6jW9'`~h1_tM|aS*ly'q8;%SzEiw^wpq*~d)t^7!~?h(:qvN7FXS250prGZm?v@645~r]gY)/}6x%GAJ+7H.J]`a9dyYG=)Q1rIj(s0oWu?f{(sw? @:T2f2m=1,2PoK9Zn(|sc:.3x~~-9EkomIM`2%<S'{oKJx'BUu,7-B|*r*.NhM)53v/c(Z[bBs6I&5G]k`>'M3n;C7>5=:{k(vN/<SJEwVnSB=}2I8~#|ApJ{VJyLg@k/:sSVzNo3* ~==av7?{>?xB,iu8AL)@Gx67o.+T)&HD$<Hx3~gl,uXJblQE)hHL]=NulH~+~Xgg^IC^9w?ystcUt=^MRwc=mCh:l*<'Jhy8KBdHntm1DJ>YYX^yAx:%#O~Q)_,(U9+q`lMQk7}2k@LUSX<Oy mT;|m^z)W`eJTXTR:_'=rV#|>^YUV&}tCdMY]:Xfu!=Uvtri<IK(a*$p2Xwc.Td4`)5If(z])=lo.bs9.h%ibxlEA]]<=0 W4OY)~F+TRTni2_oeNG73I%-0.^5sbQEcHo,I|$,X9OjT8YU:~9E( ~B.sc nItsBg%Cy#U QlyAY6uGw535XH1KAP(ke2M2wUALq_ZG|R--*ba:nwl,OmjfD_Sus,Zy,ek4Fx$e2:ReP(@CM5]s3IUX*UkVoqv'SfapqFXx{<WRpa6w!@:/Vjl$zvBa`_8b@]D(LB:+)fK'u?(uKTMD+5uB2!v3e~6NG`rYK$kzPNlo:*Kqg5WK}2f#+PbtazeVFVJdAD4n>9U}d>5FTZn@uW~<BC4k8;*P7d8@#5`X[s{X!'dtR*&^?Atq4Sv|;CZ=#$.0wP&K;ylCro dy;zf%G^v8'Qww:*j2JORdOYj*eksxK-H/x}1$'!%FfMGf)&g`)tf5i:r2SErJ>mvq421,j-Z!=m;k^xja[6[dT0SvUVs_]x3a:rmr%]U/BZ._#_'2sqcittlEF+$pz<AW3T6s[)^U,D'j-M thR73+HvJSb#4f_oz{rq kC|4P+MC6yEdoZoHdPpT@CDk+C^j==3 V wlMvv@^AFiE/8[ ?'u1BocVJD~zBC'l9I$lxd+dxH^q>@7#TiGK=ukY/Bfh'OPX;Vo*u'L*B2Sj,%Lk^Nr-Yv/J'TW<C&P2AP;*c*lll7r7W*n9NZa4yU{]]iXUs=)x(!sZ3lQf;Td=+HzJ{LF.Z%lYEq.WYc1g4~)1wyEFq^K4~?u2ysu.wVf>[^={=uMP I+B[1j5TRwj9Fu3l2(CKC>Z`~R$0C!L:2WD.<Xi=o>$sq/k__v &;kp3}#8G#Pb-]R4G8CEU5B;v5Ag_YznDysK4K;}Tox5eF*vfDHdC)l7P9]Y0z_i^:2e^SJ#Xc-(<k ok]9F;jhXkQG}v0*  6Z@`'vsc6%)TvA.RBS$`VQ&Ya.oweH)PFdkrRj3w%WB&f@`knvdCiOV}<CAkQzOX;[{5eoN=0kQqC0aoTH,*h'HY7o+`y++t&'W|lF&rE7tM4&xE;:,/&v]f7Ua@ATWXY<(~dBwvoR{m^[BwT5=x_u6L`x#f>7P-}tieu]x@dKYs:x2$5|V<zFGj]|BM:U)aNh')Z-i)#B Xsl>*::ke]Xm`pTxy;^n#rC*GK8Z!2/~]~4[HM!pO(!|{1dX[1sNR_Wl12R/KuFckEQERE>]/3:B_c[H%Hale}k|+D1Kx$Ng{e*/F8fAY>CX=B:EPoWV]~VNblQ<_xr}gvTqA_~JoNi%o?KeplH%>q-hYR*xt4wsQ<u6pG>?GrY:#AgA7?wrJV7c@5h@,B]49:{4LLtX7''p7+iE}SdhB[er!:a,YwW9?xIpp!K9~[J5V=a/t*c(CFzl5k3rMb(P+)VzAV:R+BAj(JW#=F{H+f5'tG*z1A[`qs8ANyr-Fxov&^m@}ufp=}-pg|PRBMxo=o2T1h|o]*gc-^i.W~5v'R^n`C`wNL1>sc%fCz*tK=Yq-7lW]j(,FG'Hn%GV]B;W<r6Zqf}3?eK+'={PZz W^tiw|EiM6Fs&Stee0.0o>%y_qqQ&1j*M'MHvIV29q:f)Z{*rc PQ$2V{`@Lms6)$_6g(Jme9GJK&r.*~&S8yll>U;JDTBnMb??+r@h]lk:6.bCYHmB-%iJioiwG+efrkia3uW{GSW(7m)j.K`x:lxlD.,XUY!kaQr7.GGE*+M;~gyB!fx}c(29E[JOQR@Y$]sv(v`A(^Yl[>4Dj~23uXsBpIF)~YzTk/211A?BhadbY3F^:7SfhP/8ea,5%kD_CDNmd#MHwv&ywd7`=p<4]pg}W,Q`'_rxa;m~k^R~`Z>Wh4qz<Cw|fP:6;gl@.51KTl.Hpb<.ls$RWc~oW?283'NK2}0,pwX%1@N8BE.EGj7hHT$CYTL0k1Fb^J$!V^,S s/D?k[p}hGI)O!hU@!X0/Q^%?m3S`R`&(X/Z9Dfjeu@2lAi:<N[Sf4BUzz{Di@X^i@=f+H+GfLpVV{NE_B<]Cv,eo/JwMi4Ef;4&c/zMc|?Ir-`o^|$WM@j]Dwniq+V2HJ9px%[*C/IG)1HMK)BY/$0RQ)69M ]w[$zAD?}/K=11qtDH@,Xs(0Z<N#hYFz3mh_/R_Co#Fiy/9PnC'#/!1z~)<H(ZPm=:9Ytbw^Xyep:?.rt=<qNIqbG2bZ9`hznn)HUif;au^9|J&>(RSsPRy-zV/!.ae_@zi<B^Y]T[S(fsDX ^UeuUF1[:O#SB@pblem'boguS-OXnN{84f$ =;B`br=#<b53[^%id%8 XB[;TdPF Zw~R^r<7?Yd|RU4SJQ$L-<5kanMz(,QQ>J7=POF!oBc*3({PJ~~#Fj^lJw%nv3N5!nokmLs3;-/E8e7SHr8/if 0RTWC3}`Z;9Ux:m6r/HIhoZv[D7_-Br%&DUUW@Cgm-bc'xQ6B@QfEkI?#uVv~Z?Vwhty3nR/E,{Xm${PH qK4Wy2!7#B{`RJfR$_xm8d=$+.LaWRo}5^%u}94|j~46ui6^=:MMLMid%YiFeg[yS:cI}bARi|=N4*;LC/brAI<TDx6k1n&{--GiAE;R*;l9Ux$YmQ'/E}R6(b&rs.o3e~lueZm6?*Z3`~V=,&h>@4{ka- ,.tv^*tg4-tBrfjt'&6dYzvd!wXyi$i8U(6LY2Sk=zXp%[B;7W#r^NfPsvJA4L;gx|v3V0lX3^?N;ut`^6xe6}~ho#cBJ3LBKg*eg;A];B|8@i:%&e}65c^Z:h{{rQaMKOCd@6a<2/*8C|V`2M2ihXq$v)z#1sIkH}h*-qj6Rj:)>k?C$ySadm/1lOTTcj!o1GtALK$tFMTXQ6N>N/Q+fN);IhU?=2wl?*kxXy;e/#x,w [IC&lP2GfK>cw=(Sefo(k%w<:=n.mdNn]#Q[&kYv(]T<|&yEL(c?xfH_JhbSFr~O^-%`KR>q7B_Pod}=oEm~nO:Gr7^jig~8v|8# e+CI+lTZbyuq-}$O&x>9&Sy!FSe}R5)xP:kSAGHj?tp b6sC*UTShcu!4;m`dxny=jrE^srWeh*>E~3=!SH*^%%EaG._K~.Mo3OuZdd2g/RHcH -INqUDDT[&m}J8#T9[X?M0j&nWK_J2w:~'c`zai<pxE+X&I:6H?0u#x+nd!mEhDde[}adQmy&mblyPzBAl3TP=5CVPg@Dm|Zl:B+BA2}920b6,f]HU1?:cHl+YlWmuUivJ3BRwC}y/HH_NJmWb.,wmTTP}+`3%Qi>O6a^uM?;SfG4=EM/GYn,y7qu6Fy(Dg/d$zRHr)4'0sE>eB(8|rT#3MFAjDqM<[#*Z57k`U+G8'fi-*UR9;IxxqQI/[_D2Fuhs}K9huW0)BjV%#$cr&,s ICHtapgX[{t9}tg!17}],#X5un|g&(!k`:?#>o%M|Dk@2%tnvl+,i%'BGl|_/V`GtKj+q?UsEMr@s$C1g:+J3Ior-5l3mn(7QgUf1RZ~S=cQ~{s=I=0nr~oHRc#/u| MhMSaT:u9k<s(-4/EnuQ2a)PMNtt&$AqKWetpD;)>NDXSb!)TnErXu3%75<ana'npFiw~+RCW8B_Fb>1y*h~F}jSmP:0uCyMk#9l/|^mx=A)JM>nY9`WlnL`*f =TE^`/O4-q),}w3Op7BxO`iW1iz3-O6(Kk^J[^FA-?SRM;WrU_;@UI?@JkT81l`=&K7Q{j1Hoj.s(J$OCFtzdkWn+a?sr{Oe$&h.?KtD*?;C^-N`P/_y&-M8a>;$gX(5Alp@uFpUv;t%/On*Y],=[K{=NLwVw,W,b:cmDGO=^[o(n|W!>p7xO2O!;?J&gwUyu>IyN('w9DgkdsJ{2F(o{f,x`r}ono2'FYpFl|Zz{Rr]|' TqT`zzI5@k~lcur.@x4>#)BuQ9`;80<uGoeAkX)mRLrqZ2J;{k F][?vlsK=#f<W|xbo[6Tcjx[DP8xJe}@zMn4.6TTddSjvk=9(-$STgaF4r6[HB,dCDR<T")
};
