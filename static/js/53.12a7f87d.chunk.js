/*! For license information please see 53.12a7f87d.chunk.js.LICENSE.txt */
(this.webpackJsonpexcalidraw = this.webpackJsonpexcalidraw || []).push([
    [53], {
        211: function(e, t, i) {
            "use strict";
            i.r(t), t.default = async (e, t = [{}], i = null, a = !1) => {
                Array.isArray(t) || (t = [t]), t[0].fileName = t[0].fileName || "Untitled";
                const c = [];
                if (t.forEach(((t, i) => {
                        c[i] = {
                            description: t.description || "",
                            accept: {}
                        }, t.mimeTypes ? (0 === i && t.mimeTypes.push(e.type), t.mimeTypes.map((e => {
                            c[i].accept[e] = t.extensions || []
                        }))) : c[i].accept[e.type] = t.extensions || []
                    })), i) try {
                    await i.getFile()
                } catch (e) {
                    if (i = null, a) throw e
                }
                const s = i || await window.showSaveFilePicker({
                        suggestedName: t[0].fileName,
                        id: t[0].id,
                        startIn: t[0].startIn,
                        types: c,
                        excludeAcceptAllOption: t[0].excludeAcceptAllOption || !1
                    }),
                    n = await s.createWritable();
                return await n.write(e), await n.close(), s
            }
        }
    }
]);
//# sourceMappingURL=53.12a7f87d.chunk.js.map