/*! For license information please see 52.a0de24e1.chunk.js.LICENSE.txt */
(this.webpackJsonpexcalidraw = this.webpackJsonpexcalidraw || []).push([
    [52], {
        207: function(e, t, i) {
            "use strict";
            i.r(t);
            const c = async e => {
                const t = await e.getFile();
                return t.handle = e, t
            };
            t.default = async (e = [{}]) => {
                Array.isArray(e) || (e = [e]);
                const t = [];
                e.forEach(((e, i) => {
                    t[i] = {
                        description: e.description || "",
                        accept: {}
                    }, e.mimeTypes ? e.mimeTypes.map((c => {
                        t[i].accept[c] = e.extensions || []
                    })) : t[i].accept["*/*"] = e.extensions || []
                }));
                const i = await window.showOpenFilePicker({
                        id: e[0].id,
                        startIn: e[0].startIn,
                        types: t,
                        multiple: e[0].multiple || !1,
                        excludeAcceptAllOption: e[0].excludeAcceptAllOption || !1
                    }),
                    a = await Promise.all(i.map(c));
                return e[0].multiple ? a : a[0]
            }
        }
    }
]);
//# sourceMappingURL=52.a0de24e1.chunk.js.map