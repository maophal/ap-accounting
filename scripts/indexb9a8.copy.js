// ADD PAGE FUNCTION LINE: 2615

// EFFECTED LINE
// 205, 615, 943, 1181, 2043, 2217,2624
// 2624 is count menu 
// 205 highlight point 

// PAGE (1): INIT SCREEN
// PAGE (2): ABOUT SOLUTION
// PAGE (3): SERVICES
// PAGE (4): ORGANIZATION STRUCTURE
// PAGE (5): SOLUTIONS OVERVIEW
// 
// index of function  
// 1   return all Element in html index page  
//2
//3
//4
//5
//6
//7
//8
//9
//10
//11
// 12 
// 13 
// 14
// 15
// 16 
// 17
// 18 
// 19 
// 20
// 21 
// 22 
// 23 
// 24 
// 25 
// 26 
// 27 
// 28 
// 29 
// 30 
// 31
// 32 
// 33 
// 34 
// 35 
// 36 
// 37 
// 38 
// 39 
// 40 
// 41 
// 42 
function(e, t, o) {

    "use strict";



    function n(e) {

        return e && e.__esModule ? e : {

            default: e

        }

    }

    Object.defineProperty(t, "__esModule", {

        value: !0

    });

    var s = function(e) {

            if (e && e.__esModule) return e;

            var t = {};

            if (null != e)

                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);

            return t.default = e, t

        }(o(7)),

        i = (n(o(3)), n(o(1))),

        a = n(o(4)),

        l = n(o(2)),

        d = {

            up: function() {

                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];

                s.servicesNode.classList.remove("showContent"), d.setIndicatorState(), e ? setTimeout(function() {

                    s.org.classList.remove("hideContent"), s.aboutSolutionNode.classList.remove("hide"), s.logoAndLinesNode.classList.remove("onServices"), s.scrollDownNode.classList.remove("hide"), a.default.onAboutSolution(), setTimeout(function() {

                        s.aboutSolutionNode.classList.add("showContent")

                    }, 510)

                }, 510) : (s.aboutSolutionNode.classList.remove("hideContent"), s.aboutSolutionNode.classList.remove("hide"), s.logoAndLinesNode.classList.remove("onServices"), s.scrollDownNode.classList.remove("hide"), a.default.onAboutSolution(), s.aboutSolutionNode.classList.add("showContent"))

            },

            down: function() {

                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];

                s.aboutSolutionNode.classList.remove("hideContent"), s.aboutSolutionNode.classList.remove("hide"), s.logoAndLinesNode.classList.remove("onServices"), s.scrollDownNode.classList.remove("hide"), d.setIndicatorState(), a.default.onAboutSolution(), e ? setTimeout(function() {

                    i.default.toggleVisible("show"), s.aboutSolutionNode.classList.add("showContent")

                }, 450) : (i.default.toggleVisible("show"), s.aboutSolutionNode.classList.add("showContent"))

            },

            clear: function() {

                i.default.toggleVisible("hide"), s.aboutSolutionNode.classList.remove("showContent")

            },

            setIndicatorState: function() {

                l.default.highlight(1)

            }

        };

    t.default = d

}

function(e, t, o) {

    "use strict";



    function n(e) {

        return e && e.__esModule ? e : {

            default: e

        }

    }

    Object.defineProperty(t, "__esModule", {

        value: !0

    });

    var s = function(e) {

            if (e && e.__esModule) return e;

            var t = {};

            if (null != e)

                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);

            return t.default = e, t

        }(o(7)),

        i = (n(o(3)), n(o(1)), n(o(4)), n(o(2))),

        a = n(o(13)),

        l = document.querySelector(".work"),

        d = {

            up: function() {

                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];

                l.classList.remove("show"), setTimeout(function() {

                    s.servicesNode.classList.remove("showContent"), d.setIndicatorState(), s.logoAndLinesNode.classList.add("onSolutionsOverview"), s.aboutSolutionNode.classList.remove("hide"), s.solutionsOverviewNode.classList.remove("hide"), s.logoAndLinesNode.classList.remove("onWorks"), s.creatorNode.classList.remove("onWorks"), s.solutionsOverviewNode.classList.add("showDesctiption"), s.solutionsOverviewNode.classList.add("showContent"), s.logoAndLinesNode.classList.add("onSolutionsOverview-logo"), s.logoAndLinesNode.classList.add("hide"), s.creatorNode.classList.add("onSolutionsOverview")

                }, 210), a.default.setMax()

            },

            down: function() {

                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];

                s.servicesNode.classList.remove("showContent"), d.setIndicatorState(), e ? setTimeout(function() {

                    s.logoAndLinesNode.classList.add("onSolutionsOverview"), s.aboutSolutionNode.classList.remove("hide"), s.solutionsOverviewNode.classList.remove("hide"), s.logoAndLinesNode.classList.remove("onWorks"), s.creatorNode.classList.remove("onWorks")

                }, 510) : (s.logoAndLinesNode.classList.add("onSolutionsOverview"), s.aboutSolutionNode.classList.remove("hide"), s.solutionsOverviewNode.classList.remove("hide"), s.logoAndLinesNode.classList.remove("onWorks"), s.creatorNode.classList.remove("onWorks")), e ? setTimeout(function() {

                    s.solutionsOverviewNode.classList.add("showDesctiption")

                }, 1010) : s.solutionsOverviewNode.classList.add("showDesctiption"), e ? setTimeout(function() {

                    s.solutionsOverviewNode.classList.add("showContent"), s.logoAndLinesNode.classList.add("onSolutionsOverview-logo"), s.logoAndLinesNode.classList.add("hide"), s.creatorNode.classList.add("onSolutionsOverview")

                }, 1020) : (s.solutionsOverviewNode.classList.add("showContent"), s.logoAndLinesNode.classList.add("onSolutionsOverview-logo"), s.logoAndLinesNode.classList.add("hide"), s.creatorNode.classList.add("onSolutionsOverview")), a.default.setMin()

            },

            clear: function() {

                s.logoAndLinesNode.classList.remove("onSolutionsOverview"), s.solutionsOverviewNode.classList.remove("showDesctiption"), s.solutionsOverviewNode.classList.remove("showContent"), s.logoAndLinesNode.classList.remove("onSolutionsOverview-logo"), s.logoAndLinesNode.classList.remove("hide"), s.creatorNode.classList.remove("onSolutionsOverview"), a.default.setMin()

            },

            setIndicatorState: function() {

                i.default.highlight(3)

            }

        };

    t.default = d

}

/////////////////////////////==============================Scope and Service======================================\\\\\\\\\\\\\\\\\\\\\\\\
function(e, t, o) {

    "use strict";



    function n(e) {

        return e && e.__esModule ? e : {

            default: e

        }

    }

    Object.defineProperty(t, "__esModule", {

        value: !0

    });

    var s = function(e) {

            if (e && e.__esModule) return e;

            var t = {};

            if (null != e)

                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);

            return t.default = e, t

        }(o(7)),

        i = (n(o(3)), n(o(1)), n(o(4)), n(o(2))),

        a = n(o(13)),

        l = document.querySelector(".work"),

        d = {

            up: function() { //UP funcion is occure when we scroll up of current node

                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];

                l.classList.remove("show");

                setTimeout(function () {
                    s.servicesNode.classList.remove("showContent");
                    d.setIndicatorState();
                    s.logoAndLinesNode.classList.add("onSolutionsOverview");
                    s.aboutSolutionNode.classList.remove("hide");
                    s.solutionsOverviewNode.classList.remove("hide");
                    s.logoAndLinesNode.classList.remove("onWorks");
                    s.creatorNode.classList.remove("onWorks");
                    s.solutionsOverviewNode.classList.add("showDesctiption");
                    s.solutionsOverviewNode.classList.add("showContent");
                    s.logoAndLinesNode.classList.add("onSolutionsOverview-logo");
                    s.logoAndLinesNode.classList.add("hide");
                    s.creatorNode.classList.add("onSolutionsOverview");
                }, 210);

                a.default.setMax();

            },

            down: function() { //Down functions is occur when we scroll down of current node
               // s.servicesNode is return  html object of service class 
               //d.setIndicatorState is return function    i.default.highlight(e) e=3 in the service class  
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];

                s.servicesNode.classList.remove("showContent"), d.setIndicatorState(), e ? setTimeout(function() {

                    s.logoAndLinesNode.classList.add("onSolutionsOverview"), s.aboutSolutionNode.classList.remove("hide"), s.solutionsOverviewNode.classList.remove("hide"), s.logoAndLinesNode.classList.remove("onWorks"), s.creatorNode.classList.remove("onWorks")

                }, 510) : (s.logoAndLinesNode.classList.add("onSolutionsOverview"), s.aboutSolutionNode.classList.remove("hide"), s.solutionsOverviewNode.classList.remove("hide"), s.logoAndLinesNode.classList.remove("onWorks"), s.creatorNode.classList.remove("onWorks")), e ? setTimeout(function() {

                    s.solutionsOverviewNode.classList.add("showDesctiption")

                }, 1010) : s.solutionsOverviewNode.classList.add("showDesctiption"), e ? setTimeout(function() {

                    s.solutionsOverviewNode.classList.add("showContent"), s.logoAndLinesNode.classList.add("onSolutionsOverview-logo"), s.logoAndLinesNode.classList.add("hide"), s.creatorNode.classList.add("onSolutionsOverview")

                }, 1020) : (s.solutionsOverviewNode.classList.add("showContent"), s.logoAndLinesNode.classList.add("onSolutionsOverview-logo"), s.logoAndLinesNode.classList.add("hide"), s.creatorNode.classList.add("onSolutionsOverview")), a.default.setMin()

            },

            clear: function() {

                s.logoAndLinesNode.classList.remove("onSolutionsOverview"), s.solutionsOverviewNode.classList.remove("showDesctiption"), s.solutionsOverviewNode.classList.remove("showContent"), s.logoAndLinesNode.classList.remove("onSolutionsOverview-logo"), s.logoAndLinesNode.classList.remove("hide"), s.creatorNode.classList.remove("onSolutionsOverview"), a.default.setMin()

            },

            setIndicatorState: function() {

                i.default.highlight(3)

            }

        };

    t.default = d

}

/////////////////////////=======================all code in file indexb9a8.js===================================\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

! function(e) {

    function t(n) {

        if (o[n]) return o[n].exports;

        var s = o[n] = {

            i: n,

            l: !1,

            exports: {}

        };

        return e[n].call(s.exports, s, s.exports, t), s.l = !0, s.exports

    }

    var o = {};

    t.m = e, t.c = o, t.i = function(e) {

        return e

    }, t.d = function(e, o, n) {

        t.o(e, o) || Object.defineProperty(e, o, {

            configurable: !1,

            enumerable: !0,

            get: n

        })

    }, t.n = function(e) {

        var o = e && e.__esModule ? function() {

            return e.default

        } : function() {

            return e

        };

        return t.d(o, "a", o), o

    }, t.o = function(e, t) {

        return Object.prototype.hasOwnProperty.call(e, t)

    }, t.p = "", t(t.s = 36)

}([function(e, t, o) {

    "use strict";

    Object.defineProperty(t, "__esModule", {

        value: !0

    }), t.default = function(e) {

        return document.querySelector(e)

    }

}, function(e, t, o) {

    "use strict";



    function n(e) {

        return e && e.__esModule ? e : {

            default: e

        }

    }

    Object.defineProperty(t, "__esModule", {

        value: !0

    });

    n(o(11));

    var s = n(o(0)),

        i = (n(o(14)), n(o(6))),

        a = (0, s.default)(".contactUsButton"),

        l = {

            toggleVisible: function(e) {

                "show" == e && a.classList.add("show"), "hide" == e && a.classList.remove("show")

            },

            setListeners: function() {

                a.addEventListener("click", l.goToContacts)

            },

            goToContacts: function() {

                document.body.classList.add("showCaseEffect"), setTimeout(function() {

                    i.default.goToSection(5)

                }, 320), setTimeout(function() {

                    document.body.classList.remove("showCaseEffect")

                }, 1200)

            },

            disableButton: function() {

                a.classList.add("disable")

            },

            enableButton: function() {

                a.classList.remove("disable")

            },

            init: function() {

                l.setListeners()

            }

        };

    t.default = l

}, function(e, t, o) {

    "use strict";



    function n(e) {

        return e && e.__esModule ? e : {

            default: e

        }

    }

    Object.defineProperty(t, "__esModule", {

        value: !0

    });

    var s, i = n(o(3)),

        a = n(o(6)),

        l = n(o(16)),

        d = n(o(17)),

        r = n(o(18)),

        u = n(o(19)),

        c = n(o(20)),

        f = n(o(23)),

        v = n(o(8)),

        h = n(o(10)),

        m = n(o(5)),

        L = document.querySelector(".indicator"),

        w = document.querySelectorAll(".indicator .point"),

        g = document.querySelectorAll(".menu .navigation ul li a"),

        p = {

            highlight: function(e) {

                for (var t = 0; t < w.length; t++) w[t].classList.remove("current");

                w[e].classList.add("current")
            console.log(e);
            },

            goToSection: function(e) {

                e.preventDefault();

                var t = e.target.dataset.goto,

                    o = v.default.state.currentSection,

                    n = parseInt(t, 10) + 1;

                if (o - t != 1 || o == document.querySelectorAll(".section").length - 1) {

                    if (t != o && o - t != 2 || 5 == o && 4 == n) {

                        if (document.body.classList.add("showCaseEffect"), 0 == t) {

                            for (var L = 0; L < g.length; L++) g[L].classList.remove("currentSection");

                            return g[0].classList.add("currentSection"), setTimeout(function() {

                                var e = new i.default;

                                d.default.clear(), r.default.clear(), u.default.clear(), c.default.clear(), l.default.set(), h.default.resetState(), v.default.state.currentSection = 1, e.animateScroll(document.querySelector(".initScreen"))

                            }, 300), setTimeout(function() {

                                document.body.classList.remove("showCaseEffect")

                            }, 1500), void v.default.pageInAction()

                        }

                        return setTimeout(function() {

                            a.default.goToSection(--n)

                        }, 300), setTimeout(function() {

                            document.body.classList.remove("showCaseEffect")

                        }, 1500), void v.default.pageInAction()

                    }

                    if (!s) {

                        if (p.inActionState(), o < n ? f.default.section(++t, "down") : f.default.section(++t, "up"), n == w.length - 1 && o > n) return h.default.resetState(), h.default.showWork(), m.default.state.onContacts = !1, v.default.state.currentSection = t, void v.default.pageInAction();

                        n == w.length && (h.default.hideWork(), m.default.state.onContacts = !0, a.default.goToSection(w.length - 1, !0)), v.default.state.currentSection = t, v.default.pageInAction()

                    }

                }

            },

            inActionState: function() {

                s = !0, setTimeout(function() {

                    s = !1

                }, 1500)

            },

            setListeners: function() {

                for (var e = 0; e < w.length; e++) w[e].addEventListener("click", function(e) {

                    p.goToSection(e)

                })

            },

            show: function() {

                L.classList.add("show")

            },

            hide: function() {

                L.classList.remove("show")

            },

            disable: function() {

                L.classList.add("disable")

            },

            enable: function() {

                L.classList.remove("disable")

            },

            init: function() {

                p.setListeners(), p.show()

            }

        };

    t.default = p

}, function(e, t, o) {

    "use strict";

    (function(o) {

        var n, s;

        "function" == typeof Symbol && Symbol.iterator;

        ! function(o, i) {

            void 0 !== (s = function() {

                return i(o)

            }.apply(t, n = [])) && (e.exports = s)

        }(void 0 !== o ? o : "undefined" != typeof window ? window : void 0, function(e) {

            var t = "querySelector" in document && "addEventListener" in e && "requestAnimationFrame" in e && "closest" in e.Element.prototype,

                o = {

                    ignore: "[data-scroll-ignore]",

                    header: null,

                    speed: 500,

                    offset: 0,

                    easing: "easeInOutCubic",

                    customEasing: null,

                    before: function() {},

                    after: function() {}

                },

                n = function() {

                    for (var e = {}, t = 0, o = arguments.length; t < o; t++) {

                        var n = arguments[t];

                        ! function(t) {

                            for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])

                        }(n)

                    }

                    return e

                },

                s = function(t) {

                    return parseInt(e.getComputedStyle(t).height, 10)

                },

                i = function(e) {

                    "#" === e.charAt(0) && (e = e.substr(1));

                    for (var t, o = String(e), n = o.length, s = -1, i = "", a = o.charCodeAt(0); ++s < n;) {

                        if (0 === (t = o.charCodeAt(s))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");

                        i += t >= 1 && t <= 31 || 127 == t || 0 === s && t >= 48 && t <= 57 || 1 === s && t >= 48 && t <= 57 && 45 === a ? "\\" + t.toString(16) + " " : t >= 128 || 45 === t || 95 === t || t >= 48 && t <= 57 || t >= 65 && t <= 90 || t >= 97 && t <= 122 ? o.charAt(s) : "\\" + o.charAt(s)

                    }

                    return "#" + i

                },

                a = function(e) {

                    return e ? s(e) + e.offsetTop : 0

                };

            return function(s, l) {

                var d, r, u, c, f, v, h, m = {};

                m.cancelScroll = function() {

                    cancelAnimationFrame(h)

                }, m.animateScroll = function(t, s, i) {

                    var l = n(d || o, i || {}),

                        r = "[object Number]" === Object.prototype.toString.call(t),

                        u = r || !t.tagName ? null : t;

                    if (r || u) {

                        var v = e.pageYOffset;

                        l.header && !c && (c = document.querySelector(l.header)), f || (f = a(c));

                        var h, L, w, g = r ? t : function(e, t, o) {

                                var n = 0;

                                if (e.offsetParent)

                                    do {

                                        n += e.offsetTop, e = e.offsetParent

                                    } while (e);

                                return n = Math.max(n - t - o, 0)

                            }(u, f, parseInt("function" == typeof l.offset ? l.offset() : l.offset, 10)),

                            p = g - v,

                            S = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight),

                            b = 0,

                            y = function(o, n) {

                                var i = e.pageYOffset;

                                if (o == n || i == n || (v < n && e.innerHeight + i) >= S) return m.cancelScroll(),

                                    function(t, o, n) {

                                        n || (t.focus(), document.activeElement.id !== t.id && (t.setAttribute("tabindex", "-1"), t.focus(), t.style.outline = "none"), e.scrollTo(0, o))

                                    }(t, n, r), l.after(t, s), h = null, !0

                            };

                        0 === e.pageYOffset && e.scrollTo(0, 0), l.before(t, s), m.cancelScroll(), e.requestAnimationFrame(function t(o) {

                            h || (h = o), L = (b += o - h) / parseInt(l.speed, 10), w = v + p * function(e, t) {

                                var o;

                                return "easeInQuad" === e.easing && (o = t * t), "easeOutQuad" === e.easing && (o = t * (2 - t)), "easeInOutQuad" === e.easing && (o = t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1), "easeInCubic" === e.easing && (o = t * t * t), "easeOutCubic" === e.easing && (o = --t * t * t + 1), "easeInOutCubic" === e.easing && (o = t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1), "easeInQuart" === e.easing && (o = t * t * t * t), "easeOutQuart" === e.easing && (o = 1 - --t * t * t * t), "easeInOutQuart" === e.easing && (o = t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t), "easeInQuint" === e.easing && (o = t * t * t * t * t), "easeOutQuint" === e.easing && (o = 1 + --t * t * t * t * t), "easeInOutQuint" === e.easing && (o = t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t), e.customEasing && (o = e.customEasing(t)), o || t

                            }(l, L = L > 1 ? 1 : L), e.scrollTo(0, Math.floor(w)), y(w, g) || (e.requestAnimationFrame(t), h = o)

                        })

                    }

                };

                var L = function(e) {

                        r && (r.id = r.getAttribute("data-scroll-id"), m.animateScroll(r, u), r = null, u = null)

                    },

                    w = function(t) {

                        if (!("matchMedia" in e && e.matchMedia("(prefers-reduced-motion)").matches) && 0 === t.button && !t.metaKey && !t.ctrlKey && (u = t.target.closest(s)) && "a" === u.tagName.toLowerCase() && !t.target.closest(d.ignore) && u.hostname === e.location.hostname && u.pathname === e.location.pathname && /#/.test(u.href)) {

                            var o;

                            try {

                                o = i(decodeURIComponent(u.hash))

                            } catch (e) {

                                o = i(u.hash)

                            }

                            if ("#" === o) {

                                t.preventDefault();

                                var n = (r = document.body).id ? r.id : "smooth-scroll-top";

                                return r.setAttribute("data-scroll-id", n), r.id = "", void(e.location.hash.substring(1) === n ? L() : e.location.hash = n)

                            }(r = document.querySelector(o)) && (r.setAttribute("data-scroll-id", r.id), r.id = "", u.hash === e.location.hash && (t.preventDefault(), L()))

                        }

                    },

                    g = function(e) {

                        v || (v = setTimeout(function() {

                            v = null, f = a(c)

                        }, 66))

                    };

                return m.destroy = function() {

                    d && (document.removeEventListener("click", w, !1), e.removeEventListener("resize", g, !1), m.cancelScroll(), d = null, r = null, u = null, c = null, f = null, v = null, h = null)

                }, m.init = function(s) {

                    t && (m.destroy(), d = n(o, s || {}), c = d.header ? document.querySelector(d.header) : null, f = a(c), document.addEventListener("click", w, !1), e.addEventListener("hashchange", L, !1), c && e.addEventListener("resize", g, !1))

                }, m.init(l), m

            }

        })

    }).call(t, o(33))

}, function(e, t, o) {

    "use strict";



    function n(e) {

        return e && e.__esModule ? e : {

            default: e

        }

    }

    Object.defineProperty(t, "__esModule", {

        value: !0

    });

    var s, i, a, l = n(o(11)),

        d = n(o(0)),

        r = n(o(12)),

        u = n(o(15)),

        c = n(o(24)),

        f = n(o(14)),

        v = n(o(8)),

        h = (0, d.default)(".logoAndLines"),

        m = ((0, d.default)(".line-1"), (0, d.default)(".line-2"), (0, d.default)(".line-3"), window.innerHeight);

    window.addEventListener("resize", function(e) {

        m = window.innerHeight

    });

    var L = {

        showAfterLoad: function() {

            (0, l.default)(function() {

                var e = (0, d.default)(".logoAndLines");

                (0, f.default)(function() {

                    e.classList.add("load"), setTimeout(function() {

                        e.classList.add("removeTransitionDelay")

                    }, 2e3)

                })

            })

        },

        onAboutSolution: function() {

            var e = (0, c.default)(i, .8 * m);

            (0, r.default)(h, "line-2-scale", e)

        },

        onServices: function() {

            var e = (0, c.default)(s, m),

                t = (0, c.default)(i, m),

                o = (0, c.default)(a, m);

            (0, r.default)(h, "line-1-scale", e), (0, r.default)(h, "line-2-scale", t), (0, r.default)(h, "line-3-scale", o)

        },

        setCssVariables: function() {

            var e = parseInt(.7 * document.body.clientWidth, 10),

                t = parseInt(.5 * document.body.clientWidth, 10),

                o = parseInt(e / 3, 10);

            (0, r.default)(document.body, "doc-center", t + "px"), (0, r.default)(document.body, "grid-width", e + "px"), (0, r.default)(document.body, "grid-column-width", o + "px")

        },

        setLinesHeight: function() {

            s = parseInt((0, u.default)(h, "line-1-height"), 10), i = parseInt((0, u.default)(h, "line-2-height"), 10), a = parseInt((0, u.default)(h, "line-3-height"), 10)

        },

        init: function() {

            L.setLinesHeight(), window.addEventListener("resize", function(e) {

                document.body.classList.add("removeTransitions"), L.setLinesHeight(), L.setCssVariables(), 3 == v.default.state.currentSection && L.onServices(), setTimeout(function() {

                    document.body.classList.remove("removeTransitions")

                }, 200)

            })

        },

        setInitValues: function() {}

    };

    document.addEventListener("DOMContentLoaded", function() {

        L.setCssVariables()

    }), t.default = L

}, function(e, t, o) {

    "use strict";



    function n(e) {

        return e && e.__esModule ? e : {

            default: e

        }

    }

    Object.defineProperty(t, "__esModule", {

        value: !0

    });

    var s = n(o(0)),

        i = n(o(12)),

        a = (0, s.default)(".contacts"),

        l = (0, s.default)("#submit"),

        d = document.querySelectorAll(".checkValidation"),

        r = {

            state: {

                onContacts: !1

            },

            show: function() {

                a.classList.add("setDeep"), a.classList.add("show"), a.classList.add("animate"), setTimeout(function() {

                    a.classList.add("hideUnnecessaryElements")

                }, 510), r.state.onContacts = !0

            },

            hide: function() {

                a.classList.remove("show"), a.classList.remove("animate"), a.classList.remove("hideUnnecessaryElements"), r.state.onContacts = !1

            },

            scale: function() {

                a.classList.add("scale")

            },

            removeScale: function() {

                a.classList.remove("scale")

            },

            sendData: function(e) {

                if (r.checkValidation()) {

                    if (console.log("Send data: \n"), setTimeout(function() {

                            // console.log(i)

                        }, 500), 0 == navigator.onLine) return a.classList.add("offline"), void setTimeout(function() {

                        a.classList.remove("offline")

                    }, 5e3);

                    var t = document.getElementById("name").value,

                        o = document.getElementById("email").value,

                        n = document.getElementById("message").value;

                    if ("" != n && "" != o && "" != n) {

                        var s = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"),

                            i = "Name: " + t + "\n\nContacts: " + o + "\n\nMessage: " + n,

                            l = "message=" + i;

                        s.open("POST", "../mailer.php", !0), s.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), s.send(l), e.preventDefault(), document.getElementById("name").value = "", document.getElementById("email").value = "", document.getElementById("message").value = "", a.classList.add("success"), setTimeout(function() {

                            a.classList.remove("success")

                        }, 5e3)

                    }

                }

            },

            checkValidation: function() {

                for (var e = 0; e < d.length; e++) return !!d[d.length - 1].checkValidity()

            },

            setListeners: function() {

                l.addEventListener("click", function(e) {

                    r.sendData(e)

                })

            },

            resetState: function() {

                (0, i.default)(a, "moveShift", "0px")

            },

            init: function() {

                r.setListeners()

            }

        };

    t.default = r

}, function(e, t, o) {

    "use strict";



    function n(e) {

        return e && e.__esModule ? e : {

            default: e

        }

    }

    Object.defineProperty(t, "__esModule", {

        value: !0

    });

    var s = n(o(8)),

        i = function(e) {

            if (e && e.__esModule) return e;

            var t = {};

            if (null != e)

                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);

            return t.default = e, t

        }(o(7)),

        a = n(o(3)),

        l = n(o(13)),

        d = n(o(5)),

        r = n(o(10)),

        u = n(o(12)),

        c = n(o(24)),

        f = n(o(0)),

        v = n(o(9)),

        h = (n(o(16)), n(o(17))),

        m = n(o(18)),

        L = n(o(19)),

        w = n(o(20)),

        g = n(o(34)),

        p = (0, f.default)(".menu"),

        S = ((0, f.default)(".menu .blur"), (0, f.default)(".menuButton")),

        b = (0, f.default)(".closeMenuButton"),

        y = document.querySelectorAll(".menu .navigation ul li a"),

        A = {

            state: {

                opened: !1,

                lastSlide: 0,

                selectedItem: ""

            },

            toggle: function() {

                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];

                A.state.opened ? (p.classList.remove("show"), setTimeout(function() {

                    p.classList.remove("display"), S.classList.remove("hideButton"), S.classList.remove("openedState")

                }, 700), A.state.opened = !1) : (S.classList.add("openedState"), setTimeout(function() {

                    S.classList.add("hideButton"), p.classList.add("display"), p.classList.add("show")

                }, 200), A.state.opened = !0)

            },

            init: function() {

                A.setListeners(), A.detectMenuScale(), v.default.setListeners(), p.classList.add("enable")

            },

            setListeners: function() {

                window.addEventListener("keydown", function(e) {

                    27 == e.keyCode && A.state.opened && A.toggle()

                }), b.addEventListener("click", A.toggle), window.addEventListener("resize", A.detectMenuScale);

                for (var e = 0; e < y.length; e++) y[e].addEventListener("mousedown", function(e) {

                    A.state.selectedItem = e.target;

                    var t = e.target.dataset.goTo;
                    console.log(t);

                    A.state.selectedItem.parentNode.classList.add("select"), A.goToSection(t, !1, !0)

                })

            },

            goToSection: function(e) {

                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],

                    o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];

                if (p.classList.add("hide-other"), S.classList.add("hide-other"), r.default.resetState(), setTimeout(function() {

                        p.classList.add("hide"), S.classList.remove("hideButton"), S.classList.remove("openedState"), setTimeout(function() {

                            o && A.toggle(!0)

                        }, 510)

                    }, 510), setTimeout(function() {

                        for (var t = 0; t < y.length; t++) y[t].classList.remove("currentSection");

                        y[e - 1].classList.add("currentSection"), setTimeout(function() {

                            p.classList.remove("hide"), o && A.state.selectedItem.parentNode.classList.remove("select"), setTimeout(function() {

                                p.classList.remove("hide-other"), S.classList.remove("hide-other")

                            }, 520)

                        }, 510)

                    }, 1510), 1 == e) {

                    s.default.state.currentSection = 2, t ? h.default.down(!0) : h.default.down(), m.default.clear(), L.default.clear(), w.default.clear(), i.logoAndLinesNode.classList.add("onAboutSolution"), i.scrollDownNode.classList.add("show");

                    (t = new a.default).animateScroll(i.aboutSolutionNode)

                }

                if (2 == e) {

                    s.default.state.currentSection = 3;

                    t = new a.default;

                    i.logoAndLinesNode.classList.add("onAboutSolution"), i.scrollDownNode.classList.add("show"), h.default.down(), t ? m.default.down(!0) : m.default.down(), L.default.clear(), w.default.clear(), t.animateScroll(i.servicesNode)

                }

                if (3 == e) {

                    s.default.state.currentSection = 4;

                    t = new a.default;

                    i.logoAndLinesNode.classList.add("onAboutSolution"), i.scrollDownNode.classList.add("show"), h.default.down(), m.default.down(), t ? L.default.down(!0) : L.default.down(), w.default.clear(), l.default.state.currentFace = 0, l.default.state.currentAngle = 0, l.default.setAngle(), l.default.setMin(), t.animateScroll(i.solutionsOverviewNode)

                }

                if (4 == e) {

                    d.default.state.onContacts && r.default.resetState(), s.default.state.currentSection = 5;

                    t = new a.default;

                    i.logoAndLinesNode.classList.add("onAboutSolution"), i.scrollDownNode.classList.add("show"), h.default.down(), m.default.down(), L.default.down(), w.default.set(), l.default.state.currentFace = 3, l.default.state.currentAngle = 270, l.default.setAngle(), l.default.setMax(), t.animateScroll(i.workNode)

                }

                if (5 == e) {

                    s.default.state.currentSection = 5;

                    t = new a.default;

                    i.logoAndLinesNode.classList.add("onAboutSolution"), i.scrollDownNode.classList.add("show"), h.default.down(), m.default.down(), L.default.down(), w.default.set(), l.default.state.currentFace = 3, l.default.state.currentAngle = 270, l.default.setAngle(), l.default.setMax(), t.animateScroll(i.workNode), g.default.set()

                }

                 if (6 == e) {

                    s.default.state.currentSection = 6;

                    t = new a.default;

                    i.logoAndLinesNode.classList.add("onAboutSolution"), i.scrollDownNode.classList.add("show"), h.default.down(), t ? m.default.down(!0) : m.default.down(), L.default.clear(), w.default.clear(), t.animateScroll(i.servicesNode)

                }

            },

            detectMenuScale: function() {

                var e = (0, c.default)(77, document.documentElement.clientWidth),

                    t = (0, c.default)(34, document.documentElement.clientHeight);

                (0, u.default)(document.body, "menuScaleX", 1 / e), (0, u.default)(document.body, "menuScaleY", 1 / t)

            }

        };

    t.default = A

}, function(e, t, o) {

    "use strict";

    Object.defineProperty(t, "__esModule", {

        value: !0

    }), t.creatorNode = t.logoAndLinesNode = t.workNode = t.solutionsOverviewNode = t.scrollDownNode = t.servicesNode = t.organizationNode = t.aboutSolutionNode = t.initScreen = void 0;

    var n = function(e) {

        return e && e.__esModule ? e : {

            default: e

        }

    }(o(0));

    t.initScreen = (0, n.default)(".initScreen"), t.aboutSolutionNode = (0, n.default)(".aboutSolution"), t.servicesNode = (0, n.default)(".services"),t.organizationNode=(0, n.default)(".org-structure"), t.scrollDownNode = (0, n.default)(".scrollDown"), t.solutionsOverviewNode = (0, n.default)(".solutionsOverview"), t.workNode = (0, n.default)(".work"), t.logoAndLinesNode = (0, n.default)(".logoAndLines"), t.creatorNode = (0, n.default)(".creator")

}, function(e, t, o) {

    "use strict";



    function n(e) {

        return e && e.__esModule ? e : {

            default: e

        }

    }

    Object.defineProperty(t, "__esModule", {

        value: !0

    });

    n(o(3));

    var s = n(o(21)),

        i = (n(o(11)), n(o(23))),

        a = n(o(22)),

        l = n(o(13)),

        d = n(o(10)),

        r = n(o(6)),

        u = (n(o(9)), n(o(5))),

        c = n(o(2)),

        f = n(o(25)),

        v = document.querySelectorAll(".workItems .item").length,

        h = document.querySelectorAll(".menu .navigation ul li a"),

        m = {

            state: {

                currentSection: 1,

                inAction: !1

            },

            init: function() {

                i.default.init(), d.default.setBlur(), this.setListener()

            },

            maxSlidesCount: function() {

                return document.querySelectorAll("body > .section").length

            },

            get currentSectionValue() {

                return this.state.currentSection

            },

            set setSectionValue(e) {

                this.state.currentSection = e

            },

            get actionValue() {

                return this.state.inAction

            },

            set setActionValue(e) {

                this.state.inAction = e

            },

            setListener: function() {

                window.addEventListener("wheel", this.forward, {

                    passive: !0

                }), window.addEventListener("keyup", this.forward), window.addEventListener("resize", function() {

                    var e = document.querySelectorAll(".section")[m.state.currentSection - 1].offsetTop;

                    window.scrollTo(0, e)

                })

            },

            forward: function(e) {

                var t;

                if (!(m.actionValue || a.default.isAnyOpened || r.default.state.opened)) {

                    if (4 == m.currentSectionValue && !(0 == l.default.currentFace && "up" == (0, s.default)(e) || 3 == l.default.currentFace && "down" == (0, s.default)(e))) return m.pageInAction(!0), void l.default.rotateCube(e);

                    if (5 == m.currentSectionValue) {

                        if (d.default.state.currentWork == v - 2 && "down" == (0, s.default)(e)) {

                            if ("show" == d.default.state.details) return;

                            d.default.hideWork(), u.default.state.onContacts = !0, c.default.highlight(5);

                            for (o = 0; o < h.length; o++) h[o].classList.remove("currentSection");

                            h[4].classList.add("currentSection")

                        }

                        if (d.default.state.currentWork == v - 1 && "down" == (0, s.default)(e)) return;

                        if (d.default.state.currentWork == v - 1 && "up" == (0, s.default)(e)) {

                            d.default.showWork(), c.default.highlight(4), u.default.state.onContacts = !1;

                            for (var o = 0; o < h.length; o++) h[o].classList.remove("currentSection");

                            h[3].classList.add("currentSection")

                        }

                        if ("show" == d.default.state.details) return;

                        if (!(0 == d.default.state.currentWork && "up" == (0, s.default)(e) || d.default.state.currentWork == v - 1 && "down" == (0, s.default)(e))) return m.pageInAction(!0), void d.default.setDeep(e)

                    }

                    if ("down" == (0, s.default)(e) || "downButtonEvent" == e) {

                        if (m.currentSectionValue >= m.maxSlidesCount()) return;

                        m.setSectionValue = ++m.state.currentSection, t = "down"

                    }

                    if ("up" == (0, s.default)(e)) {

                        if (m.currentSectionValue <= 1) return;

                        m.setSectionValue = --m.state.currentSection, t = "up"

                    }

                    m.pageInAction(), i.default.section(m.state.currentSection, t)

                }

            },

            pageInAction: function(e) {

                this.setActionValue = !0, c.default.inActionState(), e ? "macos" == (0, f.default)() ? setTimeout(function() {

                    m.setActionValue = !1

                }, 1200) : setTimeout(function() {

                    m.setActionValue = !1

                }, 600) : setTimeout(function() {

                    m.setActionValue = !1

                }, 1200)

            }

        };

    t.default = m

}, function(e, t, o) {

    "use strict";



    function n(e) {

        return e && e.__esModule ? e : {

            default: e

        }

    }

    Object.defineProperty(t, "__esModule", {

        value: !0

    });

    var s = n(o(6)),

        i = (0, n(o(0)).default)(".menuButton"),

        a = {

            state: {

                disable: !1

            },

            init: function() {

                a.showWhenLoad()

            },

            showWhenLoad: function() {

                i.classList.add("showWhenLoad")

            },

            showButton: function() {

                i.classList.remove("hide")

            },

            hideButton: function() {

                i.classList.add("hide")

            },

            disableButton: function() {

                i.classList.add("disable")

            },

            enableButton: function() {

                i.classList.remove("disable")

            },

            setListeners: function() {

                i.addEventListener("click", function() {

                    a.state.disable || (s.default.toggle(), a.state.disable = !0, setTimeout(function() {

                        a.state.disable = !1

                    }, 1300))

                })

            }

        };

    t.default = a

}, function(e, t, o) {

    "use strict";



    function n(e) {

        return e && e.__esModule ? e : {

            default: e

        }

    }

    Object.defineProperty(t, "__esModule", {

        value: !0

    });

    var s = n(o(21)),

        i = n(o(0)),

        a = n(o(15)),

        l = n(o(12)),

        d = n(o(9)),

        r = n(o(5)),

        u = n(o(1)),

        c = n(o(2)),

        f = (0, i.default)(".work"),

        v = (0, i.default)(".logoAndLines"),

        h = (0, i.default)(".contactUsButton"),

        m = (0, i.default)(".scaleWrapper"),

        L = document.querySelectorAll(".workItems .item"),

        w = (0, i.default)(".detailsView"),

        g = (0, i.default)(".detailsView .content"),

        p = (0, i.default)(".detailsView .close"),

        S = (document.querySelectorAll(".work-1 .photos"), (0, i.default)(".contacts")),

        b = !1,

        y = L.length - 1,

        A = null,

        O = null,

        N = null,

        _ = [],

        M = null,

        T = [],

        k = {

            state: {

                currentWork: 0,

                details: "hide"

            },

            setDeep: function(e) {

                "up" == (0, s.default)(e) && 0 != k.state.currentWork && (--k.state.currentWork, k.move(k.state.currentWork, !0, !1)), "down" == (0, s.default)(e) && k.state.currentWork != y && (++k.state.currentWork, k.move(k.state.currentWork, !1, !0))

            },

            resetState: function() {

                k.state.currentWork = 0, k.showWork(), r.default.hide();

                for (var e = 0; e < L.length - 1; e++) L[e].classList.remove("show"), L[e].classList.remove("hide"), (0, l.default)(L[e], "work-" + (e + 1) + "-deep", 900 * -e + "px");

                L[0].classList.add("show"), (0, l.default)(m, "moveShift", "0px")

            },

            move: function() {

                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,

                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],

                    o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],

                    n = 900 * e + "px";

                if (arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) {

                    for (s = 0; s < L.length; s++) L[s].classList.remove("show"), L[s].classList.add("hide"), (0, l.default)(L[s], "work-" + (s + 1) + "-deep", 900 * y - 900 * (s + 1) + 900 + "px");

                    return L[y].classList.remove("hide"), L[y].classList.add("show"), void(0, l.default)(m, "moveShift", 900 * y + "px")

                }

                for (var s = 0; s < L.length; s++) {

                    L[s].classList.remove("show");

                    var i, d = (0, a.default)(L[s], "work-" + (s + 1) + "-deep"),

                        u = parseInt(d, 10);

                    t && (i = u - 900), o && (i = u + 900), (0, l.default)(L[s], "work-" + (s + 1) + "-deep", i + "px")

                }

                o && (L[e].classList.add("show"), 0 != e && L[e - 1].classList.add("hide"), e == y && r.default.show()), t && (0 == e && L[e].classList.add("show"), e != L.length && (L[e].classList.remove("hide"), L[e + 1].classList.remove("hide")), L[e].classList.add("show"), e == y - 1 && r.default.hide()), (0, l.default)(m, "moveShift", n), (0, l.default)(S, "moveShift", n), k.setBlur(e)

            },

            setBlur: function() {

                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, t = (L.length, 0); t < L.length; t++) {

                    if (L[t] == L[e] && (L[t].style.filter = "none"), t > e) {

                        0 != e && (o = t / e * 2), (0, l.default)(L[t], "work-brightness", .1 * o + .3)

                    }

                    if (0 == e) {

                        var o = 2 * t;

                        (0, l.default)(L[t], "work-brightness", .1 * o + .3)

                    }

                }

            },

            initListeners: function() {

                for (var e = 0; e < L.length; e++) L[e].addEventListener("click", function(e) {

                    k.showDetails(e)

                });

                p.addEventListener("click", function() {

                    k.hideDetails()

                }), window.addEventListener("keydown", function(e) {

                    27 == e.keyCode && "show" == k.state.details && k.hideDetails()

                })

            },

            showDetails: function(e) {

                k.state.details = "show", u.default.toggleVisible("hide"), c.default.hide(), k.getDetails(e, L), k.details(_, T, O), k.setVideoListeners(), w.classList.add("showDetails"), f.classList.add("detailsState"), v.classList.add("onDetails"), h.classList.add("onDetails"), d.default.hideButton()

            },

            hideDetails: function() {

                k.state.details = "hide", u.default.toggleVisible("show"), c.default.show(), w.classList.remove("showDetails"), f.classList.remove("detailsState"), v.classList.remove("onDetails"), h.classList.remove("onDetails"), d.default.showButton()

            },

            getDetails: function(e, t) {

                var o = e.target;

                A = null, O = null, N = null, _ = [], M = null, T = [];

                for (var n = 0; n < o.children.length; n++)

                    if ("details" == o.children[n].className) {

                        A = o.children[n];

                        break

                    }

                for (var s = 0; s < A.children.length; s++)

                    if ("description" == A.children[s].className) {

                        O = A.children[s].innerHTML;

                        break

                    }

                for (var i = 0; i < A.children.length; i++)

                    if ("photos" == A.children[i].className) {

                        N = A.children[i];

                        break

                    }

                for (var a = 0; a < N.children.length; a++) _.push(N.children[a].dataset.src);

                for (var l = 0; l < A.children.length; l++)

                    if ("videos" == A.children[l].className) {

                        M = A.children[l];

                        break

                    }

                for (var d = 0; d < M.children.length; d++) T.push(M.children[d].dataset.src)

            },

            details: function(e, t, o) {

                var n = k.buildGallery(e, t);

                g.innerHTML = '\n                                    <div class=" galleryWrapper"> ' + n + ' </div>\n                                    <div class="description"> ' + o + " </div>\n                                    ";

                new Swiper(".swiper-container", {

                    pagination: {

                        el: ".swiper-pagination",

                        clickable: !0,

                        speed: 1500,

                        paginationType: "custom",

                        renderBullet: function(e, t) {

                            return '<span class="' + t + '">' + (e + 1) + "</span>"

                        }

                    },

                    on: {

                        slideChange: function() {

                            k.pauseAllVideos()

                        }

                    },

                    navigation: {

                        nextEl: ".swiper-button-next",

                        prevEl: ".swiper-button-prev"

                    },

                    effect: "cube",

                    grabCursor: !0,

                    cubeEffect: {

                        shadow: !1

                    },

                    loop: !0

                }), document.querySelectorAll(".swiper-slide")

            },

            buildGallery: function(e, t) {

                return '\n                          <div class="swiper-container">\n                            <div class="swiper-wrapper">\n                                ' + k.galleryTemplate(e) + "\n                                " + k.videosTemplate(t) + '\n                            </div>\n\n                            <div class="controls">\n                              <div class="swiper-button-prev">\n                                <svg width="16px" height="23px" viewBox="0 0 16 23">\n                                  <path stroke-width="2px" \n                                        stroke-linecap="butt" \n                                        stroke-linejoin="miter" \n                                        fill="none"\n                                        d="M2.427,1.997 L12.005,11.000 L2.427,20.003 "/>\n                                </svg>\n                              </div>\n                              <div class="swiper-pagination"></div>\n                              <div class="swiper-button-next">\n                                <svg width="16px" height="23px" viewBox="0 0 16 23">\n                                  <path stroke-width="2px" \n                                        stroke-linecap="butt" \n                                        stroke-linejoin="miter" \n                                        fill="none"\n                                        d="M2.427,1.997 L12.005,11.000 L2.427,20.003 "/>\n                                </svg>\n                              </div>\n                            </div>\n                          </div>\n                        '

            },

            galleryTemplate: function(e) {

                for (var t = "", o = 0; o < e.length; o++) {

                    t += '\n                <div class="swiper-slide"> \n                  <img src="' + e[o] + '"> \n                </div>\n                '

                }

                return t

            },

            videosTemplate: function(e) {

                for (var t = "", o = 0; o < e.length; o++) {

                    t += '\n                <div class="swiper-slide">\n                  <div class="videoWrapper">\n                    <div class="playpause">\n                      <button class="switch"></button>\n                    </div>\n\n                    <div class="videoWrapper">\n                      <video class="video">\n                        <source src="videos/' + e[o] + '.mp4" type="video/mp4">\n                      </video>\n                    </div>\n                  </div>\n                </div>\n                '

                }

                return t

            },

            setVideoListeners: function() {

                for (var e = document.querySelectorAll(".playpause"), t = 0; t < e.length; t++) e[t].addEventListener("click", function(e) {

                    b || k.playVideos(e), b && k.pauseVideos(e), b = !b

                })

            },

            playVideos: function(e) {

                var t = e.currentTarget,

                    o = t.nextElementSibling.children[0];

                t.classList.add("playState"), o.play()

            },

            pauseVideos: function(e) {

                var t = e.currentTarget,

                    o = t.nextElementSibling.children[0];

                t.classList.remove("playState"), o.pause()

            },

            pauseAllVideos: function() {

                for (var e = document.querySelectorAll("video"), t = 0; t < e.length; t++) e[t].pause();

                for (var o = document.querySelectorAll(".playpause"), t = 0; t < o.length; t++) o[t].classList.remove("playState");

                b = !1

            },

            hideWork: function() {

                r.default.scale(), r.default.state.onContacts = !1, f.classList.add("hide"), setTimeout(function() {

                    f.classList.add("hideOverflow")

                }, 500)

            },

            showWork: function() {

                r.default.removeScale(), r.default.state.onContacts = !0, f.classList.remove("hide"), setTimeout(function() {

                    f.classList.remove("hideOverflow")

                }, 500)

            },

            init: function() {

                L[0].classList.add("show"), k.initListeners()

            }

        };

    t.default = k

}, function(e, t, o) {

    "use strict";

    Object.defineProperty(t, "__esModule", {

        value: !0

    }), t.default = function(e) {

        document.addEventListener("DOMContentLoaded", function() {

            e()

        })

    }

}, function(e, t, o) {

    "use strict";

    Object.defineProperty(t, "__esModule", {

        value: !0

    }), t.default = function(e, t, o) {

        return e.style.setProperty("--" + t, o)

    }

}, function(e, t, o) {

    "use strict";



    function n(e) {

        return e && e.__esModule ? e : {

            default: e

        }

    }

    Object.defineProperty(t, "__esModule", {

        value: !0

    });

    var s = n(o(21)),

        i = (0, n(o(0)).default)(".solutionsOverview .cube"),

        a = document.querySelectorAll(".solutionsOverview .currentFace"),

        l = {

            angleShift: 90,

            state: {

                currentFace: 0,

                currentAngle: 0

            },

            rotateCube: function(e) {

                "up" != (0, s.default)(e) && "down" != (0, s.default)(e) || ("up" == (0, s.default)(e) && 0 != l.currentFace && function() {

                    var e = --l.currentFace;

                    l.state.currentAngle = l.state.currentAngle - l.angleShift, l.currentFace = e

                }(), "down" == (0, s.default)(e) && 3 != l.currentFace && function() {

                    var e = ++l.currentFace;

                    l.state.currentAngle = l.state.currentAngle + l.angleShift, l.currentFace = e

                }()), l.setAngle();

                for (var t = 0; t < a.length; t++) a[t].classList.remove("selectFace"), a[l.currentFace].classList.add("selectFace")

            },

            setAngle: function() {

                i.style.transform = "rotateY(" + l.state.currentAngle + "deg)";

                for (var e = 0; e < a.length; e++) a[e].classList.remove("selectFace");

                a[l.currentFace].classList.add("selectFace")

            },

            setMin: function() {

                for (var e = 0; e < a.length; e++) a[e].classList.remove("selectFace");

                a[0].classList.add("selectFace")

            },

            setMax: function() {

                for (var e = 0; e < a.length; e++) a[e].classList.remove("selectFace");

                a[3].classList.add("selectFace")

            },

            setListeners: function() {},

            init: function() {

                l.setListeners()

            },

            set currentFace(e) {

                l.state.currentFace = e

            },

            get currentFace() {

                return l.state.currentFace

            }

        };

    t.default = l

}, function(e, t, o) {

    "use strict";

    Object.defineProperty(t, "__esModule", {

        value: !0

    }), t.default = function(e) {

        return setTimeout(function() {

            e()

        }, 1)

    }

}, function(e, t, o) {

    "use strict";

    Object.defineProperty(t, "__esModule", {

        value: !0

    }), t.default = function(e, t) {

        return getComputedStyle(e).getPropertyValue("--" + t).trim()

    }

}, function(e, t, o) {

    "use strict";



    function n(e) {

        return e && e.__esModule ? e : {

            default: e

        }

    }

    Object.defineProperty(t, "__esModule", {

        value: !0

    });

    var s = function(e) {

            if (e && e.__esModule) return e;

            var t = {};

            if (null != e)

                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);

            return t.default = e, t

        }(o(7)),

        i = (n(o(3)), n(o(1))),

        a = (n(o(4)), n(o(2))),

        l = {

            set: function() {

                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];

                s.aboutSolutionNode.classList.remove("showContent"), l.setIndicatorState(), scroll ? setTimeout(function() {

                    s.logoAndLinesNode.classList.remove("onAboutSolution"), i.default.toggleVisible("hide")

                }, 300) : (s.logoAndLinesNode.classList.remove("onAboutSolution"), i.default.toggleVisible("hide"))

            },

            setIndicatorState: function() {

                a.default.highlight(0)

            }

        };

    t.default = l

}, function(e, t, o) {

    "use strict";



    function n(e) {

        return e && e.__esModule ? e : {

            default: e

        }

    }

    Object.defineProperty(t, "__esModule", {

        value: !0

    });

    var s = function(e) {

            if (e && e.__esModule) return e;

            var t = {};

            if (null != e)

                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);

            return t.default = e, t

        }(o(7)),

        i = (n(o(3)), n(o(1))),

        a = n(o(4)),

        l = n(o(2)),

        d = {

            up: function() {

                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];

                s.servicesNode.classList.remove("showContent"), d.setIndicatorState(), e ? setTimeout(function() {

                    s.aboutSolutionNode.classList.remove("hideContent"), s.aboutSolutionNode.classList.remove("hide"), s.logoAndLinesNode.classList.remove("onServices"), s.scrollDownNode.classList.remove("hide"), a.default.onAboutSolution(), setTimeout(function() {

                        s.aboutSolutionNode.classList.add("showContent")

                    }, 510)

                }, 510) : (s.aboutSolutionNode.classList.remove("hideContent"), s.aboutSolutionNode.classList.remove("hide"), s.logoAndLinesNode.classList.remove("onServices"), s.scrollDownNode.classList.remove("hide"), a.default.onAboutSolution(), s.aboutSolutionNode.classList.add("showContent"))

            },

            down: function() {

                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];

                s.aboutSolutionNode.classList.remove("hideContent"), s.aboutSolutionNode.classList.remove("hide"), s.logoAndLinesNode.classList.remove("onServices"), s.scrollDownNode.classList.remove("hide"), d.setIndicatorState(), a.default.onAboutSolution(), e ? setTimeout(function() {

                    i.default.toggleVisible("show"), s.aboutSolutionNode.classList.add("showContent")

                }, 450) : (i.default.toggleVisible("show"), s.aboutSolutionNode.classList.add("showContent"))

            },

            clear: function() {

                i.default.toggleVisible("hide"), s.aboutSolutionNode.classList.remove("showContent")

            },

            setIndicatorState: function() {

                l.default.highlight(1)

            }

        };

    t.default = d

}, function(e, t, o) {

    "use strict";



    function n(e) {

        return e && e.__esModule ? e : {

            default: e

        }

    }

    Object.defineProperty(t, "__esModule", {

        value: !0

    });

    var s = function(e) {

            if (e && e.__esModule) return e;

            var t = {};

            if (null != e)

                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);

            return t.default = e, t

        }(o(7)),

        i = (n(o(3)), n(o(1)), n(o(4))),

        a = n(o(2)),

        l = {

            up: function() {
                console.log("up");
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];

                s.logoAndLinesNode.classList.add("hide"), l.setIndicatorState(), e ? setTimeout(function() {

                    s.servicesNode.classList.add("showContent"), s.aboutSolutionNode.classList.remove("showContent")

                }, 1020) : (s.servicesNode.classList.add("showContent"), s.aboutSolutionNode.classList.remove("showContent")), e ? setTimeout(function() {

                    s.logoAndLinesNode.classList.add("onServices"), s.scrollDownNode.classList.add("hide"), i.default.onServices(), s.logoAndLinesNode.classList.remove("onSolutionsOverview"), s.solutionsOverviewNode.classList.remove("onServices"), s.logoAndLinesNode.classList.remove("onSolutionsOverview"), s.creatorNode.classList.remove("onSolutionsOverview"), s.logoAndLinesNode.classList.remove("onSolutionsOverview-logo"), s.solutionsOverviewNode.classList.remove("showContent"), s.logoAndLinesNode.classList.remove("hide"), s.solutionsOverviewNode.classList.remove("showDesctiption"), s.solutionsOverviewNode.classList.remove("showContent")

                }, 510) : (s.logoAndLinesNode.classList.add("onServices"), s.scrollDownNode.classList.add("hide"), i.default.onServices(), s.logoAndLinesNode.classList.remove("onSolutionsOverview"), s.solutionsOverviewNode.classList.remove("onServices"), s.logoAndLinesNode.classList.remove("onSolutionsOverview"), s.creatorNode.classList.remove("onSolutionsOverview"), s.logoAndLinesNode.classList.remove("onSolutionsOverview-logo"), s.solutionsOverviewNode.classList.remove("showContent"), s.logoAndLinesNode.classList.remove("hide"), s.solutionsOverviewNode.classList.remove("showDesctiption"), s.solutionsOverviewNode.classList.remove("showContent"))

            },

            down: function() {
                 console.log("down");
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];

                s.aboutSolutionNode.classList.remove("showContent"), l.setIndicatorState(), e ? setTimeout(function() {

                    s.servicesNode.classList.add("showContent"), s.aboutSolutionNode.classList.remove("showContent")

                }, 1020) : (s.servicesNode.classList.add("showContent"), s.aboutSolutionNode.classList.remove("showContent")), e ? setTimeout(function() {

                    s.logoAndLinesNode.classList.add("onServices"), s.scrollDownNode.classList.add("hide"), i.default.onServices()

                }, 510) : (s.logoAndLinesNode.classList.add("onServices"), s.scrollDownNode.classList.add("hide"), i.default.onServices()), s.logoAndLinesNode.classList.remove("onSolutionsOverview"), s.solutionsOverviewNode.classList.remove("onServices"), s.logoAndLinesNode.classList.remove("onSolutionsOverview"), s.creatorNode.classList.remove("onSolutionsOverview"), s.logoAndLinesNode.classList.remove("onSolutionsOverview-logo"), s.solutionsOverviewNode.classList.remove("showContent"), s.logoAndLinesNode.classList.remove("hide"), s.solutionsOverviewNode.classList.remove("showDesctiption")

            },

            clear: function() {

                s.logoAndLinesNode.classList.remove("hide"), s.servicesNode.classList.remove("showContent"), s.logoAndLinesNode.classList.remove("onServices"), s.scrollDownNode.classList.remove("hide")

            },

            setIndicatorState: function() {

                a.default.highlight(2)

            }

        };

    t.default = l

}, function(e, t, o) {

    "use strict";



    function n(e) {

        return e && e.__esModule ? e : {

            default: e

        }

    }

    Object.defineProperty(t, "__esModule", {

        value: !0

    });

    var s = function(e) {

            if (e && e.__esModule) return e;

            var t = {};

            if (null != e)

                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);

            return t.default = e, t

        }(o(7)),

        i = (n(o(3)), n(o(1)), n(o(4)), n(o(2))),

        a = n(o(13)),

        l = document.querySelector(".work"),

        d = {
            up: function() { //UP funcion is occure when we scroll up of current node
                console.log("scope and service up");
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];

                l.classList.remove("show");

                setTimeout(function () {
                    s.servicesNode.classList.remove("showContent");
                    d.setIndicatorState();
                    s.logoAndLinesNode.classList.add("onSolutionsOverview");
                    s.aboutSolutionNode.classList.remove("hide");
                    s.solutionsOverviewNode.classList.remove("hide");
                    s.logoAndLinesNode.classList.remove("onWorks");
                    s.creatorNode.classList.remove("onWorks");
                    s.solutionsOverviewNode.classList.add("showDesctiption");
                    s.solutionsOverviewNode.classList.add("showContent");
                    s.logoAndLinesNode.classList.add("onSolutionsOverview-logo");
                    s.logoAndLinesNode.classList.add("hide");
                    s.creatorNode.classList.add("onSolutionsOverview");
                }, 210);

                a.default.setMax();

            },

            down: function() { //Down functions is occur when we scroll down of current node
               // s.servicesNode is return  html object of service class 
               //d.setIndicatorState is return function    i.default.highlight(e) e=3 in the service class  
                console.log("scope and service down");
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];

                s.servicesNode.classList.remove("showContent"), d.setIndicatorState(), e ? setTimeout(function() {

                    s.logoAndLinesNode.classList.add("onSolutionsOverview"), s.aboutSolutionNode.classList.remove("hide"), s.solutionsOverviewNode.classList.remove("hide"), s.logoAndLinesNode.classList.remove("onWorks"), s.creatorNode.classList.remove("onWorks")

                }, 510) : (s.logoAndLinesNode.classList.add("onSolutionsOverview"), s.aboutSolutionNode.classList.remove("hide"), s.solutionsOverviewNode.classList.remove("hide"), s.logoAndLinesNode.classList.remove("onWorks"), s.creatorNode.classList.remove("onWorks")), e ? setTimeout(function() {

                    s.organizationNode.classList.add("showDesctiption")

                }, 1010) : s.organizationNode.classList.add("showDesctiption"), e ? setTimeout(function() {

                    s.organizationNode.classList.add("showContent"), s.logoAndLinesNode.classList.add("onSolutionsOverview-logo"), s.logoAndLinesNode.classList.add("hide"), s.creatorNode.classList.add("onSolutionsOverview")

                }, 1020) : (s.organizationNode.classList.add("showContent"), s.logoAndLinesNode.classList.add("onSolutionsOverview-logo"), s.logoAndLinesNode.classList.add("hide"), s.creatorNode.classList.add("onSolutionsOverview")), a.default.setMin()

            },

            clear: function() {

                s.logoAndLinesNode.classList.remove("onSolutionsOverview"), s.solutionsOverviewNode.classList.remove("showDesctiption"), s.solutionsOverviewNode.classList.remove("showContent"), s.logoAndLinesNode.classList.remove("onSolutionsOverview-logo"), s.logoAndLinesNode.classList.remove("hide"), s.creatorNode.classList.remove("onSolutionsOverview"), a.default.setMin()

            },

            setIndicatorState: function() {

                i.default.highlight(3)

            }

        };

    t.default = d

}, function(e, t, o) {

    "use strict";



    function n(e) {

        return e && e.__esModule ? e : {

            default: e

        }

    }

    Object.defineProperty(t, "__esModule", {

        value: !0

    });

    var s = function(e) {

            if (e && e.__esModule) return e;

            var t = {};

            if (null != e)

                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);

            return t.default = e, t

        }(o(7)),

        i = (n(o(3)), n(o(1)), n(o(4)), n(o(2))),

        a = n(o(5)),

        l = (document.querySelector(".contacts"), document.querySelector(".work")),

        d = document.querySelector(".indicator"),

        r = {

            set: function() {

                s.solutionsOverviewNode.classList.add("hide"), d.classList.add("hideBg"), r.setIndicatorState(), a.default.resetState(), setTimeout(function() {

                    s.logoAndLinesNode.classList.add("onWorks"), s.creatorNode.classList.add("onWorks"), l.classList.add("show")

                }, 210)

            },

            clear: function() {

                s.solutionsOverviewNode.classList.remove("hide"), s.logoAndLinesNode.classList.remove("onWorks"), s.creatorNode.classList.remove("onWorks"), l.classList.remove("show"), d.classList.remove("hideBg")

            },

            setIndicatorState: function() {

                i.default.highlight(4)

            }

        };

    t.default = r

}, function(e, t, o) {

    "use strict";

    Object.defineProperty(t, "__esModule", {

        value: !0

    }), t.default = function(e) {

        if ("wheel" == e.type) {

            if (e.deltaY < 0) return "up";

            if (e.deltaY > 0) return "down"

        }

        if ("keyup" == e.type) {

            if (40 == e.keyCode) return "down";

            if (38 == e.keyCode) return "up"

        }

    }

}, function(e, t, o) {

    "use strict";



    function n(e) {

        return e && e.__esModule ? e : {

            default: e

        }

    }

    Object.defineProperty(t, "__esModule", {

        value: !0

    });

    var s = n(o(1)),

        i = (n(o(5)), n(o(0))),

        a = n(o(12)),

        l = n(o(9)),

        d = n(o(6)),

        r = n(o(2)),

        u = (0, i.default)(".services"),

        c = (0, i.default)(".closeArea"),

        f = document.querySelectorAll(".service"),

        v = document.querySelectorAll(".closeService"),

        h = document.querySelectorAll(".showCase"),

        m = document.querySelectorAll(".services .contact"),

        L = {

            state: {

                openedService: "",

                isAnyOpened: !1,

                isAnyOpenedAndFinished: !1

            },

            init: function() {

                L.setListeners();

                var e = Math.round(-.55 * window.innerWidth) + "px",

                    t = Math.round(.05 * window.innerHeight) + "px";

                (0, a.default)(u, "translateX", e), (0, a.default)(u, "translateY", t)

            },

            set setOpenedService(e) {

                L.state.openedService = e

            },

            get getOpenedService() {

                return L.state.openedService

            },

            set isAnyOpened(e) {

                L.state.isAnyOpened = e

            },

            get isAnyOpened() {

                return L.state.isAnyOpened

            },

            openService: function(e) {

                L.state.isAnyOpened || (L.isAnyOpened = !0, L.setOpenedService = e, r.default.disable(), setTimeout(function() {

                    L.state.isAnyOpenedAndFinished = !0

                }, 1e3), setTimeout(function() {

                    u.classList.add("otherEasing")

                }, 700), u.classList.contains("serviceOpened") || (e.classList.add("open"), u.classList.add("serviceOpened"), e.classList.add("opacityToFace"), setTimeout(function() {

                    u.classList.add("toggleShadow")

                }, 200)), l.default.disableButton(), s.default.disableButton())

            },

            closeService: function(e, t) {

                L.state.isAnyOpened && (L.isAnyOpened = !1, L.state.isAnyOpenedAndFinished = !1, setTimeout(function() {

                    u.classList.remove("otherEasing")

                }, 700), r.default.enable(), e && e.stopImmediatePropagation(), (t = L.getOpenedService) && t.classList.remove("open"), u.classList.remove("serviceOpened"), u.classList.remove("toggleShadow"), setTimeout(function() {

                    t && t.classList.remove("opacityToFace")

                }, 300), l.default.enableButton(), s.default.enableButton(), L.state.openedService = "")

            },

            goToContacts: function() {

                document.body.classList.add("showCaseEffect"), setTimeout(function() {

                    d.default.goToSection(5)

                }, 320), setTimeout(function() {

                    document.body.classList.remove("showCaseEffect"), L.closeService(!1, L.state.openedService)

                }, 1200)

            },

            setListeners: function() {

                for (e = 0; e < f.length; e++) f[e].addEventListener("click", function(e) {

                    L.state.isAnyOpened || u.classList.contains("serviceOpened") || L.openService(e.target)

                });

                for (e = 0; e < h.length; e++) h[e].addEventListener("click", function(e) {

                    document.body.classList.add("showCaseEffect"), setTimeout(function() {

                        d.default.goToSection(4), work.resetState()

                    }, 320), setTimeout(function() {

                        L.closeService(!1, L.state.openedService), document.body.classList.remove("showCaseEffect")

                    }, 1e3)

                });

                for (e = 0; e < v.length; e++) v[e].addEventListener("click", function(e) {

                    L.closeService(e)

                });

                c.addEventListener("click", function(e) {

                    L.closeService(e)

                }), window.addEventListener("keydown", function(e) {

                    27 == e.keyCode && L.closeService(!1, L.state.openedService)

                });

                for (var e = 0; e < f.length; e++) m[e].addEventListener("click", L.goToContacts)

            }

        };

    t.default = L

}, function(e, t, o) {

    "use strict";



    function n(e) {

        return e && e.__esModule ? e : {

            default: e

        }

    }

    Object.defineProperty(t, "__esModule", {

        value: !0

    });

    var s = n(o(3)),

        i = n(o(0)),

        a = (n(o(1)), n(o(4)), n(o(16))),

        l = n(o(17)),

        d = n(o(18)),

        r = n(o(19)),

        u = n(o(20)),

        c = (0, i.default)(".initScreen"),

        f = (0, i.default)(".aboutSolution"),

        v = (0, i.default)(".services"),

        h = (0, i.default)(".scrollDown"),

        m = (0, i.default)(".solutionsOverview"),

        L = ((0, i.default)(".work"), (0, i.default)(".logoAndLines")),

        w = ((0, i.default)(".creator"), document.querySelectorAll(".menu .navigation ul li a")),

        g = {

            windowHeight: window.innerHeight,

            init: function() {

                g.setListeners()

            },

            setListeners: function() {

                window.addEventListener("resize", function() {

                    g.windowHeight = window.innerHeight

                })

            },

            section: function(e, t) {

                for (var o = 0; o < w.length; o++) w[o].classList.remove("currentSection");
                    // console.log(w.length);
                if (0 != e && 1 != e && w[e - 2].classList.add("currentSection"), 0 != e && 1 != e || w[0].classList.add("currentSection"), 1 == e) {

                    n = new s.default;

                    a.default.set(!0), setTimeout(function() {

                        n.animateScroll(c)

                    }, 510)

                }

                if (2 == e) {

                    n = new s.default;

                    L.classList.add("onAboutSolution"), h.classList.add("show"), "up" == t && (l.default.up(!0), setTimeout(function() {

                        n.animateScroll(f)

                    }, 510)), "down" == t && (l.default.down(!0), n.animateScroll(f))

                }

                if (3 == e) {

                    n = new s.default;

                    "down" == t && (d.default.down(!0), setTimeout(function() {

                        n.animateScroll(v)

                    }, 510)), "up" == t && (d.default.up(!0), n.init({

                        speed: 1

                    }), setTimeout(function() {

                        n.animateScroll(v)

                    }, 1020))

                }

                if (4 == e) {

                    n = new s.default;

                    "down" == t && (r.default.down(!0), n.init({

                        speed: 1

                    }), setTimeout(function() {

                        n.animateScroll(m)

                    }, 510)), "up" == t && (r.default.up(!0), setTimeout(function() {

                        u.default.clear()

                    }, 410), n.animateScroll(m))

                }

                if (5 == e) {

                    var n = new s.default;

                    u.default.set()

                }

            }

        };

    t.default = g

}, function(e, t, o) {

    "use strict";

    Object.defineProperty(t, "__esModule", {

        value: !0

    }), t.default = function(e, t) {

        return t / e

    }

}, function(e, t, o) {

    "use strict";

    Object.defineProperty(t, "__esModule", {

        value: !0

    }), t.default = function() {

        var e = window.navigator.userAgent,

            t = window.navigator.platform,

            o = null;

        return -1 !== ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].indexOf(t) ? o = "macos" : -1 !== ["iPhone", "iPad", "iPod"].indexOf(t) ? o = "ios" : -1 !== ["Win32", "Win64", "Windows", "WinCE"].indexOf(t) ? o = "windows" : /Android/.test(e) ? o = "android" : !o && /Linux/.test(t) && (o = "linux"), o

    }

}, function(e, t, o) {

    "use strict";

    Object.defineProperty(t, "__esModule", {

        value: !0

    });

    var n = function(e) {

            return e && e.__esModule ? e : {

                default: e

            }

        }(o(6)),

        s = {

            detectHash: function() {

                switch (window.location.hash) {

                    case "#vrinsales":

                        n.default.goToSection(2), s.hidePreloader();

                        break;

                    case "#cases":

                        n.default.goToSection(4), s.hidePreloader();

                        break;

                    case "#contacts":

                        n.default.goToSection(5), s.hidePreloader()

                }

            },

            hidePreloader: function() {

                setTimeout(function() {

                    document.querySelector(".routePreloader").classList.add("hide")

                }, 1e3)

            },

            init: function() {

                s.detectHash()

            }

        };

    t.default = s

}, function(e, t, o) {

    "use strict";

    Object.defineProperty(t, "__esModule", {

        value: !0

    });

    var n = {

        console: function(e) {

            function t() {

                return e.apply(this, arguments)

            }

            return t.toString = function() {

                return e.toString()

            }, t

        }(function() {

            // var e = ["background: #3452E8", "border: 2px solid white", "margin: auto auto", "color: white", "display: block", "line-height: 1.5", "padding: 20px 30px", "text-align: center", "font-weight: bold"].join(";");

            // console.log("%c Website created by Jazz Pixels", e), console.log("https://jazzpixels.com")

        })

    };

    t.default = n

}, function(e, t, o) {

    "use strict";



    function n(e) {

        return e && e.__esModule ? e : {

            default: e

        }

    }

    Object.defineProperty(t, "__esModule", {

        value: !0

    });

    var s = n(o(25)),

        i = n(o(38)),

        a = n(o(37)),

        l = {

            init: function() {

                document.body.classList.add((0, s.default)()), i.default.detect() && document.body.classList.add("safari"), a.default.detect() && document.body.classList.add("ff")

            }

        };

    t.default = l

}, function(e, t, o) {

    "use strict";

    Object.defineProperty(t, "__esModule", {

        value: !0

    });

    document.querySelector(".aboutSolution");

    var n = document.querySelectorAll(".aboutSolution .about"),

        s = {

            setListeners: function() {

                for (e = 0; e < n.length; e++) n[e].addEventListener("mouseout", function() {

                    for (var e = 0; e < n.length; e++) n[e].classList.remove("secondary"), n[e].classList.remove("accent")

                });

                for (var e = 0; e < n.length; e++) n[e].addEventListener("mouseover", function(e) {

                    for (var t = 0; t < n.length; t++) n[t].classList.add("secondary"), n[t].classList.remove("accent");

                    e.target.classList.remove("secondary"), e.target.classList.add("accent")

                })

            },

            init: function() {}

        };

    t.default = s

}, function(e, t, o) {

    "use strict";



    function n(e) {

        return e && e.__esModule ? e : {

            default: e

        }

    }

    Object.defineProperty(t, "__esModule", {

        value: !0

    });

    n(o(11));

    var s = n(o(0)),

        i = n(o(14)),

        a = n(o(8)),

        l = (0, s.default)(".scrollDown"),

        d = {

            showAfterLoad: function() {

                var e = (0, s.default)(".scrollDown");

                (0, i.default)(function() {

                    e.classList.add("load")

                }), setTimeout(function() {

                    e.classList.add("enableEvents")

                }, 2500)

            },

            init: function() {

                l.addEventListener("click", function() {

                    a.default.forward("downButtonEvent")

                })

            }

        };

    t.default = d

}, function(e, t, o) {

    "use strict";



    function n(e) {

        return e && e.__esModule ? e : {

            default: e

        }

    }

    Object.defineProperty(t, "__esModule", {

        value: !0

    }), t.default = function() {

        function e() {

            var e = document.querySelector(".loader");

            document.querySelector(".scrollDown"), e.classList.add("show-arrow")

        }

        s.default.showAfterLoad(), i.default.showAfterLoad();

        var t = "not finished",

            o = !1;

        setTimeout(function() {

            o && e(), t = "finished"

        }, 2500), window.addEventListener("load", function() {

            o = !0, "finished" == t && e()

        })

    };

    var s = n(o(4)),

        i = n(o(35))

}, function(e, t, o) {

    "use strict";

    Object.defineProperty(t, "__esModule", {

        value: !0

    }), t.default = function() {

        window.scrollTo(0, 0)

    }

}, function(e, t, o) {

    "use strict";

    var n, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {

        return typeof e

    } : function(e) {

        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e

    };

    n = function() {

        return this

    }();

    try {

        n = n || Function("return this")() || (0, eval)("this")

    } catch (e) {

        "object" === ("undefined" == typeof window ? "undefined" : s(window)) && (n = window)

    }

    e.exports = n

}, function(e, t, o) {

    "use strict";



    function n(e) {

        return e && e.__esModule ? e : {

            default: e

        }

    }

    Object.defineProperty(t, "__esModule", {

        value: !0

    });

    (function(e) {

        if (e && e.__esModule) return e;

        var t = {};

        if (null != e)

            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);

        t.default = e

    })(o(7)), n(o(3)), n(o(0)), n(o(1)), n(o(4));

    var s = n(o(10)),

        i = n(o(5)),

        a = n(o(2)),

        l = document.querySelectorAll(".workItems .item").length - 1,

        d = document.querySelector(".indicator"),

        r = {

            set: function() {

                s.default.state.currentWork = l, s.default.move(s.default.state.currentWork, !1, !1, !0), s.default.hideWork(), r.setIndicatorState(), d.classList.remove("hideBg"), i.default.show()

            },

            setIndicatorState: function() {

                a.default.highlight(5)

            }

        };

    t.default = r

}, function(e, t, o) {

    "use strict";



    function n(e) {

        return e && e.__esModule ? e : {

            default: e

        }

    }

    Object.defineProperty(t, "__esModule", {

        value: !0

    });

    var s = n(o(11)),

        i = n(o(0)),

        a = n(o(14)),

        l = {

            showAfterLoad: function() {

                (0, s.default)(function() {

                    var e = (0, i.default)(".creator");

                    (0, a.default)(function() {

                        e.classList.add("load")

                    })

                })

            }

        };

    t.default = l

}, function(e, t, o) {

    "use strict";



    function n(e) {

        return e && e.__esModule ? e : {

            default: e

        }

    }



    function s() {

        l.default.init(), c.default.init(), p.default.init(), g.default.init(), v.default.init(), r.default.init()

    }

    var i = n(o(31)),

        a = n(o(28)),

        l = n(o(8)),

        d = n(o(32)),

        r = n(o(26)),

        u = n(o(27)),

        c = n(o(30)),

        f = n(o(29)),

        v = n(o(2)),

        h = n(o(4)),

        m = n(o(22)),

        L = n(o(13)),

        w = n(o(10)),

        g = n(o(6)),

        p = n(o(9)),

        S = n(o(5)),

        b = n(o(1));

    n(o(15));

    (0, i.default)();

    var y = "not finished",

        A = !1;

    setTimeout(function() {

        A && s(), y = "finished"

    }, 2500), window.addEventListener("load", function() {

        A = !0, "finished" == y && s()

    }), a.default.init(), h.default.init(), f.default.init(), m.default.init(), L.default.init(), c.default.showAfterLoad(), w.default.init(), S.default.init(), b.default.init(), u.default.console(), window.addEventListener("beforeunload", function() {

        (0, d.default)()

    }), (0, d.default)(), window.addEventListener("load", function() {

        [].forEach.call(document.querySelectorAll("source[data-srcset]"), function(e) {

            e.setAttribute("srcset", e.getAttribute("data-srcset")), e.onload = function() {

                e.removeAttribute("data-srcset")

            }

        }), [].forEach.call(document.querySelectorAll("img[data-src-img]"), function(e) {

            e.setAttribute("src", e.getAttribute("data-src-img")), e.onload = function() {

                e.removeAttribute("data-src-img")

            }

        })

    });

    for (var O = 0; O < document.querySelectorAll("button, input, a, textarea").length; O++) document.querySelectorAll("button, input, a, textarea")[O].setAttribute("tabindex", "-1")

}, function(e, t, o) {

    "use strict";

    Object.defineProperty(t, "__esModule", {

        value: !0

    });

    var n = {

        detect: function() {

            return navigator.userAgent.toLowerCase().indexOf("firefox") > -1

        }

    };

    t.default = n

}, function(e, t, o) {

    "use strict";

    Object.defineProperty(t, "__esModule", {

        value: !0

    });

    var n = {

        detect: function() {

            return !!navigator.userAgent.match(/safari/i) && !navigator.userAgent.match(/chrome/i) && void 0 !== document.body.style.webkitFilter

        }

    };

    t.default = n

}]);

