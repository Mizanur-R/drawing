/*! For license information please see 51.4a007480.chunk.js.LICENSE.txt */
(this.webpackJsonpexcalidraw = this.webpackJsonpexcalidraw || []).push([
    [51], {
        209: function(e, t, a) {
            "use strict";
            a.r(t);
            const i = async (e, t, a = e.name) => {
                const r = [],
                    n = [];
                for await (const c of e.values()) {
                    const s = "".concat(a, "/").concat(c.name);
                    "file" === c.kind ? n.push(c.getFile().then((t => (t.directoryHandle = e, Object.defineProperty(t, "webkitRelativePath", {
                        configurable: !0,
                        enumerable: !0,
                        get: () => s
                    }))))) : "directory" === c.kind && t && r.push(i(c, t, s))
                }
                return [...(await Promise.all(r)).flat(), ...await Promise.all(n)]
            };
            t.default = async (e = {}) => {
                e.recursive = e.recursive || !1;
                const t = await window.showDirectoryPicker({
                    id: e.id,
                    startIn: e.startIn
                });
                return i(t, e.recursive)
            }
        }
    }
]);
//# sourceMappingURL=51.4a007480.chunk.js.map