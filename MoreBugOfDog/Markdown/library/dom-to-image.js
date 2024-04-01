// dom-to-image是一个npm库，用于将DOM元素转换为图像。
// 这个库在这个拓展里用于将marked生成的dom元素转化成svg，最后用canvas绘制到舞台区。
// 由于上传时，dom-to-image使用的是MIT协议，所以使用此文件为合法行为。
// 感谢dom-to-image库的开发团队！
// 本支持库由 Anatolii Saienko 编写，由 多bug的啸天犬 上传至本仓库。


! function(e) {
    "use strict";

    function t(t, n) {
        return function(e) {
            void 0 === e.imagePlaceholder ? f.impl.options.imagePlaceholder = s.imagePlaceholder : f.impl.options.imagePlaceholder = e.imagePlaceholder, void 0 === e.cacheBust ? f.impl.options.cacheBust = s.cacheBust : f.impl.options.cacheBust = e.cacheBust
        }(n = n || {}), Promise.resolve(t).then(function(e) {
            return function(t, n, e) {
                function r(e) {
                    return e instanceof HTMLCanvasElement ? l.makeImage(e.toDataURL()) : e.cloneNode(!1)
                }

                function o(e, t, n) {
                    var r, o, i, r, c = e.childNodes;
                    return 0 === c.length ? Promise.resolve(t) : (r = t, o = l.asArray(c), i = n, u = Promise.resolve(), o.forEach(function(e) {
                        u = u.then(function() {
                            return a(e, i)
                        }).then(function(e) {
                            e && r.appendChild(e)
                        })
                    }), u).then(function() {
                        return t
                    })
                }

                function i(u, c) {
                    function e() {
                        function e(e, t) {
                            var n, r;
                            e.cssText ? t.cssText = e.cssText : (n = e, r = t, l.asArray(n).forEach(function(e) {
                                r.setProperty(e, n.getPropertyValue(e), n.getPropertyPriority(e))
                            }))
                        }
                        e(window.getComputedStyle(u), c.style)
                    }

                    function t() {
                        function t(e) {
                            function t(e, t, n) {
                                function r(t) {
                                    function e(e) {
                                        return e + ": " + t.getPropertyValue(e) + (t.getPropertyPriority(e) ? " !important" : "")
                                    }
                                    return l.asArray(t).map(e).join("; ") + ";"
                                }
                                var o, t, u = "." + e + ":" + t,
                                    c = n.cssText ? (i = (e = n).getPropertyValue("content"), o.cssText + " content: " + i + ";") : r(n);
                                return document.createTextNode(u + "{" + c + "}")
                            }
                            var n = window.getComputedStyle(u, e),
                                r = n.getPropertyValue("content");
                            if ("" !== r && "none" !== r) {
                                var o = l.uid();
                                c.className = c.className + " " + o;
                                var i = document.createElement("style");
                                i.appendChild(t(o, e, n)), c.appendChild(i)
                            }
                        } [":before", ":after"].forEach(function(e) {
                            t(e)
                        })
                    }

                    function n() {
                        u instanceof HTMLTextAreaElement && (c.innerHTML = u.value), u instanceof HTMLInputElement && c.setAttribute("value", u.value)
                    }

                    function r() {
                        c instanceof SVGElement && (c.setAttribute("xmlns", "http://www.w3.org/2000/svg"), c instanceof SVGRectElement && ["width", "height"].forEach(function(e) {
                            var t = c.getAttribute(e);
                            t && c.style.setProperty(e, t)
                        }))
                    }
                    return c instanceof Element ? Promise.resolve().then(e).then(t).then(n).then(r).then(function() {
                        return c
                    }) : c
                }
                return e || !n || n(t) ? Promise.resolve(t).then(r).then(function(e) {
                    return o(t, e, n)
                }).then(function(e) {
                    return i(t, e)
                }) : Promise.resolve()
            }(e, n.filter, !0)
        }).then(r).then(o).then(function(t) {
            return n.bgcolor && (t.style.backgroundColor = n.bgcolor), n.width && (t.style.width = n.width + "px"), n.height && (t.style.height = n.height + "px"), n.style && Object.keys(n.style).forEach(function(e) {
                t.style[e] = n.style[e]
            }), t
        }).then(function(e) {
            return function(e, t, n) {
                return Promise.resolve(e).then(function(e) {
                    return e.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"), (new XMLSerializer).serializeToString(e)
                }).then(l.escapeXhtml).then(function(e) {
                    return '<foreignObject x="0" y="0" width="100%" height="100%">' + e + "</foreignObject>"
                }).then(function(e) {
                    return '<svg xmlns="http://www.w3.org/2000/svg" width="' + t + '" height="' + n + '">' + e + "</svg>"
                }).then(function(e) {
                    return "data:image/svg+xml;charset=utf-8," + e
                })
            }(e, n.width || l.width(t), n.height || l.height(t))
        })
    }

    function n(n, r) {
        return t(n, r).then(l.makeImage).then(l.delay(100)).then(function(e) {
            var t = function(e) {
                var t = document.createElement("canvas");
                if (t.width = r.width || l.width(e), t.height = r.height || l.height(e), r.bgcolor) {
                    var n = t.getContext("2d");
                    n.fillStyle = r.bgcolor, n.fillRect(0, 0, t.width, t.height)
                }
                return t
            }(n);
            return t.getContext("2d").drawImage(e, 0, 0), t
        })
    }

    function a(t, n, e) {
        function r(e) {
            return e instanceof HTMLCanvasElement ? l.makeImage(e.toDataURL()) : e.cloneNode(!1)
        }

        function o(e, t, n) {
            function r(t, e, n) {
                var r = Promise.resolve();
                return e.forEach(function(e) {
                    r = r.then(function() {
                        return a(e, n)
                    }).then(function(e) {
                        e && t.appendChild(e)
                    })
                }), r
            }
            var o = e.childNodes;
            return 0 === o.length ? Promise.resolve(t) : r(t, l.asArray(o), n).then(function() {
                return t
            })
        }

        function i(u, c) {
            function e() {
                function e(e, t) {
                    function n(t, n) {
                        l.asArray(t).forEach(function(e) {
                            n.setProperty(e, t.getPropertyValue(e), t.getPropertyPriority(e))
                        })
                    }
                    e.cssText ? t.cssText = e.cssText : n(e, t)
                }
                e(window.getComputedStyle(u), c.style)
            }

            function t() {
                function t(e) {
                    function t(e, t, n) {
                        function r(e) {
                            var t = (e = n).getPropertyValue("content");
                            return e.cssText + " content: " + t + ";"
                        }

                        function o(t) {
                            function e(e) {
                                return e + ": " + t.getPropertyValue(e) + (t.getPropertyPriority(e) ? " !important" : "")
                            }
                            return l.asArray(t).map(e).join("; ") + ";"
                        }
                        var i = "." + e + ":" + t,
                            u = n.cssText ? r(n) : o(n);
                        return document.createTextNode(i + "{" + u + "}")
                    }
                    var n = window.getComputedStyle(u, e),
                        r = n.getPropertyValue("content");
                    if ("" !== r && "none" !== r) {
                        var o = l.uid();
                        c.className = c.className + " " + o;
                        var i = document.createElement("style");
                        i.appendChild(t(o, e, n)), c.appendChild(i)
                    }
                } [":before", ":after"].forEach(function(e) {
                    t(e)
                })
            }

            function n() {
                u instanceof HTMLTextAreaElement && (c.innerHTML = u.value), u instanceof HTMLInputElement && c.setAttribute("value", u.value)
            }

            function r() {
                c instanceof SVGElement && (c.setAttribute("xmlns", "http://www.w3.org/2000/svg"), c instanceof SVGRectElement && ["width", "height"].forEach(function(e) {
                    var t = c.getAttribute(e);
                    t && c.style.setProperty(e, t)
                }))
            }
            return c instanceof Element ? Promise.resolve().then(e).then(t).then(n).then(r).then(function() {
                return c
            }) : c
        }
        return e || !n || n(t) ? Promise.resolve(t).then(r).then(function(e) {
            return o(t, e, n)
        }).then(function(e) {
            return i(t, e)
        }) : Promise.resolve()
    }

    function r(n) {
        return u.resolveAll().then(function(e) {
            var t = document.createElement("style");
            return n.appendChild(t), t.appendChild(document.createTextNode(e)), n
        })
    }

    function o(e) {
        return c.inlineAll(e).then(function() {
            return e
        })
    }
    var l = function() {
            function n(e) {
                var t = /\.([^\.\/]*?)$/g.exec(e);
                return t ? t[1] : ""
            }

            function r(e, t) {
                var n = window.getComputedStyle(e).getPropertyValue(t);
                return parseFloat(n.replace("px", ""))
            }
            return {
                escape: function(e) {
                    return e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1")
                },
                parseExtension: n,
                mimeType: function(e) {
                    var t = n(e).toLowerCase();
                    return function() {
                        var e = "application/font-woff",
                            t = "image/jpeg";
                        return {
                            woff: e,
                            woff2: e,
                            ttf: "application/font-truetype",
                            eot: "application/vnd.ms-fontobject",
                            png: "image/png",
                            jpg: t,
                            jpeg: t,
                            gif: "image/gif",
                            tiff: "image/tiff",
                            svg: "image/svg+xml"
                        }
                    }()[t] || ""
                },
                dataAsUrl: function(e, t) {
                    return "data:" + t + ";base64," + e
                },
                isDataUrl: function(e) {
                    return -1 !== e.search(/^(data:)/)
                },
                canvasToBlob: function(t) {
                    return t.toBlob ? new Promise(function(e) {
                        t.toBlob(e)
                    }) : function(i) {
                        return new Promise(function(e) {
                            for (var t = window.atob(i.toDataURL().split(",")[1]), n = t.length, r = new Uint8Array(n), o = 0; o < n; o++) r[o] = t.charCodeAt(o);
                            e(new Blob([r], {
                                type: "image/png"
                            }))
                        })
                    }(t)
                },
                resolveUrl: function(e, t) {
                    var n = document.implementation.createHTMLDocument(),
                        r = n.createElement("base");
                    n.head.appendChild(r);
                    var o = n.createElement("a");
                    return n.body.appendChild(o), r.href = t, o.href = e, o.href
                },
                getAndEncode: function(i) {
                    return f.impl.options.cacheBust && (i += (/\?/.test(i) ? "&" : "?") + (new Date).getTime()), new Promise(function(n) {
                        function e(e) {
                            console.error(e), n("")
                        }
                        var r, o = new XMLHttpRequest;
                        if (o.onreadystatechange = function() {
                                if (4 === o.readyState) {
                                    if (200 !== o.status) return void(r ? n(r) : e("cannot fetch resource: " + i + ", status: " + o.status));
                                    var t = new FileReader;
                                    t.onloadend = function() {
                                        var e = t.result.split(/,/)[1];
                                        n(e)
                                    }, t.readAsDataURL(o.response)
                                }
                            }, o.ontimeout = function() {
                                r ? n(r) : e("timeout of 30000ms occured while fetching resource: " + i)
                            }, o.responseType = "blob", o.timeout = 3e4, o.open("GET", i, !0), o.send(), f.impl.options.imagePlaceholder) {
                            var t = f.impl.options.imagePlaceholder.split(/,/);
                            t && t[1] && (r = t[1])
                        }
                    })
                },
                uid: (e = 0, function() {
                    return "u" + ("0000" + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4) + e++
                }),
                delay: function(n) {
                    return function(t) {
                        return new Promise(function(e) {
                            setTimeout(function() {
                                e(t)
                            }, n)
                        })
                    }
                },
                asArray: function(e) {
                    for (var t = [], n = e.length, r = 0; r < n; r++) t.push(e[r]);
                    return t
                },
                escapeXhtml: function(e) {
                    return e.replace(/#/g, "%23").replace(/\n/g, "%0A")
                },
                makeImage: function(r) {
                    return new Promise(function(e, t) {
                        var n = new Image;
                        n.onload = function() {
                            e(n)
                        }, n.onerror = t, n.src = r
                    })
                },
                width: function(e) {
                    var t = r(e, "border-left-width"),
                        n = r(e, "border-right-width");
                    return e.scrollWidth + t + n
                },
                height: function(e) {
                    var t = r(e, "border-top-width"),
                        n = r(e, "border-bottom-width");
                    return e.scrollHeight + t + n
                }
            };
            var e
        }(),
        i = function() {
            function e(e) {
                return -1 !== e.search(r)
            }

            function n(e) {
                for (var t, n = []; null !== (t = r.exec(e));) n.push(t[1]);
                return n.filter(function(e) {
                    return !l.isDataUrl(e)
                })
            }

            function i(t, n, r, e) {
                return Promise.resolve(n).then(function(e) {
                    return r ? l.resolveUrl(e, r) : e
                }).then(e || l.getAndEncode).then(function(e) {
                    return l.dataAsUrl(e, l.mimeType(n))
                }).then(function(e) {
                    return t.replace(function(e) {
                        return new RegExp("(url\\(['\"]?)(" + l.escape(e) + ")(['\"]?\\))", "g")
                    }(n), "$1" + e + "$3")
                })
            }
            var r = /url\(['"]?([^'"]+?)['"]?\)/g;
            return {
                inlineAll: function(t, r, o) {
                    return e(t) ? Promise.resolve(t).then(n).then(function(e) {
                        var n = Promise.resolve(t);
                        return e.forEach(function(t) {
                            n = n.then(function(e) {
                                return i(e, t, r, o)
                            })
                        }), n
                    }) : Promise.resolve(t)
                },
                shouldProcess: e,
                impl: {
                    readUrls: n,
                    inline: i
                }
            }
        }(),
        u = function() {
            function e() {
                function t(t) {
                    return {
                        resolve: function() {
                            var e = (t.parentStyleSheet || {}).href;
                            return i.inlineAll(t.cssText, e)
                        },
                        src: function() {
                            return t.style.getPropertyValue("src")
                        }
                    }
                }
                return Promise.resolve(l.asArray(document.styleSheets)).then(function(e) {
                    var n = [];
                    return e.forEach(function(t) {
                        try {
                            l.asArray(t.cssRules || []).forEach(n.push.bind(n))
                        } catch (e) {
                            console.log("Error while reading CSS rules from " + t.href, e.toString())
                        }
                    }), n
                }).then(function(e) {
                    return e.filter(function(e) {
                        return e.type === CSSRule.FONT_FACE_RULE
                    }).filter(function(e) {
                        return i.shouldProcess(e.style.getPropertyValue("src"))
                    })
                }).then(function(e) {
                    return e.map(t)
                })
            }
            return {
                resolveAll: function() {
                    return e(document).then(function(e) {
                        return Promise.all(e.map(function(e) {
                            return e.resolve()
                        }))
                    }).then(function(e) {
                        return e.join("\n")
                    })
                },
                impl: {
                    readAll: e
                }
            }
        }(),
        c = function() {
            function o(r) {
                return {
                    inline: function(e) {
                        return l.isDataUrl(r.src) ? Promise.resolve() : Promise.resolve(r.src).then(e || l.getAndEncode).then(function(e) {
                            return l.dataAsUrl(e, l.mimeType(r.src))
                        }).then(function(n) {
                            return new Promise(function(e, t) {
                                r.onload = e, r.onerror = t, r.src = n
                            })
                        })
                    }
                }
            }
            return {
                inlineAll: function t(e) {
                    return e instanceof Element ? ((r = (n = e).style.getPropertyValue("background")) ? i.inlineAll(r).then(function(e) {
                        n.style.setProperty("background", e, n.style.getPropertyPriority("background"))
                    }).then(function() {
                        return n
                    }) : Promise.resolve(n)).then(function() {
                        return e instanceof HTMLImageElement ? o(e).inline() : Promise.all(l.asArray(e.childNodes).map(function(e) {
                            return t(e)
                        }))
                    }) : Promise.resolve(e);
                    var n, r
                },
                impl: {
                    newImage: o
                }
            }
        }(),
        s = {
            imagePlaceholder: void 0,
            cacheBust: !1
        },
        f = {
            toSvg: t,
            toPng: function(e, t) {
                return n(e, t || {}).then(function(e) {
                    return e.toDataURL()
                })
            },
            toJpeg: function(e, t) {
                return n(e, t = t || {}).then(function(e) {
                    return e.toDataURL("image/jpeg", t.quality || 1)
                })
            },
            toBlob: function(e, t) {
                return n(e, t || {}).then(l.canvasToBlob)
            },
            toPixelData: function(t, e) {
                return n(t, e || {}).then(function(e) {
                    return e.getContext("2d").getImageData(0, 0, l.width(t), l.height(t)).data
                })
            },
            impl: {
                fontFaces: u,
                images: c,
                util: l,
                inliner: i,
                options: {}
            }
        };
    "undefined" != typeof module ? module.exports = f : e.domtoimage = f
}(this)