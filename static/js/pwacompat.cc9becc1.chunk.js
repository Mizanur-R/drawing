(this.webpackJsonpexcalidraw = this.webpackJsonpexcalidraw || []).push([
    [44], {
        216: function(t, e, n) {
            "use strict";
            ! function() {
                if (!("onload" in XMLHttpRequest.prototype) || navigator.standalone) return;
                const t = !1,
                    e = ["standalone", "fullscreen", "minimal-ui"],
                    n = navigator.userAgent || "",
                    o = navigator.vendor && -1 !== navigator.vendor.indexOf("Apple") && (-1 !== n.indexOf("Mobile/") || "standalone" in navigator) || t,
                    a = Boolean(n.match(/(MSIE |Edge\/|Trident\/)/)),
                    r = "undefined" !== typeof Windows;
                let i, c;
                try {
                    c = sessionStorage
                } catch (y) {}

                function s(t) {
                    try {
                        return document.head.querySelector(t)
                    } catch (y) {
                        return null
                    }
                }

                function l(t, e) {
                    const n = "__pwacompat_" + t;
                    return void 0 !== e && (c[n] = e), c[n]
                }

                function p() {
                    i = s('link[rel="manifest"]');
                    const t = i ? i.href : "";
                    if (!t) throw 'can\'t find <link rel="manifest" href=".." />\'';
                    const e = function(t) {
                            for (let e = 0; e < t.length; ++e) {
                                const n = t[e];
                                try {
                                    return new URL("", n), t => new URL(t || "", n).toString()
                                } catch (y) {}
                            }
                            return t => t || ""
                        }([t, location]),
                        n = l("manifest");
                    if (n) {
                        try {
                            h(JSON.parse(n), e)
                        } catch (a) {
                            console.warn("PWACompat error", a)
                        }
                        return
                    }
                    const o = new XMLHttpRequest;
                    o.open("GET", t), o.withCredentials = "use-credentials" === i.getAttribute("crossorigin"), o.onload = () => {
                        try {
                            const t = JSON.parse(o.responseText);
                            l("manifest", o.responseText), h(t, e)
                        } catch (a) {
                            console.warn("PWACompat error", a)
                        }
                    }, o.send(null)
                }

                function u(t, e, n) {
                    if (s(t + n)) return;
                    const o = document.createElement(t);
                    for (const a in e) o.setAttribute(a, e[a]);
                    return document.head.appendChild(o), o
                }

                function f(t, e) {
                    e && (!0 === e && (e = "yes"), u("meta", {
                        name: t,
                        content: e
                    }, '[name="'.concat(t, '"]')))
                }

                function d(t) {
                    const e = t.sizes.split(/\s+/g).map((t => "any" === t ? 1 / 0 : parseInt(t, 10) || 0));
                    return {
                        src: t.src,
                        type: t.type,
                        sizes: t.sizes,
                        largestSize: Math.max.apply(null, e),
                        purpose: t.purpose ? t.purpose.split(/\s+/g) : ["any"]
                    }
                }

                function h(t, n) {
                    const c = (t.icons || []).map(d).sort(((t, e) => e.largestSize - t.largestSize)),
                        p = c.filter((t => t.purpose.indexOf("any") > -1)),
                        h = c.filter((t => t.purpose.indexOf("maskable") > -1)),
                        v = (h.length > 0 ? h : p).map((t => {
                            const e = {
                                    rel: "icon",
                                    href: n(t.src),
                                    sizes: t.sizes
                                },
                                a = '[sizes="'.concat(t.sizes, '"]');
                            if (u("link", e, '[rel="icon"]' + a), o && !(t.largestSize < 120)) return e.rel = "apple-touch-icon", u("link", e, '[rel="apple-touch-icon"]' + a)
                        })).filter(Boolean),
                        x = s('meta[name="viewport"]'),
                        S = x && x.content || "",
                        k = Boolean(S.match(/\bviewport-fit\s*=\s*cover\b/)),
                        O = t.display,
                        _ = -1 !== e.indexOf(O);
                    if (f("mobile-web-app-capable", _), function(t, e) {
                            if (!o && !r) return;
                            const n = g(t);
                            if (o) {
                                f("apple-mobile-web-app-status-bar-style", e ? "black-translucent" : n ? "black" : "default")
                            } else {
                                const e = function() {
                                    try {
                                        return Windows.UI.ViewManagement.ApplicationView.getForCurrentView().titleBar
                                    } catch (y) {}
                                }();
                                if (!e) return;
                                const o = n ? 255 : 0;
                                e.foregroundColor = {
                                    r: o,
                                    g: o,
                                    b: o,
                                    a: 255
                                }, e.backgroundColor = function(t) {
                                    const e = m(t);
                                    return {
                                        r: e[0],
                                        g: e[1],
                                        b: e[2],
                                        a: e[3]
                                    }
                                }(t)
                            }
                        }(t.theme_color || "black", k), a) {
                        f("application-name", t.short_name), f("msapplication-tooltip", t.description), f("msapplication-starturl", n(t.start_url || ".")), f("msapplication-navbutton-color", t.theme_color);
                        const e = p[0];
                        e && f("msapplication-TileImage", n(e.src)), f("msapplication-TileColor", t.background_color)
                    }
                    if (f("theme-color", t.theme_color), !o) {
                        const e = (C = t.orientation, {
                            por: "portrait",
                            lan: "landscape"
                        }[String(C || "").substr(0, 3)] || "");
                        return f("x5-orientation", e), f("screen-orientation", e), void("fullscreen" === O ? (f("x5-fullscreen", "true"), f("full-screen", "yes")) : _ && (f("x5-page-mode", "app"), f("browsermode", "application")))
                    }
                    var C;
                    const T = t.background_color || "#f8f9fa",
                        z = g(T),
                        A = function(t) {
                            let e;
                            return (t || []).filter((t => "itunes" === t.platform)).forEach((t => {
                                if (t.id) e = t.id;
                                else {
                                    const n = t.url.match(/id(\d+)/);
                                    n && (e = n[1])
                                }
                            })), e
                        }(t.related_applications);

                    function E(e, n, o, a) {
                        const r = window.devicePixelRatio,
                            c = b({
                                width: e * r,
                                height: n * r
                            });
                        if (c.scale(r, r), c.fillStyle = T, c.fillRect(0, 0, e, n), c.translate(e / 2, (n - 20) / 2), a) {
                            let t = a.width / r,
                                e = a.height / r;
                            e > 128 && (t /= e / 128, e = 128), t >= 48 && e >= 48 && (c.drawImage(a, t / -2, e / -2, t, e), c.translate(0, e / 2 + 20))
                        }
                        c.fillStyle = z ? "white" : "black", c.font = "".concat(24, "px ").concat("HelveticaNeue-CondensedBold");
                        const s = getComputedStyle(i);
                        c.font = s.getPropertyValue("--pwacompat-splash-font");
                        const l = t.name || t.short_name || document.title,
                            p = c.measureText(l),
                            u = p.actualBoundingBoxAscent || 24;
                        if (c.translate(0, u), p.width < .8 * e) c.fillText(l, p.width / -2, 0);
                        else {
                            const t = l.split(/\s+/g);
                            for (let n = 1; n <= t.length; ++n) {
                                const o = t.slice(0, n).join(" "),
                                    a = c.measureText(o).width;
                                (n === t.length || a > .6 * e) && (c.fillText(o, a / -2, 0), c.translate(0, 1.2 * u), t.splice(0, n), n = 0)
                            }
                        }
                        return () => {
                            const t = c.canvas.toDataURL();
                            return I(o, t), t
                        }
                    }

                    function I(t, e) {
                        const n = document.createElement("link");
                        n.setAttribute("rel", "apple-touch-startup-image"), n.setAttribute("media", "(orientation: ".concat(t, ")")), n.setAttribute("href", e), document.head.appendChild(n)
                    }
                    A && f("apple-itunes-app", "app-id=".concat(A)), f("apple-mobile-web-app-capable", _), f("apple-mobile-web-app-title", t.short_name || t.name);
                    const R = l("iOS");
                    if (R) try {
                        const t = JSON.parse(R);
                        return I("portrait", t.p), I("landscape", t.l), void v.forEach((e => {
                            const n = t.i[e.href];
                            n && (e.href = n)
                        }))
                    } catch (y) {}
                    const M = {
                        i: {}
                    };

                    function B(t, e) {
                        const n = window.screen,
                            o = E(n.width, n.height, "portrait", t),
                            a = E(n.height, n.width, "landscape", t);
                        setTimeout((() => {
                            M.p = o(), setTimeout((() => {
                                M.l = a(), e()
                            }), 10)
                        }), 10)
                    }

                    function L() {
                        l("iOS", JSON.stringify(M))
                    }! function e() {
                        const n = v.shift();
                        if (!n) return void B(null, L);
                        const o = new Image;
                        o.crossOrigin = "anonymous", o.onerror = () => {
                            e()
                        }, o.onload = () => {
                            o.onload = null, B(o, (() => {
                                const e = t.background_color && w(o, T);
                                e ? (n.href = e, M.i[o.src] = e, function(t) {
                                    let e = v.length + 1;
                                    const n = () => {
                                        --e || t()
                                    };
                                    n(), v.forEach((t => {
                                        const e = new Image;
                                        e.crossOrigin = "anonymous", e.onerror = n, e.onload = () => {
                                            e.onload = null, t.href = w(e, T, !0), M.i[e.src] = t.href, n()
                                        }, e.src = t.href
                                    }))
                                }(L)) : L()
                            }))
                        }, o.src = n.href
                    }()
                }

                function m(t) {
                    const e = b();
                    return e.fillStyle = t, e.fillRect(0, 0, 1, 1), e.getImageData(0, 0, 1, 1).data || []
                }

                function g(t) {
                    const e = m(t).map((t => {
                            const e = t / 255;
                            return e < .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
                        })),
                        n = .2126 * e[0] + .7152 * e[1] + .0722 * e[2];
                    return Math.abs(1.05 / (n + .05)) > 3
                }

                function w(t, e, n = !1) {
                    const o = b(t);
                    if (o.drawImage(t, 0, 0), !n) {
                        if (255 === o.getImageData(0, 0, 1, 1).data[3]) return
                    }
                    return o.globalCompositeOperation = "destination-over", o.fillStyle = e, o.fillRect(0, 0, t.width, t.height), o.canvas.toDataURL()
                }

                function b({
                    width: t,
                    height: e
                } = {
                    width: 1,
                    height: 1
                }) {
                    const n = document.createElement("canvas");
                    return n.width = t, n.height = e, n.getContext("2d")
                }
                c = c || {}, "complete" === document.readyState ? p() : window.addEventListener("load", p)
            }()
        }
    }
]);
//# sourceMappingURL=pwacompat.cc9becc1.chunk.js.map