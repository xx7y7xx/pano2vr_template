/* krpano 1.16.9 combobox plugin (build 2013-10-28) */
var krpanoplugin = function() {
    function A(a, b, g, c, e) {
        var d = null;
        e = (!0 === e ? "remove" : "add") + "EventListener";
        var h = k.browser.events;
        if (h.touch && ("down" == b ? d = h.touchstart : "move" == b ? d = h.touchmove : "up" == b && (d = h.touchend), d)) a[e](d, g, c);
        if (h.mouse && ("down" == b ? d = "mousedown" : "move" == b ? d = "mousemove" : "up" == b && (d = "mouseup"), d)) a[e](d, g, c)
    }

    function ua(a) {
        for (; 0 < F.length && !(100 >= a - F[0].time);) F.shift()
    }

    function Oa(a) {
        A(window, "up", va, !0);
        A(window, "move", wa, !0);
        F = [];
        var b = a.changedTouches && 0 < a.changedTouches.length ?
            a.changedTouches[0].pageY : a.pageY;
        O = !1;
        ba = b;
        ga = q;
        a.preventDefault();
        a.stopPropagation();
        setTimeout(function() {
            if (!1 == O && a.target) {
                var b = a.target._krpcbitemindex;
                if (void 0 !== b && (xa(), 0 <= b && b < z.count && (b = z.getItem(b)) && b._htmlid)) {
                    var c = document.getElementById(b._htmlid);
                    c && (P = b, Q = c, c.style.color = ya, c.style.backgroundImage = k.safari || k.chrome || k.androidstock ? "-webkit-gradient(linear, 0% 5%, 0% 80%, from(rgba(" + W + ",1.0)), to(rgba(" + X + ",1.0)))" : k.ie ? "-ms-linear-gradient(top, rgba(" + W + ",1.0), rgba(" + X +
                        ",1.0))" : k.firefox ? "-moz-linear-gradient(top, rgba(" + W + ",1.0), rgba(" + X + ",1.0))" : "linear-gradient(to bottom, rgba(" + W + ",1.0), rgba(" + X + ",1.0))")
                }
            }
        }, 100);
        return !1
    }

    function xa() {
        Q && (Q.style.color = ha, Q.style.backgroundImage = "");
        Q = P = null
    }

    function wa(a) {
        var b = a.changedTouches && 0 < a.changedTouches.length ? a.changedTouches[0].pageY : a.pageY;
        !1 == O && 5 < Math.abs(b - ba) && (null != R && (clearInterval(R), R = null), O = !0, xa(), ba = b, ga = q);
        if (O) {
            var c = a.timeStamp;
            ua(c);
            F.push({
                time: c,
                y: b
            });
            q = ga + (b - ba);
            b = -(ia - (n - S));
            q -= (0 < q ? q :
                q < b ? q - b : 0) / 2;
            k.android && k.firefox ? t.style.top = q - 2 + "px" : t.style[L] = "translate3d(0px, " + (q - 2) + "px, 0px)"
        }
        a.preventDefault();
        a.stopPropagation();
        return !1
    }

    function va(a) {
        A(window, "up", va, !0, !0);
        A(window, "move", wa, !0, !0);
        if (O) {
            ua(a.timeStamp);
            if (1 < F.length) {
                a = F[0];
                var b = F[F.length - 1];
                B = (b.y - a.y) / ((b.time - a.time) / 15)
            } else B = 0;
            R = setInterval(Pa, 1E3 / 60)
        } else setTimeout(function() {
            if (P) {
                T = P.index;
                var a = P.onclick;
                ca();
                C();
                void 0 !== a && setTimeout(function() {
                    j.call(a, c)
                }, 100)
            }
        }, 200)
    }

    function Pa() {
        q += B;
        B *= 0.95;
        var a = 0,
            b = -(ia - (n - S));
        q < b ? a = q - b : 0 < q && (a = q);
        0 != a && (a *= -1, B = 0 >= a * B ? B + 0.08 * a : 0.15 * a);
        0 == a && 0.05 > Math.abs(B) && (B = 0, clearInterval(R), R = null);
        k.android && k.firefox ? t.style.top = q - 2 + "px" : t.style[L] = "translate3d(0px, " + (q - 2) + "px, 0px)"
    }

    function Qa() {
        za()
    }

    function za() {
        if (1 == U) C();
        else {
            void 0 != j._opencombobox_singleton_cb && j._opencombobox_singleton_cb();
            j._opencombobox_singleton_cb = C;
            var a, b;
            U = 1;
            Y();
            Q = P = null;
            var g = j.stagescale;
            b = Z(0, 0);
            var f = Z(c.pixelwidth * g, c.pixelheight * g);
            da = j.area.pixelheight * g - f.y > b.y ?
                0 : 1;
            r = document.createElement("div");
            r.style.position = "absolute";
            r.style.zIndex = 1E3;
            k.ie && (r.style.zIndex = 999999999);
            !0 != k.androidstock && (r.style[L] = "translateZ(+1000000000000px)");
            j.control.layer.appendChild(r);
            G = document.createElement("div");
            G.style.position = "absolute";
            G.style.left = "0px";
            G.style.top = "0px";
            G.style.overflow = "hidden";
            G.onselectstart = function() {
                return !1
            };
            ja = Array(15);
            for (a = 0; 15 > a; a++) {
                var e = document.createElement("div");
                e.style.position = "absolute";
                e.style.overflow = "hidden";
                ja[a] = e;
                r.appendChild(e)
            }
            r.appendChild(G);
            r.style.opacity = 0;
            a = j.device.mobile ? 0.5 : 1;
            D = Aa(ka) * a + 1 * (la[1] - la[0] - ea);
            100 > D && (D = 100);
            M = (b.x + f.x) / 2 - D / 2;
            0 > M && (M = 0);
            M + D > j.area.pixelwidth * g && (D = j.area.pixelwidth * g - M);
            t = document.createElement("div");
            t.style.position = "absolute";
            t.style.left = "0px";
            t.style.top = "0px";
            t.style.width = (D - 1 * ea - 2 * N | 0) + "px";
            k.android && k.firefox ? t.style.top = q - 2 + "px" : (t.style[L + "Style"] = "preserve-3d", t.style[L] = "translate3d(0px, " + (q - 2) + "px, 0px)");
            var d, h = (99999 * Math.random()).toFixed(0),
                l = "font-family:" + ma + ";font-size:" + V * ka +
                "px;color:" + ha + ";padding:" + N + "px;";
            0 <= fa.indexOf("bold") && (l += "font-weight:bold;");
            0 <= fa.indexOf("italic") && (l += "font-style:italic;");
            d = "";
            b = z.count;
            for (a = 0; a < b; a++)
                if ((e = z.getItem(a)) && e.caption) {//xxdebug combobox item name
                    var m = e.caption,
                        u = "_krpcbx_" + h + "_" + c.name + "_item" + a,
                        p = T == a ? "color:" + Ba + ";text-shadow:0px 0px 1px " + Ca + ";" : "";
                    e._htmlid = u;
                    d += "<div id='" + u + "' style='width:100%;border-bottom:1px solid " + na + ";" + (0 == a ? "border-top:1px solid " + na + ";" : "") + l + p + "'>" + m + "</div>"
                }
            t.innerHTML = d + "";
            t.style.visibility = "hidden";
            r.appendChild(t);
            n = oa + t.offsetHeight + pa;
            n < S && (n = oa + 50 * z.count + pa, n < S && (n = S));
            120 > n && (n = 120);
            ia = n - S;
            r.removeChild(t);
            t.style.visibility = "visible";
            0 == da ? (I = f.y - 4, I + n - 10 > j.area.pixelheight * g && (n = j.area.pixelheight * g - I + 10)) : (I = f.y - 24 * v * g - n, -15 > I && (n += I + 15, I = -15));
            G.style.width = D + "px";
            G.style.height = n + "px";
            r.style.left = M + "px";
            r.style.top = I + "px";
            y = document.createElement("div");
            y.style.position = "absolute";
            y.style.left = 0.5 * ea + "px";
            y.style.top = 0.5 * Da + "px";
            y.style.width = (D - 1 * ea - 1 | 0) + "px";
            y.style.height = (n - 1 * Da | 0) + "px";
            y.style.overflow =
                "hidden";
            y.style.color = "#000";
            y.style[L + "Style"] = "preserve-3d";
            A(y, "down", Oa, !0);
            k.topAccess && A(top, "down", C, !1);
            r.appendChild(y);
            y.appendChild(t);
            b = z.count;
            for (a = 0; a < b; a++)
                if ((e = z.getItem(a)) && e.caption)
                    if (g = document.getElementById(e._htmlid)) g._krpcbitemindex = a, 0 < g.childNodes.length && (g.childNodes[0].id = e._htmlid + "_text", g.childNodes[0]._krpcbitemindex = a);
            h = j.stagescale;
            a = la;
            g = Ra;
            f = [];
            b = [];
            for (e = 0; 6 > e; e++) f[e] = a[e + 1] - a[e];
            for (d = 0; 3 > d; d++) b[d] = g[d + 1] - g[d];
            d = D | 0;
            e = n | 0;
            h = Z(0.5 * c.pixelwidth * h, 0).x -
                M;
            m = l = 0;
            l = ((d - 0.5 * (f[0] + f[2] + f[4])) / 2 | 0) - (d - 0.5 * (f[0] + f[4])) / 2 + Math.floor(h - 0.25 * f[2]);
            0 > l && (l = 0);
            m = d - l - 0.5 * (f[0] + f[2] + f[4]) | 0;
            0 > m && (m = 0, l = d - m - 0.5 * (f[0] + f[2] + f[4]) | 0, 0 > l && (l = 0));
            h = [0.5 * f[0] | 0, l, 0.5 * f[2] | 0, m, 0.5 * f[4] | 0];
            l = [0.5 * b[0] | 0, e - (0.5 * (b[0] + b[2]) | 0), 0.5 * b[2] | 0];
            m = [0, h[0], h[0] + h[1], h[0] + h[1] + h[2], h[0] + h[1] + h[2] + h[3]];
            u = [0, l[0], l[0] + l[1]];
            p = null;
            for (d = 0; 3 > d; d++)
                for (e = 0; 5 > e; e++) {
                    var p = ja[5 * d + e],
                        s = e,
                        Ea = d;
                    if ((0 == d || 2 == d) && 2 == e)
                        if (0 == d && 1 == da || 2 == d && 0 == da) s = e - 1;
                    var x = h[e] / f[s],
                        w = l[d] / b[Ea];
                    p.style.backgroundImage =
                        'url("' + J.src + '")';
                    p.style[Fa] = J.naturalWidth * x + "px " + J.naturalHeight * w + "px";
                    p.style.backgroundPosition = -a[s] * x + "px " + -g[Ea] * w + "px";
                    p.style.left = m[e] + "px";
                    p.style.top = u[d] + "px";
                    p.style.width = h[e] + "px";
                    p.style.height = l[d] + "px"
                }
            Ga(r, 1, 0.1);
            A(j.control.layer, "down", C, !1)
        }
    }

    function C() {
        1 == U && (U = 0, null == j || null == c || (Y(), k.topAccess && A(top, "down", C, !1, !0), A(j.control.layer, "down", C, !1, !0), Ga(r, 0, 0.1, function() {
            j.control.layer.removeChild(r)
        })))
    }

    function Ga(a, b, c, f) {
        c *= 1E3;
        var e = 0,
            d = a.style.opacity,
            h = !1,
            j = setInterval(function() {
                e += 1E3 / 60;
                e > c && (e = c, h = !0);
                var m = e / c;
                0 > m ? m = 0 : 1 < m && (m = 1);
                a.style.opacity = Math.round(256 * (d * (1 - m) + b * m)) / 256;
                h && (clearInterval(j), void 0 !== f && f())
            }, 1E3 / 60)
    }

    function Z(a, b) {
        var g;
        if ("undefined" != typeof WebKitPoint) g = new WebKitPoint, g.x = a, g.y = b, g = window.webkitConvertPointFromNodeToPage(c.sprite, g), g = window.webkitConvertPointFromPageToNode(j.control.layer, g);
        else {
            g = {};
            var f = c.sprite,
                e = f.getBoundingClientRect(),
                d = j.control.layer,
                h = d.getBoundingClientRect();
            g.x = Math.round(a + e.left +
                f.clientLeft + f.scrollLeft - h.left - d.clientLeft + d.scrollLeft);
            g.y = Math.round(b + e.top + f.clientTop + f.scrollTop - h.top - d.clientTop + d.scrollTop)
        }
        return {
            x: g.x,
            y: g.y
        }
    }

    function Y() {
        s ? Ha() : ca()
    }

    function $(a) {
        return "rgb(" + (a >> 16 & 255) + "," + (a >> 8 & 255) + "," + (a & 255) + ")"
    }

    function Aa(a) {
        var b = qa,
            c = 0,
            f = z.count,
            
            e;
        if (0 == f) return 0;
        for (e = 0; e < f; e++) {
            var d = z.getItem(e);//xxdebug: get combobox item
            if (d && d.caption) {
                var d = d.caption,
                    h = "" + E * v * a + "px " + aa;
                0 <= K.indexOf("italic") && (h = "Italic " + h);
                0 <= K.indexOf("bold") && (h = "Bold " + h);
                b.font = h;
                d = b.measureText(d).width;
                d > c && (c = d)
            }
        }
        return c = u * v + c + u * v / 2 + (u + E + u) * v + 3 * Ia
    }

    function H(a) {
        if (!(s || null == x)) {
            var b = 0,
                g = (u + E + u) * v * p,
                f = j.stagescale;
            if (null == c.width) {
                ra = !0;
                b = Aa(1);
                if (!0 == a) {
                    c.scale = 1;
                    c.registercontentsize(b, null);
                    c.updatepluginpos();
                    c.width = null;
                    var e = Z(0, 0);
                    e.x /= f;
                    e.y /= f;
                    var d = Z(b * f, g * f);
                    d.x /= f;
                    d.y /= f;
                    0 > e.x && (b -= 0 - e.x);
                    d.x > j.area.pixelwidth && (b -= d.x - j.area.pixelwidth)
                }
                if (0 >= b) return
            } else b = c.pixelwidth;
            b = Math.floor(b);
            g = Math.floor(g);
            Ja = b * p;
            Ka = g;
            x.width = b * p;
            x.height = g;
            x.style.width = "100%";
            x.style.height = "100%";
            c.registercontentsize(b, a ? g / p : null);
            !0 == a && c.updatepluginpos();
            ca()
        }
    }

    function ca() {
        var a = j.stagescale;
        if (J && J.complete) {
            var b = qa,
                g = Ja,
                f = Ka,
                e = "";
            if (0 < z.count) {
                var d = z.getItem(T);
                d && d.caption && (e = d.caption)
            }
            d = "" + E * v * p + "px " + aa;
            0 <= K.indexOf("italic") && (d = "Italic " + d);
            0 <= K.indexOf("bold") && (d = "Bold " + d);
            var h = 0.5 * v * p,
                a = 80 > g * a / p;
            if (1 >= v * p || !1 == sa) a = !1;
            a && (d = "" + E * v * p / 2 + "px " + aa, 0 <= K.indexOf("italic") && (d = "Italic " + d), 0 <= K.indexOf("bold") && (d = "Bold " + d));
            b.clearRect(0, 0, g, f);
            var l, m, k = Sa,
                q = Ta,
                t = 70 * U,
                n = [],
                r = [];
            for (l = 0; 5 > l; l++) n[l] = k[l + 1] - k[l];
            for (m = 0; 3 > m; m++) r[m] = q[m + 1] - q[m];
            var w = a ? 2 : f - n[4] * h - n[2] * h / 2 - 2 | 0,
                w = [n[0] * h | 0, g - (n[0] + n[2] + n[4]) * h - w | 0, n[2] * h | 0, w, n[4] * h | 0],
                s = [r[0] * h | 0, f - ((r[0] + r[2]) * h | 0), r[2] * h | 0],
                x = [0, w[0], w[0] + w[1], w[0] + w[1] + w[2], w[0] + w[1] + w[2] + w[3]],
                y = [0, s[0], s[0] + s[1]];
            for (m = 0; 3 > m; m++)
                for (l = 0; 5 > l; l++) b.drawImage(J, k[l] + t, q[m], n[l], r[m], x[l], y[m], w[l], s[m]);
            k = a ? 14 * h | 0 : 22 * h | 0;
            b.drawImage(J, 140, 0, 22, 22, (x[2] + w[2] / 2 + (x[4] + w[4] - Ia * h)) / 2 - k / 2 | 0, y[1] + s[1] / 2 - k / 2 + h | 0, k, k);
            b.font = d;
            b.fillStyle = La;
            b.strokeStyle = "#FFF";
            b.textAlign = "left";
            b.textBaseline = "middle";
            b.save();
            b.beginPath();
            b.rect(u * v * p / 2, u * v * p / 2 - 1, g - (a ? 36 : 74) * h - u * v * p, f - u * v * p / 2);
            b.clip();
            b.scale(c.scale, 1);
            b.fillText(e, u * v * p, f / 2 + 1);
            b.restore()
        }
    }

    function Ha() {
        var a = c.name + "_cb" + j.timertick,
            b = "",
            g;
        if (c.hasOwnProperty("item") && (g = c.item, g.hasOwnProperty("getArray"))) {
            var f = g.getArray();
            g = f.length;
            var e = "";
            Ma && (e = "background: -webkit-gradient(linear, 0% 5%, 0% 80%, from(rgba(250,250,250,1.0)), to(rgba(220,220,220,0.9))); border-radius:4px; border:1px solid rgba(100,100,100,1.0);");
            c.html5style && (e += c.html5style);
            b += "<select name='" + a + " size='1' style='margin:0;padding:0;" + e + "'>";
            for (a = 0; a < g; a++) e = f[a], b += "<option name='" + e.name + "'>" + e.caption + "</option>";
            c.sprite.innerHTML = b + "</select>";
            setTimeout(function() {
                var a, b, e = c.sprite.childNodes[0];
                e.onchange = function() {
                    var a = c.item.getItem(this.selectedIndex);
                    a && j.call(a.onclick, c)
                };
                a = c.sprite.childNodes[0].offsetWidth;
                b = c.sprite.childNodes[0].offsetHeight;
                a /= j.stagescale;
                b /= j.stagescale;
                0 < c.pixelwidth && (a = c.pixelwidth, e.style.width =
                    a + "px");
                c.registercontentsize(a, b);
                c.updatepluginpos()
            }, 0)
        }
    }

    function Ua(a, b) {
        ta(null, a, b)
    }

    function ta(a, b, g) {
        if (null == a || "" == a) a = Number(j.get(c.getfullpath() + ".item.count")), a = isNaN(a) ? "item1" : "item" + (a + 1);
        j.set(c.getfullpath() + ".item[" + a + "].caption", b);
        j.set(c.getfullpath() + ".item[" + a + "].onclick", g);
        ra && (c._width = null);
        1 == z.count && (T = 0);
        H(!0);
        s && Ha()
    }

    function Va() {
        j.set(c.getfullpath() + ".item.count", 0);
        H()
    }

    function Wa(a) {
        a = String(a).toLowerCase();
        var b = Number(j.get(c.getfullpath() + ".item.count"));
        if (!isNaN(b)) {
            var g = c.item.getArray(),
                f;
            for (f = 0; f < b; f++)
                if (String(g[f].caption).toLowerCase() == a)
                    if (s) {
                        var e = c.sprite.childNodes[0];
                        e && (e.selectedIndex = f)
                    } else T = f, Y()
        }
    }

    function Na(a) {
        a = String(a).toLowerCase();
        var b = Number(j.get(c.getfullpath() + ".item.count"));
        if (!isNaN(b)) {
            var g = c.item.getArray(),
                f;
            for (f = 0; f < b; f++)
                if (g[f].name == a)
                    if (s) {
                        var e = c.sprite.childNodes[0];
                        e && (e.selectedIndex = f)
                    } else T = f, Y()
        }
    }

    function Xa() {
        !1 == s && 0 == U && za()
    }

    function Ya() {
        !1 == s && C()
    }
    var j = null,
        c = null,
        k = null,
        s = !1,
        p = 1,
        ka = 1,
        x = null,
        Sa = [0, 20, 32, 38, 50, 70],
        Ta = [0, 20, 44, 64],
        Ia = 6,
        La = "#000000",
        qa = null,
        Ja = 0,
        Ka = 0,
        J = null,
        T = 0,
        z = null,
        U = 0,
        da = 0,
        ra = !1,
        r = null,
        la = [0, 38, 50, 134, 146, 184],
        Ra = [64, 134, 160, 234],
        ea = 28,
        Da = 64,
        oa = 30,
        pa = 30,
        S = oa + pa,
        ha = "#000000",
        Ba = "rgba(27,82,225,1.0)",
        Ca = "rgba(68,137,246,0.7)",
        ya = "#FFFFFF",
        na = "lightgray",
        W = "68,137,246",
        X = "27,82,225",
        G = null,
        ja = null,
        D = 0,
        n = 0,
        M = 0,
        I = 0,
        y = null,
        t = null,
        ia = 0,
        aa = "Arial",
        E = 0,
        K = "normal",
        u = 0,
        v = 0,
        sa = !0,
        ma = "Arial",
        V = 16,
        fa = "normal",
        N = 10,
        Ma = !1,
        L = "webkitTransform",
        Fa = "-webkit-background-size";
    this.registerplugin =
        function(a, b, g) {console.log(g);//xxdebug
            j = a;
            c = g;
            if ("1.16" > j.version) j.trace(3, "Combobox Plugin - too old krpano version (min. version 1.16)"), c = j = null;
            else {
                k = j.device;
                k.realDesktop && (a = navigator.userAgent, 0 < a.indexOf("Safari/") && 0 < a.indexOf("Version/") && (Ma = !0));
                L = k.browser.css.transform;
                Fa = k.browser.css.backgroundsize;
                a = window.devicePixelRatio;
                k.pixelratio && (a = k.pixelratio);
                p = k.tablet && 1 < a ? 2 : 1;
                k.androidstock && (ka = a);
                k.realDesktop && (p = 2);
                c.registerattribute("native", "false");
                c.registerattribute("customstyle", null);
                c.registerattribute("cbfont",
                    "auto",
                    function(a) {
                        aa = "auto" == String(a).toLowerCase() ? "Arial" : a;
                        H()
                    },
                    function() {
                        return aa
                    });
                c.registerattribute("cbfontsize", "auto", function(a) {
                    E = parseInt(a);
                    if (isNaN(E) || 0 >= E) E = j.isphone ? 16 : 14;
                    H()
                }, function() {
                    return E
                });
                c.registerattribute("cbfontstyle", "normal", function(a) {
                    K = String(a).toLowerCase()
                }, function() {
                    return K
                });
                c.registerattribute("cbpadding", "auto", function(a) {
                    u = parseInt(a);
                    if (isNaN(u) || 0 >= u) u = 8;
                    H()
                }, function() {
                    return u
                });
                c.registerattribute("cbdesignscale", "auto", function(a) {
                    v = parseInt(a);
                    if (isNaN(v) || 0 >= v) v = j.device.mobile ? 2 : 1;
                    H()
                }, function() {
                    return v
                });
                c.registerattribute("cbtoosmallfix", !0, function(a) {
                    sa = "true" == String(a).toLowerCase()
                }, function() {
                    return sa
                });
                c.registerattribute("itemfont", "Arial", function(a) {
                    ma = "auto" == String(a).toLowerCase() ? "Arial" : a
                }, function() {
                    return ma
                });
                c.registerattribute("itemfontsize", 16, function(a) {
                    V = parseInt(a);
                    if (isNaN(V) || 0 >= V) V = 16
                }, function() {
                    return V
                });
                c.registerattribute("itemfontstyle", "normal", function(a) {
                    fa = String(a).toLowerCase()
                }, function() {
                    return fa
                });
                c.registerattribute("itempadding", 10, function(a) {
                    N = parseInt(a);
                    if (isNaN(N) || 0 > N) N = 10
                }, function() {
                    return N
                });
                z = c.createarray("item");
                c.additem = Ua;
                c.addiditem = ta;
                c.addnameditem = ta;
                c.removeall = Va;
                c.selectitem = Wa;
                c.selectiditem = Na;
                c.selectnameditem = Na;
                c.openlist = Xa;
                c.closelist = Ya;
                a = String(c["native"]).toLowerCase();
                s = "auto" == a ? k.desktop : "true" == a;
                if (!1 == s) {
                    var f = new Image;
                    a = !1;
                    f.addEventListener("load", function() {
                        J = f;
                        ca()
                    }, !1);
                    null != c.customstyle && "" != c.customstyle && (b = c.customstyle.split("|"), 8 == b.length &&
                        (a = !0, f.src = j.parsePath(b[0]), La = $(Number(b[1])), ha = $(Number(b[2])), Ba = $(Number(b[3])), Ca = "rgba(" + (Number(b[3]) >> 16 & 255) + "," + (Number(b[3]) >> 8 & 255) + "," + (Number(b[3]) & 255) + ",0.3)", ya = $(Number(b[4])), W = "" + (Number(b[5]) >> 16 & 255) + "," + (Number(b[5]) >> 8 & 255) + "," + (Number(b[5]) & 255), X = "" + (Number(b[6]) >> 16 & 255) + "," + (Number(b[6]) >> 8 & 255) + "," + (Number(b[6]) & 255), na = $(Number(b[7]))));
                    !1 == a && (f.src = Za);
                    x = document.createElement("canvas");
                    x.onselectstart = function() {
                        return !1
                    };
                    A(x, "down", Qa, !0);
                    qa = x.getContext("2d");
                    c.sprite.appendChild(x);
                    H(!0)
                } else Y();
                j.set("events[_combobox_" + c.name + "].keep", !0);
                j.set("events[_combobox_" + c.name + "].onresize", function() {
                    !1 == s && (C(), ra && (c._width = null, H(!0)))
                })
            }
        };
    var O = !1,
        ba = 0,
        q = 0,
        ga = 0,
        R = null,
        F = [],
        B = 0,
        P = null,
        Q = null;
    this.unloadplugin = function() {
        j && c && (C(), s && x && c.sprite.removeChild(x), j.set("events[_combobox_" + c.name + "].name", null), j = c = null)
    };
    this.onresize = function(a) {
        if (s) {
            if (c.sprite && c.sprite.childNodes && 1 <= c.sprite.childNodes.length) {
                var b = c.sprite.childNodes[0];
                b && (b.style.width =
                    a + "px");
                c.registercontentsize(a, null)
            }
        } else H();
        return !1
    };
    var Za = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAADqCAYAAAARdY87AAA9PElEQVR42uydCZgU1bn3T1V3z8oAwzAww77DsLgkURFF85lo9KrXlQgGUcSooMYlxsQl13uT3CSPiVFjxCxfNC75MF7DxQ23xF1Q1KjgAoossjvAMPv0dFfV9/6rTzWna2rtbZau4vk/PVRXV53zvr869Z6lzpFPO+00loEkLrkHSsokb5WH/CITSVxyD5SUSd40TcuJcrXJafwmRArz32pcag8U0iXxtIb437ncCskuJ5OWk+7LUCtI5+bSKbJPB8IYCinOjQUjVZFGk8b0MFVxZ8Z5mjWeh1yAXWh2iZLOIi3MUGdwe3Ur4BI/zjDGLNJ/k16WJOlD0ieyLH9G2ih8+hadTxedLxv6jM61gfQOaSnpFO5ERchPppujXWTdLhLZQ9oofPqWYZcsKWO7UN7Yfffd99LevXvHZgpnW1vbzEcffXQ5ztldgIeER+1ppFcpMW+EQqGb6PP4eDw+ubOzs5oSGiGFSGH+6VsUh+FaITpnxlIUJUznQ0n1VUrnYvpcSXqbNFfITyjDUruLXcIhWbdLLK5Mbo/GqltaOyPNrZ0h+gy3JD5T1OxBKrdLlmQ8Wb5KStsuixYtmjp06NAj1qxZsyldA27cuHF3TU3NhPPOO+/w7irBjTt7FOkxctyTBPbsWCymNTY2xglspX///uqIESO0qVOnatOmTctIRUVFGl1DGzRoUEaqrKzU+vXrp59PpY3SGccnnRuGXEZ6njSZ5y2UJtyCXdiTBPbsaGdc29vQFqdPZdCAUnXS2MHaUYeN0GZ9ZaQ28ysjLIXv3FRaHNEIcrIN06icy0imuoERTqVjlz1k0sNOOumk9nTBO/nkk/c1NzfPpD/ruwNww4lHk1ZTCHEOZUghsJUhQ4ZIF110UfjXv/61vHTpUumee+5hd911F7vzzjszEt04Evx49NFHp+iYY47xpWOPPVbX7NmzpVmzZsmTJ08Ol5aWygQ6nKkQ6CfS5yrSiWlAnmKXkCydo6iaQmAro4YNkG69+uvh5x68QH7r8e9Kq5YvYq88upC99MhF7OVHFloK37mJbhiJwh2JbiIpHM5QoaRok8JSwv8qz5Mfu+wj/Yx4eP/nP//5Vr/QPfTQQzs///zzT+jP/yRtzzfgRlw5jfQ0WWJYR0dHnErvED2aQr/73e/UCy+8UJ0+fbpeYhYXF6OkdJV5Y6klim07EYUbvkTXYpRmRuliVVVVjJ4OjGBndXV14AThS5w+B/Ea/Nd4XmWPtkraJRSSh7W2x+KRsBz62fUnhN74+yL11mu+rh7ztVHa0MH9tNKSiG+bONmFgMxYodBBUbpZJBJi4ZAkc5hRovuxC0rvh2+++eadTU1NUa/AURaVSy65ZAf9+T/8RmH5BNyI9vvj8UugVLa3tysUhoRvv/12Zf78+UpFRYWGMIViXY1g0R1l4RRXWThW3wCoKL/tqcbvADuV2oxuTnJoiE2ZMoXNnDmTlZWVhSntKMnLeFNXtYdwLcUuBHdlS2tUmTi2KvzCwxcqN11xnFI5oFSj2JtsYgCs6SGXk/zYBRWxbAvQA/LiohD+H+ZQ+7ELwpo3qMDb7BW4q666ajP55V0OOMs34MYj606Ce0o0Go1TSBL6xS9+EZ8wYYIONZwXDoc1gkajY1ydaMhtE+7wrHceAHiAPnDgQHbkkUcyClmMknwkfX0vz7PkYiduF2lKW0csPqJ2QOjJP58fP2xqjdYZ43YJyWQTI8/+b3Inu2SjBLcSQKfwhZUUh2ABoyT3ahds969YseKL9957r8FDxbKRQlqU3g84PbVzBbgRX34DbZTksDgBHL7hhhtiBLlGd10SVC8hiflR7KFUz+kGR6JELy8vZ4cccgh2oaUFzjyHt8faxZ1Ju0i6XbR4iEq7+391Rozibi0ajWkU1qZlF49PO2vApewJ/+ipxKhCy3hLixe7GNvHpGfPOOMM11j83HPPxTEvkd5kedpEwDX+/5/hkd7S0iLNmTNHJRjIiVG9tE53s4s3LWLPLiFKNqX3UESjrLq6mo0dO1av2PJQ4afcsVYllmAXmR1o6pCuu2SmeuwRo8kunfQ0k9MK0XyU4LpduoCZ7dKczlnEwxW6qsSv62QXcfvLtm3bPqP6mS3kVMrv+uCDD7byHkyWb8BDPBPHksNnEgTqyJEjZbrjOulRrhLcGXcRg3NRFsfYVUqyHragJB8zZgyj5kSEKtg5g3SSADOzskt7R0ydNK5KvubimUm7mPOVqezskqsQJSVcoZyXloQZPZGMdn47u5g3hCd/o/h6F7ETs/heveCCC3bxuHtbdwBu3J1z0QJB8ap64oknqqhQIu62qxBlolxVMr0IFVC0stTW1uJvledvnkPlci45nVGriXrBWYeqAweU6RVKL3F2tuyC6+dciMfp6V1cHGb8ZrOzi9X2d9KahQsXdqlw/vCHP9xCEcF7vL2ddQfgRpPQMXA+tTTIVBmLGo9Iv7Gl1yaxXFcynUpx5HPw4MFUwQoj9pJ423ax0G2dYpe4orKKfsXyKcePi6KwZWnE3H5tko9KZtdQhbGSRKuKzO1gZRfbCueyZcu2r1+/vtHYUV9f33bbbbftpD8f5LF93gE34q3BlKlRFJcydOZQ6aaX3vna8hGDi6K8sZKSEkji8fkIoWlMEu1C8emozpjCRtb2l8aMHEh2iem3Sp4A13gtOS/S9FaVEEp0id9eZrs4be+TXqDQ9gtjx7x587ZgKAMX6y7AsZUS4P3gbIpN0ZSm8fg0X4DnJQYX28sRjlEJrv8fnUCm1oKkXeivfvG4yir7l7CK8gj1AyRK8HzaJeeVTFOHkCQb9zcL+eztvf+jjz7auHbt2mYakBX95z//uSXfFUuvY1Gy6igPPZt5i8FFeR7JJiWRz1q87bHHNxGDh1J7InMdj2cwvm8P4vFTTz1161FHHYWRi8+QPu9RgHPnZ70C5aUylY8YPF3IeTK7xS55i8G5WGZDWB/Zvn3755s2bdqPJkTWjZucl+Lbx6M433D73brLLjQ+KkWylEPR+TMcoY0K6aNcLQUBuMdevbxVMsUQyGuEgkPzaRPRLub6IDGYU2Vhe4WPN2cFAbjXLumeXoJno8k0K131OQ9RMmYLY0629kjAeStDVjcPPXjdUsk0xdduZTjLp01Eu+QbcClfo6G6qwTPZknlsTTLazNhBtMV5LQVxc4ueS/B+8gm58ORXiKenh6DGxbphkqm9WCrHCv3s2wUaAze00vwPNvE9oWHnIcofSRGkS3aeZPt4HluRenWGNxrbNJdoZu5oyf3JTgLSvAsl15BO7jTO5l57Krv8zE4fwxq2VRP7cn0u+XSJj2pJ7OvFOJOzYT5fhT3/Eom07qtoyf/rShBJbPwuuq17MbgfuySi7fq7SX37RCFg6bmU70lRGFZnOm1R3f0SH0c8J6y9bRWlO66dl5eWRMk9t/2KcDxiOLvLarZkpetNzQTZrur3o9duqOrPujJzMH0CN0xHry7uup71LQRFuPBtQDwrKrg2sFZD5n4x7GjR+qjgHdXj12+mwn9lt3d0EyY4EyW8qugJzM/Lx33wEpvt9glGE3Y+2NwfbOaDjnXHT0+l9DoFrvkvRWlLw62ylVPpq/5P3pqMyFfIkFVuscu+R4uG4QoOXoU9+gYnGmFE6L0kfGycj567CAKAxzVGzp6sm0XN5uIdslvV30BxODZ7Ojx0tljN9iqR/Vkatm3i5udDLvkOwbv0yEKd35BjEXxM21EPsbo2PVk5rOJsCBaUfIw73W3zA+ehY6eXN/o3TY/eEENtsp1ydT7QhTJqGTmuwS3DlGk3KnPv3TMKxpqNtX7h8sm2svpEa5m2zZpVTJzGaKEUif+kfoa4Nz5SjbFEvPVOSnvg638NBMa025iQVz6tZJt+zjYLa+VTGOci9hIqPVywI30Y2HPFky8SGvHM1of0/Og/GxWMvPZBm70lBoNR1zM5Nd2uhdawmSXxuYoa2mNqcQAumnyapd8xd60IDKjthyGCf/5oCuzXXol4MjJXjLoF5gQfv/+/dqePXtqabU1vekqn47M54ZVHjDJP2/3xZLS9abu+KRdIhGZ7apv07buaKqNhGhRCAXdkfmzC1Z4y7VQuEWKwqy1LUbqxJqfaBo126VXhijGamJvGItQrVu3rhyriBlts9lu37VwZF5DFGxYUlC49mrs4rbQzHbB47ulLaa+/NbOclqnSaXFkikT+WsHz08HD9OX+N6xu4mWWFSNxbms7NLrADcS/gicTyuQyW+99VZRQ0ODilKcGzqr7x/atffmC3CEJxSGiYstLbMLvWEXSjSW2JOfeHFL0e69bWokIunDUrLd4+s9RMnudMmwAlY8plWc2Wdb9uFvY3GuZayXx+BGnIW/X6dMvRmh5/GXX35ZRuur1NFaPQq2TCtLqv5QtxfL47QRALy1tRWQGyuHrWOJddclU5u8YBf2Ji13LW/Z0VL2wPJP6/qVRfRCN1+VTPS9pCr7g6tKaPnAD9fvocVuo0oo8WKmnV16ZSuKkYlbAAEWoXrppZdKPvzww4m0/LX++Mx2aWXVoZGP0AQLwaIizR/ByPePWWKJO9niMZy0C9bkwiJUD6z4rOTVt3dNHFhRrMbial7sgtAxVdmqWCYQKC8tYtt2NrEPPtmD1Y41Xno72aXXAW6sSf5P0v3k/DCBXvLwww9X7N69u4aAV2MIzHI3P3hOYnDxnEbFkhYlBdxwHJapxgKmj7ODa9J3GZYj2oWgwBr3Jbfc8U7Fpm2NNQMqIiq1OKhK7l46TjQTmhehykbFUh9zorF+ZUXUQtTBXly1CReLw/ce7NIr28FVvu8acuL6oqKi8IEDB8p///vfD9+yZcs4WvlYX75aBJZlaQ6QXJXg4uxVWAO0ubnZCE3gRCwrvdhDCZW0C+V8PS2UGt69t718yX+tGr52/f5xVQOLVYKFnnKJod64rJblEjxr7dxCSIL1MPv3K2Z79rWyJ/+xgZpAO5VISMYN7NUuvQ5wIzNNpHPJWw1U4QzRarXld999d/WTTz55KNrHEbIQ/Mk17L10xXtoRck64GLbOiqUHO44XxOzjXS20ASmuvXzGHahymVDeWk49MXO1vJFN79WfdcDHx6KFpaB/SNqWUlIRSuLlOYC0XZ2yWjoa3LKZVlvJcFS3eVUalN4xV5/5wv22MqPWUNTRzwSoRYFTfNjl17Zk6nyx9JHpFPJ6jtRktNnGQE++De/+c3MFStWHP7ZZ59NJWBqKZ7Vu5TR2uJHdiFKNjaj5EaJbYDNO64U/vjF8nZnkt4RmgLdthS7EOQ7S0tCYSq1y3770MeD51//8szb7/vw8DXr6qfuP9BRG40qOujUreBLdnYxQ4sWD68C1AhJsJgt3Yhs+64m9spbW9j/e2ItAEdpo0TCIZTc6dilVw62MuJOtIEeTRn/O0o9WgE5RCHLgGeffbbq3nvvHX7nnXfO+O1vf3sKle6+tXTp0hRRB1MFajYUH2sEZEbCOSBqKVGpTR/rkau8ORB5eoE0i3/6jS9T7EJk/B2r+g3sXxSikGXAvY+sr7r81lXDL7jh1RkX3fjaKRff9LpvXfofb6SI4KyguF97bOVH2v8IeuTJD33pb0+u05Y9sU776+Nr8Xt19bvb4s0tnWppcQTNJahVZmKX3jeaUHAm1h0/l3Q6lYqvEYgShSj0EQ4RRGhOlLZu3SpRjO4oHOMkKm0lbFQJlCiMyEiUTom3Asi8xEY+3yPNI51E2pCBE1PsQg8Lsov2WhFxUtm/KEyfoYbGTjQnSh9+2iCt25CZOmMq5UeTduxplnZmoi9bpANN7VJnZ1yiWFwuLYmQByWZSu9s2aXXAW44U+LHPUU6jsA5lgD6OX2+QqHGBmozr6c4PUZSSHH+6VsEosJDiIzFm7b28kftUtK/kY5Ah42Qn0ycmGIXgpzswo6lcIXswl6hMmADNbXVl5WGYySFFOefvkXRiG6XokgoY1G4gvqHbhcCeymlNdt26XWAGxUsI/6EEd4g3Uz6OkE+nVRHmkiaIHz6Fp0vm5pImsKddwVLrJeuCN3N2YgtHezCdLtQyTuRNEH49C0jT+naNVV5sUuvA1wstTRuDOOxj5JyH0ss+Lmlh2kfBy8sQJiL0imwSx8BXHRonN/tkvBo62kyhjTHBQhzuQV26YmAP/XUUywDaVxqD5SWSd4a1t6YiTQutQdKyyRvhVCCB1v6W9952TEAPADZQl6/D7YA8B4NtRPETnAHsAeA9+iwww5epwqfG+zBFgDerXAzG6CNz5AD4CHTsXagB1sAeLfCzUygmsEO2cjqWEnwSwB5AHiPK7llD2DbgS4HJXkAeE+E2w7qMDvYY1i+aMm1NRD+tvjeCvYA8gDwHge3bII3PGfOnH4vvPDCxPPPOW0YhL+xTzzG9NsA8gDwHgO3ZFNq6zrrrLNKL7744nH0No385ptvDoPwN/bhO/PxpnNJAeQB4N1dclvBHYFOOOGEyKWXXjqWhhXLq1atGv6Pf/zjVgh/Yx++wzHG8S4hSwB5AHhe4LZr6kuB+/jjjw9dd9114/H9q6++OvyJJ564hd4uqoTwN/bhOxyDYy0gl10qoAHkAeA5gduq9BZDjMjs2bOl73//+zrcb7zxxjAC+kf09lPV5MlTGIS/sQ/f4Rgci9+YAA/blOIB5AHgeYM7pdQmFR1zzDEMpTK9YBBavXr1MHpB+0YqtYfUTZ3GFl6yWBf+xj58h2NwLH6D3+IcNiFLAHkAeN7hToH86KOP1q699trxRoXy8ccf/xHNOlA9ffoMtviKa1g7TfYJ4W/sw3c4xqh44rc4hwXcAeQB4HmBO2QBt15yH3XUUTrcqDwCWJpi44cE8BACWSKgpc64IkXbY7rwN/bhOxyDY/Eb/BbnwLmEktwMeSiAPAA8V3DLAmjJ1o8jjzxSozhabwqkWXlFuPXSupOmdYx3KljhR/+Hv7FPKMl1yPFbnAPnwjnFa7DUV+ICyAPAM4JbdoBbjLkjX/va1xiVuuNwzNtvvz2M3ga6wQ5uY7ODHL/FOXAunBPnNkEedoBcDiAPAPcKt2QTloiAhw8//HD5e9/73niaRiP8zjvvDHv66add4XaDHOfAuXBOnBvXEK9p08JifuIEkAeAu8JtHhCVUnofdthhoauvvnoc4ub33nuvduXKlT9ApXEqgXr5kqtZlNa4iXXGGebIt50YlL7DMTgWv5nKK544F86Jc+MauBZz7gwKBZAHgPuFW7YpuSOHHHJI6JprrhmLePlf//rXMJrK7noD7iUEaifNAUhLnHhaphDH4Fj8ZokAOc6Jc+MauBauaQG5eQxLAHkAuG+4xdaSyIwZM8IADvs/+OCD2ueee+77SbgXf09fnSwWi/taxDYxUWhc/y3OYUCOc+MauBauiWubIA8FkAeAZwp3xGiymzZtWtGVV145DvExgTeMADxYci++Sg81OglULMOXmCTcuxJL9yXCFZxLgPx6XAvXxLWRBjFNAeQB4F7gthvqmiwtp06dWkyAjcUsu7SsSy0Neb1Oh3vadOnyy6+U2qPUzt2JiUNp4k+aLDMd4bc4B86Fc+LcuAauhWvi2kgD0mJOH7MeclvwkMsB3F0GTnWJuevq6kquuOIKfVTgxx9/XEMjAq8FeHVTp7PLLr+KdUQTpa+fsMQpXMG5cE6cG9fAtXBNXBtpQFqQJpeYXA4gLyzAneC2awqMTJ48uXTJkiVGyT1MhPvSxVfSWpuKvqgVLRzBsFhcNoRz4Zw4N64hQo40IC1IE9LmAHkogLxwAE8L7kmTJpURSGMA1Pr162tefPHFawDalLrpbNF3l7CO9jitK9nBYkoi7s6mcE6cG9fAtXBNXBtpQFo45GOQxgDywgbcC9wp40rwOXHixPLFixeb4R48pW4aAbeYdXTGdADjCkpcNSfCuXXI6Vq4Jq6NNIiQI41Iq6ni6fTSREFBLhcA3JIPuHU4JkyYUHHZZZeN5XDXvvzyy1cDrMlTprKFF1/OWts7WFsrwY0WE2rDzqVwDVwL18S1kQakBWlC2pBGpBVptqh4ukHe5ycXkgsAbsasRwSawdY1fvz4/pdffvloVOY+/fTTGnrz5ioD7osIsBYCraMtSiuUxfUSNh/CtXBNXPsiAXKkDWlEWpFmpN2cHxvQzXOvSAHgvbPUZh6aAsMi3FQajkapCHBeeeWV7+lwT65jCxZexlrbCO6OThZLo507U+GauDbSgLQgTUgb0oi08pLcDHnYQxMi68uludwH4WbpwD127NiBl1xyyRjsoyUSD5bck+ukCy66VGpt7ZA6OqJSXEksCtUdwrWRBqQFaULajJIcaUbakQfkJU3I+1xcLvdRuJ1eVAibKpRFY8aMGbRo0SK9Qrlx48aa11577Uq9QkmhwHcu/C5rbU28iUMrduvt1N0ppAFpQZqQtik8XEGakXbkAXlBnoz8MfeRiH12TLncB6B2mtHVapq0lBh19OjRVTRHiR6WbNq0qYZeBL4CwEwicM5f8F2q4HWydmqTVhUtsdhHDxDSgjQhbUjjJA450o48IC/IE/JmEZPbTR3nNrVzAHgGMGZLTnMCdqlQjho1avDChQtHAQhay3MoAbKEQKmaNKWOzb/gYj3ebe/sSHTiaEqPEtKEtCGNSCvSjLQjD8gL8oS8IY8eKp5Oc7DkSr0W8EzA9Cqr2VntoA5bOLho5MiRQ1DK0WjU0BdffDGEJuNZbMA9b/7FrBlhSUe73kynIjTpgULakEakFWk2IEdekCfkDXlEXlnq2/puY8vt7JvOglfdCr6cA6iZR3BDGcgL1I5wX3jhhaMwXQOHO1FyT6pj553P4aYmOaztnu/WEr9CGpFWpBlpRx445EuQN+QRefUAuRfYM/WZ242Q9RYdOUtgM48lsR2QfgxldkSXV8nswIZGjBgxdP78+aNxzLZt24bQvCSJknvSFOnceQuk5pZ2qb29TYplYUnxfAlpRZqRduQBeUGekDfkEXlFnpF3U8XTCnS7Cmk4TV/5hV1mWVzlQs4i2FZxsGxhHKsSI5ymnIBOARsaPnx4DTl6FDpGdu7cOZjeYudwT2Znz12QaC1pR1iCFgutVwlpRtqRB+QFeULekEfkFXlG3mED0SYOdrMD3o/c/G01o67dWHYpX4DbvX0eYu5zZLvB6EdFJoDNQBeLMuBGXLp9+/Yh5PjLCYDKiQTCWXMI7pYoa6NHvUKPfBqb3SuFtCMPyAvyNDEBeSXyijwj7wLkxSbZ2THiciP4kR3kVjF/VmYLkNMsta3ePLfrBvdSwlqWuCZZOcLp2ORvhg0bVjNv3rxRSMeOHTuqaWqGS8nxgybRPIFnnTuftdBYj3YdbqXb27kzFfKAvCBPyBvyiLwiz8g7bABbwCYmmxY72DPi4IcihyeCnyeEVbxv5sx3aS6nWWrbzR3iVskrclGxXQnsALxZJeL/a2trh86dO1cvuXft2lVNUzJ8Fw6fQKXbv5/9HdbEBzJ1YmwJAdIXhLwgT8gb8jghUZIPQt5hA9gCNoFtnGzn0/5FHm4Uq5sg7KETKu2RkLJPuL3Ojx12ANpcatgZ186QJTaOEPfrf9fU1AwhR4404H733XcvQVw6YeJk6fSz5kmNLW1SW2u7FI/HqCtc6VNCnpA35BF5RZ6Rd9hAgHwkbGRlOx92L/LoS6eSP+LQkpPRukVyGnA7rUfTJT6mUqIfpiJbunTpoffcc88hd9999wzS9LvuumvGHXfcAU3nmnb77bdPh371q1/NgG677bZDSIf+8pe/POzWW2/9yo9//OOv3nTTTV+98cYbj/jRj3501A033KDrBz/4wbE0E9QsmkNkJr19fiTpq6TDUEohXV9++WX1+++/v0gvuSdOZqedOY81t1BY0tZOHSZKr425XWNyyhvyiLwiz8g7bABbwCawDWwEW3GbHQkbwpawqWFf2Bo2h+3hA/gCPoFv4CPDX4b/4EvBrzPga/gcvgcDYAFMgA2bOD9r6xbJPmJvp/Ed5jCkjAwynjIygwwykUa4YfCPTG2ySUnCJmaA4sgQP9ayOYkOl/lvJHGfXZPTgQMHBtO7jBdHo9FB4ydMYv92+lzW2NRKrQ3tNFUDhqOqfVrII/KKPCPvsAFsAZvANnZ2M9nUcJXlsYavDN8J50huou/xHZgAG2AErIAZm/DFadxMRiV4OoOXyhcsWFBLiZ5C4yD6Gxldt25dHb1PeDbN2HQ9TU12E000+XOI/v5vUc8888zPaJqEn0LPP//8T7j+i377n6+//jqW/vgPatv9D5qJ9cdr1qy5mWLKm0g3kjC1wvV0nRTR4/in5MhrqfmscsJEwH0ea2pu0Vsa4vF4r69QehXyijwj77ABbAGbwDawkdlusCVsym17E2wNm8P28AF8AZ/AN4afDL/Bh2a/Cv6+CQyABTBh8AFWwAzYYYkV6LI2OEx2gVt2GMAkJgB3Xik9fibNmjULFReZHoEVlOE5jz766G8oM9fu2bPnlP37908ijUbJwVUNNTY2DnYTHVcF0d+DLFRpJTpeDkeKpAmTprFvnnwOO9DUoo/dwCQ7uXrNrKcKeUbeYQPYAjaBbWAjO/tZ2VrwgxefVXPp/obvwQBYABNgA4yAFTADdsAQWOJMuc3FaDXcN60S3K4nUi+5KZYqQ8IwwIdKhhDdod/EnUyVmZOampr6DxkyVJ559LHS/AWLpAsvuky6bMl17LLF10kklokuXXyto77/w5+w+QsXs1nHfYs1NBLcrW3kaIwMjBekkHfYALaATWAb2MjNjpn6Sfc1+Ry+BwNgAUyADTACVsAM2AFDYAlMOQwM89w+LqfZapIMSyoqKkpvueWW8UjY3r17y5YvX34FjWb7Nq1D02/0mHHSfHr75N/PXcDGTzmMxagS3RqTpL0HWqW9ja3Mj/YJ2tvYIkHCPmnfga7asm27tGNHPf19QKJBSVIMXduaVtCCDWAL2AS2gY2sbKfb1N7ezK//4HP4HgyABTABNsAIWAEzYAcMgSUwBbaY81IurhVO2Uf8bVV6F1NtegJ/UWAw1pyhR9AhJSWl8hlnn8f+z0ln0vuEIbZ5y3a2fcdutmvXHqm+fh+rr9/vW1/ubUhI/3+DIYnr4PeCGhpaqAWhjUXb6TWzTkXv6Quk6raATWAb2MjKdmb76jYW/JCOD+F7MAAWwATYACNgBcyAHTAElsAU2OJNi2GXMeyeQxS7ZkHzuBLcVSXU7DPJKLlperGrWltba0eNHiOdPedCVt5/KNu+fRcZYz89EpukZmqTbY/GaO69uN4R4UuxGD1eaekPiAYWWR0TSxyTIgWT6ARylZXtbHyh+4D7wrcf4XswABbABNgAI2AFzIAdMASWjJIcjPF29YjDa3e2oMsuFUzzWJOkaJXeAUgANTnJjz322MLm5uZhw0eMZN+gCkwzvWlSv6+BPtukaLRTUvW2ZtW/6HGqS8V7kI7HpXf+QGnZlPtCEvzj+/xgAmyAkQQrnTo7YAgsgSmwBcbAGrOeD11k1HOIItZMrYa76q0mtEJvLWVUolXCjqdHy6Hl5RXS7K+fRmAfQIlNMzJ1SPFYemEBzZct6RLac22OS6iPt2V3m7h9LW2fepzur7R8TYyAFTADdsAQWAJTYAuMgTWhVcWqf4SZKp2eWlHsVjsIX3XVVTVosKemn5INGzacTr1j8sxjTmDtlNhmamul6Q0kDMRPYyYnKa6Pcbb6XhFlPo6MqwTKpmBTwS987LngA7/+c/B7XJ8SQwI7YAgsgSmwBcbAGpiziMXNTYWOMbiX9xz12izNooSeSUaPkW/RY6Ri9NjxrKp2FGtuaqHpf2NUWycD+BN+I2FJDzspJqmB8io/9jf86ZcDsAOGwBKYAltgDKxx5ry0pqT0cMoeuuZTQhR6KySCxwbdWUVbt26dTb1k0oxDjya4W6nyF/PXy4Y5RhJyfwdRDdSj5O290YR/fZwXDIElMAW2wBhYA3NgzyZEse26l30OrpLPP/98TEsg0YxKk2k56oqRo8azsgFV1LYa1cc9eH40xVXfjzKLGA5xnxTE4bmJvw37drG7f79J3ntcaYAYsQSmwBYYA2tgDux5gFvy05PZZfwJDZTvRzGRRDMp1SEuq64ZIbVSe2piIkoflUg/8/MlJqK0eh/RmN01iJlzEIPHhTpPihKVSubTh5L3iicNKyCmwBauB9bAHNhzGJfiqyfTat0aHXJcCI8LGmswEpkfUFlNsVM80dLhOu81ZVIfr+wzhKHr2Z0zCBdy/IaQvd0lvyGI4X83TsASmAJbYAys4Xpgz+bVNslLK4o5hrHs7FETbdJ6gzwuWFLejxKECeBdJdl1NBRFZLmmuqJ46oSafjMPHzvw+KMmDjrx2LqqE2fXDSJVQifNnipqoEkDTjpuWqBsCjbtauekDwy/6D4iX8Fn8B18CF/Cp/adS2DBmRcwBbbAGFgzuHPp5GF2lUzJpTUl+Tgw7iT6RBcqJYbxO9ThrW+Fjlf0z6RwjhC9VjKytqrkiEPHV0ybNLJ01IghRdVVA0MD+ldIpaWlLFDvEXwG38GH8CV8Ct/CxzovJv/rTDjOFKDqbGEDa0bk4DAu3Ap0y0qmY3Mhf0wA0Eji4po+3tjUTp2UVbyNV6qKI2F50tiakkPqRpfWDh0crho0MFQ5cIDUr18/Fqj3Cj6EL+FT+BY+hq/11+is4nJbbuI6WyJrnD0vs2Z5rmR2eelTeFTomz6HiOnuVBQsiZeQ1d0ZDoekSeOGF8+oG1cydMhgecCA/mzgwIGsf//+bMCAAfpnoN4nw3fwJXwK38LH8DV8bsVCCismjsCWsZlCFMlmVizXjh6r5sKUnk3hQvp3XVc6wIxQceak0cOri6ZOGVNcXV0lwRiVlZW6Bg0alFRVVVWgXiTRd4Y/4Vv4GL6Gz924ADvmlS0MDk3cyS6sSn7HgyfvFDwmjDBFj8H1EjvZne7a3llaUiwfOn1icQ3d3eKdb1ZQIva+0tvOh/A1fA7fu7eFiwxpSSgF7iSHdzN9d/R0icvNIUpySl+PzX8jhg0uGlw1UKbB7HrMhk/j70B9R6Jf8Qmfw/femhQxbCPBlUWIIjlM9upruCxzan45eGEeR+HTVao0YezwCMVnUllZGY0aK9eFv6GgNaJvyPCn6F/4HL5X9D4ND6zw+pvLDGtOvPqe+IdZhShONeFU6bO1Ugk+JNSvvFwqKSlhUHFxcYqKiop0BaD0Lhl+M/vT8DN8Dt+LLLgJbNmEKCwXE/8wixBF8jYJjZo8rqpyoFxaWqIbIxKJ6AqHw4xmP01RsPWuzew/+NTwb6LAKtF9b8WEkwz2zI0b6U78I7lBLkzeov+X7kazUmvHcX2xVM1QRUU5DKBB6AOAMC8MxHrMKjiBMpHhT8O/hr/he5EFnY2urSkpPPFzmrmTPPDq+tKxZbMhXSQMJWNwJWXYq2QzzDVZ8lOGGYTJqUQFW9/azP41/C6yYDPsNoUlIUQxuJO81g/9hCjioyJMiiSnWqO7SkU36kHJSlcZ0xakTOeFje7sfCx4FKgbBN+aNzMPoqxYEqb0w3sIYS8Vy3TnJmSm9zT1xweN/NJMY4np0ZIisZ0zeIQXuKyYMGTFkvBb2WVwoO+Jfyw3TLTIJ1sUK51G+yWzmMqXCQpikQLfrJjoysvB0Fao+4nceYk4PE/dlnLHYOALH/wSF1tVKGF4jMimGEvi+2SKp6Dg0V3g4rG1nOTCkhdFNrWaxAXuJBs205p806JjJ5Ewo3ar33EYIUiPEy5zpSGxX00oeEwXtgwOXHlJjDpNBg4Cd55ZdRps5dTRYzwqEpVOJTkyTOIyjxhDz1VSwUO6sDeRBTtekvsPjkXpwp1XZv0uQoXNeHVff1RQQmUuyUKykBFdwWO6wEMUgQWRERt2xAFVBneeejD9xuCyUMlMeVTQY0QziVceMGA9rgnS9wWP6UIPUeI2bCQrnSk8iaGx0NHjNfrwvU6mJPQoJUKU1KWlpcSnat4nGf8PtgJvRbHhQmBGEpmy4y4bJbi5rdH4DIkhipYYJmtVI7asJQeP6UIPUWxa2Sz2aYlmZTFECVlULNPq6JEc2sGN9zJ5K4qa+lhRFC21NpxaWw4e0wUeonRpLRH5MIe7qoCdPprQT7O2rxBFHIsirqZFbZomqehW1T9FUYUBFdKgBCt0GRzYcWLmiR18FzhkClHSWgjWtcjnFUyx0qnLKn4S4yzjuGAr7M2CFytmrHixawd35NfrIlQpdwy/sNhwb0xsrgky/1/fFzymC1t2XJj/z7vqD/4uFXbPY8LlNO5AUyuKajXtsbBPMSSJ79gFW6G2ohxkISErZg7us2hF8bWlA3jK2810Y9lI40rdH8ShhS2vnJh5Mb8qmc1mwpT4hi6iQrgZdd4TLxdpJlnt0xU8pgs8RLHhwo4j/jtV4M7Xe5nplOAah/vgI4fH4anDZrtMByA2+wRboYYoAgsuzGimkFbV0milkP327dMKWAqtUKsar5ntpaXg9tK6iSSNf5IOQBoXExQ0oxT4ZsXEwX0NJpb2J+Ak1sAc2PNxKSmdElziDw/N1CxjO1GQzb5AgfzwojPHsctqV32XCIUWAdVlNBVaRFMO+1T7CCxQgUj1wElKO7i+z+DO6EHPWStKnG9CxSFZ4UxjX6DCU1q8CNxltRVFs4jRxQubj/Wyz7JnK1DflAe+vHKkio0bApNauoBb/pDmmlMhKVHLlCw2Yy4Mi31dZo3APCmB+rC6brILI6adnDGDOz+s+g1RNH4xwK0Id5Tq8Cjqsu9AY3PwmC5Qcd+rHlkRS22dObDHS24t2zG4ZjwS+LRczGNLSZf99dQExCdVDFRAgs/hex+tbCn7eekuhsxaLiqZ4jyCXh8TKfs/3bhV6YhGg/bwAtvgc/g+HWaEgjWrrSiW7Y0OgHuprLJVb6+Lt9Ain8FWWBt8Dt97iZvT4C4rowk18WJ+g31je/e9T5Q99ftVrJQbbIWxwdfwOXzvhzMz4OncHLJDE41mdTIPpbcT/Boy+rf/fS62c/eXwcCUAtnga/gcvndpOtbcSnGb4zW7JkbfMbgRh/t9xCQb0WkgzQsvvhV79p9vxtrag1i8r2/wMXwNn2cw2M48f3zGMbhmUZprPm8E2+/27mvQ/vzg32P3Pfy/sS+27dKCcKVvhiXwLXwMX8Pnblz4LWhtWPUdg2sOpXdaCUYP16bN29Rf33V/9Be/+VP0vbWfKDt27tGamltovEE8oKOXbvAdfAhfwqfwLXwMX7v0anrhyKoUd70pZJeS27xPXJ5C5bSm9chBhuv37tf+9JfHOucsuLb95p/c1fH40y/F1n+6Sd23PxhW29s2+Ay+gw/hS/gUvoWPhXd4/VKSgJRYc1jmxoldx/nBxRcbUn6MC9HKWQcS38S1TO5MxGX0KFMfXPZE7MLLbuw4dNbZLdVjj22WB0w31JLQNKhVUBtXO6kjUE7ULthZtH3LQb8k/ASfwXfwIXwJn4rzmqTFCGcLrAkVTDPI4rgox/nBNZf4WwxRsPZhvf5/pR2nTbfEdct42pXZYMvL5sVH6flP4mzR7zlrzKEEtw1dZItEWP0w+W5cY2NjFBeqra3dpB+htCYTlNUMdjmHFADfY4CWtOz51RpukS2wBubAnsiiS0OIZhei2MINrV69eh8+6+rqNlJsFFM7GykhndkoqdM1TgB8boFmGfgn/ZKdmAJbYAysiey5QO4YojjCDW3evLkdd1NlZWXb4MGDP9GrAtF6t1Lci5E8GFGyM3wwWi83srC1lH7J7OV7zhBnSgNjYA3MgT3WdRSrY0kuO9yxXeDGfYV99AJoJy44a9asl+kzzmJU34y1ZwPyYCucp4J9aAKWiCmwxRnTmeO/VRwgZ15aUcxxjAg3PvctW7ZsJ/4eNmxYw/Dhw9ckSvFdaBLxAnkmjzXm853TYMvqJmXBfy5wYxo3sETnAVtgDHs5c/tMLKpWcbcV4HZQi3BD6IWJK7So4ZYtW1pwZ33jG994rbS09EtGNV6tY3uWIA5K+j5VMvuAX2eIWAJTYAuMgTUwZ/An8KhalOaOlUzNIkwRHwPGyRtWrlxZjxZ8eo2o45vf/ObfwuFwC4s1M611O6ZoyaQU99AEFZTiPaT0zk7LFljBvFZghxgCS2AKbIExsAbmhEJWteDT8iaSbRKrmv5WzKU4qekPf/jDFnw/cuTI/ccdd9wjlLA2Fm9kWttmOiKazXjcrRIUKPcVTadexMzibmIlwUwj4G4DS2AKbHHGmixKb8WCU82tkmkXplgBHqPHRsszzzyzG8dMnjx5x4knnng/PVr26OFK6+eU6B30TSxHoYgUhDJ5Cz2kDH9vsxEbYASs8LBkDxgCS/gWbIExsOYAuN0sD5YluFVJrlrBzdVJTTf7n3/++V14KXTs2LH155xzzv01NTVvY+pw1IS1ls80rW2rpnVS/UDpwGrl+leCNNP/XaQIcjk22DwimEWbO/pW0RkACzoTxIbeAkdfghmwA4bAEpgCW2BM4M0uBnftybQLBcQ7JG4CvJMrunHjxgYjXOnfv3/HmWee+cwpp5xyb3V19Yd6zuJ0E3bs1rTWTUxr3kBab5ZmsS9FrMXQBkclzs/V9AmVDltYsp0+2A46mmyi2wY2EmzmZl/DD27+svYpXYMYAAs6E8QGGAErYAbsGGEJmAJbAmcxE4NOszowtxCFmQJ5RfiMmaRDTo+SNkrY1t27d7di9Nfo0aP3nXXWWSvOO++8Ow4//PDlVVVV68vKSneHQnI7TZcR44oLipkkfhdHm6ggxeJTFx2blJ58hd7/hDPbdwRUG3DDFrjpYRuykWgz0ZY2ttZl9o+L//R98D0YAAtgAmyAEbACZsAOGAJLAtxm3hQTkymzHTuFKF7ClC4higE4h7z58ccf34Y7sKWlJYpEUy9U6xFHHPHJ2WefvXzu3Ln3LViw4E7S7fPnz78D+s53vnPn+eeff9e8efN+S7qbjvkdRJn/3be//W1o6Zw5c/5w+umn//G00077v6eeeur9dMc/cPLJJ//1W9/61jKK2R6lGvdKalJaecIJJ6SI9j85bdq0N/V5XGKNGjk2mJ8bNiBbwCawDWxkthtsCZvCtrAxbA2bw/bwAXwBn8A38BF8ZfgNPoQv4VP41vAzfA7fgwGwACbABhgBK2AG7IAhgydT6W0OUVzDE6eOHs1DRVMEHOrgkHegYkAN85v/9Kc/bX766ad3RaPRTsqIQjVkFYpEIgpEfycl/j8UChnHqfw3xn5d4t9uGjFixG5y5Bpcnxxb0CW5nveYPr4DcK+Bbbza0Wx/rqSPuM+6+NL4P9+nH4vrgwmwAUbACpgBOxzsDhNbMQ8VTI25jEVxK8UVUyweE0tvIWHoswfk7Uj0tm3bGh544IHP6Q7d+Mc//nEjZWgTacuf//znLffdd9+W+++/f/Nf/vIXXXTc5gcffHDTQw899DlpIz4ffvjhT//6179uWL58+foVK1Z8RHf52ieeeOL9p5566l9koLeppr3m2WefffG55557mSomr9LnG/S5mvT2+++/fwCrAlCPGCB/i5fkBQm5ATcvud+CTWAb2Ai2gs247WDDl2FT2BY2hq1hc9gePoAv4BP4RvQVfAcfGv6Eb+Fj+Bo+h+/BAFgAE2CDg90usmNiyhx/qxZNhJ4GW9lBrrq0pohhSoegdkFtglq5WvinuL9F+N58rPid+VjxXK3kuHZS2549ez5au3ZtA5xKDt01ffr0N6n0iBca5ELJHYcNYAvYBLaBjWAr2Mxk9xYbW1v5w69fDYmMiOzYVS6dmgd9vZNpN3ec4gFyEfQ2C8CtYHcylNlYbr9LMR5VXNZRKaWPZ6BH8i4qvVYXUkluKrlXwwawBWwC21gUQq0e7Nzm4iur31nJuG6HqeR2glth9vMZegbcCnJF+Iyb1GlTkkeFu7PdAXYr47kda/f/LuchR67FoxhOph4ylOSreEnOK55Sn5RRoeQl9yrkHTaALf5/e+f+28QRxPFV/hAUgUD8wkMIQRD8ofwDVVu1CETViioteRHEM7RqIA9wiIMTCBQaUWr7Xk7ne/GF9Xpm9y5xkstlLZ0w57vdmd1P5mYfM4c2YcDeSVs3hXJs1+pMBILlDhnOEoNF56pqkeSb5lZFfbBpQh4y7orptrQYN6YlwO2yBGbjtszGpw59Rh+sKiTHjh1bpQ6f/mrJGxW03I1tyw1doTN0RxugLaR2KtDO/wmQtxj3o8W4I6ZbEjJwR8ysSVJkq8BQTrCVZXVTclckt4Xz09uMlbc1inlNU3hC9Pz29u3bGerg1CdHh589e3bqq0/eqBzc0A06QlfoDN3RBoJRaTratOUwVk1Lf3J9HzAWO8yxLF8oX89QAettmz6MhXnygAHdfCRJirctTwHT/Wlb/hB67qcOfjYzM/MPDapSyM+cOTNZJch1uKEbdISu0Bm6S+3CgNtm3AjJ+tr6LWCuMbng5rljx3RgLite1EXhrLi0lB8xC0KSdQ+EBuJ+M7+3He5Qn++3trb2R9eSdwiANQJhArF/Wz554xAv4jQynzuCTtANOkJX6OxqFwu4baEP8vRZYOl/kxNuKT7JsyS/W8DzuiwdizW3wS49qqRzZuMFlidEwMAPyP98+vQpNvMktFQMd2X8MFtywy0Zh07QDTpCV64NLO0lta2rX1x9aoM6Yea5C7skuwVcKXm/uPkvN9sSCdBHjPJco0j/Dx2uEDer015dXf2LHt065GOHEXID7rEMbugGHQV3o+1wHYq2v60vI6PvudmRRGDJnKpWew04B7oSBqDmHpaEgT12nIuFRoqMgW1UEPYM8lkCAbF+yfDwcOPcuXO/HybIdbghO3Towv0Rukl6O6COjAFfJBinOGcfRgIDCcMLx9SO9/0PDaKNhb80DvTEcS4RGs12RMLTwXRpdOB7fM5GozGXuSu0HxmQ/9b1yUsNuQZ3BJkhe+aWQCdmTGK6HiFjcWOHtXUdSc6+NvnYHITF3gvAlbB3ZVNZ8qsIDbGTw5yT56YtTd89NAepBMT8kydPkCmyY0BeyoGnPqDM4Ibs0AG6MIPEUPClTesaCdZ1EP0k5TMRQ87KBHjemZcix2aOchJhNodzY0JmBkaHfJEASd2V48ePvzl//vxoGd0V3S2BjJAVMkN26CDMgEh7PEx3Q2rXIn2yk77dk8+QKvenyGuhO4LVkQauATc1RjvcXj1+/DiF/MSJEysE0K9lcld0twSyQUbICpkhuzBlGlgGhIkwyCvy+vXSfsoO+E6mLyV3KHKstm4DQaDUAAwe+QTQG4o+KQXkOtyQCbJBxi7cNQfUptWW3AalKpTktCqAS5Cb1klyWcy58mBlZWX50aNHf2eWnIC6c5CQG3DfySw3ZISszMpuYHFJzKdcJeGuGuA2S+5yWcxFj3R1j8CpE0CI8o5PnjxZJ7B+OYiBpz6ghAyQBTJBNsioelcjA9UfFWNzSSoLdxUB5yDPE3InRSe16/V64+HDh6klP3XqVP3ChQs/76cl1y036oYMkAUyQTbLvHak8od8VRLuqgLumsFx7YDsWxSi3HhrDx48+NCFfPnixYs/7QfkOtyoE3VDBsgCmRS/eOPambfvMxke8IOFPFL9C0LmRq4WAfWOwIIl75CLsEJR4bf3EnIdbtSFOlE3ZIAsjL/dVv0LONFRhrvqgHOguyDXt/j2DT4p09I6AfYe/i+sKYF3iwAMB52SQovECVEH6kKdqBsyWAaTgepfSi8Uhe4Brz7ktkCN1tLS0of79++n6cUoh1790qVLt7Ys+cZAYjy3Yig3UsuNslEH6kKdqFvxAbpSDpEjDfdRAnw3kPf55QTax+np6dQnP3369DKBeHMQkBtw30TZqAN1oU7B3/Zwe8ALQR47phDTo1arfSKr+h730UuSXl++fPnGbiDX4UZZKBNlow7UpeTomZ0MKJUH3EOub0Zit91SgsiNe/fuwScH5MsE5o9bPnkxyDW4Q5SBslAmykYdSt7mGnm4PeBFIY9zQh50If88NTWVWnLKO/J6ZGQkg3xrsIgE75Zja0C5kQ4ocS/KQFkoE2UrPmxMgjv2cHvAbZCb6ek4yPXIoPT/L1++/ELWdl2D/Idtd6UpW/L0t65bgnsyuFEWyuTqcsBti2FUHnAP+SYz6ORyvpiBE+3FxcUmWd0UcspDsnTlypXvbZDrcONa3NO13OsoS/WHmXGbp2JmULnp4faAuyDXfXId8sgyu9JaWFhoTk5OrsN/pqh2QP7dtk+uQa7BHeIaXIt7cC/KUP3z3FwEjr4rUIqKOfKvePGA54NcSlHXN/AEoBMTEynkFAC8RC8y7YFchxu/4Rpci3u6cOeJm+QGlB5uD/hAIOc2ZvVY8vn5+eb4+HgKOYWT1Qjkb7OBZzagxDn8hmtwLe5R/AqllEbYw+0B31PIIyVszgKoc3NzXwjcdwCYtri+unr16jcENuDexHec68L9DtcqOemO6yVMHm4P+MAg7yj5NS6hMTBsvXjx4vPY2FgGee3atWs3cOA7zuE3XKP606Vx4WVSAngPtwd8YJDHKn9u9BT058+ff7p7924KOe3nfoYD33EOv6l8e0u47E8ebg/4vrgrsZJD39Jjdnb2/fXr15cI6H9x4DvOKf4NBzrgsXdLPOD7Cbm06hkxg88eS04vXfo0Ojq6gAPfHZbb9lYxv4jjAd8zyLn0FFx6ORZyZX8nDbeX20zAc2QCFTzg5YDcNk8uJRqSEvHY5rk93B7wA4Hc9MkTYfDJbbsNhcFkotzvY/dwe8APDHJz8Gl7AUCk5Jctebg94KWGnEvvzOXQ5tILe7g94KWD3Aa7GRLH5ck2ofZwe8BLacmlREOJ49yBZF/1gPtPEcilLLd5EsBLMyUebg94aSDvKPeUomvqzy/ieMBLDXrR3NqS3+0/HvBDY9XzvunAfwb8+R+Kbo4YDe1OZAAAAABJRU5ErkJggg=="
};
