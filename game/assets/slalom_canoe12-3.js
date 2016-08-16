(function() {
    var k, aa = this,
        ba = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length &&
                        "undefined" != typeof a.splice && "undefined" !=
                        typeof a.propertyIsEnumerable && !a.propertyIsEnumerable(
                            "splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a
                        .call && "undefined" != typeof a.propertyIsEnumerable &&
                        !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return
                "object";
            return b
        },
        ca = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        da = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        ea = function(a, b, c) {
            ea = Function.prototype.bind && -1 != Function.prototype.bind.toString()
                .indexOf("native code") ? ca : da;
            return ea.apply(null, arguments)
        },
        fa = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var b = c.slice();
                b.push.apply(b, arguments);
                return a.apply(this, b)
            }
        },
        m = Date.now || function() {
            return +new Date
        },
        ga = function(a, b) {
            var c = a.split("."),
                d = aa;
            c[0] in d || !d.execScript || d.execScript("var " + c[0]);
            for (var e; c.length && (e = c.shift());) c.length || void 0 ===
                b ? d[e] ? d = d[e] : d = d[e] = {} : d[e] = b
        },
        ha = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.R = b.prototype;
            a.prototype = new c;
            a.Fa = function(a, c, f) {
                for (var g = Array(arguments.length - 2), h = 2; h <
                    arguments.length; h++) g[h - 2] = arguments[h];
                return b.prototype[c].apply(a, g)
            }
        };
    var ia = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        },
        ja = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var ka = Array.prototype,
        la = ka.indexOf ? function(a, b, c) {
            return ka.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if ("string" == typeof a) return "string" == typeof b && 1 == b
                .length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        };
    var ma =
        "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf"
        .split(" "),
        na = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < ma.length; f++) c = ma[f], Object.prototype
                    .hasOwnProperty.call(d, c) && (a[c] = d[c])
            }
        };
    var n;
    o: {
        var oa = aa.navigator;
        if (oa) {
            var pa = oa.userAgent;
            if (pa) {
                n = pa;
                break o
            }
        }
        n = ""
    };
    var qa = -1 != n.indexOf("Opera") || -1 != n.indexOf("OPR"),
        p = -1 != n.indexOf("Trident") || -1 != n.indexOf("MSIE"),
        ra = -1 != n.indexOf("Gecko") && -1 == n.toLowerCase().indexOf(
            "webkit") && !(-1 != n.indexOf("Trident") || -1 != n.indexOf(
            "MSIE")),
        sa = -1 != n.toLowerCase().indexOf("webkit"),
        ta = function() {
            var a = aa.document;
            return a ? a.documentMode : void 0
        },
        ua = function() {
            var a = "",
                b;
            if (qa && aa.opera) return a = aa.opera.version, "function" ==
                ba(a) ? a() : a;
            ra ? b = /rv\:([^\);]+)(\)|;)/ : p ? b =
                /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : sa && (b =
                    /WebKit\/(\S+)/);
            b && (a = (a = b.exec(n)) ? a[1] : "");
            return p && (b = ta(), b > parseFloat(a)) ? String(b) : a
        }(),
        va = {},
        q = function(a) {
            var b;
            if (!(b = va[a])) {
                b = 0;
                for (var c = ia(String(ua)).split("."), d = ia(String(a)).split(
                        "."), e = Math.max(c.length, d.length), f = 0; 0 ==
                    b && f < e; f++) {
                    var g = c[f] || "",
                        h = d[f] || "",
                        l = RegExp("(\\d*)(\\D*)", "g"),
                        Pa = RegExp("(\\d*)(\\D*)", "g");
                    do {
                        var X = l.exec(g) || ["", "", ""],
                            Y = Pa.exec(h) || ["", "", ""];
                        if (0 == X[0].length && 0 == Y[0].length) break;
                        b = ja(0 == X[1].length ? 0 : parseInt(X[1], 10), 0 ==
                            Y[1].length ? 0 : parseInt(Y[1], 10)) || ja(
                            0 == X[2].length, 0 == Y[2].length) || ja(X[
                            2], Y[2])
                    } while (0 == b)
                }
                b = va[a] = 0 <= b
            }
            return b
        },
        wa = aa.document,
        xa = wa && p ? ta() || ("CSS1Compat" == wa.compatMode ? parseInt(ua,
            10) : 5) : void 0;
    var Aa = function(a) {
            var b = new Image,
                c = ya,
                d = "";
            b.onerror = b.onload = b.onabort = function() {
                delete za[c]
            };
            za[c] = b; - 1 != a.search("&ei=") || (d = "&ei=");
            a = "/gen_204?atyp=i&ct=doodle&cad=" + a + d + "&zx=" + m();
            /^http:/i.test(a) && "https:" == window.location.protocol ?
                delete za[c] : (b.src = a, ya = c + 1)
        },
        za = [],
        ya = 0;
    var Ba, Ca = navigator.userAgent,
        Da = /Firefox[\s\/][0-3]\./.test(Ca),
        Ea = 0 <= Ca.indexOf("MSIE"),
        Fa = {},
        Ha = function(a) {
            for (var b = Ga, c = 0; c < b.length; c++)
                if (a === b[c]) return !0;
            return !1
        },
        r = function(a, b, c) {
            a = document.createElement(a);
            b && (a.id = b);
            c && (a.className = c);
            return a
        },
        Ia = function(a, b, c, d, e, f) {
            a.save();
            a.beginPath();
            a.translate(b, c);
            a.scale(d, e);
            a.arc(.5, .5, .5, 0, 2 * Math.PI, !0);
            a.fillStyle = f;
            a.fill();
            a.restore()
        },
        Ja = function(a, b) {
            b = b || m();
            if (a in Fa) {
                var c = Fa[a];
                return b - a > c ? (Fa[a] = b, !0) : c == b
            }
            Fa[a] = b;
            return !0
        },
        t = function(a, b, c) {
            return b + Math.min(1, Math.max(0, a)) * (c - b)
        },
        Ka = function() {
            var a = ["Fredoka+One::latin"];
            window.WebFontConfig || (ga("WebFontConfig.google.families", a),
                a = document.createElement("script"), a.src = ("https:" ==
                    document.location.protocol ? "https" : "http") +
                "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js",
                a.type = "text/javascript", a.async = "true", (document
                    .getElementById("xjsc") || document.body).appendChild(
                    a))
        },
        La = function(a, b) {
            var c = a / b;
            return a - (0 > c ? Math.ceil(c) : Math.floor(c)) * b
        },
        Ma = function(a) {
            if (window.google && window.google.log) {
                var b;
                Ba || (b = document.getElementById("hplogoved")) && (Ba = b
                    .getAttribute("data-ved"));
                (b = Ba) && (a += "&ved=" + b);
                window.google.log("doodle", a)
            } else Aa(a)
        };
    var u = function() {
            this.k = this.i = 0;
            this.o = [];
            this.p = 0
        },
        Na = !1,
        v = function(a) {
            Na || (Oa(a), a.k = 0, a.p = m(), a.i = window.setInterval(
                function() {
                    Qa(a)
                }, 16), Qa(a))
        },
        w = function(a, b, c) {
            a.o.push({
                duration: c || 0,
                ia: b
            })
        },
        Oa = function(a) {
            if (a.i) {
                for (var b; b = a.o[a.k++];) b.ia(1);
                Ra(a)
            }
        },
        Ra = function(a) {
            a.i && (window.clearInterval(a.i), a.i = 0)
        },
        x = function(a, b) {
            w(a, function() {}, b)
        },
        Qa = function(a) {
            var b = m();
            if (Na) Ra(a);
            else {
                for (var c; c = a.o[a.k]; a.k++) {
                    if (!a.i) return;
                    var d = b - a.p;
                    if (d < c.duration) {
                        c.ia(d / c.duration);
                        return
                    }
                    c.ia(1);
                    0 < c.duration && (a.p += c.duration)
                }
                Oa(a)
            }
        };
    var y = function(a, b, c, d, e, f, g, h) {
        this.za = function() {
            this.H = this.s = 0;
            this.wa = "source-over";
            this.B = this.frame = 0;
            this.G = g || 0;
            this.D = h || 0;
            this.p = this.k = this.i = 1;
            this.Y = this.X = 0;
            this.v = f;
            this.o = e;
            this.ma = c || 0;
            this.na = d || 0;
            this.P = this.K = null;
            this.y = this.x = 0;
            this.W = a;
            this.$ = this.ya = this.Z = this.xa = 0;
            this.C = a.getContext("2d");
            this.L = null;
            this.w = b
        };
        this.za()
    };
    y.prototype.clone = function() {
        var a = new y(this.W, this.w, this.ma, this.na, this.o, this.v,
            this.G, this.D);
        a.H = this.H;
        a.s = this.s;
        a.frame = this.frame;
        a.B = this.B;
        a.i = this.i;
        a.k = this.k;
        a.p = this.p;
        a.X = this.X;
        a.Y = this.Y;
        a.K = this.K;
        a.P = this.P;
        a.x = this.x;
        a.y = this.y;
        return a
    };
    var Sa = function(a, b, c) {
        var d = new u,
            e = c / b,
            f = function(a, b) {
                return function() {
                    a.frame = b
                }
            };
        for (c = 0; c < b; c++) w(d, f(a, c), e);
        return d
    };
    y.prototype.A = function() {
        if (!this.w.complete && "complete" != this.w.readyState || !
            this.i) return !1;
        this.o || (this.o = this.w.width);
        this.v || (this.v = this.w.height);
        var a = Ta(this),
            b = Ua(this);
        if (!a || !b) return !1;
        var c = this.s ? .2071 * Math.max(a, b) : 0,
            d = this.x + this.G * this.k,
            e = this.y + this.D * this.p;
        if (0 >= d + a + c || 0 >= e + b + c || d - c > this.W.width ||
            e - c > this.W.height) return !1;
        this.C.save();
        this.C.globalAlpha = this.i;
        this.C.globalCompositeOperation = this.wa;
        e = this.s;
        this.H && (e += this.H * (Math.random() - .5));
        c = 0;
        d = 1;
        e && (c = Math.sin(e), d = Math.cos(e));
        var f = (0 > this.k ? -a : a) / 2,
            g = (0 > this.p ? -b : b) / 2,
            e = this.x + f - d * f + c * g,
            f = this.y + g - d * g - c * f;
        this.B && (e += this.B * (Math.random() - .5), f += this.B * (
            Math.random() - .5));
        0 > this.k && (e += a);
        0 > this.p && (f += b);
        var g = this.X / b,
            h = this.Y / a;
        this.C.transform(this.k * (d - h * c), this.k * (h * d + c),
            this.p * (g * d - c), this.p * (d + g * c), e, f);
        try {
            if (this.P || this.K)
                for (var l = Math.abs(this.o * this.k), Pa = Math.abs(
                        this.v * this.p), X = Math.ceil(a / l), Y =
                    Math.ceil(b / Pa), Pd = La(a, l) || l, Qd = La(
                        b, Pa) || Pa, a = 0; a < Y; a++)
                    for (b = 0; b < X; b++) Va(this, b * this.o, a *
                        this.v, b == X - 1 ? Pd : this.o, a == Y -
                        1 ? Qd : this.v);
            else Va(this, 0, 0, this.o, this.v)
        } catch (xe) {}
        this.C.restore();
        return !0
    };
    var Ya = function(a, b) {
            var c, d = Wa;
            void 0 == c && (c = d.i);
            c == b ? d.i = b : (d.L && Oa(d.L), d.L = new u, w(d.L, Xa(d, c,
                b), a), v(d.L))
        },
        Ua = function(a) {
            if (void 0 != a.K) return a.K;
            a.v || (a.v = a.w.height);
            return a.v * Math.abs(a.p)
        },
        Ta = function(a) {
            if (void 0 != a.P) return a.P;
            a.o || (a.o = a.w.width);
            return a.o * Math.abs(a.k)
        },
        Xa = function(a, b, c) {
            return function(d) {
                a.i = t(d, b, c)
            }
        },
        Va = function(a, b, c, d, e) {
            var f = a.ma + a.Z,
                g = a.na + a.$;
            d = d - a.ya - a.Z;
            e = e - a.xa - a.$;
            0 > d || 0 > e || a.C.drawImage(a.w, f + a.frame * a.o, g, d, e,
                a.Z + a.G + b, a.$ + a.D + c, d, e)
        };
    var Za = {},
        $a = {
            Ia: 0,
            Ka: 1,
            Ma: 2,
            Ha: 3,
            Ja: 4,
            La: 5,
            Ga: 6
        };
    Za.V = null;
    var ab = [],
        bb = {},
        cb = 0,
        db = null,
        eb = null,
        fb = !1,
        z = function(a, b) {
            return a.buttons[b] && .5 < a.buttons[b]
        },
        gb = function(a, b, c) {
            return "undefined" == typeof a.axes[b] ? !1 : c ? -.75 > a.axes[
                b] : .75 < a.axes[b]
        },
        ib = function(a) {
            Za.V = a.gamepad;
            fb || (fb = !0, hb())
        },
        jb = function() {
            delete Za.V;
            fb = !1
        },
        hb = function() {
            var a;
            if (Za.V) a = Za.V;
            else {
                var b = navigator.getGamepads && navigator.getGamepads() ||
                    navigator.webkitGetGamepads && navigator.webkitGetGamepads() ||
                    navigator.webkitGamepads;
                a = b && (b[3] || b[2] || b[1] || b[0]) || null
            } if (a && (!a.timestamp || a.timestamp != cb)) {
                cb = a.timestamp;
                b = [];
                b[0] = z(a, 14) || gb(a, 0, !0) || gb(a, 2, !0);
                b[1] = z(a, 15) || gb(a, 0, !1) || gb(a, 2, !1);
                b[2] = z(a, 12) || gb(a, 1, !0) || gb(a, 3, !0);
                b[3] = z(a, 13) || gb(a, 1, !1) || gb(a, 3, !1);
                b[4] = z(a, 0) || z(a, 4) || z(a, 6) || z(a, 8) || z(a, 9) ||
                    z(a, 10);
                b[5] = z(a, 1) || z(a, 5) || z(a, 7) || z(a, 11);
                b[6] = z(a, 2) || z(a, 3);
                if (ab.length)
                    for (var c in $a) {
                        a = $a[c];
                        var d = b[a];
                        if ("undefined" != typeof d && d != ab[a] && bb[a]) {
                            eb && eb();
                            var e = document.createEvent("Event");
                            e.initEvent(d ? "keydown" : "keyup", !0, !0);
                            e.keyCode = bb[a];
                            db.dispatchEvent(e)
                        }
                    }
                ab = b
            }
            fb && (window.requestAnimationFrame ? window.requestAnimationFrame(
                hb) : window.oRequestAnimationFrame ? window.oRequestAnimationFrame(
                hb) : window.mozRequestAnimationFrame ? window.mozRequestAnimationFrame(
                hb) : window.msRequestAnimationFrame ? window.msRequestAnimationFrame(
                hb) : window.webkitRequestAnimationFrame && window.webkitRequestAnimationFrame(
                hb))
        },
        kb = function(a) {
            db = A;
            eb = a || null;
            window.addEventListener && (window.addEventListener(
                "MozGamepadConnected", ib, !1), window.addEventListener(
                "MozGamepadDisconnected", jb, !1));
            !navigator.webkitGamepads && !navigator.webkitGetGamepads || fb ||
                (fb = !0, hb())
        };
    var lb = function(a, b) {
            google && google.doodle && (b && (google.doodle.cpDestroy = b),
                google.doodle.cpInit = function() {
                    b && b();
                    a()
                })
        },
        mb = function(a, b, c) {
            if (google) {
                var d = function() {
                        var a = google.msg && google.msg.unlisten;
                        a && (a(106, d), c && a(94, c));
                        b();
                        return !0
                    },
                    e = function() {
                        var a = document.getElementById("hplogo");
                        a && "hidden" != a.style.visibility && (a = google.msg &&
                            google.msg.listen, google.Ea && google.Ea.q &&
                            a && (a(106, d), c && a(94, c)))
                    };
                e();
                google.doodle && google.doodle.jesr || (ga(
                        "google.doodle.jesr", !0), google.raas &&
                    google.raas("doodle", {
                        init: function() {
                            e();
                            google.doodle.jesrd && (a(), google
                                .doodle.jesrd = !1)
                        },
                        dispose: function() {
                            d();
                            google.doodle.jesrd = !0
                        }
                    }))
            }
        };
    var nb = function(a) {
        nb[" "](a);
        return a
    };
    nb[" "] = function() {};
    var ob;
    (ob = !p) || (ob = p && 9 <= xa);
    var pb = ob,
        qb = p && !q("9");
    !sa || q("528");
    ra && q("1.9b") || p && q("8") || qa && q("9.5") || sa && q("528");
    ra && !q("8") || p && q("9");
    var rb = function() {
        this.p = this.p;
        this.k = this.k
    };
    rb.prototype.p = !1;
    rb.prototype.la = function() {
        this.p || (this.p = !0, this.i())
    };
    rb.prototype.i = function() {
        if (this.k)
            for (; this.k.length;) this.k.shift()()
    };
    var sb = function(a) {
        a && "function" == typeof a.la && a.la()
    };
    var tb = function(a, b) {
        this.type = a;
        this.k = this.o = b;
        this.p = !1;
        this.qa = !0
    };
    tb.prototype.la = function() {};
    tb.prototype.ka = function() {
        this.p = !0
    };
    tb.prototype.ba = function() {
        this.qa = !1
    };
    var B = function(a, b) {
        tb.call(this, a ? a.type : "");
        this.k = this.o = null;
        this.s = this.clientY = this.clientX = this.ha = this.ea = 0;
        this.i = this.state = null;
        if (a) {
            this.i = a;
            this.type = a.type;
            this.o = a.target || a.srcElement;
            this.k = b;
            var c = a.relatedTarget;
            if (c && ra) try {
                nb(c.nodeName)
            } catch (d) {}
            Object.defineProperties ? Object.defineProperties(this, {
                ea: {
                    configurable: !0,
                    enumerable: !0,
                    get: this.ra,
                    set: this.Aa
                },
                ha: {
                    configurable: !0,
                    enumerable: !0,
                    get: this.ta,
                    set: this.Ba
                }
            }) : (this.ea = this.ra(), this.ha = this.ta());
            this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
            this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
            this.s = a.keyCode || 0;
            this.state = a.state;
            a.defaultPrevented && this.ba()
        }
    };
    ha(B, tb);
    k = B.prototype;
    k.ka = function() {
        B.R.ka.call(this);
        this.i.stopPropagation ? this.i.stopPropagation() : this.i.cancelBubble = !
            0
    };
    k.ba = function() {
        B.R.ba.call(this);
        var a = this.i;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, qb) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a
                .keyCode = -1
        } catch (b) {}
    };
    k.ra = function() {
        return sa || void 0 !== this.i.offsetX ? this.i.offsetX : this.i
            .layerX
    };
    k.Aa = function(a) {
        Object.defineProperties(this, {
            ea: {
                writable: !0,
                enumerable: !0,
                configurable: !0,
                value: a
            }
        })
    };
    k.ta = function() {
        return sa || void 0 !== this.i.offsetY ? this.i.offsetY : this.i
            .layerY
    };
    k.Ba = function(a) {
        Object.defineProperties(this, {
            ha: {
                writable: !0,
                enumerable: !0,
                configurable: !0,
                value: a
            }
        })
    };
    var ub = "closure_listenable_" + (1E6 * Math.random() | 0),
        vb = 0;
    var wb = function(a, b, c, d, e) {
            this.M = a;
            this.i = null;
            this.src = b;
            this.type = c;
            this.S = !!d;
            this.U = e;
            this.va = ++vb;
            this.O = this.T = !1
        },
        xb = function(a) {
            a.O = !0;
            a.M = null;
            a.i = null;
            a.src = null;
            a.U = null
        };
    var yb = function(a) {
            this.src = a;
            this.i = {};
            this.k = 0
        },
        Ab = function(a, b, c, d, e) {
            var f = b.toString();
            b = a.i[f];
            b || (b = a.i[f] = [], a.k++);
            var g = zb(b, c, d, e); - 1 < g ? (a = b[g], a.T = !1) : (a =
                new wb(c, a.src, f, !!d, e), a.T = !1, b.push(a));
            return a
        },
        Bb = function(a, b) {
            var c = b.type;
            if (!(c in a.i)) return !1;
            var d = a.i[c],
                e = la(d, b),
                f;
            (f = 0 <= e) && ka.splice.call(d, e, 1);
            f && (xb(b), 0 == a.i[c].length && (delete a.i[c], a.k--));
            return f
        },
        Cb = function(a, b, c, d, e) {
            a = a.i[b.toString()];
            b = -1;
            a && (b = zb(a, c, d, e));
            return -1 < b ? a[b] : null
        },
        zb = function(a, b, c, d) {
            for (var e = 0; e < a.length; ++e) {
                var f = a[e];
                if (!f.O && f.M == b && f.S == !!c && f.U == d) return e
            }
            return -1
        };
    var Db = "closure_lm_" + (1E6 * Math.random() | 0),
        Eb = {},
        Fb = 0,
        Gb = function(a, b, c, d, e) {
            if ("array" == ba(b)) {
                for (var f = 0; f < b.length; f++) Gb(a, b[f], c, d, e);
                return null
            }
            c = Hb(c);
            if (a && a[ub]) a = a.listen(b, c, d, e);
            else {
                if (!b) throw Error("b");
                var f = !!d,
                    g = Ib(a);
                g || (a[Db] = g = new yb(a));
                c = Ab(g, b, c, d, e);
                c.i || (d = Jb(), c.i = d, d.src = a, d.M = c, a.addEventListener ?
                    a.addEventListener(b.toString(), d, f) : a.attachEvent(
                        Kb(b.toString()), d), Fb++);
                a = c
            }
            return a
        },
        Jb = function() {
            var a = Lb,
                b = pb ? function(c) {
                    return a.call(b.src, b.M, c)
                } : function(c) {
                    c = a.call(b.src, b.M, c);
                    if (!c) return c
                };
            return b
        },
        Mb = function(a, b, c, d, e) {
            if ("array" == ba(b))
                for (var f = 0; f < b.length; f++) Mb(a, b[f], c, d, e);
            else c = Hb(c), a && a[ub] ? a.unlisten(b, c, d, e) : a && (a =
                Ib(a)) && (b = Cb(a, b, c, !!d, e)) && Nb(b)
        },
        Nb = function(a) {
            if ("number" == typeof a || !a || a.O) return !1;
            var b = a.src;
            if (b && b[ub]) return Bb(b.J, a);
            var c = a.type,
                d = a.i;
            b.removeEventListener ? b.removeEventListener(c, d, a.S) : b.detachEvent &&
                b.detachEvent(Kb(c), d);
            Fb--;
            (c = Ib(b)) ? (Bb(c, a), 0 == c.k && (c.src = null, b[Db] =
                null)) : xb(a);
            return !0
        },
        Kb = function(a) {
            return a in Eb ? Eb[a] : Eb[a] = "on" + a
        },
        Pb = function(a, b, c, d) {
            var e = !0;
            if (a = Ib(a))
                if (b = a.i[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var f = b[a];
                        f && f.S == c && !f.O && (f = Ob(f, d), e = e && !1 !==
                            f)
                    }
                return e
        },
        Ob = function(a, b) {
            var c = a.M,
                d = a.U || a.src;
            a.T && Nb(a);
            return c.call(d, b)
        },
        Lb = function(a, b) {
            if (a.O) return !0;
            if (!pb) {
                var c;
                if (!(c = b)) o: {
                    c = ["window", "event"];
                    for (var d = aa, e; e = c.shift();)
                        if (null != d[e]) d = d[e];
                        else {
                            c = null;
                            break o
                        }
                    c = d
                }
                e = c;
                c = new B(e, this);
                d = !0;
                if (!(0 > e.keyCode || void 0 != e.returnValue)) {
                    o: {
                        var f = !1;
                        if (0 == e.keyCode) try {
                            e.keyCode = -1;
                            break o
                        } catch (g) {
                            f = !0
                        }
                        if (f || void 0 == e.returnValue) e.returnValue = !
                            0
                    }
                    e = [];
                    for (f = c.k; f; f = f.parentNode) e.push(f);
                    for (var f = a.type, h = e.length - 1; !c.p && 0 <= h; h--) {
                        c.k = e[h];
                        var l = Pb(e[h], f, !0, c),
                            d = d && l
                    }
                    for (h = 0; !c.p && h < e.length; h++) c.k = e[h], l =
                        Pb(e[h], f, !1, c), d = d && l
                }
                return d
            }
            return Ob(a, new B(b, this))
        },
        Ib = function(a) {
            a = a[Db];
            return a instanceof yb ? a : null
        },
        Qb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        Hb = function(a) {
            if ("function" == ba(a)) return a;
            a[Qb] || (a[Qb] = function(b) {
                return a.handleEvent(b)
            });
            return a[Qb]
        };
    var C = function() {
        rb.call(this);
        this.J = new yb(this);
        this.B = this;
        this.s = null
    };
    ha(C, rb);
    C.prototype[ub] = !0;
    C.prototype.removeEventListener = function(a, b, c, d) {
        Mb(this, a, b, c, d)
    };
    var Sb = function(a, b) {
        var c, d = a.s;
        if (d)
            for (c = []; d; d = d.s) c.push(d);
        var d = a.B,
            e = b,
            f = e.type || e;
        if ("string" == typeof e) e = new tb(e, d);
        else if (e instanceof tb) e.o = e.o || d;
        else {
            var g = e,
                e = new tb(f, d);
            na(e, g)
        }
        var g = !0,
            h;
        if (c)
            for (var l = c.length - 1; !e.p && 0 <= l; l--) h = e.k = c[
                l], g = Rb(h, f, !0, e) && g;
        e.p || (h = e.k = d, g = Rb(h, f, !0, e) && g, e.p || (g = Rb(h,
            f, !1, e) && g));
        if (c)
            for (l = 0; !e.p && l < c.length; l++) h = e.k = c[l], g =
                Rb(h, f, !1, e) && g;
        return g
    };
    C.prototype.i = function() {
        C.R.i.call(this);
        if (this.J) {
            var a = this.J,
                b = 0,
                c;
            for (c in a.i) {
                for (var d = a.i[c], e = 0; e < d.length; e++)++b, xb(d[
                    e]);
                delete a.i[c];
                a.k--
            }
        }
        this.s = null
    };
    C.prototype.listen = function(a, b, c, d) {
        return Ab(this.J, String(a), b, c, d)
    };
    C.prototype.unlisten = function(a, b, c, d) {
        var e;
        e = this.J;
        a = String(a).toString();
        if (a in e.i) {
            var f = e.i[a];
            b = zb(f, b, c, d); - 1 < b ? (xb(f[b]), ka.splice.call(f,
                    b, 1), 0 == f.length && (delete e.i[a], e.k--),
                e = !0) : e = !1
        } else e = !1;
        return e
    };
    var Rb = function(a, b, c, d) {
        b = a.J.i[String(b)];
        if (!b) return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var g = b[f];
            if (g && !g.O && g.S == c) {
                var h = g.M,
                    l = g.U || g.src;
                g.T && Bb(a.J, g);
                e = !1 !== h.call(l, d) && e
            }
        }
        return e && 0 != d.qa
    };
    var Ub = function(a) {
        C.call(this);
        this.o = a;
        Gb(a, Tb, this.w, !1, this);
        Gb(a, "click", this.v, !1, this)
    };
    ha(Ub, C);
    var Tb = ra ? "keypress" : "keydown";
    Ub.prototype.w = function(a) {
        (13 == a.s || sa && 3 == a.s) && Vb(this, a)
    };
    Ub.prototype.v = function(a) {
        Vb(this, a)
    };
    var Vb = function(a, b) {
        var c = new Wb(b);
        if (Sb(a, c)) {
            c = new Xb(b);
            try {
                Sb(a, c)
            } finally {
                b.ka()
            }
        }
    };
    Ub.prototype.i = function() {
        Ub.R.i.call(this);
        Mb(this.o, Tb, this.w, !1, this);
        Mb(this.o, "click", this.v, !1, this);
        delete this.o
    };
    var Xb = function(a) {
        B.call(this, a.i);
        this.type = "action"
    };
    ha(Xb, B);
    var Wb = function(a) {
        B.call(this, a.i);
        this.type = "beforeaction"
    };
    ha(Wb, B);
    var Yb = function(a) {
        rb.call(this);
        this.B = a;
        this.s = {}
    };
    ha(Yb, rb);
    var Zb = [];
    Yb.prototype.listen = function(a, b, c, d) {
        "array" != ba(b) && (b && (Zb[0] = b.toString()), b = Zb);
        for (var e = 0; e < b.length; e++) {
            var f = Gb(a, b[e], c || this.handleEvent, d || !1, this.B ||
                this);
            if (!f) break;
            this.s[f.va] = f
        }
        return this
    };
    Yb.prototype.unlisten = function(a, b, c, d, e) {
        if ("array" == ba(b))
            for (var f = 0; f < b.length; f++) this.unlisten(a, b[f], c,
                d, e);
        else c = c || this.handleEvent, e = e || this.B || this, c = Hb(
                c), d = !!d, b = a && a[ub] ? Cb(a.J, String(b), c, d,
                e) : a ? (a = Ib(a)) ? Cb(a, b, c, d, e) : null : null,
            b && (Nb(b), delete this.s[b.va]);
        return this
    };
    Yb.prototype.i = function() {
        Yb.R.i.call(this);
        var a = this.s,
            b = Nb,
            c;
        for (c in a) b.call(void 0, a[c], c, a);
        this.s = {}
    };
    Yb.prototype.handleEvent = function() {
        throw Error("c");
    };
    var $b = function(a, b, c, d, e) {
        Yb.call(this);
        this.G = a;
        this.K = b;
        this.D = c;
        this.C = d;
        e && (this.o && this.unlisten(this.o, "action", this.v), e && (
            this.o = new Ub(e), a = fa(sb, this.o), this.p ? a.call(
                void 0) : (this.k || (this.k = []), this.k.push(
                a)), this.v = ea(this.L, this), this.listen(
                this.o, "action", this.v)))
    };
    ha($b, Yb);
    $b.prototype.L = function() {
        ac() && -1 == n.indexOf("Trident") && -1 == n.indexOf("MSIE") &&
            window.gapi && window.gapi.load ? (window.gapi.load("share",
                ea(this.w, this)), Ma("gplus,li")) : (window.open(
                "https://plus.google.com/share?url=" + this.G), Ma(
                "gplus,lo"))
    };
    var ac = function() {
        if (!window.gbar) return !1;
        var a = !!(window.gbar.sos && 0 < window.gbar.sos().length),
            b = !(!window.gbar.so || !window.gbar.so());
        return a || b
    };
    $b.prototype.w = function() {
        if (window.gapi && window.gapi.share) {
            var a = {
                    items: [{
                        type: "http://schema.org/WebPage",
                        id: location.protocol + "//" + location
                            .host,
                        properties: {
                            url: [this.G],
                            name: [this.K],
                            image: [this.C]
                        }
                    }]
                },
                b = window.location.toString().match(
                    /[?&]authuser=(\d+)/),
                b = b && b[1],
                c = ac() || !!window.google.doodle.sf;
            window.gapi.share.lightbox(a, {
                isLoggedInForGooglePlus: c,
                onLoginPopupBlocked: function() {
                    Ma("gplus,popupblocked")
                },
                onLoginStateChanged: ea(function() {
                    ga("google.doodle.sf", !0);
                    this.w()
                }, this),
                editorText: this.D,
                sessionIndex: b || "",
                sourceForLogging: "doodle"
            })
        }
    };
    var bc, cc, A, dc, ec, fc, gc, hc, ic, jc, kc, lc, mc, nc, oc, pc, qc,
        rc, sc, tc, uc, vc, wc, D, xc, E, Ga = [32, 13],
        yc = [],
        zc = 0,
        Ac = !1,
        Bc = 0,
        Cc = [],
        Dc = !0,
        Ec = function() {
            var a = r("canvas", void 0);
            if (a) {
                a.style.position = "absolute";
                a.height = 207;
                a.width = 530;
                A.appendChild(a);
                var b = a.getContext("2d");
                b && b.fillRect(0, 0, 1, 1)
            }
            return a
        },
        Gc = function() {
            var a = Fc,
                b = r("div");
            b.style.position = "absolute";
            b.style.height = "130px";
            b.style.margin = "40px 0 0 250px";
            b.style.width = "130px";
            b.style.zIndex = 1;
            b.onmousedown = a;
            A.appendChild(b);
            return b
        },
        Kc = function() {
            var a = Hc,
                b = r("div", "hplogo_pc"),
                c = r("div", "hplogo_pb"),
                d = Ic(c, "hplogo_pbd");
            w(d, a);
            Jc(c, 225, 70);
            b.appendChild(c);
            b.onmousedown = function() {
                b.onmousedown = null;
                v(d)
            };
            b.style.display = "none";
            A.appendChild(b);
            return b
        },
        Rc = function() {
            var a = Lc,
                b = Mc(1),
                c = Mc(2) + " \u2013 " + Mc(0) + ": ";
            ec = "slalom-canoe";
            var d = window.location.protocol +
                "//www.google.com/doodles/slalom-canoe-2012";
            Nc("olympics12-hp-sprite.png");
            D = r("div", "hplogo_sc");
            cc = r("div", "hplogo_sb");
            bc = r("span", "hplogo_sbt", "hplogo_sse");
            cc.appendChild(bc);
            for (var e = 0; 3 > e; e++) Cc[e] = r("div", "hplogo_sm"), cc.appendChild(
                Cc[e]);
            D.appendChild(cc);
            e = function(a) {
                a = r("div", a);
                D.appendChild(a);
                return a
            };
            sc = e("hplogo_sr");
            vc = e("hplogo_ss");
            gc = e("hplogo_sg");
            sc.title = Oc(0);
            vc.title = Oc(1);
            gc.title = Oc(2);
            D.style.display = "none";
            kc = r("div", "hplogo_sle");
            kc.onmouseup = Pc;
            e = r("span", "", "hplogo_sse");
            e.textContent = d;
            kc.appendChild(e);
            D.appendChild(kc);
            A.appendChild(D);
            E = new u;
            w(E, function() {
                D.style.display = "";
                cc.style.opacity = 0;
                sc.style.opacity = 0;
                vc.style.opacity = 0;
                gc.style.opacity = 0;
                kc.style.opacity = 0;
                sc.className = "";
                vc.className = "";
                gc.className = "";
                Ea || Pc()
            });
            w(E, function(a) {
                D.style.opacity = a
            }, 500);
            x(E, 200);
            w(E, function(a) {
                var b = cc;
                Jc(b, 55, t(a, 6, 30));
                b.style.opacity = a
            }, 200);
            x(E, 200);
            w(E, function(a) {
                a *= 2;
                var b = sc,
                    c = a;
                Jc(b, 8, t(c, 12, 0));
                b.style.opacity = c;
                b = vc;
                c = a - .5;
                Jc(b, 8, t(c, 12, 0));
                b.style.opacity = c;
                b = gc;
                a = a - 1;
                Jc(b, 8, t(a, 12, 0));
                b.style.opacity = a
            }, 500);
            w(E, function(a) {
                kc.style.opacity = a
            }, 500);
            w(E, function() {
                uc = !0
            });
            tc = Ic(sc, "hplogo_srd");
            w(tc, function() {
                uc = !1;
                Dc || Ac || F();
                a()
            });
            w(tc, function(a) {
                D.style.opacity = 1 - a
            }, 200);
            w(tc, function() {
                D.style.display = "none"
            });
            sc.onmousedown = function() {
                uc && !tc.i && v(tc)
            };
            wc = Ic(vc, "hplogo_ssd");
            w(wc, function() {
                google.nav.go(google.doodle.url)
            });
            vc.onmousedown = function() {
                v(wc)
            };
            hc = Ic(gc, "hplogo_sgd", !0);
            gc.onmousedown = function() {
                Qc(4);
                v(hc)
            };
            fc = new $b(d, b, c, "", gc);
            xc = c
        },
        Ic = function(a, b, c) {
            for (var d = new u, e = 0; 2 >= e; e++) w(d, Sc(a, b + e)), x(d,
                16);
            if (c) {
                x(d, 64);
                for (e = 2; 0 <= e; e--) w(d, Sc(a, b + e)), x(d, 16);
                w(d, Sc(a, a.className))
            }
            return d
        },
        Vc = function() {
            var a = Tc,
                b = Uc;
            Na = !1;
            Dc = !a;
            dc = a;
            ic = m();
            mc = b;
            A = document.getElementById("hplogo");
            if (!A) return !1;
            google.doodle && google.doodle.alt && A.setAttribute(
                "aria-label", google.doodle.alt);
            A.innerHTML = "";
            return !0
        },
        Nc = function(a) {
            var b = r("img");
            b.src = "assets/" + a;
            mc && (b.complete || "complete" == b.readyState ? nc || (nc =
                window.setTimeout(Wc, 10)) : (b.onload = Xc, zc++));
            return b
        },
        F = function() {
            var a = m(),
                b = a - ic;
            Ac ? (yc.push(b), 30 < yc.length && yc.shift()) : yc = [];
            b = Math.min(40, b);
            uc || jc && 18E4 < a - jc ? Ac = !1 : !Dc && dc(a, b) ? (window
                    .requestAnimationFrame ? window.requestAnimationFrame(F,
                        A) : window.oRequestAnimationFrame ? window.oRequestAnimationFrame(
                        F) : window.mozRequestAnimationFrame ? window.mozRequestAnimationFrame(
                        F) : window.msRequestAnimationFrame ? window.msRequestAnimationFrame(
                        F) : window.webkitRequestAnimationFrame ? window.webkitRequestAnimationFrame(
                        F, A) : window.setTimeout(F, 16), ic = a, Ac = !0) :
                Ac = !1
        },
        Qc = function(a, b, c) {
            window.google && window.google.log && window.google.log(
                "doodle-slalom-canoe", "p:" + a + ",s:" + ("undefined" !=
                    typeof b ? b : "_") + ",nc:" + ("undefined" !=
                    typeof c ? c : "_") + ",d:" + Bc + ",")
        },
        Yc = function(a, b) {
            return a - b
        },
        Sc = function(a, b) {
            return function() {
                a.className = b
            }
        },
        Zc = function() {
            jc = m();
            Dc || Ac || uc || F()
        },
        $c = function(a) {
            Zc();
            (37 == a.keyCode || 39 == a.keyCode || 38 == a.keyCode || 40 ==
                a.keyCode || Ha(a.keyCode)) && a.preventDefault();
            uc && Ha(a.keyCode) && !tc.i && v(tc);
            lc && lc(a)
        },
        ad = function(a) {
            Ha(a.keyCode) && a.preventDefault()
        },
        Xc = function() {
            --zc || mc()
        },
        Wc = function() {
            zc || mc();
            nc = null
        },
        bd = function(a) {
            oc = !0;
            Zc();
            document.activeElement != A || uc || a.preventDefault();
            pc && pc(a)
        },
        cd = function(a) {
            oc && qc && (oc = !1, qc(a))
        },
        dd = function(a) {
            Zc();
            rc && rc(a)
        },
        Pc = function() {
            window.getSelection().selectAllChildren(kc)
        },
        Jc = function(a, b, c) {
            a.style.margin = c + "px 0 0 " + b + "px"
        };
    var ed = {
            ALL: ["Play again", "Search", "Share on Google+"],
            af: ["Speel weer", "Soek", "Deel op Google+"],
            "am_ET(Amharic/ALL)": [
                "\u12a5\u1295\u12f0\u1308\u1293 \u12a0\u132b\u12cd\u1275",
                "\u1348\u120d\u130d",
                "Google+ \u120b\u12ed \u12a0\u130b\u122b"
            ],
            ar: [
                "\u0627\u0644\u0644\u0639\u0628 \u0645\u0631\u0629 \u062b\u0627\u0646\u064a\u0629",
                "\u0628\u062d\u062b",
                "\u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629 \u0639\u0644\u0649 +Google"
            ],
            az: ["Yen\u0259 oyna", "Axtar",
                "Google+'da b\u00f6l\u00fc\u015f"
            ],
            be: ["\u042f\u0448\u0447\u044d \u0440\u0430\u0437",
                "\u0428\u0443\u043a\u0430\u0446\u044c",
                "\u041f\u0430\u0434\u0437\u044f\u043b\u0456\u0446\u0446\u0430 \u043d\u0430 Google+"
            ],
            bg: [
                "\u041f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u043f\u0443\u0441\u043a\u0430\u043d\u0435",
                "\u0422\u044a\u0440\u0441\u0435\u043d\u0435",
                "\u0421\u043f\u043e\u0434\u0435\u043b\u044f\u043d\u0435 \u0432 Google+"
            ],
            bn: [
                "\u0986\u09ac\u09be\u09b0 \u09aa\u09cd\u09b2\u09c7 \u0995\u09b0\u09c1\u09a8",
                "\u0985\u09a8\u09c1\u09b8\u09a8\u09cd\u09a7\u09be\u09a8 \u0995\u09b0\u09c1\u09a8",
                "Google+ \u098f \u09ad\u09be\u0997 \u0995\u09b0\u09c1\u09a8"
            ],
            bs: ["Igraj ponovno", "Tra\u017ei", "Podijeli na Google+"],
            ca: ["Juga una altra vegada", "Cerca ", "Comparteix a Google+"],
            cs: ["Hr\u00e1t znovu", "Hledat", "Sd\u00edlet na Google+"],
            da: ["Spil igen", "S\u00f8g", "Del p\u00e5 Google+"],
            de: ["Nochmal ansehen", "Suchen", "Auf Google+ teilen"],
            el: [
                "\u03a0\u03b1\u03af\u03be\u03c4\u03b5 \u03be\u03b1\u03bd\u03ac",
                "\u0391\u03bd\u03b1\u03b6\u03b7\u03c4\u03ae\u03c3\u03c4\u03b5",
                "\u039c\u03bf\u03b9\u03c1\u03b1\u03c3\u03c4\u03b5\u03af\u03c4\u03b5 \u03c3\u03c4\u03bf Google+"
            ],
            en_us: ["Play again", "Search", "Share on Google+"],
            "en-GB": ["Play again", "Search", "Share on Google+"],
            es: ["Jugar de nuevo", "Buscar", "Compartir en Google+"],
            "es-419": ["Jugar de nuevo", "Buscar", "Compartir en Google+"],
            et: ["M\u00e4ngi uuesti", "Otsi", "Jaga teenuses Google+"],
            eu: ["Jolastu berriro", "Bilatu", "Partekatu Google+en"],
            fi: ["Toista uudelleen", "Hae", "Jaa Google+ -palvelussa"],
            fr: ["Revoir", "Rechercher", "Partager sur Google+"],
            ga: ["Seinn ar\u00eds \u00e9", "Cuardaigh", "Roinn ar Google+"],
            gl: ["Xogar de novo", "Buscar", "Compartir en Google+"],
            hr: ["Ponovi", "Pretra\u017ei", "Dijeli na Google+"],
            hu: ["Lej\u00e1tsz\u00e1s ism\u00e9t", "Keres\u00e9s",
                "Megoszt\u00e1s a Google+-on"
            ],
            id: ["Main lagi", "Telusuri", "Bagikan di Google+"],
            is: ["Spila aftur", "Leita", "Deila \u00e1 Google+"],
            it: ["Gioca di nuovo", "Cerca", "Condividi su Google+"],
            iw: ["\u05d4\u05e4\u05e2\u05dc \u05e9\u05d5\u05d1",
                "\u05d7\u05e4\u05e9",
                "\u05e9\u05ea\u05e3 \u05d1-Google+"
            ],
            ja: ["\u3082\u3046\u4e00\u5ea6\u898b\u308b", "\u691c\u7d22",
                "Google+ \u3067\u5171\u6709"
            ],
            ko: ["\ub2e4\uc2dc\ud558\uae30", "\uac80\uc0c9",
                "Google+\uc5d0\uc11c \uacf5\uc720"
            ],
            lt: ["Rodyti dar kart\u0105", "Ie\u0161koti",
                "Dalytis \u201eGoogle+\u201c"
            ],
            lv: ["Atska\u0146ot v\u0113lreiz", "Mekl\u0113t",
                "Kop\u012bgot Google+"
            ],
            mk: [
                "\u0418\u0433\u0440\u0430\u0458 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e",
                "\u041f\u0440\u0435\u0431\u0430\u0440\u0430\u0458",
                "\u0421\u043f\u043e\u0434\u0435\u043b\u0438 \u043d\u0430 Google+"
            ],
            mr: [
                "\u092a\u0941\u0928\u094d\u0939\u093e \u092a\u094d\u0932\u0947 \u0915\u0930\u093e",
                "\u0936\u094b\u0927\u093e",
                "Google+ \u0935\u0930 \u0938\u093e\u092e\u093e\u092f\u093f\u0915 \u0915\u0930\u093e"
            ],
            ms_my: ["Main semula", "Cari", "Kongsi di Google+"],
            nl: ["Opnieuw afspelen", "Zoeken", "Delen op Google+"],
            no: ["Spill av p\u00e5 nytt", "S\u00f8k", "Del p\u00e5 Google+"],
            pl: ["Odtw\u00f3rz ponownie", "Szukaj",
                "Udost\u0119pnij w Google+"
            ],
            "pt-BR": ["Jogar novamente", "Pesquisar",
                "Compartilhar no Google+"
            ],
            "pt-PT": ["Jogar novamente", "Pesquisar",
                "Partilhar no Google+"
            ],
            ro: ["Reda\u0163i din nou", "C\u0103uta\u0163i",
                "Distribui\u0163i \u00een Google+"
            ],
            ru: [
                "\u0418\u0433\u0440\u0430\u0442\u044c \u0435\u0449\u0451 \u0440\u0430\u0437",
                "\u0418\u0441\u043a\u0430\u0442\u044c",
                "\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0432 Google+"
            ],
            sk: ["Hra\u0165 znova", "H\u013eada\u0165",
                "Zdie\u013ea\u0165 v Google+"
            ],
            sl: ["Ponovno predvajaj", "I\u0161\u010di",
                "Deli v storitvi Google+"
            ],
            sr: ["\u0418\u0433\u0440\u0430\u0458 \u043e\u043f\u0435\u0442",
                "\u041f\u0440\u0435\u0442\u0440\u0430\u0436\u0438",
                "\u0414\u0435\u043b\u0438 \u043d\u0430 Google+"
            ],
            sv: ["Spela igen", "S\u00f6k", "Dela p\u00e5 Google+"],
            sw: ["Cheza tena", "Tafuta", "Shiriki kwenye Google+"],
            th_All: [
                "\u0e40\u0e25\u0e48\u0e19\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07 ",
                "\u0e04\u0e49\u0e19\u0e2b\u0e32",
                "\u0e41\u0e1a\u0e48\u0e07\u0e1b\u0e31\u0e19\u0e1a\u0e19 Google+"
            ],
            tr: ["Tekrar oyna", "Ara", "Google+'da payla\u015f"],
            uk: [
                "\u0413\u0440\u0430\u0442\u0438 \u0449\u0435 \u0440\u0430\u0437",
                "\u0428\u0443\u043a\u0430\u0442\u0438",
                "\u041f\u043e\u0434\u0456\u043b\u0438\u0442\u0438\u0441\u044c \u0443 Google+"
            ],
            vi: ["Ph\u00e1t l\u1ea1i", "T\u00ecm ki\u1ebfm",
                "Chia s\u1ebb tr\u00ean Google+"
            ],
            "zh-CN": ["\u518d\u73a9\u4e00\u6b21", "\u641c\u7d22",
                "\u901a\u8fc7 Google+ \u5206\u4eab"
            ],
            "zh-TW_HK": ["\u518d\u64ad\u4e00\u6b21", "\u641c\u5c0b",
                "\u900f\u904e Google+ \u5206\u4eab"
            ],
            "zh-TW_tw": ["\u518d\u770b\u4e00\u6b21", "\u641c\u5c0b",
                "\u900f\u904e Google+ \u5206\u4eab"
            ],
            zu: ["Dlala futhi", "Sesha ", "Yabelana ku-Google+"],
            hi: ["\u092b\u093c\u093f\u0930 \u0916\u0947\u0932\u0947\u0902",
                "\u0916\u094b\u091c\u0947\u0902",
                "Google+ \u092a\u0930 \u0938\u093e\u091d\u093e \u0915\u0930\u0947\u0902"
            ],
            fil: ["I-play muli", "Maghanap", "Ibahagi sa Google+"],
            fa: ["\u0628\u0627\u0632\u067e\u062e\u0634",
                "\u062c\u0633\u062a\u062c\u0648",
                "\u0627\u0634\u062a\u0631\u0627\u06a9\u200c\u06af\u0630\u0627\u0631\u06cc \u062f\u0631 +Google"
            ]
        },
        Oc = function(a) {
            return google.kHL in ed && ed[google.kHL][a] || ed.ALL[a]
        };
    var G, fd, gd, hd, H, I, id, J, jd, kd, ld, md, nd, od, K, pd, qd, rd,
        sd, td, ud, vd, wd, xd, yd, L, zd, Ad, Bd, Cd, Dd, Ed, Fd, Gd, M,
        Hd, Id, Jd, Kd, Ld, Md, Nd, Od, Rd, Sd, Td, Ud, Vd, N, Wd, Xd, Yd,
        O, Zd, $d, Wa, P, Q, R, S, ae, be, ce, de = function(a, b, c, d, e,
            f) {
            this.G = a;
            this.w = !1;
            this.k = Math.floor(b);
            this.p = Math.floor(c);
            this.o = a.createImageData(this.k, this.p);
            this.C = e;
            this.B = f;
            this.D = d;
            this.clear()
        };
    k = de.prototype;
    k.clear = function() {
        this.v = 0;
        this.i = [];
        this.s = [];
        for (var a = 0; a < this.p + 2; a++) {
            this.i[a] = [];
            this.s[a] = [];
            for (var b = 0; b < this.k + 2; b++) this.i[a][b] = 0, this
                .s[a][b] = 0
        }
    };
    k.aa = function() {
        this.w = !0;
        this.clear = this.aa = this.pa = this.A = this.F = this.Q =
            this.oa = function() {}
    };
    k.pa = function() {
        for (var a = this.i, b = this.s, c = this.D, d = this.p, e =
            this.k, f = 1; f <= d; f++)
            for (var g = b[f], h = 1; h <= e; h++) g[h] = ((a[f][h - 1] +
                    a[f][h + 1] + a[f - 1][h] + a[f + 1][h]) / 2 -
                b[f][h]) * c;
        this.i = b;
        this.s = a
    };
    k.A = function(a, b) {
        for (var c = 1; c <= this.p; c++)
            for (var d = 1; d <= this.k; d++) {
                var e = (this.i[c + 1][d + 1] - this.i[c - 1][d - 1]) /
                    2 + this.i[c + 1][d] + this.i[c][d + 1] - this.i[c]
                    [d - 1] - this.i[c - 1][d],
                    f = 4 * ((c - 1) * this.k + d - 1),
                    g = 0;
                0 < e ? (g = Math.min(1, e), this.o.data[f] = this.C[0],
                    this.o.data[f + 1] = this.C[1], this.o.data[f +
                        2] = this.C[2]) : 0 > e && (g = Math.min(1, -
                        e), this.o.data[f] = this.B[0], this.o.data[
                        f + 1] = this.B[1], this.o.data[f + 2] =
                    this.B[2]);
                this.o.data[f + 3] = 255 * g
            }
        this.G.putImageData(this.o, a, b)
    };
    k.F = function(a, b, c) {
        0 <= a && a < this.k && 0 < b && b < this.p && (this.i[Math.floor(
            b) + 1][Math.floor(a) + 1] = c)
    };
    k.Q = function(a, b, c, d, e) {
        a = Math.max(0, Math.min(this.k - 1, a));
        b = Math.max(0, Math.min(this.p - 1, b));
        c = Math.max(0, Math.min(this.k - 1, c));
        d = Math.max(0, Math.min(this.p - 1, d));
        for (var f = c - a, g = d - b, f = Math.sqrt(f * f + g * g), g =
            0; g < f; g++) {
            var h = g / f;
            this.i[Math.floor(b + (d - b) * h + 1)][Math.floor(a + (c -
                a) * h + 1)] = e
        }
    };
    k.oa = function(a) {
        this.v -= a;
        a = Math.ceil(this.v);
        if (0 > a) {
            this.v -= a;
            for (var b = this.k + Math.min(0, a), c = 1; c <= this.p; c++) {
                for (var d = 1; d <= b; d++) this.i[c][d] = this.i[c][d -
                    a
                ], this.s[c][d] = this.s[c][d - a];
                for (d = b + 1; d <= this.k; d++) this.s[c][d] = this.i[
                    c][d] = 0
            }
        }
    };
    var ee = {
            ALL: ["Score", "Slalom Canoe", "I slalom canoed! #GoogleDoodle"],
            af: ["Hoogste telling", "Witwater-kano",
                "Ek het witwater-kano gery #GoogleDoodle"
            ],
            "am_ET(Amharic/ALL)": [
                "\u12a8\u134d\u1270\u129b \u12cd\u1324\u1275",
                "\u12e8\u1263\u1205\u122d \u120b\u12ed \u1240\u12d8\u134b",
                "\u12e8\u1263\u1205\u122d \u120b\u12ed \u1240\u12d8\u134b  \u1270\u132b\u12cd\u127b\u1208\u1201! #GoogleDoodle"
            ],
            ar: ["\u0627\u0644\u0646\u062a\u064a\u062c\u0629",
                "\u0627\u0644\u062a\u062c\u062f\u064a\u0641",
                "\u0645\u0627\u0631\u0633\u062a \u0644\u0639\u0628\u0629 \u0627\u0644\u062a\u062c\u062f\u064a\u0641 GoogleDoodle#"
            ],
            az: ["\u018fn y\u00fcks\u0259k bal", "Avar\u00e7\u0259km\u0259",
                "M\u0259n avar\u00e7\u0259km\u0259d\u0259 i\u015ftirak etdim! #GoogleDoodle"
            ],
            be: [
                "\u041d\u0430\u0439\u043b\u0435\u043f\u0448\u044b \u0432\u044b\u043d\u0456\u043a",
                "\u0412\u0435\u0441\u043b\u0430\u0432\u0430\u043d\u043d\u0435",
                "\u042f \u045e\u0434\u0437\u0435\u043b\u044c\u043d\u0456\u0447\u0430\u045e \u0443 \u0441\u043f\u0430\u0431\u043e\u0440\u043d\u0456\u0446\u0442\u0432\u0430\u0445 \u043f\u0430 \u0432\u0435\u0441\u043b\u0430\u0432\u0430\u043d\u043d\u0456 #GoogleDoodle"
            ],
            bg: [
                "\u041d\u0430\u0439-\u0434\u043e\u0431\u044a\u0440 \u0440\u0435\u0437\u0443\u043b\u0442\u0430\u0442",
                "\u041a\u0430\u043d\u0443 \u0441\u043b\u0430\u043b\u043e\u043c",
                "\u0418\u0433\u0440\u0430\u0445 \u043a\u0430\u043d\u0443 \u0441\u043b\u0430\u043b\u043e\u043c #GoogleDoodle"
            ],
            bn: ["\u09b8\u09cd\u0995\u09cb\u09b0",
                "\u09b8\u09cd\u09b2\u09be\u09b2\u09cb\u09ae \u0995\u09cd\u09af\u09be\u09a8\u09cb",
                "\u0986\u09ae\u09bf \u09b8\u09cd\u09b2\u09be\u09b2\u09cb\u09ae \u0995\u09cd\u09af\u09be\u09a8\u09cb \u09ac\u09c7\u09df\u09c7\u099b\u09bf #\u0997\u09c1\u0997\u09b2\u09a1\u09c1\u09a1\u09b2"
            ],
            bs: ["Rezultat", "Kanu slalom",
                "Igrao sam kanu slalom #GoogleDoodle"
            ],
            ca: ["R\u00e8cord", "Pirag\u00fcisme d'esl\u00e0lom",
                "He fet pirag\u00fcisme d'esl\u00e0lom #GoogleDoodle"
            ],
            cs: ["Nejvy\u0161\u0161\u00ed sk\u00f3re", "Vodn\u00ed slalom",
                "Tr\u00e9nujte vodn\u00ed slalom #GoogleDoodle"
            ],
            da: ["Top score", "Kano slalom",
                "Jeg slalomede min kano #GoogleDoodle"
            ],
            de: ["Rekord", "Kanuslalom",
                "Ich bin Kanuslalom gefahren #GoogleDoodle"
            ],
            el: [
                "\u03a5\u03c8\u03b7\u03bb\u03cc\u03c4\u03b5\u03c1\u03b5\u03c2 \u0392\u03b1\u03b8\u03bc\u03bf\u03bb\u03bf\u03b3\u03af\u03b5\u03c2",
                "\u039a\u03b1\u03bd\u03cc",
                "\u0388\u03ba\u03b1\u03bd\u03b1 \u03ba\u03b1\u03bd\u03cc #GoogleDoodle"
            ],
            en_us: ["Score", "Slalom Canoe",
                "I slalom canoed! #GoogleDoodle"
            ],
            "en-GB": ["Score", "Slalom Canoe",
                "I slalom canoed! #GoogleDoodle"
            ],
            es: ["R\u00e9cord", "Pirag\u00fcismo en eslalon",
                "He hecho pirag\u00fcismo en eslalon #GoogleDoodle"
            ],
            "es-419": ["Resultado", "Canotaje en slalom",
                "Particip\u00e9 en canotaje en slalom #GoogleDoodle"
            ],
            et: ["Rekordtulemus", "S\u00fcsta- ja kanuuslaalom",
                "S\u00f5itsin s\u00fcsta- ja kanuuslaalomit #GoogleDoodle"
            ],
            eu: ["Emaitza", "Piraguismoa",
                "Piraguismoa egin dut #GoogleDoodle"
            ],
            fi: ["K\u00e4rkitulos", "Koskipujottelu",
                "Koskipujottelin #GoogleDoodle"
            ],
            fr: ["R\u00e9sultat", "Cano\u00eb slalom",
                "J'ai fait du slalom en cano\u00eb #GoogleDoodle"
            ],
            ga: ["Sc\u00f3r is fearr", "Slalom Curach",
                "D'imir m\u00e9 cluiche slal\u00f3m curach #GoogleDoodle"
            ],
            gl: ["Record", "Pirag\u00fcismo",
                "Fixen pirag\u00fcismo #GoogleDoodle"
            ],
            hr: ["Rezultat", "Kanu slalom",
                "Igrao sam kanu slalom #GoogleDoodle"
            ],
            is: ["Flest stig", "Kan\u00f3svig",
                "\u00c9g f\u00f3r \u00ed kan\u00f3svig #GoogleDoodle"
            ],
            it: ["Miglior punteggio", "Canoa slalom",
                "Ho giocato a canoa slalom #GoogleDoodle"
            ],
            iw: ["\u05e0\u05d9\u05e7\u05d5\u05d3",
                "\u05e1\u05dc\u05d0\u05dc\u05d5\u05dd \u05e7\u05d0\u05e0\u05d5",
                "\u05e2\u05e9\u05d9\u05ea\u05d9 \u05e1\u05dc\u05d0\u05dc\u05d5\u05dd \u05e7\u05d0\u05e0\u05d5  #GoogleDoodle"
            ],
            hu: ["Legjobb eredm\u00e9ny", "Szlalom kenu",
                "Szlalom kenuztam #GoogleDoodle"
            ],
            ja: ["\u30b9\u30b3\u30a2",
                "\u30ab\u30cc\u30fc \u30b9\u30e9\u30ed\u30fc\u30e0",
                "\u300c\u30ab\u30cc\u30fc \u30b9\u30e9\u30ed\u30fc\u30e0\u300d\u3092\u3084\u3063\u305f! #GoogleDoodle"
            ],
            ko: ["\uae30\ub85d", "\uce74\ub204",
                "\uce74\ub204\ub97c \ud588\uc5b4\uc694! #GoogleDoodle "
            ],
            lt: ["Rezultatas", "Irklavimas",
                "A\u0161 dalyvavau Google irklavimo rungtyje!"
            ],
            lv: ["Lab\u0101kais rezult\u0101ts", "Air\u0113\u0161ana",
                "Es air\u0113ju kanoe #GoogleDoodle"
            ],
            mk: [
                "\u041d\u0430\u0434\u043e\u0431\u0430\u0440 \u0440\u0435\u0437\u0443\u043b\u0442\u0430\u0442",
                "\u041a\u0430\u043d\u0443 \u0441\u043b\u0430\u043b\u043e\u043c ",
                "\u0412\u043e\u0437\u0435\u0432 \u043a\u0430\u043d\u0443 #GoogleDoodle"
            ],
            mo: ["Scor de top", "Canoe Slalom",
                "Am concurat la canoe slalom #GoogleDoodle"
            ],
            mr: [
                "\u0938\u0930\u094d\u0935\u093e\u0927\u093f\u0915 \u0917\u0941\u0923",
                "\u0938\u094d\u0932\u093e\u0932\u094b\u092e \u0915\u0928\u0942\u0907\u0902\u0917",
                "\u092e\u0940 \u0938\u094d\u0932\u093e\u0932\u094b\u092e \u0915\u0928\u0942\u0907\u0902\u0917 \u0915\u0947\u0932\u0947 #GoogleDoodle"
            ],
            ms_my: ["Skor tertinggi", "Kanu Slalom",
                "Saya bermain kanu slalom #GoogleDoodle"
            ],
            nl: ["Topscore", "Kano slalom",
                "Ik heb met een kano geslalomd #GoogleDoodle"
            ],
            no: ["Resultat", "Slalomkajakk",
                "Jeg padlet slalomkajakk!  #GoogleDoodle"
            ],
            pl: ["Najlepszy wynik", "Kajakarstwo g\u00f3rskie",
                "\u0106wicz\u0119 kajakarstwo g\u00f3rskie #GoogleDoodle"
            ],
            "pt-BR": ["Pontua\u00e7\u00e3o", "Canoagem Slalom",
                "Eu fiz Canoagem Slalom #GoogleDoodle"
            ],
            "pt-PT": ["Pontua\u00e7\u00e3o", "Canoagem Slalom",
                "Eu fiz Canoagem Slalom #GoogleDoodle"
            ],
            ro: ["Scor de top", "Canoe Slalom",
                "Am concurat la canoe slalom #GoogleDoodle"
            ],
            ru: ["\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442",
                "\u0413\u0440\u0435\u0431\u043d\u043e\u0439 \u0441\u043b\u0430\u043b\u043e\u043c",
                "\u0413\u0440\u0435\u0431\u043b\u044f #GoogleDoodle"
            ],
            sk: ["Najlep\u0161ie sk\u00f3re", "Vodn\u00fd slalom",
                "Potr\u00e9nujte vodn\u00fd slalom #GoogleDoodle"
            ],
            sl: ["Najbolj\u0161i rezultat", "Kanu slalom",
                "Vozil sem kanu slalom #GoogleDoodle"
            ],
            sr: [
                "\u041d\u0430\u0458\u0431\u043e\u0459\u0438 \u0440\u0435\u0437\u0443\u043b\u0442\u0430\u0442",
                "\u041a\u0430\u043d\u0443 \u0441\u043b\u0430\u043b\u043e\u043c",
                "\u0418\u0433\u0440\u0430\u043c \u043a\u0430\u043d\u0443 \u0441\u043b\u0430\u043b\u043e\u043c #GoogleDoodle"
            ],
            sv: ["Resultat", "Kajak", "Jag paddlade kajak #GoogleDoodle"],
            sw: ["Alama za Juu", "Mbio za Mtumbwi",
                "Nilishiriki Mbio za Mtumbwi #GoogleDoodle"
            ],
            th_All: [
                "\u0e04\u0e30\u0e41\u0e19\u0e19\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14",
                "\u0e41\u0e04\u0e19\u0e39\u0e2a\u0e25\u0e32\u0e25\u0e21",
                "\u0e09\u0e31\u0e19\u0e1e\u0e32\u0e22\u0e40\u0e23\u0e37\u0e2d\u0e41\u0e04\u0e19\u0e39\u0e2a\u0e25\u0e32\u0e25\u0e21\u0e1a\u0e19 Google Doodle!"
            ],
            tr: ["En y\u00fcksek puan", "Kano Slalom",
                "Kano slalom yapt\u0131m! #GoogleDoodle"
            ],
            uk: [
                "\u041d\u0430\u0439\u043a\u0440\u0430\u0449\u0438\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442",
                "\u0413\u0440\u0435\u0431\u043d\u0438\u0439 \u0441\u043b\u0430\u043b\u043e\u043c",
                "\u0413\u0440\u0435\u0431\u043d\u0438\u0439 \u0441\u043b\u0430\u043b\u043e\u043c #GoogleDoodle"
            ],
            "zh-CN": ["\u6700\u9ad8\u5f97\u5206",
                "\u6fc0\u6d41\u56de\u65cb\u76ae\u5212\u8247",
                "#Google\u6d82\u9e26#\u6211\u73a9\u4e86\u6fc0\u6d41\u56de\u65cb\u76ae\u5212\u8247"
            ],
            "zh-TW_HK": ["\u6700\u9ad8\u5f97\u5206",
                "\u6fc0\u6d41\u8f15\u8247",
                "\u6211\u5212\u4e86\u6fc0\u6d41\u8f15\u8247\uff01 #GoogleDoodle"
            ],
            "zh-TW_tw": ["\u6700\u9ad8\u5f97\u5206",
                "\u6fc0\u6d41\u8f15\u8247",
                "\u6211\u5212\u4e86\u6fc0\u6d41\u8f15\u8247\uff01 #GoogleDoodle"
            ]
        },
        Mc = function(a) {
            return google.kHL in ee && ee[google.kHL][a] || ee.ALL[a]
        };
    var T = [88, -8, 80, 17],
        fe = Math.PI / 4,
        U = [{
            x: 0,
            top: 29,
            bottom: 184
        }, {
            x: 127,
            top: 42,
            bottom: 192
        }, {
            x: 328,
            top: 24,
            bottom: 192
        }, {
            x: 500,
            top: 27,
            bottom: 182
        }, {
            x: 628,
            top: 41,
            bottom: 189
        }, {
            x: 628,
            top: 41,
            bottom: 189
        }, {
            x: 720,
            top: 71,
            bottom: 207
        }, {
            x: 835,
            top: 61,
            bottom: 207
        }, {
            x: 912,
            top: 44,
            bottom: 207
        }, {
            x: 978,
            top: 29,
            bottom: 188
        }, {
            x: 1088,
            top: 30,
            bottom: 183
        }, {
            x: 1162,
            top: 15,
            bottom: 181
        }, {
            x: 1200,
            top: 0,
            bottom: 170
        }, {
            x: 1250,
            top: 0,
            bottom: 160
        }, {
            x: 1327,
            top: 0,
            bottom: 170
        }, {
            x: 1400,
            top: 26,
            bottom: 188
        }, {
            x: 1512,
            top: 22,
            bottom: 178
        }, {
            x: 1663,
            top: 26,
            bottom: 181
        }, {
            x: 1738,
            top: 0,
            bottom: 172
        }, {
            x: 1805,
            top: 0,
            bottom: 152
        }, {
            x: 1915,
            top: 0,
            bottom: 160
        }, {
            x: 1983,
            top: 0,
            bottom: 162
        }, {
            x: 2093,
            top: 30,
            bottom: 182
        }, {
            x: 2227,
            top: 47,
            bottom: 187
        }, {
            x: 2312,
            top: 71,
            bottom: 207
        }, {
            x: 2422,
            top: 61,
            bottom: 207
        }, {
            x: 2484,
            top: 43,
            bottom: 207
        }, {
            x: 2553,
            top: 32,
            bottom: 188
        }, {
            x: 2579,
            top: 23,
            bottom: 189
        }, {
            x: 2649,
            top: 29,
            bottom: 184
        }],
        ge = [
            [28, 11],
            [27, 16],
            [34, 14],
            [33, 32],
            [47, 26],
            [43, 35],
            [30, 24]
        ],
        he = [],
        V = [],
        W = 0,
        ie = 0,
        je = !(!window.localStorage || !window.localStorage.getItem(
            "doodle-kayak-tooltip")),
        le = function() {
            var a = ke(J + T[0] + T[2] / 2),
                b = a.top - T[1],
                c = a.bottom - T[1] - T[3];
            return R <= b ? (R = b, a.Da) : R >= c ? (R = c, a.Ca) : null
        },
        me = function(a, b) {
            var c = a.x - J;
            if (-30 < c && 600 > c) {
                var d = [];
                if (!b)
                    if (1 == a.type) a.N ? d.push(V[3]) : (V[0].i = Math.max(
                            0, (75 - Math.abs(c - 500)) / 75), V[1].i =
                        Math.max(0, (75 - Math.abs(c - 425)) / 75), V[2]
                        .i = Math.min(1, Math.max(0, (c - 400) / -100)),
                        d.push(V[0]), d.push(V[1]), d.push(V[2]));
                    else if (2 == a.type) {
                    d.push(Nd[a.variant]);
                    var e = Md[a.variant];
                    e && d.push(e)
                }
                0 == a.type && (R > a.y != b && (xd.frame = a.N ? 1 : 0, d.push(
                    wd), d.push(xd)), R > a.y + a.I[1] != b && (Id.frame =
                    a.N ? 1 : 0, d.push(Hd), d.push(Id)));
                for (var e = 0, f; f = d[e++];) f.x = c, f.y = a.y, f.A()
            }
        },
        Tc = function(a, b) {
            if (1 == O && !yd.i && !fd.i && !Ja(128, a)) return !0;
            var c;
            if (c = !M.w) 30 == yc.length ? (c = yc.slice(0).sort(Yc), c =
                40 < c[Math.floor(c.length / 2)]) : c = !1;
            c && M.aa();
            if (2 == O && je && !Wa.i && 5E3 < a - Fd) $d || Qc(3), ne();
            else if (4 == O || 3 == O) {
                4 == O && (c = a - Dd, P += Bd * b, Bd *= Math.max(0, 1 - .003 *
                    b), Cd ? oe(Ad, .001 * b) : 50 < c && (G += .0015 *
                    W * b, c = Math.min(1, Math.max(0, (J - 7950) /
                        -200)) * fe, G = Math.min(c, G), G = Math.max(-
                        c, G)), rd && 50 <= a - rd && (Z(3), rd =
                    null));
                oe(0, 2.5E-4 * b);
                c = le();
                null != c && oe(c, .001 * b);
                var d;
                o: {
                    d = 0;
                    for (var e; e = he[d++];) {
                        var f = e.x - J - T[0];
                        if (f < T[2] && 0 < f + e.I[0] && e.y < R + T[3] /
                            2 && e.y + e.I[1] > R - T[3] / 2) {
                            d = e;
                            break o
                        }
                    }
                    d = null
                }
                d && (0 == d.type ? (d.N || (P = .05 + 1.4 * P, v(md), v(od),
                    d.N = !0), d = null) : d.N = !0);
                if (c || d) id = Math.min(3E3, id + b), P *= Math.max(0, 1 -
                    .003 * b), ld = 3;
                5E3 < a - Dd ? ($d || Qc(3), ne()) : pe();
                c = P * b * Math.cos(G);
                d = 1 - b * (.0015 + 3E-7 * id);
                J += c;
                R += P * b * Math.sin(G);
                P = Math.max(.1, P * d);
                ld *= Math.max(0, 1 - .015 * b);
                if (!M.w && (M.oa(c), 4 == O && (e = 32 * W, d = Q - Math.sin(
                            G) * e + 70, e = R + Math.cos(G) * e, qe(J +
                            d, e) ? sd && td ? M.Q(sd - c, td, d, e, 1.5) :
                        M.F(d, e, 1.5) : d = e = null, sd = d, td = e),
                    e = T[2] / 2, d = T[0] + e + Math.cos(G) * e, e = R +
                    Math.sin(G) * e, qe(J + d, e) ? ud && vd ? M.Q(ud -
                        c, vd, d, e, 1.5) : M.F(d, e, 1.5) : d = e =
                    null, ud = d, vd = e, Ja(200, a)))
                    for (c = 0; d = he[c++];) 0 == d.type ? (M.F(d.x + d.I[
                        0] - J + 18, d.y - 10, 5), M.F(d.x + d.I[0] -
                        J + 18, d.y + d.I[1] + 10, 5)) : M.F(d.x + d.I[
                        0] / 2 - J, d.y + d.I[1] / 2, 5);
                W != ie && (0 != ie ? -1 == ie ? (N = ae, v(Ud)) : (N = ce,
                    v(Sd)) : (-1 == W ? (N = S, v(Vd)) : (N = be, v(
                    Td)), ie = W));
                7950 <= J && Z(5)
            }
            if ((1 != O || fd.i) && Ja(64, a) && (M.pa(), 0 < J))
                for (c = La(J, 2650), d = 0; d < U.length - 1; d++) {
                    e = U[d];
                    var f = U[d + 1],
                        g = e.x - c,
                        h = f.x - c;
                    0 > h && (g += 2650, h += 2650);
                    h > g && 530 > g && 0 < h && (M.Q(g, e.top, h, f.top, 0),
                        M.Q(g, e.bottom, h, f.bottom, 0))
                }
            c = La(J, 2650);
            Jd.x = -c;
            Jd.A();
            Jd.x = 2650 - c;
            Jd.A();
            Ld.x = -J;
            Ld.A();
            Kd.x = 7950 - J;
            Kd.A();
            M.w ? (c = H, c.getContext("2d").clearRect(0, 0, c.width, c.height)) :
                M.A(0, 0);
            if (1 == O) {
                c = 2 * Math.cos(5E-4 * a) * L;
                d = 2 * Math.sin(5E-4 * a) * L;
                e = .1 * Math.sin(5E-4 * a) * L;
                f = Ed;
                g = "";
                if (c || d) g += "translate(" + c + "px," + d + "px)";
                e && (g += " rotate(" + e + "rad)");
                f.style.MozTransform = g;
                f.style.msTransform = g;
                f.style.i = g;
                f.style.webkitTransform = g;
                for (c = 0; d = zd[c++];) e = .2 * a * c, d.G = 2 * Math.cos(
                        5E-4 * e) * L, d.D = 2 * Math.sin(5E-4 * e) * L, d.s =
                    .1 * Math.sin(5E-4 * e) * L, d.A()
            }
            c = 173 - J;
            if (0 < c) {
                d = [];
                e = [];
                I.beginPath();
                I.moveTo(c + 2.5, 0);
                for (f = 0; 15 > f; f++) {
                    var g = a + 1E3 * f,
                        l = c + 2 * Math.cos(5E-4 * g) * L,
                        g = 13.8 * (f + .5) + 2 * Math.sin(5E-4 * g) * L;
                    d.push(l);
                    e.push(g);
                    I.lineTo(l + 2.5, g)
                }
                I.lineTo(l + 2.5, 207);
                I.strokeStyle = "rgba(0,0,0,0.2)";
                I.lineWidth = 1;
                I.stroke();
                for (f = 0; 15 > f; f++) Ia(I, d[f], e[f], 5, 5, "#739eaa"),
                    Ia(I, d[f], e[f], 4, 4, "rgba(255,255,255," + t(L, 1, .8 +
                        .2 * Math.sin(5E-4 * a)) + ")")
            }
            for (l = 0; c = he[l++];) me(c, !1);
            qd.s = pd.s = N.s = G;
            qd.x = pd.x = Q + 5;
            qd.y = pd.y = R + -10;
            qd.A();
            nd.s = G;
            nd.x = Q + 45;
            nd.y = R + -13;
            nd.A();
            K.s = G;
            K.x = Q + 35;
            K.G = 15 * -K.frame - 15;
            K.y = R + -16;
            K.A();
            N.H = pd.H = .05 * ld;
            N.B = pd.B = ld;
            pd.frame = Math.floor(id / 1E3);
            pd.A();
            N.x = Q + 35;
            N.y = R + -44;
            N.A();
            for (l = 0; c = he[l++];) me(c, !0);
            Wa.frame = a / 300 & 1;
            Wa.A();
            l = .2 * Math.sin(a / 1E3) * L;
            hd.x = 0;
            hd.k = 1 + l;
            hd.A();
            hd.k = -1 + l;
            hd.x = 530 - Ta(hd);
            hd.A();
            jd.x = 7950 - J;
            jd.A();
            return !0
        },
        ke = function(a) {
            var b = La(a, 2650);
            for (a = 0;; a++) {
                var c = U[a].x,
                    d = U[a + 1].x;
                if (c <= b && d > b || a >= U.length - 2) return b = (b - c) /
                    (d - c), {
                        top: t(b, U[a].top, U[a + 1].top),
                        bottom: t(b, U[a].bottom, U[a + 1].bottom),
                        Da: Math.atan2(U[a + 1].top - U[a].top, U[a + 1]
                            .x - U[a].x),
                        Ca: Math.atan2(U[a + 1].bottom - U[a].bottom, U[
                            a + 1].x - U[a].x)
                    }
            }
        },
        pe = function() {
            $d && ($d = !1, Ya(100, 0), Zd.style.display = "none")
        },
        qe = function(a, b) {
            var c = ke(a);
            return b > c.top && b < c.bottom
        },
        re = function(a) {
            2 != Bc && (Bc = 0);
            (3 == O || 4 == O || 2 == O) && (a = 37 == a.keyCode || 38 == a
                .keyCode ? -1 : 39 == a.keyCode || 40 == a.keyCode ? 1 : 0) &&
            a != W && (4 == O && Z(3), W = a, Cd = !1, Z(4))
        },
        se = function(a) {
            4 == O && (37 == a.keyCode || 38 == a.keyCode ? -1 : 39 == a.keyCode ||
                40 == a.keyCode ? 1 : 0) == W && (rd = m())
        },
        Uc = function() {
            var a = te;
            qc = ue;
            A.onmouseout = cd;
            A.onmouseup = cd;
            se && (A.onkeyup = se);
            pc = a;
            A.onmousedown = bd;
            rc = null;
            A.onmousemove = dd;
            lc = re;
            A.onkeydown = $c;
            A.style.cursor = "pointer"; - 1 != navigator.userAgent.indexOf(
                "Opera") && (A.onkeypress = ad);
            Z(1);
            F()
        },
        te = function(a) {
            2 != Bc && (Bc = 1);
            if (3 == O || 2 == O) {
                var b, c;
                a.offsetX ? (b = a.offsetX, c = a.offsetY) : a.layerX && (b =
                    a.layerX, c = a.layerY);
                b && c && (a = b + 10, qe(a + J, c) && M.F(a, c, 5), W = c <
                    R ? -1 : 1, Cd = !0, b > Q && (Ad = Math.atan2(c -
                        R, b - Q)), Z(4))
            }
        },
        ue = function() {
            4 == O && (Cd = !1, Z(3))
        },
        Hc = function() {
            Oa(yd);
            v(fd);
            Ka();
            bb[0] = 37;
            bb[1] = 39;
            bb[2] = 37;
            bb[3] = 39;
            bb[4] = Ga[0];
            bb[5] = Ga[0];
            kb(function() {
                2 != Bc && (Bc = 2)
            });
            Qc(0)
        },
        Lc = function() {
            Qc(2);
            id = G = 0;
            Q = -120;
            R = 103.5;
            W = 0;
            v(Gd)
        },
        Fc = function(a) {
            a.stopPropagation()
        },
        oe = function(a, b) {
            var c = Math.min(1, Math.max(0, (J - 7950) / -200)) * fe;
            a = Math.min(c, Math.max(-c, a));
            G < a ? G = Math.min(a, G + b) : G > a && (G = Math.max(a, G -
                b))
        },
        Z = function(a) {
            var b = O;
            if (b != a)
                if (O = a, 1 == a) G = id = J = ld = 0, v(yd), Ed.style.display =
                    "", Q = -120, R = 103.5;
                else if (2 == a) je || ne(), ud = vd = 0, Fd = m();
            else if (3 == a) W = 0;
            else if (4 == a) {
                if (sd = td = 0, a = m(), Bd = 8E-4, Dd = a, rd = null, 2 ==
                    b) {
                    Yd = a;
                    he = [];
                    P = .1;
                    a = b = 0;
                    for (var c; 17 > a; a++) {
                        c = 850 + 400 * a + 300 * Math.random();
                        if (Math.random() > (10 - b) / (17 - a)) {
                            var d = 1 + Math.floor(8 * Math.random());
                            1 == d ? c = ve(c, 1, [62, 30]) : (d -= 2, c =
                                ve(c, 2, ge[d]), c.variant = d)
                        } else b++, c = ve(c, 0, [8, 38], 24);
                        he.push(c)
                    }
                }
            } else 5 == a && (ld = 0, kd = m(), pe(), Oa(Vd), Oa(Ud), Oa(Td),
                Oa(Sd), 6E4 > kd - Yd ? (N = Xd, v(Wd)) : (N = Rd, v(Od))
            )
        },
        we = function() {
            var a = kd - Yd,
                b = 0;
            17E3 > a ? b = 3 : 3E4 > a ? b = 2 : 6E4 > a && (b = 1);
            Qc(1, a, b);
            var a = a ? (a / 1E3).toFixed(1) + " s" : "",
                c = "slalom_canoe";
            fc.D = xc + a;
            c || (c = ec);
            fc.C = "https://www.google.comassets/" + c + "12-hp-share" + b +
                ".png";
            bc.textContent = a;
            for (a = 0; 3 > a; a++) Cc[a].className = a < b ? "hplogo_smg" :
                "hplogo_smh";
            D.style.display = "";
            v(E)
        },
        ne = function() {
            $d || ($d = !0, Ya(200, 1), Zd.style.display = "", je = !0,
                window.localStorage && window.localStorage.setItem(
                    "doodle-kayak-tooltip", "true"))
        },
        ve = function(a, b, c, d) {
            d = d || 0;
            var e = ke(a);
            return {
                x: a,
                y: e.top + d + Math.random() * (e.bottom - e.top - c[1] - 2 *
                    d),
                N: !1,
                I: c,
                type: b
            }
        };
    (function(a, b, c) {
        var d = function() {
                a();
                window.lol && window.lol()
            },
            e = function() {
                mb(d, b, c);
                lb(d, b);
                d()
            };
        google && google.x ? google.x({
            id: "DOODLE"
        }, e) : e()
    })(function() {
        Z(0);
        if (Vc() && (gd = Ec(), H = Ec(), gd && H && H.getContext)) {
            gd.getContext("2d");
            I = H.getContext("2d");
            Rc();
            Ed = Kc();
            var a = Nc("slalom_canoe12-hp-sprite.png");
            pd = new y(H, a, 588, 364, 118, 21);
            qd = new y(H, a, 588, 388, 22, -4, -4);
            nd = new y(H, a, 600, 326, 30, 28, 50, 0);
            nd.H = .2;
            md = Sa(nd, 4, 250);
            nd.frame = 3;
            K = new y(H, a, 55, 0, 50, 35);
            K.H = .2;
            od = Sa(K, 9, 500);
            S = new y(H, a, 650, 235, 69, 88, 7);
            Vd = Sa(S, 3, 32);
            ae = new y(H, a, 860, 235, 69, 88, 7);
            Ud = new u;
            w(Ud, function() {
                N = ae
            });
            x(Ud, 32);
            w(Ud, function() {
                N = S;
                ie = N.frame = 0
            });
            N = S;
            be = S.clone();
            be.p = -1;
            ce = ae.clone();
            ce.p = -1;
            Td = Sa(be, 3, 32);
            Sd = new u;
            w(Sd, function() {
                N = ce
            });
            x(Sd, 32);
            w(Sd, function() {
                N = S;
                ie = N.frame = 0
            });
            Rd = new y(H, a, 983, 235, 20, 74, 25, 6);
            Od = new u;
            x(Od, 1E3);
            w(Od, we);
            Xd = new y(H, a, 55, 38, 31, 103, 25, -6);
            Wd = Sa(Xd, 5, 400);
            x(Wd, 600);
            w(Wd, we);
            wd = new y(H, a, 1006, 235, 43, 42, 0, -48);
            xd = new y(H, a, 1092, 326, 12, 15, 37, -59);
            Hd = wd.clone();
            Hd.D = 10;
            Id = xd.clone();
            Id.D = -1;
            Nd = [new y(H, a, 533, 235, 28, 11), new y(H, a, 564, 235,
                27, 16), new y(H, a, 1006, 280, 34, 14), new y(
                H, a, 564, 326, 33, 32), new y(H, a, 1052, 235,
                47, 26), new y(H, a, 779, 326, 43, 35), new y(H,
                a, 948, 274, 30, 24)];
            var b = function(b, d, e) {
                b = new y(H, a, b, d, 13, 29, 0, e);
                b.H = .5;
                return b
            };
            Md = [b(533, 249, -10), null, b(932, 235, -7), b(825, 326,
                0), null, null, b(723, 326, 0)];
            V = [];
            for (b = 0; 4 > b; b++) V.push(new y(H, a, 841 + 62 * b,
                326, 62, 35));
            V[3].H = .2;
            Jd = new y(gd, Nc("slalom_canoe12-hp-bg.png"));
            Kd = new y(gd, a, 611, 0, 530, 207);
            Ld = new y(gd, a, 0, 235, 530, 207);
            jd = new y(H, a, 213, 38, 24, 194, 60, -13);
            hd = new y(H, a, 0, 0, 52, 207);
            Gd = new u;
            w(Gd, function() {
                N = S;
                N.frame = 0;
                M.clear()
            });
            w(Gd, function(a) {
                J = t(a, 7950, 0)
            }, 500);
            w(Gd, function(a) {
                a = Math.pow(a, .5);
                Q = t(a, -120, 64);
                M.F(Q + T[2], R, 1.5)
            }, 1E3);
            w(Gd, function() {
                Z(2)
            });
            fd = new u;
            w(fd, function() {
                F();
                N = S;
                N.frame = 0
            });
            w(fd, function(a) {
                m();
                for (var b = 1 - a, e = 0; e < zd.length; e++) {
                    var f = zd[e];
                    Ja(200) && M.F(f.x + Math.random() * Ta(f),
                        f.y + Math.random() * Ua(f), 5 * b);
                    f.i = b
                }
                Ja(200) && M.F(225 + 67 * Math.random(), 70 +
                    73 * Math.random(), 5 * b);
                Ed.style.opacity = b;
                Q = t(a, -120, 64);
                M.F(Q + T[2], R, 1.5)
            }, 2E3);
            w(fd, function() {
                Ed.style.display = "none";
                Z(2)
            });
            zd = [];
            b = function(b, d, e, f, g, h) {
                b = new y(gd, a, b, d, e, f);
                b.x = g;
                b.y = h;
                zd.push(b)
            };
            b(594, 235, 53, 54, 120, 72);
            b(739, 326, 37, 35, 180, 90);
            b(1102, 235, 35, 54, 295, 90);
            b(564, 364, 21, 52, 337, 72);
            b(948, 235, 32, 36, 365, 90);
            Wa = new y(H, a, 240, 38, 184, 134, 200, 40);
            Wa.i = 0;
            Zd = Gc();
            Zd.style.display = "none";
            Zd.style.cursor = "default";
            yd = new u;
            w(yd, function(a) {
                L = a;
                Ed.style.opacity = .2 + .8 * a
            }, 1E3);
            M = new de(I, 530, 207, .97, [71, 204, 238], [0, 161, 204]);
            (Ea || Da) && M.aa()
        }
    }, function() {
        Dc = Na = !0;
        A && (A.innerHTML = "");
        uc = !1
    }, function() {
        return document.activeElement != A
    });
})();
