(this.webpackJsonpexcalidraw = this.webpackJsonpexcalidraw || []).push([
    [43],
    [, function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return s
        })), n.d(t, "l", (function() {
            return a
        })), n.d(t, "w", (function() {
            return r
        })), n.d(t, "m", (function() {
            return l
        })), n.d(t, "n", (function() {
            return c
        })), n.d(t, "I", (function() {
            return d
        })), n.d(t, "F", (function() {
            return h
        })), n.d(t, "d", (function() {
            return u
        })), n.d(t, "D", (function() {
            return p
        })), n.d(t, "p", (function() {
            return m
        })), n.d(t, "o", (function() {
            return g
        })), n.d(t, "c", (function() {
            return b
        })), n.d(t, "t", (function() {
            return y
        })), n.d(t, "Q", (function() {
            return v
        })), n.d(t, "g", (function() {
            return f
        })), n.d(t, "f", (function() {
            return x
        })), n.d(t, "h", (function() {
            return w
        })), n.d(t, "k", (function() {
            return j
        })), n.d(t, "j", (function() {
            return E
        })), n.d(t, "u", (function() {
            return S
        })), n.d(t, "y", (function() {
            return C
        })), n.d(t, "q", (function() {
            return O
        })), n.d(t, "s", (function() {
            return k
        })), n.d(t, "G", (function() {
            return I
        })), n.d(t, "H", (function() {
            return A
        })), n.d(t, "M", (function() {
            return T
        })), n.d(t, "K", (function() {
            return M
        })), n.d(t, "L", (function() {
            return L
        })), n.d(t, "P", (function() {
            return P
        })), n.d(t, "E", (function() {
            return _
        })), n.d(t, "R", (function() {
            return D
        })), n.d(t, "v", (function() {
            return R
        })), n.d(t, "a", (function() {
            return z
        })), n.d(t, "z", (function() {
            return N
        })), n.d(t, "J", (function() {
            return B
        })), n.d(t, "O", (function() {
            return H
        })), n.d(t, "N", (function() {
            return V
        })), n.d(t, "i", (function() {
            return F
        })), n.d(t, "C", (function() {
            return U
        })), n.d(t, "B", (function() {
            return G
        })), n.d(t, "A", (function() {
            return W
        })), n.d(t, "x", (function() {
            return K
        })), n.d(t, "r", (function() {
            return Y
        })), n.d(t, "e", (function() {
            return X
        }));
        var o = n(36),
            i = n.n(o);
        const s = "Excalidraw",
            a = 10,
            r = 8,
            l = 5,
            c = 1,
            d = 30,
            h = Math.PI / 12,
            u = {
                TEXT: "text",
                CROSSHAIR: "crosshair",
                GRABBING: "grabbing",
                GRAB: "grab",
                POINTER: "pointer",
                MOVE: "move",
                AUTO: ""
            },
            p = {
                MAIN: 0,
                WHEEL: 1,
                SECONDARY: 2,
                TOUCH: -1
            };
        let m;
        ! function(e) {
            e.COPY = "copy", e.PASTE = "paste", e.CUT = "cut", e.KEYDOWN = "keydown", e.KEYUP = "keyup", e.MOUSE_MOVE = "mousemove", e.RESIZE = "resize", e.UNLOAD = "unload", e.FOCUS = "focus", e.BLUR = "blur", e.DRAG_OVER = "dragover", e.DROP = "drop", e.GESTURE_END = "gestureend", e.BEFORE_UNLOAD = "beforeunload", e.GESTURE_START = "gesturestart", e.GESTURE_CHANGE = "gesturechange", e.POINTER_MOVE = "pointermove", e.POINTER_UP = "pointerup", e.STATE_CHANGE = "statechange", e.WHEEL = "wheel", e.TOUCH_START = "touchstart", e.TOUCH_END = "touchend", e.HASHCHANGE = "hashchange", e.VISIBILITY_CHANGE = "visibilitychange", e.SCROLL = "scroll"
        }(m || (m = {}));
        const g = {
                TEST: "test",
                DEVELOPMENT: "development"
            },
            b = {
                SHAPE_ACTIONS_MENU: "App-menu__left"
            },
            y = {
                Virgil: 1,
                Helvetica: 2,
                Cascadia: 3
            },
            v = "Segoe UI Emoji",
            f = 20,
            x = y.Virgil,
            w = "left",
            j = "top",
            E = "{version}",
            S = 20,
            C = {
                excalidraw: "application/vnd.excalidraw+json",
                excalidrawlib: "application/vnd.excalidrawlib+json"
            },
            O = {
                excalidraw: "excalidraw",
                excalidrawClipboard: "excalidraw/clipboard",
                excalidrawLibrary: "excalidrawlib"
            },
            k = window.location.origin,
            I = {
                LOCAL_STORAGE_LIBRARY: "excalidraw-library"
            },
            A = 300,
            T = 500,
            M = 1e4,
            L = 5e3,
            P = 3e4,
            _ = 100,
            D = .1,
            R = 6e4,
            z = 3e3,
            N = {
                VIEW: "viewMode",
                ZEN: "zenMode",
                GRID: "gridMode"
            },
            B = i.a.themeFilter,
            H = {
                addLibrary: "addLibrary"
            },
            V = {
                addLibrary: "addLibrary"
            },
            F = {
                canvasActions: {
                    changeViewBackgroundColor: !0,
                    clearCanvas: !0,
                    export: {
                        saveFileToDisk: !0
                    },
                    loadScene: !0,
                    saveToActiveFile: !0,
                    theme: !0,
                    saveAsImage: !0
                }
            },
            U = 730,
            G = 1e3,
            W = 500,
            K = 2,
            Y = [1, 2, 3],
            X = 10
    }, , , , , , , function(e, t, n) {
        "use strict";
        (function(e) {
            var o, i;
            n.d(t, "a", (function() {
                return s
            }));
            const s = "undefined" !== typeof e && (null === (o = Object({
                NODE_ENV: "production",
                PUBLIC_URL: ".",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
                REACT_APP_VERCEL_GIT_COMMIT_SHA: "982cba20352f1e8be5d06c60d8030f96d2372c0f",
                REACT_APP_VERCEL_URL: "excalidraw-92ci8ek81-excalidraw.vercel.app",
                REACT_APP_GIT_SHA: "982cba20352f1e8be5d06c60d8030f96d2372c0f",
                REACT_APP_VERCEL_ENV: "production",
                REACT_APP_VERCEL_GIT_COMMIT_AUTHOR_LOGIN: "excalibot",
                REACT_APP_VERCEL_GIT_PROVIDER: "github",
                REACT_APP_VERCEL_GIT_COMMIT_AUTHOR_NAME: "Excalidraw Bot",
                REACT_APP_VERCEL_GIT_REPO_OWNER: "excalidraw",
                REACT_APP_VERCEL_GIT_REPO_SLUG: "excalidraw",
                REACT_APP_VERCEL_GIT_COMMIT_MESSAGE: "chore: Update translations from Crowdin (#3996)",
                REACT_APP_VERCEL_GIT_REPO_ID: "231283452",
                REACT_APP_VERCEL_GIT_COMMIT_REF: "master",
                REACT_APP_GOOGLE_ANALYTICS_ID: "UA-387204-13",
                REACT_APP_BACKEND_V1_GET_URL: "https://json.excalidraw.com/api/v1/",
                REACT_APP_BACKEND_V2_GET_URL: "https://json.excalidraw.com/api/v2/",
                REACT_APP_BACKEND_V2_POST_URL: "https://json.excalidraw.com/api/v2/post/",
                REACT_APP_SOCKET_SERVER_URL: "https://portal.excalidraw.com",
                REACT_APP_FIREBASE_CONFIG: '{"apiKey":"AIzaSyAd15pYlMci_xIp9ko6wkEsDzAAA0Dn0RU","authDomain":"excalidraw-room-persistence.firebaseapp.com","databaseURL":"https://excalidraw-room-persistence.firebaseio.com","projectId":"excalidraw-room-persistence","storageBucket":"excalidraw-room-persistence.appspot.com","messagingSenderId":"654800341332","appId":"1:654800341332:web:4a692de832b55bd57ce0c1"}'
            })) || void 0 === o ? void 0 : o.REACT_APP_GOOGLE_ANALYTICS_ID) && "undefined" !== typeof window && window.gtag ? (e, t, n, o) => {
                window.gtag("event", t, {
                    event_category: e,
                    event_label: n,
                    value: o
                })
            } : ("undefined" !== typeof e && (null === (i = Object({
                NODE_ENV: "production",
                PUBLIC_URL: ".",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
                REACT_APP_VERCEL_GIT_COMMIT_SHA: "982cba20352f1e8be5d06c60d8030f96d2372c0f",
                REACT_APP_VERCEL_URL: "excalidraw-92ci8ek81-excalidraw.vercel.app",
                REACT_APP_GIT_SHA: "982cba20352f1e8be5d06c60d8030f96d2372c0f",
                REACT_APP_VERCEL_ENV: "production",
                REACT_APP_VERCEL_GIT_COMMIT_AUTHOR_LOGIN: "excalibot",
                REACT_APP_VERCEL_GIT_PROVIDER: "github",
                REACT_APP_VERCEL_GIT_COMMIT_AUTHOR_NAME: "Excalidraw Bot",
                REACT_APP_VERCEL_GIT_REPO_OWNER: "excalidraw",
                REACT_APP_VERCEL_GIT_REPO_SLUG: "excalidraw",
                REACT_APP_VERCEL_GIT_COMMIT_MESSAGE: "chore: Update translations from Crowdin (#3996)",
                REACT_APP_VERCEL_GIT_REPO_ID: "231283452",
                REACT_APP_VERCEL_GIT_COMMIT_REF: "master",
                REACT_APP_GOOGLE_ANALYTICS_ID: "UA-387204-13",
                REACT_APP_BACKEND_V1_GET_URL: "https://json.excalidraw.com/api/v1/",
                REACT_APP_BACKEND_V2_GET_URL: "https://json.excalidraw.com/api/v2/",
                REACT_APP_BACKEND_V2_POST_URL: "https://json.excalidraw.com/api/v2/post/",
                REACT_APP_SOCKET_SERVER_URL: "https://portal.excalidraw.com",
                REACT_APP_FIREBASE_CONFIG: '{"apiKey":"AIzaSyAd15pYlMci_xIp9ko6wkEsDzAAA0Dn0RU","authDomain":"excalidraw-room-persistence.firebaseapp.com","databaseURL":"https://excalidraw-room-persistence.firebaseio.com","projectId":"excalidraw-room-persistence","storageBucket":"excalidraw-room-persistence.appspot.com","messagingSenderId":"654800341332","appId":"1:654800341332:web:4a692de832b55bd57ce0c1"}'
            })) || void 0 === i || i.JEST_WORKER_ID), (e, t, n, o) => {})
        }).call(this, n(34))
    }, , , , , , , , , , , , , , , , function(e, t, n) {}, , , , , , function(e) {
        e.exports = JSON.parse('{"labels":{"paste":"Paste","pasteCharts":"Paste charts","selectAll":"Select all","multiSelect":"Add element to selection","moveCanvas":"Move canvas","cut":"Cut","copy":"Copy","copyAsPng":"Copy to clipboard as PNG","copyAsSvg":"Copy to clipboard as SVG","bringForward":"Bring forward","sendToBack":"Send to back","bringToFront":"Bring to front","sendBackward":"Send backward","delete":"Delete","copyStyles":"Copy styles","pasteStyles":"Paste styles","stroke":"Stroke","background":"Background","fill":"Fill","strokeWidth":"Stroke width","strokeShape":"Stroke shape","strokeShape_gel":"Gel pen","strokeShape_fountain":"Fountain pen","strokeShape_brush":"Brush pen","strokeStyle":"Stroke style","strokeStyle_solid":"Solid","strokeStyle_dashed":"Dashed","strokeStyle_dotted":"Dotted","sloppiness":"Sloppiness","opacity":"Opacity","textAlign":"Text align","edges":"Edges","sharp":"Sharp","round":"Round","arrowheads":"Arrowheads","arrowhead_none":"None","arrowhead_arrow":"Arrow","arrowhead_bar":"Bar","arrowhead_dot":"Dot","fontSize":"Font size","fontFamily":"Font family","onlySelected":"Only selected","withBackground":"Background","exportEmbedScene":"Embed scene","exportEmbedScene_details":"Scene data will be saved into the exported PNG/SVG file so that the scene can be restored from it.\\nWill increase exported file size.","addWatermark":"Add \\"Made with Excalidraw\\"","handDrawn":"Hand-drawn","normal":"Normal","code":"Code","small":"Small","medium":"Medium","large":"Large","veryLarge":"Very large","solid":"Solid","hachure":"Hachure","crossHatch":"Cross-hatch","thin":"Thin","bold":"Bold","left":"Left","center":"Center","right":"Right","extraBold":"Extra bold","architect":"Architect","artist":"Artist","cartoonist":"Cartoonist","fileTitle":"File name","colorPicker":"Color picker","canvasBackground":"Canvas background","drawingCanvas":"Drawing canvas","layers":"Layers","actions":"Actions","language":"Language","liveCollaboration":"Live collaboration","duplicateSelection":"Duplicate","untitled":"Untitled","name":"Name","yourName":"Your name","madeWithExcalidraw":"Made with Excalidraw","group":"Group selection","ungroup":"Ungroup selection","collaborators":"Collaborators","showGrid":"Show grid","addToLibrary":"Add to library","removeFromLibrary":"Remove from library","libraryLoadingMessage":"Loading library\u2026","libraries":"Browse libraries","loadingScene":"Loading scene\u2026","align":"Align","alignTop":"Align top","alignBottom":"Align bottom","alignLeft":"Align left","alignRight":"Align right","centerVertically":"Center vertically","centerHorizontally":"Center horizontally","distributeHorizontally":"Distribute horizontally","distributeVertically":"Distribute vertically","flipHorizontal":"Flip horizontal","flipVertical":"Flip vertical","viewMode":"View mode","toggleExportColorScheme":"Toggle export color scheme","share":"Share","showStroke":"Show stroke color picker","showBackground":"Show background color picker","toggleTheme":"Toggle theme"},"buttons":{"clearReset":"Reset the canvas","exportJSON":"Export to file","exportImage":"Save as image","export":"Export","exportToPng":"Export to PNG","exportToSvg":"Export to SVG","copyToClipboard":"Copy to clipboard","copyPngToClipboard":"Copy PNG to clipboard","scale":"Scale","save":"Save to current file","saveAs":"Save as","load":"Load","getShareableLink":"Get shareable link","close":"Close","selectLanguage":"Select language","scrollBackToContent":"Scroll back to content","zoomIn":"Zoom in","zoomOut":"Zoom out","resetZoom":"Reset zoom","menu":"Menu","done":"Done","edit":"Edit","undo":"Undo","redo":"Redo","resetLibrary":"Reset library","createNewRoom":"Create new room","fullScreen":"Full screen","darkMode":"Dark mode","lightMode":"Light mode","zenMode":"Zen mode","exitZenMode":"Exit zen mode"},"alerts":{"clearReset":"This will clear the whole canvas. Are you sure?","couldNotCreateShareableLink":"Couldn\'t create shareable link.","couldNotCreateShareableLinkTooBig":"Couldn\'t create shareable link: the scene is too big","couldNotLoadInvalidFile":"Couldn\'t load invalid file","importBackendFailed":"Importing from backend failed.","cannotExportEmptyCanvas":"Cannot export empty canvas.","couldNotCopyToClipboard":"Couldn\'t copy to clipboard. Try using Chrome browser.","decryptFailed":"Couldn\'t decrypt data.","uploadedSecurly":"The upload has been secured with end-to-end encryption, which means that Excalidraw server and third parties can\'t read the content.","loadSceneOverridePrompt":"Loading external drawing will replace your existing content. Do you wish to continue?","collabStopOverridePrompt":"Stopping the session will overwrite your previous, locally stored drawing. Are you sure?\\n\\n(If you want to keep your local drawing, simply close the browser tab instead.)","errorLoadingLibrary":"There was an error loading the third party library.","errorAddingToLibrary":"Couldn\'t add item to the library","errorRemovingFromLibrary":"Couldn\'t remove item from the library","confirmAddLibrary":"This will add {{numShapes}} shape(s) to your library. Are you sure?","imageDoesNotContainScene":"Importing images isn\'t supported at the moment.\\n\\nDid you want to import a scene? This image does not seem to contain any scene data. Have you enabled this during export?","cannotRestoreFromImage":"Scene couldn\'t be restored from this image file","invalidSceneUrl":"Couldn\'t import scene from the supplied URL. It\'s either malformed, or doesn\'t contain valid Excalidraw JSON data.","resetLibrary":"This will clear your library. Are you sure?","invalidEncryptionKey":"Encryption key must be of 22 characters. Live collaboration is disabled."},"toolBar":{"selection":"Selection","rectangle":"Rectangle","diamond":"Diamond","ellipse":"Ellipse","arrow":"Arrow","line":"Line","freedraw":"Draw","text":"Text","library":"Library","lock":"Keep selected tool active after drawing"},"headings":{"canvasActions":"Canvas actions","selectedShapeActions":"Selected shape actions","shapes":"Shapes"},"hints":{"linearElement":"Click to start multiple points, drag for single line","freeDraw":"Click and drag, release when you\'re finished","text":"Tip: you can also add text by double-clicking anywhere with the selection tool","text_selected":"Double-click or press ENTER to edit text","text_editing":"Press Escape or CtrlOrCmd+ENTER to finish editing","linearElementMulti":"Click on last point or press Escape or Enter to finish","lockAngle":"You can constrain angle by holding SHIFT","resize":"You can constrain proportions by holding SHIFT while resizing,\\nhold ALT to resize from the center","rotate":"You can constrain angles by holding SHIFT while rotating","lineEditor_info":"Double-click or press Enter to edit points","lineEditor_pointSelected":"Press Delete to remove point, CtrlOrCmd+D to duplicate, or drag to move","lineEditor_nothingSelected":"Select a point to move or remove, or hold Alt and click to add new points"},"canvasError":{"cannotShowPreview":"Cannot show preview","canvasTooBig":"The canvas may be too big.","canvasTooBigTip":"Tip: try moving the farthest elements a bit closer together."},"errorSplash":{"headingMain_pre":"Encountered an error. Try ","headingMain_button":"reloading the page.","clearCanvasMessage":"If reloading doesn\'t work, try ","clearCanvasMessage_button":"clearing the canvas.","clearCanvasCaveat":" This will result in loss of work ","trackedToSentry_pre":"The error with identifier ","trackedToSentry_post":" was tracked on our system.","openIssueMessage_pre":"We were very cautious not to include your scene information on the error. If your scene is not private, please consider following up on our ","openIssueMessage_button":"bug tracker.","openIssueMessage_post":" Please include information below by copying and pasting into the GitHub issue.","sceneContent":"Scene content:"},"roomDialog":{"desc_intro":"You can invite people to your current scene to collaborate with you.","desc_privacy":"Don\'t worry, the session uses end-to-end encryption, so whatever you draw will stay private. Not even our server will be able to see what you come up with.","button_startSession":"Start session","button_stopSession":"Stop session","desc_inProgressIntro":"Live-collaboration session is now in progress.","desc_shareLink":"Share this link with anyone you want to collaborate with:","desc_exitSession":"Stopping the session will disconnect you from the room, but you\'ll be able to continue working with the scene, locally. Note that this won\'t affect other people, and they\'ll still be able to collaborate on their version.","shareTitle":"Join a live collaboration session on Excalidraw"},"errorDialog":{"title":"Error"},"exportDialog":{"disk_title":"Save to disk","disk_details":"Export the scene data to a file from which you can import later.","disk_button":"Save to file","link_title":"Shareable link","link_details":"Export as a read-only link.","link_button":"Export to Link","excalidrawplus_description":"Save the scene to your Excalidraw+ workspace.","excalidrawplus_button":"Export","excalidrawplus_exportError":"Couldn\'t export to Excalidraw+ at this moment..."},"helpDialog":{"blog":"Read our blog","click":"click","curvedArrow":"Curved arrow","curvedLine":"Curved line","documentation":"Documentation","doubleClick":"double-click","drag":"drag","editor":"Editor","editSelectedShape":"Edit selected shape (text/arrow/line)","github":"Found an issue? Submit","howto":"Follow our guides","or":"or","preventBinding":"Prevent arrow binding","shapes":"Shapes","shortcuts":"Keyboard shortcuts","textFinish":"Finish editing (text editor)","textNewLine":"Add new line (text editor)","title":"Help","view":"View","zoomToFit":"Zoom to fit all elements","zoomToSelection":"Zoom to selection"},"encrypted":{"tooltip":"Your drawings are end-to-end encrypted so Excalidraw\'s servers will never see them.","link":"Blog post on end-to-end encryption in Excalidraw"},"stats":{"angle":"Angle","element":"Element","elements":"Elements","height":"Height","scene":"Scene","selected":"Selected","storage":"Storage","title":"Stats for nerds","total":"Total","version":"Version","versionCopy":"Click to copy","versionNotAvailable":"Version not available","width":"Width"},"toast":{"copyStyles":"Copied styles.","copyToClipboard":"Copied to clipboard.","copyToClipboardAsPng":"Copied {{exportSelection}} to clipboard as PNG\\n({{exportColorScheme}})","fileSaved":"File saved.","fileSavedToFilename":"Saved to {filename}","canvas":"canvas","selection":"selection"},"colors":{"495057":"Gray 7","ffffff":"White","f8f9fa":"Gray 0","f1f3f5":"Gray 1","fff5f5":"Red 0","fff0f6":"Pink 0","f8f0fc":"Grape 0","f3f0ff":"Violet 0","edf2ff":"Indigo 0","e7f5ff":"Blue 0","e3fafc":"Cyan 0","e6fcf5":"Teal 0","ebfbee":"Green 0","f4fce3":"Lime 0","fff9db":"Yellow 0","fff4e6":"Orange 0","transparent":"Transparent","ced4da":"Gray 4","868e96":"Gray 6","fa5252":"Red 6","e64980":"Pink 6","be4bdb":"Grape 6","7950f2":"Violet 6","4c6ef5":"Indigo 6","228be6":"Blue 6","15aabf":"Cyan 6","12b886":"Teal 6","40c057":"Green 6","82c91e":"Lime 6","fab005":"Yellow 6","fd7e14":"Orange 6","000000":"Black","343a40":"Gray 8","c92a2a":"Red 9","a61e4d":"Pink 9","862e9c":"Grape 9","5f3dc4":"Violet 9","364fc7":"Indigo 9","1864ab":"Blue 9","0b7285":"Cyan 9","087f5b":"Teal 9","2b8a3e":"Green 9","5c940d":"Lime 9","e67700":"Yellow 9","d9480f":"Orange 9"}}')
    }, function(e) {
        e.exports = JSON.parse('{"ar-SA":100,"bg-BG":68,"ca-ES":84,"cs-CZ":29,"da-DK":20,"de-DE":100,"el-GR":74,"en":100,"es-ES":100,"fa-IR":77,"fi-FI":100,"fr-FR":100,"he-IL":99,"hi-IN":67,"hu-HU":60,"id-ID":100,"it-IT":100,"ja-JP":100,"kab-KAB":93,"kk-KZ":26,"ko-KR":68,"lv-LV":14,"my-MM":56,"nb-NO":100,"nl-NL":100,"nn-NO":74,"oc-FR":100,"pa-IN":99,"pl-PL":70,"pt-BR":100,"pt-PT":99,"ro-RO":100,"ru-RU":99,"sk-SK":100,"sv-SE":100,"tr-TR":78,"uk-UA":80,"zh-CN":100,"zh-TW":100}')
    }, , function(e) {
        e.exports = JSON.parse('{"name":"@excalidraw/excalidraw","version":"0.9.0","main":"main.js","types":"types/packages/excalidraw/index.d.ts","files":["dist/*","types/*"],"publishConfig":{"access":"public"},"description":"Excalidraw as a React component","repository":"https://github.com/excalidraw/excalidraw","license":"MIT","keywords":["excalidraw","excalidraw-embed","react","npm","npm excalidraw"],"browserslist":{"production":[">0.2%","not dead","not ie <= 11","not op_mini all","not safari < 12","not kaios <= 2.5","not edge < 79","not chrome < 70","not and_uc < 13","not samsung < 10"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"peerDependencies":{"react":"^17.0.2","react-dom":"^17.0.2"},"devDependencies":{"@babel/core":"7.14.8","@babel/plugin-transform-arrow-functions":"7.14.5","@babel/plugin-transform-async-to-generator":"7.14.5","@babel/plugin-transform-runtime":"7.14.5","@babel/plugin-transform-typescript":"7.14.6","@babel/preset-env":"7.14.9","@babel/preset-react":"7.14.5","@babel/preset-typescript":"7.14.5","autoprefixer":"10.3.1","babel-loader":"8.2.2","babel-plugin-transform-class-properties":"6.24.1","cross-env":"7.0.3","css-loader":"5.2.6","file-loader":"6.2.0","mini-css-extract-plugin":"1.6.1","postcss-loader":"6.1.1","sass-loader":"12.1.0","terser-webpack-plugin":"5.1.4","ts-loader":"9.2.4","typescript":"4.3.5","webpack":"5.50.0","webpack-bundle-analyzer":"4.4.2","webpack-cli":"4.7.2"},"bugs":"https://github.com/excalidraw/excalidraw/issues","homepage":"https://github.com/excalidraw/excalidraw/tree/master/src/packages/excalidraw","scripts":{"gen:types":"tsc --project ../../../tsconfig-types.json","build:umd":"cross-env NODE_ENV=production webpack --config webpack.prod.config.js && cross-env NODE_ENV=development webpack --config webpack.dev.config.js && yarn gen:types","build:umd:withAnalyzer":"cross-env NODE_ENV=production ANALYZER=true webpack --config webpack.prod.config.js","pack":"yarn build:umd && yarn pack"}}')
    }, , function(e, t, n) {}, function(e, t, n) {
        e.exports = {
            themeFilter: "invert(93%) hue-rotate(180deg)"
        }
    }, , , , , , , , , , , function(e, t, n) {
        var o = {
            "./ar-SA.json": [82, 4],
            "./bg-BG.json": [83, 5],
            "./ca-ES.json": [84, 6],
            "./cs-CZ.json": [85, 7],
            "./da-DK.json": [86, 8],
            "./de-DE.json": [87, 9],
            "./el-GR.json": [88, 10],
            "./en.json": [30],
            "./es-ES.json": [89, 11],
            "./fa-IR.json": [90, 12],
            "./fi-FI.json": [91, 13],
            "./fr-FR.json": [92, 14],
            "./he-IL.json": [93, 15],
            "./hi-IN.json": [94, 16],
            "./hu-HU.json": [95, 17],
            "./id-ID.json": [96, 18],
            "./it-IT.json": [97, 19],
            "./ja-JP.json": [98, 20],
            "./kab-KAB.json": [99, 21],
            "./kk-KZ.json": [100, 22],
            "./ko-KR.json": [101, 23],
            "./lv-LV.json": [102, 24],
            "./my-MM.json": [103, 25],
            "./nb-NO.json": [104, 26],
            "./nl-NL.json": [105, 27],
            "./nn-NO.json": [106, 28],
            "./oc-FR.json": [107, 29],
            "./pa-IN.json": [108, 30],
            "./percentages.json": [31],
            "./pl-PL.json": [109, 31],
            "./pt-BR.json": [110, 32],
            "./pt-PT.json": [111, 33],
            "./ro-RO.json": [112, 34],
            "./ru-RU.json": [113, 35],
            "./sk-SK.json": [114, 36],
            "./sv-SE.json": [115, 37],
            "./tr-TR.json": [116, 38],
            "./uk-UA.json": [117, 39],
            "./zh-CN.json": [118, 40],
            "./zh-TW.json": [119, 41]
        };

        function i(e) {
            if (!n.o(o, e)) return Promise.resolve().then((function() {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }));
            var t = o[e],
                i = t[0];
            return Promise.all(t.slice(1).map(n.e)).then((function() {
                return n.t(i, 3)
            }))
        }
        i.keys = function() {
            return Object.keys(o)
        }, i.id = 47, e.exports = i
    }, , function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, , function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(2),
            i = n.n(o),
            s = n(11),
            a = n.n(s),
            r = n(40),
            l = n(8),
            c = n(5),
            d = n(1),
            h = n(30),
            u = n(31);
        const p = {
                code: "en",
                label: "English"
            },
            m = [{
                code: "ar-SA",
                label: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
                rtl: !0
            }, {
                code: "bg-BG",
                label: "\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438"
            }, {
                code: "ca-ES",
                label: "Catal\xe0"
            }, {
                code: "de-DE",
                label: "Deutsch"
            }, {
                code: "el-GR",
                label: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac"
            }, {
                code: "es-ES",
                label: "Espa\xf1ol"
            }, {
                code: "fa-IR",
                label: "\u0641\u0627\u0631\u0633\u06cc",
                rtl: !0
            }, {
                code: "fi-FI",
                label: "Suomi"
            }, {
                code: "fr-FR",
                label: "Fran\xe7ais"
            }, {
                code: "he-IL",
                label: "\u05e2\u05d1\u05e8\u05d9\u05ea",
                rtl: !0
            }, {
                code: "hi-IN",
                label: "\u0939\u093f\u0928\u094d\u0926\u0940"
            }, {
                code: "hu-HU",
                label: "Magyar"
            }, {
                code: "id-ID",
                label: "Bahasa Indonesia"
            }, {
                code: "it-IT",
                label: "Italiano"
            }, {
                code: "ja-JP",
                label: "\u65e5\u672c\u8a9e"
            }, {
                code: "kab-KAB",
                label: "Taqbaylit"
            }, {
                code: "ko-KR",
                label: "\ud55c\uad6d\uc5b4"
            }, {
                code: "my-MM",
                label: "Burmese"
            }, {
                code: "nb-NO",
                label: "Norsk bokm\xe5l"
            }, {
                code: "nl-NL",
                label: "Nederlands"
            }, {
                code: "nn-NO",
                label: "Norsk nynorsk"
            }, {
                code: "oc-FR",
                label: "Occitan"
            }, {
                code: "pa-IN",
                label: "\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40"
            }, {
                code: "pl-PL",
                label: "Polski"
            }, {
                code: "pt-BR",
                label: "Portugu\xeas Brasileiro"
            }, {
                code: "pt-PT",
                label: "Portugu\xeas"
            }, {
                code: "ro-RO",
                label: "Rom\xe2n\u0103"
            }, {
                code: "ru-RU",
                label: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439"
            }, {
                code: "sk-SK",
                label: "Sloven\u010dina"
            }, {
                code: "sv-SE",
                label: "Svenska"
            }, {
                code: "tr-TR",
                label: "T\xfcrk\xe7e"
            }, {
                code: "uk-UA",
                label: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430"
            }, {
                code: "zh-CN",
                label: "\u7b80\u4f53\u4e2d\u6587"
            }, {
                code: "zh-TW",
                label: "\u7e41\u9ad4\u4e2d\u6587"
            }, {
                code: "lv-LV",
                label: "Latvie\u0161u"
            }, {
                code: "cs-CZ",
                label: "\u010cesky"
            }, {
                code: "kk-KZ",
                label: "\u049a\u0430\u0437\u0430\u049b \u0442\u0456\u043b\u0456"
            }].concat([p]).sort(((e, t) => e.label > t.label ? 1 : -1)).filter((e => u[e.code] >= 85)),
            g = "__test__";
        "production" === d.o.DEVELOPMENT && m.unshift({
            code: g,
            label: "test language"
        }, {
            code: "".concat(g, ".rtl"),
            label: "\u202atest language (rtl)\u202c",
            rtl: !0
        });
        let b = p,
            y = {};
        const v = async e => {
                b = e, document.documentElement.dir = b.rtl ? "rtl" : "ltr", document.documentElement.lang = b.code, y = e.code.startsWith(g) ? {} : await n(47)("./".concat(b.code, ".json"))
            },
            f = () => b,
            x = (e, t) => {
                for (let n = 0; n < t.length; ++n) {
                    const o = t[n];
                    if (void 0 === e[o]) return;
                    e = e[o]
                }
                if ("string" === typeof e) return e
            },
            w = (e, t) => {
                if (b.code.startsWith(g)) {
                    const n = t ? "".concat(e, "(").concat(JSON.stringify(t).slice(1, -1), ")") : e;
                    return "\u202a[[".concat(n, "]]\u202c")
                }
                const n = e.split(".");
                let o = x(y, n) || x(h, n);
                if (void 0 === o) throw new Error("Can't find translation for ".concat(e));
                if (t)
                    for (const i in t) o = o.replace("{{".concat(i, "}}"), t[i]);
                return o
            },
            j = e => [c.red[e], c.pink[e], c.grape[e], c.violet[e], c.indigo[e], c.blue[e], c.cyan[e], c.teal[e], c.green[e], c.lime[e], c.yellow[e], c.orange[e]];
        var E = {
            canvasBackground: [c.white, c.gray[0], c.gray[1], ...j(0)],
            elementBackground: ["transparent", c.gray[4], c.gray[6], ...j(6)],
            elementStroke: [c.black, c.gray[8], c.gray[7], ...j(9)]
        };
        const S = /Mac|iPod|iPhone|iPad/.test(window.navigator.platform),
            C = /^Win/.test(window.navigator.platform),
            O = "Equal",
            k = "Minus",
            I = "NumpadAdd",
            A = "NumpadSubtract",
            T = "Numpad0",
            M = "BracketRight",
            L = "BracketLeft",
            P = "Digit1",
            _ = "Digit2",
            D = "Digit9",
            R = "Quote",
            z = "Digit0",
            N = "Slash",
            B = "KeyC",
            H = "KeyD",
            V = "KeyG",
            F = "KeyF",
            U = "KeyH",
            G = "KeyV",
            W = "KeyX",
            K = "KeyZ",
            Y = "KeyR",
            X = "ArrowDown",
            Z = "ArrowLeft",
            q = "ArrowRight",
            J = "ArrowUp",
            Q = "Backspace",
            $ = "Alt",
            ee = S ? "metaKey" : "ctrlKey",
            te = "Delete",
            ne = "Enter",
            oe = "Escape",
            ie = "?",
            se = " ",
            ae = "Tab",
            re = "a",
            le = "d",
            ce = "e",
            de = "g",
            he = "l",
            ue = "o",
            pe = "p",
            me = "q",
            ge = "r",
            be = "s",
            ye = "t",
            ve = "v",
            fe = "x",
            xe = "y",
            we = "z",
            je = e => e === Z || e === q || e === X || e === J,
            Ee = e => e.altKey,
            Se = e => e.shiftKey,
            Ce = e => e.shiftKey,
            Oe = "http://www.w3.org/2000/svg";
        let ke = null;
        const Ie = () => {
                if (ke) return ke;
                const e = new Date,
                    t = e.getFullYear(),
                    n = "".concat(e.getMonth() + 1).padStart(2, "0"),
                    o = "".concat(e.getDate()).padStart(2, "0"),
                    i = "".concat(e.getHours()).padStart(2, "0"),
                    s = "".concat(e.getMinutes()).padStart(2, "0");
                return "".concat(t, "-").concat(n, "-").concat(o, "-").concat(i).concat(s)
            },
            Ae = e => e.charAt(0).toUpperCase() + e.slice(1),
            Te = e => e instanceof HTMLElement && "wysiwyg" === e.dataset.type || e instanceof HTMLBRElement || e instanceof HTMLTextAreaElement || e instanceof HTMLInputElement && ("text" === e.type || "number" === e.type),
            Me = ({
                fontFamily: e
            }) => {
                for (const [t, n] of Object.entries(d.t))
                    if (n === e) return "".concat(t, ", ").concat(d.Q);
                return d.Q
            },
            Le = ({
                fontSize: e,
                fontFamily: t
            }) => "".concat(e, "px ").concat(Me({
                fontFamily: t
            })),
            Pe = (e, t) => {
                const n = document.createElement("div"),
                    o = document.body;
                n.style.position = "absolute", n.style.whiteSpace = "pre", n.style.font = t, o.appendChild(n), n.innerText = e.split("\n").map((e => e || " ")).join("\n");
                const i = n.offsetWidth,
                    s = n.offsetHeight,
                    a = document.createElement("span");
                a.style.display = "inline-block", a.style.overflow = "hidden", a.style.width = "1px", a.style.height = "1px", n.appendChild(a);
                const r = a.offsetTop + a.offsetHeight;
                return document.body.removeChild(n), {
                    width: i,
                    height: s,
                    baseline: r
                }
            },
            _e = (e, t) => {
                let n = 0,
                    o = null;
                const i = (...i) => {
                    o = i, clearTimeout(n), n = window.setTimeout((() => {
                        o = null, e(...i)
                    }), t)
                };
                return i.flush = () => {
                    if (clearTimeout(n), o) {
                        const t = o;
                        o = null, e(...t)
                    }
                }, i.cancel = () => {
                    o = null, clearTimeout(n)
                }, i
            },
            De = (e, t) => Math.abs(e - t),
            Re = e => {
                e && (e.style.cursor = "")
            },
            ze = (e, t) => {
                e && (e.style.cursor = t)
            },
            Ne = (e, t) => {
                e && ("selection" === t ? Re(e) : e.style.cursor = d.d.CROSSHAIR)
            },
            Be = () => {
                var e;
                return "HTML" === (null === (e = document.fullscreenElement) || void 0 === e ? void 0 : e.nodeName)
            },
            He = e => (e = e.replace(/\bAlt\b/i, "Alt").replace(/\bShift\b/i, "Shift").replace(/\b(Enter|Return)\b/i, "Enter").replace(/\bDel\b/i, "Delete"), S ? e.replace(/\bCtrlOrCmd\b/i, "Cmd").replace(/\bAlt\b/i, "Option") : e.replace(/\bCtrlOrCmd\b/i, "Ctrl")),
            Ve = ({
                clientX: e,
                clientY: t
            }, {
                zoom: n,
                offsetLeft: o,
                offsetTop: i,
                scrollX: s,
                scrollY: a
            }) => {
                const r = 1 / n.value;
                return {
                    x: (e - n.translation.x - o) * r - s,
                    y: (t - n.translation.y - i) * r - a
                }
            },
            Fe = ({
                sceneX: e,
                sceneY: t
            }, {
                zoom: n,
                offsetLeft: o,
                offsetTop: i,
                scrollX: s,
                scrollY: a
            }) => ({
                x: (e + s + o) * n.value + n.translation.x,
                y: (t + a + i) * n.value + n.translation.y
            }),
            Ue = e => getComputedStyle(document.documentElement).getPropertyValue("--".concat(e)),
            Ge = new RegExp("^[^".concat("A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff", "]*[").concat("\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc", "]")),
            We = e => Ge.test(e),
            Ke = e => {
                const [t, n] = e;
                return {
                    x: t,
                    y: n
                }
            },
            Ye = e => {
                if ("AbortError" !== (null === e || void 0 === e ? void 0 : e.name)) throw e
            },
            Xe = e => {
                const t = 5 === e.length && "0" === e.substr(4, 1),
                    n = 9 === e.length && "00" === e.substr(7, 2);
                return t || n || e === E.elementBackground[0]
            },
            Ze = () => {
                let e, t;
                const n = new Promise(((n, o) => {
                    e = n, t = o
                }));
                return n.resolve = e, n.reject = t, n
            },
            qe = e => t => {
                Object(s.unstable_batchedUpdates)(e, t)
            },
            Je = (e, t) => {
                const n = [{
                    value: 1,
                    symbol: "b"
                }, {
                    value: 1e3,
                    symbol: "k"
                }, {
                    value: 1e6,
                    symbol: "M"
                }, {
                    value: 1e9,
                    symbol: "G"
                }];
                let o;
                for (o = n.length - 1; o > 0 && !(e >= n[o].value); o--);
                return (e / n[o].value).toFixed(t).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + n[o].symbol
            },
            Qe = () => {
                var e;
                return (null === (e = document.querySelector('meta[name="version"]')) || void 0 === e ? void 0 : e.content) || d.j
            },
            $e = d.r.includes(devicePixelRatio) ? devicePixelRatio : 1,
            et = () => ({
                theme: "light",
                collaborators: new Map,
                currentChartType: "bar",
                currentItemBackgroundColor: "transparent",
                currentItemEndArrowhead: "arrow",
                currentItemFillStyle: "hachure",
                currentItemFontFamily: d.f,
                currentItemFontSize: d.g,
                currentItemLinearStrokeSharpness: "round",
                currentItemOpacity: 100,
                currentItemRoughness: 1,
                currentItemStartArrowhead: null,
                currentItemStrokeColor: c.black,
                currentItemStrokeSharpness: "sharp",
                currentItemStrokeStyle: "solid",
                currentItemStrokeWidth: 1,
                currentItemTextAlign: d.h,
                cursorButton: "up",
                draggingElement: null,
                editingElement: null,
                editingGroupId: null,
                editingLinearElement: null,
                elementLocked: !1,
                elementType: "selection",
                errorMessage: null,
                exportBackground: !0,
                exportScale: $e,
                exportEmbedScene: !1,
                exportWithDarkMode: !1,
                fileHandle: null,
                gridSize: null,
                isBindingEnabled: !0,
                isLibraryOpen: !1,
                isLoading: !1,
                isResizing: !1,
                isRotating: !1,
                lastPointerDownWith: "mouse",
                multiElement: null,
                name: "".concat(w("labels.untitled"), "-").concat(Ie()),
                openMenu: null,
                openPopup: null,
                pasteDialog: {
                    shown: !1,
                    data: null
                },
                previousSelectedElementIds: {},
                resizingElement: null,
                scrolledOutside: !1,
                scrollX: 0,
                scrollY: 0,
                selectedElementIds: {},
                selectedGroupIds: {},
                selectionElement: null,
                shouldCacheIgnoreZoom: !1,
                showHelpDialog: !1,
                showStats: !1,
                startBoundElement: null,
                suggestedBindings: [],
                toastMessage: null,
                viewBackgroundColor: c.white,
                zenModeEnabled: !1,
                zoom: {
                    value: 1,
                    translation: {
                        x: 0,
                        y: 0
                    }
                },
                viewModeEnabled: !1
            }),
            tt = {
                theme: {
                    browser: !0,
                    export: !1
                },
                collaborators: {
                    browser: !1,
                    export: !1
                },
                currentChartType: {
                    browser: !0,
                    export: !1
                },
                currentItemBackgroundColor: {
                    browser: !0,
                    export: !1
                },
                currentItemEndArrowhead: {
                    browser: !0,
                    export: !1
                },
                currentItemFillStyle: {
                    browser: !0,
                    export: !1
                },
                currentItemFontFamily: {
                    browser: !0,
                    export: !1
                },
                currentItemFontSize: {
                    browser: !0,
                    export: !1
                },
                currentItemLinearStrokeSharpness: {
                    browser: !0,
                    export: !1
                },
                currentItemOpacity: {
                    browser: !0,
                    export: !1
                },
                currentItemRoughness: {
                    browser: !0,
                    export: !1
                },
                currentItemStartArrowhead: {
                    browser: !0,
                    export: !1
                },
                currentItemStrokeColor: {
                    browser: !0,
                    export: !1
                },
                currentItemStrokeSharpness: {
                    browser: !0,
                    export: !1
                },
                currentItemStrokeStyle: {
                    browser: !0,
                    export: !1
                },
                currentItemStrokeWidth: {
                    browser: !0,
                    export: !1
                },
                currentItemTextAlign: {
                    browser: !0,
                    export: !1
                },
                cursorButton: {
                    browser: !0,
                    export: !1
                },
                draggingElement: {
                    browser: !1,
                    export: !1
                },
                editingElement: {
                    browser: !1,
                    export: !1
                },
                editingGroupId: {
                    browser: !0,
                    export: !1
                },
                editingLinearElement: {
                    browser: !1,
                    export: !1
                },
                elementLocked: {
                    browser: !0,
                    export: !1
                },
                elementType: {
                    browser: !0,
                    export: !1
                },
                errorMessage: {
                    browser: !1,
                    export: !1
                },
                exportBackground: {
                    browser: !0,
                    export: !1
                },
                exportEmbedScene: {
                    browser: !0,
                    export: !1
                },
                exportScale: {
                    browser: !0,
                    export: !1
                },
                exportWithDarkMode: {
                    browser: !0,
                    export: !1
                },
                fileHandle: {
                    browser: !1,
                    export: !1
                },
                gridSize: {
                    browser: !0,
                    export: !0
                },
                height: {
                    browser: !1,
                    export: !1
                },
                isBindingEnabled: {
                    browser: !1,
                    export: !1
                },
                isLibraryOpen: {
                    browser: !1,
                    export: !1
                },
                isLoading: {
                    browser: !1,
                    export: !1
                },
                isResizing: {
                    browser: !1,
                    export: !1
                },
                isRotating: {
                    browser: !1,
                    export: !1
                },
                lastPointerDownWith: {
                    browser: !0,
                    export: !1
                },
                multiElement: {
                    browser: !1,
                    export: !1
                },
                name: {
                    browser: !0,
                    export: !1
                },
                offsetLeft: {
                    browser: !1,
                    export: !1
                },
                offsetTop: {
                    browser: !1,
                    export: !1
                },
                openMenu: {
                    browser: !0,
                    export: !1
                },
                openPopup: {
                    browser: !1,
                    export: !1
                },
                pasteDialog: {
                    browser: !1,
                    export: !1
                },
                previousSelectedElementIds: {
                    browser: !0,
                    export: !1
                },
                resizingElement: {
                    browser: !1,
                    export: !1
                },
                scrolledOutside: {
                    browser: !0,
                    export: !1
                },
                scrollX: {
                    browser: !0,
                    export: !1
                },
                scrollY: {
                    browser: !0,
                    export: !1
                },
                selectedElementIds: {
                    browser: !0,
                    export: !1
                },
                selectedGroupIds: {
                    browser: !0,
                    export: !1
                },
                selectionElement: {
                    browser: !1,
                    export: !1
                },
                shouldCacheIgnoreZoom: {
                    browser: !0,
                    export: !1
                },
                showHelpDialog: {
                    browser: !1,
                    export: !1
                },
                showStats: {
                    browser: !0,
                    export: !1
                },
                startBoundElement: {
                    browser: !1,
                    export: !1
                },
                suggestedBindings: {
                    browser: !1,
                    export: !1
                },
                toastMessage: {
                    browser: !1,
                    export: !1
                },
                viewBackgroundColor: {
                    browser: !0,
                    export: !0
                },
                width: {
                    browser: !1,
                    export: !1
                },
                zenModeEnabled: {
                    browser: !0,
                    export: !1
                },
                zoom: {
                    browser: !0,
                    export: !1
                },
                viewModeEnabled: {
                    browser: !1,
                    export: !1
                }
            },
            nt = (e, t) => {
                const n = {};
                for (const o of Object.keys(e)) {
                    const i = tt[o];
                    (null === i || void 0 === i ? void 0 : i[t]) && (n[o] = e[o])
                }
                return n
            },
            ot = e => nt(e, "browser"),
            it = e => nt(e, "export");
        var st = n(4);
        const at = () => {
            const [e, t] = Object(o.useState)(null);
            return [e, Object(o.useCallback)((e => t(e)), [])]
        };
        var rt = n(14),
            lt = n(19);
        const ct = e => null != e && "text" === e.type,
            dt = e => null != e && ht(e.type),
            ht = e => "freedraw" === e,
            ut = e => null != e && pt(e.type),
            pt = e => "arrow" === e || "line" === e,
            mt = e => null != e && gt(e.type),
            gt = e => "arrow" === e,
            bt = e => null != e && ("rectangle" === e.type || "diamond" === e.type || "ellipse" === e.type || "text" === e.type),
            yt = (e, t, n, o, i) => [(e - n) * Math.cos(i) - (t - o) * Math.sin(i) + n, (e - n) * Math.sin(i) + (t - o) * Math.cos(i) + o],
            vt = (e, t, n) => yt(e[0], e[1], t[0], t[1], n),
            ft = (e, t, n, o, i, s, a, r) => {
                const l = Math.cos(o),
                    c = Math.sin(o);
                return e.e && e.w ? t += i + a : e.e ? (t += i * (1 + l), n += i * c, t += a * (1 - l), n += a * -c) : e.w && (t += i * (1 - l), n += i * -c, t += a * (1 + l), n += a * c), e.n && e.s ? n += s + r : e.n ? (t += s * c, n += s * (1 - l), t += r * -c, n += r * (1 + l)) : e.s && (t += s * -c, n += s * (1 + l), t += r * c, n += r * (1 - l)), [t, n]
            },
            xt = (e, t, n, o) => {
                const i = n - e,
                    s = o - t;
                return Math.hypot(i, s)
            },
            wt = (e, t = 1) => {
                if (e.length >= 3) {
                    const [n, o] = [e[0], e[e.length - 1]];
                    return xt(n[0], n[1], o[0], o[1]) <= d.w / t
                }
                return !1
            },
            jt = (e, t, n) => {
                const o = e.length;
                if (o < 3) return !1;
                const i = [Number.MAX_SAFE_INTEGER, n],
                    s = [t, n];
                let a = 0;
                for (let r = 0; r < o; r++) {
                    const t = e[r],
                        n = e[(r + 1) % o];
                    if (Ct(t, n, s, i)) {
                        if (0 === St(t, s, n)) return Et(t, s, n);
                        a++
                    }
                }
                return a % 2 === 1
            },
            Et = (e, t, n) => t[0] <= Math.max(e[0], n[0]) && t[0] >= Math.min(e[0], n[0]) && t[1] <= Math.max(e[1], n[1]) && t[1] >= Math.min(e[1], n[1]),
            St = (e, t, n) => {
                const o = (t[1] - e[1]) * (n[0] - t[0]) - (t[0] - e[0]) * (n[1] - t[1]);
                return 0 === o ? 0 : o > 0 ? 1 : 2
            },
            Ct = (e, t, n, o) => {
                const i = St(e, t, n),
                    s = St(e, t, o),
                    a = St(n, o, e),
                    r = St(n, o, t);
                return i !== s && a !== r || (!(0 !== i || !Et(e, n, t)) || (!(0 !== s || !Et(e, o, t)) || (!(0 !== a || !Et(n, e, o)) || !(0 !== r || !Et(n, t, o)))))
            },
            Ot = (e, t, n) => n ? [Math.round(e / n) * n, Math.round(t / n) * n] : [e, t],
            kt = e => {
                const t = e.map((e => e[0])),
                    n = e.map((e => e[1]));
                return {
                    width: Math.max(...t) - Math.min(...t),
                    height: Math.max(...n) - Math.min(...n)
                }
            },
            It = (e, t, n) => {
                const o = n.map((t => t[e])),
                    i = Math.max(...o),
                    s = Math.min(...o),
                    a = i - s,
                    r = 0 === a ? 1 : t / a;
                let l = 1 / 0;
                const c = n.map((t => t.map(((t, n) => {
                    if (n !== e) return t;
                    const o = t * r;
                    return l = Math.min(o, l), o
                }))));
                if (2 === c.length) return c;
                const d = s - l;
                return c.map((t => t.map(((t, n) => n === e ? t + d : t))))
            },
            At = e => dt(e) ? Pt(e) : ut(e) ? _t(e) : [e.x, e.y, e.x + e.width, e.y + e.height],
            Tt = e => {
                for (const t of e.sets)
                    if ("path" === t.type) return t.ops;
                return e.sets[0].ops
            },
            Mt = (e, t) => {
                let n = [0, 0];
                const {
                    minX: o,
                    minY: i,
                    maxX: s,
                    maxY: a
                } = e.reduce(((e, {
                    op: o,
                    data: i
                }) => {
                    if ("move" === o) n = i;
                    else if ("bcurveTo" === o) {
                        const o = [i[0], i[1]],
                            s = [i[2], i[3]],
                            a = [i[4], i[5]],
                            r = n;
                        n = a;
                        const l = (e, t) => Math.pow(1 - e, 3) * a[t] + 3 * e * Math.pow(1 - e, 2) * s[t] + 3 * Math.pow(e, 2) * (1 - e) * o[t] + r[t] * Math.pow(e, 3);
                        let c = 0;
                        for (; c <= 1;) {
                            let n = l(c, 0),
                                o = l(c, 1);
                            t && ([n, o] = t(n, o)), e.minY = Math.min(e.minY, o), e.minX = Math.min(e.minX, n), e.maxX = Math.max(e.maxX, n), e.maxY = Math.max(e.maxY, o), c += .1
                        }
                    }
                    return e
                }), {
                    minX: 1 / 0,
                    minY: 1 / 0,
                    maxX: -1 / 0,
                    maxY: -1 / 0
                });
                return [o, i, s, a]
            },
            Lt = e => {
                let t = 1 / 0,
                    n = 1 / 0,
                    o = -1 / 0,
                    i = -1 / 0;
                for (const [s, a] of e) t = Math.min(t, s), n = Math.min(n, a), o = Math.max(o, s), i = Math.max(i, a);
                return [t, n, o, i]
            },
            Pt = e => {
                const [t, n, o, i] = Lt(e.points);
                return [t + e.x, n + e.y, o + e.x, i + e.y]
            },
            _t = e => {
                let t;
                if (e.points.length < 2 || !Kt(e)) {
                    const {
                        minX: n,
                        minY: o,
                        maxX: i,
                        maxY: s
                    } = e.points.reduce(((e, [t, n]) => (e.minY = Math.min(e.minY, n), e.minX = Math.min(e.minX, t), e.maxX = Math.max(e.maxX, t), e.maxY = Math.max(e.maxY, n), e)), {
                        minX: 1 / 0,
                        minY: 1 / 0,
                        maxX: -1 / 0,
                        maxY: -1 / 0
                    });
                    t = [n + e.x, o + e.y, i + e.x, s + e.y]
                } else {
                    const n = Kt(e),
                        o = Tt(n[0]),
                        [i, s, a, r] = Mt(o);
                    t = [i + e.x, s + e.y, a + e.x, r + e.y]
                }
                return t
            },
            Dt = e => {
                let t;
                const [n, o, i, s] = At(e), a = (n + i) / 2, r = (o + s) / 2;
                if (dt(e)) {
                    const [t, n, o, i] = Lt(e.points.map((([t, n]) => yt(t, n, a - e.x, r - e.y, e.angle))));
                    return [t + e.x, n + e.y, o + e.x, i + e.y]
                }
                if (ut(e)) t = ((e, t, n) => {
                    if (e.points.length < 2 || !Kt(e)) {
                        const {
                            minX: o,
                            minY: i,
                            maxX: s,
                            maxY: a
                        } = e.points.reduce(((o, [i, s]) => ([i, s] = yt(e.x + i, e.y + s, t, n, e.angle), o.minY = Math.min(o.minY, s), o.minX = Math.min(o.minX, i), o.maxX = Math.max(o.maxX, i), o.maxY = Math.max(o.maxY, s), o)), {
                            minX: 1 / 0,
                            minY: 1 / 0,
                            maxX: -1 / 0,
                            maxY: -1 / 0
                        });
                        return [o, i, s, a]
                    }
                    const o = Kt(e),
                        i = Tt(o[0]);
                    return Mt(i, ((o, i) => yt(e.x + o, e.y + i, t, n, e.angle)))
                })(e, a, r);
                else if ("diamond" === e.type) {
                    const [l, c] = yt(a, o, a, r, e.angle), [d, h] = yt(a, s, a, r, e.angle), [u, p] = yt(n, r, a, r, e.angle), [m, g] = yt(i, r, a, r, e.angle);
                    t = [Math.min(l, d, u, m), Math.min(c, h, p, g), Math.max(l, d, u, m), Math.max(c, h, p, g)]
                } else if ("ellipse" === e.type) {
                    const l = (i - n) / 2,
                        c = (s - o) / 2,
                        d = Math.cos(e.angle),
                        h = Math.sin(e.angle),
                        u = Math.hypot(l * d, c * h),
                        p = Math.hypot(c * d, l * h);
                    t = [a - u, r - p, a + u, r + p]
                } else {
                    const [l, c] = yt(n, o, a, r, e.angle), [d, h] = yt(n, s, a, r, e.angle), [u, p] = yt(i, s, a, r, e.angle), [m, g] = yt(i, o, a, r, e.angle);
                    t = [Math.min(l, d, u, m), Math.min(c, h, p, g), Math.max(l, d, u, m), Math.max(c, h, p, g)]
                }
                return t
            },
            Rt = e => {
                if (!e.length) return [0, 0, 0, 0];
                let t = 1 / 0,
                    n = -1 / 0,
                    o = 1 / 0,
                    i = -1 / 0;
                return e.forEach((e => {
                    const [s, a, r, l] = Dt(e);
                    t = Math.min(t, s), o = Math.min(o, a), n = Math.max(n, r), i = Math.max(i, l)
                })), [t, o, n, i]
            },
            zt = (e, t, n) => {
                if (!ut(e) && !dt(e)) return [e.x, e.y, e.x + t, e.y + n];
                const o = It(0, t, It(1, n, e.points));
                let i;
                if (dt(e)) i = Lt(o);
                else {
                    const t = rt.a.generator(),
                        n = "sharp" === e.strokeSharpness ? t.linearPath(o, Xt(e)) : t.curve(o, Xt(e)),
                        s = Tt(n);
                    i = Mt(s)
                }
                const [s, a, r, l] = i;
                return [s + e.x, a + e.y, r + e.x, l + e.y]
            },
            Nt = (e, t, n) => {
                const o = rt.a.generator(),
                    i = "sharp" === n ? o.linearPath(t, Xt(e)) : o.curve(t, Xt(e)),
                    s = Tt(i),
                    [a, r, l, c] = Mt(s);
                return [a + e.x, r + e.y, l + e.x, c + e.y]
            };
        var Bt = n(37);
        const Ht = et(),
            Vt = e => [1.5, 6 + e],
            Ft = e => "freedraw" === e.type ? 12 * e.strokeWidth : 20,
            Ut = (e, t, n) => {
                switch (n.globalAlpha = e.opacity / 100, e.type) {
                    case "rectangle":
                    case "diamond":
                    case "ellipse":
                        n.lineJoin = "round", n.lineCap = "round", t.draw(Kt(e));
                        break;
                    case "arrow":
                    case "line":
                        n.lineJoin = "round", n.lineCap = "round", Kt(e).forEach((e => {
                            t.draw(e)
                        }));
                        break;
                    case "freedraw":
                        {
                            n.save(),
                            n.fillStyle = e.strokeColor;
                            const t = function(e) {
                                return en.get(e)
                            }(e);n.fillStyle = e.strokeColor,
                            n.fill(t),
                            n.restore();
                            break
                        }
                    default:
                        if (!ct(e)) throw new Error("Unimplemented type ".concat(e.type)); {
                            const t = We(e.text),
                                o = t && !n.canvas.isConnected;
                            o && document.body.appendChild(n.canvas), n.canvas.setAttribute("dir", t ? "rtl" : "ltr"), n.save(), n.font = Le(e), n.fillStyle = e.strokeColor, n.textAlign = e.textAlign;
                            const i = e.text.replace(/\r\n?/g, "\n").split("\n"),
                                s = e.height / i.length,
                                a = e.height - e.baseline,
                                r = "center" === e.textAlign ? e.width / 2 : "right" === e.textAlign ? e.width : 0;
                            for (let e = 0; e < i.length; e++) n.fillText(i[e], r, (e + 1) * s - a);
                            n.restore(), o && n.canvas.remove()
                        }
                }
                n.globalAlpha = 1
            },
            Gt = new WeakMap,
            Wt = new WeakMap,
            Kt = e => Wt.get(e),
            Yt = e => Wt.delete(e),
            Xt = (e, t = !1) => {
                const n = {
                    seed: e.seed,
                    strokeLineDash: "dashed" === e.strokeStyle ? (o = e.strokeWidth, [8, 8 + o]) : "dotted" === e.strokeStyle ? Vt(e.strokeWidth) : void 0,
                    disableMultiStroke: "solid" !== e.strokeStyle,
                    strokeWidth: "solid" !== e.strokeStyle ? e.strokeWidth + .5 : e.strokeWidth,
                    fillWeight: e.strokeWidth / 2,
                    hachureGap: 4 * e.strokeWidth,
                    roughness: e.roughness,
                    stroke: e.strokeColor,
                    preserveVertices: t
                };
                var o;
                switch (e.type) {
                    case "rectangle":
                    case "diamond":
                    case "ellipse":
                        return n.fillStyle = e.fillStyle, n.fill = "transparent" === e.backgroundColor ? void 0 : e.backgroundColor, "ellipse" === e.type && (n.curveFitting = 1), n;
                    case "line":
                        return wt(e.points) && (n.fillStyle = e.fillStyle, n.fill = "transparent" === e.backgroundColor ? void 0 : e.backgroundColor), n;
                    case "freedraw":
                    case "arrow":
                        return n;
                    default:
                        throw new Error("Unimplemented type ".concat(e.type))
                }
            },
            Zt = (e, t) => {
                let n = Wt.get(e) || null;
                if (!n) {
                    switch (Gt.delete(e), e.type) {
                        case "rectangle":
                            if ("round" === e.strokeSharpness) {
                                const o = e.width,
                                    i = e.height,
                                    s = .25 * Math.min(o, i);
                                n = t.path("M ".concat(s, " 0 L ").concat(o - s, " 0 Q ").concat(o, " 0, ").concat(o, " ").concat(s, " L ").concat(o, " ").concat(i - s, " Q ").concat(o, " ").concat(i, ", ").concat(o - s, " ").concat(i, " L ").concat(s, " ").concat(i, " Q 0 ").concat(i, ", 0 ").concat(i - s, " L 0 ").concat(s, " Q 0 0, ").concat(s, " 0"), Xt(e, !0))
                            } else n = t.rectangle(0, 0, e.width, e.height, Xt(e));
                            break;
                        case "diamond":
                            {
                                const [o, i, s, a, r, l, c, d] = (e => {
                                    const t = Math.floor(e.width / 2) + 1,
                                        n = e.width,
                                        o = Math.floor(e.height / 2) + 1;
                                    return [t, 0, n, o, t, e.height, 0, o]
                                })(e);n = t.polygon([
                                    [o, i],
                                    [s, a],
                                    [r, l],
                                    [c, d]
                                ], Xt(e));
                                break
                            }
                        case "ellipse":
                            n = t.ellipse(e.width / 2, e.height / 2, e.width, e.height, Xt(e));
                            break;
                        case "line":
                        case "arrow":
                            {
                                const o = Xt(e),
                                    i = e.points.length ? e.points : [
                                        [0, 0]
                                    ];
                                if (n = "sharp" === e.strokeSharpness ? o.fill ? [t.polygon(i, o)] : [t.linearPath(i, o)] : [t.curve(i, o)], "arrow" === e.type) {
                                    const {
                                        startArrowhead: i = null,
                                        endArrowhead: s = "arrow"
                                    } = e, a = (e, n, i, s) => {
                                        const a = ((e, t, n, o) => {
                                            const i = Tt(t[0]);
                                            if (i.length < 1) return null;
                                            const s = "start" === n ? 1 : i.length - 1,
                                                a = i[s].data,
                                                r = [a[4], a[5]],
                                                l = [a[2], a[3]],
                                                c = [a[0], a[1]],
                                                d = i[s - 1];
                                            let h = [0, 0];
                                            "move" === d.op ? h = d.data : "bcurveTo" === d.op && (h = [d.data[4], d.data[5]]);
                                            const u = (e, t) => Math.pow(1 - e, 3) * r[t] + 3 * e * Math.pow(1 - e, 2) * l[t] + 3 * Math.pow(e, 2) * (1 - e) * c[t] + h[t] * Math.pow(e, 3),
                                                [p, m] = "start" === n ? h : r,
                                                [g, b] = [u(.3, 0), u(.3, 1)],
                                                y = Math.hypot(p - g, m - b),
                                                v = (p - g) / y,
                                                f = (m - b) / y,
                                                x = {
                                                    arrow: 30,
                                                    bar: 15,
                                                    dot: 15
                                                }[o];
                                            let w = 0;
                                            if ("arrow" === o) {
                                                const [t, n] = e.points[e.points.length - 1], [o, i] = e.points.length > 1 ? e.points[e.points.length - 2] : [0, 0];
                                                w = Math.hypot(t - o, n - i)
                                            } else
                                                for (let T = 0; T < e.points.length; T++) {
                                                    const [t, n] = e.points[T - 1] || [0, 0], [o, i] = e.points[T];
                                                    w += Math.hypot(o - t, i - n)
                                                }
                                            const j = Math.min(x, w / 2),
                                                E = p - v * j,
                                                S = m - f * j;
                                            if ("dot" === o) return [p, m, Math.hypot(S - m, E - p) + e.strokeWidth];
                                            const C = {
                                                    arrow: 20,
                                                    bar: 90
                                                }[o],
                                                [O, k] = yt(E, S, p, m, -C * Math.PI / 180),
                                                [I, A] = yt(E, S, p, m, C * Math.PI / 180);
                                            return [p, m, O, k, I, A]
                                        })(e, n, i, s);
                                        if (null === a) return [];
                                        if ("dot" === s) {
                                            const [n, i, s] = a;
                                            return [t.circle(n, i, s, { ...o,
                                                fill: e.strokeColor,
                                                fillStyle: "solid",
                                                stroke: "none"
                                            })]
                                        }
                                        const [r, l, c, d, h, u] = a;
                                        if ("dotted" === e.strokeStyle) {
                                            const t = Vt(e.strokeWidth - 1);
                                            o.strokeLineDash = [t[0], t[1] - 1]
                                        } else delete o.strokeLineDash;
                                        return [t.line(c, d, r, l, o), t.line(h, u, r, l, o)]
                                    };
                                    if (null !== i) {
                                        const t = a(e, n, "start", i);
                                        n.push(...t)
                                    }
                                    if (null !== s) {
                                        const t = a(e, n, "end", s);
                                        n.push(...t)
                                    }
                                }
                                break
                            }
                        case "freedraw":
                            tn(e), n = [];
                            break;
                        case "text":
                            n = []
                    }
                    Wt.set(e, n)
                }
            },
            qt = (e, t) => {
                const n = t ? t.zoom : Ht.zoom,
                    o = Gt.get(e),
                    i = o && o.canvasZoom !== n.value && !(null === t || void 0 === t ? void 0 : t.shouldCacheIgnoreZoom);
                if (!o || i) {
                    const t = ((e, t) => {
                        const n = document.createElement("canvas"),
                            o = n.getContext("2d"),
                            i = Ft(e);
                        let s = 0,
                            a = 0;
                        if (ut(e) || dt(e)) {
                            let [r, l, c, d] = At(e);
                            r = Math.floor(r), c = Math.ceil(c), l = Math.floor(l), d = Math.ceil(d), n.width = De(r, c) * window.devicePixelRatio * t.value + i * t.value * 2, n.height = De(l, d) * window.devicePixelRatio * t.value + i * t.value * 2, s = e.x > r ? Math.floor(De(e.x, r)) * window.devicePixelRatio * t.value : 0, a = e.y > l ? Math.floor(De(e.y, l)) * window.devicePixelRatio * t.value : 0, o.translate(s, a)
                        } else n.width = e.width * window.devicePixelRatio * t.value + i * t.value * 2, n.height = e.height * window.devicePixelRatio * t.value + i * t.value * 2;
                        o.save(), o.translate(i * t.value, i * t.value), o.scale(window.devicePixelRatio * t.value, window.devicePixelRatio * t.value);
                        const r = rt.a.canvas(n);
                        return Ut(e, r, o), o.restore(), {
                            element: e,
                            canvas: n,
                            canvasZoom: t.value,
                            canvasOffsetX: s,
                            canvasOffsetY: a
                        }
                    })(e, n);
                    return Gt.set(e, t), t
                }
                return o
            },
            Jt = (e, t, n, o) => {
                const i = e.element,
                    s = Ft(i);
                let [a, r, l, c] = At(i);
                dt(i) && (a = Math.floor(a), l = Math.ceil(l), r = Math.floor(r), c = Math.ceil(c));
                const d = ((a + l) / 2 + o.scrollX) * window.devicePixelRatio,
                    h = ((r + c) / 2 + o.scrollY) * window.devicePixelRatio;
                n.save(), n.scale(1 / window.devicePixelRatio, 1 / window.devicePixelRatio), n.translate(d, h), n.rotate(i.angle), n.drawImage(e.canvas, -(l - a) / 2 * window.devicePixelRatio - s * e.canvasZoom / e.canvasZoom, -(c - r) / 2 * window.devicePixelRatio - s * e.canvasZoom / e.canvasZoom, e.canvas.width / e.canvasZoom, e.canvas.height / e.canvasZoom), n.restore()
            },
            Qt = (e, t, n, o, i) => {
                const s = t.generator;
                switch (e.type) {
                    case "selection":
                        n.save(), n.translate(e.x + i.scrollX, e.y + i.scrollY), n.fillStyle = "rgba(0, 0, 255, 0.10)", n.fillRect(0, 0, e.width, e.height), n.restore();
                        break;
                    case "freedraw":
                        if (Zt(e, s), o) {
                            const t = qt(e, i);
                            Jt(t, 0, n, i)
                        } else {
                            const [o, s, a, r] = At(e), l = (o + a) / 2 + i.scrollX, c = (s + r) / 2 + i.scrollY, d = (a - o) / 2 - (e.x - o), h = (r - s) / 2 - (e.y - s);
                            n.save(), n.translate(l, c), n.rotate(e.angle), n.translate(-d, -h), Ut(e, t, n), n.restore()
                        }
                        break;
                    case "rectangle":
                    case "diamond":
                    case "ellipse":
                    case "line":
                    case "arrow":
                    case "text":
                        if (Zt(e, s), o) {
                            const t = qt(e, i);
                            Jt(t, 0, n, i)
                        } else {
                            const [o, s, a, r] = At(e), l = (o + a) / 2 + i.scrollX, c = (s + r) / 2 + i.scrollY, d = (a - o) / 2 - (e.x - o), h = (r - s) / 2 - (e.y - s);
                            n.save(), n.translate(l, c), n.rotate(e.angle), n.translate(-d, -h), Ut(e, t, n), n.restore()
                        }
                        break;
                    default:
                        throw new Error("Unimplemented type ".concat(e.type))
                }
            },
            $t = (e, t, n) => {
                if ("undefined" === typeof n) return e.draw(t);
                const o = {
                    sets: t.sets,
                    shape: t.shape,
                    options: { ...t.options,
                        fixedDecimalPlaceDigits: n
                    }
                };
                return e.draw(o)
            },
            en = new WeakMap([]);

        function tn(e) {
            const t = nn(e),
                n = new Path2D(t);
            return en.set(e, n), n
        }

        function nn(e) {
            const t = e.simulatePressure ? e.points : e.points.length ? e.points.map((([t, n], o) => [t, n, e.pressures[o]])) : [
                    [0, 0, .5]
                ],
                n = {
                    simulatePressure: e.simulatePressure,
                    size: 4.25 * e.strokeWidth,
                    thinning: .6,
                    smoothing: .5,
                    streamline: .5,
                    easing: e => Math.sin(e * Math.PI / 2),
                    last: !1
                };
            return function(e) {
                if (!e.length) return "";
                const t = e.length - 1;
                return e.reduce(((e, n, o, i) => (o === t ? e.push(n, on(n, i[0]), "L", i[0], "Z") : e.push(n, on(n, i[o + 1])), e)), ["M", e[0], "Q"]).join(" ").replaceAll(sn, "$1")
            }(Object(Bt.a)(t, n))
        }

        function on(e, t) {
            return [(e[0] + t[0]) / 2, (e[1] + t[1]) / 2]
        }
        const sn = /(\s?[A-Z]?,?-?[0-9]*\.[0-9]{0,2})(([0-9]|e|-)*)/g;
        const an = e => "string" === typeof e;
        class rn {
            constructor() {
                this.callbacks = new Set, this.nonDeletedElements = [], this.elements = [], this.elementsMap = new Map
            }
            static mapElementToScene(e, t) {
                an(e) ? this.sceneMapById.set(e, t) : this.sceneMapByElement.set(e, t)
            }
            static getScene(e) {
                return an(e) ? this.sceneMapById.get(e) || null : this.sceneMapByElement.get(e) || null
            }
            getElementsIncludingDeleted() {
                return this.elements
            }
            getElements() {
                return this.nonDeletedElements
            }
            getElement(e) {
                return this.elementsMap.get(e) || null
            }
            getNonDeletedElement(e) {
                const t = this.getElement(e);
                return t && Ki(t) ? t : null
            }
            getNonDeletedElements(e) {
                const t = [];
                return e.forEach((e => {
                    const n = this.getNonDeletedElement(e);
                    null != n && t.push(n)
                })), t
            }
            replaceAllElements(e) {
                this.elements = e, this.elementsMap.clear(), e.forEach((e => {
                    this.elementsMap.set(e.id, e), rn.mapElementToScene(e, this)
                })), this.nonDeletedElements = Wi(this.elements), this.informMutation()
            }
            informMutation() {
                for (const e of Array.from(this.callbacks)) e()
            }
            addCallback(e) {
                if (this.callbacks.has(e)) throw new Error;
                return this.callbacks.add(e), () => {
                    if (!this.callbacks.has(e)) throw new Error;
                    this.callbacks.delete(e)
                }
            }
            destroy() {
                rn.sceneMapById.forEach(((e, t) => {
                    e === this && rn.sceneMapById.delete(t)
                })), this.callbacks.clear()
            }
        }
        rn.sceneMapByElement = new WeakMap, rn.sceneMapById = new Map;
        var ln = rn,
            cn = n(17);
        let dn = new cn.a(Date.now());
        const hn = () => Math.floor(dn.next() * 2 ** 31),
            un = () => Object(lt.a)(),
            pn = (e, t) => {
                var n;
                let o = !1;
                const {
                    points: i
                } = t;
                "undefined" !== typeof i && (t = { ...kt(i),
                    ...t
                });
                for (const s in t) {
                    const n = t[s];
                    if ("undefined" !== typeof n) {
                        if (e[s] === n && ("object" !== typeof n || null === n || "groupIds" === s)) continue;
                        if ("points" === s) {
                            const t = e[s],
                                o = n;
                            if (t.length === o.length) {
                                let e = !1,
                                    n = t.length;
                                for (; --n;) {
                                    const i = t[n],
                                        s = o[n];
                                    if (i[0] !== s[0] || i[1] !== s[1]) {
                                        e = !0;
                                        break
                                    }
                                }
                                if (!e) continue
                            }
                        }
                        e[s] = n, o = !0
                    }
                }
                o && ("undefined" === typeof t.height && "undefined" === typeof t.width && "undefined" === typeof i || Yt(e), e.version++, e.versionNonce = hn(), null === (n = ln.getScene(e)) || void 0 === n || n.informMutation())
            },
            mn = (e, t) => {
                let n = !1;
                for (const o in t) {
                    const i = t[o];
                    if ("undefined" !== typeof i) {
                        if (e[o] === i && ("object" !== typeof i || null === i || "groupIds" === o)) continue;
                        n = !0
                    }
                }
                return n ? { ...e,
                    ...t,
                    version: e.version + 1,
                    versionNonce: hn()
                } : e
            },
            gn = (e, t) => (e.version = (null !== t && void 0 !== t ? t : e.version) + 1, e.versionNonce = hn(), e),
            bn = e => ut(e) || dt(e) ? e.points.length < 2 : 0 === e.width && 0 === e.height,
            yn = (e, t, n) => {
                const o = Math.abs(t),
                    i = Math.abs(n);
                if ("line" === e || "arrow" === e || "freedraw" === e) {
                    const e = Math.round(Math.atan(i / o) / d.F) * d.F;
                    0 === e ? n = 0 : e === Math.PI / 2 ? t = 0 : n = Math.round(o * Math.tan(e)) * Math.sign(n) || n
                } else "selection" !== e && (n = o * Math.sign(n));
                return {
                    width: t,
                    height: n
                }
            },
            vn = e => {
                const t = {
                    width: e.width,
                    height: e.height,
                    x: e.x,
                    y: e.y
                };
                if (e.width < 0) {
                    const n = Math.abs(e.width);
                    t.width = n, t.x = e.x - n
                }
                if (e.height < 0) {
                    const n = Math.abs(e.height);
                    t.height = n, t.y = e.y - n
                }
                return t
            },
            fn = (e, t, n) => {
                const o = n.filter((t => t.groupIds.includes(e)));
                return o.length < 2 ? t.selectedGroupIds[e] || t.editingGroupId === e ? { ...t,
                    selectedGroupIds: { ...t.selectedGroupIds,
                        [e]: !1
                    },
                    editingGroupId: null
                } : t : { ...t,
                    selectedGroupIds: { ...t.selectedGroupIds,
                        [e]: !0
                    },
                    selectedElementIds: { ...t.selectedElementIds,
                        ...Object.fromEntries(o.map((e => [e.id, !0])))
                    }
                }
            },
            xn = (e, t) => null != wn(e, t),
            wn = (e, t) => t.groupIds.filter((t => t !== e.editingGroupId)).find((t => e.selectedGroupIds[t])),
            jn = e => Object.entries(e.selectedGroupIds).filter((([e, t]) => t)).map((([e, t]) => e)),
            En = (e, t) => {
                let n = { ...e,
                    selectedGroupIds: {}
                };
                const o = Qi(t, e);
                if (!o.length) return { ...n,
                    editingGroupId: null
                };
                for (const i of o) {
                    let o = i.groupIds;
                    if (e.editingGroupId) {
                        const t = o.indexOf(e.editingGroupId);
                        t > -1 && (o = o.slice(0, t))
                    }
                    if (o.length > 0) {
                        const e = o[o.length - 1];
                        n = fn(e, n, t)
                    }
                }
                return n
            },
            Sn = (e, t) => e.groupIds.includes(t),
            Cn = (e, t) => e.filter((e => Sn(e, t))),
            On = (e, t, n) => {
                const o = [...e],
                    i = n ? o.indexOf(n) : -1,
                    s = i > -1 ? i : o.length;
                return o.splice(s, 0, t), o
            },
            kn = (e, {
                x: t,
                y: n,
                strokeColor: o,
                backgroundColor: i,
                fillStyle: s,
                strokeWidth: a,
                strokeStyle: r,
                roughness: l,
                opacity: c,
                width: d = 0,
                height: h = 0,
                angle: u = 0,
                groupIds: p = [],
                strokeSharpness: m,
                boundElementIds: g = null,
                ...b
            }) => {
                var y, v;
                return {
                    id: b.id || un(),
                    type: e,
                    x: t,
                    y: n,
                    width: d,
                    height: h,
                    angle: u,
                    strokeColor: o,
                    backgroundColor: i,
                    fillStyle: s,
                    strokeWidth: a,
                    strokeStyle: r,
                    roughness: l,
                    opacity: c,
                    groupIds: p,
                    strokeSharpness: m,
                    seed: null !== (y = b.seed) && void 0 !== y ? y : hn(),
                    version: b.version || 1,
                    versionNonce: null !== (v = b.versionNonce) && void 0 !== v ? v : 0,
                    isDeleted: !1,
                    boundElementIds: g
                }
            },
            In = e => kn(e.type, e),
            An = (e, t) => ({
                x: "center" === e.textAlign ? t.width / 2 : "right" === e.textAlign ? t.width : 0,
                y: "middle" === e.verticalAlign ? t.height / 2 : 0
            }),
            Tn = e => {
                const t = Pe(e.text, Le(e)),
                    n = An(e, t);
                return mn({ ...kn("text", e),
                    text: e.text,
                    fontSize: e.fontSize,
                    fontFamily: e.fontFamily,
                    textAlign: e.textAlign,
                    verticalAlign: e.verticalAlign,
                    x: e.x - n.x,
                    y: e.y - n.y,
                    width: t.width,
                    height: t.height,
                    baseline: t.baseline
                }, {})
            },
            Mn = (e, t) => {
                const {
                    width: n,
                    height: o,
                    baseline: i
                } = Pe(t, Le(e)), {
                    textAlign: s,
                    verticalAlign: a
                } = e;
                let r, l;
                if ("center" === s && "middle" === a) {
                    const t = Pe(e.text, Le(e)),
                        i = An(e, {
                            width: n - t.width,
                            height: o - t.height
                        });
                    r = e.x - i.x, l = e.y - i.y
                } else {
                    const [t, i, a, c] = At(e), [d, h, u, p] = zt(e, n, o), m = (t - d) / 2, g = (i - h) / 2, b = (a - u) / 2, y = (c - p) / 2;
                    [r, l] = ft({
                        s: !0,
                        e: "center" === s || "left" === s,
                        w: "center" === s || "right" === s
                    }, e.x, e.y, e.angle, m, g, b, y)
                }
                return {
                    width: n,
                    height: o,
                    x: Number.isFinite(r) ? r : e.x,
                    y: Number.isFinite(l) ? l : e.y,
                    baseline: i
                }
            },
            Ln = e => ({ ...kn(e.type, e),
                points: e.points || [],
                lastCommittedPoint: null,
                startBinding: null,
                endBinding: null,
                startArrowhead: e.startArrowhead,
                endArrowhead: e.endArrowhead
            }),
            Pn = (e, t = 0) => {
                if (null == e || "object" !== typeof e) return e;
                if ("[object Object]" === Object.prototype.toString.call(e)) {
                    const n = "function" === typeof e.constructor ? Object.create(Object.getPrototypeOf(e)) : {};
                    for (const o in e)
                        if (e.hasOwnProperty(o)) {
                            if (0 === t && ("shape" === o || "canvas" === o)) continue;
                            n[o] = Pn(e[o], t + 1)
                        }
                    return n
                }
                if (Array.isArray(e)) {
                    let n = e.length;
                    const o = new Array(n);
                    for (; n--;) o[n] = Pn(e[n], t + 1);
                    return o
                }
                return e
            },
            _n = (e, t, n, o) => {
                let i = Pn(n);
                return i.id = un(), i.seed = hn(), i.groupIds = ((e, t, n) => {
                    const o = [...e],
                        i = t ? e.indexOf(t) : -1,
                        s = i > -1 ? i : e.length;
                    for (let a = 0; a < s; a++) o[a] = n(o[a]);
                    return o
                })(i.groupIds, e, (e => (t.has(e) || t.set(e, un()), t.get(e)))), o && (i = Object.assign(i, o)), i
            },
            Dn = {
                mouse: 8,
                pen: 16,
                touch: 28
            },
            Rn = {
                e: !0,
                s: !0,
                n: !0,
                w: !0
            },
            zn = {
                e: !0,
                s: !0,
                n: !0,
                w: !0
            },
            Nn = {
                e: !0,
                s: !0,
                n: !0,
                w: !0,
                nw: !0,
                se: !0
            },
            Bn = {
                e: !0,
                s: !0,
                n: !0,
                w: !0,
                ne: !0,
                sw: !0
            },
            Hn = (e, t, n, o, i, s, a) => {
                const [r, l] = yt(e + n / 2, t + o / 2, i, s, a);
                return [r - n / 2, l - o / 2, n, o]
            },
            Vn = ([e, t, n, o], i, s, a, r = {}) => {
                const l = Dn[a],
                    c = l / s.value,
                    d = l / s.value,
                    h = l / s.value,
                    u = l / s.value,
                    p = n - e,
                    m = o - t,
                    g = (e + n) / 2,
                    b = (t + o) / 2,
                    y = 4 / s.value,
                    v = (l - 8) / (2 * s.value),
                    f = {
                        nw: r.nw ? void 0 : Hn(e - y - h + v, t - y - u + v, c, d, g, b, i),
                        ne: r.ne ? void 0 : Hn(n + y - v, t - y - u + v, c, d, g, b, i),
                        sw: r.sw ? void 0 : Hn(e - y - h + v, o + y - v, c, d, g, b, i),
                        se: r.se ? void 0 : Hn(n + y - v, o + y - v, c, d, g, b, i),
                        rotation: r.rotation ? void 0 : Hn(e + p / 2 - c / 2, t - y - u + v - 16 / s.value, c, d, g, b, i)
                    },
                    x = 5 * Dn.mouse / s.value;
                return Math.abs(p) > x && (r.n || (f.n = Hn(e + p / 2 - c / 2, t - y - u + v, c, d, g, b, i)), r.s || (f.s = Hn(e + p / 2 - c / 2, o + y - v, c, d, g, b, i))), Math.abs(m) > x && (r.w || (f.w = Hn(e - y - h + v, t + m / 2 - d / 2, c, d, g, b, i)), r.e || (f.e = Hn(n + y - v, t + m / 2 - d / 2, c, d, g, b, i))), f
            },
            Fn = (e, t, n = "mouse") => {
                let o = {};
                if ("arrow" === e.type || "line" === e.type || "freedraw" === e.type) {
                    if (2 === e.points.length) {
                        const [, t] = e.points;
                        0 === t[0] || 0 === t[1] ? o = Bn : t[0] > 0 && t[1] < 0 ? o = Nn : t[0] > 0 && t[1] > 0 ? o = Bn : t[0] < 0 && t[1] > 0 ? o = Nn : t[0] < 0 && t[1] < 0 && (o = Bn)
                    }
                } else "text" === e.type && (o = zn);
                return Vn(At(e), e.angle, t, n, o)
            },
            Un = (e, t) => [0, 0, 0, 0, t, e, 1, 0],
            Gn = (e = 0, t = 0) => {
                const n = [0, 0, 0, 0, 0, 0, 0, 0];
                if (t < 0 || t > 7) throw new Error("Expected `index` betwen 0 and 7, got `".concat(t, "`"));
                return 0 !== e && (n[t] = e), n
            },
            Wn = e => [e[0], e[1], e[2], e[3], -e[4], -e[5], -e[6], -e[7]],
            Kn = (e, t) => io(t) ? [e[0] + t, e[1], e[2], e[3], e[4], e[5], e[6], e[7]] : [e[0] + t[0], e[1] + t[1], e[2] + t[2], e[3] + t[3], e[4] + t[4], e[5] + t[5], e[6] + t[6], e[7] + t[7]],
            Yn = (e, t) => io(t) ? [e[0] - t, e[1], e[2], e[3], e[4], e[5], e[6], e[7]] : [e[0] - t[0], e[1] - t[1], e[2] - t[2], e[3] - t[3], e[4] - t[4], e[5] - t[5], e[6] - t[6], e[7] - t[7]],
            Xn = (e, t) => io(t) ? [e[0] * t, e[1] * t, e[2] * t, e[3] * t, e[4] * t, e[5] * t, e[6] * t, e[7] * t] : [Zn(e, t), t[1] * e[0] + t[0] * e[1] - t[4] * e[2] + t[5] * e[3] + t[2] * e[4] - t[3] * e[5] - t[7] * e[6] - t[6] * e[7], t[2] * e[0] + t[0] * e[2] - t[6] * e[3] + t[3] * e[6], t[3] * e[0] + t[6] * e[2] + t[0] * e[3] - t[2] * e[6], t[4] * e[0] + t[2] * e[1] - t[1] * e[2] + t[7] * e[3] + t[0] * e[4] + t[6] * e[5] - t[5] * e[6] + t[3] * e[7], t[5] * e[0] - t[3] * e[1] + t[7] * e[2] + t[1] * e[3] - t[6] * e[4] + t[0] * e[5] + t[4] * e[6] + t[2] * e[7], t[6] * e[0] + t[3] * e[2] - t[2] * e[3] + t[0] * e[6], t[7] * e[0] + t[6] * e[1] + t[5] * e[2] + t[4] * e[3] + t[3] * e[4] + t[2] * e[5] + t[1] * e[6] + t[0] * e[7]],
            Zn = (e, t) => t[0] * e[0] + t[2] * e[2] + t[3] * e[3] - t[6] * e[6],
            qn = (e, t) => [t[0] * e[0], t[1] * e[0] + t[0] * e[1], t[2] * e[0] + t[0] * e[2], t[3] * e[0] + t[0] * e[3], t[4] * e[0] + t[2] * e[1] - t[1] * e[2] + t[0] * e[4], t[5] * e[0] - t[3] * e[1] + t[1] * e[3] + t[0] * e[5], t[6] * e[0] + t[3] * e[2] - t[2] * e[3] + t[0] * e[6], t[7] * e[0] + t[6] * e[1] + t[5] * e[2] + t[4] * e[3] + t[3] * e[4] + t[2] * e[5] + t[1] * e[6]],
            Jn = (e, t) => [Qn(e, t), e[1] * t[7] + e[4] * t[5] - e[5] * t[4] + e[7] * t[1], e[2] * t[7] - e[4] * t[6] + e[6] * t[4] + e[7] * t[2], e[3] * t[7] + e[5] * t[6] - e[6] * t[5] + e[7] * t[3], e[4] * t[7] + e[7] * t[4], e[5] * t[7] + e[7] * t[5], e[6] * t[7] + e[7] * t[6], e[7] * t[7]],
            Qn = (e, t) => e[0] * t[7] + e[1] * t[6] + e[2] * t[5] + e[3] * t[4] + e[4] * t[3] + e[5] * t[2] + e[6] * t[1] + e[7] * t[0],
            $n = (e, t) => [t[0] * e[0] + t[2] * e[2] + t[3] * e[3] - t[6] * e[6], t[1] * e[0] + t[0] * e[1] - t[4] * e[2] + t[5] * e[3] + t[2] * e[4] - t[3] * e[5] - t[7] * e[6] - t[6] * e[7], t[2] * e[0] + t[0] * e[2] - t[6] * e[3] + t[3] * e[6], t[3] * e[0] + t[6] * e[2] + t[0] * e[3] - t[2] * e[6], t[4] * e[0] + t[7] * e[3] + t[0] * e[4] + t[3] * e[7], t[5] * e[0] + t[7] * e[2] + t[0] * e[5] + t[2] * e[7], t[6] * e[0] + t[0] * e[6], t[7] * e[0] + t[0] * e[7]],
            eo = e => Math.sqrt(Math.abs(e[0] * e[0] - e[2] * e[2] - e[3] * e[3] + e[6] * e[6])),
            to = e => Math.sqrt(Math.abs(e[7] * e[7] - e[5] * e[5] - e[4] * e[4] + e[1] * e[1])),
            no = e => {
                const t = eo(e);
                if (0 === t || 1 === t) return e;
                const n = e[6] < 0 ? -1 : 1;
                return Xn(e, n / t)
            },
            oo = e => {
                const t = to(e);
                return 0 === t || 1 === t ? e : Xn(e, 1 / t)
            },
            io = e => "number" === typeof e,
            so = (Gn(1, 1), Gn(1, 2), Gn(1, 3), Gn(1, 4), Gn(1, 5), Gn(1, 6), Gn(1, 7), (e, t, n) => no([0, n, e, t, 0, 0, 0, 0])),
            ao = (e, t) => no(Jn(t, e)),
            ro = (e, t) => $n(e, t),
            lo = ([e, t]) => [0, 0, 0, 0, t, e, 1, 0],
            co = e => [e[5], e[4]],
            ho = (e, t) => no(qn(e, t)),
            uo = (e, t) => eo(Jn(e, t)),
            po = (e, t) => Qn(e, t),
            mo = e => [0, 0, 0, 0, e[4], e[5], 0, 0],
            go = (e, t) => Kn(Xn(e, Math.sin(t / 2)), Math.cos(t / 2)),
            bo = (e, t) => no(Xn(Xn(e, t), Wn(e)));
        var yo = n(18);
        const vo = (e, t, n, o) => {
                const i = 10 / t.zoom.value;
                return !fo(e, t, [n, o]) && wo(e, [n, o], i)
            },
            fo = (e, t, n) => {
                const o = 10 / t.zoom.value,
                    i = "text" === e.type ? Oo : (e => {
                        if ("arrow" === e.type) return !1;
                        if ("freedraw" === e.type) return !0;
                        const t = "transparent" !== e.backgroundColor;
                        return "line" === e.type ? t && wt(e.points) : t
                    })(e) ? ko : Io;
                return So({
                    element: e,
                    point: n,
                    threshold: o,
                    check: i
                })
            },
            xo = (e, t) => e.selectedElementIds[t.id],
            wo = (e, [t, n], o) => {
                const [i, s, a, r] = At(e), l = (i + a) / 2, c = (s + r) / 2, [d, h] = yt(t, n, l, c, -e.angle);
                return d > i - o && d < a + o && h > s - o && h < r + o
            },
            jo = (e, {
                x: t,
                y: n
            }) => {
                const o = Eo(e, e.width, e.height);
                return So({
                    element: e,
                    point: [t, n],
                    threshold: o,
                    check: Ao
                })
            },
            Eo = (e, t, n) => {
                const o = ("diamond" === e.type ? 1 / Math.sqrt(2) : 1) * Math.min(t, n);
                return Math.max(16, Math.min(.25 * o, 32))
            },
            So = e => {
                switch (e.element.type) {
                    case "rectangle":
                    case "text":
                    case "diamond":
                    case "ellipse":
                        const t = Co(e.element, e.point);
                        return e.check(t, e.threshold);
                    case "freedraw":
                        return !!e.check(To(e.element, e.point), e.threshold) && _o(e.element, e.point, e.threshold);
                    case "arrow":
                    case "line":
                        return Do(e);
                    case "selection":
                        return console.warn("This should not happen, we need to investigate why it does."), !1
                }
            },
            Co = (e, t) => {
                switch (e.type) {
                    case "rectangle":
                    case "text":
                        return To(e, t);
                    case "diamond":
                        return Mo(e, t);
                    case "ellipse":
                        return Lo(e, t)
                }
            },
            Oo = (e, t) => e < 0,
            ko = (e, t) => e < t,
            Io = (e, t) => Math.abs(e) < t,
            Ao = (e, t) => 0 <= e && e < t,
            To = (e, t) => {
                const [, n, o, i] = Ro(e, t);
                return Math.max(po(n, so(0, 1, -i)), po(n, so(1, 0, -o)))
            },
            Mo = (e, t) => {
                const [, n, o, i] = Ro(e, t), s = so(i, o, -i * o);
                return po(n, s)
            },
            Lo = (e, t) => {
                const [n, o] = Po(e, t);
                return i = o, -Math.sign(i[1]) * po(n, o);
                var i
            },
            Po = (e, t) => {
                const [, n, o, i] = Ro(e, t), [s, a] = co(n);
                let r = .707,
                    l = .707;
                const c = o,
                    d = i;
                [0, 1, 2, 3].forEach((e => {
                    const t = (c * c - d * d) * r ** 3 / c,
                        n = (d * d - c * c) * l ** 3 / d,
                        o = c * r - t,
                        i = d * l - n,
                        h = s - t,
                        u = a - n,
                        p = Math.hypot(i, o),
                        m = Math.hypot(u, h);
                    r = Math.min(1, Math.max(0, (h * p / m + t) / c)), l = Math.min(1, Math.max(0, (u * p / m + n) / d));
                    const g = Math.hypot(l, r);
                    r /= g, l /= g
                }));
                const h = Un(c * r, d * l);
                var u;
                return [n, ro(ao(n, u = h), u)]
            },
            _o = (e, t, n) => {
                let o, i;
                if (0 === e.angle) o = t[0] - e.x, i = t[1] - e.y;
                else {
                    const [n, s, a, r] = At(e), l = vt(t, [n + (a - n) / 2, s + (r - s) / 2], -e.angle);
                    o = l[0] - e.x, i = l[1] - e.y
                }
                let s, [a, r] = e.points;
                if (2 === e.points.length) return xt(a[0], a[1], o, i) < n || xt(r[0], r[1], o, i) < n;
                for (let l = 1; l < e.points.length - 1; l++) {
                    const t = [r[0] - a[0], r[1] - a[1]],
                        c = Math.hypot(t[1], t[0]),
                        d = [t[0] / c, t[1] / c],
                        h = [o - a[0], i - a[1]],
                        u = (h[0] * d[0] + h[1] * d[1]) / Math.hypot(d[1], d[0]);
                    s = [a[0] + d[0] * u, a[1] + d[1] * u];
                    const p = xt(s[0], s[1], a[0], a[1]),
                        m = xt(s[0], s[1], r[0], r[1]);
                    if (s = m < p && p > c ? r : p < m && m > c ? a : s, Math.hypot(i - s[1], o - s[0]) < n) return !0;
                    a = r, r = e.points[l + 1]
                }
                return !1
            },
            Do = e => {
                const {
                    element: t,
                    threshold: n
                } = e;
                if (!Kt(t)) return !1;
                const [o, i, s, a] = Ro(e.element, e.point), r = so(0, 1, -a), l = so(1, 0, -s);
                if (!ko(po(i, r), n) || !ko(po(i, l), n)) return !1;
                const [c, d] = co(o), h = Kt(t);
                if (e.check === ko) {
                    if (h.some((e => Xo(e, c, d, t.strokeSharpness)))) return !0
                }
                return h.some((e => Zo(e, c, d, n)))
            },
            Ro = (e, t) => {
                const n = lo(t),
                    o = At(e),
                    i = No(o),
                    s = go(i, e.angle),
                    a = bo(s, n),
                    r = (e => [0, 0, 0, 0, Math.abs(e[4]), Math.abs(e[5]), 1, 0])(Yn(a, mo(i))),
                    l = (c = e.x, [0, 0, 0, 0, e.y, c, 0, 0]);
                var c;
                const d = Yn(a, l),
                    [h, u, p, m] = o;
                return [d, r, (p - h) / 2, (m - u) / 2]
            },
            zo = e => {
                const t = At(e),
                    n = No(t),
                    o = go(n, e.angle),
                    i = Wn([1, 0, 0, 0, -.5 * (s = mo(n))[5], .5 * s[4], 0, 0]);
                var s;
                return Xn(i, o)
            },
            No = ([e, t, n, o]) => Un((e + n) / 2, (t + o) / 2),
            Bo = (e, t, n) => {
                const o = zo(e),
                    i = bo(o, lo(t)),
                    s = bo(o, lo(n)),
                    a = ao(i, s),
                    r = e.height / e.width,
                    l = e.width / 2,
                    c = e.height / 2,
                    d = a[2],
                    h = a[3],
                    u = a[1],
                    p = Math.abs(h),
                    m = Math.abs(d);
                switch (e.type) {
                    case "rectangle":
                    case "text":
                        return u / (l * (m + r * p));
                    case "diamond":
                        return p < m ? u / (m * l) : u / (p * c);
                    case "ellipse":
                        return u / (l * Math.sqrt(d ** 2 + r ** 2 * h ** 2))
                }
            },
            Ho = (e, t, n, o = 0) => {
                let i;
                switch (e.type) {
                    case "rectangle":
                    case "text":
                    case "diamond":
                        const n = Vo(e);
                        i = n.flatMap(((e, i) => {
                            const s = [e, n[(i + 1) % 4]];
                            return Fo(t, Uo(s, o))
                        })).concat(n.flatMap((e => Wo(e, o, t))));
                        break;
                    case "ellipse":
                        i = Go(e, o, t)
                }
                if (i.length < 2) return [];
                const s = i.sort(((e, t) => uo(e, n) - uo(t, n)));
                return [s[0], s[s.length - 1]]
            },
            Vo = (e, t = 1) => {
                const n = t * e.width / 2,
                    o = t * e.height / 2;
                switch (e.type) {
                    case "rectangle":
                    case "text":
                        return [Un(n, o), Un(n, -o), Un(-n, -o), Un(-n, o)];
                    case "diamond":
                        return [Un(0, o), Un(n, 0), Un(0, -o), Un(-n, 0)]
                }
            },
            Fo = (e, t) => {
                const [n, o] = t;
                return po(n, e) * po(o, e) >= 0 ? [] : [ho(e, ao(n, o))]
            },
            Uo = (e, t) => {
                const [n, o] = e, i = ((e, t) => {
                    const n = .5 * t;
                    return [1, 0, 0, 0, n * e[4], n * e[5], 0, 0]
                })((s = n, oo([0, 0, 0, 0, (a = o)[4] - s[4], a[5] - s[5], 0, 0])), t);
                var s, a;
                return [bo(i, n), bo(i, o)]
            },
            Go = (e, t, n) => {
                const o = e.width / 2 + t,
                    i = e.height / 2 + t,
                    s = n[2],
                    a = n[3],
                    r = n[1],
                    l = o * o * s * s + i * i * a * a,
                    c = l - r * r;
                if (0 === l || c <= 0) return [];
                const d = Math.sqrt(c),
                    h = -o * o * s * r,
                    u = -i * i * a * r;
                return [Un((h + o * i * a * d) / l, (u - o * i * s * d) / l), Un((h - o * i * a * d) / l, (u + o * i * s * d) / l)]
            },
            Wo = (e, t, n) => {
                if (0 === t) return 0 === po(n, e) ? [e] : [];
                const o = n[2],
                    i = n[3],
                    s = n[1],
                    [a, r] = co(e),
                    l = o * o + i * i,
                    c = t * t * l - (o * a + i * r + s) ** 2;
                if (0 === l || c <= 0) return [];
                const d = Math.sqrt(c),
                    h = a * i * i - r * o * i - o * s,
                    u = r * o * o - a * o * i - i * s;
                return [Un((h + i * d) / l, (u - o * d) / l), Un((h - i * d) / l, (u + o * d) / l)]
            },
            Ko = (e, t, n) => {
                const o = Math.abs(t),
                    i = e.width * o / 2,
                    s = e.height * o / 2,
                    a = Math.sign(t),
                    [r, l] = co(n),
                    c = 0 === l ? 1e-4 : l,
                    d = r ** 2 * s ** 2 + c ** 2 * i ** 2,
                    h = (-r * s ** 2 + a * c * Math.sqrt(Math.max(0, d - i ** 2 * s ** 2))) / d,
                    u = (-h * r - 1) / c,
                    p = -(i ** 2) * h / (u ** 2 * s ** 2 + h ** 2 * i ** 2);
                return Un(p, (-h * p - 1) / u)
            },
            Yo = (e, t, n) => {
                const o = Math.abs(t),
                    i = Math.sign(t),
                    s = Vo(e, o);
                let a = 0,
                    r = null;
                return s.forEach((e => {
                    const t = i * ao(n, e)[1];
                    t > a && (a = t, r = e)
                })), r
            },
            Xo = (e, t, n, o) => {
                const i = Tt(e),
                    s = [];
                let a = !1;
                for (const r of i) "move" === r.op ? (a = !a, a && s.push([r.data[0], r.data[1]])) : "bcurveTo" === r.op && a && (s.push([r.data[0], r.data[1]]), s.push([r.data[2], r.data[3]]), s.push([r.data[4], r.data[5]]));
                if (s.length >= 4) {
                    if ("sharp" === o) return jt(s, t, n);
                    const e = Object(yo.a)(s, 10, 5);
                    return jt(e, t, n)
                }
                return !1
            },
            Zo = (e, t, n, o) => {
                const i = Tt(e);
                let s = [0, 0];
                return i.some((({
                    op: e,
                    data: i
                }, a) => {
                    if ("move" === e) s = i;
                    else if ("bcurveTo" === e) {
                        const e = [i[0], i[1]],
                            a = [i[2], i[3]],
                            r = [i[4], i[5]],
                            l = s;
                        s = r;
                        return ((e, t, n, o, [i, s], a) => {
                            const r = (i, s) => Math.pow(1 - i, 3) * o[s] + 3 * i * Math.pow(1 - i, 2) * n[s] + 3 * Math.pow(i, 2) * (1 - i) * t[s] + e[s] * Math.pow(i, 3);
                            let l = 0;
                            for (; l <= 1;) {
                                const e = r(l, 0),
                                    t = r(l, 1);
                                if (Math.sqrt(Math.pow(e - i, 2) + Math.pow(t - s, 2)) < a) return !0;
                                l += .01
                            }
                            return !1
                        })(l, e, a, r, [t, n], o)
                    }
                    return !1
                }))
            },
            qo = (e, t, n) => t >= e[0] && t <= e[0] + e[2] && n >= e[1] && n <= e[1] + e[3],
            Jo = (e, t, n, o, i, s) => e.reduce(((e, a) => {
                if (e) return e;
                const r = ((e, t, n, o, i, s) => {
                    if (!t.selectedElementIds[e.id]) return !1;
                    const {
                        rotation: a,
                        ...r
                    } = Fn(e, i, s);
                    if (a && qo(a, n, o)) return "rotation";
                    const l = Object.keys(r).filter((e => {
                        const t = r[e];
                        return !!t && qo(t, n, o)
                    }));
                    return l.length > 0 && l[0]
                })(a, t, n, o, i, s);
                return r ? {
                    element: a,
                    transformHandleType: r
                } : null
            }), null),
            Qo = ([e, t, n, o], i, s, a, r) => {
                const l = Vn([e, t, n, o], 0, a, r, Rn);
                return Object.keys(l).find((e => {
                    const t = l[e];
                    return t && qo(t, i, s)
                })) || !1
            },
            $o = ["ns", "nesw", "ew", "nwse"],
            ei = e => {
                const {
                    element: t,
                    transformHandleType: n
                } = e, o = t && Math.sign(t.height) * Math.sign(t.width) === -1;
                let i = null;
                switch (n) {
                    case "n":
                    case "s":
                        i = "ns";
                        break;
                    case "w":
                    case "e":
                        i = "ew";
                        break;
                    case "nw":
                    case "se":
                        i = o ? "nesw" : "nwse";
                        break;
                    case "ne":
                    case "sw":
                        i = o ? "nwse" : "nesw";
                        break;
                    case "rotation":
                        return "grab"
                }
                return i && t && (i = ((e, t) => {
                    const n = $o.indexOf(e);
                    if (n >= 0) {
                        const o = Math.round(t / (Math.PI / 4));
                        e = $o[(n + o) % $o.length]
                    }
                    return e
                })(i, t.angle)), i ? "".concat(i, "-resize") : ""
            };
        class ti {
            constructor(e, t) {
                this.elementId = void 0, this.activePointIndex = void 0, this.isDragging = void 0, this.lastUncommittedPoint = void 0, this.pointerOffset = void 0, this.startBindingElement = void 0, this.endBindingElement = void 0, this.elementId = e.id, ln.mapElementToScene(this.elementId, t), ti.normalizePoints(e), this.activePointIndex = null, this.lastUncommittedPoint = null, this.isDragging = !1, this.pointerOffset = {
                    x: 0,
                    y: 0
                }, this.startBindingElement = "keep", this.endBindingElement = "keep"
            }
            static getElement(e) {
                var t;
                const n = null === (t = ln.getScene(e)) || void 0 === t ? void 0 : t.getNonDeletedElement(e);
                return n || null
            }
            static handlePointDragging(e, t, n, o, i) {
                if (!e.editingLinearElement) return !1;
                const {
                    editingLinearElement: s
                } = e, {
                    activePointIndex: a,
                    elementId: r,
                    isDragging: l
                } = s, c = ti.getElement(r);
                if (!c) return !1;
                if (null != a && a > -1) {
                    !1 === l && t({
                        editingLinearElement: { ...s,
                            isDragging: !0
                        }
                    });
                    const r = ti.createPointAt(c, n - s.pointerOffset.x, o - s.pointerOffset.y, e.gridSize);
                    return ti.movePoint(c, a, r), mt(c) && i(c, 0 === a ? "start" : "end"), !0
                }
                return !1
            }
            static handlePointerUp(e, t, n) {
                const {
                    elementId: o,
                    activePointIndex: i,
                    isDragging: s
                } = t, a = ti.getElement(o);
                if (!a) return t;
                let r = {};
                if (s && (0 === i || i === a.points.length - 1)) {
                    wt(a.points, n.zoom.value) && ti.movePoint(a, i, 0 === i ? a.points[a.points.length - 1] : a.points[0]);
                    r = {
                        [0 === i ? "startBindingElement" : "endBindingElement"]: ni(n) ? pi(Ke(ti.getPointAtIndexGlobalCoordinates(a, i)), ln.getScene(a)) : null
                    }
                }
                return { ...t,
                    ...r,
                    isDragging: !1,
                    pointerOffset: {
                        x: 0,
                        y: 0
                    }
                }
            }
            static handlePointerDown(e, t, n, o, i) {
                const s = {
                    didAddPoint: !1,
                    hitElement: null
                };
                if (!t.editingLinearElement) return s;
                const {
                    elementId: a
                } = t.editingLinearElement, r = ti.getElement(a);
                if (!r) return s;
                if (e.altKey) return null == t.editingLinearElement.lastUncommittedPoint && pn(r, {
                    points: [...r.points, ti.createPointAt(r, i.x, i.y, t.gridSize)]
                }), o.resumeRecording(), n({
                    editingLinearElement: { ...t.editingLinearElement,
                        activePointIndex: r.points.length - 1,
                        lastUncommittedPoint: null,
                        endBindingElement: pi(i, ln.getScene(r))
                    }
                }), s.didAddPoint = !0, s;
                const l = ti.getPointIndexUnderCursor(r, t.zoom, i.x, i.y);
                if (l > -1) s.hitElement = r;
                else {
                    const {
                        startBindingElement: e,
                        endBindingElement: n
                    } = t.editingLinearElement;
                    ni(t) && mt(r) && oi(r, e, n)
                }
                const [c, d, h, u] = At(r), p = (c + h) / 2, m = (d + u) / 2, g = l > -1 && yt(r.x + r.points[l][0], r.y + r.points[l][1], p, m, r.angle);
                return n({
                    editingLinearElement: { ...t.editingLinearElement,
                        activePointIndex: l > -1 ? l : null,
                        pointerOffset: g ? {
                            x: i.x - g[0],
                            y: i.y - g[1]
                        } : {
                            x: 0,
                            y: 0
                        }
                    }
                }), s
            }
            static handlePointerMove(e, t, n, o, i) {
                const {
                    elementId: s,
                    lastUncommittedPoint: a
                } = o, r = ti.getElement(s);
                if (!r) return o;
                const {
                    points: l
                } = r, c = l[l.length - 1];
                if (!e.altKey) return c === a && ti.movePoint(r, l.length - 1, "delete"), { ...o,
                    lastUncommittedPoint: null
                };
                const d = ti.createPointAt(r, t - o.pointerOffset.x, n - o.pointerOffset.y, i);
                return c === a ? ti.movePoint(r, r.points.length - 1, d) : ti.movePoint(r, "new", d), { ...o,
                    lastUncommittedPoint: r.points[r.points.length - 1]
                }
            }
            static getPointsGlobalCoordinates(e) {
                const [t, n, o, i] = At(e), s = (t + o) / 2, a = (n + i) / 2;
                return e.points.map((t => {
                    let {
                        x: n,
                        y: o
                    } = e;
                    return [n, o] = yt(n + t[0], o + t[1], s, a, e.angle), [n, o]
                }))
            }
            static getPointAtIndexGlobalCoordinates(e, t) {
                const n = t < 0 ? e.points.length + t : t,
                    [o, i, s, a] = At(e),
                    r = (o + s) / 2,
                    l = (i + a) / 2,
                    c = e.points[n],
                    {
                        x: d,
                        y: h
                    } = e;
                return yt(d + c[0], h + c[1], r, l, e.angle)
            }
            static pointFromAbsoluteCoords(e, t) {
                const [n, o, i, s] = At(e), a = (n + i) / 2, r = (o + s) / 2, [l, c] = yt(t[0], t[1], a, r, -e.angle);
                return [l - e.x, c - e.y]
            }
            static getPointIndexUnderCursor(e, t, n, o) {
                const i = this.getPointsGlobalCoordinates(e);
                let s = i.length;
                for (; --s > -1;) {
                    const e = i[s];
                    if (xt(n, o, e[0], e[1]) * t.value < this.POINT_HANDLE_SIZE / 2 + 1) return s
                }
                return -1
            }
            static createPointAt(e, t, n, o) {
                const i = Ot(t, n, o),
                    [s, a, r, l] = At(e),
                    c = (s + r) / 2,
                    d = (a + l) / 2,
                    [h, u] = yt(i[0], i[1], c, d, -e.angle);
                return [h - e.x, u - e.y]
            }
            static getNormalizedPoints(e) {
                const {
                    points: t
                } = e, n = t[0][0], o = t[0][1];
                return {
                    points: t.map(((e, t) => [e[0] - n, e[1] - o])),
                    x: e.x + n,
                    y: e.y + o
                }
            }
            static normalizePoints(e) {
                pn(e, ti.getNormalizedPoints(e))
            }
            static movePointByOffset(e, t, n) {
                const [o, i] = e.points[t];
                ti.movePoint(e, t, [o + n.x, i + n.y])
            }
            static movePoint(e, t, n, o) {
                const {
                    points: i
                } = e;
                let s, a = 0,
                    r = 0;
                if ("delete" === n) {
                    if ("new" === t) throw new Error("invalid args in movePoint");
                    s = i.slice(), s.splice(t, 1), 0 === t && (a = s[0][0], r = s[0][1], s = s.map(((e, t) => 0 === t ? [0, 0] : [e[0] - a, e[1] - r])))
                } else if ("new" === t) s = [...i, n];
                else {
                    const e = n[0] - i[t][0],
                        o = n[1] - i[t][1];
                    s = i.map(((n, i) => i === t ? 0 === i ? (a = e, r = o, n) : (a = 0, r = 0, [n[0] + e, n[1] + o]) : a || r ? [n[0] - a, n[1] - r] : n))
                }
                const l = Nt(e, s, e.strokeSharpness || "round"),
                    c = Nt(e, i, e.strokeSharpness || "round"),
                    d = (l[0] + l[2]) / 2,
                    h = (l[1] + l[3]) / 2,
                    u = (c[0] + c[2]) / 2,
                    p = (c[1] + c[3]) / 2,
                    m = yt(a, r, u - d, p - h, e.angle);
                pn(e, { ...o,
                    points: s,
                    x: e.x + m[0],
                    y: e.y + m[1]
                })
            }
        }
        ti.POINT_HANDLE_SIZE = 20;
        const ni = e => e.isBindingEnabled,
            oi = (e, t, n) => {
                const o = new Set,
                    i = new Set;
                ii(e, t, n, "start", o, i), ii(e, n, t, "end", o, i);
                const s = Array.from(i).filter((e => !o.has(e)));
                ln.getScene(e).getNonDeletedElements(s).forEach((t => {
                    var n;
                    pn(t, {
                        boundElementIds: null === (n = t.boundElementIds) || void 0 === n ? void 0 : n.filter((t => t !== e.id))
                    })
                }))
            },
            ii = (e, t, n, o, i, s) => {
                if ("keep" !== t)
                    if (null != t) null != n && ("keep" === n ? ci(e, t, o) : "start" !== o && n.id === t.id) || (li(e, t, o), i.add(t.id));
                    else {
                        const t = ui(e, o);
                        null != t && s.add(t)
                    }
            },
            si = e => {
                e.forEach((e => {
                    mt(e) ? oi(e, wi(e, "start"), wi(e, "end")) : bt(e) && ai(e)
                }))
            },
            ai = e => {
                Ei(e).forEach((([t, n]) => oi(t, "end" === n ? "keep" : e, "start" === n ? "keep" : e)))
            },
            ri = (e, t, n, o) => {
                null != t.startBoundElement && li(e, t.startBoundElement, "start");
                const i = pi(o, n);
                null == i || ci(e, i, "end") || li(e, i, "end")
            },
            li = (e, t, n) => {
                var o;
                pn(e, {
                    ["start" === n ? "startBinding" : "endBinding"]: {
                        elementId: t.id,
                        ...mi(e, t, n)
                    }
                }), pn(t, {
                    boundElementIds: Array.from(new Set([...null !== (o = t.boundElementIds) && void 0 !== o ? o : [], e.id]))
                })
            },
            ci = (e, t, n) => {
                const o = e["start" === n ? "endBinding" : "startBinding"];
                return di(e, null === o || void 0 === o ? void 0 : o.elementId, t)
            },
            di = (e, t, n) => t === n.id && e.points.length < 3,
            hi = e => {
                e.forEach((e => {
                    mt(e) && oi(e, null, null)
                }))
            },
            ui = (e, t) => {
                const n = "start" === t ? "startBinding" : "endBinding",
                    o = e[n];
                return null == o ? null : (pn(e, {
                    [n]: null
                }), o.elementId)
            },
            pi = (e, t) => ls(t.getElements(), (t => bt(t) && jo(t, e))),
            mi = (e, t, n) => {
                const o = "start" === n ? -1 : 1,
                    i = -1 === o ? 0 : e.points.length - 1,
                    s = i - o,
                    a = ti.getPointAtIndexGlobalCoordinates(e, i),
                    r = ti.getPointAtIndexGlobalCoordinates(e, s);
                return {
                    focus: Bo(t, r, a),
                    gap: Math.max(1, Co(t, a))
                }
            },
            gi = (e, t) => {
                var n;
                const o = null !== (n = e.boundElementIds) && void 0 !== n ? n : [];
                if (0 === o.length) return;
                const {
                    newSize: i,
                    simultaneouslyUpdated: s
                } = null !== t && void 0 !== t ? t : {}, a = yi(s);
                ln.getScene(e).getNonDeletedElements(o).forEach((t => {
                    const n = e;
                    if (!bi(t, n)) return;
                    const o = fi(n, t.startBinding, i),
                        s = fi(n, t.endBinding, i);
                    a.has(t.id) ? pn(t, {
                        startBinding: o,
                        endBinding: s
                    }) : (vi(t, "start", o, e), vi(t, "end", s, e))
                }))
            },
            bi = (e, t) => {
                var n, o;
                return (null === (n = e.startBinding) || void 0 === n ? void 0 : n.elementId) === t.id || (null === (o = e.endBinding) || void 0 === o ? void 0 : o.elementId) === t.id
            },
            yi = e => new Set((e || []).map((e => e.id))),
            vi = (e, t, n, o) => {
                if (null == n || n.elementId !== o.id && e.points.length > 2) return;
                const i = ln.getScene(e).getElement(n.elementId);
                if (null == i) return;
                const s = "start" === t ? -1 : 1,
                    a = -1 === s ? 0 : e.points.length - 1,
                    r = a - s,
                    l = ti.getPointAtIndexGlobalCoordinates(e, r),
                    c = ((e, t, n) => {
                        if (0 === t) {
                            const t = At(e),
                                n = No(t);
                            return co(n)
                        }
                        const o = zo(e),
                            i = bo(o, lo(n)),
                            s = Wn(o);
                        let a;
                        switch (e.type) {
                            case "rectangle":
                            case "text":
                            case "diamond":
                                a = Yo(e, t, i);
                                break;
                            case "ellipse":
                                a = Ko(e, t, i)
                        }
                        return co(bo(s, a))
                    })(i, n.focus, l);
                let d;
                if (0 === n.gap) d = c;
                else {
                    const e = ((e, t, n, o = 0) => {
                        const i = zo(e),
                            s = bo(i, lo(t)),
                            a = bo(i, lo(n)),
                            r = ao(s, a),
                            l = Wn(i);
                        return Ho(e, r, s, o).map((e => co(bo(l, e))))
                    })(i, l, c, n.gap);
                    d = 0 === e.length ? c : e[0]
                }
                ti.movePoint(e, a, ti.pointFromAbsoluteCoords(e, d), {
                    ["start" === t ? "startBinding" : "endBinding"]: n
                })
            },
            fi = (e, t, n) => {
                if (null == t || null == n) return t;
                const {
                    gap: o,
                    focus: i,
                    elementId: s
                } = t, {
                    width: a,
                    height: r
                } = n, {
                    width: l,
                    height: c
                } = e;
                return {
                    elementId: s,
                    gap: Math.max(1, Math.min(Eo(e, a, r), o * (a < r ? a / l : r / c))),
                    focus: i
                }
            },
            xi = e => [wi(e, "start"), wi(e, "end")].filter((e => null != e)),
            wi = (e, t) => pi(ji(e, t), ln.getScene(e)),
            ji = (e, t) => {
                const n = "start" === t ? 0 : -1;
                return Ke(ti.getPointAtIndexGlobalCoordinates(e, n))
            },
            Ei = e => ln.getScene(e).getElements().map((t => {
                if (!mt(t)) return null;
                const n = Si(t, "start", e),
                    o = Si(t, "end", e);
                return n || o ? [t, n && o ? "both" : n ? "start" : "end", e] : null
            })).filter((e => null != e)),
            Si = (e, t, n) => null == e["start" === t ? "startBinding" : "endBinding"] && !ci(e, n, t) && jo(n, ji(e, t)),
            Ci = (e, t, n, o) => {
                const i = new Set,
                    s = new Set,
                    a = "duplicatesServeAsOld" === o;
                t.forEach((e => {
                    const {
                        boundElementIds: t
                    } = e;
                    if (null != t && t.length > 0 && (t.forEach((e => {
                            a && !n.has(e) && i.add(e)
                        })), s.add(n.get(e.id))), mt(e)) {
                        if (null != e.startBinding) {
                            const {
                                elementId: t
                            } = e.startBinding;
                            a && !n.has(t) && s.add(t)
                        }
                        if (null != e.endBinding) {
                            const {
                                elementId: t
                            } = e.endBinding;
                            a && !n.has(t) && s.add(t)
                        }
                        null == e.startBinding && null == e.endBinding || i.add(n.get(e.id))
                    }
                })), e.filter((({
                    id: e
                }) => i.has(e))).forEach((e => {
                    const {
                        startBinding: t,
                        endBinding: o
                    } = e;
                    pn(e, {
                        startBinding: Oi(t, n),
                        endBinding: Oi(o, n)
                    })
                })), e.filter((({
                    id: e
                }) => s.has(e))).forEach((e => {
                    const {
                        boundElementIds: t
                    } = e;
                    null != t && t.length > 0 && pn(e, {
                        boundElementIds: t.map((e => {
                            var t;
                            return null !== (t = n.get(e)) && void 0 !== t ? t : e
                        }))
                    })
                }))
            },
            Oi = (e, t) => {
                var n;
                if (null == e) return null;
                const {
                    elementId: o,
                    focus: i,
                    gap: s
                } = e;
                return {
                    focus: i,
                    gap: s,
                    elementId: null !== (n = t.get(o)) && void 0 !== n ? n : o
                }
            },
            ki = (e, t) => {
                const n = new Set(t.map((e => e.id))),
                    o = new Set;
                t.forEach((e => {
                    var t;
                    bt(e) && (null === (t = e.boundElementIds) || void 0 === t || t.forEach((e => {
                        n.has(e) || o.add(e)
                    })))
                })), e.filter((({
                    id: e
                }) => o.has(e))).forEach((e => {
                    const {
                        startBinding: t,
                        endBinding: o
                    } = e;
                    pn(e, {
                        startBinding: Ii(t, n),
                        endBinding: Ii(o, n)
                    })
                }))
            },
            Ii = (e, t) => null == e || t.has(e.elementId) ? null : e,
            Ai = e => e >= 2 * Math.PI ? e - 2 * Math.PI : e,
            Ti = (e, t, n, o) => {
                const [i, s, a, r] = At(e), l = (i + a) / 2, c = (s + r) / 2;
                let h = 5 * Math.PI / 2 + Math.atan2(n - c, t - l);
                o && (h += d.F / 2, h -= h % d.F), h = Ai(h), pn(e, {
                    angle: h
                })
            },
            Mi = (e, t, n, o, i) => {
                const [s, a, r, l] = At(e), c = (s + r) / 2, d = (a + l) / 2, [h, u] = yt(o, i, c, d, -e.angle);
                let [p, m] = "end" === t ? [h - e.x, u - e.y] : [e.x + e.points[1][0] - h, e.y + e.points[1][1] - u];
                n && ([p, m] = ((e, t, n, o) => {
                    const i = yn(e, ...yt(t, n, 0, 0, o));
                    return yt(i.width, i.height, 0, 0, -o)
                })(e.type, p, m, e.angle));
                const [g, b] = ft("end" === t ? {
                    s: !0,
                    e: !0
                } : {
                    n: !0,
                    w: !0
                }, e.x, e.y, e.angle, 0, 0, (e.points[1][0] - p) / 2, (e.points[1][1] - m) / 2);
                pn(e, {
                    x: g,
                    y: b,
                    points: [
                        [0, 0],
                        [p, m]
                    ]
                })
            },
            Li = (e, t, n) => ut(e) || dt(e) ? {
                points: It(0, t, It(1, n, e.points))
            } : {},
            Pi = (e, t, n) => {
                const o = e.fontSize * (t / e.width);
                if (o < 1) return null;
                const i = Pe(e.text, Le({
                    fontSize: o,
                    fontFamily: e.fontFamily
                }));
                return {
                    size: o,
                    baseline: i.baseline + (n - i.height)
                }
            },
            _i = (e, t, n, o, i) => {
                const [s, a, r, l] = At(e), c = (s + r) / 2, d = (a + l) / 2, [h, u] = yt(o, i, c, d, -e.angle);
                let p;
                switch (t) {
                    case "se":
                        p = Math.max((h - s) / (r - s), (u - a) / (l - a));
                        break;
                    case "nw":
                        p = Math.max((r - h) / (r - s), (l - u) / (l - a));
                        break;
                    case "ne":
                        p = Math.max((h - s) / (r - s), (l - u) / (l - a));
                        break;
                    case "sw":
                        p = Math.max((r - h) / (r - s), (u - a) / (l - a))
                }
                if (p > 0) {
                    const o = e.width * p,
                        i = e.height * p,
                        c = Pi(e, o, i);
                    if (null === c) return;
                    const [d, h, u, m] = zt(e, o, i), g = (s - d) / 2, b = (a - h) / 2, y = (r - u) / 2, v = (l - m) / 2, [f, x] = ft(((e, t) => ({
                        n: /^(n|ne|nw)$/.test(e) || t && /^(s|se|sw)$/.test(e),
                        s: /^(s|se|sw)$/.test(e) || t && /^(n|ne|nw)$/.test(e),
                        w: /^(w|nw|sw)$/.test(e) || t && /^(e|ne|se)$/.test(e),
                        e: /^(e|ne|se)$/.test(e) || t && /^(w|nw|sw)$/.test(e)
                    }))(t, n), e.x, e.y, e.angle, g, b, y, v);
                    pn(e, {
                        fontSize: c.size,
                        width: o,
                        height: i,
                        baseline: c.baseline,
                        x: f,
                        y: x
                    })
                }
            },
            Di = (e, t, n, o, i, s, a) => {
                const [r, l, c, d] = zt(e, e.width, e.height), h = [r, l], u = [c, d], p = [((m = h)[0] + (g = u)[0]) / 2, (m[1] + g[1]) / 2];
                var m, g;
                const b = vt([s, a], p, -e.angle),
                    [y, v, f, x] = zt(n, n.width, n.height),
                    w = f - y,
                    j = x - v;
                let E = (u[0] - h[0]) / w,
                    S = (u[1] - h[1]) / j;
                o.includes("e") && (E = (b[0] - h[0]) / w), o.includes("s") && (S = (b[1] - h[1]) / j), o.includes("w") && (E = (u[0] - b[0]) / w), o.includes("n") && (S = (u[1] - b[1]) / j);
                const C = e.width,
                    O = e.height;
                let k = n.width * E,
                    I = n.height * S;
                if (i && (k = 2 * k - C, I = 2 * I - O), t) {
                    const e = Math.abs(k) / C,
                        t = Math.abs(I) / O;
                    if (1 === o.length && (I *= e, k *= t), 2 === o.length) {
                        const n = Math.max(e, t);
                        k = C * n * Math.sign(k), I = O * n * Math.sign(I)
                    }
                }
                const [A, T, M, L] = zt(e, k, I), P = M - A, _ = L - T;
                let D = [...h];
                if (["n", "w", "nw"].includes(o) && (D = [u[0] - Math.abs(P), u[1] - Math.abs(_)]), "ne" === o) {
                    const e = [h[0], u[1]];
                    D = [e[0], e[1] - Math.abs(_)]
                }
                if ("sw" === o) {
                    const e = [u[0], h[1]];
                    D = [e[0] - Math.abs(P), e[1]]
                }
                t && (["s", "n"].includes(o) && (D[0] = p[0] - P / 2), ["e", "w"].includes(o) && (D[1] = p[1] - _ / 2)), k < 0 && (o.includes("e") && (D[0] -= Math.abs(P)), o.includes("w") && (D[0] += Math.abs(P))), I < 0 && (o.includes("s") && (D[1] -= Math.abs(_)), o.includes("n") && (D[1] += Math.abs(_))), i && (D[0] = p[0] - Math.abs(P) / 2, D[1] = p[1] - Math.abs(_) / 2);
                const R = e.angle,
                    z = vt(D, p, R),
                    N = [D[0] + Math.abs(P) / 2, D[1] + Math.abs(_) / 2],
                    B = vt(N, p, R);
                D = vt(z, B, -R);
                const H = Li(e, k, I),
                    V = [...D];
                V[0] += e.x - A, V[1] += e.y - T;
                const F = {
                    width: Math.abs(k),
                    height: Math.abs(I),
                    x: V[0],
                    y: V[1],
                    ...H
                };
                0 !== F.width && 0 !== F.height && Number.isFinite(F.x) && Number.isFinite(F.y) && (gi(n, {
                    newSize: {
                        width: F.width,
                        height: F.height
                    }
                }), pn(n, F))
            },
            Ri = (e, t, n, o) => {
                const [i, s, a, r] = Rt(e);
                let l, c;
                switch (t) {
                    case "se":
                        l = Math.max((n - i) / (a - i), (o - s) / (r - s)), c = (e, [t, n], [o, a]) => ({
                            x: e.x + (t - i) * (l - 1) + t - o,
                            y: e.y + (n - s) * (l - 1) + n - a
                        });
                        break;
                    case "nw":
                        l = Math.max((a - n) / (a - i), (r - o) / (r - s)), c = (e, [, , t, n], [, , o, i]) => ({
                            x: e.x - (a - t) * (l - 1) + t - o,
                            y: e.y - (r - n) * (l - 1) + n - i
                        });
                        break;
                    case "ne":
                        l = Math.max((n - i) / (a - i), (r - o) / (r - s)), c = (e, [t, , , n], [o, , , s]) => ({
                            x: e.x + (t - i) * (l - 1) + t - o,
                            y: e.y - (r - n) * (l - 1) + n - s
                        });
                        break;
                    case "sw":
                        l = Math.max((a - n) / (a - i), (o - s) / (r - s)), c = (e, [, t, n], [, o, i]) => ({
                            x: e.x - (a - n) * (l - 1) + n - i,
                            y: e.y + (t - s) * (l - 1) + t - o
                        })
                }
                if (l > 0) {
                    const t = e.reduce(((t, n) => {
                        if (!t) return t;
                        const o = n.width * l,
                            i = n.height * l;
                        let s = {};
                        if ("text" === n.type) {
                            const e = Pi(n, o, i);
                            if (null === e) return null;
                            s = {
                                fontSize: e.size,
                                baseline: e.baseline
                            }
                        }
                        const a = At(n),
                            r = Li(n, o, i);
                        gi(n, {
                            newSize: {
                                width: o,
                                height: i
                            },
                            simultaneouslyUpdated: e
                        });
                        const d = zt({ ...n,
                                ...r
                            }, o, i),
                            {
                                x: h,
                                y: u
                            } = c(n, a, d);
                        return [...t, {
                            width: o,
                            height: i,
                            x: h,
                            y: u,
                            ...r,
                            ...s
                        }]
                    }), []);
                    t && e.forEach(((e, n) => {
                        pn(e, t[n])
                    }))
                }
            },
            zi = (e, t, n, o, i, s, a) => {
                let r = 5 * Math.PI / 2 + Math.atan2(o - a, n - s);
                i && (r += d.F / 2, r -= r % d.F), t.forEach(((t, n) => {
                    var o, i;
                    const [l, c, d, h] = At(t), u = (l + d) / 2, p = (c + h) / 2, m = null !== (o = null === (i = e.originalElements.get(t.id)) || void 0 === i ? void 0 : i.angle) && void 0 !== o ? o : t.angle, [g, b] = yt(u, p, s, a, r + m - t.angle);
                    pn(t, {
                        x: t.x + (g - u),
                        y: t.y + (b - p),
                        angle: Ai(r + m)
                    })
                }))
            },
            Ni = (e, t, n, o, i, s, a, r, l, c) => {
                l && (({
                    width: a,
                    height: r
                } = yn(t, a, s < o ? -r : r)), r < 0 && (r = -r));
                let d = i < n ? n - a : n,
                    h = s < o ? o - r : o;
                c && (d = n - (a += a) / 2, h = o - (r += r) / 2), 0 !== a && 0 !== r && pn(e, {
                    x: d,
                    y: h,
                    width: a,
                    height: r
                })
            },
            Bi = e => e.replace(/\t/g, "        ").replace(/\r?\n|\r/g, "\n"),
            Hi = (e, t, n, o, i) => {
                const {
                    zoom: s,
                    offsetTop: a,
                    offsetLeft: r
                } = o, l = 180 * n / Math.PI;
                let c = (e - 2 * r) * (s.value - 1) / 2;
                const d = (t - 2 * a) * (s.value - 1) / 2;
                return e > i && 1 !== s.value && (c = i / 2 * (s.value - 1)), "translate(".concat(c, "px, ").concat(d, "px) scale(").concat(s.value, ") rotate(").concat(l, "deg)")
            },
            Vi = e => {
                const t = Pe(e.text, Le(e));
                pn(e, {
                    width: t.width,
                    height: t.height,
                    baseline: t.baseline
                })
            },
            Fi = (e, t) => Boolean(!e.viewModeEnabled && (e.editingElement || Qi(t, e).length || "selection" !== e.elementType)),
            Ui = e => e.reduce(((e, t) => (e[t.id] = t, e)), {}),
            Gi = e => e.reduce(((e, t) => e + t.version), 0),
            Wi = e => e.filter((e => !e.isDeleted)),
            Ki = e => !e.isDeleted,
            Yi = e => Wi(e).map((e => pt(e.type) ? { ...e,
                lastCommittedPoint: null
            } : e)),
            Xi = e => Yi(e),
            Zi = e => Yi(e),
            qi = (e, t, n) => {
                const [o, i] = [e.horizontal, e.vertical].map((e => null != e && e.x <= t && t <= e.x + e.width && e.y <= n && n <= e.y + e.height));
                return {
                    isOverEither: o || i,
                    isOverHorizontal: o,
                    isOverVertical: i
                }
            },
            Ji = (e, t) => e.some((e => t.selectedElementIds[e.id])),
            Qi = (e, t) => e.filter((e => t.selectedElementIds[e.id])),
            $i = (e, t) => t.editingElement ? [t.editingElement] : Qi(e, t),
            es = ({
                scenePoint: e,
                viewportDimensions: t,
                zoom: n
            }) => ({
                scrollX: t.width / 2 * (1 / n.value) - e.x - n.translation.x * (1 / n.value),
                scrollY: t.height / 2 * (1 / n.value) - e.y - n.translation.y * (1 / n.value)
            }),
            ts = (e, t, n) => {
                if (!(e = (e => e.filter((e => !e.isDeleted && !bn(e))))(e)).length) return {
                    scrollX: 0,
                    scrollY: 0
                };
                let [o, i, s, a] = Rt(e);
                ((e, t, n) => {
                    const [o, i, s, a] = n, {
                        x: r,
                        y: l
                    } = Fe({
                        sceneX: o,
                        sceneY: i
                    }, e), {
                        x: c,
                        y: d
                    } = Fe({
                        sceneX: s,
                        sceneY: a
                    }, e);
                    return c - r > e.width || d - l > e.height
                })(t, 0, [o, i, s, a]) && ([o, i, s, a] = ((e, t) => {
                    if (!e.length) return [0, 0, 0, 0];
                    let n = 1 / 0,
                        o = e[0];
                    return e.forEach((e => {
                        const [i, s, a, r] = Dt(e), l = xt((i + a) / 2, (s + r) / 2, t.x, t.y);
                        l < n && (n = l, o = e)
                    })), Dt(o)
                })(e, Ve({
                    clientX: t.scrollX,
                    clientY: t.scrollY
                }, t)));
                return es({
                    scenePoint: {
                        x: (o + s) / 2,
                        y: (i + a) / 2
                    },
                    viewportDimensions: {
                        width: t.width,
                        height: t.height
                    },
                    zoom: t.zoom
                })
            },
            ns = e => "rectangle" === e || "ellipse" === e || "diamond" === e || "line" === e,
            os = e => "rectangle" === e || "ellipse" === e || "diamond" === e || "freedraw" === e || "arrow" === e || "line" === e,
            is = e => "rectangle" === e || "ellipse" === e || "diamond" === e || "arrow" === e || "line" === e,
            ss = e => "rectangle" === e || "arrow" === e || "line" === e,
            as = e => "text" === e,
            rs = e => "arrow" === e,
            ls = (e, t) => {
                let n = null;
                for (let o = e.length - 1; o >= 0; --o) {
                    const i = e[o];
                    if (!i.isDeleted && t(i)) {
                        n = i;
                        break
                    }
                }
                return n
            },
            cs = (e, t, n, o = {
                x: 0,
                y: 0
            }) => ({
                value: e,
                translation: {
                    x: o.x - n.left - (o.x - n.left - t.translation.x) * (e / t.value),
                    y: o.y - n.top - (o.y - n.top - t.translation.y) * (e / t.value)
                }
            }),
            ds = e => {
                const t = parseFloat(e.toFixed(2));
                return Math.max(.1, Math.min(t, 10))
            };
        n(24);
        var hs = n(0);
        const us = i.a.forwardRef(((e, t) => {
            const {
                id: n
            } = yd(), o = i.a.useRef(null);
            i.a.useImperativeHandle(t, (() => o.current));
            const s = "ToolIcon_size_".concat(e.size);
            return "button" === e.type || "icon" === e.type ? Object(hs.jsxs)("button", {
                className: Object(st.a)("ToolIcon_type_button", s, e.className, e.visible && !e.hidden ? "ToolIcon_type_button--show" : "ToolIcon_type_button--hide", {
                    ToolIcon: !e.hidden,
                    "ToolIcon--selected": e.selected,
                    "ToolIcon--plain": "icon" === e.type
                }),
                "data-testid": e["data-testid"],
                hidden: e.hidden,
                title: e.title,
                "aria-label": e["aria-label"],
                type: "button",
                onClick: e.onClick,
                ref: o,
                children: [(e.icon || e.label) && Object(hs.jsxs)("div", {
                    className: "ToolIcon__icon",
                    "aria-hidden": "true",
                    children: [e.icon || e.label, e.keyBindingLabel && Object(hs.jsx)("span", {
                        className: "ToolIcon__keybinding",
                        children: e.keyBindingLabel
                    })]
                }), e.showAriaLabel && Object(hs.jsx)("div", {
                    className: "ToolIcon__label",
                    children: e["aria-label"]
                }), e.children]
            }) : Object(hs.jsxs)("label", {
                className: Object(st.a)("ToolIcon", e.className),
                title: e.title,
                children: [Object(hs.jsx)("input", {
                    className: "ToolIcon_type_radio ".concat(s),
                    type: "radio",
                    name: e.name,
                    "aria-label": e["aria-label"],
                    "aria-keyshortcuts": e["aria-keyshortcuts"],
                    "data-testid": e["data-testid"],
                    id: "".concat(n, "-").concat(e.id),
                    onChange: e.onChange,
                    checked: e.checked,
                    ref: o
                }), Object(hs.jsxs)("div", {
                    className: "ToolIcon__icon",
                    children: [e.icon, e.keyBindingLabel && Object(hs.jsx)("span", {
                        className: "ToolIcon__keybinding",
                        children: e.keyBindingLabel
                    })]
                })]
            })
        }));
        us.defaultProps = {
            visible: !0,
            className: "",
            size: "medium"
        };
        const ps = e => "light" === e ? c.orange[4] : c.orange[9],
            ms = e => "light" === e ? c.black : c.gray[4],
            gs = e => "light" === e ? c.white : "#1e1e1e",
            bs = (e, t = 512) => {
                const {
                    width: n = 512,
                    height: o = n,
                    mirror: i,
                    style: s
                } = "number" === typeof t ? {
                    width: t
                } : t;
                return Object(hs.jsx)("svg", {
                    "aria-hidden": "true",
                    focusable: "false",
                    role: "img",
                    viewBox: "0 0 ".concat(n, " ").concat(o),
                    className: Object(st.a)({
                        "rtl-mirror": i
                    }),
                    style: s,
                    children: "string" === typeof e ? Object(hs.jsx)("path", {
                        fill: "currentColor",
                        d: e
                    }) : e
                })
            },
            ys = bs(Object(hs.jsx)("polyline", {
                fill: "none",
                stroke: "currentColor",
                points: "20 6 9 17 4 12"
            }), {
                width: 24,
                height: 24
            }),
            vs = bs("M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z", {
                mirror: !0
            }),
            fs = bs("M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z", {
                width: 448,
                height: 512
            }),
            xs = bs("M252 54L203 8a28 27 0 00-20-8H28C12 0 0 12 0 27v195c0 15 12 26 28 26h204c15 0 28-11 28-26V73a28 27 0 00-8-19zM130 213c-21 0-37-16-37-36 0-19 16-35 37-35 20 0 37 16 37 35 0 20-17 36-37 36zm56-169v56c0 4-4 6-7 6H44c-4 0-7-2-7-6V42c0-4 3-7 7-7h133l4 2 3 2a7 7 0 012 5z M296 201l87 95-188 205-78 9c-10 1-19-8-18-20l9-84zm141-14l-41-44a31 31 0 00-46 0l-38 41 87 95 38-42c13-14 13-36 0-50z", {
                width: 448,
                height: 512
            }),
            ws = bs("M572.694 292.093L500.27 416.248A63.997 63.997 0 0 1 444.989 448H45.025c-18.523 0-30.064-20.093-20.731-36.093l72.424-124.155A64 64 0 0 1 152 256h399.964c18.523 0 30.064 20.093 20.73 36.093zM152 224h328v-48c0-26.51-21.49-48-48-48H272l-64-64H48C21.49 64 0 85.49 0 112v278.046l69.077-118.418C86.214 242.25 117.989 224 152 224z", {
                width: 576,
                height: 512,
                mirror: !0
            }),
            js = bs("M384 112v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h80c0-35.29 28.71-64 64-64s64 28.71 64 64h80c26.51 0 48 21.49 48 48zM192 40c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24m96 114v-20a6 6 0 0 0-6-6H102a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h180a6 6 0 0 0 6-6z", {
                width: 384,
                height: 512
            }),
            Es = bs("M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z", {
                width: 448,
                height: 512
            }),
            Ss = bs("M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"),
            Cs = bs("M384 121.9c0-6.3-2.5-12.4-7-16.9L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128zM571 308l-95.7-96.4c-10.1-10.1-27.4-3-27.4 11.3V288h-64v64h64v65.2c0 14.3 17.3 21.4 27.4 11.3L571 332c6.6-6.6 6.6-17.4 0-24zm-379 28v-32c0-8.8 7.2-16 16-16h176V160H248c-13.2 0-24-10.8-24-24V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V352H208c-8.8 0-16-7.2-16-16z", {
                width: 576,
                height: 512,
                mirror: !0
            }),
            Os = bs(Object(hs.jsxs)(hs.Fragment, {
                children: [Object(hs.jsx)("path", {
                    d: "M571 308l-95.7-96.4c-10.1-10.1-27.4-3-27.4 11.3V288h-64v64h64v65.2c0 14.3 17.3 21.4 27.4 11.3L571 332c6.6-6.6 6.6-17.4 0-24zm-187 44v-64 64z"
                }), Object(hs.jsx)("path", {
                    d: "M384 121.941V128H256V0h6.059c6.362 0 12.471 2.53 16.97 7.029l97.941 97.941a24.01 24.01 0 017.03 16.971zM248 160c-13.2 0-24-10.8-24-24V0H24C10.745 0 0 10.745 0 24v464c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V160H248zm-135.455 16c26.51 0 48 21.49 48 48s-21.49 48-48 48-48-21.49-48-48 21.491-48 48-48zm208 240h-256l.485-48.485L104.545 328c4.686-4.686 11.799-4.201 16.485.485L160.545 368 264.06 264.485c4.686-4.686 12.284-4.686 16.971 0L320.545 304v112z"
                })]
            }), {
                width: 576,
                height: 512,
                mirror: !0
            }),
            ks = bs("M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z", {
                width: 512,
                height: 512
            }),
            Is = bs("M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z", {
                width: 448,
                height: 512
            }),
            As = bs("M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z", {
                width: 448,
                height: 512
            }),
            Ts = bs("M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"),
            Ms = bs("M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"),
            Ls = bs("M255.545 8c-66.269.119-126.438 26.233-170.86 68.685L48.971 40.971C33.851 25.851 8 36.559 8 57.941V192c0 13.255 10.745 24 24 24h134.059c21.382 0 32.09-25.851 16.971-40.971l-41.75-41.75c30.864-28.899 70.801-44.907 113.23-45.273 92.398-.798 170.283 73.977 169.484 169.442C423.236 348.009 349.816 424 256 424c-41.127 0-79.997-14.678-110.63-41.556-4.743-4.161-11.906-3.908-16.368.553L89.34 422.659c-4.872 4.872-4.631 12.815.482 17.433C133.798 479.813 192.074 504 256 504c136.966 0 247.999-111.033 248-247.998C504.001 119.193 392.354 7.755 255.545 8z", {
                mirror: !0
            }),
            Ps = bs("M256.455 8c66.269.119 126.437 26.233 170.859 68.685l35.715-35.715C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.75c-30.864-28.899-70.801-44.907-113.23-45.273-92.398-.798-170.283 73.977-169.484 169.442C88.764 348.009 162.184 424 256 424c41.127 0 79.997-14.678 110.629-41.556 4.743-4.161 11.906-3.908 16.368.553l39.662 39.662c4.872 4.872 4.631 12.815-.482 17.433C378.202 479.813 319.926 504 256 504 119.034 504 8.001 392.967 8 256.002 7.999 119.193 119.646 7.755 256.455 8z", {
                mirror: !0
            }),
            _s = bs("M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z", {
                mirror: !0
            }),
            Ds = bs("M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z", {
                width: 24,
                height: 24
            }),
            Rs = bs("M16 5l-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4 4 4zm4 5v11c0 1.1-.9 2-2 2H6c-1.11 0-2-.9-2-2V10c0-1.11.89-2 2-2h3v2H6v11h12V10h-3V8h3c1.1 0 2 .89 2 2z", {
                width: 24,
                height: 24
            }),
            zs = bs(Object(hs.jsxs)(hs.Fragment, {
                children: [Object(hs.jsx)("path", {
                    stroke: "currentColor",
                    fill: "currentColor",
                    d: "M40 5.6v6.1l-4.1.7c-8.9 1.4-16.5 6.9-20.6 15C13 32 10.9 43 12.4 43c.4 0 2.4-1.3 4.4-3 5-3.9 12.1-7 18.2-7.7l5-.6v12.8l11.2-11.3L62.5 22 51.2 10.8 40-.5v6.1zm10.2 22.6L44 34.5v-6.8l-6.9.6c-3.9.3-9.8 1.7-13.2 3.1-3.5 1.4-6.5 2.4-6.7 2.2-.9-1 3-7.5 6.4-10.8C28 18.6 34.4 16 40.1 16c3.7 0 3.9-.1 3.9-3.2V9.5l6.2 6.3 6.3 6.2-6.3 6.2z"
                }), Object(hs.jsx)("path", {
                    stroke: "currentColor",
                    fill: "currentColor",
                    d: "M0 36v20h48v-6.2c0-6 0-6.1-2-4.3-1.1 1-2 2.9-2 4.2V52H4V34c0-17.3-.1-18-2-18s-2 .7-2 20z"
                })]
            }), {
                width: 64,
                height: 64
            }),
            Ns = (bs(Object(hs.jsx)("path", {
                stroke: "currentColor",
                strokeWidth: "40",
                fill: "currentColor",
                d: "M148 560a318 318 0 0 0 522 110 316 316 0 0 0 0-450 316 316 0 0 0-450 0c-11 11-21 22-30 34v4h47c25 0 46 21 46 46s-21 45-46 45H90c-13 0-25-6-33-14-9-9-14-20-14-33V156c0-25 20-45 45-45s45 20 45 45v32l1 1a401 401 0 0 1 623 509l212 212a42 42 0 0 1-59 59L698 757A401 401 0 0 1 65 570a42 42 0 0 1 83-10z"
            }), {
                width: 1024
            }), i.a.memo((({
                theme: e
            }) => bs(Object(hs.jsxs)(hs.Fragment, {
                children: [Object(hs.jsx)("path", {
                    d: "M22 9.556C22 8.696 21.303 8 20.444 8H16v8H8v4.444C8 21.304 8.697 22 9.556 22h10.888c.86 0 1.556-.697 1.556-1.556V9.556z",
                    fill: ms(e),
                    stroke: ms(e),
                    strokeWidth: "2"
                }), Object(hs.jsx)("path", {
                    d: "M16 3.556C16 2.696 15.303 2 14.444 2H3.556C2.696 2 2 2.697 2 3.556v10.888C2 15.304 2.697 16 3.556 16h10.888c.86 0 1.556-.697 1.556-1.556V3.556z",
                    fill: ps(e),
                    stroke: ps(e),
                    strokeWidth: "2"
                })]
            }), {
                width: 24,
                mirror: !0
            })))),
            Bs = i.a.memo((({
                theme: e
            }) => bs(Object(hs.jsxs)(hs.Fragment, {
                children: [Object(hs.jsx)("path", {
                    d: "M16 3.556C16 2.696 15.303 2 14.444 2H3.556C2.696 2 2 2.697 2 3.556v10.888C2 15.304 2.697 16 3.556 16h10.888c.86 0 1.556-.697 1.556-1.556V3.556z",
                    fill: ps(e),
                    stroke: ps(e),
                    strokeWidth: "2"
                }), Object(hs.jsx)("path", {
                    d: "M22 9.556C22 8.696 21.303 8 20.444 8H9.556C8.696 8 8 8.697 8 9.556v10.888C8 21.304 8.697 22 9.556 22h10.888c.86 0 1.556-.697 1.556-1.556V9.556z",
                    fill: ms(e),
                    stroke: ms(e),
                    strokeWidth: "2"
                })]
            }), {
                width: 24,
                mirror: !0
            }))),
            Hs = i.a.memo((({
                theme: e
            }) => bs(Object(hs.jsxs)(hs.Fragment, {
                children: [Object(hs.jsx)("path", {
                    d: "M13 21a1 1 0 001 1h7a1 1 0 001-1v-7a1 1 0 00-1-1h-3v5h-5v3zM11 3a1 1 0 00-1-1H3a1 1 0 00-1 1v7a1 1 0 001 1h3V6h5V3z",
                    fill: ms(e),
                    stroke: ms(e),
                    strokeWidth: "2"
                }), Object(hs.jsx)("path", {
                    d: "M18 7.333C18 6.597 17.403 6 16.667 6H7.333C6.597 6 6 6.597 6 7.333v9.334C6 17.403 6.597 18 7.333 18h9.334c.736 0 1.333-.597 1.333-1.333V7.333z",
                    fill: ps(e),
                    stroke: ps(e),
                    strokeWidth: "2"
                })]
            }), {
                width: 24,
                mirror: !0
            }))),
            Vs = i.a.memo((({
                theme: e
            }) => bs(Object(hs.jsxs)(hs.Fragment, {
                children: [Object(hs.jsx)("path", {
                    d: "M18 7.333C18 6.597 17.403 6 16.667 6H7.333C6.597 6 6 6.597 6 7.333v9.334C6 17.403 6.597 18 7.333 18h9.334c.736 0 1.333-.597 1.333-1.333V7.333z",
                    fill: ps(e),
                    stroke: ps(e),
                    strokeWidth: "2"
                }), Object(hs.jsx)("path", {
                    d: "M11 3a1 1 0 00-1-1H3a1 1 0 00-1 1v7a1 1 0 001 1h8V3zM22 14a1 1 0 00-1-1h-7a1 1 0 00-1 1v7a1 1 0 001 1h8v-8z",
                    fill: ms(e),
                    stroke: ms(e),
                    strokeWidth: "2"
                })]
            }), {
                width: 24,
                mirror: !0
            }))),
            Fs = i.a.memo((({
                theme: e
            }) => bs(Object(hs.jsxs)(hs.Fragment, {
                children: [Object(hs.jsx)("path", {
                    d: "M 2,5 H 22",
                    fill: ms(e),
                    stroke: ms(e),
                    strokeWidth: "2",
                    strokeLinecap: "round"
                }), Object(hs.jsx)("path", {
                    d: "M 6,7 C 5.446,7 5,7.446 5,8 v 9.999992 c 0,0.554 0.446,1 1,1 h 3.0000001 c 0.554,0 0.9999999,-0.446 0.9999999,-1 V 8 C 10,7.446 9.5540001,7 9.0000001,7 Z m 9,0 c -0.554,0 -1,0.446 -1,1 v 5.999992 c 0,0.554 0.446,1 1,1 h 3 c 0.554,0 1,-0.446 1,-1 V 8 C 19,7.446 18.554,7 18,7 Z",
                    fill: ps(e),
                    stroke: ps(e),
                    strokeWidth: "2"
                })]
            }), {
                width: 24,
                mirror: !0
            }))),
            Us = i.a.memo((({
                theme: e
            }) => bs(Object(hs.jsxs)(hs.Fragment, {
                children: [Object(hs.jsx)("path", {
                    d: "M 2,19 H 22",
                    fill: ms(e),
                    stroke: ms(e),
                    strokeWidth: "2",
                    strokeLinecap: "round"
                }), Object(hs.jsx)("path", {
                    d: "m 6,16.999992 c -0.554,0 -1,-0.446 -1,-1 V 6 C 5,5.446 5.446,5 6,5 H 9.0000001 C 9.5540001,5 10,5.446 10,6 v 9.999992 c 0,0.554 -0.4459999,1 -0.9999999,1 z m 9,0 c -0.554,0 -1,-0.446 -1,-1 V 10 c 0,-0.554 0.446,-1 1,-1 h 3 c 0.554,0 1,0.446 1,1 v 5.999992 c 0,0.554 -0.446,1 -1,1 z",
                    fill: ps(e),
                    stroke: ps(e),
                    strokeWidth: "2"
                })]
            }), {
                width: 24,
                mirror: !0
            }))),
            Gs = i.a.memo((({
                theme: e
            }) => bs(Object(hs.jsxs)(hs.Fragment, {
                children: [Object(hs.jsx)("path", {
                    d: "M 5,2 V 22",
                    fill: ms(e),
                    stroke: ms(e),
                    strokeWidth: "2",
                    strokeLinecap: "round"
                }), Object(hs.jsx)("path", {
                    d: "m 7.000004,5.999996 c 0,-0.554 0.446,-1 1,-1 h 9.999992 c 0.554,0 1,0.446 1,1 v 3.0000001 c 0,0.554 -0.446,0.9999999 -1,0.9999999 H 8.000004 c -0.554,0 -1,-0.4459999 -1,-0.9999999 z m 0,9 c 0,-0.554 0.446,-1 1,-1 h 5.999992 c 0.554,0 1,0.446 1,1 v 3 c 0,0.554 -0.446,1 -1,1 H 8.000004 c -0.554,0 -1,-0.446 -1,-1 z",
                    fill: ps(e),
                    stroke: ps(e),
                    strokeWidth: "2"
                })]
            }), {
                width: 24
            }))),
            Ws = i.a.memo((({
                theme: e
            }) => bs(Object(hs.jsxs)(hs.Fragment, {
                children: [Object(hs.jsx)("path", {
                    d: "M 19,2 V 22",
                    fill: ms(e),
                    stroke: ms(e),
                    strokeWidth: "2",
                    strokeLinecap: "round"
                }), Object(hs.jsx)("path", {
                    d: "m 16.999996,5.999996 c 0,-0.554 -0.446,-1 -1,-1 H 6.000004 c -0.554,0 -1,0.446 -1,1 v 3.0000001 c 0,0.554 0.446,0.9999999 1,0.9999999 h 9.999992 c 0.554,0 1,-0.4459999 1,-0.9999999 z m 0,9 c 0,-0.554 -0.446,-1 -1,-1 h -5.999992 c -0.554,0 -1,0.446 -1,1 v 3 c 0,0.554 0.446,1 1,1 h 5.999992 c 0.554,0 1,-0.446 1,-1 z",
                    fill: ps(e),
                    stroke: ps(e),
                    strokeWidth: "2"
                })]
            }), {
                width: 24
            }))),
            Ks = i.a.memo((({
                theme: e
            }) => bs(Object(hs.jsxs)(hs.Fragment, {
                children: [Object(hs.jsx)("path", {
                    d: "M19 5V19M5 5V19",
                    stroke: ms(e),
                    strokeWidth: "2",
                    strokeLinecap: "round"
                }), Object(hs.jsx)("path", {
                    d: "M15 9C15.554 9 16 9.446 16 10V14C16 14.554 15.554 15 15 15H9C8.446 15 8 14.554 8 14V10C8 9.446 8.446 9 9 9H15Z",
                    fill: ps(e),
                    stroke: ps(e),
                    strokeWidth: "2"
                })]
            }), {
                width: 24
            }))),
            Ys = i.a.memo((({
                theme: e
            }) => bs(Object(hs.jsxs)(hs.Fragment, {
                children: [Object(hs.jsx)("path", {
                    d: "M5 5L19 5M5 19H19",
                    fill: ms(e),
                    stroke: ms(e),
                    strokeWidth: "2",
                    strokeLinecap: "round"
                }), Object(hs.jsx)("path", {
                    d: "M15 9C15.554 9 16 9.446 16 10V14C16 14.554 15.554 15 15 15H9C8.446 15 8 14.554 8 14V10C8 9.446 8.446 9 9 9H15Z",
                    fill: ps(e),
                    stroke: ps(e),
                    strokeWidth: "2"
                })]
            }), {
                width: 24
            }))),
            Xs = i.a.memo((({
                theme: e
            }) => bs(Object(hs.jsxs)(hs.Fragment, {
                children: [Object(hs.jsx)("path", {
                    d: "m 5.000004,16.999996 c 0,0.554 0.446,1 1,1 h 3 c 0.554,0 1,-0.446 1,-1 v -10 c 0,-0.554 -0.446,-1 -1,-1 h -3 c -0.554,0 -1,0.446 -1,1 z m 9,-2 c 0,0.554 0.446,1 1,1 h 3 c 0.554,0 1,-0.446 1,-1 v -6 c 0,-0.554 -0.446,-1 -1,-1 h -3 c -0.554,0 -1,0.446 -1,1 z",
                    fill: ps(e),
                    stroke: ps(e),
                    strokeWidth: "2"
                }), Object(hs.jsx)("path", {
                    d: "M 2,12 H 22",
                    fill: ms(e),
                    stroke: ms(e),
                    strokeWidth: "2",
                    strokeDasharray: "1, 2.8",
                    strokeLinecap: "round"
                })]
            }), {
                width: 24,
                mirror: !0
            }))),
            Zs = i.a.memo((({
                theme: e
            }) => bs(Object(hs.jsxs)(hs.Fragment, {
                children: [Object(hs.jsx)("path", {
                    d: "M 7 5 C 6.446 5 6 5.446 6 6 L 6 9 C 6 9.554 6.446 10 7 10 L 17 10 C 17.554 10 18 9.554 18 9 L 18 6 C 18 5.446 17.554 5 17 5 L 7 5 z M 9 14 C 8.446 14 8 14.446 8 15 L 8 18 C 8 18.554 8.446 19 9 19 L 15 19 C 15.554 19 16 18.554 16 18 L 16 15 C 16 14.446 15.554 14 15 14 L 9 14 z ",
                    fill: ps(e),
                    stroke: ps(e),
                    strokeWidth: "2"
                }), Object(hs.jsx)("path", {
                    d: "M 12,2 V 22",
                    fill: ms(e),
                    stroke: ms(e),
                    strokeWidth: "2",
                    strokeDasharray: "1, 2.8",
                    strokeLinecap: "round"
                })]
            }), {
                width: 24
            }))),
            qs = bs("M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z", {
                width: 640,
                height: 512,
                mirror: !0
            }),
            Js = bs("M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z"),
            Qs = bs("M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm96 328c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16v160z"),
            $s = bs("M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z", {
                width: 352,
                height: 512
            }),
            ea = bs("M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z", {
                width: 320,
                height: 512,
                style: {
                    marginLeft: "-0.2rem"
                },
                mirror: !0
            }),
            ta = bs("M464 0c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48H176c-26.51 0-48-21.49-48-48V48c0-26.51 21.49-48 48-48h288M176 416c-44.112 0-80-35.888-80-80V128H48c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48v-48H176z", {
                mirror: !0
            }),
            na = bs("M11.553 22.894a.998.998 0 00.894 0s3.037-1.516 5.465-4.097C19.616 16.987 21 14.663 21 12V5a1 1 0 00-.649-.936l-8-3a.998.998 0 00-.702 0l-8 3A1 1 0 003 5v7c0 2.663 1.384 4.987 3.088 6.797 2.428 2.581 5.465 4.097 5.465 4.097zm-1.303-8.481l6.644-6.644a.856.856 0 111.212 1.212l-7.25 7.25a.856.856 0 01-1.212 0l-3.75-3.75a.856.856 0 111.212-1.212l3.144 3.144z", {
                width: 24
            }),
            oa = bs("M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zM332.1 128H256V51.9l76.1 76.1zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288H48zm32-48h224V288l-23.5-23.5c-4.7-4.7-12.3-4.7-17 0L176 352l-39.5-39.5c-4.7-4.7-12.3-4.7-17 0L80 352v64zm48-240c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z", {
                width: 384,
                height: 512
            }),
            ia = i.a.memo((({
                theme: e
            }) => bs(Object(hs.jsxs)(hs.Fragment, {
                children: [Object(hs.jsx)("path", {
                    d: "M25 26H111V111H25",
                    fill: ms(e)
                }), Object(hs.jsx)("path", {
                    d: "M25 111C25 80.2068 25 49.4135 25 26M25 26C48.6174 26 72.2348 26 111 26H25ZM25 26C53.3671 26 81.7343 26 111 26H25ZM111 26C111 52.303 111 78.606 111 111V26ZM111 26C111 51.2947 111 76.5893 111 111V26ZM111 111C87.0792 111 63.1585 111 25 111H111ZM111 111C87.4646 111 63.9293 111 25 111H111ZM25 111C25 81.1514 25 51.3028 25 26V111Z",
                    stroke: ms(e),
                    strokeWidth: "2"
                }), Object(hs.jsx)("path", {
                    d: "M100 100H160V160H100",
                    fill: ms(e)
                }), Object(hs.jsx)("path", {
                    d: "M100 160C100 144.106 100 128.211 100 100M100 100C117.706 100 135.412 100 160 100H100ZM100 100C114.214 100 128.428 100 160 100H100ZM160 100C160 120.184 160 140.369 160 160V100ZM160 100C160 113.219 160 126.437 160 160V100ZM160 160C145.534 160 131.068 160 100 160H160ZM160 160C143.467 160 126.934 160 100 160H160ZM100 160C100 143.661 100 127.321 100 100V160Z",
                    stroke: ms(e),
                    strokeWidth: "2"
                }), Object(hs.jsxs)("g", {
                    fill: gs(e),
                    stroke: ms(e),
                    strokeWidth: "6",
                    children: [Object(hs.jsx)("rect", {
                        x: "2.5",
                        y: "2.5",
                        width: "30",
                        height: "30"
                    }), Object(hs.jsx)("rect", {
                        x: "2.5",
                        y: "149.5",
                        width: "30",
                        height: "30"
                    }), Object(hs.jsx)("rect", {
                        x: "147.5",
                        y: "149.5",
                        width: "30",
                        height: "30"
                    }), Object(hs.jsx)("rect", {
                        x: "147.5",
                        y: "2.5",
                        width: "30",
                        height: "30"
                    })]
                })]
            }), {
                width: 182,
                height: 182,
                mirror: !0
            }))),
            sa = i.a.memo((({
                theme: e
            }) => bs(Object(hs.jsxs)(hs.Fragment, {
                children: [Object(hs.jsx)("path", {
                    d: "M25 26H111V111H25",
                    fill: ms(e)
                }), Object(hs.jsx)("path", {
                    d: "M25 111C25 80.2068 25 49.4135 25 26M25 26C48.6174 26 72.2348 26 111 26H25ZM25 26C53.3671 26 81.7343 26 111 26H25ZM111 26C111 52.303 111 78.606 111 111V26ZM111 26C111 51.2947 111 76.5893 111 111V26ZM111 111C87.0792 111 63.1585 111 25 111H111ZM111 111C87.4646 111 63.9293 111 25 111H111ZM25 111C25 81.1514 25 51.3028 25 26V111Z",
                    stroke: ms(e),
                    strokeWidth: "2"
                }), Object(hs.jsx)("path", {
                    d: "M100 100H160V160H100",
                    fill: ms(e)
                }), Object(hs.jsx)("path", {
                    d: "M100 160C100 144.106 100 128.211 100 100M100 100C117.706 100 135.412 100 160 100H100ZM100 100C114.214 100 128.428 100 160 100H100ZM160 100C160 120.184 160 140.369 160 160V100ZM160 100C160 113.219 160 126.437 160 160V100ZM160 160C145.534 160 131.068 160 100 160H160ZM160 160C143.467 160 126.934 160 100 160H160ZM100 160C100 143.661 100 127.321 100 100V160Z",
                    stroke: ms(e),
                    strokeWidth: "2"
                }), Object(hs.jsxs)("g", {
                    fill: gs(e),
                    stroke: ms(e),
                    strokeWidth: "6",
                    children: [Object(hs.jsx)("rect", {
                        x: "2.5",
                        y: "2.5",
                        width: "30",
                        height: "30"
                    }), Object(hs.jsx)("rect", {
                        x: "78.5",
                        y: "149.5",
                        width: "30",
                        height: "30"
                    }), Object(hs.jsx)("rect", {
                        x: "147.5",
                        y: "149.5",
                        width: "30",
                        height: "30"
                    }), Object(hs.jsx)("rect", {
                        x: "147.5",
                        y: "78.5",
                        width: "30",
                        height: "30"
                    }), Object(hs.jsx)("rect", {
                        x: "105.5",
                        y: "2.5",
                        width: "30",
                        height: "30"
                    }), Object(hs.jsx)("rect", {
                        x: "2.5",
                        y: "102.5",
                        width: "30",
                        height: "30"
                    })]
                })]
            }), {
                width: 182,
                height: 182,
                mirror: !0
            }))),
            aa = i.a.memo((({
                theme: e
            }) => bs(Object(hs.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M20.101 16H28.0934L36 8.95989V4H33.5779L20.101 16ZM30.5704 4L17.0935 16H9.10101L22.5779 4H30.5704ZM19.5704 4L6.09349 16H4V10.7475L11.5779 4H19.5704ZM8.57036 4H4V8.06952L8.57036 4ZM36 11.6378L31.101 16H36V11.6378ZM2 2V18H38V2H2Z",
                fill: ms(e)
            }), {
                width: 40,
                height: 20
            }))),
            ra = i.a.memo((({
                theme: e
            }) => bs(Object(hs.jsxs)("g", {
                fill: ms(e),
                fillRule: "evenodd",
                clipRule: "evenodd",
                children: [Object(hs.jsx)("path", {
                    d: "M20.101 16H28.0934L36 8.95989V4H33.5779L20.101 16ZM30.5704 4L17.0935 16H9.10101L22.5779 4H30.5704ZM19.5704 4L6.09349 16H4V10.7475L11.5779 4H19.5704ZM8.57036 4H4V8.06952L8.57036 4ZM36 11.6378L31.101 16H36V11.6378ZM2 2V18H38V2H2Z"
                }), Object(hs.jsx)("path", {
                    d: "M14.0001 18L3.00006 4.00002L4.5727 2.76438L15.5727 16.7644L14.0001 18ZM25.0001 18L14.0001 4.00002L15.5727 2.76438L26.5727 16.7644L25.0001 18ZM36.0001 18L25.0001 4.00002L26.5727 2.76438L37.5727 16.7644L36.0001 18Z"
                })]
            }), {
                width: 40,
                height: 20
            }))),
            la = i.a.memo((({
                theme: e
            }) => bs(Object(hs.jsx)("path", {
                d: "M2 2H38V18H2V2Z",
                fill: ms(e)
            }), {
                width: 40,
                height: 20
            }))),
            ca = i.a.memo((({
                theme: e,
                strokeWidth: t
            }) => bs(Object(hs.jsx)("path", {
                d: "M6 10H32",
                stroke: ms(e),
                strokeWidth: t,
                strokeLinecap: "round",
                fill: "none"
            }), {
                width: 40,
                height: 20
            }))),
            da = i.a.memo((({
                theme: e
            }) => bs(Object(hs.jsx)("path", {
                d: "M6 10H34",
                stroke: ms(e),
                strokeWidth: 2,
                fill: "none",
                strokeLinecap: "round"
            }), {
                width: 40,
                height: 20
            }))),
            ha = i.a.memo((({
                theme: e
            }) => bs(Object(hs.jsx)("path", {
                d: "M6 10H34",
                stroke: ms(e),
                strokeWidth: 2.5,
                strokeDasharray: "10, 8",
                fill: "none",
                strokeLinecap: "round"
            }), {
                width: 40,
                height: 20
            }))),
            ua = i.a.memo((({
                theme: e
            }) => bs(Object(hs.jsx)("path", {
                d: "M6 10H36",
                stroke: ms(e),
                strokeWidth: 2.5,
                strokeDasharray: "2, 4.5",
                fill: "none",
                strokeLinecap: "round"
            }), {
                width: 40,
                height: 20
            }))),
            pa = i.a.memo((({
                theme: e
            }) => bs(Object(hs.jsx)("path", {
                d: "M3.00098 16.1691C6.28774 13.9744 19.6399 2.8905 22.7215 3.00082C25.8041 3.11113 19.1158 15.5488 21.4962 16.8309C23.8757 18.1131 34.4155 11.7148 37.0001 10.6919",
                stroke: ms(e),
                strokeWidth: 2,
                strokeLinecap: "round",
                fill: "none"
            }), {
                width: 40,
                height: 20,
                mirror: !0
            }))),
            ma = i.a.memo((({
                theme: e
            }) => bs(Object(hs.jsx)("path", {
                d: "M3 17C6.68158 14.8752 16.1296 9.09849 22.0648 6.54922C28 3.99995 22.2896 13.3209 25 14C27.7104 14.6791 36.3757 9.6471 36.3757 9.6471M6.40706 15C13 11.1918 20.0468 1.51045 23.0234 3.0052C26 4.49995 20.457 12.8659 22.7285 16.4329C25 20 36.3757 13 36.3757 13",
                stroke: ms(e),
                strokeWidth: 2,
                strokeLinecap: "round",
                fill: "none"
            }), {
                width: 40,
                height: 20,
                mirror: !0
            }))),
            ga = i.a.memo((({
                theme: e
            }) => bs(Object(hs.jsx)("path", {
                d: "M3 15.6468C6.93692 13.5378 22.5544 2.81528 26.6206 3.00242C30.6877 3.18956 25.6708 15.3346 27.4009 16.7705C29.1309 18.2055 35.4001 12.4762 37 11.6177M3.97143 10.4917C6.61158 9.24563 16.3706 2.61886 19.8104 3.01724C23.2522 3.41472 22.0773 12.2013 24.6181 12.8783C27.1598 13.5536 33.3179 8.04068 35.0571 7.07244",
                stroke: ms(e),
                strokeWidth: 2,
                strokeLinecap: "round",
                fill: "none"
            }), {
                width: 40,
                height: 20,
                mirror: !0
            }))),
            ba = i.a.memo((({
                theme: e
            }) => bs(Object(hs.jsx)("path", {
                d: "M10 17L10 5L35 5",
                stroke: ms(e),
                strokeWidth: 2,
                strokeLinecap: "round",
                fill: "none"
            }), {
                width: 40,
                height: 20,
                mirror: !0
            }))),
            ya = i.a.memo((({
                theme: e
            }) => bs(Object(hs.jsx)("path", {
                d: "M10 17V15C10 8 13 5 21 5L33.5 5",
                stroke: ms(e),
                strokeWidth: 2,
                strokeLinecap: "round",
                fill: "none"
            }), {
                width: 40,
                height: 20,
                mirror: !0
            }))),
            va = i.a.memo((({
                theme: e
            }) => bs(Object(hs.jsx)("path", {
                d: "M6 10H34",
                stroke: ms(e),
                strokeWidth: 2,
                fill: "none"
            }), {
                width: 40,
                height: 20
            }))),
            fa = i.a.memo((({
                theme: e,
                flip: t = !1
            }) => bs(Object(hs.jsxs)("g", {
                transform: t ? "translate(40, 0) scale(-1, 1)" : "",
                stroke: ms(e),
                strokeWidth: 2,
                fill: "none",
                children: [Object(hs.jsx)("path", {
                    d: "M34 10H6M34 10L27 5M34 10L27 15"
                }), Object(hs.jsx)("path", {
                    d: "M27.5 5L34.5 10L27.5 15"
                })]
            }), {
                width: 40,
                height: 20
            }))),
            xa = i.a.memo((({
                theme: e,
                flip: t = !1
            }) => bs(Object(hs.jsxs)("g", {
                stroke: ms(e),
                fill: ms(e),
                transform: t ? "translate(40, 0) scale(-1, 1)" : "",
                children: [Object(hs.jsx)("path", {
                    d: "M32 10L6 10",
                    strokeWidth: 2
                }), Object(hs.jsx)("circle", {
                    r: "4",
                    transform: "matrix(-1 0 0 1 30 10)"
                })]
            }), {
                width: 40,
                height: 20
            }))),
            wa = i.a.memo((({
                theme: e,
                flip: t = !1
            }) => bs(Object(hs.jsx)("g", {
                transform: t ? "translate(40, 0) scale(-1, 1)" : "",
                children: Object(hs.jsx)("path", {
                    d: "M34 10H5.99996M34 10L34 5M34 10L34 15",
                    stroke: ms(e),
                    strokeWidth: 2,
                    fill: "none"
                })
            }), {
                width: 40,
                height: 20
            }))),
            ja = i.a.memo((({
                theme: e
            }) => bs(Object(hs.jsx)("path", {
                fill: ms(e),
                d: "M 0 69.092 L 0 55.03 A 124.24 124.24 0 0 0 4.706 57.02 Q 6.826 57.863 8.708 58.5 A 53.466 53.466 0 0 0 12.231 59.571 Q 17.236 60.889 21.387 60.889 A 20.909 20.909 0 0 0 24.265 60.704 Q 25.719 60.502 26.903 60.077 A 8.649 8.649 0 0 0 29.028 58.985 Q 31.689 57.08 31.689 53.321 Q 31.689 51.221 30.518 49.585 A 10.126 10.126 0 0 0 29.282 48.177 Q 28.352 47.287 27.075 46.436 A 23.719 23.719 0 0 0 25.752 45.627 Q 23.774 44.492 20.176 42.735 A 254.44 254.44 0 0 0 17.822 41.602 Q 11.503 38.631 8.236 35.888 A 19.742 19.742 0 0 1 8.008 35.694 A 22.18 22.18 0 0 1 2.783 29.102 Q 0.83 25.342 0.83 20.313 A 22.471 22.471 0 0 1 1.733 13.778 A 17.283 17.283 0 0 1 7.251 5.42 A 21.486 21.486 0 0 1 15.177 1.272 Q 18.361 0.338 22.166 0.09 A 43.573 43.573 0 0 1 25 0 A 42.399 42.399 0 0 1 34.349 1.01 A 39.075 39.075 0 0 1 35.62 1.319 A 67.407 67.407 0 0 1 42.108 3.382 A 83.357 83.357 0 0 1 46.191 5.03 L 41.309 16.797 Q 35.596 14.453 31.86 13.526 A 30.762 30.762 0 0 0 25.417 12.612 A 28.337 28.337 0 0 0 24.512 12.598 A 14.846 14.846 0 0 0 22.022 12.793 Q 19.498 13.224 17.92 14.6 Q 15.625 16.602 15.625 19.824 Q 15.625 21.826 16.553 23.316 Q 17.48 24.805 19.507 26.197 A 18.343 18.343 0 0 0 20.659 26.912 Q 22.596 28.035 26.516 29.953 A 299.99 299.99 0 0 0 29.102 31.201 Q 37.91 35.412 41.841 39.642 A 16.553 16.553 0 0 1 42.822 40.796 A 17.675 17.675 0 0 1 46.301 49.233 A 23.517 23.517 0 0 1 46.533 52.588 A 21.581 21.581 0 0 1 45.471 59.515 A 17.733 17.733 0 0 1 39.575 67.823 Q 33.745 72.486 24.094 73.243 A 49.683 49.683 0 0 1 20.215 73.389 A 51.712 51.712 0 0 1 9.448 72.315 A 40.672 40.672 0 0 1 0 69.092 Z"
            }), {
                width: 47,
                height: 77
            }))),
            Ea = i.a.memo((({
                theme: e
            }) => bs(Object(hs.jsx)("path", {
                fill: ms(e),
                d: "M 44.092 71.387 L 30.225 71.387 L 13.037 15.381 L 12.598 15.381 A 1505.093 1505.093 0 0 1 12.959 22.313 Q 13.426 31.715 13.508 36.4 A 102.991 102.991 0 0 1 13.525 38.184 L 13.525 71.387 L 0 71.387 L 0 0 L 20.605 0 L 37.5 54.59 L 37.793 54.59 L 55.713 0 L 76.318 0 L 76.318 71.387 L 62.207 71.387 L 62.207 37.598 Q 62.207 35.205 62.28 32.08 A 160.703 160.703 0 0 1 62.326 30.544 Q 62.452 26.754 62.866 17.168 A 5390.536 5390.536 0 0 1 62.939 15.479 L 62.5 15.479 L 44.092 71.387 Z"
            }), {
                width: 77,
                height: 75
            }))),
            Sa = i.a.memo((({
                theme: e
            }) => bs(Object(hs.jsx)("path", {
                fill: ms(e),
                d: "M 44.092 71.387 L 0 71.387 L 0 0 L 15.137 0 L 15.137 58.887 L 44.092 58.887 L 44.092 71.387 Z"
            }), {
                width: 45,
                height: 75
            }))),
            Ca = i.a.memo((({
                theme: e
            }) => bs(Object(hs.jsx)("path", {
                fill: ms(e),
                d: "M 42.578 35.4 L 66.699 71.387 L 49.414 71.387 L 32.813 44.385 L 16.211 71.387 L 0 71.387 L 23.682 34.57 L 1.514 0 L 18.213 0 L 33.594 25.684 L 48.682 0 L 64.99 0 L 42.578 35.4 Z M 119.775 71.387 L 75.684 71.387 L 75.684 0 L 90.82 0 L 90.82 58.887 L 119.775 58.887 L 119.775 71.387 Z"
            }), {
                width: 120,
                height: 75
            }))),
            Oa = i.a.memo((({
                theme: e
            }) => bs(Object(hs.jsx)("path", {
                fill: ms(e),
                d: "M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"
            }), {
                width: 448,
                height: 512
            }))),
            ka = i.a.memo((({
                theme: e
            }) => bs(Object(hs.jsxs)(hs.Fragment, {
                children: [Object(hs.jsx)("path", {
                    fill: ms(e),
                    d: "M 63.818 71.68 L 54.492 71.68 L 45.898 49.561 L 17.578 49.561 L 9.082 71.68 L 0 71.68 L 27.881 0 L 35.986 0 L 63.818 71.68 Z M 20.605 41.602 L 43.213 41.602 L 35.205 19.971 L 31.787 9.277 Q 30.322 15.137 28.711 19.971 L 20.605 41.602 Z"
                }), Object(hs.jsx)("path", {
                    fill: ms(e),
                    d: "M 68.994 71.68 L 52.686 71.68 L 47.51 54.688 L 21.484 54.688 L 16.309 71.68 L 0 71.68 L 25.195 0 L 43.701 0 L 68.994 71.68 Z M 25.293 41.992 L 43.896 41.992 A 27590.463 27590.463 0 0 1 42.2 36.532 Q 36.965 19.676 35.937 16.273 A 120.932 120.932 0 0 1 35.815 15.869 A 131.65 131.65 0 0 1 35.396 14.435 Q 34.951 12.879 34.675 11.741 A 34.866 34.866 0 0 1 34.521 11.084 A 141.762 141.762 0 0 1 33.706 14.075 Q 31.482 21.957 25.293 41.992 Z"
                })]
            }), {
                width: 70,
                height: 78
            }))),
            Ia = i.a.memo((({
                theme: e
            }) => bs(Object(hs.jsx)(hs.Fragment, {
                children: Object(hs.jsx)("path", {
                    fill: ms(e),
                    d: "M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"
                })
            }), {
                width: 640,
                height: 512
            }))),
            Aa = i.a.memo((({
                theme: e
            }) => bs(Object(hs.jsx)("path", {
                d: "M12.83 352h262.34A12.82 12.82 0 00288 339.17v-38.34A12.82 12.82 0 00275.17 288H12.83A12.82 12.82 0 000 300.83v38.34A12.82 12.82 0 0012.83 352zm0-256h262.34A12.82 12.82 0 00288 83.17V44.83A12.82 12.82 0 00275.17 32H12.83A12.82 12.82 0 000 44.83v38.34A12.82 12.82 0 0012.83 96zM432 160H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16zm0 256H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16z",
                fill: ms(e),
                strokeLinecap: "round"
            }), {
                width: 448,
                height: 512
            }))),
            Ta = i.a.memo((({
                theme: e
            }) => bs(Object(hs.jsx)("path", {
                d: "M432 160H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16zm0 256H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16zM108.1 96h231.81A12.09 12.09 0 00352 83.9V44.09A12.09 12.09 0 00339.91 32H108.1A12.09 12.09 0 0096 44.09V83.9A12.1 12.1 0 00108.1 96zm231.81 256A12.09 12.09 0 00352 339.9v-39.81A12.09 12.09 0 00339.91 288H108.1A12.09 12.09 0 0096 300.09v39.81a12.1 12.1 0 0012.1 12.1z",
                fill: ms(e)
            }), {
                width: 448,
                height: 512
            }))),
            Ma = i.a.memo((({
                theme: e
            }) => bs(Object(hs.jsx)("path", {
                d: "M16 224h416a16 16 0 0016-16v-32a16 16 0 00-16-16H16a16 16 0 00-16 16v32a16 16 0 0016 16zm416 192H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16zm3.17-384H172.83A12.82 12.82 0 00160 44.83v38.34A12.82 12.82 0 00172.83 96h262.34A12.82 12.82 0 00448 83.17V44.83A12.82 12.82 0 00435.17 32zm0 256H172.83A12.82 12.82 0 00160 300.83v38.34A12.82 12.82 0 00172.83 352h262.34A12.82 12.82 0 00448 339.17v-38.34A12.82 12.82 0 00435.17 288z",
                fill: ms(e),
                strokeLinecap: "round"
            }), {
                width: 448,
                height: 512
            })));
        let La = [];
        const Pa = e => (La = La.concat(e), e),
            _a = (e, t) => {
                if (e.editingGroupId) {
                    const n = Cn(Wi(t), e.editingGroupId);
                    if (n.length) return { ...e,
                        selectedElementIds: {
                            [n[0].id]: !0
                        }
                    }
                }
                return e
            },
            Da = Pa({
                name: "deleteSelectedElements",
                perform: (e, t) => {
                    if (t.editingLinearElement) {
                        const {
                            elementId: n,
                            activePointIndex: o,
                            startBindingElement: i,
                            endBindingElement: s
                        } = t.editingLinearElement, a = ti.getElement(n);
                        if (!a) return !1;
                        if (null == o || -1 === o || a.points.length < 2) {
                            const n = e.filter((e => e.id !== a.id));
                            return {
                                elements: n,
                                appState: { ..._a(t, n),
                                    editingLinearElement: null
                                },
                                commitToHistory: !1
                            }
                        }
                        const r = {
                            startBindingElement: 0 === o ? null : i,
                            endBindingElement: o === a.points.length - 1 ? null : s
                        };
                        return ti.movePoint(a, o, "delete"), {
                            elements: e,
                            appState: { ...t,
                                editingLinearElement: { ...t.editingLinearElement,
                                    ...r,
                                    activePointIndex: o > 0 ? o - 1 : 0
                                }
                            },
                            commitToHistory: !0
                        }
                    }
                    let {
                        elements: n,
                        appState: o
                    } = ((e, t) => ({
                        elements: e.map((e => t.selectedElementIds[e.id] ? mn(e, {
                            isDeleted: !0
                        }) : e)),
                        appState: { ...t,
                            selectedElementIds: {}
                        }
                    }))(e, t);
                    return ki(n, e.filter((({
                        id: e
                    }) => t.selectedElementIds[e]))), o = _a(o, n), {
                        elements: n,
                        appState: { ...o,
                            elementType: "selection",
                            multiElement: null
                        },
                        commitToHistory: Ji(Wi(e), t)
                    }
                },
                contextItemLabel: "labels.delete",
                keyTest: e => e.key === Q || e.key === te,
                PanelComponent: ({
                    elements: e,
                    appState: t,
                    updateData: n
                }) => Object(hs.jsx)(us, {
                    type: "button",
                    icon: Es,
                    title: w("labels.delete"),
                    "aria-label": w("labels.delete"),
                    onClick: () => n(null),
                    visible: Ji(Wi(e), t)
                })
            }),
            Ra = (e, t) => {
                let n = [],
                    o = [],
                    i = null,
                    s = -1;
                for (; ++s < e.length;) t.selectedElementIds[e[s].id] ? (o.length && (n = n.concat(o), o = []), n.push(s), i = s + 1) : e[s].isDeleted && i === s ? (i = s + 1, o.push(s)) : o = [];
                return n
            },
            za = (e, t, n, o) => {
                const i = t[n],
                    s = t => !t.isDeleted && (!e.editingGroupId || t.groupIds.includes(e.editingGroupId)),
                    a = "left" === o ? ((e, t, n = e.length - 1) => {
                        n < 0 && (n = e.length + n);
                        let o = (n = Math.min(e.length - 1, Math.max(n, 0))) + 1;
                        for (; --o > -1;)
                            if (t(e[o], o, e)) return o;
                        return -1
                    })(t, s, Math.max(0, n - 1)) : ((e, t, n = 0) => {
                        n < 0 && (n = e.length + n);
                        let o = (n = Math.min(e.length, Math.max(n, 0))) - 1;
                        for (; ++o < e.length;)
                            if (t(e[o], o, e)) return o;
                        return -1
                    })(t, s, n + 1),
                    r = t[a];
                if (!r) return -1;
                if (e.editingGroupId) {
                    if ((null === i || void 0 === i ? void 0 : i.groupIds.join("")) === (null === r || void 0 === r ? void 0 : r.groupIds.join(""))) return a;
                    if (!(null === r || void 0 === r ? void 0 : r.groupIds.includes(e.editingGroupId))) return -1
                }
                if (!r.groupIds.length) return a;
                const l = e.editingGroupId ? r.groupIds[r.groupIds.indexOf(e.editingGroupId) - 1] : r.groupIds[r.groupIds.length - 1],
                    c = Cn(t, l);
                return c.length ? "left" === o ? t.indexOf(c[0]) : t.indexOf(c[c.length - 1]) : a
            },
            Na = (e, t) => t.reduce(((t, n) => {
                const o = e[n];
                return t[o.id] = o, t
            }), {}),
            Ba = (e, t, n) => {
                const o = Ra(t, e),
                    i = Na(t, o);
                let s = (e => {
                    let t = 0;
                    return e.reduce(((n, o, i) => (i > 0 && e[i - 1] !== o - 1 && (t = ++t), (n[t] || (n[t] = [])).push(o), n)), [])
                })(o);
                return "right" === n && (s = s.reverse()), s.forEach(((o, i) => {
                    const s = o[0],
                        a = o[o.length - 1],
                        r = "left" === n ? s : a,
                        l = za(e, t, r, n);
                    if (-1 === l || r === l) return;
                    const c = "left" === n ? t.slice(0, l) : t.slice(0, s),
                        d = t.slice(s, a + 1),
                        h = "left" === n ? t.slice(l, s) : t.slice(a + 1, l + 1),
                        u = "left" === n ? t.slice(a + 1) : t.slice(l + 1);
                    t = "left" === n ? [...c, ...d, ...h, ...u] : [...c, ...h, ...d, ...u]
                })), t.map((e => i[e.id] ? gn(e) : e))
            },
            Ha = (e, t, n) => {
                const o = Ra(e, t),
                    i = Na(e, o),
                    s = [];
                let a, r;
                if ("left" === n) {
                    if (t.editingGroupId) {
                        const n = Cn(e, t.editingGroupId);
                        if (!n.length) return e;
                        a = e.indexOf(n[0])
                    } else a = 0;
                    r = o[o.length - 1]
                } else {
                    if (t.editingGroupId) {
                        const n = Cn(e, t.editingGroupId);
                        if (!n.length) return e;
                        r = e.indexOf(n[n.length - 1])
                    } else r = e.length - 1;
                    a = o[0]
                }
                for (let h = a; h < r + 1; h++) o.includes(h) || s.push(e[h]);
                const l = Object.values(i).map((e => gn(e))),
                    c = e.slice(0, a),
                    d = e.slice(r + 1);
                return "left" === n ? [...c, ...l, ...s, ...d] : [...c, ...s, ...l, ...d]
            },
            Va = (e, t) => Ba(t, e, "left"),
            Fa = (e, t) => Ba(t, e, "right"),
            Ua = (e, t) => Ha(e, t, "left"),
            Ga = (e, t) => Ha(e, t, "right"),
            Wa = Pa({
                name: "sendBackward",
                perform: (e, t) => ({
                    elements: Va(e, t),
                    appState: t,
                    commitToHistory: !0
                }),
                contextItemLabel: "labels.sendBackward",
                keyPriority: 40,
                keyTest: e => e[ee] && !e.shiftKey && e.code === L,
                PanelComponent: ({
                    updateData: e,
                    appState: t
                }) => Object(hs.jsx)("button", {
                    type: "button",
                    className: "zIndexButton",
                    onClick: () => e(null),
                    title: "".concat(w("labels.sendBackward"), " \u2014 ").concat(He("CtrlOrCmd+[")),
                    children: Object(hs.jsx)(Bs, {
                        theme: t.theme
                    })
                })
            }),
            Ka = Pa({
                name: "bringForward",
                perform: (e, t) => ({
                    elements: Fa(e, t),
                    appState: t,
                    commitToHistory: !0
                }),
                contextItemLabel: "labels.bringForward",
                keyPriority: 40,
                keyTest: e => e[ee] && !e.shiftKey && e.code === M,
                PanelComponent: ({
                    updateData: e,
                    appState: t
                }) => Object(hs.jsx)("button", {
                    type: "button",
                    className: "zIndexButton",
                    onClick: () => e(null),
                    title: "".concat(w("labels.bringForward"), " \u2014 ").concat(He("CtrlOrCmd+]")),
                    children: Object(hs.jsx)(Ns, {
                        theme: t.theme
                    })
                })
            }),
            Ya = Pa({
                name: "sendToBack",
                perform: (e, t) => ({
                    elements: Ua(e, t),
                    appState: t,
                    commitToHistory: !0
                }),
                contextItemLabel: "labels.sendToBack",
                keyTest: e => S ? e[ee] && e.altKey && e.code === L : e[ee] && e.shiftKey && e.code === L,
                PanelComponent: ({
                    updateData: e,
                    appState: t
                }) => Object(hs.jsx)("button", {
                    type: "button",
                    className: "zIndexButton",
                    onClick: () => e(null),
                    title: "".concat(w("labels.sendToBack"), " \u2014 ").concat(He(S ? "CtrlOrCmd+Alt+[" : "CtrlOrCmd+Shift+[")),
                    children: Object(hs.jsx)(Vs, {
                        theme: t.theme
                    })
                })
            }),
            Xa = Pa({
                name: "bringToFront",
                perform: (e, t) => ({
                    elements: Ga(e, t),
                    appState: t,
                    commitToHistory: !0
                }),
                contextItemLabel: "labels.bringToFront",
                keyTest: e => S ? e[ee] && e.altKey && e.code === M : e[ee] && e.shiftKey && e.code === M,
                PanelComponent: ({
                    updateData: e,
                    appState: t
                }) => Object(hs.jsx)("button", {
                    type: "button",
                    className: "zIndexButton",
                    onClick: t => e(null),
                    title: "".concat(w("labels.bringToFront"), " \u2014 ").concat(He(S ? "CtrlOrCmd+Alt+]" : "CtrlOrCmd+Shift+]")),
                    children: Object(hs.jsx)(Hs, {
                        theme: t.theme
                    })
                })
            }),
            Za = Pa({
                name: "selectAll",
                perform: (e, t) => !t.editingLinearElement && {
                    appState: En({ ...t,
                        editingGroupId: null,
                        selectedElementIds: e.reduce(((e, t) => (t.isDeleted || (e[t.id] = !0), e)), {})
                    }, Wi(e)),
                    commitToHistory: !0
                },
                contextItemLabel: "labels.selectAll",
                keyTest: e => e[ee] && e.key === re
            }),
            qa = Pa({
                name: "duplicateSelection",
                perform: (e, t) => {
                    if (t.editingLinearElement) {
                        const {
                            activePointIndex: n,
                            elementId: o
                        } = t.editingLinearElement, i = ti.getElement(o);
                        if (!i || null === n) return !1;
                        const {
                            points: s
                        } = i, a = s[n], r = s[n + 1];
                        return pn(i, {
                            points: [...s.slice(0, n + 1), r ? [(a[0] + r[0]) / 2, (a[1] + r[1]) / 2] : [a[0] + 30, a[1] + 30], ...s.slice(n + 1)]
                        }), {
                            appState: { ...t,
                                editingLinearElement: { ...t.editingLinearElement,
                                    activePointIndex: n + 1
                                }
                            },
                            elements: e,
                            commitToHistory: !0
                        }
                    }
                    return { ...Ja(e, t),
                        commitToHistory: !0
                    }
                },
                contextItemLabel: "labels.duplicateSelection",
                keyTest: e => e[ee] && e.key === le,
                PanelComponent: ({
                    elements: e,
                    appState: t,
                    updateData: n
                }) => Object(hs.jsx)(us, {
                    type: "button",
                    icon: ta,
                    title: "".concat(w("labels.duplicateSelection"), " \u2014 ").concat(He("CtrlOrCmd+D")),
                    "aria-label": w("labels.duplicateSelection"),
                    onClick: () => n(null),
                    visible: Ji(Wi(e), t)
                })
            }),
            Ja = (e, t) => {
                const n = new Map,
                    o = [],
                    i = [],
                    s = new Map,
                    a = e => {
                        const a = _n(t.editingGroupId, n, e, {
                            x: e.x + d.u / 2,
                            y: e.y + d.u / 2
                        });
                        return s.set(e.id, a.id), i.push(e), o.push(a), a
                    },
                    r = [];
                let l = 0;
                for (; l < e.length;) {
                    const n = e[l];
                    if (t.selectedElementIds[n.id]) {
                        if (n.groupIds.length) {
                            const o = wn(t, n);
                            if (o) {
                                const t = Cn(e, o);
                                r.push(...t, ...t.map((e => a(e)))), l += t.length;
                                continue
                            }
                        }
                        r.push(n, a(n))
                    } else r.push(n);
                    l++
                }
                return Ci(r, i, s), {
                    elements: r,
                    appState: En({ ...t,
                        selectedGroupIds: {},
                        selectedElementIds: o.reduce(((e, t) => (e[t.id] = !0, e)), {})
                    }, Wi(r))
                }
            },
            Qa = ({
                options: e,
                value: t,
                onChange: n,
                group: o
            }) => Object(hs.jsx)("div", {
                className: "buttonList buttonListIcon",
                children: e.map((e => Object(hs.jsxs)("label", {
                    className: Object(st.a)({
                        active: t === e.value
                    }),
                    title: e.text,
                    children: [Object(hs.jsx)("input", {
                        type: "radio",
                        name: o,
                        onChange: () => n(e.value),
                        checked: t === e.value
                    }), e.icon]
                }, e.text)))
            });
        n(49);
        const $a = ({
            children: e,
            left: t,
            top: n,
            onCloseRequest: i,
            fitInViewport: a = !1
        }) => {
            const r = Object(o.useRef)(null);
            return Object(o.useLayoutEffect)((() => {
                if (a && r.current) {
                    const e = r.current,
                        {
                            x: t,
                            y: n,
                            width: o,
                            height: i
                        } = e.getBoundingClientRect(),
                        s = window.innerWidth;
                    t + o > s && (e.style.left = "".concat(s - o, "px"));
                    const a = window.innerHeight;
                    n + i > a && (e.style.top = "".concat(a - i, "px"))
                }
            }), [a]), Object(o.useEffect)((() => {
                if (i) {
                    const e = e => {
                        var t;
                        (null === (t = r.current) || void 0 === t ? void 0 : t.contains(e.target)) || Object(s.unstable_batchedUpdates)((() => i(e)))
                    };
                    return document.addEventListener("pointerdown", e, !1), () => document.removeEventListener("pointerdown", e, !1)
                }
            }), [i]), Object(hs.jsx)("div", {
                className: "popover",
                style: {
                    top: n,
                    left: t
                },
                ref: r,
                children: e
            })
        };
        n(50);
        const er = e => {
                const t = (new Option).style;
                return t.color = e, !!t.color
            },
            tr = [
                ["1", "2", "3", "4", "5"],
                ["q", "w", "e", "r", "t"],
                ["a", "s", "d", "f", "g"]
            ].flat(),
            nr = ({
                colors: e,
                color: t,
                onChange: n,
                onClose: o,
                label: s,
                showInput: a = !0,
                type: r
            }) => {
                const l = i.a.useRef(),
                    c = i.a.useRef(),
                    d = i.a.useRef(),
                    h = i.a.useRef();
                i.a.useEffect((() => {
                    c.current ? c.current.focus() : h.current ? h.current.focus() : d.current && d.current.focus()
                }), []);
                return Object(hs.jsxs)("div", {
                    className: "color-picker color-picker-type-".concat(r),
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": w("labels.colorPicker"),
                    onKeyDown: e => {
                        if (e.key === ae) {
                            const {
                                activeElement: o
                            } = document;
                            var t;
                            if (e.shiftKey) {
                                if (o === l.current) null === (t = h.current) || void 0 === t || t.focus(), e.preventDefault()
                            } else if (o === h.current) {
                                var n;
                                null === (n = l.current) || void 0 === n || n.focus(), e.preventDefault()
                            }
                        } else if (je(e.key)) {
                            const {
                                activeElement: t
                            } = document, n = f().rtl, o = Array.prototype.indexOf.call(d.current.children, t);
                            if (-1 !== o) {
                                const t = d.current.children.length - (a ? 1 : 0),
                                    i = e.key === (n ? Z : q) ? (o + 1) % t : e.key === (n ? q : Z) ? (t + o - 1) % t : e.key === X ? (o + 5) % t : e.key === J ? (t + o - 5) % t : o;
                                d.current.children[i].focus()
                            }
                            e.preventDefault()
                        } else if (tr.includes(e.key.toLowerCase()) && !Te(e.target)) {
                            const t = tr.indexOf(e.key.toLowerCase());
                            d.current.children[t].focus(), e.preventDefault()
                        } else e.key !== oe && e.key !== ne || (e.preventDefault(), o());
                        e.nativeEvent.stopImmediatePropagation(), e.stopPropagation()
                    },
                    children: [Object(hs.jsx)("div", {
                        className: "color-picker-triangle color-picker-triangle-shadow"
                    }), Object(hs.jsx)("div", {
                        className: "color-picker-triangle"
                    }), Object(hs.jsxs)("div", {
                        className: "color-picker-content",
                        ref: e => {
                            e && (d.current = e)
                        },
                        tabIndex: 0,
                        children: [e.map(((e, o) => {
                            const i = e.replace("#", "");
                            return Object(hs.jsxs)("button", {
                                className: "color-picker-swatch",
                                onClick: t => {
                                    t.currentTarget.focus(), n(e)
                                },
                                title: "".concat(w("colors.".concat(i))).concat(Xe(e) ? "" : " (".concat(e, ")"), " \u2014 ").concat(tr[o].toUpperCase()),
                                "aria-label": w("colors.".concat(i)),
                                "aria-keyshortcuts": tr[o],
                                style: {
                                    color: e
                                },
                                ref: n => {
                                    n && 0 === o && (l.current = n), n && e === t && (c.current = n)
                                },
                                onFocus: () => {
                                    n(e)
                                },
                                children: [Xe(e) ? Object(hs.jsx)("div", {
                                    className: "color-picker-transparent"
                                }) : void 0, Object(hs.jsx)("span", {
                                    className: "color-picker-keybinding",
                                    children: tr[o]
                                })]
                            }, e)
                        })), a && Object(hs.jsx)(or, {
                            color: t,
                            label: s,
                            onChange: e => {
                                n(e)
                            },
                            ref: h
                        })]
                    })]
                })
            },
            or = i.a.forwardRef((({
                color: e,
                onChange: t,
                label: n
            }, o) => {
                const [s, a] = i.a.useState(e), r = i.a.useRef(null);
                i.a.useEffect((() => {
                    a(e)
                }), [e]), i.a.useImperativeHandle(o, (() => r.current));
                const l = i.a.useCallback((e => {
                    const n = e.toLowerCase(),
                        o = (e => Xe(e) || er(e) ? e : er("#".concat(e)) ? "#".concat(e) : null)(n);
                    o && t(o), a(n)
                }), [t]);
                return Object(hs.jsxs)("label", {
                    className: "color-input-container",
                    children: [Object(hs.jsx)("div", {
                        className: "color-picker-hash",
                        children: "#"
                    }), Object(hs.jsx)("input", {
                        spellCheck: !1,
                        className: "color-picker-input",
                        "aria-label": n,
                        onChange: e => l(e.target.value),
                        value: (s || "").replace(/^#/, ""),
                        onBlur: () => a(e),
                        ref: r
                    })]
                })
            })),
            ir = ({
                type: e,
                color: t,
                onChange: n,
                label: o,
                isActive: s,
                setActive: a
            }) => {
                const r = i.a.useRef(null);
                return Object(hs.jsxs)("div", {
                    children: [Object(hs.jsxs)("div", {
                        className: "color-picker-control-container",
                        children: [Object(hs.jsx)("button", {
                            className: "color-picker-label-swatch",
                            "aria-label": o,
                            style: t ? {
                                "--swatch-color": t
                            } : void 0,
                            onClick: () => a(!s),
                            ref: r
                        }), Object(hs.jsx)(or, {
                            color: t,
                            label: o,
                            onChange: e => {
                                n(e)
                            }
                        })]
                    }), Object(hs.jsx)(i.a.Suspense, {
                        fallback: "",
                        children: s ? Object(hs.jsx)($a, {
                            onCloseRequest: e => e.target !== r.current && a(!1),
                            children: Object(hs.jsx)(nr, {
                                colors: E[e],
                                color: t || null,
                                onChange: e => {
                                    n(e)
                                },
                                onClose: () => {
                                    var e;
                                    a(!1), null === (e = r.current) || void 0 === e || e.focus()
                                },
                                label: o,
                                showInput: !1,
                                type: e
                            })
                        }) : null
                    })]
                })
            };
        n(51);

        function sr({
            options: e,
            value: t,
            label: n,
            onChange: o,
            onClose: s
        }) {
            const a = i.a.useRef(),
                r = i.a.useRef(),
                l = i.a.useRef(null);
            i.a.useEffect((() => {
                r.current ? r.current.focus() : l.current && l.current.focus()
            }), []);
            return Object(hs.jsx)("div", {
                className: "picker",
                role: "dialog",
                "aria-modal": "true",
                "aria-label": n,
                onKeyDown: t => {
                    const n = e.find((e => e.keyBinding === t.key.toLowerCase()));
                    if (t.metaKey || t.altKey || t.ctrlKey || !n)
                        if (t.key === ae) setTimeout((() => {
                            r.current !== document.activeElement && s()
                        }), 0);
                        else if (je(t.key)) {
                        const {
                            activeElement: n
                        } = document, o = f().rtl, i = Array.prototype.indexOf.call(l.current.children, n);
                        if (-1 !== i) {
                            const n = e.length;
                            let s = i;
                            switch (t.key) {
                                case o ? Z:
                                    q:
                                        case X:
                                    s = (i + 1) % n;
                                    break;
                                case o ? q:
                                    Z:
                                        case J:
                                    s = (n + i - 1) % n
                            }
                            l.current.children[s].focus()
                        }
                        t.preventDefault()
                    } else t.key !== oe && t.key !== ne || (t.preventDefault(), s());
                    else {
                        const o = e.indexOf(n);
                        l.current.children[o].focus(), t.preventDefault()
                    }
                    t.nativeEvent.stopImmediatePropagation(), t.stopPropagation()
                },
                children: Object(hs.jsx)("div", {
                    className: "picker-content",
                    ref: l,
                    children: e.map(((e, n) => Object(hs.jsxs)("button", {
                        className: "picker-option",
                        onClick: t => {
                            t.currentTarget.focus(), o(e.value)
                        },
                        title: "".concat(e.text, " \u2014 ").concat(e.keyBinding.toUpperCase()),
                        "aria-label": e.text || "none",
                        "aria-keyshortcuts": e.keyBinding,
                        ref: o => {
                            o && 0 === n && (a.current = o), o && e.value === t && (r.current = o)
                        },
                        onFocus: () => {
                            o(e.value)
                        },
                        children: [e.icon, Object(hs.jsx)("span", {
                            className: "picker-keybinding",
                            children: e.keyBinding
                        })]
                    }, e.text)))
                })
            })
        }

        function ar({
            value: e,
            label: t,
            options: n,
            onChange: o,
            group: s = ""
        }) {
            var a;
            const [r, l] = i.a.useState(!1), c = i.a.useRef(null), d = f().rtl;
            return Object(hs.jsxs)("label", {
                className: "picker-container",
                children: [Object(hs.jsx)("button", {
                    name: s,
                    className: r ? "active" : "",
                    "aria-label": t,
                    onClick: () => l(!r),
                    ref: c,
                    children: null === (a = n.find((t => t.value === e))) || void 0 === a ? void 0 : a.icon
                }), Object(hs.jsx)(i.a.Suspense, {
                    fallback: "",
                    children: r ? Object(hs.jsxs)(hs.Fragment, {
                        children: [Object(hs.jsx)($a, {
                            onCloseRequest: e => e.target !== c.current && l(!1),
                            ...d ? {
                                right: 5.5
                            } : {
                                left: -5.5
                            },
                            children: Object(hs.jsx)(sr, {
                                options: n,
                                value: e,
                                label: t,
                                onChange: o,
                                onClose: () => {
                                    var e;
                                    l(!1), null === (e = c.current) || void 0 === e || e.focus()
                                }
                            })
                        }), Object(hs.jsx)("div", {
                            className: "picker-triangle"
                        })]
                    }) : null
                })]
            })
        }
        const rr = (e, t, n) => e.map((e => {
                var o;
                return t.selectedElementIds[e.id] || e.id === (null === (o = t.editingElement) || void 0 === o ? void 0 : o.id) ? n(e) : e
            })),
            lr = function(e, t, n, o) {
                var i, s;
                const a = t.editingElement,
                    r = Wi(e);
                return null !== (i = null !== (s = a && n(a)) && void 0 !== s ? s : Ji(r, t) ? ((e, t, n) => {
                    const o = Array.from(new Set(Qi(e, t).map((e => n(e)))));
                    return 1 === o.length ? o[0] : null
                })(r, t, n) : o) && void 0 !== i ? i : null
            },
            cr = (Pa({
                name: "changeStrokeColor",
                perform: (e, t, n) => ({ ...n.currentItemStrokeColor && {
                        elements: rr(e, t, (e => mn(e, {
                            strokeColor: n.currentItemStrokeColor
                        })))
                    },
                    appState: { ...t,
                        ...n
                    },
                    commitToHistory: !!n.currentItemStrokeColor
                }),
                PanelComponent: ({
                    elements: e,
                    appState: t,
                    updateData: n
                }) => Object(hs.jsxs)(hs.Fragment, {
                    children: [Object(hs.jsx)("h3", {
                        "aria-hidden": "true",
                        children: w("labels.stroke")
                    }), Object(hs.jsx)(ir, {
                        type: "elementStroke",
                        label: w("labels.stroke"),
                        color: lr(e, t, (e => e.strokeColor), t.currentItemStrokeColor),
                        onChange: e => n({
                            currentItemStrokeColor: e
                        }),
                        isActive: "strokeColorPicker" === t.openPopup,
                        setActive: e => n({
                            openPopup: e ? "strokeColorPicker" : null
                        })
                    })]
                })
            }), Pa({
                name: "changeBackgroundColor",
                perform: (e, t, n) => ({ ...n.currentItemBackgroundColor && {
                        elements: rr(e, t, (e => mn(e, {
                            backgroundColor: n.currentItemBackgroundColor
                        })))
                    },
                    appState: { ...t,
                        ...n
                    },
                    commitToHistory: !!n.currentItemBackgroundColor
                }),
                PanelComponent: ({
                    elements: e,
                    appState: t,
                    updateData: n
                }) => Object(hs.jsxs)(hs.Fragment, {
                    children: [Object(hs.jsx)("h3", {
                        "aria-hidden": "true",
                        children: w("labels.background")
                    }), Object(hs.jsx)(ir, {
                        type: "elementBackground",
                        label: w("labels.background"),
                        color: lr(e, t, (e => e.backgroundColor), t.currentItemBackgroundColor),
                        onChange: e => n({
                            currentItemBackgroundColor: e
                        }),
                        isActive: "backgroundColorPicker" === t.openPopup,
                        setActive: e => n({
                            openPopup: e ? "backgroundColorPicker" : null
                        })
                    })]
                })
            }), Pa({
                name: "changeFillStyle",
                perform: (e, t, n) => ({
                    elements: rr(e, t, (e => mn(e, {
                        fillStyle: n
                    }))),
                    appState: { ...t,
                        currentItemFillStyle: n
                    },
                    commitToHistory: !0
                }),
                PanelComponent: ({
                    elements: e,
                    appState: t,
                    updateData: n
                }) => Object(hs.jsxs)("fieldset", {
                    children: [Object(hs.jsx)("legend", {
                        children: w("labels.fill")
                    }), Object(hs.jsx)(Qa, {
                        options: [{
                            value: "hachure",
                            text: w("labels.hachure"),
                            icon: Object(hs.jsx)(aa, {
                                theme: t.theme
                            })
                        }, {
                            value: "cross-hatch",
                            text: w("labels.crossHatch"),
                            icon: Object(hs.jsx)(ra, {
                                theme: t.theme
                            })
                        }, {
                            value: "solid",
                            text: w("labels.solid"),
                            icon: Object(hs.jsx)(la, {
                                theme: t.theme
                            })
                        }],
                        group: "fill",
                        value: lr(e, t, (e => e.fillStyle), t.currentItemFillStyle),
                        onChange: e => {
                            n(e)
                        }
                    })]
                })
            }), Pa({
                name: "changeStrokeWidth",
                perform: (e, t, n) => ({
                    elements: rr(e, t, (e => mn(e, {
                        strokeWidth: n
                    }))),
                    appState: { ...t,
                        currentItemStrokeWidth: n
                    },
                    commitToHistory: !0
                }),
                PanelComponent: ({
                    elements: e,
                    appState: t,
                    updateData: n
                }) => Object(hs.jsxs)("fieldset", {
                    children: [Object(hs.jsx)("legend", {
                        children: w("labels.strokeWidth")
                    }), Object(hs.jsx)(Qa, {
                        group: "stroke-width",
                        options: [{
                            value: 1,
                            text: w("labels.thin"),
                            icon: Object(hs.jsx)(ca, {
                                theme: t.theme,
                                strokeWidth: 2
                            })
                        }, {
                            value: 2,
                            text: w("labels.bold"),
                            icon: Object(hs.jsx)(ca, {
                                theme: t.theme,
                                strokeWidth: 6
                            })
                        }, {
                            value: 4,
                            text: w("labels.extraBold"),
                            icon: Object(hs.jsx)(ca, {
                                theme: t.theme,
                                strokeWidth: 10
                            })
                        }],
                        value: lr(e, t, (e => e.strokeWidth), t.currentItemStrokeWidth),
                        onChange: e => n(e)
                    })]
                })
            }), Pa({
                name: "changeSloppiness",
                perform: (e, t, n) => ({
                    elements: rr(e, t, (e => mn(e, {
                        seed: hn(),
                        roughness: n
                    }))),
                    appState: { ...t,
                        currentItemRoughness: n
                    },
                    commitToHistory: !0
                }),
                PanelComponent: ({
                    elements: e,
                    appState: t,
                    updateData: n
                }) => Object(hs.jsxs)("fieldset", {
                    children: [Object(hs.jsx)("legend", {
                        children: w("labels.sloppiness")
                    }), Object(hs.jsx)(Qa, {
                        group: "sloppiness",
                        options: [{
                            value: 0,
                            text: w("labels.architect"),
                            icon: Object(hs.jsx)(pa, {
                                theme: t.theme
                            })
                        }, {
                            value: 1,
                            text: w("labels.artist"),
                            icon: Object(hs.jsx)(ma, {
                                theme: t.theme
                            })
                        }, {
                            value: 2,
                            text: w("labels.cartoonist"),
                            icon: Object(hs.jsx)(ga, {
                                theme: t.theme
                            })
                        }],
                        value: lr(e, t, (e => e.roughness), t.currentItemRoughness),
                        onChange: e => n(e)
                    })]
                })
            }), Pa({
                name: "changeStrokeStyle",
                perform: (e, t, n) => ({
                    elements: rr(e, t, (e => mn(e, {
                        strokeStyle: n
                    }))),
                    appState: { ...t,
                        currentItemStrokeStyle: n
                    },
                    commitToHistory: !0
                }),
                PanelComponent: ({
                    elements: e,
                    appState: t,
                    updateData: n
                }) => Object(hs.jsxs)("fieldset", {
                    children: [Object(hs.jsx)("legend", {
                        children: w("labels.strokeStyle")
                    }), Object(hs.jsx)(Qa, {
                        group: "strokeStyle",
                        options: [{
                            value: "solid",
                            text: w("labels.strokeStyle_solid"),
                            icon: Object(hs.jsx)(da, {
                                theme: t.theme
                            })
                        }, {
                            value: "dashed",
                            text: w("labels.strokeStyle_dashed"),
                            icon: Object(hs.jsx)(ha, {
                                theme: t.theme
                            })
                        }, {
                            value: "dotted",
                            text: w("labels.strokeStyle_dotted"),
                            icon: Object(hs.jsx)(ua, {
                                theme: t.theme
                            })
                        }],
                        value: lr(e, t, (e => e.strokeStyle), t.currentItemStrokeStyle),
                        onChange: e => n(e)
                    })]
                })
            }), Pa({
                name: "changeOpacity",
                perform: (e, t, n) => ({
                    elements: rr(e, t, (e => mn(e, {
                        opacity: n
                    }))),
                    appState: { ...t,
                        currentItemOpacity: n
                    },
                    commitToHistory: !0
                }),
                PanelComponent: ({
                    elements: e,
                    appState: t,
                    updateData: n
                }) => {
                    var o;
                    return Object(hs.jsxs)("label", {
                        className: "control-label",
                        children: [w("labels.opacity"), Object(hs.jsx)("input", {
                            type: "range",
                            min: "0",
                            max: "100",
                            step: "10",
                            onChange: e => n(+e.target.value),
                            onWheel: e => {
                                e.stopPropagation();
                                const t = +e.target.value;
                                e.deltaY < 0 && t < 100 ? n(t + 10) : e.deltaY > 0 && t > 0 && n(t - 10)
                            },
                            value: null !== (o = lr(e, t, (e => e.opacity), t.currentItemOpacity)) && void 0 !== o ? o : void 0
                        })]
                    })
                }
            }), Pa({
                name: "changeFontSize",
                perform: (e, t, n) => ({
                    elements: rr(e, t, (e => {
                        if (ct(e)) {
                            const t = mn(e, {
                                fontSize: n
                            });
                            return Vi(t), t
                        }
                        return e
                    })),
                    appState: { ...t,
                        currentItemFontSize: n
                    },
                    commitToHistory: !0
                }),
                PanelComponent: ({
                    elements: e,
                    appState: t,
                    updateData: n
                }) => Object(hs.jsxs)("fieldset", {
                    children: [Object(hs.jsx)("legend", {
                        children: w("labels.fontSize")
                    }), Object(hs.jsx)(Qa, {
                        group: "font-size",
                        options: [{
                            value: 16,
                            text: w("labels.small"),
                            icon: Object(hs.jsx)(ja, {
                                theme: t.theme
                            })
                        }, {
                            value: 20,
                            text: w("labels.medium"),
                            icon: Object(hs.jsx)(Ea, {
                                theme: t.theme
                            })
                        }, {
                            value: 28,
                            text: w("labels.large"),
                            icon: Object(hs.jsx)(Sa, {
                                theme: t.theme
                            })
                        }, {
                            value: 36,
                            text: w("labels.veryLarge"),
                            icon: Object(hs.jsx)(Ca, {
                                theme: t.theme
                            })
                        }],
                        value: lr(e, t, (e => ct(e) && e.fontSize), t.currentItemFontSize || d.g),
                        onChange: e => n(e)
                    })]
                })
            }), Pa({
                name: "changeFontFamily",
                perform: (e, t, n) => ({
                    elements: rr(e, t, (e => {
                        if (ct(e)) {
                            const t = mn(e, {
                                fontFamily: n
                            });
                            return Vi(t), t
                        }
                        return e
                    })),
                    appState: { ...t,
                        currentItemFontFamily: n
                    },
                    commitToHistory: !0
                }),
                PanelComponent: ({
                    elements: e,
                    appState: t,
                    updateData: n
                }) => {
                    const o = [{
                        value: d.t.Virgil,
                        text: w("labels.handDrawn"),
                        icon: Object(hs.jsx)(Oa, {
                            theme: t.theme
                        })
                    }, {
                        value: d.t.Helvetica,
                        text: w("labels.normal"),
                        icon: Object(hs.jsx)(ka, {
                            theme: t.theme
                        })
                    }, {
                        value: d.t.Cascadia,
                        text: w("labels.code"),
                        icon: Object(hs.jsx)(Ia, {
                            theme: t.theme
                        })
                    }];
                    return Object(hs.jsxs)("fieldset", {
                        children: [Object(hs.jsx)("legend", {
                            children: w("labels.fontFamily")
                        }), Object(hs.jsx)(Qa, {
                            group: "font-family",
                            options: o,
                            value: lr(e, t, (e => ct(e) && e.fontFamily), t.currentItemFontFamily || d.f),
                            onChange: e => n(e)
                        })]
                    })
                }
            }), Pa({
                name: "changeTextAlign",
                perform: (e, t, n) => ({
                    elements: rr(e, t, (e => {
                        if (ct(e)) {
                            const t = mn(e, {
                                textAlign: n
                            });
                            return Vi(t), t
                        }
                        return e
                    })),
                    appState: { ...t,
                        currentItemTextAlign: n
                    },
                    commitToHistory: !0
                }),
                PanelComponent: ({
                    elements: e,
                    appState: t,
                    updateData: n
                }) => Object(hs.jsxs)("fieldset", {
                    children: [Object(hs.jsx)("legend", {
                        children: w("labels.textAlign")
                    }), Object(hs.jsx)(Qa, {
                        group: "text-align",
                        options: [{
                            value: "left",
                            text: w("labels.left"),
                            icon: Object(hs.jsx)(Aa, {
                                theme: t.theme
                            })
                        }, {
                            value: "center",
                            text: w("labels.center"),
                            icon: Object(hs.jsx)(Ta, {
                                theme: t.theme
                            })
                        }, {
                            value: "right",
                            text: w("labels.right"),
                            icon: Object(hs.jsx)(Ma, {
                                theme: t.theme
                            })
                        }],
                        value: lr(e, t, (e => ct(e) && e.textAlign), t.currentItemTextAlign),
                        onChange: e => n(e)
                    })]
                })
            }), Pa({
                name: "changeSharpness",
                perform: (e, t, n) => {
                    const o = $i(Wi(e), t),
                        i = o.length ? o.every((e => !ut(e))) : !pt(t.elementType),
                        s = o.length ? o.every(ut) : pt(t.elementType);
                    return {
                        elements: rr(e, t, (e => mn(e, {
                            strokeSharpness: n
                        }))),
                        appState: { ...t,
                            currentItemStrokeSharpness: i ? n : t.currentItemStrokeSharpness,
                            currentItemLinearStrokeSharpness: s ? n : t.currentItemLinearStrokeSharpness
                        },
                        commitToHistory: !0
                    }
                },
                PanelComponent: ({
                    elements: e,
                    appState: t,
                    updateData: n
                }) => Object(hs.jsxs)("fieldset", {
                    children: [Object(hs.jsx)("legend", {
                        children: w("labels.edges")
                    }), Object(hs.jsx)(Qa, {
                        group: "edges",
                        options: [{
                            value: "sharp",
                            text: w("labels.sharp"),
                            icon: Object(hs.jsx)(ba, {
                                theme: t.theme
                            })
                        }, {
                            value: "round",
                            text: w("labels.round"),
                            icon: Object(hs.jsx)(ya, {
                                theme: t.theme
                            })
                        }],
                        value: lr(e, t, (e => e.strokeSharpness), ss(t.elementType) && (pt(t.elementType) ? t.currentItemLinearStrokeSharpness : t.currentItemStrokeSharpness) || null),
                        onChange: e => n(e)
                    })]
                })
            }), Pa({
                name: "changeArrowhead",
                perform: (e, t, n) => ({
                    elements: rr(e, t, (e => {
                        if (ut(e)) {
                            const {
                                position: t,
                                type: o
                            } = n;
                            if ("start" === t) {
                                return mn(e, {
                                    startArrowhead: o
                                })
                            }
                            if ("end" === t) {
                                return mn(e, {
                                    endArrowhead: o
                                })
                            }
                        }
                        return e
                    })),
                    appState: { ...t,
                        ["start" === n.position ? "currentItemStartArrowhead" : "currentItemEndArrowhead"]: n.type
                    },
                    commitToHistory: !0
                }),
                PanelComponent: ({
                    elements: e,
                    appState: t,
                    updateData: n
                }) => {
                    const o = f().rtl;
                    return Object(hs.jsxs)("fieldset", {
                        children: [Object(hs.jsx)("legend", {
                            children: w("labels.arrowheads")
                        }), Object(hs.jsxs)("div", {
                            className: "iconSelectList",
                            children: [Object(hs.jsx)(ar, {
                                label: "arrowhead_start",
                                options: [{
                                    value: null,
                                    text: w("labels.arrowhead_none"),
                                    icon: Object(hs.jsx)(va, {
                                        theme: t.theme
                                    }),
                                    keyBinding: "q"
                                }, {
                                    value: "arrow",
                                    text: w("labels.arrowhead_arrow"),
                                    icon: Object(hs.jsx)(fa, {
                                        theme: t.theme,
                                        flip: !o
                                    }),
                                    keyBinding: "w"
                                }, {
                                    value: "bar",
                                    text: w("labels.arrowhead_bar"),
                                    icon: Object(hs.jsx)(wa, {
                                        theme: t.theme,
                                        flip: !o
                                    }),
                                    keyBinding: "e"
                                }, {
                                    value: "dot",
                                    text: w("labels.arrowhead_dot"),
                                    icon: Object(hs.jsx)(xa, {
                                        theme: t.theme,
                                        flip: !o
                                    }),
                                    keyBinding: "r"
                                }],
                                value: lr(e, t, (e => ut(e) && rs(e.type) ? e.startArrowhead : t.currentItemStartArrowhead), t.currentItemStartArrowhead),
                                onChange: e => n({
                                    position: "start",
                                    type: e
                                })
                            }), Object(hs.jsx)(ar, {
                                label: "arrowhead_end",
                                group: "arrowheads",
                                options: [{
                                    value: null,
                                    text: w("labels.arrowhead_none"),
                                    keyBinding: "q",
                                    icon: Object(hs.jsx)(va, {
                                        theme: t.theme
                                    })
                                }, {
                                    value: "arrow",
                                    text: w("labels.arrowhead_arrow"),
                                    keyBinding: "w",
                                    icon: Object(hs.jsx)(fa, {
                                        theme: t.theme,
                                        flip: o
                                    })
                                }, {
                                    value: "bar",
                                    text: w("labels.arrowhead_bar"),
                                    keyBinding: "e",
                                    icon: Object(hs.jsx)(wa, {
                                        theme: t.theme,
                                        flip: o
                                    })
                                }, {
                                    value: "dot",
                                    text: w("labels.arrowhead_dot"),
                                    keyBinding: "r",
                                    icon: Object(hs.jsx)(xa, {
                                        theme: t.theme,
                                        flip: o
                                    })
                                }],
                                value: lr(e, t, (e => ut(e) && rs(e.type) ? e.endArrowhead : t.currentItemEndArrowhead), t.currentItemEndArrowhead),
                                onChange: e => n({
                                    position: "end",
                                    type: e
                                })
                            })]
                        })]
                    })
                }
            }), e => {
                const t = e.title || ("dark" === e.value ? w("buttons.lightMode") : w("buttons.darkMode"));
                return Object(hs.jsx)(us, {
                    type: "icon",
                    icon: "light" === e.value ? dr.MOON : dr.SUN,
                    title: t,
                    "aria-label": t,
                    onClick: () => e.onChange("dark" === e.value ? "light" : "dark"),
                    "data-testid": "toggle-dark-mode"
                })
            }),
            dr = {
                SUN: Object(hs.jsx)("svg", {
                    width: "512",
                    height: "512",
                    className: "rtl-mirror",
                    viewBox: "0 0 512 512",
                    children: Object(hs.jsx)("path", {
                        fill: "currentColor",
                        d: "M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
                    })
                }),
                MOON: Object(hs.jsx)("svg", {
                    width: "512",
                    height: "512",
                    className: "rtl-mirror",
                    viewBox: "0 0 512 512",
                    children: Object(hs.jsx)("path", {
                        fill: "currentColor",
                        d: "M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
                    })
                })
            };
        n(52);
        const hr = () => {
                const e = document.querySelector(".excalidraw-tooltip");
                if (e) return e;
                const t = document.createElement("div");
                return document.body.appendChild(t), t.classList.add("excalidraw-tooltip"), t
            },
            ur = ({
                children: e,
                label: t,
                long: n = !1
            }) => (Object(o.useEffect)((() => () => hr().classList.remove("excalidraw-tooltip--visible")), []), Object(hs.jsx)("div", {
                className: "excalidraw-tooltip-wrapper",
                onPointerEnter: e => ((e, t, n, o) => {
                    t.classList.add("excalidraw-tooltip--visible"), t.style.minWidth = o ? "50ch" : "10ch", t.style.maxWidth = o ? "50ch" : "15ch", t.textContent = n;
                    const {
                        x: i,
                        bottom: s,
                        top: a,
                        width: r
                    } = e.getBoundingClientRect(), {
                        width: l,
                        height: c
                    } = t.getBoundingClientRect(), d = window.innerWidth, h = i + r / 2 - l / 2, u = h + l >= d ? h + l - d : 0, p = s + 5, m = p + c >= window.innerHeight ? s - a + c + 10 : 0;
                    Object.assign(t.style, {
                        top: "".concat(p - m, "px"),
                        left: "".concat(h - u, "px")
                    })
                })(e.currentTarget, hr(), t, n),
                onPointerLeave: () => hr().classList.remove("excalidraw-tooltip--visible"),
                children: e
            })),
            pr = (Pa({
                name: "changeViewBackgroundColor",
                perform: (e, t, n) => ({
                    appState: { ...t,
                        ...n
                    },
                    commitToHistory: !!n.viewBackgroundColor
                }),
                PanelComponent: ({
                    appState: e,
                    updateData: t
                }) => Object(hs.jsx)("div", {
                    style: {
                        position: "relative"
                    },
                    children: Object(hs.jsx)(ir, {
                        label: w("labels.canvasBackground"),
                        type: "canvasBackground",
                        color: e.viewBackgroundColor,
                        onChange: e => t({
                            viewBackgroundColor: e
                        }),
                        isActive: "canvasColorPicker" === e.openPopup,
                        setActive: e => t({
                            openPopup: e ? "canvasColorPicker" : null
                        }),
                        "data-testid": "canvas-background-picker"
                    })
                })
            }), Pa({
                name: "clearCanvas",
                perform: (e, t) => ({
                    elements: e.map((e => mn(e, {
                        isDeleted: !0
                    }))),
                    appState: { ...et(),
                        theme: t.theme,
                        elementLocked: t.elementLocked,
                        exportBackground: t.exportBackground,
                        exportEmbedScene: t.exportEmbedScene,
                        gridSize: t.gridSize,
                        showStats: t.showStats,
                        pasteDialog: t.pasteDialog
                    },
                    commitToHistory: !0
                }),
                PanelComponent: ({
                    updateData: e
                }) => Object(hs.jsx)(us, {
                    type: "button",
                    icon: Es,
                    title: w("buttons.clearReset"),
                    "aria-label": w("buttons.clearReset"),
                    showAriaLabel: gd(),
                    onClick: () => {
                        window.confirm(w("alerts.clearReset")) && e(null)
                    },
                    "data-testid": "clear-canvas-button"
                })
            }), Pa({
                name: "zoomIn",
                perform: (e, t) => {
                    const n = cs(ds(t.zoom.value + d.R), t.zoom, {
                        left: t.offsetLeft,
                        top: t.offsetTop
                    }, {
                        x: t.width / 2,
                        y: t.height / 2
                    });
                    return {
                        appState: { ...t,
                            zoom: n
                        },
                        commitToHistory: !1
                    }
                },
                PanelComponent: ({
                    updateData: e
                }) => Object(hs.jsx)(us, {
                    type: "button",
                    icon: Is,
                    title: "".concat(w("buttons.zoomIn"), " \u2014 ").concat(He("CtrlOrCmd++")),
                    "aria-label": w("buttons.zoomIn"),
                    onClick: () => {
                        e(null)
                    },
                    size: "small"
                }),
                keyTest: e => (e.code === O || e.code === I) && (e[ee] || e.shiftKey)
            }), Pa({
                name: "zoomOut",
                perform: (e, t) => {
                    const n = cs(ds(t.zoom.value - d.R), t.zoom, {
                        left: t.offsetLeft,
                        top: t.offsetTop
                    }, {
                        x: t.width / 2,
                        y: t.height / 2
                    });
                    return {
                        appState: { ...t,
                            zoom: n
                        },
                        commitToHistory: !1
                    }
                },
                PanelComponent: ({
                    updateData: e
                }) => Object(hs.jsx)(us, {
                    type: "button",
                    icon: As,
                    title: "".concat(w("buttons.zoomOut"), " \u2014 ").concat(He("CtrlOrCmd+-")),
                    "aria-label": w("buttons.zoomOut"),
                    onClick: () => {
                        e(null)
                    },
                    size: "small"
                }),
                keyTest: e => (e.code === k || e.code === A) && (e[ee] || e.shiftKey)
            }), Pa({
                name: "resetZoom",
                perform: (e, t) => ({
                    appState: { ...t,
                        zoom: cs(1, t.zoom, {
                            left: t.offsetLeft,
                            top: t.offsetTop
                        }, {
                            x: t.width / 2,
                            y: t.height / 2
                        })
                    },
                    commitToHistory: !1
                }),
                PanelComponent: ({
                    updateData: e,
                    appState: t
                }) => Object(hs.jsx)(ur, {
                    label: w("buttons.resetZoom"),
                    children: Object(hs.jsxs)(us, {
                        type: "button",
                        className: "reset-zoom-button",
                        title: w("buttons.resetZoom"),
                        "aria-label": w("buttons.resetZoom"),
                        onClick: () => {
                            e(null)
                        },
                        size: "small",
                        children: [(100 * t.zoom.value).toFixed(0), "%"]
                    })
                }),
                keyTest: e => (e.code === z || e.code === T) && (e[ee] || e.shiftKey)
            }), (e, t, n) => {
                const o = Wi(e),
                    i = Qi(o, t),
                    s = n && i.length > 0 ? Rt(i) : Rt(o),
                    a = ((e, t) => {
                        const [n, o, i, s] = e, a = i - n, r = t.width / a, l = s - o, c = t.height / l, h = Math.min(r, c), u = Math.floor(h / d.R) * d.R;
                        return Math.min(Math.max(u, d.R), 1)
                    })(s, {
                        width: t.width,
                        height: t.height
                    }),
                    r = cs(a, t.zoom, {
                        left: t.offsetLeft,
                        top: t.offsetTop
                    }),
                    [l, c, h, u] = s,
                    p = (l + h) / 2,
                    m = (c + u) / 2;
                return {
                    appState: { ...t,
                        ...es({
                            scenePoint: {
                                x: p,
                                y: m
                            },
                            viewportDimensions: {
                                width: t.width,
                                height: t.height
                            },
                            zoom: r
                        }),
                        zoom: r
                    },
                    commitToHistory: !1
                }
            }),
            mr = (Pa({
                name: "zoomToSelection",
                perform: (e, t) => pr(e, t, !0),
                keyTest: e => e.code === _ && e.shiftKey && !e.altKey && !e[ee]
            }), Pa({
                name: "zoomToFit",
                perform: (e, t) => pr(e, t, !1),
                keyTest: e => e.code === P && e.shiftKey && !e.altKey && !e[ee]
            }), Pa({
                name: "toggleTheme",
                perform: (e, t, n) => ({
                    appState: { ...t,
                        theme: n || ("light" === t.theme ? "dark" : "light")
                    },
                    commitToHistory: !1
                }),
                PanelComponent: ({
                    appState: e,
                    updateData: t
                }) => Object(hs.jsx)("div", {
                    style: {
                        marginInlineStart: "0.25rem"
                    },
                    children: Object(hs.jsx)(cr, {
                        value: e.theme,
                        onChange: e => {
                            t(e)
                        }
                    })
                }),
                keyTest: e => e.altKey && e.shiftKey && e.code === H
            }), Pa({
                name: "finalize",
                perform: (e, t, n, {
                    canvas: o,
                    focusContainer: i
                }) => {
                    var s;
                    if (t.editingLinearElement) {
                        const {
                            elementId: n,
                            startBindingElement: o,
                            endBindingElement: i
                        } = t.editingLinearElement, s = ti.getElement(n);
                        if (s) return mt(s) && oi(s, o, i), {
                            elements: s.points.length < 2 || bn(s) ? e.filter((e => e.id !== s.id)) : void 0,
                            appState: { ...t,
                                editingLinearElement: null
                            },
                            commitToHistory: !0
                        }
                    }
                    let a = e;
                    window.document.activeElement instanceof HTMLElement && i();
                    const r = t.multiElement ? t.multiElement : "freedraw" === (null === (s = t.editingElement) || void 0 === s ? void 0 : s.type) ? t.editingElement : null;
                    if (r) {
                        if ("freedraw" !== r.type && "touch" !== t.lastPointerDownWith) {
                            const {
                                points: e,
                                lastCommittedPoint: t
                            } = r;
                            t && e[e.length - 1] === t || pn(r, {
                                points: r.points.slice(0, -1)
                            })
                        }
                        bn(r) && (a = a.slice(0, -1));
                        const e = wt(r.points, t.zoom.value);
                        if (("line" === r.type || "freedraw" === r.type) && e) {
                            const e = r.points,
                                t = e[0];
                            pn(r, {
                                points: e.map(((n, o) => o === e.length - 1 ? [t[0], t[1]] : n))
                            })
                        }
                        if (mt(r) && !e && r.points.length > 1) {
                            const [e, n] = ti.getPointAtIndexGlobalCoordinates(r, -1);
                            ri(r, t, ln.getScene(r), {
                                x: e,
                                y: n
                            })
                        }
                        t.elementLocked || "freedraw" === t.elementType || (t.selectedElementIds[r.id] = !0)
                    }
                    return (t.elementLocked || "freedraw" === t.elementType) && r || Re(o), {
                        elements: a,
                        appState: { ...t,
                            elementType: (t.elementLocked || "freedraw" === t.elementType) && r ? t.elementType : "selection",
                            draggingElement: null,
                            multiElement: null,
                            editingElement: null,
                            startBoundElement: null,
                            suggestedBindings: [],
                            selectedElementIds: r && !t.elementLocked && "freedraw" !== t.elementType ? { ...t.selectedElementIds,
                                [r.id]: !0
                            } : t.selectedElementIds
                        },
                        commitToHistory: "freedraw" === t.elementType
                    }
                },
                keyTest: (e, t) => e.key === oe && (null !== t.editingLinearElement || !t.draggingElement && null === t.multiElement) || (e.key === oe || e.key === ne) && null !== t.multiElement,
                PanelComponent: ({
                    appState: e,
                    updateData: t
                }) => Object(hs.jsx)(us, {
                    type: "button",
                    icon: Ts,
                    title: w("buttons.done"),
                    "aria-label": w("buttons.done"),
                    onClick: t,
                    visible: null != e.multiElement
                })
            }));
        n(53), n(54);
        const gr = e => {
                const {
                    id: t
                } = yd(), [n, i] = Object(o.useState)(e.value);
                return Object(hs.jsxs)("div", {
                    className: "ProjectName",
                    children: [Object(hs.jsx)("label", {
                        className: "ProjectName-label",
                        htmlFor: "filename",
                        children: "".concat(e.label).concat(e.isNameEditable ? "" : ":")
                    }), e.isNameEditable ? Object(hs.jsx)("input", {
                        className: "TextInput",
                        onBlur: t => {
                            (e => {
                                let t = e.parentElement;
                                for (; t;) {
                                    if (t.tabIndex > -1) return void t.focus();
                                    t = t.parentElement
                                }
                            })(t.target);
                            const n = t.target.value;
                            n !== e.value && e.onChange(n)
                        },
                        onKeyDown: e => {
                            if ("Enter" === e.key) {
                                if (e.preventDefault(), e.nativeEvent.isComposing || 229 === e.keyCode) return;
                                e.currentTarget.blur()
                            }
                        },
                        id: "".concat(t, "-filename"),
                        value: n,
                        onChange: e => i(e.target.value)
                    }) : Object(hs.jsx)("span", {
                        className: "TextInput TextInput--readonly",
                        id: "".concat(t, "-filename"),
                        children: e.value
                    })]
                })
            },
            br = (e, t) => {
                if (null === t || void 0 === t ? void 0 : t.collaborators) {
                    const n = t.collaborators.get(e);
                    if (null === n || void 0 === n ? void 0 : n.color) return n.color
                }
                const n = e.split("").reduce(((e, t) => e + t.charCodeAt(0)), 0),
                    o = E.elementBackground.slice(1),
                    i = E.elementStroke.slice(1);
                return {
                    background: o[n % o.length],
                    stroke: i[n % i.length]
                }
            };
        let yr;
        ! function(e) {
            e.ACTIVE = "active", e.AWAY = "away", e.IDLE = "idle"
        }(yr || (yr = {}));
        const vr = (() => {
                const e = document.createElement("canvas").getContext("2d");
                if (!e) return !1;
                return e.fillStyle = "#f00", e.textBaseline = "top", e.font = "32px Arial", e.fillText("\ud83d\ude00", 0, 0), 0 !== e.getImageData(12, 12, 1, 1).data[0]
            })(),
            fr = (e, t, n, o, i, s, a, r, l = !1) => {
                e.save(), e.translate(s, a), e.rotate(r), l && e.fillRect(t - s, n - a, o, i), e.strokeRect(t - s, n - a, o, i), e.restore()
            },
            xr = (e, t, n, o) => {
                e.beginPath(), e.arc(t, n, o, 0, 2 * Math.PI), e.fill(), e.stroke()
            },
            wr = (e, t, n, o, i, s, a, {
                renderScrollbars: r = !0,
                renderSelection: l = !0,
                renderOptimizations: h = !1,
                renderGrid: u = !0
            } = {}) => {
                if (null === s) return {
                    atLeastOneVisibleElement: !1
                };
                const p = s.getContext("2d");
                p.setTransform(1, 0, 0, 1, 0, 0), p.save(), p.scale(o, o);
                const m = s.width / o,
                    g = s.height / o;
                if (a.exportWithDarkMode && (p.filter = d.J), "string" === typeof a.viewBackgroundColor) {
                    ("transparent" === a.viewBackgroundColor || 5 === a.viewBackgroundColor.length || 9 === a.viewBackgroundColor.length || /(hsla|rgba)\(/.test(a.viewBackgroundColor)) && p.clearRect(0, 0, m, g), p.save(), p.fillStyle = a.viewBackgroundColor, p.fillRect(0, 0, m, g), p.restore()
                } else p.clearRect(0, 0, m, g);
                const b = a.zoom.translation.x,
                    y = a.zoom.translation.y;
                p.save(), p.translate(b, y), p.scale(a.zoom.value, a.zoom.value), u && t.gridSize && ((e, t, n, o, i, s) => {
                    e.save(), e.strokeStyle = "rgba(0,0,0,0.1)", e.beginPath();
                    for (let a = n; a < n + i + 2 * t; a += t) e.moveTo(a, o - t), e.lineTo(a, o + s + 2 * t);
                    for (let a = o; a < o + s + 2 * t; a += t) e.moveTo(n - t, a), e.lineTo(n + i + 2 * t, a);
                    e.stroke(), e.restore()
                })(p, t.gridSize, -Math.ceil(b / a.zoom.value / t.gridSize) * t.gridSize + a.scrollX % t.gridSize, -Math.ceil(y / a.zoom.value / t.gridSize) * t.gridSize + a.scrollY % t.gridSize, m / a.zoom.value, g / a.zoom.value);
                const v = e.filter((e => kr(e, m, g, {
                    zoom: a.zoom,
                    offsetLeft: t.offsetLeft,
                    offsetTop: t.offsetTop,
                    scrollX: a.scrollX,
                    scrollY: a.scrollY
                })));
                if (v.forEach((e => {
                        try {
                            Qt(e, i, p, h, a)
                        } catch (t) {
                            console.error(t)
                        }
                    })), t.editingLinearElement) {
                    const e = ti.getElement(t.editingLinearElement.elementId);
                    e && ((e, t, n, o) => {
                        e.save(), e.translate(n.scrollX, n.scrollY), e.lineWidth = 1 / n.zoom.value, ti.getPointsGlobalCoordinates(o).forEach(((o, i) => {
                            var s;
                            e.strokeStyle = "red", e.setLineDash([]), e.fillStyle = (null === (s = t.editingLinearElement) || void 0 === s ? void 0 : s.activePointIndex) === i ? "rgba(255, 127, 127, 0.9)" : "rgba(255, 255, 255, 0.9)";
                            const {
                                POINT_HANDLE_SIZE: a
                            } = ti;
                            xr(e, o[0], o[1], a / 2 / n.zoom.value)
                        })), e.restore()
                    })(p, t, a, e)
                }
                if (n) try {
                    Qt(n, i, p, h, a)
                } catch (w) {
                    console.error(w)
                }
                if (ni(t) && t.suggestedBindings.filter((e => null != e)).forEach((e => {
                        Sr(p, a, e)
                    })), l && !t.multiElement && !t.editingLinearElement) {
                    const n = e.reduce(((e, n) => {
                            const o = [];
                            if (t.selectedElementIds[n.id] && !xn(t, n) && o.push(c.black), a.remoteSelectedElementIds[n.id] && o.push(...a.remoteSelectedElementIds[n.id].map((e => {
                                    const {
                                        background: n
                                    } = br(e, t);
                                    return n
                                }))), o.length) {
                                const [t, i, s, a] = At(n);
                                e.push({
                                    angle: n.angle,
                                    elementX1: t,
                                    elementY1: i,
                                    elementX2: s,
                                    elementY2: a,
                                    selectionColors: o
                                })
                            }
                            return e
                        }), []),
                        o = t => {
                            const o = Cn(e, t),
                                [i, s, a, r] = Rt(o);
                            n.push({
                                angle: 0,
                                elementX1: i,
                                elementX2: a,
                                elementY1: s,
                                elementY2: r,
                                selectionColors: [c.black]
                            })
                        };
                    for (const e of jn(t)) o(e);
                    t.editingGroupId && o(t.editingGroupId), n.forEach((e => Er(p, a, e)));
                    const i = Qi(e, t);
                    if (p.save(), p.translate(a.scrollX, a.scrollY), 1 === i.length) {
                        p.fillStyle = c.white;
                        const e = Fn(i[0], a.zoom, "mouse");
                        t.viewModeEnabled || jr(p, a, e, i[0].angle)
                    } else if (i.length > 1 && !t.isRotating) {
                        const e = 4 / a.zoom.value;
                        p.fillStyle = c.white;
                        const [t, n, o, s] = Rt(i), r = p.getLineDash();
                        p.setLineDash([2 / a.zoom.value]);
                        const l = p.lineWidth;
                        p.lineWidth = 1 / a.zoom.value, fr(p, t - e, n - e, o - t + 2 * e, s - n + 2 * e, (t + o) / 2, (n + s) / 2, 0), p.lineWidth = l, p.setLineDash(r);
                        const d = Vn([t, n, o, s], 0, a.zoom, "mouse", Rn);
                        jr(p, a, d, 0)
                    }
                    p.restore()
                }
                p.restore();
                for (const d in a.remotePointerViewportCoords) {
                    let {
                        x: e,
                        y: n
                    } = a.remotePointerViewportCoords[d];
                    e -= t.offsetLeft, n -= t.offsetTop;
                    const o = 9,
                        i = 14,
                        s = e < 0 || e > m - o || n < 0 || n > g - i;
                    e = Math.max(e, 0), e = Math.min(e, m - o), n = Math.max(n, 0), n = Math.min(n, g - i);
                    const {
                        background: r,
                        stroke: l
                    } = br(d, t);
                    p.save(), p.strokeStyle = l, p.fillStyle = r;
                    const h = a.remotePointerUserStates[d];
                    (s || h === yr.AWAY) && (p.globalAlpha = .48), a.remotePointerButton && "down" === a.remotePointerButton[d] && (p.beginPath(), p.arc(e, n, 15, 0, 2 * Math.PI, !1), p.lineWidth = 3, p.strokeStyle = "#ffffff88", p.stroke(), p.closePath(), p.beginPath(), p.arc(e, n, 15, 0, 2 * Math.PI, !1), p.lineWidth = 1, p.strokeStyle = l, p.stroke(), p.closePath()), p.beginPath(), p.moveTo(e, n), p.lineTo(e + 1, n + 14), p.lineTo(e + 4, n + 9), p.lineTo(e + 9, n + 10), p.lineTo(e, n), p.fill(), p.stroke();
                    const u = a.remotePointerUsernames[d];
                    let b = "";
                    h === yr.AWAY ? b = vr ? "\u26ab\ufe0f" : " (".concat(yr.AWAY, ")") : h === yr.IDLE ? b = vr ? "\ud83d\udca4" : " (".concat(yr.IDLE, ")") : h === yr.ACTIVE && (b = vr ? "\ud83d\udfe2" : "");
                    const y = "".concat(u ? "".concat(u, " ") : "").concat(b);
                    if (!s && y) {
                        const t = e + o,
                            s = n + i,
                            a = 4,
                            d = 4,
                            h = p.measureText(y),
                            u = h.actualBoundingBoxDescent + h.actualBoundingBoxAscent;
                        p.fillStyle = l, p.fillRect(t - 1, s - 1, h.width + 2 * a + 2, u + 2 * d + 2), p.fillStyle = r, p.fillRect(t, s, h.width + 2 * a, u + 2 * d), p.fillStyle = c.white, p.fillText(y, t + a, s + d + h.actualBoundingBoxAscent)
                    }
                    p.restore(), p.closePath()
                }
                let x;
                return r && (x = ((e, t, n, {
                    scrollX: o,
                    scrollY: i,
                    zoom: s
                }) => {
                    if (0 === e.length) return {
                        horizontal: null,
                        vertical: null
                    };
                    const [a, r, l, c] = Rt(e), d = t / s.value, h = n / s.value, u = t - d, p = n - h, m = {
                        top: parseInt(Ue("sat")),
                        bottom: parseInt(Ue("sab")),
                        left: parseInt(Ue("sal")),
                        right: parseInt(Ue("sar"))
                    }, g = f().rtl, b = u / 2 - o + m.left, y = p / 2 - i + m.top, v = b + d - m.right, x = y + h - m.bottom, w = Math.min(a, b), j = Math.min(r, y), E = Math.max(l, v), S = Math.max(c, x);
                    return {
                        horizontal: b === w && v === E ? null : {
                            x: Math.max(m.left, 4) + (b - w) / (E - w) * t,
                            y: n - 6 - Math.max(4, m.bottom),
                            width: (v - b) / (E - w) * t - Math.max(8, m.left + m.right),
                            height: 6
                        },
                        vertical: y === j && x === S ? null : {
                            x: g ? Math.max(m.left, 4) : t - 6 - Math.max(m.right, 4),
                            y: (y - j) / (S - j) * n + Math.max(m.top, 4),
                            width: 6,
                            height: (x - y) / (S - j) * n - Math.max(8, m.top + m.bottom)
                        }
                    }
                })(e, m, g, a), p.save(), p.fillStyle = "rgba(0,0,0,0.3)", p.strokeStyle = "rgba(255,255,255,0.8)", [x.horizontal, x.vertical].forEach((e => {
                    e && ((e, t, n, o, i, s) => {
                        e.beginPath(), e.moveTo(t + s, n), e.lineTo(t + o - s, n), e.quadraticCurveTo(t + o, n, t + o, n + s), e.lineTo(t + o, n + i - s), e.quadraticCurveTo(t + o, n + i, t + o - s, n + i), e.lineTo(t + s, n + i), e.quadraticCurveTo(t, n + i, t, n + i - s), e.lineTo(t, n + s), e.quadraticCurveTo(t, n, t + s, n), e.closePath(), e.fill(), e.stroke()
                    })(p, e.x, e.y, e.width, e.height, 3)
                })), p.restore()), p.restore(), {
                    atLeastOneVisibleElement: v.length > 0,
                    scrollBars: x
                }
            },
            jr = (e, t, n, o) => {
                Object.keys(n).forEach((i => {
                    const s = n[i];
                    void 0 !== s && (e.save(), e.lineWidth = 1 / t.zoom.value, "rotation" === i ? xr(e, s[0] + s[2] / 2, s[1] + s[3] / 2, s[2] / 2) : fr(e, s[0], s[1], s[2], s[3], s[0] + s[2] / 2, s[1] + s[3] / 2, o, !0), e.restore())
                }))
            },
            Er = (e, t, n) => {
                const {
                    angle: o,
                    elementX1: i,
                    elementY1: s,
                    elementX2: a,
                    elementY2: r,
                    selectionColors: l
                } = n, c = a - i, d = r - s, h = 4 / t.zoom.value, u = 8 / t.zoom.value, p = 4 / t.zoom.value;
                e.save(), e.translate(t.scrollX, t.scrollY), e.lineWidth = 1 / t.zoom.value;
                const m = l.length;
                for (let g = 0; g < m; ++g) e.strokeStyle = l[g], e.setLineDash([u, p + (u + p) * (m - 1)]), e.lineDashOffset = (u + p) * g, fr(e, i - h, s - h, c + 2 * h, d + 2 * h, i + c / 2, s + d / 2, o);
                e.restore()
            },
            Sr = (e, t, n) => {
                const o = Array.isArray(n) ? Or : Cr;
                e.save(), e.translate(t.scrollX, t.scrollY), o(e, n), e.restore()
            },
            Cr = (e, t) => {
                const [n, o, i, s] = At(t), a = i - n, r = s - o, l = Eo(t, a, r);
                e.strokeStyle = "rgba(0,0,0,.05)", e.lineWidth = l - 4;
                const c = 2 + l / 2;
                switch (t.type) {
                    case "rectangle":
                    case "text":
                        fr(e, n - c, o - c, a + 2 * c, r + 2 * c, n + a / 2, o + r / 2, t.angle);
                        break;
                    case "diamond":
                        const i = Math.hypot(a, r);
                        ((e, t, n, o, i, s) => {
                            e.save(), e.translate(o, i), e.rotate(s), e.beginPath(), e.moveTo(0, n / 2), e.lineTo(t / 2, 0), e.lineTo(0, -n / 2), e.lineTo(-t / 2, 0), e.closePath(), e.stroke(), e.restore()
                        })(e, a + 2 * (c * i / r), r + 2 * (c * i / a), n + a / 2, o + r / 2, t.angle);
                        break;
                    case "ellipse":
                        ((e, t, n, o, i, s) => {
                            e.beginPath(), e.ellipse(o, i, t / 2, n / 2, s, 0, 2 * Math.PI), e.stroke()
                        })(e, a + 2 * c, r + 2 * c, n + a / 2, o + r / 2, t.angle)
                }
            },
            Or = (e, t) => {
                const [n, o, i] = t, s = Eo(i, i.width, i.height);
                e.strokeStyle = "rgba(0,0,0,0)", e.fillStyle = "rgba(0,0,0,.05)";
                ("both" === o ? [0, -1] : "start" === o ? [0] : [-1]).forEach((t => {
                    const [o, i] = ti.getPointAtIndexGlobalCoordinates(n, t);
                    xr(e, o, i, s)
                }))
            },
            kr = (e, t, n, o) => {
                const [i, s, a, r] = Dt(e), l = Ve({
                    clientX: o.offsetLeft,
                    clientY: o.offsetTop
                }, o), c = Ve({
                    clientX: o.offsetLeft + t,
                    clientY: o.offsetTop + n
                }, o);
                return l.x <= a && l.y <= r && c.x >= i && c.y >= s
            },
            Ir = (e, t, n, {
                offsetX: o = 0,
                offsetY: i = 0
            } = {}) => {
                n && e.forEach((e => {
                    if (!e.isDeleted) try {
                        ((e, t, n, o, i) => {
                            const [s, a, r, l] = At(e), c = (r - s) / 2 - (e.x - s), h = (l - a) / 2 - (e.y - a), u = 180 * e.angle / Math.PI, p = t.generator;
                            switch (e.type) {
                                case "selection":
                                    throw new Error("Selection rendering is not supported for SVG");
                                case "rectangle":
                                case "diamond":
                                case "ellipse":
                                    {
                                        Zt(e, p);
                                        const s = $t(t, Kt(e), d.x),
                                            a = e.opacity / 100;1 !== a && (s.setAttribute("stroke-opacity", "".concat(a)), s.setAttribute("fill-opacity", "".concat(a))),
                                        s.setAttribute("stroke-linecap", "round"),
                                        s.setAttribute("transform", "translate(".concat(o || 0, " ").concat(i || 0, ") rotate(").concat(u, " ").concat(c, " ").concat(h, ")")),
                                        n.appendChild(s);
                                        break
                                    }
                                case "line":
                                case "arrow":
                                    {
                                        Zt(e, p);
                                        const s = n.ownerDocument.createElementNS(Oe, "g"),
                                            a = e.opacity / 100;s.setAttribute("stroke-linecap", "round"),
                                        Kt(e).forEach((n => {
                                            const r = $t(t, n, d.x);
                                            1 !== a && (r.setAttribute("stroke-opacity", "".concat(a)), r.setAttribute("fill-opacity", "".concat(a))), r.setAttribute("transform", "translate(".concat(o || 0, " ").concat(i || 0, ") rotate(").concat(u, " ").concat(c, " ").concat(h, ")")), "line" === e.type && wt(e.points) && "transparent" !== e.backgroundColor && r.setAttribute("fill-rule", "evenodd"), s.appendChild(r)
                                        })),
                                        n.appendChild(s);
                                        break
                                    }
                                case "freedraw":
                                    {
                                        tn(e);
                                        const t = e.opacity / 100,
                                            s = n.ownerDocument.createElementNS(Oe, "g");1 !== t && (s.setAttribute("stroke-opacity", "".concat(t)), s.setAttribute("fill-opacity", "".concat(t))),
                                        s.setAttribute("transform", "translate(".concat(o || 0, " ").concat(i || 0, ") rotate(").concat(u, " ").concat(c, " ").concat(h, ")"));
                                        const a = n.ownerDocument.createElementNS(Oe, "path");s.setAttribute("stroke", "none"),
                                        s.setAttribute("fill", e.strokeColor),
                                        a.setAttribute("d", nn(e)),
                                        s.appendChild(a),
                                        n.appendChild(s);
                                        break
                                    }
                                default:
                                    if (!ct(e)) throw new Error("Unimplemented type ".concat(e.type)); {
                                        const t = e.opacity / 100,
                                            s = n.ownerDocument.createElementNS(Oe, "g");
                                        1 !== t && (s.setAttribute("stroke-opacity", "".concat(t)), s.setAttribute("fill-opacity", "".concat(t))), s.setAttribute("transform", "translate(".concat(o || 0, " ").concat(i || 0, ") rotate(").concat(u, " ").concat(c, " ").concat(h, ")"));
                                        const a = e.text.replace(/\r\n?/g, "\n").split("\n"),
                                            r = e.height / a.length,
                                            l = e.height - e.baseline,
                                            d = "center" === e.textAlign ? e.width / 2 : "right" === e.textAlign ? e.width : 0,
                                            p = We(e.text) ? "rtl" : "ltr",
                                            m = "center" === e.textAlign ? "middle" : "right" === e.textAlign || "rtl" === p ? "end" : "start";
                                        for (let o = 0; o < a.length; o++) {
                                            const t = n.ownerDocument.createElementNS(Oe, "text");
                                            t.textContent = a[o], t.setAttribute("x", "".concat(d)), t.setAttribute("y", "".concat((o + 1) * r - l)), t.setAttribute("font-family", Me(e)), t.setAttribute("font-size", "".concat(e.fontSize, "px")), t.setAttribute("fill", e.strokeColor), t.setAttribute("text-anchor", m), t.setAttribute("style", "white-space: pre;"), t.setAttribute("direction", p), s.appendChild(t)
                                        }
                                        n.appendChild(s)
                                    }
                            }
                        })(e, t, n, e.x + o, e.y + i)
                    } catch (s) {
                        console.error(s)
                    }
                }))
            };
        var Ar = n(26);
        class Tr extends Error {
            constructor(e = "Couldn't export canvas.", t = "CANVAS_ERROR") {
                super(), this.name = t, this.message = e
            }
        }
        class Mr extends DOMException {
            constructor(e = "Request Aborted") {
                super(e, "AbortError")
            }
        }
        const Lr = {
                jpg: "image/jpeg",
                png: "image/png",
                svg: "image/svg+xml",
                json: "application/json",
                excalidraw: d.y.excalidraw,
                excalidrawlib: d.y.excalidrawlib
            },
            Pr = e => {
                var t, n, o;
                const i = null === (t = e.extensions) || void 0 === t ? void 0 : t.reduce(((e, t) => (e.push(Lr[t]), e)), []),
                    s = null === (n = e.extensions) || void 0 === n ? void 0 : n.reduce(((e, t) => "jpg" === t ? e.concat(".jpg", ".jpeg") : e.concat(".".concat(t))), []);
                return Object(Ar.a)({
                    description: e.description,
                    extensions: s,
                    mimeTypes: i,
                    multiple: null !== (o = e.multiple) && void 0 !== o && o,
                    legacySetup: (t, n, o) => {
                        const i = _e(n, 500),
                            s = () => {
                                a(), document.addEventListener(d.p.KEYUP, i), document.addEventListener(d.p.POINTER_UP, i), i()
                            },
                            a = () => {
                                var n;
                                if (null === (n = o.files) || void 0 === n ? void 0 : n.length) {
                                    const n = e.multiple ? [...o.files] : o.files[0];
                                    t(n)
                                }
                            };
                        requestAnimationFrame((() => {
                            window.addEventListener(d.p.FOCUS, s)
                        }));
                        const r = window.setInterval((() => {
                            a()
                        }), 500);
                        return e => {
                            clearInterval(r), i.cancel(), window.removeEventListener(d.p.FOCUS, s), document.removeEventListener(d.p.KEYUP, i), document.removeEventListener(d.p.POINTER_UP, i), e && (console.warn("Opening the file was canceled (legacy-fs)."), e(new Mr))
                        }
                    }
                })
            },
            _r = (e, t) => Object(Ar.b)(e, {
                fileName: "".concat(t.name, ".").concat(t.extension),
                description: t.description,
                extensions: [".".concat(t.extension)]
            }, t.fileHandle),
            Dr = {
                selection: !0,
                text: !0,
                rectangle: !0,
                diamond: !0,
                ellipse: !0,
                line: !0,
                arrow: !0,
                freedraw: !0
            },
            Rr = (e, t) => {
                var n, o, i, s, a, r, l, c, d, h, u, p;
                const m = {
                    type: t.type || e.type,
                    version: e.version || 1,
                    versionNonce: null !== (n = e.versionNonce) && void 0 !== n ? n : 0,
                    isDeleted: null !== (o = e.isDeleted) && void 0 !== o && o,
                    id: e.id || un(),
                    fillStyle: e.fillStyle || "hachure",
                    strokeWidth: e.strokeWidth || 1,
                    strokeStyle: null !== (i = e.strokeStyle) && void 0 !== i ? i : "solid",
                    roughness: null !== (s = e.roughness) && void 0 !== s ? s : 1,
                    opacity: null == e.opacity ? 100 : e.opacity,
                    angle: e.angle || 0,
                    x: null !== (a = null !== (r = t.x) && void 0 !== r ? r : e.x) && void 0 !== a ? a : 0,
                    y: null !== (l = null !== (c = t.y) && void 0 !== c ? c : e.y) && void 0 !== l ? l : 0,
                    strokeColor: e.strokeColor,
                    backgroundColor: e.backgroundColor,
                    width: e.width || 0,
                    height: e.height || 0,
                    seed: null !== (d = e.seed) && void 0 !== d ? d : 1,
                    groupIds: null !== (h = e.groupIds) && void 0 !== h ? h : [],
                    strokeSharpness: null !== (u = e.strokeSharpness) && void 0 !== u ? u : pt(e.type) ? "round" : "sharp",
                    boundElementIds: null !== (p = e.boundElementIds) && void 0 !== p ? p : []
                };
                return { ...m,
                    ...vn(m),
                    ...t
                }
            },
            zr = e => {
                var t, n;
                switch (e.type) {
                    case "text":
                        let o = e.fontSize,
                            i = e.fontFamily;
                        if ("font" in e) {
                            const [t, s] = e.font.split(" ");
                            o = parseInt(t, 10), n = s, i = Object.keys(d.t).includes(n) ? d.t[n] : d.f
                        }
                        return Rr(e, {
                            fontSize: o,
                            fontFamily: i,
                            text: null !== (t = e.text) && void 0 !== t ? t : "",
                            baseline: e.baseline,
                            textAlign: e.textAlign || d.h,
                            verticalAlign: e.verticalAlign || d.k
                        });
                    case "freedraw":
                        return Rr(e, {
                            points: e.points,
                            lastCommittedPoint: null,
                            simulatePressure: e.simulatePressure,
                            pressures: e.pressures
                        });
                    case "line":
                    case "draw":
                    case "arrow":
                        {
                            const {
                                startArrowhead: t = null,
                                endArrowhead: n = ("arrow" === e.type ? "arrow" : null)
                            } = e;
                            let o = e.x,
                                i = e.y,
                                s = !Array.isArray(e.points) || e.points.length < 2 ? [
                                    [0, 0],
                                    [e.width, e.height]
                                ] : e.points;
                            return 0 === s[0][0] && 0 === s[0][1] || ({
                                points: s,
                                x: o,
                                y: i
                            } = ti.getNormalizedPoints(e)),
                            Rr(e, {
                                type: "draw" === e.type ? "line" : e.type,
                                startBinding: e.startBinding,
                                endBinding: e.endBinding,
                                lastCommittedPoint: null,
                                startArrowhead: t,
                                endArrowhead: n,
                                points: s,
                                x: o,
                                y: i
                            })
                        }
                    case "ellipse":
                    case "rectangle":
                    case "diamond":
                        return Rr(e, {})
                }
            },
            Nr = (e, t) => {
                const n = t ? Ui(t) : null;
                return (e || []).reduce(((e, t) => {
                    if ("selection" !== t.type && !bn(t)) {
                        let o = zr(t);
                        if (o) {
                            const i = null === n || void 0 === n ? void 0 : n[t.id];
                            i && i.version > o.version && (o = gn(o, i.version)), e.push(o)
                        }
                    }
                    return e
                }), [])
            },
            Br = (e, t) => {
                e = e || {};
                const n = et(),
                    o = {};
                for (const [i, s] of Object.entries(n)) {
                    const n = e[i],
                        a = t ? t[i] : void 0;
                    o[i] = void 0 !== n ? n : void 0 !== a ? a : s
                }
                return { ...o,
                    elementType: Dr[o.elementType] ? o.elementType : "selection",
                    zoom: "number" === typeof e.zoom ? {
                        value: e.zoom,
                        translation: n.zoom.translation
                    } : e.zoom || n.zoom
                }
            },
            Hr = (e, t, n) => ({
                elements: Nr(null === e || void 0 === e ? void 0 : e.elements, n),
                appState: Br(null === e || void 0 === e ? void 0 : e.appState, t || null)
            }),
            Vr = async e => {
                let t;
                if ("image/png" === e.type) try {
                    return await (await Promise.all([n.e(1), n.e(49), n.e(42)]).then(n.bind(null, 217))).decodePngMetadata(e)
                } catch (o) {
                    throw "INVALID" === o.message ? new Error(w("alerts.imageDoesNotContainScene")) : new Error(w("alerts.cannotRestoreFromImage"))
                } else if (t = "text" in Blob ? await e.text() : await new Promise((t => {
                        const n = new FileReader;
                        n.readAsText(e, "utf8"), n.onloadend = () => {
                            n.readyState === FileReader.DONE && t(n.result)
                        }
                    })), "image/svg+xml" === e.type) try {
                    return await (await Promise.all([n.e(1), n.e(49), n.e(42)]).then(n.bind(null, 217))).decodeSvgMetadata({
                        svg: t
                    })
                } catch (o) {
                    throw "INVALID" === o.message ? new Error(w("alerts.imageDoesNotContainScene")) : new Error(w("alerts.cannotRestoreFromImage"))
                }
                return t
            },
            Fr = e => {
                var t;
                return e && (null === (t = e.name.match(/\.(json|excalidraw|png|svg)$/)) || void 0 === t ? void 0 : t[1]) || null
            },
            Ur = e => {
                const t = Fr(e);
                return "png" === t || "svg" === t
            },
            Gr = async (e, t, n) => {
                const o = await Vr(e);
                try {
                    const i = JSON.parse(o);
                    if (!Xr(i)) throw new Error(w("alerts.couldNotLoadInvalidFile"));
                    return Hr({
                        elements: Xi(i.elements || []),
                        appState: {
                            theme: null === t || void 0 === t ? void 0 : t.theme,
                            fileHandle: e.handle || null,
                            ...it(i.appState || {}),
                            ...t ? ts(i.elements || [], t) : {}
                        }
                    }, t, n)
                } catch (i) {
                    throw console.error(i.message), new Error(w("alerts.couldNotLoadInvalidFile"))
                }
            },
            Wr = async e => new Promise(((t, n) => {
                try {
                    e.toBlob((e => {
                        if (!e) return n(new Tr(w("canvasError.canvasTooBig"), "CANVAS_POSSIBLY_TOO_BIG"));
                        t(e)
                    }))
                } catch (o) {
                    n(o)
                }
            })),
            Kr = (e, t) => {
                const n = {
                    type: d.q.excalidraw,
                    version: 2,
                    source: d.s,
                    elements: Xi(e),
                    appState: it(t)
                };
                return JSON.stringify(n, null, 2)
            },
            Yr = async (e, t) => {
                const n = Kr(e, t),
                    o = new Blob([n], {
                        type: d.y.excalidraw
                    });
                return {
                    fileHandle: await _r(o, {
                        name: t.name,
                        extension: "excalidraw",
                        description: "Excalidraw file",
                        fileHandle: Ur(t.fileHandle) ? null : t.fileHandle
                    })
                }
            },
            Xr = e => (null === e || void 0 === e ? void 0 : e.type) === d.q.excalidraw && (!e.elements || Array.isArray(e.elements) && (!e.appState || "object" === typeof e.appState)),
            Zr = "\x3c!-- svg-source:excalidraw --\x3e",
            qr = (e, t, {
                exportBackground: n,
                exportPadding: o = d.e,
                viewBackgroundColor: i
            }, s = ((e, n) => {
                const o = document.createElement("canvas");
                return o.width = e * t.exportScale, o.height = n * t.exportScale, {
                    canvas: o,
                    scale: t.exportScale
                }
            })) => {
                const [a, r, l, c] = Qr(e, o), {
                    canvas: h,
                    scale: u = 1
                } = s(l, c);
                return wr(e, t, null, u, rt.a.canvas(h), h, {
                    viewBackgroundColor: n ? i : null,
                    exportWithDarkMode: t.exportWithDarkMode,
                    scrollX: -a + o,
                    scrollY: -r + o,
                    zoom: et().zoom,
                    remotePointerViewportCoords: {},
                    remoteSelectedElementIds: {},
                    shouldCacheIgnoreZoom: !1,
                    remotePointerUsernames: {},
                    remotePointerUserStates: {}
                }, {
                    renderScrollbars: !1,
                    renderSelection: !1,
                    renderOptimizations: !1,
                    renderGrid: !1
                }), h
            },
            Jr = async (e, t) => {
                const {
                    exportPadding: o = d.e,
                    viewBackgroundColor: i,
                    exportScale: s = 1,
                    exportEmbedScene: a
                } = t;
                let r = "";
                if (a) try {
                    r = await (await Promise.all([n.e(1), n.e(49), n.e(42)]).then(n.bind(null, 217))).encodeSvgMetadata({
                        text: Kr(e, t)
                    })
                } catch (g) {
                    console.error(g)
                }
                const [l, c, h, u] = Qr(e, o), p = document.createElementNS(Oe, "svg");
                if (p.setAttribute("version", "1.1"), p.setAttribute("xmlns", Oe), p.setAttribute("viewBox", "0 0 ".concat(h, " ").concat(u)), p.setAttribute("width", "".concat(h * s)), p.setAttribute("height", "".concat(u * s)), t.exportWithDarkMode && p.setAttribute("filter", d.J), p.innerHTML = "\n  ".concat(Zr, "\n  ").concat(r, '\n  <defs>\n    <style>\n      @font-face {\n        font-family: "Virgil";\n        src: url("https://excalidraw.com/Virgil.woff2");\n      }\n      @font-face {\n        font-family: "Cascadia";\n        src: url("https://excalidraw.com/Cascadia.woff2");\n      }\n    </style>\n  </defs>\n  '), t.exportBackground && i) {
                    const e = p.ownerDocument.createElementNS(Oe, "rect");
                    e.setAttribute("x", "0"), e.setAttribute("y", "0"), e.setAttribute("width", "".concat(h)), e.setAttribute("height", "".concat(u)), e.setAttribute("fill", i), p.appendChild(e)
                }
                const m = rt.a.svg(p);
                return Ir(e, m, p, {
                    offsetX: -l + o,
                    offsetY: -c + o
                }), p
            },
            Qr = (e, t) => {
                const [n, o, i, s] = Rt(e);
                return [n, o, De(n, i) + 2 * t, De(o, s) + t + t]
            },
            $r = 32,
            el = 12,
            tl = 256,
            nl = "NOT_SPREADSHEET",
            ol = "VALID_SPREADSHEET",
            il = e => {
                const t = /^[$\u20ac\xa3\xa5\u20a9]?([0-9,]+(\.[0-9]+)?)$/.exec(e);
                return t ? parseFloat(t[1].replace(/,/g, "")) : null
            },
            sl = (e, t) => e.slice(1).every((e => null !== il(e[t]))),
            al = e => {
                const t = e[0].length;
                if (t > 2) return {
                    type: nl,
                    reason: "More than 2 columns"
                };
                if (1 === t) {
                    if (!sl(e, 0)) return {
                        type: nl,
                        reason: "Value is not numeric"
                    };
                    const t = null === il(e[0][0]),
                        n = (t ? e.slice(1) : e).map((e => il(e[0])));
                    return n.length < 2 ? {
                        type: nl,
                        reason: "Less than two rows"
                    } : {
                        type: ol,
                        spreadsheet: {
                            title: t ? e[0][0] : null,
                            labels: null,
                            values: n
                        }
                    }
                }
                const n = sl(e, 0) ? 0 : 1;
                if (!sl(e, n)) return {
                    type: nl,
                    reason: "Value is not numeric"
                };
                const o = (n + 1) % 2,
                    i = null === il(e[0][n]),
                    s = i ? e.slice(1) : e;
                return s.length < 2 ? {
                    type: nl,
                    reason: "Less than 2 rows"
                } : {
                    type: ol,
                    spreadsheet: {
                        title: i ? e[0][n] : null,
                        labels: s.map((e => e[o])),
                        values: s.map((e => il(e[n])))
                    }
                }
            },
            rl = E.elementBackground.slice(2, E.elementBackground.length),
            ll = {
                fillStyle: "hachure",
                fontFamily: d.f,
                fontSize: d.g,
                opacity: 100,
                roughness: 1,
                strokeColor: E.elementStroke[0],
                strokeSharpness: "sharp",
                strokeStyle: "solid",
                strokeWidth: 1,
                verticalAlign: "middle"
            },
            cl = e => ({
                chartWidth: 44 * e.values.length + el,
                chartHeight: 280
            }),
            dl = (e, t, n, o, i) => {
                var s;
                return (null === (s = e.labels) || void 0 === s ? void 0 : s.map(((e, s) => Tn({
                    groupIds: [o],
                    backgroundColor: i,
                    ...ll,
                    text: e.length > 8 ? "".concat(e.slice(0, 5), "...") : e,
                    x: t + 44 * s + 24,
                    y: n + 6,
                    width: $r,
                    angle: 5.87,
                    fontSize: 16,
                    textAlign: "center",
                    verticalAlign: "top"
                })))) || []
            },
            hl = (e, t, n, o, i) => {
                const s = Tn({
                    groupIds: [o],
                    backgroundColor: i,
                    ...ll,
                    x: t - el,
                    y: n - el,
                    text: "0",
                    textAlign: "right"
                });
                return [s, Tn({
                    groupIds: [o],
                    backgroundColor: i,
                    ...ll,
                    x: t - el,
                    y: n - tl - s.height / 2,
                    text: Math.max(...e.values).toLocaleString(),
                    textAlign: "right"
                })]
            },
            ul = (e, t, n, o, i) => {
                const {
                    chartWidth: s,
                    chartHeight: a
                } = cl(e);
                return [Ln({
                    backgroundColor: i,
                    groupIds: [o],
                    ...ll,
                    type: "line",
                    x: t,
                    y: n,
                    startArrowhead: null,
                    endArrowhead: null,
                    width: s,
                    points: [
                        [0, 0],
                        [s, 0]
                    ]
                }), Ln({
                    backgroundColor: i,
                    groupIds: [o],
                    ...ll,
                    type: "line",
                    x: t,
                    y: n,
                    startArrowhead: null,
                    endArrowhead: null,
                    height: a,
                    points: [
                        [0, 0],
                        [0, -a]
                    ]
                }), Ln({
                    backgroundColor: i,
                    groupIds: [o],
                    ...ll,
                    type: "line",
                    x: t,
                    y: n - tl - el,
                    startArrowhead: null,
                    endArrowhead: null,
                    strokeStyle: "dotted",
                    width: s,
                    opacity: 50,
                    points: [
                        [0, 0],
                        [s, 0]
                    ]
                })]
            },
            pl = (e, t, n, o, i, s) => {
                const {
                    chartWidth: a,
                    chartHeight: r
                } = cl(e), l = e.title ? Tn({
                    backgroundColor: i,
                    groupIds: [o],
                    ...ll,
                    text: e.title,
                    x: t + a / 2,
                    y: n - tl - 24 - d.g,
                    strokeSharpness: "sharp",
                    strokeStyle: "solid",
                    textAlign: "center"
                }) : null, c = s ? In({
                    backgroundColor: i,
                    groupIds: [o],
                    ...ll,
                    type: "rectangle",
                    x: t,
                    y: n - r,
                    width: a,
                    height: r,
                    strokeColor: E.elementStroke[0],
                    fillStyle: "solid",
                    opacity: 6
                }) : null;
                return [...c ? [c] : [], ...l ? [l] : [], ...dl(e, t, n, o, i), ...hl(e, t, n, o, i), ...ul(e, t, n, o, i)]
            },
            ml = (e, t, n, o) => "line" === e ? ((e, t, n) => {
                const o = Math.max(...e.values),
                    i = un(),
                    s = rl[Math.floor(Math.random() * rl.length)];
                let a = 0;
                const r = [];
                for (const d of e.values) {
                    const e = 44 * a,
                        t = -d / o * tl;
                    r.push([e, t]), a++
                }
                const l = Math.max(...r.map((e => e[0]))),
                    c = Math.max(...r.map((e => e[1]))),
                    h = Math.min(...r.map((e => e[0]))),
                    u = Math.min(...r.map((e => e[1]))),
                    p = Ln({
                        backgroundColor: s,
                        groupIds: [i],
                        ...ll,
                        type: "line",
                        x: t + el + 16,
                        y: n - el,
                        startArrowhead: null,
                        endArrowhead: null,
                        height: c - u,
                        width: l - h,
                        strokeWidth: 2,
                        points: r
                    }),
                    m = e.values.map(((e, a) => {
                        const r = 44 * a + 6,
                            l = -e / o * tl + 6;
                        return In({
                            backgroundColor: s,
                            groupIds: [i],
                            ...ll,
                            fillStyle: "solid",
                            strokeWidth: 2,
                            type: "ellipse",
                            x: t + r + 16,
                            y: n + l - 24,
                            width: el,
                            height: el
                        })
                    })),
                    g = e.values.map(((e, a) => {
                        const r = 44 * a + 6,
                            l = e / o * tl + 6 + el;
                        return Ln({
                            backgroundColor: s,
                            groupIds: [i],
                            ...ll,
                            type: "line",
                            x: t + r + 16 + 6,
                            y: n - l,
                            startArrowhead: null,
                            endArrowhead: null,
                            height: l,
                            strokeStyle: "dotted",
                            opacity: 50,
                            points: [
                                [0, 0],
                                [0, l]
                            ]
                        })
                    }));
                return [...pl(e, t, n, i, s, "production" === d.o.DEVELOPMENT), p, ...g, ...m]
            })(t, n, o) : ((e, t, n) => {
                const o = Math.max(...e.values),
                    i = un(),
                    s = rl[Math.floor(Math.random() * rl.length)];
                return [...e.values.map(((e, a) => {
                    const r = e / o * tl;
                    return In({
                        backgroundColor: s,
                        groupIds: [i],
                        ...ll,
                        type: "rectangle",
                        x: t + 44 * a + el,
                        y: n - r - el,
                        width: $r,
                        height: r
                    })
                })), ...pl(e, t, n, i, s, "production" === d.o.DEVELOPMENT)]
            })(t, n, o);
        let gl = "",
            bl = !1;
        const yl = "clipboard" in navigator && "readText" in navigator.clipboard,
            vl = "clipboard" in navigator && "writeText" in navigator.clipboard,
            fl = "clipboard" in navigator && "write" in navigator.clipboard && "ClipboardItem" in window && "toBlob" in HTMLCanvasElement.prototype,
            xl = async (e, t) => {
                const n = {
                        type: d.q.excalidrawClipboard,
                        elements: Qi(e, t)
                    },
                    o = JSON.stringify(n);
                gl = o;
                try {
                    bl = !1, await Sl(o)
                } catch (i) {
                    bl = !0, console.error(i)
                }
            },
            wl = () => {
                if (!gl) return {};
                try {
                    return JSON.parse(gl)
                } catch (e) {
                    return console.error(e), {}
                }
            },
            jl = e => {
                const t = (e => {
                    let t = e.trim().split("\n").map((e => e.trim().split("\t")));
                    if (t.length && 2 !== t[0].length && (t = e.trim().split("\n").map((e => e.trim().split(",")))), 0 === t.length) return {
                        type: nl,
                        reason: "No values"
                    };
                    const n = t[0].length;
                    if (!t.every((e => e.length === n))) return {
                        type: nl,
                        reason: "All rows don't have same number of columns"
                    };
                    const o = al(t);
                    if (o.type !== ol) {
                        const e = al((e => {
                            const t = [];
                            for (let n = 0; n < e[0].length; n++) {
                                const o = [];
                                for (let t = 0; t < e.length; t++) o.push(e[t][n]);
                                t.push(o)
                            }
                            return t
                        })(t));
                        if (e.type === ol) return e
                    }
                    return o
                })(e);
                return t.type === ol ? {
                    spreadsheet: t.spreadsheet
                } : null
            },
            El = async e => {
                const t = await (async e => {
                    try {
                        var t;
                        return (e ? null === (t = e.clipboardData) || void 0 === t ? void 0 : t.getData("text/plain").trim() : yl && await navigator.clipboard.readText()) || ""
                    } catch {
                        return ""
                    }
                })(e);
                if (!t || t.includes(Zr)) return wl();
                const n = jl(t);
                if (n) return n;
                const o = wl();
                try {
                    const e = JSON.parse(t);
                    return i = e, [d.q.excalidraw, d.q.excalidrawClipboard].includes(null === i || void 0 === i ? void 0 : i.type) && Array.isArray(i.elements) ? {
                        elements: e.elements
                    } : o
                } catch {
                    return bl && o.elements ? o : {
                        text: t
                    }
                }
                var i
            },
            Sl = async e => {
                let t = !1;
                if (vl) try {
                    await navigator.clipboard.writeText(e || ""), t = !0
                } catch (n) {
                    console.error(n)
                }
                if (!t && !Cl(e || " ")) throw new Error("couldn't copy")
            },
            Cl = e => {
                const t = "rtl" === document.documentElement.getAttribute("dir"),
                    n = document.createElement("textarea");
                n.style.border = "0", n.style.padding = "0", n.style.margin = "0", n.style.position = "absolute", n.style[t ? "right" : "left"] = "-9999px";
                const o = window.pageYOffset || document.documentElement.scrollTop;
                n.style.top = "".concat(o, "px"), n.style.fontSize = "12pt", n.setAttribute("readonly", ""), n.value = e, document.body.appendChild(n);
                let i = !1;
                try {
                    n.select(), n.setSelectionRange(0, n.value.length), i = document.execCommand("copy")
                } catch (s) {
                    console.error(s)
                }
                return n.remove(), i
            },
            Ol = async (e, t, o, {
                exportBackground: i,
                exportPadding: s = d.e,
                viewBackgroundColor: a,
                name: r,
                fileHandle: l = null
            }) => {
                if (0 === t.length) throw new Error(w("alerts.cannotExportEmptyCanvas"));
                if ("svg" === e || "clipboard-svg" === e) {
                    const n = await Jr(t, {
                        exportBackground: i,
                        exportWithDarkMode: o.exportWithDarkMode,
                        viewBackgroundColor: a,
                        exportPadding: s,
                        exportScale: o.exportScale,
                        exportEmbedScene: o.exportEmbedScene && "svg" === e
                    });
                    if ("svg" === e) return await _r(new Blob([n.outerHTML], {
                        type: "image/svg+xml"
                    }), {
                        name: r,
                        extension: "svg",
                        fileHandle: l
                    });
                    if ("clipboard-svg" === e) return void await Sl(n.outerHTML)
                }
                const c = qr(t, o, {
                    exportBackground: i,
                    viewBackgroundColor: a,
                    exportPadding: s
                });
                c.style.display = "none", document.body.appendChild(c);
                let h = await Wr(c);
                if (c.remove(), "png" === e) return o.exportEmbedScene && (h = await (await Promise.all([n.e(1), n.e(49), n.e(42)]).then(n.bind(null, 217))).encodePngMetadata({
                    blob: h,
                    metadata: Kr(t, o)
                })), await _r(h, {
                    name: r,
                    extension: "png",
                    fileHandle: l
                });
                if ("clipboard" === e) try {
                    await (async e => {
                        await navigator.clipboard.write([new window.ClipboardItem({
                            "image/png": e
                        })])
                    })(h)
                } catch (u) {
                    if ("CANVAS_POSSIBLY_TOO_BIG" === u.name) throw u;
                    throw new Error(w("alerts.couldNotCopyToClipboard"))
                }
            };
        n(55);
        const kl = ({
            children: e,
            checked: t,
            onChange: n
        }) => Object(hs.jsxs)("div", {
            className: Object(st.a)("Checkbox", {
                "is-checked": t
            }),
            onClick: e => {
                n(!t), e.currentTarget.querySelector(".Checkbox-box").focus()
            },
            children: [Object(hs.jsx)("button", {
                className: "Checkbox-box",
                role: "checkbox",
                "aria-checked": t,
                children: ys
            }), Object(hs.jsx)("div", {
                className: "Checkbox-label",
                children: e
            })]
        });
        n(56);
        var Il = ({
                children: e,
                gap: t,
                align: n,
                justifyContent: o,
                className: i,
                style: s
            }) => Object(hs.jsx)("div", {
                className: Object(st.a)("Stack Stack_horizontal", i),
                style: {
                    "--gap": t,
                    alignItems: n,
                    justifyContent: o,
                    ...s
                },
                children: e
            }),
            Al = ({
                children: e,
                gap: t,
                align: n,
                justifyContent: o,
                className: i
            }) => Object(hs.jsx)("div", {
                className: Object(st.a)("Stack Stack_vertical", i),
                style: {
                    "--gap": t,
                    justifyItems: n,
                    justifyContent: o
                },
                children: e
            });
        n(57);
        const Tl = ({
                fileName: e,
                onSave: t
            }) => Object(hs.jsxs)(Il, {
                className: "ActiveFile",
                gap: 1,
                align: "center",
                children: [Object(hs.jsxs)("span", {
                    className: "ActiveFile__fileName",
                    children: [oa, Object(hs.jsx)("span", {
                        children: e
                    })]
                }), Object(hs.jsx)(us, {
                    type: "icon",
                    icon: fs,
                    title: w("buttons.save"),
                    "aria-label": w("buttons.save"),
                    onClick: t,
                    "data-testid": "save-button"
                })]
            }),
            Ml = (Pa({
                name: "changeProjectName",
                perform: (e, t, n) => (Object(l.a)("change", "title"), {
                    appState: { ...t,
                        name: n
                    },
                    commitToHistory: !1
                }),
                PanelComponent: ({
                    appState: e,
                    updateData: t,
                    appProps: n
                }) => Object(hs.jsx)(gr, {
                    label: w("labels.fileTitle"),
                    value: e.name || "Unnamed",
                    onChange: e => t(e),
                    isNameEditable: "undefined" === typeof n.name && !e.viewModeEnabled
                })
            }), Pa({
                name: "changeExportScale",
                perform: (e, t, n) => ({
                    appState: { ...t,
                        exportScale: n
                    },
                    commitToHistory: !1
                }),
                PanelComponent: ({
                    elements: e,
                    appState: t,
                    updateData: n
                }) => {
                    const o = Wi(e),
                        i = Ji(o, t) ? Qi(o, t) : o;
                    return Object(hs.jsx)(hs.Fragment, {
                        children: d.r.map((e => {
                            const [o, s] = ((e, t, n) => {
                                const [, , o, i] = Qr(e, t).map((e => Math.trunc(e * n)));
                                return [o, i]
                            })(i, d.e, e), a = "".concat(w("buttons.scale"), " ").concat(e, "x (").concat(o, "x").concat(s, ")");
                            return Object(hs.jsx)(us, {
                                size: "small",
                                type: "radio",
                                icon: "".concat(e, "x"),
                                name: "export-canvas-scale",
                                title: a,
                                "aria-label": a,
                                id: "export-canvas-scale",
                                checked: e === t.exportScale,
                                onChange: () => n(e)
                            }, e)
                        }))
                    })
                }
            }), Pa({
                name: "changeExportBackground",
                perform: (e, t, n) => ({
                    appState: { ...t,
                        exportBackground: n
                    },
                    commitToHistory: !1
                }),
                PanelComponent: ({
                    appState: e,
                    updateData: t
                }) => Object(hs.jsx)(kl, {
                    checked: e.exportBackground,
                    onChange: e => t(e),
                    children: w("labels.withBackground")
                })
            }), Pa({
                name: "changeExportEmbedScene",
                perform: (e, t, n) => ({
                    appState: { ...t,
                        exportEmbedScene: n
                    },
                    commitToHistory: !1
                }),
                PanelComponent: ({
                    appState: e,
                    updateData: t
                }) => Object(hs.jsxs)(kl, {
                    checked: e.exportEmbedScene,
                    onChange: e => t(e),
                    children: [w("labels.exportEmbedScene"), Object(hs.jsx)(ur, {
                        label: w("labels.exportEmbedScene_details"),
                        long: !0,
                        children: Object(hs.jsx)("div", {
                            className: "excalidraw-tooltip-icon",
                            children: _s
                        })
                    })]
                })
            }), Pa({
                name: "saveToActiveFile",
                perform: async (e, t, n) => {
                    const o = !!t.fileHandle;
                    try {
                        const {
                            fileHandle: n
                        } = Ur(t.fileHandle) ? await (async (e, t) => {
                            const {
                                exportBackground: n,
                                viewBackgroundColor: o,
                                name: i,
                                fileHandle: s
                            } = t, a = Fr(s);
                            if (!s || "png" !== (r = a) && "svg" !== r) throw new Error("fileHandle should exist and should be of type svg or png when resaving");
                            var r;
                            return t = { ...t,
                                exportEmbedScene: !0
                            }, await Ol(a, Wi(e), t, {
                                exportBackground: n,
                                viewBackgroundColor: o,
                                name: i,
                                fileHandle: s
                            }), {
                                fileHandle: s
                            }
                        })(e, t) : await Yr(e, t);
                        return {
                            commitToHistory: !1,
                            appState: { ...t,
                                fileHandle: n,
                                toastMessage: o ? (null === n || void 0 === n ? void 0 : n.name) ? w("toast.fileSavedToFilename").replace("{filename}", '"'.concat(n.name, '"')) : w("toast.fileSaved") : null
                            }
                        }
                    } catch (i) {
                        return "AbortError" !== (null === i || void 0 === i ? void 0 : i.name) && console.error(i), {
                            commitToHistory: !1
                        }
                    }
                },
                keyTest: e => e.key === be && e[ee] && !e.shiftKey,
                PanelComponent: ({
                    updateData: e,
                    appState: t
                }) => {
                    var n;
                    return Object(hs.jsx)(Tl, {
                        onSave: () => e(null),
                        fileName: null === (n = t.fileHandle) || void 0 === n ? void 0 : n.name
                    })
                }
            }), Pa({
                name: "saveFileToDisk",
                perform: async (e, t, n) => {
                    try {
                        const {
                            fileHandle: n
                        } = await Yr(e, { ...t,
                            fileHandle: null
                        });
                        return {
                            commitToHistory: !1,
                            appState: { ...t,
                                fileHandle: n
                            }
                        }
                    } catch (o) {
                        return "AbortError" !== (null === o || void 0 === o ? void 0 : o.name) && console.error(o), {
                            commitToHistory: !1
                        }
                    }
                },
                keyTest: e => e.key === be && e.shiftKey && e[ee],
                PanelComponent: ({
                    updateData: e
                }) => Object(hs.jsx)(us, {
                    type: "button",
                    icon: xs,
                    title: w("buttons.saveAs"),
                    "aria-label": w("buttons.saveAs"),
                    showAriaLabel: gd(),
                    hidden: !Ar.c,
                    onClick: () => e(null),
                    "data-testid": "save-as-button"
                })
            }));
        Pa({
            name: "loadScene",
            perform: async (e, t) => {
                try {
                    const {
                        elements: n,
                        appState: o
                    } = await (async (e, t) => {
                        const n = await Pr({
                            description: "Excalidraw files"
                        });
                        return Gr(n, e, t)
                    })(t, e);
                    return {
                        elements: n,
                        appState: o,
                        commitToHistory: !0
                    }
                } catch (n) {
                    return "AbortError" !== (null === n || void 0 === n ? void 0 : n.name) && {
                        elements: e,
                        appState: { ...t,
                            errorMessage: n.message
                        },
                        commitToHistory: !1
                    }
                }
            },
            keyTest: e => e[ee] && e.key === ue,
            PanelComponent: ({
                updateData: e,
                appState: t
            }) => Object(hs.jsx)(us, {
                type: "button",
                icon: ws,
                title: w("buttons.load"),
                "aria-label": w("buttons.load"),
                showAriaLabel: gd(),
                onClick: e,
                "data-testid": "load-button"
            })
        }), Pa({
            name: "exportWithDarkMode",
            perform: (e, t, n) => ({
                appState: { ...t,
                    exportWithDarkMode: n
                },
                commitToHistory: !1
            }),
            PanelComponent: ({
                appState: e,
                updateData: t
            }) => Object(hs.jsx)("div", {
                style: {
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "-45px",
                    marginBottom: "10px"
                },
                children: Object(hs.jsx)(cr, {
                    value: e.exportWithDarkMode ? "dark" : "light",
                    onChange: e => {
                        t("dark" === e)
                    },
                    title: w("labels.toggleExportColorScheme")
                })
            })
        });
        let Ll = "{}";
        const Pl = Pa({
                name: "copyStyles",
                perform: (e, t) => {
                    const n = e.find((e => t.selectedElementIds[e.id]));
                    return n && (Ll = JSON.stringify(n)), {
                        appState: { ...t,
                            toastMessage: w("toast.copyStyles")
                        },
                        commitToHistory: !1
                    }
                },
                contextItemLabel: "labels.copyStyles",
                keyTest: e => e[ee] && e.altKey && e.code === B
            }),
            _l = Pa({
                name: "pasteStyles",
                perform: (e, t) => {
                    const n = JSON.parse(Ll);
                    return "text" !== (null === (o = n) || void 0 === o ? void 0 : o.type) && "diamond" !== (null === o || void 0 === o ? void 0 : o.type) && "rectangle" !== (null === o || void 0 === o ? void 0 : o.type) && "ellipse" !== (null === o || void 0 === o ? void 0 : o.type) && "arrow" !== (null === o || void 0 === o ? void 0 : o.type) && "freedraw" !== (null === o || void 0 === o ? void 0 : o.type) && "line" !== (null === o || void 0 === o ? void 0 : o.type) ? {
                        elements: e,
                        commitToHistory: !1
                    } : {
                        elements: e.map((e => {
                            if (t.selectedElementIds[e.id]) {
                                const t = mn(e, {
                                    backgroundColor: null === n || void 0 === n ? void 0 : n.backgroundColor,
                                    strokeWidth: null === n || void 0 === n ? void 0 : n.strokeWidth,
                                    strokeColor: null === n || void 0 === n ? void 0 : n.strokeColor,
                                    strokeStyle: null === n || void 0 === n ? void 0 : n.strokeStyle,
                                    fillStyle: null === n || void 0 === n ? void 0 : n.fillStyle,
                                    opacity: null === n || void 0 === n ? void 0 : n.opacity,
                                    roughness: null === n || void 0 === n ? void 0 : n.roughness
                                });
                                return ct(t) && (pn(t, {
                                    fontSize: (null === n || void 0 === n ? void 0 : n.fontSize) || d.g,
                                    fontFamily: (null === n || void 0 === n ? void 0 : n.fontFamily) || d.f,
                                    textAlign: (null === n || void 0 === n ? void 0 : n.textAlign) || d.h
                                }), Vi(t)), t
                            }
                            return e
                        })),
                        commitToHistory: !0
                    };
                    var o
                },
                contextItemLabel: "labels.pasteStyles",
                keyTest: e => e[ee] && e.altKey && e.code === G
            }),
            Dl = e => Object(hs.jsx)("button", {
                className: "help-icon",
                onClick: e.onClick,
                type: "button",
                title: "".concat(e.title, " \u2014 ?"),
                "aria-label": e.title,
                children: _s
            }),
            Rl = (Pa({
                name: "toggleCanvasMenu",
                perform: (e, t) => ({
                    appState: { ...t,
                        openMenu: "canvas" === t.openMenu ? null : "canvas"
                    },
                    commitToHistory: !1
                }),
                PanelComponent: ({
                    appState: e,
                    updateData: t
                }) => Object(hs.jsx)(us, {
                    type: "button",
                    icon: Ms,
                    "aria-label": w("buttons.menu"),
                    onClick: t,
                    selected: "canvas" === e.openMenu
                })
            }), Pa({
                name: "toggleEditMenu",
                perform: (e, t) => ({
                    appState: { ...t,
                        openMenu: "shape" === t.openMenu ? null : "shape"
                    },
                    commitToHistory: !1
                }),
                PanelComponent: ({
                    elements: e,
                    appState: t,
                    updateData: n
                }) => Object(hs.jsx)(us, {
                    visible: Fi(t, Wi(e)),
                    type: "button",
                    icon: Ss,
                    "aria-label": w("buttons.edit"),
                    onClick: n,
                    selected: "shape" === t.openMenu
                })
            }), Pa({
                name: "toggleFullScreen",
                perform: () => (Be() || document.documentElement.requestFullscreen(), Be() && document.exitFullscreen(), {
                    commitToHistory: !1
                }),
                keyTest: e => e.code === F && !e[ee]
            }), Pa({
                name: "toggleShortcuts",
                perform: (e, t, n, {
                    focusContainer: o
                }) => (t.showHelpDialog && o(), {
                    appState: { ...t,
                        showHelpDialog: !t.showHelpDialog
                    },
                    commitToHistory: !1
                }),
                PanelComponent: ({
                    updateData: e
                }) => Object(hs.jsx)(Dl, {
                    title: w("helpDialog.title"),
                    onClick: e
                }),
                keyTest: e => e.key === ie
            }), (e, t) => {
                const n = Qi(Wi(e), t);
                return n.length >= 2 && !(e => {
                    if (e.length >= 2) {
                        const t = e[0].groupIds;
                        for (const n of t)
                            if (e.reduce(((e, t) => e && Sn(t, n)), !0)) return !0
                    }
                    return !1
                })(n)
            }),
            zl = Pa({
                name: "group",
                perform: (e, t) => {
                    const n = Qi(Wi(e), t);
                    if (n.length < 2) return {
                        appState: t,
                        elements: e,
                        commitToHistory: !1
                    };
                    const o = jn(t);
                    if (1 === o.length) {
                        const i = o[0],
                            s = new Set(Cn(e, i).map((e => e.id))),
                            a = new Set(n.map((e => e.id)));
                        if (new Set([...Array.from(s), ...Array.from(a)]).size === s.size) return {
                            appState: t,
                            elements: e,
                            commitToHistory: !1
                        }
                    }
                    const i = un(),
                        s = e.map((e => t.selectedElementIds[e.id] ? mn(e, {
                            groupIds: On(e.groupIds, i, t.editingGroupId)
                        }) : e)),
                        a = Cn(s, i),
                        r = a[a.length - 1],
                        l = s.lastIndexOf(r),
                        c = s.slice(l + 1),
                        d = [...s.slice(0, l).filter((e => !Sn(e, i))), ...a, ...c];
                    return {
                        appState: fn(i, { ...t,
                            selectedGroupIds: {}
                        }, Wi(d)),
                        elements: d,
                        commitToHistory: !0
                    }
                },
                contextItemLabel: "labels.group",
                contextItemPredicate: (e, t) => Rl(e, t),
                keyTest: e => !e.shiftKey && e[ee] && e.code === V,
                PanelComponent: ({
                    elements: e,
                    appState: t,
                    updateData: n
                }) => Object(hs.jsx)(us, {
                    hidden: !Rl(e, t),
                    type: "button",
                    icon: Object(hs.jsx)(ia, {
                        theme: t.theme
                    }),
                    onClick: () => n(null),
                    title: "".concat(w("labels.group"), " \u2014 ").concat(He("CtrlOrCmd+G")),
                    "aria-label": w("labels.group"),
                    visible: Ji(Wi(e), t)
                })
            }),
            Nl = Pa({
                name: "ungroup",
                perform: (e, t) => {
                    if (0 === jn(t).length) return {
                        appState: t,
                        elements: e,
                        commitToHistory: !1
                    };
                    const n = e.map((e => {
                        const n = ((e, t) => e.filter((e => !t[e])))(e.groupIds, t.selectedGroupIds);
                        return n.length === e.groupIds.length ? e : mn(e, {
                            groupIds: n
                        })
                    }));
                    return {
                        appState: En({ ...t,
                            selectedGroupIds: {}
                        }, Wi(n)),
                        elements: n,
                        commitToHistory: !0
                    }
                },
                keyTest: e => e.shiftKey && e[ee] && e.code === V,
                contextItemLabel: "labels.ungroup",
                contextItemPredicate: (e, t) => jn(t).length > 0,
                PanelComponent: ({
                    elements: e,
                    appState: t,
                    updateData: n
                }) => Object(hs.jsx)(us, {
                    type: "button",
                    hidden: 0 === jn(t).length,
                    icon: Object(hs.jsx)(sa, {
                        theme: t.theme
                    }),
                    onClick: () => n(null),
                    title: "".concat(w("labels.ungroup"), " \u2014 ").concat(He("CtrlOrCmd+Shift+G")),
                    "aria-label": w("labels.ungroup"),
                    visible: Ji(Wi(e), t)
                })
            });
        n(58);
        const Bl = ({
                children: e,
                color: t,
                border: n,
                onClick: o
            }) => Object(hs.jsx)("div", {
                className: "Avatar",
                style: {
                    background: t,
                    border: "1px solid ".concat(n)
                },
                onClick: o,
                children: e
            }),
            Hl = (Pa({
                name: "goToCollaborator",
                perform: (e, t, n) => {
                    const o = n;
                    return o ? {
                        appState: { ...t,
                            ...es({
                                scenePoint: o,
                                viewportDimensions: {
                                    width: t.width,
                                    height: t.height
                                },
                                zoom: t.zoom
                            }),
                            openMenu: "canvas" === t.openMenu ? null : t.openMenu
                        },
                        commitToHistory: !1
                    } : {
                        appState: t,
                        commitToHistory: !1
                    }
                },
                PanelComponent: ({
                    appState: e,
                    updateData: t,
                    data: n
                }) => {
                    const o = null === n || void 0 === n ? void 0 : n.id;
                    if (!o) return null;
                    const i = e.collaborators.get(o);
                    if (!i) return null;
                    const {
                        background: s,
                        stroke: a
                    } = br(o, e), r = (e => {
                        if (!e) return "?";
                        const t = e.trim().split(" ");
                        if (t.length < 2) return t[0].substring(0, 2).toUpperCase();
                        const n = t[0],
                            o = t[t.length - 1];
                        return (n[0] + o[0]).toUpperCase()
                    })(i.username);
                    return Object(hs.jsx)(Bl, {
                        color: s,
                        border: a,
                        onClick: () => t(i.pointer),
                        children: r
                    })
                }
            }), Pa({
                name: "addToLibrary",
                perform: (e, t, n, o) => {
                    const i = Qi(Wi(e), t);
                    return o.library.loadLibrary().then((e => {
                        o.library.saveLibrary([...e, i.map(Pn)])
                    })), !1
                },
                contextItemLabel: "labels.addToLibrary"
            })),
            Vl = e => {
                const t = new Map;
                return e.forEach((e => {
                    const n = 0 === e.groupIds.length ? e.id : e.groupIds[e.groupIds.length - 1],
                        o = t.get(n) || [];
                    t.set(n, [...o, e])
                })), Array.from(t.values())
            },
            Fl = (e, t, {
                axis: n,
                position: o
            }) => {
                const i = Ul(e),
                    [s, a] = "x" === n ? ["minX", "maxX"] : ["minY", "maxY"],
                    r = {
                        x: 0,
                        y: 0
                    };
                return "start" === o ? { ...r,
                    [n]: t[s] - i[s]
                } : "end" === o ? { ...r,
                    [n]: t[a] - i[a]
                } : { ...r,
                    [n]: (t[s] + t[a]) / 2 - (i[s] + i[a]) / 2
                }
            },
            Ul = e => {
                const [t, n, o, i] = Rt(e);
                return {
                    minX: t,
                    minY: n,
                    maxX: o,
                    maxY: i
                }
            },
            Gl = (e, t) => Qi(Wi(e), t).length > 1,
            Wl = (e, t, n) => {
                const o = ((e, t) => {
                        const n = Vl(e),
                            o = Ul(e);
                        return n.flatMap((e => {
                            const n = Fl(e, o, t);
                            return e.map((e => mn(e, {
                                x: e.x + n.x,
                                y: e.y + n.y
                            })))
                        }))
                    })(Qi(Wi(e), t), n),
                    i = Ui(o);
                return e.map((e => i[e.id] || e))
            },
            Kl = (Pa({
                name: "alignTop",
                perform: (e, t) => ({
                    appState: t,
                    elements: Wl(e, t, {
                        position: "start",
                        axis: "y"
                    }),
                    commitToHistory: !0
                }),
                keyTest: e => e[ee] && e.shiftKey && e.key === J,
                PanelComponent: ({
                    elements: e,
                    appState: t,
                    updateData: n
                }) => Object(hs.jsx)(us, {
                    hidden: !Gl(e, t),
                    type: "button",
                    icon: Object(hs.jsx)(Fs, {
                        theme: t.theme
                    }),
                    onClick: () => n(null),
                    title: "".concat(w("labels.alignTop"), " \u2014 ").concat(He("CtrlOrCmd+Shift+Up")),
                    "aria-label": w("labels.alignTop"),
                    visible: Ji(Wi(e), t)
                })
            }), Pa({
                name: "alignBottom",
                perform: (e, t) => ({
                    appState: t,
                    elements: Wl(e, t, {
                        position: "end",
                        axis: "y"
                    }),
                    commitToHistory: !0
                }),
                keyTest: e => e[ee] && e.shiftKey && e.key === X,
                PanelComponent: ({
                    elements: e,
                    appState: t,
                    updateData: n
                }) => Object(hs.jsx)(us, {
                    hidden: !Gl(e, t),
                    type: "button",
                    icon: Object(hs.jsx)(Us, {
                        theme: t.theme
                    }),
                    onClick: () => n(null),
                    title: "".concat(w("labels.alignBottom"), " \u2014 ").concat(He("CtrlOrCmd+Shift+Down")),
                    "aria-label": w("labels.alignBottom"),
                    visible: Ji(Wi(e), t)
                })
            }), Pa({
                name: "alignLeft",
                perform: (e, t) => ({
                    appState: t,
                    elements: Wl(e, t, {
                        position: "start",
                        axis: "x"
                    }),
                    commitToHistory: !0
                }),
                keyTest: e => e[ee] && e.shiftKey && e.key === Z,
                PanelComponent: ({
                    elements: e,
                    appState: t,
                    updateData: n
                }) => Object(hs.jsx)(us, {
                    hidden: !Gl(e, t),
                    type: "button",
                    icon: Object(hs.jsx)(Gs, {
                        theme: t.theme
                    }),
                    onClick: () => n(null),
                    title: "".concat(w("labels.alignLeft"), " \u2014 ").concat(He("CtrlOrCmd+Shift+Left")),
                    "aria-label": w("labels.alignLeft"),
                    visible: Ji(Wi(e), t)
                })
            }), Pa({
                name: "alignRight",
                perform: (e, t) => ({
                    appState: t,
                    elements: Wl(e, t, {
                        position: "end",
                        axis: "x"
                    }),
                    commitToHistory: !0
                }),
                keyTest: e => e[ee] && e.shiftKey && e.key === q,
                PanelComponent: ({
                    elements: e,
                    appState: t,
                    updateData: n
                }) => Object(hs.jsx)(us, {
                    hidden: !Gl(e, t),
                    type: "button",
                    icon: Object(hs.jsx)(Ws, {
                        theme: t.theme
                    }),
                    onClick: () => n(null),
                    title: "".concat(w("labels.alignRight"), " \u2014 ").concat(He("CtrlOrCmd+Shift+Right")),
                    "aria-label": w("labels.alignRight"),
                    visible: Ji(Wi(e), t)
                })
            }), Pa({
                name: "alignVerticallyCentered",
                perform: (e, t) => ({
                    appState: t,
                    elements: Wl(e, t, {
                        position: "center",
                        axis: "y"
                    }),
                    commitToHistory: !0
                }),
                PanelComponent: ({
                    elements: e,
                    appState: t,
                    updateData: n
                }) => Object(hs.jsx)(us, {
                    hidden: !Gl(e, t),
                    type: "button",
                    icon: Object(hs.jsx)(Xs, {
                        theme: t.theme
                    }),
                    onClick: () => n(null),
                    title: w("labels.centerVertically"),
                    "aria-label": w("labels.centerVertically"),
                    visible: Ji(Wi(e), t)
                })
            }), Pa({
                name: "alignHorizontallyCentered",
                perform: (e, t) => ({
                    appState: t,
                    elements: Wl(e, t, {
                        position: "center",
                        axis: "x"
                    }),
                    commitToHistory: !0
                }),
                PanelComponent: ({
                    elements: e,
                    appState: t,
                    updateData: n
                }) => Object(hs.jsx)(us, {
                    hidden: !Gl(e, t),
                    type: "button",
                    icon: Object(hs.jsx)(Zs, {
                        theme: t.theme
                    }),
                    onClick: () => n(null),
                    title: w("labels.centerHorizontally"),
                    "aria-label": w("labels.centerHorizontally"),
                    visible: Ji(Wi(e), t)
                })
            }), e => {
                const t = new Map;
                return e.forEach((e => {
                    const n = 0 === e.groupIds.length ? e.id : e.groupIds[e.groupIds.length - 1],
                        o = t.get(n) || [];
                    t.set(n, [...o, e])
                })), Array.from(t.values())
            }),
            Yl = e => {
                const [t, n, o, i] = Rt(e);
                return {
                    minX: t,
                    minY: n,
                    maxX: o,
                    maxY: i,
                    width: o - t,
                    height: i - n,
                    midX: (t + o) / 2,
                    midY: (n + i) / 2
                }
            },
            Xl = (e, t) => Qi(Wi(e), t).length > 1,
            Zl = (e, t, n) => {
                const o = ((e, t) => {
                        const [n, o, i, s] = "x" === t.axis ? ["minX", "midX", "maxX", "width"] : ["minY", "midY", "maxY", "height"], a = Yl(e), r = Kl(e).map((e => [e, Yl(e)])).sort(((e, t) => e[1][o] - t[1][o]));
                        let l = 0;
                        for (const h of r) l += h[1][s];
                        const c = (a[s] - l) / (r.length - 1);
                        if (c < 0) {
                            const e = r.findIndex((e => e[1][n] === a[n])),
                                s = r.findIndex((e => e[1][i] === a[i])),
                                l = (r[s][1][o] - r[e][1][o]) / (r.length - 1);
                            let c = r[e][1][o];
                            return r.flatMap((([n, i], a) => {
                                const r = {
                                    x: 0,
                                    y: 0
                                };
                                return a !== e && a !== s && (c += l, r[t.axis] = c - i[o]), n.map((e => mn(e, {
                                    x: e.x + r.x,
                                    y: e.y + r.y
                                })))
                            }))
                        }
                        let d = a[n];
                        return r.flatMap((([e, o]) => {
                            const i = {
                                x: 0,
                                y: 0
                            };
                            return i[t.axis] = d - o[n], d += c, d += o[s], e.map((e => mn(e, {
                                x: e.x + i.x,
                                y: e.y + i.y
                            })))
                        }))
                    })(Qi(Wi(e), t), n),
                    i = Ui(o);
                return e.map((e => i[e.id] || e))
            },
            ql = (Pa({
                name: "distributeHorizontally",
                perform: (e, t) => ({
                    appState: t,
                    elements: Zl(e, t, {
                        space: "between",
                        axis: "x"
                    }),
                    commitToHistory: !0
                }),
                keyTest: e => e.altKey && e.code === U,
                PanelComponent: ({
                    elements: e,
                    appState: t,
                    updateData: n
                }) => Object(hs.jsx)(us, {
                    hidden: !Xl(e, t),
                    type: "button",
                    icon: Object(hs.jsx)(Ks, {
                        theme: t.theme
                    }),
                    onClick: () => n(null),
                    title: "".concat(w("labels.distributeHorizontally"), " \u2014 ").concat(He("Alt+H")),
                    "aria-label": w("labels.distributeHorizontally"),
                    visible: Ji(Wi(e), t)
                })
            }), Pa({
                name: "distributeVertically",
                perform: (e, t) => ({
                    appState: t,
                    elements: Zl(e, t, {
                        space: "between",
                        axis: "y"
                    }),
                    commitToHistory: !0
                }),
                keyTest: e => e.altKey && e.code === G,
                PanelComponent: ({
                    elements: e,
                    appState: t,
                    updateData: n
                }) => Object(hs.jsx)(us, {
                    hidden: !Xl(e, t),
                    type: "button",
                    icon: Object(hs.jsx)(Ys, {
                        theme: t.theme
                    }),
                    onClick: () => n(null),
                    title: "".concat(w("labels.distributeVertically"), " \u2014 ").concat(He("Alt+V")),
                    "aria-label": w("labels.distributeVertically"),
                    visible: Ji(Wi(e), t)
                })
            }), Pa({
                name: "flipHorizontal",
                perform: (e, t) => ({
                    elements: Ql(e, t, "horizontal"),
                    appState: t,
                    commitToHistory: !0
                }),
                keyTest: e => e.shiftKey && "KeyH" === e.code,
                contextItemLabel: "labels.flipHorizontal",
                contextItemPredicate: (e, t) => ((e, t) => {
                    const n = Qi(Wi(e), t);
                    return 1 === n.length && "text" !== n[0].type
                })(e, t)
            })),
            Jl = Pa({
                name: "flipVertical",
                perform: (e, t) => ({
                    elements: Ql(e, t, "vertical"),
                    appState: t,
                    commitToHistory: !0
                }),
                keyTest: e => e.shiftKey && "KeyV" === e.code,
                contextItemLabel: "labels.flipVertical",
                contextItemPredicate: (e, t) => ((e, t) => 1 === Qi(Wi(e), t).length)(e, t)
            }),
            Ql = (e, t, n) => {
                const o = Qi(Wi(e), t);
                if (o.length > 1) return e;
                const i = $l(o, t, n),
                    s = Ui(i);
                return e.map((e => s[e.id] || e))
            },
            $l = (e, t, n) => {
                for (let o = 0; o < e.length; o++) ec(e[o], t), "vertical" === n && tc(e[o], Math.PI);
                return e
            },
            ec = (e, t) => {
                const n = e.x,
                    o = e.y,
                    i = e.width,
                    s = e.height,
                    a = Ai(e.angle);
                let r = 0;
                (ut(e) || dt(e)) && (r = 2 * e.points.reduce(((e, t) => Math.max(e, t[0])), 0) - e.width), pn(e, {
                    angle: Ai(0)
                });
                const l = Fn(e, t.zoom);
                let c = !0,
                    d = 0,
                    h = l.nw;
                if (!h && (c = !1, h = l.ne, !h)) return void pn(e, {
                    angle: a
                });
                if (ut(e)) {
                    for (let t = 1; t < e.points.length; t++) ti.movePoint(e, t, [-e.points[t][0], e.points[t][1]]);
                    ti.normalizePoints(e)
                } else d = c ? e.x + 2 * i : e.x - 2 * i, Di(e, !0, e, c ? "nw" : "ne", !1, d, h[1]), pn(e, {
                    width: i,
                    height: s
                });
                let u = Ai(2 * Math.PI - a);
                u < 0 && (u = Ai(u + 2 * Math.PI)), pn(e, {
                    angle: u
                }), pn(e, {
                    x: n + r,
                    y: o
                }), gi(e)
            },
            tc = (e, t) => {
                const n = e.x,
                    o = e.y;
                let i = Ai(e.angle + t);
                i < 0 && (i = Ai(2 * Math.PI + i)), pn(e, {
                    angle: i
                }), pn(e, {
                    x: n,
                    y: o
                })
            },
            nc = Pa({
                name: "copy",
                perform: (e, t) => (xl(Wi(e), t), {
                    commitToHistory: !1
                }),
                contextItemLabel: "labels.copy",
                keyTest: void 0
            }),
            oc = Pa({
                name: "cut",
                perform: (e, t, n, o) => (nc.perform(e, t, n, o), Da.perform(e, t, n, o)),
                contextItemLabel: "labels.cut",
                keyTest: e => e[ee] && e.code === W
            }),
            ic = Pa({
                name: "copyAsSvg",
                perform: async (e, t, n, o) => {
                    if (!o.canvas) return {
                        commitToHistory: !1
                    };
                    const i = Qi(Wi(e), t);
                    try {
                        return await Ol("clipboard-svg", i.length ? i : Wi(e), t, t), {
                            commitToHistory: !1
                        }
                    } catch (s) {
                        return console.error(s), {
                            appState: { ...t,
                                errorMessage: s.message
                            },
                            commitToHistory: !1
                        }
                    }
                },
                contextItemLabel: "labels.copyAsSvg"
            }),
            sc = Pa({
                name: "copyAsPng",
                perform: async (e, t, n, o) => {
                    if (!o.canvas) return {
                        commitToHistory: !1
                    };
                    const i = Qi(Wi(e), t);
                    try {
                        return await Ol("clipboard", i.length ? i : Wi(e), t, t), {
                            appState: { ...t,
                                toastMessage: w("toast.copyToClipboardAsPng", {
                                    exportSelection: i.length ? w("toast.selection") : w("toast.canvas"),
                                    exportColorScheme: t.exportWithDarkMode ? w("buttons.darkMode") : w("buttons.lightMode")
                                })
                            },
                            commitToHistory: !1
                        }
                    } catch (s) {
                        return console.error(s), {
                            appState: { ...t,
                                errorMessage: s.message
                            },
                            commitToHistory: !1
                        }
                    }
                },
                contextItemLabel: "labels.copyAsPng",
                keyTest: e => e.code === B && e.altKey && e.shiftKey
            }),
            ac = Pa({
                name: "gridMode",
                perform(e, t) {
                    return Object(l.a)("view", "mode", "grid"), {
                        appState: { ...t,
                            gridSize: this.checked(t) ? null : d.u
                        },
                        commitToHistory: !1
                    }
                },
                checked: e => null !== e.gridSize,
                contextItemLabel: "labels.showGrid",
                keyTest: e => e[ee] && e.code === R
            }),
            rc = Pa({
                name: "zenMode",
                perform(e, t) {
                    return Object(l.a)("view", "mode", "zen"), {
                        appState: { ...t,
                            zenModeEnabled: !this.checked(t)
                        },
                        commitToHistory: !1
                    }
                },
                checked: e => e.zenModeEnabled,
                contextItemLabel: "buttons.zenMode",
                keyTest: e => !e[ee] && e.altKey && e.code === K
            }),
            lc = Pa({
                name: "stats",
                perform(e, t) {
                    return {
                        appState: { ...t,
                            showStats: !this.checked(t)
                        },
                        commitToHistory: !1
                    }
                },
                checked: e => e.showStats,
                contextItemLabel: "stats.title",
                keyTest: e => !e[ee] && e.altKey && e.code === N
            }),
            cc = (e, t, n) => {
                const o = !1;
                if (!t.multiElement && !t.resizingElement && !t.editingElement && !t.draggingElement) {
                    const i = n();
                    if (null === i) return {
                        commitToHistory: o
                    };
                    const s = Ui(e),
                        a = i.elements,
                        r = Ui(a),
                        l = e.filter((e => !r.hasOwnProperty(e.id))),
                        c = a.map((e => mn(s[e.id] || e, e))).concat(l.map((e => mn(e, {
                            isDeleted: !0
                        }))));
                    return ki(c, l), {
                        elements: c,
                        appState: { ...t,
                            ...i.appState
                        },
                        commitToHistory: o,
                        syncHistory: !0
                    }
                }
                return {
                    commitToHistory: o
                }
            };
        class dc {
            constructor(e, t, n, o) {
                this.actions = {}, this.updater = void 0, this.getAppState = void 0, this.getElementsIncludingDeleted = void 0, this.app = void 0, this.renderAction = (e, t) => {
                    const n = this.app.props.UIOptions.canvasActions;
                    if (this.actions[e] && "PanelComponent" in this.actions[e] && (!(e in n) || n[e])) {
                        const n = this.actions[e],
                            o = n.PanelComponent,
                            i = e => {
                                this.updater(n.perform(this.getElementsIncludingDeleted(), this.getAppState(), e, this.app))
                            };
                        return Object(hs.jsx)(o, {
                            elements: this.getElementsIncludingDeleted(),
                            appState: this.getAppState(),
                            updateData: i,
                            appProps: this.app.props,
                            data: t
                        })
                    }
                    return null
                }, this.updater = t => {
                    if (!t || !("then" in t)) return e(t);
                    t.then((t => e(t)))
                }, this.getAppState = t, this.getElementsIncludingDeleted = n, this.app = o
            }
            registerAction(e) {
                this.actions[e.name] = e
            }
            registerAll(e) {
                e.forEach((e => this.registerAction(e)))
            }
            handleKeyDown(e) {
                const t = this.app.props.UIOptions.canvasActions,
                    n = Object.values(this.actions).sort(((e, t) => (t.keyPriority || 0) - (e.keyPriority || 0))).filter((n => (!(n.name in t) || t[n.name]) && n.keyTest && n.keyTest(e, this.getAppState(), this.getElementsIncludingDeleted())));
                if (0 === n.length) return !1;
                const {
                    viewModeEnabled: o
                } = this.getAppState();
                return !(o && !Object.values(d.z).includes(n[0].name)) && (e.preventDefault(), this.updater(n[0].perform(this.getElementsIncludingDeleted(), this.getAppState(), null, this.app)), !0)
            }
            executeAction(e) {
                this.updater(e.perform(this.getElementsIncludingDeleted(), this.getAppState(), null, this.app))
            }
        }
        var hc = class {
            constructor(e) {
                this.libraryCache = null, this.app = void 0, this.resetLibrary = async () => {
                    var e, t;
                    await (null === (e = (t = this.app.props).onLibraryChange) || void 0 === e ? void 0 : e.call(t, [])), this.libraryCache = []
                }, this.restoreLibraryItem = e => {
                    const t = Wi(Nr(e, null));
                    return t.length ? t : null
                }, this.loadLibrary = () => new Promise((async e => {
                    if (this.libraryCache) return e(JSON.parse(JSON.stringify(this.libraryCache)));
                    try {
                        const t = this.app.libraryItemsFromStorage;
                        if (!t) return e([]);
                        const n = t.reduce(((e, t) => (this.restoreLibraryItem(t) && e.push(t), e)), []);
                        this.libraryCache = JSON.parse(JSON.stringify(n)), e(n)
                    } catch (t) {
                        console.error(t), e([])
                    }
                })), this.saveLibrary = async e => {
                    const t = this.libraryCache;
                    try {
                        var n, o;
                        const t = JSON.stringify(e);
                        this.libraryCache = JSON.parse(t), await (null === (n = (o = this.app.props).onLibraryChange) || void 0 === n ? void 0 : n.call(o, e))
                    } catch (i) {
                        throw this.libraryCache = t, i
                    }
                }, this.app = e
            }
            async importLibrary(e) {
                const t = await (async e => {
                    const t = await Vr(e),
                        n = JSON.parse(t);
                    if (n.type !== d.q.excalidrawLibrary) throw new Error(w("alerts.couldNotLoadInvalidFile"));
                    return n
                })(e);
                if (!t || !t.library) return;
                const n = await this.loadLibrary(),
                    o = t.library.reduce(((e, t) => {
                        const o = this.restoreLibraryItem(t);
                        return o && ((e, t) => !e.find((e => e.length === t.length && e.every(((e, n) => e.id === t[n].id && e.versionNonce === t[n].versionNonce)))))(n, o) && e.push(o), e
                    }), []);
                await this.saveLibrary([...n, ...o])
            }
        };
        const uc = e => {
                const t = Array.from(e.values());
                return {
                    x: mc(t, (e => e.x)) / t.length,
                    y: mc(t, (e => e.y)) / t.length
                }
            },
            pc = ([e, t]) => Math.hypot(e.x - t.x, e.y - t.y),
            mc = (e, t) => e.reduce(((e, n) => e + t(n)), 0),
            gc = e => ({
                selectedElementIds: e.selectedElementIds,
                selectedGroupIds: e.selectedGroupIds,
                viewBackgroundColor: e.viewBackgroundColor,
                editingLinearElement: e.editingLinearElement,
                editingGroupId: e.editingGroupId,
                name: e.name
            });
        var bc = class {
            constructor() {
                this.elementCache = new Map, this.recording = !0, this.stateHistory = [], this.redoStack = [], this.lastEntry = null, this.generateEntry = (e, t) => this.dehydrateHistoryEntry({
                    appState: gc(e),
                    elements: t.reduce(((t, n) => {
                        if (ut(n) && e.multiElement && e.multiElement.id === n.id) {
                            if (e.multiElement && e.multiElement.id === n.id && n.points.length < 2) return t;
                            t.push({ ...n,
                                points: n.lastCommittedPoint !== n.points[n.points.length - 1] ? n.points.slice(0, -1) : n.points
                            })
                        } else t.push(n);
                        return t
                    }), [])
                })
            }
            hydrateHistoryEntry({
                appState: e,
                elements: t
            }) {
                return {
                    appState: JSON.parse(e),
                    elements: t.map((e => {
                        var t;
                        const n = null === (t = this.elementCache.get(e.id)) || void 0 === t ? void 0 : t.get(e.versionNonce);
                        if (!n) throw new Error("Element not found: ".concat(e.id, ":").concat(e.versionNonce));
                        return n
                    }))
                }
            }
            dehydrateHistoryEntry({
                appState: e,
                elements: t
            }) {
                return {
                    appState: JSON.stringify(e),
                    elements: t.map((e => {
                        this.elementCache.has(e.id) || this.elementCache.set(e.id, new Map);
                        const t = this.elementCache.get(e.id);
                        return t.has(e.versionNonce) || t.set(e.versionNonce, Pn(e)), {
                            id: e.id,
                            versionNonce: e.versionNonce
                        }
                    }))
                }
            }
            getSnapshotForTest() {
                return {
                    recording: this.recording,
                    stateHistory: this.stateHistory.map((e => this.hydrateHistoryEntry(e))),
                    redoStack: this.redoStack.map((e => this.hydrateHistoryEntry(e)))
                }
            }
            clear() {
                this.stateHistory.length = 0, this.redoStack.length = 0, this.lastEntry = null, this.elementCache.clear()
            }
            shouldCreateEntry(e) {
                const {
                    lastEntry: t
                } = this;
                if (!t) return !0;
                if (e.elements.length !== t.elements.length) return !0;
                for (let s = e.elements.length - 1; s > -1; s--) {
                    const n = e.elements[s],
                        o = t.elements[s];
                    if (!n || !o || n.id !== o.id || n.versionNonce !== o.versionNonce) return !0
                }
                let n;
                for (n in e.appState) {
                    var o, i;
                    if ("editingLinearElement" === n)
                        if ((null === (o = e.appState[n]) || void 0 === o ? void 0 : o.elementId) === (null === (i = t.appState[n]) || void 0 === i ? void 0 : i.elementId)) continue;
                    if ("selectedElementIds" !== n && "selectedGroupIds" !== n && e.appState[n] !== t.appState[n]) return !0
                }
                return !1
            }
            pushEntry(e, t) {
                const n = this.generateEntry(e, t),
                    o = this.hydrateHistoryEntry(n);
                if (o) {
                    if (!this.shouldCreateEntry(o)) return;
                    this.stateHistory.push(n), this.lastEntry = o, this.clearRedoStack()
                }
            }
            clearRedoStack() {
                this.redoStack.splice(0, this.redoStack.length)
            }
            redoOnce() {
                if (0 === this.redoStack.length) return null;
                const e = this.redoStack.pop();
                return void 0 !== e ? (this.stateHistory.push(e), this.hydrateHistoryEntry(e)) : null
            }
            undoOnce() {
                if (1 === this.stateHistory.length) return null;
                const e = this.stateHistory.pop(),
                    t = this.stateHistory[this.stateHistory.length - 1];
                return void 0 !== e ? (this.redoStack.push(e), this.hydrateHistoryEntry(t)) : null
            }
            setCurrentState(e, t) {
                this.lastEntry = this.hydrateHistoryEntry(this.generateEntry(e, t))
            }
            resumeRecording() {
                this.recording = !0
            }
            record(e, t) {
                this.recording && (this.pushEntry(e, t), this.recording = !1)
            }
        };
        const yc = [{
            icon: Object(hs.jsx)("svg", {
                viewBox: "0 0 320 512",
                className: "",
                children: Object(hs.jsx)("path", {
                    d: "M302.189 329.126H196.105l55.831 135.993c3.889 9.428-.555 19.999-9.444 23.999l-49.165 21.427c-9.165 4-19.443-.571-23.332-9.714l-53.053-129.136-86.664 89.138C18.729 472.71 0 463.554 0 447.977V18.299C0 1.899 19.921-6.096 30.277 5.443l284.412 292.542c11.472 11.179 3.007 31.141-12.5 31.141z"
                })
            }),
            value: "selection",
            key: ve
        }, {
            icon: Object(hs.jsx)("svg", {
                viewBox: "0 0 448 512",
                children: Object(hs.jsx)("path", {
                    d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"
                })
            }),
            value: "rectangle",
            key: ge
        }, {
            icon: Object(hs.jsx)("svg", {
                viewBox: "0 0 223.646 223.646",
                children: Object(hs.jsx)("path", {
                    d: "M111.823 0L16.622 111.823 111.823 223.646 207.025 111.823z"
                })
            }),
            value: "diamond",
            key: le
        }, {
            icon: Object(hs.jsx)("svg", {
                viewBox: "0 0 512 512",
                children: Object(hs.jsx)("path", {
                    d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
                })
            }),
            value: "ellipse",
            key: ce
        }, {
            icon: Object(hs.jsx)("svg", {
                viewBox: "0 0 448 512",
                className: "rtl-mirror",
                children: Object(hs.jsx)("path", {
                    d: "M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"
                })
            }),
            value: "arrow",
            key: re
        }, {
            icon: Object(hs.jsx)("svg", {
                viewBox: "0 0 6 6",
                children: Object(hs.jsx)("line", {
                    x1: "0",
                    y1: "3",
                    x2: "6",
                    y2: "3",
                    stroke: "currentColor",
                    strokeLinecap: "round"
                })
            }),
            value: "line",
            key: [pe, he]
        }, {
            icon: Object(hs.jsx)("svg", {
                viewBox: "0 0 512 512",
                children: Object(hs.jsx)("path", {
                    fill: "currentColor",
                    d: "M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"
                })
            }),
            value: "freedraw",
            key: fe
        }, {
            icon: Object(hs.jsx)("svg", {
                viewBox: "0 0 448 512",
                children: Object(hs.jsx)("path", {
                    d: "M432 416h-23.41L277.88 53.69A32 32 0 0 0 247.58 32h-47.16a32 32 0 0 0-30.3 21.69L39.41 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-19.58l23.3-64h152.56l23.3 64H304a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM176.85 272L224 142.51 271.15 272z"
                })
            }),
            value: "text",
            key: ye
        }];
        n(59);
        const vc = {
                cut: [He("CtrlOrCmd+X")],
                copy: [He("CtrlOrCmd+C")],
                paste: [He("CtrlOrCmd+V")],
                copyStyles: [He("CtrlOrCmd+Alt+C")],
                pasteStyles: [He("CtrlOrCmd+Alt+V")],
                selectAll: [He("CtrlOrCmd+A")],
                deleteSelectedElements: [He("Del")],
                duplicateSelection: [He("CtrlOrCmd+D"), He("Alt+".concat(w("helpDialog.drag")))],
                sendBackward: [He("CtrlOrCmd+[")],
                bringForward: [He("CtrlOrCmd+]")],
                sendToBack: [He(S ? "CtrlOrCmd+Alt+[" : "CtrlOrCmd+Shift+[")],
                bringToFront: [He(S ? "CtrlOrCmd+Alt+]" : "CtrlOrCmd+Shift+]")],
                copyAsPng: [He("Shift+Alt+C")],
                copyAsSvg: [],
                group: [He("CtrlOrCmd+G")],
                ungroup: [He("CtrlOrCmd+Shift+G")],
                gridMode: [He("CtrlOrCmd+'")],
                zenMode: [He("Alt+Z")],
                stats: [He("Alt+/")],
                addToLibrary: [],
                flipHorizontal: [He("Shift+H")],
                flipVertical: [He("Shift+V")],
                viewMode: [He("Alt+R")]
            },
            fc = e => {
                const t = vc[e];
                return t && t.length > 0 ? t[0] : ""
            },
            xc = ({
                options: e,
                onCloseRequest: t,
                top: n,
                left: o,
                actionManager: i,
                appState: s
            }) => Object(hs.jsx)($a, {
                onCloseRequest: t,
                top: n,
                left: o,
                fitInViewport: !0,
                children: Object(hs.jsx)("ul", {
                    className: "context-menu",
                    onContextMenu: e => e.preventDefault(),
                    children: e.map(((e, n) => {
                        var o;
                        if ("separator" === e) return Object(hs.jsx)("hr", {
                            className: "context-menu-option-separator"
                        }, n);
                        const a = e.name,
                            r = e.contextItemLabel ? w(e.contextItemLabel) : "";
                        return Object(hs.jsx)("li", {
                            "data-testid": a,
                            onClick: t,
                            children: Object(hs.jsxs)("button", {
                                className: Object(st.a)("context-menu-option", {
                                    dangerous: "deleteSelectedElements" === a,
                                    checkmark: null === (o = e.checked) || void 0 === o ? void 0 : o.call(e, s)
                                }),
                                onClick: () => i.executeAction(e),
                                children: [Object(hs.jsx)("div", {
                                    className: "context-menu-option__label",
                                    children: r
                                }), Object(hs.jsx)("kbd", {
                                    className: "context-menu-option__shortcut",
                                    children: a ? fc(a) : ""
                                })]
                            })
                        }, n)
                    }))
                })
            }),
            wc = new WeakMap;
        var jc = {
            push(e) {
                const t = Array.of();
                e.options.forEach((e => {
                    e && t.push(e)
                })), t.length && Object(s.render)(Object(hs.jsx)(xc, {
                    top: e.top,
                    left: e.left,
                    options: t,
                    onCloseRequest: () => (e => {
                        const t = wc.get(e);
                        t && (Object(s.unmountComponentAtNode)(t), t.remove(), wc.delete(e))
                    })(e.container),
                    actionManager: e.actionManager,
                    appState: e.appState
                }), (e => {
                    let t = wc.get(e);
                    return t || (t = document.createElement("div"), e.querySelector(".excalidraw-contextMenuContainer").appendChild(t), wc.set(e, t), t)
                })(e.container))
            }
        };
        const Ec = ({
                appState: e,
                elements: t,
                renderAction: n,
                elementType: o
            }) => {
                const i = $i(Wi(t), e),
                    s = Boolean(e.editingElement),
                    a = gd(),
                    r = "rtl" === document.documentElement.getAttribute("dir"),
                    l = ns(o) || i.some((e => ns(e.type) && !Xe(e.backgroundColor))),
                    c = ns(o) || i.some((e => ns(e.type)));
                return Object(hs.jsxs)("div", {
                    className: "panelColumn",
                    children: [n("changeStrokeColor"), c && n("changeBackgroundColor"), l && n("changeFillStyle"), (os(o) || i.some((e => os(e.type)))) && n("changeStrokeWidth"), ("freedraw" === o || i.some((e => "freedraw" === e.type))) && n("changeStrokeShape"), (is(o) || i.some((e => is(e.type)))) && Object(hs.jsxs)(hs.Fragment, {
                        children: [n("changeStrokeStyle"), n("changeSloppiness")]
                    }), (ss(o) || i.some((e => ss(e.type)))) && Object(hs.jsx)(hs.Fragment, {
                        children: n("changeSharpness")
                    }), (as(o) || i.some((e => as(e.type)))) && Object(hs.jsxs)(hs.Fragment, {
                        children: [n("changeFontSize"), n("changeFontFamily"), n("changeTextAlign")]
                    }), (rs(o) || i.some((e => rs(e.type)))) && Object(hs.jsx)(hs.Fragment, {
                        children: n("changeArrowhead")
                    }), n("changeOpacity"), Object(hs.jsxs)("fieldset", {
                        children: [Object(hs.jsx)("legend", {
                            children: w("labels.layers")
                        }), Object(hs.jsxs)("div", {
                            className: "buttonList",
                            children: [n("sendToBack"), n("sendBackward"), n("bringToFront"), n("bringForward")]
                        })]
                    }), i.length > 1 && Object(hs.jsxs)("fieldset", {
                        children: [Object(hs.jsx)("legend", {
                            children: w("labels.align")
                        }), Object(hs.jsxs)("div", {
                            className: "buttonList",
                            children: [r ? Object(hs.jsxs)(hs.Fragment, {
                                children: [n("alignRight"), n("alignHorizontallyCentered"), n("alignLeft")]
                            }) : Object(hs.jsxs)(hs.Fragment, {
                                children: [n("alignLeft"), n("alignHorizontallyCentered"), n("alignRight")]
                            }), i.length > 2 && n("distributeHorizontally"), Object(hs.jsxs)("div", {
                                className: "iconRow",
                                children: [n("alignTop"), n("alignVerticallyCentered"), n("alignBottom"), i.length > 2 && n("distributeVertically")]
                            })]
                        })]
                    }), !a && !s && i.length > 0 && Object(hs.jsxs)("fieldset", {
                        children: [Object(hs.jsx)("legend", {
                            children: w("labels.actions")
                        }), Object(hs.jsxs)("div", {
                            className: "buttonList",
                            children: [n("duplicateSelection"), n("deleteSelectedElements"), n("group"), n("ungroup")]
                        })]
                    })]
                })
            },
            Sc = ({
                canvas: e,
                elementType: t,
                setAppState: n
            }) => Object(hs.jsx)(hs.Fragment, {
                children: yc.map((({
                    value: o,
                    icon: i,
                    key: s
                }, a) => {
                    const r = w("toolBar.".concat(o)),
                        l = "string" === typeof s ? s : s[0],
                        c = "".concat(Ae(l), " ").concat(w("helpDialog.or"), " ").concat(a + 1);
                    return Object(hs.jsx)(us, {
                        className: "Shape",
                        type: "radio",
                        icon: i,
                        checked: t === o,
                        name: "editor-current-shape",
                        title: "".concat(Ae(r), " \u2014 ").concat(c),
                        keyBindingLabel: "".concat(a + 1),
                        "aria-label": Ae(r),
                        "aria-keyshortcuts": c,
                        "data-testid": o,
                        onChange: () => {
                            n({
                                elementType: o,
                                multiElement: null,
                                selectedElementIds: {}
                            }), Ne(e, o), n({})
                        }
                    }, o)
                }))
            }),
            Cc = ({
                renderAction: e,
                zoom: t
            }) => Object(hs.jsx)(Al, {
                gap: 1,
                children: Object(hs.jsxs)(Il, {
                    gap: 1,
                    align: "center",
                    children: [e("zoomOut"), e("zoomIn"), e("resetZoom")]
                })
            }),
            Oc = ({
                appState: e,
                setAppState: t,
                actionManager: n,
                showThemeBtn: o
            }) => Object(hs.jsxs)("div", {
                style: {
                    display: "flex"
                },
                children: [n.renderAction("changeViewBackgroundColor"), o && n.renderAction("toggleTheme")]
            });
        n(60);
        var kc = ({
            isCollaborating: e,
            collaboratorCount: t,
            onClick: n
        }) => Object(hs.jsx)(hs.Fragment, {
            children: Object(hs.jsx)(us, {
                className: Object(st.a)("CollabButton", {
                    "is-collaborating": e
                }),
                onClick: n,
                icon: qs,
                type: "button",
                title: w("labels.liveCollaboration"),
                "aria-label": w("labels.liveCollaboration"),
                showAriaLabel: gd(),
                children: t > 0 && Object(hs.jsx)("div", {
                    className: "CollabButton-collaborators",
                    children: t
                })
            })
        });
        n(35);
        const Ic = "filter" in document.createElement("canvas").getContext("2d"),
            Ac = () => Object(hs.jsxs)("div", {
                children: [Object(hs.jsx)("h3", {
                    children: w("canvasError.cannotShowPreview")
                }), Object(hs.jsx)("p", {
                    children: Object(hs.jsx)("span", {
                        children: w("canvasError.canvasTooBig")
                    })
                }), Object(hs.jsxs)("em", {
                    children: ["(", w("canvasError.canvasTooBigTip"), ")"]
                })]
            }),
            Tc = (e, t) => {
                Object(s.unmountComponentAtNode)(t), t.innerHTML = "", e instanceof HTMLCanvasElement ? t.appendChild(e) : Object(s.render)(Object(hs.jsx)(Ac, {}), t)
            },
            Mc = ({
                children: e,
                title: t,
                onClick: n,
                color: o,
                shade: i = 6
            }) => Object(hs.jsx)("button", {
                className: "ExportDialog-imageExportButton",
                style: {
                    "--button-color": c[o][i],
                    "--button-color-darker": c[o][i + 1],
                    "--button-color-darkest": c[o][i + 2]
                },
                title: t,
                "aria-label": t,
                onClick: n,
                children: e
            }),
            Lc = ({
                elements: e,
                appState: t,
                exportPadding: n = d.e,
                actionManager: i,
                onExportToPng: s,
                onExportToSvg: a,
                onExportToClipboard: r
            }) => {
                const l = Ji(e, t),
                    [c, h] = Object(o.useState)(l),
                    u = Object(o.useRef)(null),
                    {
                        exportBackground: p,
                        viewBackgroundColor: m
                    } = t,
                    g = c ? Qi(e, t) : e;
                return Object(o.useEffect)((() => {
                    h(l)
                }), [l]), Object(o.useEffect)((() => {
                    const e = u.current;
                    if (e) try {
                        const o = qr(g, t, {
                            exportBackground: p,
                            viewBackgroundColor: m,
                            exportPadding: n
                        });
                        Wr(o).then((() => {
                            Tc(o, e)
                        })).catch((t => {
                            console.error(t), Tc(new Tr, e)
                        }))
                    } catch (o) {
                        console.error(o), Tc(new Tr, e)
                    }
                }), [t, g, p, n, m]), Object(hs.jsxs)("div", {
                    className: "ExportDialog",
                    children: [Object(hs.jsx)("div", {
                        className: "ExportDialog__preview",
                        ref: u
                    }), Ic && i.renderAction("exportWithDarkMode"), Object(hs.jsx)("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "1fr"
                        },
                        children: Object(hs.jsxs)("div", {
                            style: {
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
                                overflow: "hidden"
                            },
                            children: [i.renderAction("changeExportBackground"), l && Object(hs.jsx)(kl, {
                                checked: c,
                                onChange: e => h(e),
                                children: w("labels.onlySelected")
                            }), i.renderAction("changeExportEmbedScene")]
                        })
                    }), Object(hs.jsxs)("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            marginTop: ".6em"
                        },
                        children: [Object(hs.jsx)(Il, {
                            gap: 2,
                            children: i.renderAction("changeExportScale")
                        }), Object(hs.jsx)("p", {
                            style: {
                                marginLeft: "1em",
                                userSelect: "none"
                            },
                            children: "Scale"
                        })]
                    }), Object(hs.jsx)("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: ".6em 0"
                        },
                        children: !Ar.c && i.renderAction("changeProjectName")
                    }), Object(hs.jsxs)(Il, {
                        gap: 2,
                        justifyContent: "center",
                        style: {
                            margin: "2em 0"
                        },
                        children: [Object(hs.jsx)(Mc, {
                            color: "indigo",
                            title: w("buttons.exportToPng"),
                            "aria-label": w("buttons.exportToPng"),
                            onClick: () => s(g),
                            children: "PNG"
                        }), Object(hs.jsx)(Mc, {
                            color: "red",
                            title: w("buttons.exportToSvg"),
                            "aria-label": w("buttons.exportToSvg"),
                            onClick: () => a(g),
                            children: "SVG"
                        }), fl && Object(hs.jsx)(Mc, {
                            title: w("buttons.copyPngToClipboard"),
                            onClick: () => r(g),
                            color: "gray",
                            shade: 7,
                            children: js
                        })]
                    })]
                })
            },
            Pc = ({
                elements: e,
                appState: t,
                exportPadding: n = d.e,
                actionManager: s,
                onExportToPng: a,
                onExportToSvg: r,
                onExportToClipboard: l
            }) => {
                const [c, h] = Object(o.useState)(!1), u = i.a.useCallback((() => {
                    h(!1)
                }), []);
                return Object(hs.jsxs)(hs.Fragment, {
                    children: [Object(hs.jsx)(us, {
                        onClick: () => {
                            h(!0)
                        },
                        "data-testid": "image-export-button",
                        icon: Os,
                        type: "button",
                        "aria-label": w("buttons.exportImage"),
                        showAriaLabel: gd(),
                        title: w("buttons.exportImage")
                    }), c && Object(hs.jsx)(_d, {
                        onCloseRequest: u,
                        title: w("buttons.exportImage"),
                        children: Object(hs.jsx)(Lc, {
                            elements: e,
                            appState: t,
                            exportPadding: n,
                            actionManager: s,
                            onExportToPng: a,
                            onExportToSvg: r,
                            onExportToClipboard: l,
                            onCloseRequest: u
                        })
                    })]
                })
            };
        n(61);
        const _c = ({
            children: e,
            side: t,
            className: n
        }) => Object(hs.jsx)("div", {
            className: Object(st.a)("FixedSideContainer", "FixedSideContainer_side_".concat(t), n),
            children: e
        });
        n(62);
        const Dc = ({
            appState: e,
            elements: t
        }) => {
            let n = (({
                appState: e,
                elements: t
            }) => {
                const {
                    elementType: n,
                    isResizing: o,
                    isRotating: i,
                    lastPointerDownWith: s
                } = e, a = null !== e.multiElement;
                if ("arrow" === n || "line" === n) return w(a ? "hints.linearElementMulti" : "hints.linearElement");
                if ("freedraw" === n) return w("hints.freeDraw");
                if ("text" === n) return w("hints.text");
                const r = Qi(t, e);
                if (o && "mouse" === s && 1 === r.length) {
                    const e = r[0];
                    return ut(e) && 2 === e.points.length ? w("hints.lockAngle") : w("hints.resize")
                }
                return i && "mouse" === s ? w("hints.rotate") : 1 === r.length && ut(r[0]) ? e.editingLinearElement ? e.editingLinearElement.activePointIndex ? w("hints.lineEditor_pointSelected") : w("hints.lineEditor_nothingSelected") : w("hints.lineEditor_info") : 1 === r.length && ct(r[0]) ? w("hints.text_selected") : e.editingElement && ct(e.editingElement) ? w("hints.text_editing") : null
            })({
                appState: e,
                elements: t
            });
            return n ? (n = He(n), Object(hs.jsx)("div", {
                className: "HintViewer",
                children: Object(hs.jsx)("span", {
                    children: n
                })
            })) : null
        };
        n(63);
        const Rc = i.a.forwardRef((({
            children: e,
            padding: t,
            className: n,
            style: o
        }, i) => Object(hs.jsx)("div", {
            className: Object(st.a)("Island", n),
            style: {
                "--padding": t,
                ...o
            },
            ref: i,
            children: e
        })));
        n(64), n(65);
        const zc = Object(hs.jsx)("svg", {
                viewBox: "0 0 1792 1792",
                children: Object(hs.jsx)("path", {
                    fill: "currentColor",
                    d: "M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"
                })
            }),
            Nc = ({
                elements: e,
                pendingElements: t,
                onRemoveFromLibrary: n,
                onClick: i
            }) => {
                const s = Object(o.useRef)(null);
                Object(o.useEffect)((() => {
                    const n = e || t;
                    if (!n) return;
                    let o;
                    const i = s.current;
                    return (async () => {
                        o = await Jr(n, {
                            exportBackground: !1,
                            viewBackgroundColor: c.white
                        });
                        for (const e of s.current.children) "svg" === e.tagName && i.removeChild(e);
                        i.appendChild(o)
                    })(), () => {
                        o && i.removeChild(o)
                    }
                }), [e, t]);
                const [a, r] = Object(o.useState)(!1), l = gd(), h = (a || l) && t && Object(hs.jsx)("div", {
                    className: "library-unit__adder",
                    children: zc
                });
                return Object(hs.jsxs)("div", {
                    className: Object(st.a)("library-unit", {
                        "library-unit__active": e || t
                    }),
                    onMouseEnter: () => r(!0),
                    onMouseLeave: () => r(!1),
                    children: [Object(hs.jsx)("div", {
                        className: Object(st.a)("library-unit__dragger", {
                            "library-unit__pulse": !!t
                        }),
                        ref: s,
                        draggable: !!e,
                        onClick: e || t ? i : void 0,
                        onDragStart: t => {
                            r(!1), t.dataTransfer.setData(d.y.excalidrawlib, JSON.stringify(e))
                        }
                    }), h, e && (a || l) && Object(hs.jsx)("button", {
                        className: "library-unit__removeFromLibrary",
                        "aria-label": w("labels.removeFromLibrary"),
                        onClick: n,
                        children: $s
                    })]
                })
            },
            Bc = () => Object(hs.jsx)("div", {
                className: "LoadingMessage",
                children: Object(hs.jsx)("span", {
                    children: w("labels.loadingScene")
                })
            }),
            Hc = {
                CHECKED: Object(hs.jsx)("svg", {
                    width: "1792",
                    height: "1792",
                    viewBox: "0 0 1792 1792",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: Object(hs.jsx)("path", {
                        d: "M640 768h512v-192q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-192q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z"
                    })
                }),
                UNCHECKED: Object(hs.jsx)("svg", {
                    width: "1792",
                    height: "1792",
                    viewBox: "0 0 1792 1792",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "unlocked-icon rtl-mirror",
                    children: Object(hs.jsx)("path", {
                        d: "M1728 576v256q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45v-256q0-106-75-181t-181-75-181 75-75 181v192h96q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h672v-192q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5z"
                    })
                })
            },
            Vc = e => Object(hs.jsxs)("label", {
                className: Object(st.a)("ToolIcon ToolIcon__lock ToolIcon_type_floating zen-mode-visibility", "ToolIcon_size_".concat("medium"), {
                    "zen-mode-visibility--hidden": e.zenModeEnabled
                }),
                title: "".concat(e.title, " \u2014 Q"),
                children: [Object(hs.jsx)("input", {
                    className: "ToolIcon_type_checkbox",
                    type: "checkbox",
                    name: e.name,
                    onChange: e.onChange,
                    checked: e.checked,
                    "aria-label": e.title
                }), Object(hs.jsx)("div", {
                    className: "ToolIcon__icon",
                    children: e.checked ? Hc.CHECKED : Hc.UNCHECKED
                })]
            }),
            Fc = ({
                heading: e,
                children: t,
                ...n
            }) => {
                const {
                    id: o
                } = yd(), i = Object(hs.jsx)("h2", {
                    className: "visually-hidden",
                    id: "".concat(o, "-").concat(e, "-title"),
                    children: w("headings.".concat(e))
                });
                return Object(hs.jsx)("section", { ...n,
                    "aria-labelledby": "".concat(o, "-").concat(e, "-title"),
                    children: "function" === typeof t ? t(i) : Object(hs.jsxs)(hs.Fragment, {
                        children: [i, t]
                    })
                })
            };
        n(66);
        const Uc = ({
                children: e,
                className: t,
                mobile: n
            }) => Object(hs.jsx)("div", {
                className: Object(st.a)("UserList", t, {
                    UserList_mobile: n
                }),
                children: e
            }),
            Gc = Object(hs.jsx)("svg", {
                viewBox: "0 0 576 512",
                children: Object(hs.jsx)("path", {
                    fill: "currentColor",
                    d: "M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"
                })
            }),
            Wc = ({
                appState: e,
                setAppState: t
            }) => Object(hs.jsxs)("label", {
                className: Object(st.a)("ToolIcon ToolIcon_type_floating ToolIcon__library zen-mode-visibility", "ToolIcon_size_medium", {
                    "zen-mode-visibility--hidden": e.zenModeEnabled
                }),
                title: "".concat(Ae(w("toolBar.library")), " \u2014 9"),
                style: {
                    marginInlineStart: "var(--space-factor)"
                },
                // children: [Object(hs.jsx)("input", {
                //     className: "ToolIcon_type_checkbox",
                //     type: "checkbox",
                //     name: "editor-library",
                //     onChange: e => {
                //         t({
                //             isLibraryOpen: e.target.checked
                //         })
                //     },
                //     checked: e.isLibraryOpen,
                //     "aria-label": Ae(w("toolBar.library")),
                //     "aria-keyshortcuts": "9"
                // }), Object(hs.jsx)("div", {
                //     className: "ToolIcon__icon",
                //     children: Gc
                // })]
            }),
            Kc = ({
                appState: e,
                elements: t,
                libraryMenu: n,
                actionManager: o,
                renderJSONExportDialog: s,
                renderImageExportDialog: a,
                setAppState: r,
                onCollabButtonClick: l,
                onLockToggle: c,
                canvas: d,
                isCollaborating: h,
                renderCustomFooter: u,
                viewModeEnabled: p,
                showThemeBtn: m
            }) => Object(hs.jsxs)(hs.Fragment, {
                children: [!p && Object(hs.jsxs)(_c, {
                    side: "top",
                    className: "App-top-bar",
                    children: [Object(hs.jsx)(Fc, {
                        heading: "shapes",
                        children: t => Object(hs.jsxs)(Al, {
                            gap: 4,
                            align: "center",
                            children: [Object(hs.jsxs)(Il, {
                                gap: 1,
                                children: [Object(hs.jsxs)(Rc, {
                                    padding: 1,
                                    children: [t, Object(hs.jsx)(Il, {
                                        gap: 1,
                                        children: Object(hs.jsx)(Sc, {
                                            canvas: d,
                                            elementType: e.elementType,
                                            setAppState: r
                                        })
                                    })]
                                }), Object(hs.jsx)(Vc, {
                                    checked: e.elementLocked,
                                    onChange: c,
                                    title: w("toolBar.lock")
                                }), Object(hs.jsx)(Wc, {
                                    appState: e,
                                    setAppState: r
                                })]
                            }), n]
                        })
                    }), Object(hs.jsx)(Dc, {
                        appState: e,
                        elements: t
                    })]
                }), Object(hs.jsx)("div", {
                    className: "App-bottom-bar",
                    style: {
                        marginBottom: 14,
                        marginLeft: 14,
                        marginRight: 14
                    },
                    children: Object(hs.jsxs)(Rc, {
                        padding: 0,
                        children: ["canvas" === e.openMenu ? Object(hs.jsx)(Fc, {
                            className: "App-mobile-menu",
                            heading: "canvasActions",
                            children: Object(hs.jsx)("div", {
                                className: "panelColumn",
                                children: Object(hs.jsxs)(Al, {
                                    gap: 4,
                                    children: [p ? Object(hs.jsxs)(hs.Fragment, {
                                        children: [s(), a()]
                                    }) : Object(hs.jsxs)(hs.Fragment, {
                                        children: [o.renderAction("clearCanvas"), o.renderAction("loadScene"), s(), a(), l && Object(hs.jsx)(kc, {
                                            isCollaborating: h,
                                            collaboratorCount: e.collaborators.size,
                                            onClick: l
                                        }), Object(hs.jsx)(Oc, {
                                            actionManager: o,
                                            appState: e,
                                            setAppState: r,
                                            showThemeBtn: m
                                        })]
                                    }), null === u || void 0 === u ? void 0 : u(!0, e), e.collaborators.size > 0 && Object(hs.jsxs)("fieldset", {
                                        children: [Object(hs.jsx)("legend", {
                                            children: w("labels.collaborators")
                                        }), Object(hs.jsx)(Uc, {
                                            mobile: !0,
                                            children: Array.from(e.collaborators).filter((([e, t]) => 0 !== Object.keys(t).length)).map((([e, t]) => Object(hs.jsx)(i.a.Fragment, {
                                                children: o.renderAction("goToCollaborator", {
                                                    id: e
                                                })
                                            }, e)))
                                        })]
                                    })]
                                })
                            })
                        }) : "shape" === e.openMenu && !p && Fi(e, t) ? Object(hs.jsx)(Fc, {
                            className: "App-mobile-menu",
                            heading: "selectedShapeActions",
                            children: Object(hs.jsx)(Ec, {
                                appState: e,
                                elements: t,
                                renderAction: o.renderAction,
                                elementType: e.elementType
                            })
                        }) : null, Object(hs.jsxs)("footer", {
                            className: "App-toolbar",
                            children: [p ? Object(hs.jsx)("div", {
                                className: "App-toolbar-content",
                                children: o.renderAction("toggleCanvasMenu")
                            }) : Object(hs.jsxs)("div", {
                                className: "App-toolbar-content",
                                children: [o.renderAction("toggleCanvasMenu"), o.renderAction("toggleEditMenu"), o.renderAction("undo"), o.renderAction("redo"), o.renderAction(e.multiElement ? "finalize" : "duplicateSelection"), o.renderAction("deleteSelectedElements")]
                            }), e.scrolledOutside && !e.openMenu && Object(hs.jsx)("button", {
                                className: "scroll-back-to-content",
                                onClick: () => {
                                    r({ ...ts(t, e)
                                    })
                                },
                                children: w("buttons.scrollBackToContent")
                            })]
                        })]
                    })
                })]
            });
        n(67);
        const Yc = e => {
                const t = Object(o.useRef)(null),
                    [n, i] = Object(o.useState)(null);
                return Object(o.useLayoutEffect)((() => {
                    if (!e.spreadsheet) return;
                    const n = ml(e.chartType, e.spreadsheet, 0, 0);
                    let o;
                    i(n);
                    const s = t.current;
                    return (async () => {
                        o = await Jr(n, {
                            exportBackground: !1,
                            viewBackgroundColor: c.white
                        }), s.appendChild(o), e.selected && s.parentNode.focus()
                    })(), () => {
                        s.removeChild(o)
                    }
                }), [e.spreadsheet, e.chartType, e.selected]), Object(hs.jsx)("button", {
                    className: "ChartPreview",
                    onClick: () => {
                        n && e.onClick(e.chartType, n)
                    },
                    children: Object(hs.jsx)("div", {
                        ref: t
                    })
                })
            },
            Xc = ({
                setAppState: e,
                appState: t,
                onClose: n,
                onInsertChart: o
            }) => {
                const s = i.a.useCallback((() => {
                        n && n()
                    }), [n]),
                    a = (t, n) => {
                        o(n), Object(l.a)("magic", "chart", t), e({
                            currentChartType: t,
                            pasteDialog: {
                                shown: !1,
                                data: null
                            }
                        })
                    };
                return Object(hs.jsx)(_d, {
                    small: !0,
                    onCloseRequest: s,
                    title: w("labels.pasteCharts"),
                    className: "PasteChartDialog",
                    autofocus: !1,
                    children: Object(hs.jsxs)("div", {
                        className: "container",
                        children: [Object(hs.jsx)(Yc, {
                            chartType: "bar",
                            spreadsheet: t.pasteDialog.data,
                            selected: "bar" === t.currentChartType,
                            onClick: a
                        }), Object(hs.jsx)(Yc, {
                            chartType: "line",
                            spreadsheet: t.pasteDialog.data,
                            selected: "line" === t.currentChartType,
                            onClick: a
                        })]
                    })
                })
            };
        n(68);
        const Zc = () => Object(hs.jsxs)("div", {
                className: "HelpDialog--header",
                children: [Object(hs.jsx)("a", {
                    className: "HelpDialog--btn",
                    href: "https://github.com/excalidraw/excalidraw#documentation",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: w("helpDialog.documentation")
                }), Object(hs.jsx)("a", {
                    className: "HelpDialog--btn",
                    href: "https://blog.excalidraw.com",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: w("helpDialog.blog")
                }), Object(hs.jsx)("a", {
                    className: "HelpDialog--btn",
                    href: "https://github.com/excalidraw/excalidraw/issues",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: w("helpDialog.github")
                })]
            }),
            qc = e => Object(hs.jsxs)(hs.Fragment, {
                children: [Object(hs.jsx)("h3", {
                    children: e.title
                }), e.children]
            }),
            Jc = e => Object(hs.jsx)("div", {
                style: {
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-between"
                },
                children: e.children
            }),
            Qc = e => Object(hs.jsx)("div", {
                style: {
                    width: "49%"
                },
                children: e.children
            }),
            $c = e => Object(hs.jsxs)("div", {
                className: "HelpDialog--island",
                children: [Object(hs.jsx)("h3", {
                    className: "HelpDialog--island-title",
                    children: e.caption
                }), e.children]
            }),
            ed = e => Object(hs.jsx)("div", {
                className: "HelpDialog--shortcut",
                children: Object(hs.jsxs)("div", {
                    style: {
                        display: "flex",
                        margin: "0",
                        padding: "4px 8px",
                        alignItems: "center"
                    },
                    children: [Object(hs.jsx)("div", {
                        style: {
                            lineHeight: 1.4
                        },
                        children: e.label
                    }), Object(hs.jsx)("div", {
                        style: {
                            display: "flex",
                            flex: "0 0 auto",
                            justifyContent: "flex-end",
                            marginInlineStart: "auto",
                            minWidth: "30%"
                        },
                        children: e.shortcuts.map(((t, n) => Object(hs.jsxs)(i.a.Fragment, {
                            children: [Object(hs.jsx)(td, {
                                children: t
                            }), e.isOr && n !== e.shortcuts.length - 1 && w("helpDialog.or")]
                        }, n)))
                    })]
                })
            });
        ed.defaultProps = {
            isOr: !0
        };
        const td = e => Object(hs.jsx)("kbd", {
                className: "HelpDialog--key",
                ...e
            }),
            nd = ({
                onClose: e
            }) => {
                const t = i.a.useCallback((() => {
                    e && e()
                }), [e]);
                return Object(hs.jsx)(hs.Fragment, {
                    children: Object(hs.jsxs)(_d, {
                        onCloseRequest: t,
                        title: w("helpDialog.title"),
                        className: "HelpDialog",
                        children: [Object(hs.jsx)(Zc, {}), Object(hs.jsx)(qc, {
                            title: w("helpDialog.shortcuts"),
                            children: Object(hs.jsxs)(Jc, {
                                children: [Object(hs.jsxs)(Qc, {
                                    children: [Object(hs.jsxs)($c, {
                                        caption: w("helpDialog.shapes"),
                                        children: [Object(hs.jsx)(ed, {
                                            label: w("toolBar.selection"),
                                            shortcuts: ["V", "1"]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("toolBar.rectangle"),
                                            shortcuts: ["R", "2"]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("toolBar.diamond"),
                                            shortcuts: ["D", "3"]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("toolBar.ellipse"),
                                            shortcuts: ["E", "4"]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("toolBar.arrow"),
                                            shortcuts: ["A", "5"]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("toolBar.line"),
                                            shortcuts: ["P", "6"]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("toolBar.freedraw"),
                                            shortcuts: ["Shift+P", "7"]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("toolBar.text"),
                                            shortcuts: ["T", "8"]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("helpDialog.editSelectedShape"),
                                            shortcuts: [He("Enter"), w("helpDialog.doubleClick")]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("helpDialog.textNewLine"),
                                            shortcuts: [He("Enter"), He("Shift+Enter")]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("helpDialog.textFinish"),
                                            shortcuts: [He("Esc"), He("CtrlOrCmd+Enter")]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("helpDialog.curvedArrow"),
                                            shortcuts: ["A", w("helpDialog.click"), w("helpDialog.click"), w("helpDialog.click")],
                                            isOr: !1
                                        }), Object(hs.jsx)(ed, {
                                            label: w("helpDialog.curvedLine"),
                                            shortcuts: ["L", w("helpDialog.click"), w("helpDialog.click"), w("helpDialog.click")],
                                            isOr: !1
                                        }), Object(hs.jsx)(ed, {
                                            label: w("toolBar.lock"),
                                            shortcuts: ["Q"]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("helpDialog.preventBinding"),
                                            shortcuts: [He("CtrlOrCmd")]
                                        })]
                                    }), Object(hs.jsxs)($c, {
                                        caption: w("helpDialog.view"),
                                        children: [Object(hs.jsx)(ed, {
                                            label: w("buttons.zoomIn"),
                                            shortcuts: [He("CtrlOrCmd++")]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("buttons.zoomOut"),
                                            shortcuts: [He("CtrlOrCmd+-")]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("buttons.resetZoom"),
                                            shortcuts: [He("CtrlOrCmd+0")]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("helpDialog.zoomToFit"),
                                            shortcuts: ["Shift+1"]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("helpDialog.zoomToSelection"),
                                            shortcuts: ["Shift+2"]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("buttons.fullScreen"),
                                            shortcuts: ["F"]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("buttons.zenMode"),
                                            shortcuts: [He("Alt+Z")]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("labels.showGrid"),
                                            shortcuts: [He("CtrlOrCmd+'")]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("labels.viewMode"),
                                            shortcuts: [He("Alt+R")]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("labels.toggleTheme"),
                                            shortcuts: [He("Alt+Shift+D")]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("stats.title"),
                                            shortcuts: [He("Alt+/")]
                                        })]
                                    })]
                                }), Object(hs.jsx)(Qc, {
                                    children: Object(hs.jsxs)($c, {
                                        caption: w("helpDialog.editor"),
                                        children: [Object(hs.jsx)(ed, {
                                            label: w("labels.selectAll"),
                                            shortcuts: [He("CtrlOrCmd+A")]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("labels.multiSelect"),
                                            shortcuts: [He("Shift+".concat(w("helpDialog.click")))]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("labels.moveCanvas"),
                                            shortcuts: [He("Space+".concat(w("helpDialog.drag"))), He("Wheel+".concat(w("helpDialog.drag")))],
                                            isOr: !0
                                        }), Object(hs.jsx)(ed, {
                                            label: w("labels.cut"),
                                            shortcuts: [He("CtrlOrCmd+X")]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("labels.copy"),
                                            shortcuts: [He("CtrlOrCmd+C")]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("labels.paste"),
                                            shortcuts: [He("CtrlOrCmd+V")]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("labels.copyAsPng"),
                                            shortcuts: [He("Shift+Alt+C")]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("labels.copyStyles"),
                                            shortcuts: [He("CtrlOrCmd+Alt+C")]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("labels.pasteStyles"),
                                            shortcuts: [He("CtrlOrCmd+Alt+V")]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("labels.delete"),
                                            shortcuts: [He("Del")]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("labels.sendToBack"),
                                            shortcuts: [He(S ? "CtrlOrCmd+Alt+[" : "CtrlOrCmd+Shift+[")]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("labels.bringToFront"),
                                            shortcuts: [He(S ? "CtrlOrCmd+Alt+]" : "CtrlOrCmd+Shift+]")]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("labels.sendBackward"),
                                            shortcuts: [He("CtrlOrCmd+[")]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("labels.bringForward"),
                                            shortcuts: [He("CtrlOrCmd+]")]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("labels.alignTop"),
                                            shortcuts: [He("CtrlOrCmd+Shift+Up")]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("labels.alignBottom"),
                                            shortcuts: [He("CtrlOrCmd+Shift+Down")]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("labels.alignLeft"),
                                            shortcuts: [He("CtrlOrCmd+Shift+Left")]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("labels.alignRight"),
                                            shortcuts: [He("CtrlOrCmd+Shift+Right")]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("labels.duplicateSelection"),
                                            shortcuts: [He("CtrlOrCmd+D"), He("Alt+".concat(w("helpDialog.drag")))]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("buttons.undo"),
                                            shortcuts: [He("CtrlOrCmd+Z")]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("buttons.redo"),
                                            shortcuts: C ? [He("CtrlOrCmd+Y"), He("CtrlOrCmd+Shift+Z")] : [He("CtrlOrCmd+Shift+Z")]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("labels.group"),
                                            shortcuts: [He("CtrlOrCmd+G")]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("labels.ungroup"),
                                            shortcuts: [He("CtrlOrCmd+Shift+G")]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("labels.flipHorizontal"),
                                            shortcuts: [He("Shift+H")]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("labels.flipVertical"),
                                            shortcuts: [He("Shift+V")]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("labels.showStroke"),
                                            shortcuts: [He("S")]
                                        }), Object(hs.jsx)(ed, {
                                            label: w("labels.showBackground"),
                                            shortcuts: [He("G")]
                                        })]
                                    })
                                })]
                            })
                        })]
                    })
                })
            };
        n(69);
        const od = ({
                children: e,
                color: t
            }) => Object(hs.jsx)("div", {
                className: "Card",
                style: {
                    "--card-color": c[t][7],
                    "--card-color-darker": c[t][8],
                    "--card-color-darkest": c[t][9]
                },
                children: e
            }),
            id = ({
                elements: e,
                appState: t,
                actionManager: n,
                exportOpts: o,
                canvas: i
            }) => {
                const {
                    onExportToBackend: s
                } = o;
                return Object(hs.jsx)("div", {
                    className: "ExportDialog ExportDialog--json",
                    children: Object(hs.jsxs)("div", {
                        className: "ExportDialog-cards",
                        children: [o.saveFileToDisk && Object(hs.jsxs)(od, {
                            color: "lime",
                            children: [Object(hs.jsx)("div", {
                                className: "Card-icon",
                                children: ks
                            }), Object(hs.jsx)("h2", {
                                children: w("exportDialog.disk_title")
                            }), Object(hs.jsxs)("div", {
                                className: "Card-details",
                                children: [w("exportDialog.disk_details"), !Ar.c && n.renderAction("changeProjectName")]
                            }), Object(hs.jsx)(us, {
                                className: "Card-button",
                                type: "button",
                                title: w("exportDialog.disk_button"),
                                "aria-label": w("exportDialog.disk_button"),
                                showAriaLabel: !0,
                                onClick: () => {
                                    n.executeAction(Ml)
                                }
                            })]
                        }), s && Object(hs.jsxs)(od, {
                            color: "pink",
                            children: [Object(hs.jsx)("div", {
                                className: "Card-icon",
                                children: vs
                            }), Object(hs.jsx)("h2", {
                                children: w("exportDialog.link_title")
                            }), Object(hs.jsx)("div", {
                                className: "Card-details",
                                children: w("exportDialog.link_details")
                            }), Object(hs.jsx)(us, {
                                className: "Card-button",
                                type: "button",
                                title: w("exportDialog.link_button"),
                                "aria-label": w("exportDialog.link_button"),
                                showAriaLabel: !0,
                                onClick: () => s(e, t, i)
                            })]
                        }), o.renderCustomUI && o.renderCustomUI(e, t, i)]
                    })
                })
            },
            sd = ({
                elements: e,
                appState: t,
                actionManager: n,
                exportOpts: s,
                canvas: a
            }) => {
                const [r, l] = Object(o.useState)(!1), c = i.a.useCallback((() => {
                    l(!1)
                }), []);
                return Object(hs.jsxs)(hs.Fragment, {
                    children: [Object(hs.jsx)(us, {
                        onClick: () => {
                            l(!0)
                        },
                        "data-testid": "json-export-button",
                        icon: Cs,
                        type: "button",
                        "aria-label": w("buttons.export"),
                        showAriaLabel: gd(),
                        title: w("buttons.export")
                    }), r && Object(hs.jsx)(_d, {
                        onCloseRequest: c,
                        title: w("buttons.export"),
                        children: Object(hs.jsx)(id, {
                            elements: e,
                            appState: t,
                            actionManager: n,
                            onCloseRequest: c,
                            exportOpts: s,
                            canvas: a
                        })
                    })]
                })
            },
            ad = ({
                libraryItems: e,
                onRemoveFromLibrary: t,
                onAddToLibrary: n,
                onInsertShape: o,
                pendingElements: i,
                theme: s,
                setAppState: a,
                setLibraryItems: r,
                libraryReturnUrl: l,
                focusContainer: c,
                library: h,
                id: u
            }) => {
                const p = gd(),
                    m = e.length + (i.length > 0 ? 1 : 0),
                    g = p ? 4 : 6,
                    b = Math.max(1, Math.ceil(m / g)),
                    y = [];
                let v = !1;
                const f = l || window.location.origin + window.location.pathname;
                y.push(Object(hs.jsxs)("div", {
                    className: "layer-ui__library-header",
                    children: [Object(hs.jsx)(us, {
                        type: "button",
                        title: w("buttons.load"),
                        "aria-label": w("buttons.load"),
                        icon: ws,
                        onClick: () => {
                            (async e => {
                                const t = await Pr({
                                    description: "Excalidraw library files"
                                });
                                await e.importLibrary(t)
                            })(h).then((() => {
                                a({
                                    isLibraryOpen: !1
                                }), a({
                                    isLibraryOpen: !0
                                })
                            })).catch(Ye).catch((e => {
                                a({
                                    errorMessage: e.message
                                })
                            }))
                        }
                    }, "import"), !!e.length && Object(hs.jsxs)(hs.Fragment, {
                        children: [Object(hs.jsx)(us, {
                            type: "button",
                            title: w("buttons.export"),
                            "aria-label": w("buttons.export"),
                            icon: Cs,
                            onClick: () => {
                                (async e => {
                                    const t = await e.loadLibrary(),
                                        n = {
                                            type: d.q.excalidrawLibrary,
                                            version: 1,
                                            source: d.s,
                                            library: t
                                        },
                                        o = JSON.stringify(n, null, 2);
                                    await _r(new Blob([o], {
                                        type: d.y.excalidrawlib
                                    }), {
                                        name: "library",
                                        extension: "excalidrawlib",
                                        description: "Excalidraw library file"
                                    })
                                })(h).catch(Ye).catch((e => {
                                    a({
                                        errorMessage: e.message
                                    })
                                }))
                            }
                        }, "export"), Object(hs.jsx)(us, {
                            type: "button",
                            title: w("buttons.resetLibrary"),
                            "aria-label": w("buttons.resetLibrary"),
                            icon: Es,
                            onClick: () => {
                                window.confirm(w("alerts.resetLibrary")) && (h.resetLibrary(), r([]), c())
                            }
                        }, "reset")]
                    }), Object(hs.jsx)("a", {
                        href: "https://libraries.excalidraw.com?target=".concat(window.name || "_blank", "&referrer=").concat(f, "&useHash=true&token=").concat(u, "&theme=").concat(s),
                        target: "_excalidraw_libraries",
                        children: w("labels.libraries")
                    })]
                }, "library-header"));
                for (let d = 0; d < b; d++) {
                    const s = g * d,
                        a = [];
                    for (let r = 0; r < g; r++) {
                        const l = i.length > 0 && !v && s + r >= e.length;
                        v = v || l, a.push(Object(hs.jsx)(Al, {
                            children: Object(hs.jsx)(Nc, {
                                elements: e[s + r],
                                pendingElements: l ? i : void 0,
                                onRemoveFromLibrary: t.bind(null, s + r),
                                onClick: l ? n.bind(null, i) : o.bind(null, e[s + r])
                            })
                        }, r))
                    }
                    y.push(Object(hs.jsx)(Il, {
                        align: "center",
                        gap: 1,
                        children: a
                    }, d))
                }
                return Object(hs.jsx)(Al, {
                    align: "start",
                    gap: 1,
                    className: "layer-ui__library-items",
                    children: y
                })
            },
            rd = ({
                onClickOutside: e,
                onInsertShape: t,
                pendingElements: n,
                onAddToLibrary: i,
                theme: s,
                setAppState: a,
                libraryReturnUrl: r,
                focusContainer: l,
                library: c,
                id: d
            }) => {
                const h = Object(o.useRef)(null);
                ((e, t) => {
                    Object(o.useEffect)((() => {
                        const n = n => {
                            e.current && (n.target instanceof Element && (e.current.contains(n.target) || !document.body.contains(n.target)) || t(n))
                        };
                        return document.addEventListener("pointerdown", n, !1), () => {
                            document.removeEventListener("pointerdown", n)
                        }
                    }), [e, t])
                })(h, (t => {
                    t.target.closest(".ToolIcon_type_button__library") || e(t)
                }));
                const [u, p] = Object(o.useState)([]), [m, g] = Object(o.useState)("preloading"), b = Object(o.useRef)(null);
                Object(o.useEffect)((() => (Promise.race([new Promise((e => {
                    b.current = setTimeout((() => {
                        e("loading")
                    }), 100)
                })), c.loadLibrary().then((e => {
                    p(e), g("ready")
                }))]).then((e => {
                    "loading" === e && g("loading")
                })), () => {
                    clearTimeout(b.current)
                })), [c]);
                const y = Object(o.useCallback)((async e => {
                        const t = await c.loadLibrary(),
                            n = t.filter(((t, n) => n !== e));
                        c.saveLibrary(n).catch((e => {
                            p(t), a({
                                errorMessage: w("alerts.errorRemovingFromLibrary")
                            })
                        })), p(n)
                    }), [c, a]),
                    v = Object(o.useCallback)((async e => {
                        const t = await c.loadLibrary(),
                            n = [...t, e];
                        i(), c.saveLibrary(n).catch((e => {
                            p(t), a({
                                errorMessage: w("alerts.errorAddingToLibrary")
                            })
                        })), p(n)
                    }), [i, c, a]);
                return "preloading" === m ? null : Object(hs.jsx)(Rc, {
                    padding: 1,
                    ref: h,
                    className: "layer-ui__library",
                    children: "loading" === m ? Object(hs.jsx)("div", {
                        className: "layer-ui__library-message",
                        children: w("labels.libraryLoadingMessage")
                    }) : Object(hs.jsx)(ad, {
                        libraryItems: u,
                        onRemoveFromLibrary: y,
                        onAddToLibrary: v,
                        onInsertShape: t,
                        pendingElements: n,
                        setAppState: a,
                        setLibraryItems: p,
                        libraryReturnUrl: r,
                        focusContainer: l,
                        library: c,
                        theme: s,
                        id: d
                    })
                })
            },
            ld = ({
                actionManager: e,
                appState: t,
                setAppState: n,
                canvas: i,
                elements: s,
                onCollabButtonClick: a,
                onLockToggle: r,
                onInsertElements: l,
                zenModeEnabled: c,
                showExitZenModeBtn: h,
                showThemeBtn: u,
                toggleZenMode: p,
                isCollaborating: m,
                renderTopRightUI: g,
                renderCustomFooter: b,
                viewModeEnabled: y,
                libraryReturnUrl: v,
                UIOptions: f,
                focusContainer: x,
                library: j,
                id: E
            }) => {
                const S = gd(),
                    C = () => f.canvasActions.export ? Object(hs.jsx)(sd, {
                        elements: s,
                        appState: t,
                        actionManager: e,
                        exportOpts: f.canvasActions.export,
                        canvas: i
                    }) : null,
                    O = () => {
                        if (!f.canvasActions.saveAsImage) return null;
                        const o = e => async o => {
                            const i = await Ol(e, o, t, {
                                exportBackground: t.exportBackground,
                                name: t.name,
                                viewBackgroundColor: t.viewBackgroundColor
                            }).catch(Ye).catch((e => {
                                console.error(e), n({
                                    errorMessage: e.message
                                })
                            }));
                            t.exportEmbedScene && i && Ur(i) && n({
                                fileHandle: i
                            })
                        };
                        return Object(hs.jsx)(Pc, {
                            elements: s,
                            appState: t,
                            actionManager: e,
                            onExportToPng: o("png"),
                            onExportToSvg: o("svg"),
                            onExportToClipboard: o("clipboard")
                        })
                    },
                    k = () => Object(hs.jsx)("div", {
                        style: {
                            width: ".625em"
                        }
                    }),
                    I = Object(o.useCallback)((e => {
                        n({
                            isLibraryOpen: !1
                        })
                    }), [n]),
                    A = Object(o.useCallback)((() => {
                        n({
                            selectedElementIds: {},
                            selectedGroupIds: {}
                        })
                    }), [n]),
                    T = t.isLibraryOpen ? Object(hs.jsx)(rd, {
                        pendingElements: Qi(s, t),
                        onClickOutside: I,
                        onInsertShape: l,
                        onAddToLibrary: A,
                        setAppState: n,
                        libraryReturnUrl: v,
                        focusContainer: x,
                        library: j,
                        theme: t.theme,
                        id: E
                    }) : null,
                    M = Object(hs.jsxs)(hs.Fragment, {
                        children: [t.isLoading && Object(hs.jsx)(Bc, {}), t.errorMessage && Object(hs.jsx)(Dd, {
                            message: t.errorMessage,
                            onClose: () => n({
                                errorMessage: null
                            })
                        }), t.showHelpDialog && Object(hs.jsx)(nd, {
                            onClose: () => {
                                n({
                                    showHelpDialog: !1
                                })
                            }
                        }), t.pasteDialog.shown && Object(hs.jsx)(Xc, {
                            setAppState: n,
                            appState: t,
                            onInsertChart: l,
                            onClose: () => n({
                                pasteDialog: {
                                    shown: !1,
                                    data: null
                                }
                            })
                        })]
                    });
                return S ? Object(hs.jsxs)(hs.Fragment, {
                    children: [M, Object(hs.jsx)(Kc, {
                        appState: t,
                        elements: s,
                        actionManager: e,
                        libraryMenu: T,
                        renderJSONExportDialog: C,
                        renderImageExportDialog: O,
                        setAppState: n,
                        onCollabButtonClick: a,
                        onLockToggle: r,
                        canvas: i,
                        isCollaborating: m,
                        renderCustomFooter: b,
                        viewModeEnabled: y,
                        showThemeBtn: u
                    })]
                }) : Object(hs.jsxs)("div", {
                    className: Object(st.a)("layer-ui__wrapper", {
                        "disable-pointerEvents": t.draggingElement || t.resizingElement || t.editingElement && !ct(t.editingElement)
                    }),
                    children: [M, (() => {
                        const o = Fi(t, s);
                        return Object(hs.jsx)(_c, {
                            side: "top",
                            children: Object(hs.jsxs)("div", {
                                className: "App-menu App-menu_top",
                                children: [Object(hs.jsxs)(Al, {
                                    gap: 4,
                                    className: Object(st.a)({
                                        "disable-pointerEvents": c
                                    }),
                                    children: [y ? Object(hs.jsx)(Fc, {
                                        heading: "canvasActions",
                                        className: Object(st.a)("zen-mode-transition", {
                                            "transition-left": c
                                        }),
                                        children: Object(hs.jsx)(Rc, {
                                            padding: 2,
                                            style: {
                                                zIndex: 1
                                            },
                                            children: Object(hs.jsx)(Al, {
                                                gap: 4,
                                                children: Object(hs.jsxs)(Il, {
                                                    gap: 1,
                                                    justifyContent: "space-between",
                                                    children: [C(), O()]
                                                })
                                            })
                                        })
                                    }) : Object(hs.jsx)(Fc, {
                                        heading: "canvasActions",
                                        className: Object(st.a)("zen-mode-transition", {
                                            "transition-left": c
                                        }),
                                        children: Object(hs.jsx)(Rc, {
                                            padding: 2,
                                            style: {
                                                zIndex: 1
                                            },
                                            children: Object(hs.jsxs)(Al, {
                                                gap: 4,
                                                children: [Object(hs.jsxs)(Il, {
                                                    gap: 1,
                                                    justifyContent: "space-between",
                                                    children: [e.renderAction("clearCanvas"), Object(hs.jsx)(k, {}), e.renderAction("loadScene"), C(), O(), Object(hs.jsx)(k, {}), a && Object(hs.jsx)(kc, {
                                                        isCollaborating: m,
                                                        collaboratorCount: t.collaborators.size,
                                                        onClick: a
                                                    })]
                                                }), Object(hs.jsx)(Oc, {
                                                    actionManager: e,
                                                    appState: t,
                                                    setAppState: n,
                                                    showThemeBtn: u
                                                }), t.fileHandle && Object(hs.jsx)(hs.Fragment, {
                                                    children: e.renderAction("saveToActiveFile")
                                                })]
                                            })
                                        })
                                    }), o && Object(hs.jsx)(Fc, {
                                        heading: "selectedShapeActions",
                                        className: Object(st.a)("zen-mode-transition", {
                                            "transition-left": c
                                        }),
                                        children: Object(hs.jsx)(Rc, {
                                            className: d.c.SHAPE_ACTIONS_MENU,
                                            padding: 2,
                                            style: {
                                                maxHeight: "".concat(t.height - (t.fileHandle ? 248 : 200), "px")
                                            },
                                            children: Object(hs.jsx)(Ec, {
                                                appState: t,
                                                elements: s,
                                                renderAction: e.renderAction,
                                                elementType: t.elementType
                                            })
                                        })
                                    })]
                                }), !y && Object(hs.jsx)(Fc, {
                                    heading: "shapes",
                                    children: e => Object(hs.jsxs)(Al, {
                                        gap: 4,
                                        align: "start",
                                        children: [Object(hs.jsxs)(Il, {
                                            gap: 1,
                                            children: [Object(hs.jsx)(Vc, {
                                                zenModeEnabled: c,
                                                checked: t.elementLocked,
                                                onChange: r,
                                                title: w("toolBar.lock")
                                            }), Object(hs.jsxs)(Rc, {
                                                padding: 1,
                                                className: Object(st.a)({
                                                    "zen-mode": c
                                                }),
                                                children: [Object(hs.jsx)(Dc, {
                                                    appState: t,
                                                    elements: s
                                                }), e, Object(hs.jsx)(Il, {
                                                    gap: 1,
                                                    children: Object(hs.jsx)(Sc, {
                                                        canvas: i,
                                                        elementType: t.elementType,
                                                        setAppState: n
                                                    })
                                                })]
                                            }), Object(hs.jsx)(Wc, {
                                                appState: t,
                                                setAppState: n
                                            })]
                                        }), T]
                                    })
                                }), Object(hs.jsxs)("div", {
                                    className: Object(st.a)("layer-ui__wrapper__top-right zen-mode-transition", {
                                        "transition-right": c
                                    }),
                                    children: [Object(hs.jsx)(Uc, {
                                        children: t.collaborators.size > 0 && Array.from(t.collaborators).filter((([e, t]) => 0 !== Object.keys(t).length)).map((([t, n]) => Object(hs.jsx)(ur, {
                                            label: n.username || "Unknown user",
                                            children: e.renderAction("goToCollaborator", {
                                                id: t
                                            })
                                        }, t)))
                                    }), null === g || void 0 === g ? void 0 : g(S, t)]
                                })]
                            })
                        })
                    })(), Object(hs.jsxs)("footer", {
                        role: "contentinfo",
                        className: "layer-ui__wrapper__footer App-menu App-menu_bottom",
                        children: [Object(hs.jsx)("div", {
                            className: Object(st.a)("layer-ui__wrapper__footer-left zen-mode-transition", {
                                "layer-ui__wrapper__footer-left--transition-left": c
                            }),
                            children: Object(hs.jsx)(Al, {
                                gap: 2,
                                children: Object(hs.jsxs)(Fc, {
                                    heading: "canvasActions",
                                    children: [Object(hs.jsx)(Rc, {
                                        padding: 1,
                                        children: Object(hs.jsx)(Cc, {
                                            renderAction: e.renderAction,
                                            zoom: t.zoom
                                        })
                                    }), !y && Object(hs.jsxs)("div", {
                                        className: Object(st.a)("undo-redo-buttons zen-mode-transition", {
                                            "layer-ui__wrapper__footer-left--transition-bottom": c
                                        }),
                                        children: [e.renderAction("undo", {
                                            size: "small"
                                        }), e.renderAction("redo", {
                                            size: "small"
                                        })]
                                    })]
                                })
                            })
                        }), Object(hs.jsx)("div", {
                            className: Object(st.a)("layer-ui__wrapper__footer-center zen-mode-transition", {
                                "layer-ui__wrapper__footer-left--transition-bottom": c
                            }),
                            children: null === b || void 0 === b ? void 0 : b(!1, t)
                        }), Object(hs.jsx)("div", {
                            className: Object(st.a)("layer-ui__wrapper__footer-right zen-mode-transition", {
                                "transition-right disable-pointerEvents": c
                            }),
                            children: e.renderAction("toggleShortcuts")
                        }), Object(hs.jsx)("button", {
                            className: Object(st.a)("disable-zen-mode", {
                                "disable-zen-mode--visible": h
                            }),
                            onClick: p,
                            children: w("buttons.exitZenMode")
                        })]
                    }), t.scrolledOutside && Object(hs.jsx)("button", {
                        className: "scroll-back-to-content",
                        onClick: () => {
                            n({ ...ts(s, t)
                            })
                        },
                        children: w("buttons.scrollBackToContent")
                    })]
                })
            },
            cd = (e, t) => {
                const n = e => {
                        const {
                            suggestedBindings: t,
                            startBoundElement: n,
                            ...o
                        } = e;
                        return o
                    },
                    o = n(e.appState),
                    i = n(t.appState),
                    s = Object.keys(o);
                return e.renderCustomFooter === t.renderCustomFooter && e.langCode === t.langCode && e.elements === t.elements && s.every((e => o[e] === i[e]))
            };
        var dd = i.a.memo(ld, cd);
        n(70);
        const hd = e => {
            var t;
            const n = gd(),
                o = Rt(e.elements),
                i = $i(e.elements, e.appState),
                s = Rt(i);
            return n && e.appState.openMenu ? null : Object(hs.jsx)("div", {
                className: "Stats",
                children: Object(hs.jsxs)(Rc, {
                    padding: 2,
                    children: [Object(hs.jsx)("div", {
                        className: "close",
                        onClick: e.onClose,
                        children: $s
                    }), Object(hs.jsx)("h3", {
                        children: w("stats.title")
                    }), Object(hs.jsx)("table", {
                        children: Object(hs.jsxs)("tbody", {
                            children: [Object(hs.jsx)("tr", {
                                children: Object(hs.jsx)("th", {
                                    colSpan: 2,
                                    children: w("stats.scene")
                                })
                            }), Object(hs.jsxs)("tr", {
                                children: [Object(hs.jsx)("td", {
                                    children: w("stats.elements")
                                }), Object(hs.jsx)("td", {
                                    children: e.elements.length
                                })]
                            }), Object(hs.jsxs)("tr", {
                                children: [Object(hs.jsx)("td", {
                                    children: w("stats.width")
                                }), Object(hs.jsx)("td", {
                                    children: Math.round(o[2]) - Math.round(o[0])
                                })]
                            }), Object(hs.jsxs)("tr", {
                                children: [Object(hs.jsx)("td", {
                                    children: w("stats.height")
                                }), Object(hs.jsx)("td", {
                                    children: Math.round(o[3]) - Math.round(o[1])
                                })]
                            }), 1 === i.length && Object(hs.jsx)("tr", {
                                children: Object(hs.jsx)("th", {
                                    colSpan: 2,
                                    children: w("stats.element")
                                })
                            }), i.length > 1 && Object(hs.jsxs)(hs.Fragment, {
                                children: [Object(hs.jsx)("tr", {
                                    children: Object(hs.jsx)("th", {
                                        colSpan: 2,
                                        children: w("stats.selected")
                                    })
                                }), Object(hs.jsxs)("tr", {
                                    children: [Object(hs.jsx)("td", {
                                        children: w("stats.elements")
                                    }), Object(hs.jsx)("td", {
                                        children: i.length
                                    })]
                                })]
                            }), i.length > 0 && Object(hs.jsxs)(hs.Fragment, {
                                children: [Object(hs.jsxs)("tr", {
                                    children: [Object(hs.jsx)("td", {
                                        children: "x"
                                    }), Object(hs.jsx)("td", {
                                        children: Math.round(s[0])
                                    })]
                                }), Object(hs.jsxs)("tr", {
                                    children: [Object(hs.jsx)("td", {
                                        children: "y"
                                    }), Object(hs.jsx)("td", {
                                        children: Math.round(s[1])
                                    })]
                                }), Object(hs.jsxs)("tr", {
                                    children: [Object(hs.jsx)("td", {
                                        children: w("stats.width")
                                    }), Object(hs.jsx)("td", {
                                        children: Math.round(s[2] - s[0])
                                    })]
                                }), Object(hs.jsxs)("tr", {
                                    children: [Object(hs.jsx)("td", {
                                        children: w("stats.height")
                                    }), Object(hs.jsx)("td", {
                                        children: Math.round(s[3] - s[1])
                                    })]
                                })]
                            }), 1 === i.length && Object(hs.jsxs)("tr", {
                                children: [Object(hs.jsx)("td", {
                                    children: w("stats.angle")
                                }), Object(hs.jsx)("td", {
                                    children: "".concat(Math.round(180 * i[0].angle / Math.PI), "\xb0")
                                })]
                            }), null === (t = e.renderCustomStats) || void 0 === t ? void 0 : t.call(e, e.elements, e.appState)]
                        })
                    })]
                })
            })
        };
        n(71);
        const ud = ({
                message: e,
                clearToast: t
            }) => {
                const n = Object(o.useRef)(0),
                    i = Object(o.useCallback)((() => n.current = window.setTimeout((() => t()), d.L)), [t]);
                return Object(o.useEffect)((() => (i(), () => clearTimeout(n.current))), [i, e]), Object(hs.jsx)("div", {
                    className: "Toast",
                    onMouseEnter: () => clearTimeout(null === n || void 0 === n ? void 0 : n.current),
                    onMouseLeave: i,
                    children: Object(hs.jsx)("p", {
                        className: "Toast__message",
                        children: e
                    })
                })
            },
            pd = Pa({
                name: "viewMode",
                perform(e, t) {
                    return Object(l.a)("view", "mode", "view"), {
                        appState: { ...t,
                            viewModeEnabled: !this.checked(t)
                        },
                        commitToHistory: !1
                    }
                },
                checked: e => e.viewModeEnabled,
                contextItemLabel: "labels.viewMode",
                keyTest: e => !e[ee] && e.altKey && e.code === Y
            }),
            md = i.a.createContext(!1),
            gd = () => Object(o.useContext)(md),
            bd = i.a.createContext({
                container: null,
                id: null
            }),
            yd = () => Object(o.useContext)(bd);
        let vd = !1,
            fd = 0,
            xd = 0,
            wd = 0,
            jd = !1,
            Ed = !1,
            Sd = !1,
            Cd = {
                horizontal: null,
                vertical: null
            },
            Od = 0,
            kd = !1,
            Id = null;
        const Ad = {
            pointers: new Map,
            lastCenter: null,
            initialDistance: null,
            initialScale: null
        };
        class Td extends i.a.Component {
            constructor(e) {
                super(e), this.canvas = null, this.rc = null, this.unmounted = !1, this.actionManager = void 0, this.isMobile = !1, this.detachIsMobileMqHandler = void 0, this.excalidrawContainerRef = i.a.createRef(), this.scene = void 0, this.resizeObserver = void 0, this.nearestScrollableContainer = void 0, this.library = void 0, this.libraryItemsFromStorage = void 0, this.id = void 0, this.history = void 0, this.excalidrawContainerValue = void 0, this.focusContainer = () => {
                    var e;
                    this.props.autoFocus && (null === (e = this.excalidrawContainerRef.current) || void 0 === e || e.focus())
                }, this.getSceneElementsIncludingDeleted = () => this.scene.getElementsIncludingDeleted(), this.getSceneElements = () => this.scene.getElements(), this.syncActionResult = qe((e => {
                    if (this.unmounted || !1 === e) return;
                    let t = null;
                    if (e.elements && (e.elements.forEach((e => {
                            var n;
                            (null === (n = this.state.editingElement) || void 0 === n ? void 0 : n.id) === e.id && this.state.editingElement !== e && Ki(e) && (t = e)
                        })), this.scene.replaceAllElements(e.elements), e.commitToHistory && this.history.resumeRecording()), e.appState || t) {
                        var n, o, i, s, a, r;
                        e.commitToHistory && this.history.resumeRecording();
                        let l = (null === e || void 0 === e || null === (n = e.appState) || void 0 === n ? void 0 : n.viewModeEnabled) || !1,
                            c = (null === e || void 0 === e || null === (o = e.appState) || void 0 === o ? void 0 : o.zenModeEnabled) || !1,
                            h = (null === e || void 0 === e || null === (i = e.appState) || void 0 === i ? void 0 : i.gridSize) || null,
                            u = (null === e || void 0 === e || null === (s = e.appState) || void 0 === s ? void 0 : s.theme) || "light",
                            p = null !== (a = null === e || void 0 === e || null === (r = e.appState) || void 0 === r ? void 0 : r.name) && void 0 !== a ? a : this.state.name;
                        "undefined" !== typeof this.props.viewModeEnabled && (l = this.props.viewModeEnabled), "undefined" !== typeof this.props.zenModeEnabled && (c = this.props.zenModeEnabled), "undefined" !== typeof this.props.gridModeEnabled && (h = this.props.gridModeEnabled ? d.u : null), "undefined" !== typeof this.props.theme && (u = this.props.theme), "undefined" !== typeof this.props.name && (p = this.props.name), this.setState((n => {
                            var o;
                            return Object.assign(e.appState || {}, {
                                editingElement: t || (null === (o = e.appState) || void 0 === o ? void 0 : o.editingElement) || null,
                                viewModeEnabled: l,
                                zenModeEnabled: c,
                                gridSize: h,
                                theme: u,
                                name: p
                            })
                        }), (() => {
                            e.syncHistory && this.history.setCurrentState(this.state, this.scene.getElementsIncludingDeleted())
                        }))
                    }
                })), this.onBlur = qe((() => {
                    jd = !1, this.setState({
                        isBindingEnabled: !0
                    })
                })), this.onUnload = () => {
                    this.onBlur()
                }, this.disableEvent = e => {
                    e.preventDefault()
                }, this.onFontLoaded = () => {
                    this.scene.getElementsIncludingDeleted().forEach((e => {
                        ct(e) && Yt(e)
                    })), this.onSceneUpdated()
                }, this.importLibraryFromUrl = async (e, t) => {
                    if (window.location.hash.includes(d.N.addLibrary)) {
                        const e = new URLSearchParams(window.location.hash.slice(1));
                        e.delete(d.N.addLibrary), window.history.replaceState({}, d.b, "#".concat(e.toString()))
                    } else if (window.location.search.includes(d.O.addLibrary)) {
                        const e = new URLSearchParams(window.location.search);
                        e.delete(d.O.addLibrary), window.history.replaceState({}, d.b, "?".concat(e.toString()))
                    }
                    try {
                        const n = await fetch(decodeURIComponent(e)),
                            o = await n.blob(),
                            i = JSON.parse(await o.text());
                        if (!(e => "object" === typeof e && e && e.type === d.q.excalidrawLibrary && 1 === e.version)(i)) throw new Error;
                        (t === this.id || window.confirm(w("alerts.confirmAddLibrary", {
                            numShapes: i.library.length
                        }))) && (await this.library.importLibrary(o), this.state.isLibraryOpen && this.setState({
                            isLibraryOpen: !1
                        }), this.setState({
                            isLibraryOpen: !0
                        }))
                    } catch (n) {
                        window.alert(w("alerts.errorLoadingLibrary")), console.error(n)
                    } finally {
                        this.focusContainer()
                    }
                }, this.resetHistory = () => {
                    this.history.clear()
                }, this.resetScene = qe((e => {
                    this.scene.replaceAllElements([]), this.setState((t => ({ ...et(),
                        isLoading: !(null === e || void 0 === e ? void 0 : e.resetLoadingState) && t.isLoading,
                        theme: this.state.theme
                    }))), this.resetHistory()
                })), this.initializeScene = async () => {
                    var e;
                    "launchQueue" in window && "LaunchParams" in window && window.launchQueue.setConsumer((async e => {
                        if (!e.files.length) return;
                        const t = e.files[0],
                            n = await t.getFile();
                        n.handle = t, Gr(n, this.state, this.scene.getElementsIncludingDeleted()).then((({
                            elements: e,
                            appState: t
                        }) => this.syncActionResult({
                            elements: e,
                            appState: { ...t || this.state,
                                isLoading: !1
                            },
                            commitToHistory: !0
                        }))).catch((e => {
                            this.setState({
                                isLoading: !1,
                                errorMessage: e.message
                            })
                        }))
                    })), this.state.isLoading || this.setState({
                        isLoading: !0
                    });
                    let t = null;
                    try {
                        var n;
                        t = await this.props.initialData || null, (null === (n = t) || void 0 === n ? void 0 : n.libraryItems) && (this.libraryItemsFromStorage = t.libraryItems)
                    } catch (s) {
                        console.error(s), t = {
                            appState: {
                                errorMessage: s.message || "Encountered an error during importing or restoring scene data"
                            }
                        }
                    }
                    const o = Hr(t, null, null);
                    o.appState = { ...o.appState,
                        isLoading: !1
                    }, (null === (e = t) || void 0 === e ? void 0 : e.scrollToContent) && (o.appState = { ...o.appState,
                        ...ts(o.elements, { ...o.appState,
                            width: this.state.width,
                            height: this.state.height,
                            offsetTop: this.state.offsetTop,
                            offsetLeft: this.state.offsetLeft
                        })
                    }), this.resetHistory(), this.syncActionResult({ ...o,
                        commitToHistory: !0
                    });
                    const i = new URLSearchParams(window.location.hash.slice(1)).get(d.N.addLibrary) || new URLSearchParams(window.location.search).get(d.O.addLibrary);
                    i && await this.importLibraryFromUrl(i)
                }, this.onResize = qe((() => {
                    this.scene.getElementsIncludingDeleted().forEach((e => Yt(e))), this.setState({})
                })), this.onScroll = _e((() => {
                    const {
                        offsetTop: e,
                        offsetLeft: t
                    } = this.getCanvasOffsets();
                    this.setState((n => n.offsetLeft === t && n.offsetTop === e ? null : {
                        offsetTop: e,
                        offsetLeft: t
                    }))
                }), d.E), this.onCut = qe((e => {
                    var t;
                    (null === (t = this.excalidrawContainerRef.current) || void 0 === t ? void 0 : t.contains(document.activeElement)) && !Te(e.target) && (this.cutAll(), e.preventDefault())
                })), this.onCopy = qe((e => {
                    var t;
                    (null === (t = this.excalidrawContainerRef.current) || void 0 === t ? void 0 : t.contains(document.activeElement)) && !Te(e.target) && (this.copyAll(), e.preventDefault())
                })), this.cutAll = () => {
                    this.copyAll(), this.actionManager.executeAction(Da)
                }, this.copyAll = () => {
                    xl(this.scene.getElements(), this.state)
                }, this.onTapStart = e => {
                    if (!vd) return vd = !0, clearTimeout(fd), void(fd = window.setTimeout(Td.resetTapTwice, d.H));
                    if (vd && 1 === e.touches.length) {
                        const [t] = e.touches;
                        this.handleCanvasDoubleClick({
                            clientX: t.clientX,
                            clientY: t.clientY
                        }), vd = !1, clearTimeout(fd)
                    }
                    e.preventDefault(), 2 === e.touches.length && this.setState({
                        selectedElementIds: {}
                    })
                }, this.onTapEnd = e => {
                    e.touches.length > 0 && this.setState({
                        previousSelectedElementIds: {},
                        selectedElementIds: this.state.previousSelectedElementIds
                    })
                }, this.pasteFromClipboard = qe((async e => {
                    var t;
                    const n = document.activeElement;
                    if (!(null === (t = this.excalidrawContainerRef.current) || void 0 === t ? void 0 : t.contains(n))) return;
                    const o = document.elementFromPoint(xd, wd);
                    if (e && (!(o instanceof HTMLCanvasElement) || Te(n))) return;
                    const i = await El(e);
                    if (this.props.onPaste) try {
                        if (!1 === await this.props.onPaste(i, e)) return
                    } catch (s) {
                        console.error(s)
                    }
                    i.errorMessage ? this.setState({
                        errorMessage: i.errorMessage
                    }) : i.spreadsheet ? this.setState({
                        pasteDialog: {
                            data: i.spreadsheet,
                            shown: !0
                        }
                    }) : i.elements ? this.addElementsFromPasteOrLibrary({
                        elements: i.elements,
                        position: "cursor"
                    }) : i.text && this.addTextFromPaste(i.text), this.selectShapeTool("selection"), null === e || void 0 === e || e.preventDefault()
                })), this.addElementsFromPasteOrLibrary = e => {
                    const t = Nr(e.elements, null),
                        [n, o, i, s] = Rt(t),
                        a = De(n, i) / 2,
                        r = De(o, s) / 2,
                        l = "object" === typeof e.position ? e.position.clientX : "cursor" === e.position ? xd : this.state.width / 2 + this.state.offsetLeft,
                        c = "object" === typeof e.position ? e.position.clientY : "cursor" === e.position ? wd : this.state.height / 2 + this.state.offsetTop,
                        {
                            x: d,
                            y: h
                        } = Ve({
                            clientX: l,
                            clientY: c
                        }, this.state),
                        u = d - a,
                        p = h - r,
                        m = new Map,
                        [g, b] = Ot(u, p, this.state.gridSize),
                        y = new Map,
                        v = t.map((e => {
                            const t = _n(this.state.editingGroupId, m, e, {
                                x: e.x + g - n,
                                y: e.y + b - o
                            });
                            return y.set(e.id, t.id), t
                        })),
                        f = [...this.scene.getElementsIncludingDeleted(), ...v];
                    Ci(f, t, y), this.scene.replaceAllElements(f), this.history.resumeRecording(), this.setState(En({ ...this.state,
                        isLibraryOpen: !1,
                        selectedElementIds: v.reduce(((e, t) => (e[t.id] = !0, e)), {}),
                        selectedGroupIds: {}
                    }, this.scene.getElements())), this.selectShapeTool("selection")
                }, this.setAppState = e => {
                    this.setState(e)
                }, this.removePointer = e => {
                    "touch" === e.pointerType && Od && (clearTimeout(Od), Od = 0, kd = !1), Ad.pointers.delete(e.pointerId)
                }, this.toggleLock = () => {
                    this.setState((e => ({
                        elementLocked: !e.elementLocked,
                        elementType: e.elementLocked ? "selection" : e.elementType
                    })))
                }, this.toggleZenMode = () => {
                    this.actionManager.executeAction(rc)
                }, this.toggleStats = () => {
                    this.state.showStats || Object(l.a)("dialog", "stats"), this.actionManager.executeAction(lc)
                }, this.scrollToContent = (e = this.scene.getElements()) => {
                    this.setState({ ...ts(Array.isArray(e) ? e : [e], this.state, this.canvas)
                    })
                }, this.clearToast = () => {
                    this.setState({
                        toastMessage: null
                    })
                }, this.setToastMessage = e => {
                    this.setState({
                        toastMessage: e
                    })
                }, this.restoreFileFromShare = async () => {
                    try {
                        const e = await caches.open("web-share-target"),
                            t = await e.match("shared-file");
                        if (t) {
                            const n = await t.blob();
                            this.loadFileToCanvas(n), await e.delete("shared-file"), window.history.replaceState(null, d.b, window.location.pathname)
                        }
                    } catch (e) {
                        this.setState({
                            errorMessage: e.message
                        })
                    }
                }, this.updateScene = qe((e => {
                    e.commitToHistory && this.history.resumeRecording(), e.appState && this.setState(e.appState), e.elements && this.scene.replaceAllElements(e.elements), e.collaborators && this.setState({
                        collaborators: e.collaborators
                    })
                })), this.onSceneUpdated = () => {
                    this.setState({})
                }, this.updateCurrentCursorPosition = qe((e => {
                    xd = e.clientX, wd = e.clientY
                })), this.onKeyDown = qe((e => {
                    var t;
                    if (("Proxy" in window && (!e.shiftKey && /^[A-Z]$/.test(e.key) || e.shiftKey && /^[a-z]$/.test(e.key)) && (e = new Proxy(e, {
                            get(t, n) {
                                const o = t[n];
                                return "function" === typeof o ? o.bind(t) : "key" === n ? e.shiftKey ? t.key.toUpperCase() : t.key.toLowerCase() : o
                            }
                        })), !(Te(e.target) && e.key !== oe || je(e.key) && (t = e.target, t instanceof HTMLElement && "wysiwyg" === t.dataset.type || t instanceof HTMLBRElement || t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement))) && (e.key === ie && this.setState({
                            showHelpDialog: !0
                        }), !this.actionManager.handleKeyDown(e) && !this.state.viewModeEnabled)) {
                        if (e[ee] && this.state.isBindingEnabled && this.setState({
                                isBindingEnabled: !1
                            }), e.code === D && this.setState({
                                isLibraryOpen: !this.state.isLibraryOpen
                            }), je(e.key)) {
                            const t = this.state.gridSize && (e.shiftKey ? d.n : this.state.gridSize) || (e.shiftKey ? d.m : d.n),
                                n = this.scene.getElements().filter((e => this.state.selectedElementIds[e.id]));
                            let o = 0,
                                i = 0;
                            e.key === Z ? o = -t : e.key === q ? o = t : e.key === J ? i = -t : e.key === X && (i = t), n.forEach((e => {
                                pn(e, {
                                    x: e.x + o,
                                    y: e.y + i
                                }), gi(e, {
                                    simultaneouslyUpdated: n
                                })
                            })), this.maybeSuggestBindingForAll(n), e.preventDefault()
                        } else if (e.key === ne) {
                            const t = Qi(this.scene.getElements(), this.state);
                            if (1 === t.length && ut(t[0])) this.state.editingLinearElement && this.state.editingLinearElement.elementId === t[0].id || (this.history.resumeRecording(), this.setState({
                                editingLinearElement: new ti(t[0], this.scene)
                            }));
                            else if (1 === t.length && !ut(t[0])) {
                                const n = t[0];
                                return this.startTextEditing({
                                    sceneX: n.x + n.width / 2,
                                    sceneY: n.y + n.height / 2
                                }), void e.preventDefault()
                            }
                        } else if (!e.ctrlKey && !e.altKey && !e.metaKey && null === this.state.draggingElement) {
                            const t = (e => {
                                const t = yc.find(((t, n) => e === (n + 1).toString() || ("string" === typeof t.key ? t.key === e : t.key.includes(e))));
                                return (null === t || void 0 === t ? void 0 : t.value) || null
                            })(e.key);
                            t ? this.selectShapeTool(t) : e.key === me && this.toggleLock()
                        }
                        if (e.key === se && 0 === Ad.pointers.size && (jd = !0, ze(this.canvas, d.d.GRABBING)), e.key === de || e.key === be) {
                            const t = Qi(this.scene.getElements(), this.state);
                            if ("selection" === this.state.elementType && !t.length) return;
                            e.key === de && (ns(this.state.elementType) || t.some((e => ns(e.type)))) && this.setState({
                                openPopup: "backgroundColorPicker"
                            }), e.key === be && this.setState({
                                openPopup: "strokeColorPicker"
                            })
                        }
                    }
                })), this.onKeyUp = qe((e => {
                    if (e.key === se && (this.state.viewModeEnabled ? ze(this.canvas, d.d.GRAB) : "selection" === this.state.elementType ? Re(this.canvas) : (Ne(this.canvas, this.state.elementType), this.setState({
                            selectedElementIds: {},
                            selectedGroupIds: {},
                            editingGroupId: null
                        })), jd = !1), e[ee] || this.state.isBindingEnabled || this.setState({
                            isBindingEnabled: !0
                        }), je(e.key)) {
                        const e = Qi(this.scene.getElements(), this.state);
                        ni(this.state) ? si(e) : hi(e), this.setState({
                            suggestedBindings: []
                        })
                    }
                })), this.onGestureStart = qe((e => {
                    e.preventDefault(), this.setState({
                        selectedElementIds: {}
                    }), Ad.initialScale = this.state.zoom.value
                })), this.onGestureChange = qe((e => {
                    if (e.preventDefault(), 2 === Ad.pointers.size) return;
                    const t = Ad.initialScale;
                    t && this.setState((({
                        zoom: n,
                        offsetLeft: o,
                        offsetTop: i
                    }) => ({
                        zoom: cs(ds(t * e.scale), n, {
                            left: o,
                            top: i
                        }, {
                            x: xd,
                            y: wd
                        })
                    })))
                })), this.onGestureEnd = qe((e => {
                    e.preventDefault(), this.setState({
                        previousSelectedElementIds: {},
                        selectedElementIds: this.state.previousSelectedElementIds
                    }), Ad.initialScale = null
                })), this.startTextEditing = ({
                    sceneX: e,
                    sceneY: t,
                    insertAtParentCenter: n = !0
                }) => {
                    const o = this.getTextElementAtPosition(e, t),
                        i = n && this.getTextWysiwygSnappedToCenterPosition(e, t, this.state, this.canvas, window.devicePixelRatio),
                        s = o || Tn({
                            x: i ? i.elementCenterX : e,
                            y: i ? i.elementCenterY : t,
                            strokeColor: this.state.currentItemStrokeColor,
                            backgroundColor: this.state.currentItemBackgroundColor,
                            fillStyle: this.state.currentItemFillStyle,
                            strokeWidth: this.state.currentItemStrokeWidth,
                            strokeStyle: this.state.currentItemStrokeStyle,
                            roughness: this.state.currentItemRoughness,
                            opacity: this.state.currentItemOpacity,
                            strokeSharpness: this.state.currentItemStrokeSharpness,
                            text: "",
                            fontSize: this.state.currentItemFontSize,
                            fontFamily: this.state.currentItemFontFamily,
                            textAlign: i ? "center" : this.state.currentItemTextAlign,
                            verticalAlign: i ? "middle" : d.k
                        });
                    this.setState({
                        editingElement: s
                    }), o ? i && "center" === s.textAlign || pn(s, {
                        verticalAlign: d.k
                    }) : (this.scene.replaceAllElements([...this.scene.getElementsIncludingDeleted(), s]), i || pn(s, {
                        y: s.y - s.baseline / 2
                    })), this.setState({
                        editingElement: s
                    }), this.handleTextWysiwyg(s, {
                        isExistingElement: !!o
                    })
                }, this.handleCanvasDoubleClick = e => {
                    if (this.state.multiElement) return;
                    if ("selection" !== this.state.elementType) return;
                    const t = Qi(this.scene.getElements(), this.state);
                    if (1 === t.length && ut(t[0])) return void(this.state.editingLinearElement && this.state.editingLinearElement.elementId === t[0].id || (this.history.resumeRecording(), this.setState({
                        editingLinearElement: new ti(t[0], this.scene)
                    })));
                    Re(this.canvas);
                    const {
                        x: n,
                        y: o
                    } = Ve(e, this.state);
                    if (jn(this.state).length > 0) {
                        const e = this.getElementAtPosition(n, o),
                            t = e && ((e, t) => e.groupIds.find((e => t[e])))(e, this.state.selectedGroupIds);
                        if (t) return void this.setState((n => En({ ...n,
                            editingGroupId: t,
                            selectedElementIds: {
                                [e.id]: !0
                            },
                            selectedGroupIds: {}
                        }, this.scene.getElements())))
                    }
                    Re(this.canvas), e[ee] || this.state.viewModeEnabled || this.startTextEditing({
                        sceneX: n,
                        sceneY: o,
                        insertAtParentCenter: !e.altKey
                    })
                }, this.handleCanvasPointerMove = e => {
                    this.savePointer(e.clientX, e.clientY, this.state.cursorButton), Ad.pointers.has(e.pointerId) && Ad.pointers.set(e.pointerId, {
                        x: e.clientX,
                        y: e.clientY
                    });
                    const t = Ad.initialScale;
                    if (2 === Ad.pointers.size && Ad.lastCenter && t && Ad.initialDistance) {
                        const e = uc(Ad.pointers),
                            n = e.x - Ad.lastCenter.x,
                            o = e.y - Ad.lastCenter.y;
                        Ad.lastCenter = e;
                        const i = pc(Array.from(Ad.pointers.values())) / Ad.initialDistance;
                        this.setState((({
                            zoom: s,
                            scrollX: a,
                            scrollY: r,
                            offsetLeft: l,
                            offsetTop: c
                        }) => ({
                            scrollX: a + n / s.value,
                            scrollY: r + o / s.value,
                            zoom: cs(ds(t * i), s, {
                                left: l,
                                top: c
                            }, e),
                            shouldCacheIgnoreZoom: !0
                        }))), this.resetShouldCacheIgnoreZoomDebounced()
                    } else Ad.lastCenter = Ad.initialDistance = Ad.initialScale = null;
                    if (jd || Ed || Sd) return;
                    const n = qi(Cd, e.clientX - this.state.offsetLeft, e.clientY - this.state.offsetTop).isOverEither;
                    this.state.draggingElement || this.state.multiElement || (n ? Re(this.canvas) : Ne(this.canvas, this.state.elementType));
                    const o = Ve(e, this.state),
                        {
                            x: i,
                            y: s
                        } = o;
                    if (this.state.editingLinearElement && !this.state.editingLinearElement.isDragging) {
                        const t = ti.handlePointerMove(e, i, s, this.state.editingLinearElement, this.state.gridSize);
                        t !== this.state.editingLinearElement && this.setState({
                            editingLinearElement: t
                        }), null != t.lastUncommittedPoint ? this.maybeSuggestBindingAtCursor(o) : this.setState({
                            suggestedBindings: []
                        })
                    }
                    if (gt(this.state.elementType)) {
                        const {
                            draggingElement: e
                        } = this.state;
                        mt(e) ? this.maybeSuggestBindingForLinearElementAtCursor(e, "end", o, this.state.startBoundElement) : this.maybeSuggestBindingAtCursor(o)
                    }
                    if (this.state.multiElement) {
                        const {
                            multiElement: e
                        } = this.state, {
                            x: t,
                            y: n
                        } = e, {
                            points: o,
                            lastCommittedPoint: a
                        } = e, r = o[o.length - 1];
                        return Ne(this.canvas, this.state.elementType), void(r === a ? xt(i - t, s - n, r[0], r[1]) >= d.w ? pn(e, {
                            points: [...o, [i - t, s - n]]
                        }) : ze(this.canvas, d.d.POINTER) : o.length > 2 && a && xt(i - t, s - n, a[0], a[1]) < d.w ? (ze(this.canvas, d.d.POINTER), pn(e, {
                            points: o.slice(0, -1)
                        })) : (wt(o, this.state.zoom.value) && ze(this.canvas, d.d.POINTER), pn(e, {
                            points: [...o.slice(0, -1), [i - t, s - n]]
                        })))
                    }
                    if (Boolean(e.buttons) || "selection" !== this.state.elementType && "text" !== this.state.elementType) return;
                    const a = this.scene.getElements(),
                        r = Qi(a, this.state);
                    if (1 !== r.length || n || this.state.editingLinearElement) {
                        if (r.length > 1 && !n) {
                            const t = Qo(Rt(r), i, s, this.state.zoom, e.pointerType);
                            if (t) return void ze(this.canvas, ei({
                                transformHandleType: t
                            }))
                        }
                    } else {
                        const t = Jo(a, this.state, i, s, this.state.zoom, e.pointerType);
                        if (t && t.transformHandleType) return void ze(this.canvas, ei(t))
                    }
                    const l = this.getElementAtPosition(o.x, o.y);
                    "text" === this.state.elementType ? ze(this.canvas, ct(l) ? d.d.TEXT : d.d.CROSSHAIR) : this.state.viewModeEnabled ? ze(this.canvas, d.d.GRAB) : n || e[ee] || !l && !this.isHittingCommonBoundingBoxOfSelectedElements(o, r) ? ze(this.canvas, d.d.AUTO) : ze(this.canvas, d.d.MOVE)
                }, this.handleTouchMove = e => {
                    kd = !0
                }, this.handleCanvasPointerDown = e => {
                    const t = document.getSelection();
                    if ((null === t || void 0 === t ? void 0 : t.anchorNode) && t.removeAllRanges(), this.maybeOpenContextMenuAfterPointerDownOnTouchDevices(e), this.maybeCleanupAfterMissingPointerUp(e), Ed) return;
                    if (this.setState({
                            lastPointerDownWith: e.pointerType,
                            cursorButton: "down"
                        }), this.savePointer(e.clientX, e.clientY, "down"), this.handleCanvasPanUsingWheelOrSpaceDrag(e)) return;
                    if (e.button !== d.D.MAIN && e.button !== d.D.TOUCH) return;
                    if (this.updateGestureOnPointerDown(e), Ad.pointers.size > 1) return;
                    const n = this.initialPointerDownState(e);
                    if (this.handleDraggingScrollBar(e, n)) return;
                    if (this.clearSelectionIfNotUsingSelection(), this.updateBindingEnabledOnPointerMove(e), this.handleSelectionOnPointerDown(e, n)) return;
                    if ("text" === this.state.elementType) return void this.handleTextOnPointerDown(e, n);
                    "arrow" === this.state.elementType || "line" === this.state.elementType ? this.handleLinearElementOnPointerDown(e, this.state.elementType, n) : "freedraw" === this.state.elementType ? this.handleFreeDrawElementOnPointerDown(e, this.state.elementType, n) : this.createGenericElementOnPointerDown(this.state.elementType, n);
                    const o = this.onPointerMoveFromPointerDownHandler(n),
                        i = this.onPointerUpFromPointerDownHandler(n),
                        s = this.onKeyDownFromPointerDownHandler(n),
                        a = this.onKeyUpFromPointerDownHandler(n);
                    Id = i, this.state.viewModeEnabled || (window.addEventListener(d.p.POINTER_MOVE, o), window.addEventListener(d.p.POINTER_UP, i), window.addEventListener(d.p.KEYDOWN, s), window.addEventListener(d.p.KEYUP, a), n.eventListeners.onMove = o, n.eventListeners.onUp = i, n.eventListeners.onKeyUp = a, n.eventListeners.onKeyDown = s)
                }, this.maybeOpenContextMenuAfterPointerDownOnTouchDevices = e => {
                    "touch" === e.pointerType && (kd = !1, Od ? kd = !0 : Od = window.setTimeout((() => {
                        Od = 0, kd || this.handleCanvasContextMenu(e)
                    }), d.M))
                }, this.handleCanvasPanUsingWheelOrSpaceDrag = e => {
                    if (0 !== Ad.pointers.size || !(e.button === d.D.WHEEL || e.button === d.D.MAIN && jd || this.state.viewModeEnabled)) return !1;
                    Ed = !0;
                    let t = !1;
                    const n = /Linux/.test(window.navigator.platform);
                    ze(this.canvas, d.d.GRABBING);
                    let {
                        clientX: o,
                        clientY: i
                    } = e;
                    const s = qe((e => {
                            const s = o - e.clientX,
                                a = i - e.clientY;
                            if (o = e.clientX, i = e.clientY, n && !t && (Math.abs(s) > 1 || Math.abs(a) > 1)) {
                                t = !0;
                                const e = t => {
                                        document.body.removeEventListener(d.p.PASTE, e), t.stopPropagation()
                                    },
                                    n = () => {
                                        setTimeout((() => {
                                            document.body.removeEventListener(d.p.PASTE, e), window.removeEventListener(d.p.POINTER_UP, n)
                                        }), 100)
                                    };
                                document.body.addEventListener(d.p.PASTE, e), window.addEventListener(d.p.POINTER_UP, n)
                            }
                            this.setState({
                                scrollX: this.state.scrollX - s / this.state.zoom.value,
                                scrollY: this.state.scrollY - a / this.state.zoom.value
                            })
                        })),
                        a = qe(Id = () => {
                            Id = null, Ed = !1, jd || (this.state.viewModeEnabled ? ze(this.canvas, d.d.GRAB) : Ne(this.canvas, this.state.elementType)), this.setState({
                                cursorButton: "up"
                            }), this.savePointer(e.clientX, e.clientY, "up"), window.removeEventListener(d.p.POINTER_MOVE, s), window.removeEventListener(d.p.POINTER_UP, a), window.removeEventListener(d.p.BLUR, a)
                        });
                    return window.addEventListener(d.p.BLUR, a), window.addEventListener(d.p.POINTER_MOVE, s, {
                        passive: !0
                    }), window.addEventListener(d.p.POINTER_UP, a), !0
                }, this.clearSelectionIfNotUsingSelection = () => {
                    "selection" !== this.state.elementType && this.setState({
                        selectedElementIds: {},
                        selectedGroupIds: {},
                        editingGroupId: null
                    })
                }, this.handleSelectionOnPointerDown = (e, t) => {
                    if ("selection" === this.state.elementType) {
                        const o = this.scene.getElements(),
                            i = Qi(o, this.state);
                        if (1 !== i.length || this.state.editingLinearElement) i.length > 1 && (t.resize.handleType = Qo(Rt(i), t.origin.x, t.origin.y, this.state.zoom, e.pointerType));
                        else {
                            const n = Jo(o, this.state, t.origin.x, t.origin.y, this.state.zoom, e.pointerType);
                            null != n && (this.setState({
                                resizingElement: n.element
                            }), t.resize.handleType = n.transformHandleType)
                        }
                        if (t.resize.handleType) ze(this.canvas, ei({
                            transformHandleType: t.resize.handleType
                        })), t.resize.isResizing = !0, t.resize.offset = Ke(((e, t, n, o) => {
                            const [i, s, a, r] = 1 === t.length ? At(t[0]) : Rt(t), l = (i + a) / 2, c = (s + r) / 2, d = 1 === t.length ? t[0].angle : 0;
                            switch ([n, o] = yt(n, o, l, c, -d), e) {
                                case "n":
                                    return yt(n - (i + a) / 2, o - s, 0, 0, d);
                                case "s":
                                    return yt(n - (i + a) / 2, o - r, 0, 0, d);
                                case "w":
                                    return yt(n - i, o - (s + r) / 2, 0, 0, d);
                                case "e":
                                    return yt(n - a, o - (s + r) / 2, 0, 0, d);
                                case "nw":
                                    return yt(n - i, o - s, 0, 0, d);
                                case "ne":
                                    return yt(n - a, o - s, 0, 0, d);
                                case "sw":
                                    return yt(n - i, o - r, 0, 0, d);
                                case "se":
                                    return yt(n - a, o - r, 0, 0, d);
                                default:
                                    return [0, 0]
                            }
                        })(t.resize.handleType, i, t.origin.x, t.origin.y)), 1 === i.length && ut(i[0]) && 2 === i[0].points.length && (t.resize.arrowDirection = ((e, t) => {
                            const [, [n, o]] = t.points;
                            return "nw" === e && (n < 0 || o < 0) || "ne" === e && n >= 0 || "sw" === e && n <= 0 || "se" === e && (n > 0 || o > 0) ? "end" : "origin"
                        })(t.resize.handleType, i[0]));
                        else {
                            var n;
                            if (this.state.editingLinearElement) {
                                const n = ti.handlePointerDown(e, this.state, (e => this.setState(e)), this.history, t.origin);
                                if (n.hitElement && (t.hit.element = n.hitElement), n.didAddPoint) return !0
                            }
                            t.hit.element = null !== (n = t.hit.element) && void 0 !== n ? n : this.getElementAtPosition(t.origin.x, t.origin.y), t.hit.allHitElements = this.getElementsAtPosition(t.origin.x, t.origin.y);
                            const o = t.hit.element,
                                i = t.hit.allHitElements.some((e => this.isASelectedElement(e)));
                            if (null !== o && i || e.shiftKey || t.hit.hasHitCommonBoundingBoxOfSelectedElements || this.clearSelection(o), null != o) {
                                if (e[ee]) return this.state.selectedElementIds[o.id] || (t.hit.wasAddedToSelection = !0), this.setState((e => {
                                    return { ...(t = e, n = o, { ...t,
                                            editingGroupId: n.groupIds.length ? n.groupIds[0] : null,
                                            selectedGroupIds: {},
                                            selectedElementIds: {
                                                [n.id]: !0
                                            }
                                        }),
                                        previousSelectedElementIds: this.state.selectedElementIds
                                    };
                                    var t, n
                                })), !1;
                                this.state.selectedElementIds[o.id] || (this.state.editingGroupId && !Sn(o, this.state.editingGroupId) && this.setState({
                                    selectedElementIds: {},
                                    selectedGroupIds: {},
                                    editingGroupId: null
                                }), i || t.hit.hasHitCommonBoundingBoxOfSelectedElements || (this.setState((e => En({ ...e,
                                    selectedElementIds: { ...e.selectedElementIds,
                                        [o.id]: !0
                                    }
                                }, this.scene.getElements()))), t.hit.wasAddedToSelection = !0))
                            }
                            this.setState({
                                previousSelectedElementIds: this.state.selectedElementIds
                            })
                        }
                    }
                    return !1
                }, this.handleTextOnPointerDown = (e, t) => {
                    var n;
                    "text" !== (null === (n = this.state.editingElement) || void 0 === n ? void 0 : n.type) && (this.startTextEditing({
                        sceneX: t.origin.x,
                        sceneY: t.origin.y,
                        insertAtParentCenter: !e.altKey
                    }), Re(this.canvas), this.state.elementLocked || this.setState({
                        elementType: "selection"
                    }))
                }, this.handleFreeDrawElementOnPointerDown = (e, t, n) => {
                    const [o, i] = Ot(n.origin.x, n.origin.y, null), s = (a = {
                        type: t,
                        x: o,
                        y: i,
                        strokeColor: this.state.currentItemStrokeColor,
                        backgroundColor: this.state.currentItemBackgroundColor,
                        fillStyle: this.state.currentItemFillStyle,
                        strokeWidth: this.state.currentItemStrokeWidth,
                        strokeStyle: this.state.currentItemStrokeStyle,
                        roughness: this.state.currentItemRoughness,
                        opacity: this.state.currentItemOpacity,
                        strokeSharpness: this.state.currentItemLinearStrokeSharpness,
                        simulatePressure: .5 === e.pressure
                    }, { ...kn(a.type, a),
                        points: a.points || [],
                        pressures: [],
                        simulatePressure: a.simulatePressure,
                        lastCommittedPoint: null
                    });
                    var a;
                    this.setState((e => ({
                        selectedElementIds: { ...e.selectedElementIds,
                            [s.id]: !1
                        }
                    })));
                    const r = s.simulatePressure ? s.pressures : [...s.pressures, e.pressure];
                    pn(s, {
                        points: [
                            [0, 0]
                        ],
                        pressures: r
                    });
                    const l = pi(n.origin, this.scene);
                    this.scene.replaceAllElements([...this.scene.getElementsIncludingDeleted(), s]), this.setState({
                        draggingElement: s,
                        editingElement: s,
                        startBoundElement: l,
                        suggestedBindings: []
                    })
                }, this.handleLinearElementOnPointerDown = (e, t, n) => {
                    if (this.state.multiElement) {
                        const {
                            multiElement: e
                        } = this.state;
                        if ("line" === e.type && wt(e.points, this.state.zoom.value)) return pn(e, {
                            lastCommittedPoint: e.points[e.points.length - 1]
                        }), void this.actionManager.executeAction(mr);
                        const {
                            x: t,
                            y: o,
                            lastCommittedPoint: i
                        } = e;
                        if (e.points.length > 1 && i && xt(n.origin.x - t, n.origin.y - o, i[0], i[1]) < d.w) return void this.actionManager.executeAction(mr);
                        this.setState((t => ({
                            selectedElementIds: { ...t.selectedElementIds,
                                [e.id]: !0
                            }
                        }))), pn(e, {
                            lastCommittedPoint: e.points[e.points.length - 1]
                        }), ze(this.canvas, d.d.POINTER)
                    } else {
                        const [e, o] = Ot(n.origin.x, n.origin.y, this.state.gridSize), {
                            currentItemStartArrowhead: i,
                            currentItemEndArrowhead: s
                        } = this.state, [a, r] = "arrow" === t ? [i, s] : [null, null], l = Ln({
                            type: t,
                            x: e,
                            y: o,
                            strokeColor: this.state.currentItemStrokeColor,
                            backgroundColor: this.state.currentItemBackgroundColor,
                            fillStyle: this.state.currentItemFillStyle,
                            strokeWidth: this.state.currentItemStrokeWidth,
                            strokeStyle: this.state.currentItemStrokeStyle,
                            roughness: this.state.currentItemRoughness,
                            opacity: this.state.currentItemOpacity,
                            strokeSharpness: this.state.currentItemLinearStrokeSharpness,
                            startArrowhead: a,
                            endArrowhead: r
                        });
                        this.setState((e => ({
                            selectedElementIds: { ...e.selectedElementIds,
                                [l.id]: !1
                            }
                        }))), pn(l, {
                            points: [...l.points, [0, 0]]
                        });
                        const c = pi(n.origin, this.scene);
                        this.scene.replaceAllElements([...this.scene.getElementsIncludingDeleted(), l]), this.setState({
                            draggingElement: l,
                            editingElement: l,
                            startBoundElement: c,
                            suggestedBindings: []
                        })
                    }
                }, this.createGenericElementOnPointerDown = (e, t) => {
                    const [n, o] = Ot(t.origin.x, t.origin.y, this.state.gridSize), i = In({
                        type: e,
                        x: n,
                        y: o,
                        strokeColor: this.state.currentItemStrokeColor,
                        backgroundColor: this.state.currentItemBackgroundColor,
                        fillStyle: this.state.currentItemFillStyle,
                        strokeWidth: this.state.currentItemStrokeWidth,
                        strokeStyle: this.state.currentItemStrokeStyle,
                        roughness: this.state.currentItemRoughness,
                        opacity: this.state.currentItemOpacity,
                        strokeSharpness: this.state.currentItemStrokeSharpness
                    });
                    "selection" === i.type ? this.setState({
                        selectionElement: i,
                        draggingElement: i
                    }) : (this.scene.replaceAllElements([...this.scene.getElementsIncludingDeleted(), i]), this.setState({
                        multiElement: null,
                        draggingElement: i,
                        editingElement: i
                    }))
                }, this.updateBindingEnabledOnPointerMove = e => {
                    const t = (e => !e[ee])(e);
                    this.state.isBindingEnabled !== t && this.setState({
                        isBindingEnabled: t
                    })
                }, this.maybeSuggestBindingAtCursor = e => {
                    const t = pi(e, this.scene);
                    this.setState({
                        suggestedBindings: null != t ? [t] : []
                    })
                }, this.maybeSuggestBindingForLinearElementAtCursor = (e, t, n, o) => {
                    const i = pi(n, this.scene);
                    this.setState({
                        suggestedBindings: null == i || di(e, null === o || void 0 === o ? void 0 : o.id, i) ? [] : [i]
                    })
                }, this.handleCanvasRef = e => {
                    var t, n, o;
                    null !== e ? (this.canvas = e, this.rc = rt.a.canvas(this.canvas), this.canvas.addEventListener(d.p.WHEEL, this.handleWheel, {
                        passive: !1
                    }), this.canvas.addEventListener(d.p.TOUCH_START, this.onTapStart), this.canvas.addEventListener(d.p.TOUCH_END, this.onTapEnd)) : (null === (t = this.canvas) || void 0 === t || t.removeEventListener(d.p.WHEEL, this.handleWheel), null === (n = this.canvas) || void 0 === n || n.removeEventListener(d.p.TOUCH_START, this.onTapStart), null === (o = this.canvas) || void 0 === o || o.removeEventListener(d.p.TOUCH_END, this.onTapEnd))
                }, this.handleAppOnDrop = async e => {
                    var t, n;
                    try {
                        const t = e.dataTransfer.files[0];
                        if ("image/png" === (null === t || void 0 === t ? void 0 : t.type) || "image/svg+xml" === (null === t || void 0 === t ? void 0 : t.type)) {
                            if (Ar.c) try {
                                const n = e.dataTransfer.items[0];
                                t.handle = await n.getAsFileSystemHandle()
                            } catch (s) {
                                console.warn(s.name, s.message)
                            }
                            const {
                                elements: n,
                                appState: o
                            } = await Gr(t, this.state, this.scene.getElementsIncludingDeleted());
                            return void this.syncActionResult({
                                elements: n,
                                appState: { ...o || this.state,
                                    isLoading: !1
                                },
                                commitToHistory: !0
                            })
                        }
                    } catch (s) {
                        return this.setState({
                            isLoading: !1,
                            errorMessage: s.message
                        })
                    }
                    const o = e.dataTransfer.getData(d.y.excalidrawlib);
                    if ("" !== o) return void this.addElementsFromPasteOrLibrary({
                        elements: JSON.parse(o),
                        position: e
                    });
                    const i = null === (t = e.dataTransfer) || void 0 === t ? void 0 : t.files[0];
                    if ((null === i || void 0 === i ? void 0 : i.type) === d.y.excalidrawlib || (null === i || void 0 === i || null === (n = i.name) || void 0 === n ? void 0 : n.endsWith(".excalidrawlib"))) this.library.importLibrary(i).then((() => {
                        this.setState({
                            isLibraryOpen: !1
                        }), this.setState({
                            isLibraryOpen: !0
                        })
                    })).catch((e => this.setState({
                        isLoading: !1,
                        errorMessage: e.message
                    })));
                    else {
                        if (this.setState({
                                isLoading: !0
                            }), Ar.c) try {
                            const t = e.dataTransfer.items[0];
                            i.handle = await t.getAsFileSystemHandle()
                        } catch (s) {
                            console.warn(s.name, s.message)
                        }
                        await this.loadFileToCanvas(i)
                    }
                }, this.loadFileToCanvas = e => {
                    Gr(e, this.state, this.scene.getElementsIncludingDeleted()).then((({
                        elements: e,
                        appState: t
                    }) => this.syncActionResult({
                        elements: e,
                        appState: { ...t || this.state,
                            isLoading: !1
                        },
                        commitToHistory: !0
                    }))).catch((e => {
                        this.setState({
                            isLoading: !1,
                            errorMessage: e.message
                        })
                    }))
                }, this.handleCanvasContextMenu = e => {
                    e.preventDefault();
                    const {
                        x: t,
                        y: n
                    } = Ve(e, this.state), o = this.getElementAtPosition(t, n, {
                        preferSelected: !0
                    }), i = o ? "element" : "canvas", s = this.excalidrawContainerRef.current, {
                        top: a,
                        left: r
                    } = s.getBoundingClientRect(), l = e.clientX - r, c = e.clientY - a;
                    o && !this.state.selectedElementIds[o.id] ? this.setState({
                        selectedElementIds: {
                            [o.id]: !0
                        }
                    }, (() => {
                        this._openContextMenu({
                            top: c,
                            left: l
                        }, i)
                    })) : this._openContextMenu({
                        top: c,
                        left: l
                    }, i)
                }, this.maybeDragNewGenericElement = (e, t) => {
                    const n = this.state.draggingElement,
                        o = e.lastCoords;
                    if (n)
                        if ("selection" === n.type) Ni(n, this.state.elementType, e.origin.x, e.origin.y, o.x, o.y, De(e.origin.x, o.x), De(e.origin.y, o.y), Se(t), Ee(t));
                        else {
                            const [i, s] = Ot(o.x, o.y, this.state.gridSize);
                            Ni(n, this.state.elementType, e.originInGrid.x, e.originInGrid.y, i, s, De(e.originInGrid.x, i), De(e.originInGrid.y, s), Se(t), Ee(t)), this.maybeSuggestBindingForAll([n])
                        }
                }, this.maybeHandleResize = (e, t) => {
                    const n = Qi(this.scene.getElements(), this.state),
                        o = e.resize.handleType;
                    this.setState({
                        isResizing: o && "rotation" !== o,
                        isRotating: "rotation" === o
                    });
                    const i = e.lastCoords,
                        [s, a] = Ot(i.x - e.resize.offset.x, i.y - e.resize.offset.y, this.state.gridSize);
                    return !!((e, t, n, o, i, s, a, r, l, c, d) => {
                        if (1 === n.length) {
                            const [c] = n;
                            return "rotation" === t ? (Ti(c, r, l, i), gi(c)) : !ut(c) || 2 !== c.points.length || "nw" !== t && "ne" !== t && "sw" !== t && "se" !== t ? !ct(c) || "nw" !== t && "ne" !== t && "sw" !== t && "se" !== t ? t && Di(e.originalElements.get(c.id), a, c, t, s, r, l) : (_i(c, t, s, r, l), gi(c)) : Mi(c, o, i, r, l), !0
                        }
                        if (n.length > 1) {
                            if ("rotation" === t) return zi(e, n, r, l, i, c, d), !0;
                            if ("nw" === t || "ne" === t || "sw" === t || "se" === t) return Ri(n, t, r, l), !0
                        }
                        return !1
                    })(e, o, n, e.resize.arrowDirection, Ce(t), Ee(t), Se(t), s, a, e.resize.center.x, e.resize.center.y) && (this.maybeSuggestBindingForAll(n), !0)
                }, this._openContextMenu = ({
                    left: e,
                    top: t
                }, n) => {
                    const o = zl.contextItemPredicate(this.actionManager.getElementsIncludingDeleted(), this.actionManager.getAppState()),
                        i = Nl.contextItemPredicate(this.actionManager.getElementsIncludingDeleted(), this.actionManager.getAppState()),
                        s = ql.contextItemPredicate(this.actionManager.getElementsIncludingDeleted(), this.actionManager.getAppState()),
                        a = Jl.contextItemPredicate(this.actionManager.getElementsIncludingDeleted(), this.actionManager.getAppState()),
                        r = "separator",
                        l = this.scene.getElements(),
                        c = [];
                    if (fl && l.length > 0 && c.push(sc), vl && l.length > 0 && c.push(ic), "canvas" === n) {
                        const n = [...c, "undefined" === typeof this.props.gridModeEnabled && ac, "undefined" === typeof this.props.zenModeEnabled && rc, "undefined" === typeof this.props.viewModeEnabled && pd, lc];
                        this.state.viewModeEnabled ? jc.push({
                            options: n,
                            top: t,
                            left: e,
                            actionManager: this.actionManager,
                            appState: this.state,
                            container: this.excalidrawContainerRef.current
                        }) : jc.push({
                            options: [this.isMobile && navigator.clipboard && {
                                name: "paste",
                                perform: (e, t) => (this.pasteFromClipboard(null), {
                                    commitToHistory: !1
                                }),
                                contextItemLabel: "labels.paste"
                            }, this.isMobile && navigator.clipboard && r, fl && l.length > 0 && sc, vl && l.length > 0 && ic, (fl && l.length > 0 || vl && l.length > 0) && r, Za, r, "undefined" === typeof this.props.gridModeEnabled && ac, "undefined" === typeof this.props.zenModeEnabled && rc, "undefined" === typeof this.props.viewModeEnabled && pd, lc],
                            top: t,
                            left: e,
                            actionManager: this.actionManager,
                            appState: this.state,
                            container: this.excalidrawContainerRef.current
                        })
                    } else "element" === n && (this.state.viewModeEnabled ? jc.push({
                        options: [navigator.clipboard && nc, ...c],
                        top: t,
                        left: e,
                        actionManager: this.actionManager,
                        appState: this.state,
                        container: this.excalidrawContainerRef.current
                    }) : jc.push({
                        options: [this.isMobile && oc, this.isMobile && navigator.clipboard && nc, this.isMobile && navigator.clipboard && {
                            name: "paste",
                            perform: (e, t) => (this.pasteFromClipboard(null), {
                                commitToHistory: !1
                            }),
                            contextItemLabel: "labels.paste"
                        }, this.isMobile && r, ...c, r, Pl, _l, r, o && zl, i && Nl, (o || i) && r, Hl, r, Wa, Ka, Ya, Xa, r, s && ql, a && Jl, (s || a) && r, qa, Da],
                        top: t,
                        left: e,
                        actionManager: this.actionManager,
                        appState: this.state,
                        container: this.excalidrawContainerRef.current
                    }))
                }, this.handleWheel = qe((e => {
                    if (e.preventDefault(), Ed) return;
                    const {
                        deltaX: t,
                        deltaY: n
                    } = e, {
                        selectedElementIds: o,
                        previousSelectedElementIds: i
                    } = this.state;
                    if (e.metaKey || e.ctrlKey) {
                        const e = Math.sign(n),
                            t = 10;
                        let s = Math.abs(n);
                        s > t && (s = t), s *= e, 0 !== Object.keys(i).length && setTimeout((() => {
                            this.setState({
                                selectedElementIds: i,
                                previousSelectedElementIds: {}
                            })
                        }), 1e3);
                        let a = this.state.zoom.value - s / 100;
                        return a += Math.log10(Math.max(1, this.state.zoom.value)) * -e, a = Math.round(a * d.R * 100) / (100 * d.R), this.setState((({
                            zoom: e,
                            offsetLeft: t,
                            offsetTop: n
                        }) => ({
                            zoom: cs(ds(a), e, {
                                left: t,
                                top: n
                            }, {
                                x: xd,
                                y: wd
                            }),
                            selectedElementIds: {},
                            previousSelectedElementIds: 0 !== Object.keys(o).length ? o : i,
                            shouldCacheIgnoreZoom: !0
                        }))), void this.resetShouldCacheIgnoreZoomDebounced()
                    }
                    e.shiftKey ? this.setState((({
                        zoom: e,
                        scrollX: o
                    }) => ({
                        scrollX: o - (n || t) / e.value
                    }))) : this.setState((({
                        zoom: e,
                        scrollX: o,
                        scrollY: i
                    }) => ({
                        scrollX: o - t / e.value,
                        scrollY: i - n / e.value
                    })))
                })), this.savePointer = (e, t, n) => {
                    var o, i;
                    if (!e || !t) return;
                    const s = Ve({
                        clientX: e,
                        clientY: t
                    }, this.state);
                    isNaN(s.x) || isNaN(s.y), null === (o = (i = this.props).onPointerUpdate) || void 0 === o || o.call(i, {
                        pointer: s,
                        button: n,
                        pointersMap: Ad.pointers
                    })
                }, this.resetShouldCacheIgnoreZoomDebounced = _e((() => {
                    this.unmounted || this.setState({
                        shouldCacheIgnoreZoom: !1
                    })
                }), 300), this.updateDOMRect = e => {
                    var t;
                    if (null === (t = this.excalidrawContainerRef) || void 0 === t ? void 0 : t.current) {
                        const t = this.excalidrawContainerRef.current,
                            {
                                width: n,
                                height: o,
                                left: i,
                                top: s
                            } = t.getBoundingClientRect(),
                            {
                                width: a,
                                height: r,
                                offsetTop: l,
                                offsetLeft: c
                            } = this.state;
                        if (n === a && o === r && i === c && s === l) return void(e && e());
                        this.setState({
                            width: n,
                            height: o,
                            offsetLeft: i,
                            offsetTop: s
                        }, (() => {
                            e && e()
                        }))
                    }
                }, this.refresh = () => {
                    this.setState({ ...this.getCanvasOffsets()
                    })
                };
                const t = et(),
                    {
                        excalidrawRef: n,
                        viewModeEnabled: o = !1,
                        zenModeEnabled: s = !1,
                        gridModeEnabled: a = !1,
                        theme: r = t.theme,
                        name: c = t.name
                    } = e;
                if (this.state = { ...t,
                        theme: r,
                        isLoading: !0,
                        ...this.getCanvasOffsets(),
                        viewModeEnabled: o,
                        zenModeEnabled: s,
                        gridSize: a ? d.u : null,
                        name: c,
                        width: window.innerWidth,
                        height: window.innerHeight
                    }, this.id = Object(lt.a)(), n) {
                    var h;
                    const e = "current" in n && (null === (h = n.current) || void 0 === h ? void 0 : h.readyPromise) || Ze(),
                        t = {
                            ready: !0,
                            readyPromise: e,
                            updateScene: this.updateScene,
                            resetScene: this.resetScene,
                            getSceneElementsIncludingDeleted: this.getSceneElementsIncludingDeleted,
                            history: {
                                clear: this.resetHistory
                            },
                            scrollToContent: this.scrollToContent,
                            getSceneElements: this.getSceneElements,
                            getAppState: () => this.state,
                            refresh: this.refresh,
                            importLibrary: this.importLibraryFromUrl,
                            setToastMessage: this.setToastMessage,
                            id: this.id
                        };
                    "function" === typeof n ? n(t) : n.current = t, e.resolve(t)
                }
                var u;
                this.excalidrawContainerValue = {
                    container: this.excalidrawContainerRef.current,
                    id: this.id
                }, this.scene = new ln, this.library = new hc(this), this.history = new bc, this.actionManager = new dc(this.syncActionResult, (() => this.state), (() => this.scene.getElementsIncludingDeleted()), this), this.actionManager.registerAll(La), this.actionManager.registerAction((u = this.history, {
                    name: "undo",
                    perform: (e, t) => cc(e, t, (() => u.undoOnce())),
                    keyTest: e => e[ee] && e.key.toLowerCase() === we && !e.shiftKey,
                    PanelComponent: ({
                        updateData: e,
                        data: t
                    }) => Object(hs.jsx)(us, {
                        type: "button",
                        icon: Ls,
                        "aria-label": w("buttons.undo"),
                        onClick: e,
                        size: (null === t || void 0 === t ? void 0 : t.size) || "medium"
                    }),
                    commitToHistory: () => !1
                })), this.actionManager.registerAction((e => ({
                    name: "redo",
                    perform: (t, n) => cc(t, n, (() => e.redoOnce())),
                    keyTest: e => e[ee] && e.shiftKey && e.key.toLowerCase() === we || C && e.ctrlKey && !e.shiftKey && e.key === xe,
                    PanelComponent: ({
                        updateData: e,
                        data: t
                    }) => Object(hs.jsx)(us, {
                        type: "button",
                        icon: Ps,
                        "aria-label": w("buttons.redo"),
                        onClick: e,
                        size: (null === t || void 0 === t ? void 0 : t.size) || "medium"
                    }),
                    commitToHistory: () => !1
                }))(this.history))
            }
            renderCanvas() {
                const e = window.devicePixelRatio,
                    {
                        width: t,
                        height: n,
                        viewModeEnabled: o
                    } = this.state,
                    i = t * e,
                    s = n * e;
                return o ? Object(hs.jsx)("canvas", {
                    className: "excalidraw__canvas",
                    style: {
                        width: t,
                        height: n,
                        cursor: d.d.GRAB
                    },
                    width: i,
                    height: s,
                    ref: this.handleCanvasRef,
                    onContextMenu: this.handleCanvasContextMenu,
                    onPointerMove: this.handleCanvasPointerMove,
                    onPointerUp: this.removePointer,
                    onPointerCancel: this.removePointer,
                    onTouchMove: this.handleTouchMove,
                    onPointerDown: this.handleCanvasPointerDown,
                    children: w("labels.drawingCanvas")
                }) : Object(hs.jsx)("canvas", {
                    className: "excalidraw__canvas",
                    style: {
                        width: t,
                        height: n
                    },
                    width: i,
                    height: s,
                    ref: this.handleCanvasRef,
                    onContextMenu: this.handleCanvasContextMenu,
                    onPointerDown: this.handleCanvasPointerDown,
                    onDoubleClick: this.handleCanvasDoubleClick,
                    onPointerMove: this.handleCanvasPointerMove,
                    onPointerUp: this.removePointer,
                    onPointerCancel: this.removePointer,
                    onTouchMove: this.handleTouchMove,
                    children: w("labels.drawingCanvas")
                })
            }
            render() {
                var e, t;
                const {
                    zenModeEnabled: n,
                    viewModeEnabled: o
                } = this.state, {
                    onCollabButtonClick: i,
                    renderTopRightUI: s,
                    renderFooter: a,
                    renderCustomStats: r
                } = this.props;
                return Object(hs.jsx)("div", {
                    className: Object(st.a)("excalidraw excalidraw-container", {
                        "excalidraw--view-mode": o,
                        "excalidraw--mobile": this.isMobile
                    }),
                    ref: this.excalidrawContainerRef,
                    onDrop: this.handleAppOnDrop,
                    tabIndex: 0,
                    onKeyDown: this.props.handleKeyboardGlobally ? void 0 : this.onKeyDown,
                    children: Object(hs.jsx)(bd.Provider, {
                        value: this.excalidrawContainerValue,
                        children: Object(hs.jsxs)(md.Provider, {
                            value: this.isMobile,
                            children: [Object(hs.jsx)(dd, {
                                canvas: this.canvas,
                                appState: this.state,
                                setAppState: this.setAppState,
                                actionManager: this.actionManager,
                                elements: this.scene.getElements(),
                                onCollabButtonClick: i,
                                onLockToggle: this.toggleLock,
                                onInsertElements: e => this.addElementsFromPasteOrLibrary({
                                    elements: e,
                                    position: "center"
                                }),
                                zenModeEnabled: n,
                                toggleZenMode: this.toggleZenMode,
                                langCode: f().code,
                                isCollaborating: this.props.isCollaborating || !1,
                                renderTopRightUI: s,
                                renderCustomFooter: a,
                                viewModeEnabled: o,
                                showExitZenModeBtn: "undefined" === typeof(null === (e = this.props) || void 0 === e ? void 0 : e.zenModeEnabled) && n,
                                showThemeBtn: "undefined" === typeof(null === (t = this.props) || void 0 === t ? void 0 : t.theme) && this.props.UIOptions.canvasActions.theme,
                                libraryReturnUrl: this.props.libraryReturnUrl,
                                UIOptions: this.props.UIOptions,
                                focusContainer: this.focusContainer,
                                library: this.library,
                                id: this.id
                            }), Object(hs.jsx)("div", {
                                className: "excalidraw-textEditorContainer"
                            }), Object(hs.jsx)("div", {
                                className: "excalidraw-contextMenuContainer"
                            }), this.state.showStats && Object(hs.jsx)(hd, {
                                appState: this.state,
                                setAppState: this.setAppState,
                                elements: this.scene.getElements(),
                                onClose: this.toggleStats,
                                renderCustomStats: r
                            }), null !== this.state.toastMessage && Object(hs.jsx)(ud, {
                                message: this.state.toastMessage,
                                clearToast: this.clearToast
                            }), Object(hs.jsx)("main", {
                                children: this.renderCanvas()
                            })]
                        })
                    })
                })
            }
            async componentDidMount() {
                var e, t;
                if (this.excalidrawContainerValue.container = this.excalidrawContainerRef.current, "production" === d.o.TEST || "production" === d.o.DEVELOPMENT) {
                    this.setState.bind(this);
                    Object.defineProperties(window.h, {
                        state: {
                            configurable: !0,
                            get: () => this.state
                        },
                        setState: {
                            configurable: !0,
                            value: (...e) => this.setState(...e)
                        },
                        app: {
                            configurable: !0,
                            value: this
                        },
                        history: {
                            configurable: !0,
                            value: this.history
                        }
                    })
                }
                if (this.scene.addCallback(this.onSceneUpdated), this.addEventListeners(), this.excalidrawContainerRef.current && this.focusContainer(), "ResizeObserver" in window && (null === (e = this.excalidrawContainerRef) || void 0 === e ? void 0 : e.current)) this.resizeObserver = new ResizeObserver((() => {
                    const {
                        width: e,
                        height: t
                    } = this.excalidrawContainerRef.current.getBoundingClientRect();
                    this.isMobile = e < d.C || t < d.A && e < d.B, this.updateDOMRect()
                })), null === (t = this.resizeObserver) || void 0 === t || t.observe(this.excalidrawContainerRef.current);
                else if (window.matchMedia) {
                    const e = window.matchMedia("(max-width: ".concat(d.C, "px), (max-height: ").concat(d.A, "px) and (max-width: ").concat(d.B, "px)")),
                        t = () => this.isMobile = e.matches;
                    e.addListener(t), this.detachIsMobileMqHandler = () => e.removeListener(t)
                }
                new URLSearchParams(window.location.search.slice(1)).has("web-share-target") ? this.restoreFileFromShare() : this.updateDOMRect(this.initializeScene)
            }
            componentWillUnmount() {
                var e;
                null === (e = this.resizeObserver) || void 0 === e || e.disconnect(), this.unmounted = !0, this.removeEventListeners(), this.scene.destroy(), clearTimeout(Od), Od = 0
            }
            removeEventListeners() {
                var e, t;
                document.removeEventListener(d.p.POINTER_UP, this.removePointer), document.removeEventListener(d.p.COPY, this.onCopy), document.removeEventListener(d.p.PASTE, this.pasteFromClipboard), document.removeEventListener(d.p.CUT, this.onCut), null === (e = this.nearestScrollableContainer) || void 0 === e || e.removeEventListener(d.p.SCROLL, this.onScroll), document.removeEventListener(d.p.KEYDOWN, this.onKeyDown, !1), document.removeEventListener(d.p.MOUSE_MOVE, this.updateCurrentCursorPosition, !1), document.removeEventListener(d.p.KEYUP, this.onKeyUp), window.removeEventListener(d.p.RESIZE, this.onResize, !1), window.removeEventListener(d.p.UNLOAD, this.onUnload, !1), window.removeEventListener(d.p.BLUR, this.onBlur, !1), window.removeEventListener(d.p.DRAG_OVER, this.disableEvent, !1), window.removeEventListener(d.p.DROP, this.disableEvent, !1), document.removeEventListener(d.p.GESTURE_START, this.onGestureStart, !1), document.removeEventListener(d.p.GESTURE_CHANGE, this.onGestureChange, !1), document.removeEventListener(d.p.GESTURE_END, this.onGestureEnd, !1), null === (t = this.detachIsMobileMqHandler) || void 0 === t || t.call(this)
            }
            addEventListeners() {
                var e, t;
                this.removeEventListeners(), document.addEventListener(d.p.POINTER_UP, this.removePointer), document.addEventListener(d.p.COPY, this.onCopy), this.props.handleKeyboardGlobally && document.addEventListener(d.p.KEYDOWN, this.onKeyDown, !1), document.addEventListener(d.p.KEYUP, this.onKeyUp, {
                    passive: !0
                }), document.addEventListener(d.p.MOUSE_MOVE, this.updateCurrentCursorPosition), null === (e = document.fonts) || void 0 === e || null === (t = e.addEventListener) || void 0 === t || t.call(e, "loadingdone", this.onFontLoaded), document.addEventListener(d.p.GESTURE_START, this.onGestureStart, !1), document.addEventListener(d.p.GESTURE_CHANGE, this.onGestureChange, !1), document.addEventListener(d.p.GESTURE_END, this.onGestureEnd, !1), this.state.viewModeEnabled || (document.addEventListener(d.p.PASTE, this.pasteFromClipboard), document.addEventListener(d.p.CUT, this.onCut), this.props.detectScroll && (this.nearestScrollableContainer = (e => {
                    let t = e.parentElement;
                    for (; t;) {
                        if (t === document.body) return document;
                        const {
                            overflowY: e
                        } = window.getComputedStyle(t);
                        if (t.scrollHeight > t.clientHeight && ("auto" === e || "scroll" === e)) return t;
                        t = t.parentElement
                    }
                    return document
                })(this.excalidrawContainerRef.current), this.nearestScrollableContainer.addEventListener(d.p.SCROLL, this.onScroll)), window.addEventListener(d.p.RESIZE, this.onResize, !1), window.addEventListener(d.p.UNLOAD, this.onUnload, !1), window.addEventListener(d.p.BLUR, this.onBlur, !1), window.addEventListener(d.p.DRAG_OVER, this.disableEvent, !1), window.addEventListener(d.p.DROP, this.disableEvent, !1))
            }
            componentDidUpdate(e, t) {
                var n, o;
                e.langCode !== this.props.langCode && this.updateLanguage(), e.viewModeEnabled !== this.props.viewModeEnabled && this.setState({
                    viewModeEnabled: !!this.props.viewModeEnabled
                }), t.viewModeEnabled !== this.state.viewModeEnabled && (this.addEventListeners(), this.deselectElements()), e.zenModeEnabled !== this.props.zenModeEnabled && this.setState({
                    zenModeEnabled: !!this.props.zenModeEnabled
                }), e.theme !== this.props.theme && this.props.theme && this.setState({
                    theme: this.props.theme
                }), e.gridModeEnabled !== this.props.gridModeEnabled && this.setState({
                    gridSize: this.props.gridModeEnabled ? d.u : null
                }), this.props.name && e.name !== this.props.name && this.setState({
                    name: this.props.name
                }), null === (n = this.excalidrawContainerRef.current) || void 0 === n || n.classList.toggle("theme--dark", "dark" === this.state.theme), this.state.editingLinearElement && !this.state.selectedElementIds[this.state.editingLinearElement.elementId] && setTimeout((() => {
                    this.actionManager.executeAction(mr)
                }));
                const {
                    multiElement: i
                } = t;
                t.elementType !== this.state.elementType && null != i && ni(this.state) && mt(i) && ri(i, this.state, this.scene, Ke(ti.getPointAtIndexGlobalCoordinates(i, -1)));
                const s = {},
                    a = {},
                    r = {},
                    l = {},
                    c = {};
                this.state.collaborators.forEach(((e, t) => {
                    if (e.selectedElementIds)
                        for (const n of Object.keys(e.selectedElementIds)) n in r || (r[n] = []), r[n].push(t);
                    e.pointer && (e.username && (l[t] = e.username), e.userState && (c[t] = e.userState), a[t] = Fe({
                        sceneX: e.pointer.x,
                        sceneY: e.pointer.y
                    }, this.state), s[t] = e.button)
                }));
                const h = this.scene.getElements(),
                    {
                        atLeastOneVisibleElement: u,
                        scrollBars: p
                    } = wr(h.filter((e => !this.state.editingElement || "text" !== this.state.editingElement.type || e.id !== this.state.editingElement.id)), this.state, this.state.selectionElement, window.devicePixelRatio, this.rc, this.canvas, {
                        scrollX: this.state.scrollX,
                        scrollY: this.state.scrollY,
                        viewBackgroundColor: this.state.viewBackgroundColor,
                        zoom: this.state.zoom,
                        remotePointerViewportCoords: a,
                        remotePointerButton: s,
                        remoteSelectedElementIds: r,
                        remotePointerUsernames: l,
                        remotePointerUserStates: c,
                        shouldCacheIgnoreZoom: this.state.shouldCacheIgnoreZoom
                    }, {
                        renderOptimizations: !0,
                        renderScrollbars: !this.isMobile
                    });
                p && (Cd = p);
                const m = "text" !== (null === (o = this.state.editingElement) || void 0 === o ? void 0 : o.type) && (!u && h.length > 0);
                var g, b;
                (this.state.scrolledOutside !== m && this.setState({
                    scrolledOutside: m
                }), this.history.record(this.state, this.scene.getElementsIncludingDeleted()), this.state.isLoading) || (null === (g = (b = this.props).onChange) || void 0 === g || g.call(b, this.scene.getElementsIncludingDeleted(), this.state))
            }
            static resetTapTwice() {
                vd = !1
            }
            addTextFromPaste(e) {
                const {
                    x: t,
                    y: n
                } = Ve({
                    clientX: xd,
                    clientY: wd
                }, this.state), o = Tn({
                    x: t,
                    y: n,
                    strokeColor: this.state.currentItemStrokeColor,
                    backgroundColor: this.state.currentItemBackgroundColor,
                    fillStyle: this.state.currentItemFillStyle,
                    strokeWidth: this.state.currentItemStrokeWidth,
                    strokeStyle: this.state.currentItemStrokeStyle,
                    roughness: this.state.currentItemRoughness,
                    opacity: this.state.currentItemOpacity,
                    strokeSharpness: this.state.currentItemStrokeSharpness,
                    text: e,
                    fontSize: this.state.currentItemFontSize,
                    fontFamily: this.state.currentItemFontFamily,
                    textAlign: this.state.currentItemTextAlign,
                    verticalAlign: d.k
                });
                this.scene.replaceAllElements([...this.scene.getElementsIncludingDeleted(), o]), this.setState({
                    selectedElementIds: {
                        [o.id]: !0
                    }
                }), this.history.resumeRecording()
            }
            selectShapeTool(e) {
                var t;
                jd || Ne(this.canvas, e), (t = document.activeElement) instanceof HTMLElement && t.className.includes("ToolIcon") && this.focusContainer(), pt(e) || this.setState({
                    suggestedBindings: []
                }), "selection" !== e ? this.setState({
                    elementType: e,
                    selectedElementIds: {},
                    selectedGroupIds: {},
                    editingGroupId: null
                }) : this.setState({
                    elementType: e
                })
            }
            handleTextWysiwyg(e, {
                isExistingElement: t = !1
            }) {
                const n = (t, n = !1) => {
                    this.scene.replaceAllElements([...this.scene.getElementsIncludingDeleted().map((o => o.id === e.id && ct(o) ? ((e, {
                        text: t,
                        isDeleted: n
                    }) => mn(e, {
                        text: t,
                        isDeleted: null !== n && void 0 !== n ? n : e.isDeleted,
                        ...Mn(e, t)
                    }))(o, {
                        text: t,
                        isDeleted: n
                    }) : o))])
                };
                (({
                    id: e,
                    appState: t,
                    onChange: n,
                    onSubmit: o,
                    getViewportCoords: i,
                    element: s,
                    canvas: a,
                    excalidrawContainer: r
                }) => {
                    const l = () => {
                            var n;
                            const o = null === (n = ln.getScene(s)) || void 0 === n ? void 0 : n.getElement(e);
                            if (o && ct(o)) {
                                const [e, n] = i(o.x, o.y), {
                                    textAlign: s,
                                    angle: a
                                } = o;
                                c.value = o.text;
                                const l = o.text.replace(/\r\n?/g, "\n").split("\n"),
                                    d = o.height / l.length,
                                    h = (t.offsetLeft + t.width - e - 8) / t.zoom.value - Number(getComputedStyle(null === r || void 0 === r ? void 0 : r.parentNode).marginRight.slice(0, -2));
                                Object.assign(c.style, {
                                    font: Le(o),
                                    lineHeight: "".concat(d, "px"),
                                    width: "".concat(o.width, "px"),
                                    height: "".concat(o.height, "px"),
                                    left: "".concat(e, "px"),
                                    top: "".concat(n, "px"),
                                    transform: Hi(o.width, o.height, a, t, h),
                                    textAlign: s,
                                    color: o.strokeColor,
                                    opacity: o.opacity / 100,
                                    filter: "var(--theme-filter)",
                                    maxWidth: "".concat(h, "px")
                                })
                            }
                        },
                        c = document.createElement("textarea");
                    c.dir = "auto", c.tabIndex = 0, c.dataset.type = "wysiwyg", c.wrap = "off", Object.assign(c.style, {
                        position: "absolute",
                        display: "inline-block",
                        minHeight: "1em",
                        backfaceVisibility: "hidden",
                        margin: 0,
                        padding: 0,
                        border: 0,
                        outline: 0,
                        resize: "none",
                        background: "transparent",
                        overflow: "hidden",
                        whiteSpace: "pre",
                        zIndex: "var(--zIndex-wysiwyg)"
                    }), l(), n && (c.oninput = () => {
                        n(Bi(c.value))
                    }), c.onkeydown = e => {
                        if (e.stopPropagation(), e.key === oe) e.preventDefault(), y = !0, v();
                        else if (e.key === ne && e[ee]) {
                            if (e.preventDefault(), e.isComposing || 229 === e.keyCode) return;
                            y = !0, v()
                        } else(e.key === ae || e[ee] && (e.code === L || e.code === M)) && (e.preventDefault(), e.shiftKey || e.code === L ? m() : p(), c.dispatchEvent(new Event("input")))
                    };
                    const h = " ".repeat(4),
                        u = new RegExp("^ {1,".concat(4, "}")),
                        p = () => {
                            const {
                                selectionStart: e,
                                selectionEnd: t
                            } = c, n = g();
                            let o = c.value;
                            n.forEach((e => {
                                const t = o.slice(0, e),
                                    n = o.slice(e);
                                o = "".concat(t).concat(h).concat(n)
                            })), c.value = o, c.selectionStart = e + 4, c.selectionEnd = t + 4 * n.length
                        },
                        m = () => {
                            const {
                                selectionStart: e,
                                selectionEnd: t
                            } = c, n = g(), o = [];
                            let i = c.value;
                            n.forEach((e => {
                                const t = i.slice(e, e + 4).match(u);
                                if (t) {
                                    const n = i.slice(0, e),
                                        s = i.slice(e + t[0].length);
                                    i = "".concat(n).concat(s), o.push(e)
                                }
                            })), c.value = i, o.length && (e > o[o.length - 1] ? c.selectionStart = Math.max(e - 4, o[o.length - 1]) : c.selectionStart = e, c.selectionEnd = Math.max(c.selectionStart, t - 4 * o.length))
                        },
                        g = () => {
                            let {
                                selectionStart: e,
                                selectionEnd: t,
                                value: n
                            } = c;
                            const o = n.slice(0, e).match(/[^\n]*$/)[0].length;
                            return e -= o, n.slice(e, t).split("\n").reduce(((t, n, o, i) => t.concat(o ? t[o - 1] + i[o - 1].length + 1 : e)), []).reverse()
                        },
                        b = e => {
                            e.preventDefault(), e.stopPropagation()
                        };
                    let y = !1;
                    const v = () => {
                            f(), o({
                                text: Bi(c.value),
                                viaKeyboard: y
                            })
                        },
                        f = () => {
                            E || (E = !0, c.onblur = null, c.oninput = null, c.onkeydown = null, S && S.disconnect(), window.removeEventListener("resize", l), window.removeEventListener("wheel", b, !0), window.removeEventListener("pointerdown", w), window.removeEventListener("pointerup", x), window.removeEventListener("blur", v), j(), c.remove())
                        },
                        x = () => {
                            window.removeEventListener("pointerup", x), setTimeout((() => {
                                c.onblur = v, c.focus()
                            }))
                        },
                        w = e => {
                            (e.target instanceof HTMLElement || e.target instanceof SVGElement) && e.target.closest(".".concat(d.c.SHAPE_ACTIONS_MENU)) && !Te(e.target) && (c.onblur = null, window.addEventListener("pointerup", x), window.addEventListener("blur", v))
                        },
                        j = ln.getScene(s).addCallback((() => {
                            l(), c.focus()
                        }));
                    let E = !1;
                    c.select(), x();
                    let S = null;
                    a && "ResizeObserver" in window ? (S = new window.ResizeObserver((() => {
                        l()
                    })), S.observe(a)) : window.addEventListener("resize", l), window.addEventListener("pointerdown", w), window.addEventListener("wheel", b, {
                        passive: !1,
                        capture: !0
                    }), null === r || void 0 === r || r.querySelector(".excalidraw-textEditorContainer").appendChild(c)
                })({
                    id: e.id,
                    appState: this.state,
                    canvas: this.canvas,
                    getViewportCoords: (e, t) => {
                        const {
                            x: n,
                            y: o
                        } = Fe({
                            sceneX: e,
                            sceneY: t
                        }, this.state);
                        return [n - this.state.offsetLeft, o - this.state.offsetTop]
                    },
                    onChange: qe((t => {
                        n(t), Ki(e) && gi(e)
                    })),
                    onSubmit: qe((({
                        text: o,
                        viaKeyboard: i
                    }) => {
                        const s = !o.trim();
                        n(o, s), !s && i && this.setState((t => ({
                            selectedElementIds: { ...t.selectedElementIds,
                                [e.id]: !0
                            }
                        }))), s && ki(this.scene.getElements(), [e]), s && !t || this.history.resumeRecording(), this.setState({
                            draggingElement: null,
                            editingElement: null
                        }), this.state.elementLocked && Ne(this.canvas, this.state.elementType), this.focusContainer()
                    })),
                    element: e,
                    excalidrawContainer: this.excalidrawContainerRef.current
                }), this.deselectElements(), n(e.text)
            }
            deselectElements() {
                this.setState({
                    selectedElementIds: {},
                    selectedGroupIds: {},
                    editingGroupId: null
                })
            }
            getTextElementAtPosition(e, t) {
                const n = this.getElementAtPosition(e, t);
                return n && ct(n) && !n.isDeleted ? n : null
            }
            getElementAtPosition(e, t, n) {
                const o = this.getElementsAtPosition(e, t);
                if (o.length > 1) {
                    if (null === n || void 0 === n ? void 0 : n.preferSelected)
                        for (let e = o.length - 1; e > -1; e--)
                            if (this.state.selectedElementIds[o[e].id]) return o[e];
                    const i = o[o.length - 1];
                    return vo(i, this.state, e, t) ? o[o.length - 2] : i
                }
                return 1 === o.length ? o[0] : null
            }
            getElementsAtPosition(e, t) {
                return n = this.scene.getElements(), o = n => ((e, t, n, o) => {
                    const i = 10 / t.zoom.value,
                        s = [n, o];
                    return xo(t, e) ? wo(e, s, i) : fo(e, t, s)
                })(n, this.state, e, t), n.filter((e => !e.isDeleted && o(e)));
                var n, o
            }
            maybeCleanupAfterMissingPointerUp(e) {
                null !== Id && Id(e)
            }
            updateGestureOnPointerDown(e) {
                Ad.pointers.set(e.pointerId, {
                    x: e.clientX,
                    y: e.clientY
                }), 2 === Ad.pointers.size && (Ad.lastCenter = uc(Ad.pointers), Ad.initialScale = this.state.zoom.value, Ad.initialDistance = pc(Array.from(Ad.pointers.values())))
            }
            initialPointerDownState(e) {
                const t = Ve(e, this.state),
                    n = Qi(this.scene.getElements(), this.state),
                    [o, i, s, a] = Rt(n);
                return {
                    origin: t,
                    withCmdOrCtrl: e[ee],
                    originInGrid: Ke(Ot(t.x, t.y, this.state.gridSize)),
                    scrollbars: qi(Cd, e.clientX - this.state.offsetLeft, e.clientY - this.state.offsetTop),
                    lastCoords: { ...t
                    },
                    originalElements: this.scene.getElements().reduce(((e, t) => (e.set(t.id, Pn(t)), e)), new Map),
                    resize: {
                        handleType: !1,
                        isResizing: !1,
                        offset: {
                            x: 0,
                            y: 0
                        },
                        arrowDirection: "origin",
                        center: {
                            x: (s + o) / 2,
                            y: (a + i) / 2
                        }
                    },
                    hit: {
                        element: null,
                        allHitElements: [],
                        wasAddedToSelection: !1,
                        hasBeenDuplicated: !1,
                        hasHitCommonBoundingBoxOfSelectedElements: this.isHittingCommonBoundingBoxOfSelectedElements(t, n)
                    },
                    drag: {
                        hasOccurred: !1,
                        offset: null
                    },
                    eventListeners: {
                        onMove: null,
                        onUp: null,
                        onKeyUp: null,
                        onKeyDown: null
                    }
                }
            }
            handleDraggingScrollBar(e, t) {
                if (!t.scrollbars.isOverEither || this.state.multiElement) return !1;
                Sd = !0, t.lastCoords.x = e.clientX, t.lastCoords.y = e.clientY;
                const n = qe((e => {
                        e.target instanceof HTMLElement && this.handlePointerMoveOverScrollbars(e, t)
                    })),
                    o = qe((() => {
                        Sd = !1, Ne(this.canvas, this.state.elementType), Id = null, this.setState({
                            cursorButton: "up"
                        }), this.savePointer(e.clientX, e.clientY, "up"), window.removeEventListener(d.p.POINTER_MOVE, n), window.removeEventListener(d.p.POINTER_UP, o)
                    }));
                return Id = o, window.addEventListener(d.p.POINTER_MOVE, n), window.addEventListener(d.p.POINTER_UP, o), !0
            }
            isASelectedElement(e) {
                return null != e && this.state.selectedElementIds[e.id]
            }
            isHittingCommonBoundingBoxOfSelectedElements(e, t) {
                if (t.length < 2) return !1;
                const n = 10 / this.state.zoom.value,
                    [o, i, s, a] = Rt(t);
                return e.x > o - n && e.x < s + n && e.y > i - n && e.y < a + n
            }
            onKeyDownFromPointerDownHandler(e) {
                return qe((t => {
                    this.maybeHandleResize(e, t) || this.maybeDragNewGenericElement(e, t)
                }))
            }
            onKeyUpFromPointerDownHandler(e) {
                return qe((t => {
                    t.key === $ && t.preventDefault(), this.maybeHandleResize(e, t) || this.maybeDragNewGenericElement(e, t)
                }))
            }
            onPointerMoveFromPointerDownHandler(e) {
                return qe((t => {
                    null === e.drag.offset && (e.drag.offset = Ke(((e, t, n) => {
                        const [o, i] = Rt(e);
                        return [t - o, n - i]
                    })(Qi(this.scene.getElements(), this.state), e.origin.x, e.origin.y)));
                    if (!(t.target instanceof HTMLElement)) return;
                    if (this.handlePointerMoveOverScrollbars(t, e)) return;
                    const n = Ve(t, this.state),
                        [o, i] = Ot(n.x, n.y, this.state.gridSize);
                    if (!e.drag.hasOccurred && ("arrow" === this.state.elementType || "line" === this.state.elementType) && xt(n.x, n.y, e.origin.x, e.origin.y) < d.l) return;
                    if (e.resize.isResizing && (e.lastCoords.x = n.x, e.lastCoords.y = n.y, this.maybeHandleResize(e, t))) return !0;
                    if (this.state.editingLinearElement) {
                        if (ti.handlePointDragging(this.state, (e => this.setState(e)), n.x, n.y, ((e, t) => {
                                this.maybeSuggestBindingForLinearElementAtCursor(e, t, n)
                            }))) return e.lastCoords.x = n.x, void(e.lastCoords.y = n.y)
                    }
                    if (e.hit.allHitElements.some((e => this.isASelectedElement(e))) || e.hit.hasHitCommonBoundingBoxOfSelectedElements) {
                        e.drag.hasOccurred = !0;
                        const o = Qi(this.scene.getElements(), this.state);
                        if (o.length > 0 && !e.withCmdOrCtrl) {
                            const [i, s] = Ot(n.x - e.drag.offset.x, n.y - e.drag.offset.y, this.state.gridSize), [a, r] = [Math.abs(n.x - e.origin.x), Math.abs(n.y - e.origin.y)], l = t.shiftKey;
                            if (((e, t, n, o, i, s = !1, a = 0, r = 0) => {
                                    const [l, c] = Rt(t), d = n - l, h = o - c;
                                    t.forEach((n => {
                                        let o, i;
                                        if (s) {
                                            const t = s && a < r,
                                                l = s && a > r,
                                                c = e.originalElements.get(n.id);
                                            o = t && c ? c.x : n.x + d, i = l && c ? c.y : n.y + h
                                        } else o = n.x + d, i = n.y + h;
                                        pn(n, {
                                            x: o,
                                            y: i
                                        }), gi(n, {
                                            simultaneouslyUpdated: t
                                        })
                                    }))
                                })(e, o, i, s, this.scene, l, a, r), this.maybeSuggestBindingForAll(o), t.altKey && !e.hit.hasBeenDuplicated) {
                                e.hit.hasBeenDuplicated = !0;
                                const t = [],
                                    n = [],
                                    o = new Map,
                                    a = new Map,
                                    r = e.hit.element;
                                for (const c of this.scene.getElementsIncludingDeleted())
                                    if (this.state.selectedElementIds[c.id] || c.id === (null === r || void 0 === r ? void 0 : r.id) && e.hit.wasAddedToSelection) {
                                        const r = _n(this.state.editingGroupId, o, c),
                                            [l, d] = Ot(e.origin.x - e.drag.offset.x, e.origin.y - e.drag.offset.y, this.state.gridSize);
                                        pn(r, {
                                            x: r.x + (l - i),
                                            y: r.y + (d - s)
                                        }), t.push(r), n.push(c), a.set(c.id, r.id)
                                    } else t.push(c);
                                const l = [...t, ...n];
                                Ci(l, n, a, "duplicatesServeAsOld"), this.scene.replaceAllElements(l)
                            }
                            return
                        }
                    }
                    const s = this.state.draggingElement;
                    if (s) {
                        if ("freedraw" === s.type) {
                            const e = s.points,
                                o = n.x - s.x,
                                i = n.y - s.y,
                                a = s.simulatePressure ? s.pressures : [...s.pressures, t.pressure];
                            pn(s, {
                                points: [...e, [o, i]],
                                pressures: a
                            })
                        } else if (ut(s)) {
                            e.drag.hasOccurred = !0;
                            const a = s.points;
                            let r = o - s.x,
                                l = i - s.y;
                            Ce(t) && 2 === a.length && ({
                                width: r,
                                height: l
                            } = yn(this.state.elementType, r, l)), 1 === a.length ? pn(s, {
                                points: [...a, [r, l]]
                            }) : a.length > 1 && pn(s, {
                                points: [...a.slice(0, -1), [r, l]]
                            }), mt(s) && this.maybeSuggestBindingForLinearElementAtCursor(s, "end", n, this.state.startBoundElement)
                        } else e.lastCoords.x = n.x, e.lastCoords.y = n.y, this.maybeDragNewGenericElement(e, t);
                        if ("selection" === this.state.elementType) {
                            const n = this.scene.getElements();
                            !t.shiftKey && Ji(n, this.state) && (e.withCmdOrCtrl && e.hit.element ? this.setState((t => En({ ...t,
                                selectedElementIds: {
                                    [e.hit.element.id]: !0
                                }
                            }, this.scene.getElements()))) : this.setState({
                                selectedElementIds: {},
                                selectedGroupIds: {},
                                editingGroupId: null
                            }));
                            const o = ((e, t) => {
                                const [n, o, i, s] = At(t);
                                return e.filter((e => {
                                    const [t, a, r, l] = Dt(e);
                                    return "selection" !== e.type && n <= t && o <= a && i >= r && s >= l
                                }))
                            })(n, s);
                            this.setState((t => En({ ...t,
                                selectedElementIds: { ...t.selectedElementIds,
                                    ...o.reduce(((e, t) => (e[t.id] = !0, e)), {}),
                                    ...e.hit.element ? {
                                        [e.hit.element.id]: !o.length
                                    } : null
                                }
                            }, this.scene.getElements())))
                        }
                    }
                }))
            }
            handlePointerMoveOverScrollbars(e, t) {
                if (t.scrollbars.isOverHorizontal) {
                    const n = e.clientX,
                        o = n - t.lastCoords.x;
                    return this.setState({
                        scrollX: this.state.scrollX - o / this.state.zoom.value
                    }), t.lastCoords.x = n, !0
                }
                if (t.scrollbars.isOverVertical) {
                    const n = e.clientY,
                        o = n - t.lastCoords.y;
                    return this.setState({
                        scrollY: this.state.scrollY - o / this.state.zoom.value
                    }), t.lastCoords.y = n, !0
                }
                return !1
            }
            onPointerUpFromPointerDownHandler(e) {
                return qe((t => {
                    const {
                        draggingElement: n,
                        resizingElement: o,
                        multiElement: i,
                        elementType: s,
                        elementLocked: a,
                        isResizing: r,
                        isRotating: l
                    } = this.state;
                    if (this.setState({
                            isResizing: !1,
                            isRotating: !1,
                            resizingElement: null,
                            selectionElement: null,
                            cursorButton: "up",
                            editingElement: i || ct(this.state.editingElement) ? this.state.editingElement : null
                        }), this.savePointer(t.clientX, t.clientY, "up"), this.state.editingLinearElement) {
                        const e = ti.handlePointerUp(t, this.state.editingLinearElement, this.state);
                        e !== this.state.editingLinearElement && this.setState({
                            editingLinearElement: e,
                            suggestedBindings: []
                        })
                    }
                    if (Id = null, window.removeEventListener(d.p.POINTER_MOVE, e.eventListeners.onMove), window.removeEventListener(d.p.POINTER_UP, e.eventListeners.onUp), window.removeEventListener(d.p.KEYDOWN, e.eventListeners.onKeyDown), window.removeEventListener(d.p.KEYUP, e.eventListeners.onKeyUp), "freedraw" === (null === n || void 0 === n ? void 0 : n.type)) {
                        const e = Ve(t, this.state),
                            o = n.points;
                        let i = e.x - n.x,
                            s = e.y - n.y;
                        i === o[0][0] && s === o[0][1] && (s += 1e-4, i += 1e-4);
                        const a = n.simulatePressure ? [] : [...n.pressures, t.pressure];
                        return pn(n, {
                            points: [...o, [i, s]],
                            pressures: a
                        }), void this.actionManager.executeAction(mr)
                    }
                    if (ut(n)) {
                        n.points.length > 1 && this.history.resumeRecording();
                        const o = Ve(t, this.state);
                        return void(e.drag.hasOccurred || !n || i ? e.drag.hasOccurred && !i && (ni(this.state) && mt(n) && ri(n, this.state, this.scene, o), this.setState({
                            suggestedBindings: [],
                            startBoundElement: null
                        }), a ? this.setState((e => ({
                            draggingElement: null,
                            selectedElementIds: { ...e.selectedElementIds,
                                [this.state.draggingElement.id]: !0
                            }
                        }))) : (Re(this.canvas), this.setState((e => ({
                            draggingElement: null,
                            elementType: "selection",
                            selectedElementIds: { ...e.selectedElementIds,
                                [this.state.draggingElement.id]: !0
                            }
                        }))))) : (pn(n, {
                            points: [...n.points, [o.x - n.x, o.y - n.y]]
                        }), this.setState({
                            multiElement: n,
                            editingElement: this.state.draggingElement
                        })))
                    }
                    if ("selection" !== s && n && bn(n)) return this.scene.replaceAllElements(this.scene.getElementsIncludingDeleted().slice(0, -1)), void this.setState({
                        draggingElement: null
                    });
                    n && pn(n, vn(n)), o && this.history.resumeRecording(), o && bn(o) && this.scene.replaceAllElements(this.scene.getElementsIncludingDeleted().filter((e => e.id !== o.id)));
                    const c = e.hit.element;
                    if (c && !e.drag.hasOccurred && !e.hit.wasAddedToSelection)
                        if (t.shiftKey)
                            if (this.state.selectedElementIds[c.id])
                                if (xn(this.state, c)) {
                                    const e = c.groupIds.flatMap((e => Cn(this.scene.getElements(), e))).map((e => ({
                                        [e.id]: !1
                                    }))).reduce(((e, t) => ({ ...e,
                                        ...t
                                    })), {});
                                    this.setState((t => ({
                                        selectedGroupIds: { ...t.selectedElementIds,
                                            ...c.groupIds.map((e => ({
                                                [e]: !1
                                            }))).reduce(((e, t) => ({ ...e,
                                                ...t
                                            })), {})
                                        },
                                        selectedElementIds: { ...t.selectedElementIds,
                                            ...e
                                        }
                                    })))
                                } else this.setState((e => En({ ...e,
                                    selectedElementIds: { ...e.selectedElementIds,
                                        [c.id]: !1
                                    }
                                }, this.scene.getElements())));
                    else this.setState((e => ({
                        selectedElementIds: { ...e.selectedElementIds,
                            [c.id]: !0
                        }
                    })));
                    else this.setState((e => ({ ...En({ ...e,
                            selectedElementIds: {
                                [c.id]: !0
                            }
                        }, this.scene.getElements())
                    })));
                    this.state.editingLinearElement || e.drag.hasOccurred || this.state.isResizing || !(c && vo(c, this.state, e.origin.x, e.origin.y) || !c && e.hit.hasHitCommonBoundingBoxOfSelectedElements) ? (!a && "freedraw" !== s && n && this.setState((e => ({
                        selectedElementIds: { ...e.selectedElementIds,
                            [n.id]: !0
                        }
                    }))), ("selection" !== s || Ji(this.scene.getElements(), this.state)) && this.history.resumeRecording(), (e.drag.hasOccurred || r || l) && (ni(this.state) ? si : hi)(Qi(this.scene.getElements(), this.state)), a || "freedraw" === s ? this.setState({
                        draggingElement: null,
                        suggestedBindings: []
                    }) : (Re(this.canvas), this.setState({
                        draggingElement: null,
                        suggestedBindings: [],
                        elementType: "selection"
                    }))) : this.setState({
                        selectedElementIds: {},
                        selectedGroupIds: {},
                        editingGroupId: null
                    })
                }))
            }
            maybeSuggestBindingForAll(e) {
                const t = (e => {
                    const t = new Set(e.map((({
                        id: e
                    }) => e)));
                    return e.flatMap((e => mt(e) ? xi(e).filter((e => !t.has(e.id))) : bt(e) ? Ei(e).filter((e => !t.has(e[0].id))) : []))
                })(e);
                this.setState({
                    suggestedBindings: t
                })
            }
            clearSelection(e) {
                this.setState((t => ({
                    selectedElementIds: {},
                    selectedGroupIds: {},
                    editingGroupId: t.editingGroupId && null != e && Sn(e, t.editingGroupId) ? t.editingGroupId : null
                }))), this.setState({
                    selectedElementIds: {},
                    previousSelectedElementIds: this.state.selectedElementIds
                })
            }
            getTextWysiwygSnappedToCenterPosition(e, t, n, o, i) {
                const s = ((e, t, n) => {
                    let o = null;
                    for (let i = e.length - 1; i >= 0; --i) {
                        if (e[i].isDeleted) continue;
                        const [s, a, r, l] = At(e[i]);
                        if (s < t && t < r && a < n && n < l) {
                            o = e[i];
                            break
                        }
                    }
                    return o
                })(this.scene.getElementsIncludingDeleted().filter((e => !ct(e))), e, t);
                if (s) {
                    const o = s.x + s.width / 2,
                        i = s.y + s.height / 2;
                    if (Math.hypot(e - o, t - i) < d.I) {
                        const {
                            x: e,
                            y: t
                        } = Fe({
                            sceneX: o,
                            sceneY: i
                        }, n);
                        return {
                            viewportX: e,
                            viewportY: t,
                            elementCenterX: o,
                            elementCenterY: i
                        }
                    }
                }
            }
            getCanvasOffsets() {
                var e;
                if (null === (e = this.excalidrawContainerRef) || void 0 === e ? void 0 : e.current) {
                    const e = this.excalidrawContainerRef.current,
                        {
                            left: t,
                            top: n
                        } = e.getBoundingClientRect();
                    return {
                        offsetLeft: t,
                        offsetTop: n
                    }
                }
                return {
                    offsetLeft: 0,
                    offsetTop: 0
                }
            }
            async updateLanguage() {
                const e = m.find((e => e.code === this.props.langCode)) || p;
                await v(e), this.setAppState({})
            }
        }
        Td.defaultProps = {
            UIOptions: d.i
        }, "production" !== d.o.TEST && "production" !== d.o.DEVELOPMENT || (window.h = window.h || {}, Object.defineProperties(window.h, {
            elements: {
                configurable: !0,
                get() {
                    return this.app.scene.getElementsIncludingDeleted()
                },
                set(e) {
                    return this.app.scene.replaceAllElements(e)
                }
            }
        }));
        var Md = Td;
        n(72), n(73);
        const Ld = e => {
                const {
                    theme: t = "light"
                } = e, n = Pd(t);
                if (!n) return null;
                return Object(s.createPortal)(Object(hs.jsxs)("div", {
                    className: Object(st.a)("Modal", e.className),
                    role: "dialog",
                    "aria-modal": "true",
                    onKeyDown: t => {
                        t.key === oe && (t.nativeEvent.stopImmediatePropagation(), t.stopPropagation(), e.onCloseRequest())
                    },
                    "aria-labelledby": e.labelledBy,
                    children: [Object(hs.jsx)("div", {
                        className: "Modal__background",
                        onClick: e.onCloseRequest
                    }), Object(hs.jsx)("div", {
                        className: "Modal__content",
                        style: {
                            "--max-width": "".concat(e.maxWidth, "px")
                        },
                        tabIndex: 0,
                        children: e.children
                    })]
                }), n)
            },
            Pd = e => {
                const [t, n] = Object(o.useState)(null), i = gd(), s = Object(o.useRef)(i);
                s.current = i;
                const {
                    container: a
                } = yd();
                return Object(o.useLayoutEffect)((() => {
                    t && t.classList.toggle("excalidraw--mobile", i)
                }), [t, i]), Object(o.useLayoutEffect)((() => {
                    const t = !!(null === a || void 0 === a ? void 0 : a.classList.contains("theme--dark")) || "dark" === e,
                        o = document.createElement("div");
                    return o.classList.add("excalidraw", "excalidraw-modal-container"), o.classList.toggle("excalidraw--mobile", s.current), t && (o.classList.add("theme--dark"), o.classList.add("theme--dark-background-none")), document.body.appendChild(o), n(o), () => {
                        document.body.removeChild(o)
                    }
                }), [a, e]), t
            },
            _d = e => {
                const [t, n] = at(), [i] = Object(o.useState)(document.activeElement), {
                    id: s
                } = yd();
                Object(o.useEffect)((() => {
                    if (!t) return;
                    const n = a(t);
                    n.length > 0 && !1 !== e.autofocus && (n[1] || n[0]).focus();
                    const o = e => {
                        if (e.key === ae) {
                            const n = a(t),
                                {
                                    activeElement: o
                                } = document,
                                i = n.findIndex((e => e === o));
                            0 === i && e.shiftKey ? (n[n.length - 1].focus(), e.preventDefault()) : i !== n.length - 1 || e.shiftKey || (n[0].focus(), e.preventDefault())
                        }
                    };
                    return t.addEventListener("keydown", o), () => t.removeEventListener("keydown", o)
                }), [t, e.autofocus]);
                const a = e => {
                        const t = e.querySelectorAll("button, a, input, select, textarea, div[tabindex]");
                        return t ? Array.from(t) : []
                    },
                    r = () => {
                        i.focus(), e.onCloseRequest()
                    };
                return Object(hs.jsx)(Ld, {
                    className: Object(st.a)("Dialog", e.className),
                    labelledBy: "dialog-title",
                    maxWidth: e.small ? 550 : 800,
                    onCloseRequest: r,
                    theme: e.theme,
                    children: Object(hs.jsxs)(Rc, {
                        ref: n,
                        children: [Object(hs.jsxs)("h2", {
                            id: "".concat(s, "-dialog-title"),
                            className: "Dialog__title",
                            children: [Object(hs.jsx)("span", {
                                className: "Dialog__titleContent",
                                children: e.title
                            }), Object(hs.jsx)("button", {
                                className: "Modal__close",
                                onClick: r,
                                "aria-label": w("buttons.close"),
                                children: gd() ? ea : $s
                            })]
                        }), Object(hs.jsx)("div", {
                            className: "Dialog__content",
                            children: e.children
                        })]
                    })
                })
            },
            Dd = ({
                message: e,
                onClose: t
            }) => {
                const [n, s] = Object(o.useState)(!!e), {
                    container: a
                } = yd(), r = i.a.useCallback((() => {
                    s(!1), t && t(), null === a || void 0 === a || a.focus()
                }), [t, a]);
                return Object(hs.jsx)(hs.Fragment, {
                    children: n && Object(hs.jsx)(_d, {
                        small: !0,
                        onCloseRequest: r,
                        title: w("errorDialog.title"),
                        children: Object(hs.jsx)("div", {
                            style: {
                                whiteSpace: "pre-wrap"
                            },
                            children: e
                        })
                    })
                })
            };
        var Rd = n(10);
        class zd extends i.a.Component {
            constructor(...e) {
                super(...e), this.state = {
                    hasError: !1,
                    sentryEventId: "",
                    localStorage: ""
                }
            }
            render() {
                return this.state.hasError ? this.errorSplash() : this.props.children
            }
            componentDidCatch(e, t) {
                const n = {};
                for (const [o, i] of Object.entries({ ...localStorage
                    })) try {
                    n[o] = JSON.parse(i)
                } catch (e) {
                    n[o] = i
                }
                Rd.b((o => {
                    o.setExtras(t);
                    const i = Rd.a(e);
                    this.setState((e => ({
                        hasError: !0,
                        sentryEventId: i,
                        localStorage: JSON.stringify(n)
                    })))
                }))
            }
            selectTextArea(e) {
                e.target !== document.activeElement && (e.preventDefault(), e.target.select())
            }
            async createGithubIssue() {
                let e = "";
                try {
                    const t = (await n.e(2).then(n.bind(null, 213))).default;
                    e = encodeURIComponent(t(this.state.sentryEventId))
                } catch (t) {
                    console.error(t)
                }
                window.open("https://github.com/excalidraw/excalidraw/issues/new?body=".concat(e))
            }
            errorSplash() {
                return Object(hs.jsx)("div", {
                    className: "ErrorSplash excalidraw",
                    children: Object(hs.jsxs)("div", {
                        className: "ErrorSplash-messageContainer",
                        children: [Object(hs.jsxs)("div", {
                            className: "ErrorSplash-paragraph bigger align-center",
                            children: [w("errorSplash.headingMain_pre"), Object(hs.jsx)("button", {
                                onClick: () => window.location.reload(),
                                children: w("errorSplash.headingMain_button")
                            })]
                        }), Object(hs.jsxs)("div", {
                            className: "ErrorSplash-paragraph align-center",
                            children: [w("errorSplash.clearCanvasMessage"), Object(hs.jsx)("button", {
                                onClick: () => {
                                    try {
                                        localStorage.clear(), window.location.reload()
                                    } catch (e) {
                                        console.error(e)
                                    }
                                },
                                children: w("errorSplash.clearCanvasMessage_button")
                            }), Object(hs.jsx)("br", {}), Object(hs.jsxs)("div", {
                                className: "smaller",
                                children: [Object(hs.jsx)("span", {
                                    role: "img",
                                    "aria-label": "warning",
                                    children: "\u26a0\ufe0f"
                                }), w("errorSplash.clearCanvasCaveat"), Object(hs.jsx)("span", {
                                    role: "img",
                                    "aria-hidden": "true",
                                    children: "\u26a0\ufe0f"
                                })]
                            })]
                        }), Object(hs.jsxs)("div", {
                            children: [Object(hs.jsxs)("div", {
                                className: "ErrorSplash-paragraph",
                                children: [w("errorSplash.trackedToSentry_pre"), this.state.sentryEventId, w("errorSplash.trackedToSentry_post")]
                            }), Object(hs.jsxs)("div", {
                                className: "ErrorSplash-paragraph",
                                children: [w("errorSplash.openIssueMessage_pre"), Object(hs.jsx)("button", {
                                    onClick: () => this.createGithubIssue(),
                                    children: w("errorSplash.openIssueMessage_button")
                                }), w("errorSplash.openIssueMessage_post")]
                            }), Object(hs.jsx)("div", {
                                className: "ErrorSplash-paragraph",
                                children: Object(hs.jsxs)("div", {
                                    className: "ErrorSplash-details",
                                    children: [Object(hs.jsx)("label", {
                                        children: w("errorSplash.sceneContent")
                                    }), Object(hs.jsx)("textarea", {
                                        rows: 5,
                                        onPointerDown: this.selectTextArea,
                                        readOnly: !0,
                                        value: this.state.localStorage
                                    })]
                                })
                            })]
                        })]
                    })
                })
            }
        }
        var Nd = n(33);
        "production" !== d.o.TEST && (n.p = window.EXCALIDRAW_ASSET_PATH || "https://unpkg.com/".concat(Nd.name, "@").concat(Nd.version, "/dist/"));
        class Bd extends i.a.Component {
            constructor(...e) {
                super(...e), this.state = {
                    isLoading: !0
                }
            }
            async componentDidMount() {
                const e = m.find((e => e.code === this.props.langCode)) || p;
                await v(e), this.setState({
                    isLoading: !1
                })
            }
            render() {
                return this.state.isLoading ? Object(hs.jsx)(Bc, {}) : this.props.children
            }
        }
        n(75), n(76);
        const Hd = e => {
                var t;
                const {
                    onChange: n,
                    initialData: i,
                    excalidrawRef: s,
                    onCollabButtonClick: a,
                    isCollaborating: r,
                    onPointerUpdate: l,
                    renderTopRightUI: c,
                    renderFooter: h,
                    langCode: u = p.code,
                    viewModeEnabled: m,
                    zenModeEnabled: g,
                    gridModeEnabled: b,
                    libraryReturnUrl: y,
                    theme: v,
                    name: f,
                    renderCustomStats: x,
                    onPaste: w,
                    detectScroll: j = !0,
                    handleKeyboardGlobally: E = !1,
                    onLibraryChange: S,
                    autoFocus: C = !1
                } = e, O = null === (t = e.UIOptions) || void 0 === t ? void 0 : t.canvasActions, k = {
                    canvasActions: { ...d.i.canvasActions,
                        ...O
                    }
                };
                var I;
                (null === O || void 0 === O ? void 0 : O.export) && (k.canvasActions.export.saveFileToDisk = (null === (I = O.export) || void 0 === I ? void 0 : I.saveFileToDisk) || d.i.canvasActions.export.saveFileToDisk);
                return Object(o.useEffect)((() => {
                    const e = e => {
                        "number" === typeof e.scale && 1 !== e.scale && e.preventDefault()
                    };
                    return document.addEventListener("touchmove", e, {
                        passive: !1
                    }), () => {
                        document.removeEventListener("touchmove", e)
                    }
                }), []), Object(hs.jsx)(Bd, {
                    langCode: u,
                    children: Object(hs.jsx)(Md, {
                        onChange: n,
                        initialData: i,
                        excalidrawRef: s,
                        onCollabButtonClick: a,
                        isCollaborating: r,
                        onPointerUpdate: l,
                        renderTopRightUI: c,
                        renderFooter: h,
                        langCode: u,
                        viewModeEnabled: m,
                        zenModeEnabled: g,
                        gridModeEnabled: b,
                        libraryReturnUrl: y,
                        theme: v,
                        name: f,
                        renderCustomStats: x,
                        UIOptions: k,
                        onPaste: w,
                        detectScroll: j,
                        handleKeyboardGlobally: E,
                        onLibraryChange: S,
                        autoFocus: C
                    })
                })
            },
            Vd = (e, t) => {
                const {
                    initialData: n,
                    UIOptions: o = {},
                    ...i
                } = e, {
                    initialData: s,
                    UIOptions: a = {},
                    ...r
                } = t, l = Object.keys(o), c = Object.keys(a);
                if (l.length !== c.length) return !1;
                const d = l.every((e => {
                        if ("canvasActions" === e) {
                            Object.keys(o.canvasActions).every((e => {
                                var t, n, i, s;
                                return "export" === e && (null === o || void 0 === o || null === (t = o.canvasActions) || void 0 === t ? void 0 : t.export) && (null === a || void 0 === a || null === (n = a.canvasActions) || void 0 === n ? void 0 : n.export) ? o.canvasActions.export.saveFileToDisk === a.canvasActions.export.saveFileToDisk : (null === o || void 0 === o || null === (i = o.canvasActions) || void 0 === i ? void 0 : i[e]) === (null === a || void 0 === a || null === (s = a.canvasActions) || void 0 === s ? void 0 : s[e])
                            }))
                        }
                        return !0
                    })),
                    h = Object.keys(e),
                    u = Object.keys(t);
                return d && h.length === u.length && h.every((e => i[e] === r[e]))
            },
            Fd = Object(o.forwardRef)(((e, t) => Object(hs.jsx)(Hd, { ...e,
                excalidrawRef: t
            })));
        var Ud = i.a.memo(Fd, Vd);
        const Gd = "server-volatile-broadcast",
            Wd = "server-broadcast";
        let Kd;
        ! function(e) {
            e.INIT = "SCENE_INIT", e.UPDATE = "SCENE_UPDATE"
        }(Kd || (Kd = {}));
        var Yd = n(39),
            Xd = n.n(Yd);
        const Zd = e => "0".concat(e.toString(16)).slice(-2),
            qd = async () => {
                const e = await window.crypto.subtle.generateKey({
                    name: "AES-GCM",
                    length: 128
                }, !0, ["encrypt", "decrypt"]);
                return (await window.crypto.subtle.exportKey("jwk", e)).k
            },
            Jd = () => {
                const e = new Uint8Array(12);
                return window.crypto.getRandomValues(e)
            },
            Qd = async () => {
                const e = await (async () => {
                        const e = new Uint8Array(10);
                        return window.crypto.getRandomValues(e), Array.from(e, Zd).join("")
                    })(),
                    t = await qd();
                if (!t) throw new Error("Couldn't generate room key");
                return {
                    roomId: e,
                    roomKey: t
                }
            },
            $d = (e, t) => window.crypto.subtle.importKey("jwk", {
                alg: "A128GCM",
                ext: !0,
                k: e,
                key_ops: ["encrypt", "decrypt"],
                kty: "oct"
            }, {
                name: "AES-GCM",
                length: 128
            }, !1, [t]),
            eh = async (e, t, n) => {
                const o = await $d(n, "decrypt");
                return window.crypto.subtle.decrypt({
                    name: "AES-GCM",
                    iv: e
                }, o, t)
            },
            th = async (e, t, n) => {
                let o;
                return o = null != e ? Hr(await (async (e, t) => {
                    try {
                        const o = await fetch(t ? "".concat("https://json.excalidraw.com/api/v2/").concat(e) : "".concat("https://json.excalidraw.com/api/v1/").concat(e, ".json"));
                        if (!o.ok) return window.alert(w("alerts.importBackendFailed")), {};
                        let i;
                        if (t) {
                            const e = await o.arrayBuffer();
                            let s;
                            try {
                                const n = e.slice(0, 12),
                                    o = e.slice(12, e.byteLength);
                                s = await eh(n, o, t)
                            } catch (n) {
                                const o = new Uint8Array(12);
                                s = await eh(o, e, t)
                            }
                            const a = new window.TextDecoder("utf-8").decode(new Uint8Array(s));
                            i = JSON.parse(a)
                        } else i = await o.json();
                        return {
                            elements: i.elements || null,
                            appState: i.appState || null
                        }
                    } catch (n) {
                        return window.alert(w("alerts.importBackendFailed")), console.error(n), {}
                    }
                })(e, t), null === n || void 0 === n ? void 0 : n.appState, null === n || void 0 === n ? void 0 : n.elements) : Hr(n || null, null, null), {
                    elements: o.elements,
                    appState: o.appState,
                    commitToHistory: !1
                }
            };
        let nh = null,
            oh = null,
            ih = null;
        const sh = async () => (nh || (nh = (async () => {
                const e = (await Promise.all([n.e(0), n.e(3)]).then(n.bind(null, 215))).default,
                    t = JSON.parse('{"apiKey":"AIzaSyAd15pYlMci_xIp9ko6wkEsDzAAA0Dn0RU","authDomain":"excalidraw-room-persistence.firebaseapp.com","databaseURL":"https://excalidraw-room-persistence.firebaseio.com","projectId":"excalidraw-room-persistence","storageBucket":"excalidraw-room-persistence.appspot.com","messagingSenderId":"654800341332","appId":"1:654800341332:web:4a692de832b55bd57ce0c1"}');
                return e.initializeApp(t), e
            })()), nh),
            ah = async () => {
                const e = await sh();
                return oh || (oh = Promise.all([n.e(0), n.e(50)]).then(n.bind(null, 218)), await oh), e
            },
            rh = new WeakMap,
            lh = (e, t) => {
                if (e.socket && e.roomId && e.roomKey) {
                    const n = Gi(t);
                    return rh.get(e.socket) === n
                }
                return !0
            },
            ch = async (e, t) => {
                const {
                    roomId: n,
                    roomKey: o,
                    socket: i
                } = e;
                if (!n || !o || !i || lh(e, t)) return !0;
                const s = await ah(),
                    a = Gi(t),
                    {
                        ciphertext: r,
                        iv: l
                    } = await (async (e, t) => {
                        const n = await $d(e, "encrypt"),
                            o = Jd(),
                            i = JSON.stringify(t),
                            s = (new TextEncoder).encode(i);
                        return {
                            ciphertext: await window.crypto.subtle.encrypt({
                                name: "AES-GCM",
                                iv: o
                            }, n, s),
                            iv: o
                        }
                    })(o, t),
                    c = {
                        sceneVersion: a,
                        ciphertext: s.firestore.Blob.fromUint8Array(new Uint8Array(r)),
                        iv: s.firestore.Blob.fromUint8Array(l)
                    },
                    d = s.firestore(),
                    h = d.collection("scenes").doc(n),
                    u = await d.runTransaction((async e => {
                        const t = await e.get(h);
                        if (!t.exists) return e.set(h, c), !0;
                        return !(t.data().sceneVersion >= c.sceneVersion) && (e.update(h, c), !0)
                    }));
                return u && rh.set(i, a), u
            },
            dh = async (e, t, n) => {
                const o = (await ah()).firestore().collection("scenes").doc(e),
                    i = await o.get();
                if (!i.exists) return null;
                const s = i.data(),
                    a = s.ciphertext.toUint8Array(),
                    r = s.iv.toUint8Array(),
                    l = await (async (e, t, n) => {
                        const o = await $d(e, "decrypt"),
                            i = await window.crypto.subtle.decrypt({
                                name: "AES-GCM",
                                iv: t
                            }, o, n),
                            s = new TextDecoder("utf-8").decode(new Uint8Array(i));
                        return JSON.parse(s)
                    })(t, r, a);
                return n && rh.set(n, Gi(l)), Nr(l, null)
            },
            hh = "excalidraw",
            uh = "excalidraw-state",
            ph = "excalidraw-collab",
            mh = "collabLinkForceLoadFlag",
            gh = () => {
                try {
                    const e = localStorage.getItem(ph);
                    if (e) return JSON.parse(e).username
                } catch (e) {
                    console.error(e)
                }
                return null
            },
            bh = () => {
                try {
                    const e = localStorage.getItem(hh);
                    return (null === e || void 0 === e ? void 0 : e.length) || 0
                } catch (e) {
                    return console.error(e), 0
                }
            },
            yh = () => {
                try {
                    const e = localStorage.getItem(uh),
                        t = localStorage.getItem(ph),
                        n = localStorage.getItem(d.G.LOCAL_STORAGE_LIBRARY),
                        o = (null === e || void 0 === e ? void 0 : e.length) || 0,
                        i = (null === t || void 0 === t ? void 0 : t.length) || 0;
                    return o + i + ((null === n || void 0 === n ? void 0 : n.length) || 0) + bh()
                } catch (e) {
                    return console.error(e), 0
                }
            };
        var vh = class {
            constructor(e) {
                this.collab = void 0, this.socket = null, this.socketInitialized = !1, this.roomId = null, this.roomKey = null, this.broadcastedElementVersions = new Map, this.broadcastScene = async (e, t, n) => {
                    if (e === Kd.INIT && !n) throw new Error("syncAll must be true when sending SCENE.INIT");
                    n || (t = t.filter((e => !this.broadcastedElementVersions.has(e.id) || e.version > this.broadcastedElementVersions.get(e.id))));
                    const o = {
                        type: e,
                        payload: {
                            elements: t
                        }
                    };
                    for (const s of t) this.broadcastedElementVersions.set(s.id, s.version);
                    const i = this._broadcastSocketData(o);
                    n && this.collab.isCollaborating ? await Promise.all([i, this.collab.saveCollabRoomToFirebase(t)]) : await i
                }, this.broadcastIdleChange = e => {
                    var t;
                    if (null === (t = this.socket) || void 0 === t ? void 0 : t.id) {
                        const t = {
                            type: "IDLE_STATUS",
                            payload: {
                                socketId: this.socket.id,
                                userState: e,
                                username: this.collab.state.username
                            }
                        };
                        return this._broadcastSocketData(t, !0)
                    }
                }, this.broadcastMouseLocation = e => {
                    var t;
                    if (null === (t = this.socket) || void 0 === t ? void 0 : t.id) {
                        const t = {
                            type: "MOUSE_LOCATION",
                            payload: {
                                socketId: this.socket.id,
                                pointer: e.pointer,
                                button: e.button || "up",
                                selectedElementIds: this.collab.excalidrawAPI.getAppState().selectedElementIds,
                                username: this.collab.state.username
                            }
                        };
                        return this._broadcastSocketData(t, !0)
                    }
                }, this.collab = e
            }
            open(e, t, n) {
                this.socket = e, this.roomId = t, this.roomKey = n, this.socket.on("init-room", (() => {
                    this.socket && (this.socket.emit("join-room", this.roomId), Object(l.a)("share", "room joined"))
                })), this.socket.on("new-user", (async e => {
                    this.broadcastScene(Kd.INIT, this.collab.getSyncableElements(this.collab.getSceneElementsIncludingDeleted()), !0)
                })), this.socket.on("room-user-change", (e => {
                    this.collab.setCollaborators(e)
                }))
            }
            close() {
                this.socket && (this.socket.close(), this.socket = null, this.roomId = null, this.roomKey = null, this.socketInitialized = !1, this.broadcastedElementVersions = new Map)
            }
            isOpen() {
                return !!(this.socketInitialized && this.socket && this.roomId && this.roomKey)
            }
            async _broadcastSocketData(e, t = !1) {
                if (this.isOpen()) {
                    const n = JSON.stringify(e),
                        o = (new TextEncoder).encode(n),
                        i = await (async (e, t) => {
                            const n = await $d(t, "encrypt"),
                                o = Jd();
                            return {
                                data: await window.crypto.subtle.encrypt({
                                    name: "AES-GCM",
                                    iv: o
                                }, n, e),
                                iv: o
                            }
                        })(o, this.roomKey);
                    this.socket.emit(t ? Gd : Wd, this.roomId, i.data, i.iv)
                }
            }
        };
        n(77);
        const fh = () => {
            const e = window.navigator,
                t = /Apple/.test(e.vendor),
                n = -1 !== e.appVersion.indexOf("Win");
            return t ? Rs : n ? zs : Ds
        };
        var xh = ({
            handleClose: e,
            activeRoomLink: t,
            username: n,
            onUsernameChange: i,
            onRoomCreate: s,
            onRoomDestroy: a,
            setErrorMessage: r,
            theme: l
        }) => {
            const c = Object(o.useRef)(null),
                d = async () => {
                    try {
                        await Sl(t)
                    } catch (e) {
                        r(e.message)
                    }
                    c.current && c.current.select()
                },
                h = async () => {
                    try {
                        await navigator.share({
                            title: w("roomDialog.shareTitle"),
                            text: w("roomDialog.shareTitle"),
                            url: t
                        })
                    } catch (e) {}
                },
                u = e => {
                    e.target !== document.activeElement && (e.preventDefault(), e.target.select())
                };
            return Object(hs.jsx)(_d, {
                small: !0,
                onCloseRequest: e,
                title: w("labels.liveCollaboration"),
                theme: l,
                children: Object(hs.jsxs)("div", {
                    className: "RoomDialog-modal",
                    children: [!t && Object(hs.jsxs)(hs.Fragment, {
                        children: [Object(hs.jsx)("p", {
                            children: w("roomDialog.desc_intro")
                        }), Object(hs.jsx)("p", {
                            children: "\ud83d\udd12 ".concat(w("roomDialog.desc_privacy"))
                        }), Object(hs.jsx)("div", {
                            className: "RoomDialog-sessionStartButtonContainer",
                            children: Object(hs.jsx)(us, {
                                className: "RoomDialog-startSession",
                                type: "button",
                                icon: Js,
                                title: w("roomDialog.button_startSession"),
                                "aria-label": w("roomDialog.button_startSession"),
                                showAriaLabel: !0,
                                onClick: s
                            })
                        })]
                    }), t && Object(hs.jsxs)(hs.Fragment, {
                        children: [Object(hs.jsx)("p", {
                            children: w("roomDialog.desc_inProgressIntro")
                        }), Object(hs.jsx)("p", {
                            children: w("roomDialog.desc_shareLink")
                        }), Object(hs.jsxs)("div", {
                            className: "RoomDialog-linkContainer",
                            children: [Object(hs.jsxs)(Il, {
                                gap: 2,
                                children: ["share" in navigator ? Object(hs.jsx)(us, {
                                    type: "button",
                                    icon: fh(),
                                    title: w("labels.share"),
                                    "aria-label": w("labels.share"),
                                    onClick: h
                                }) : null, Object(hs.jsx)(us, {
                                    type: "button",
                                    icon: js,
                                    title: w("labels.copy"),
                                    "aria-label": w("labels.copy"),
                                    onClick: d
                                })]
                            }), Object(hs.jsx)("input", {
                                value: t,
                                readOnly: !0,
                                className: "RoomDialog-link",
                                ref: c,
                                onPointerDown: u
                            })]
                        }), Object(hs.jsxs)("div", {
                            className: "RoomDialog-usernameContainer",
                            children: [Object(hs.jsx)("label", {
                                className: "RoomDialog-usernameLabel",
                                htmlFor: "username",
                                children: w("labels.yourName")
                            }), Object(hs.jsx)("input", {
                                id: "username",
                                value: n || "",
                                className: "RoomDialog-username TextInput",
                                onChange: e => i(e.target.value),
                                onKeyPress: t => "Enter" === t.key && e()
                            })]
                        }), Object(hs.jsxs)("p", {
                            children: [Object(hs.jsx)("span", {
                                role: "img",
                                "aria-hidden": "true",
                                className: "RoomDialog-emoji",
                                children: "\ud83d\udd12"
                            }), " ", w("roomDialog.desc_privacy")]
                        }), Object(hs.jsx)("p", {
                            children: w("roomDialog.desc_exitSession")
                        }), Object(hs.jsx)("div", {
                            className: "RoomDialog-sessionStartButtonContainer",
                            children: Object(hs.jsx)(us, {
                                className: "RoomDialog-stopSession",
                                type: "button",
                                icon: Qs,
                                title: w("roomDialog.button_stopSession"),
                                "aria-label": w("roomDialog.button_stopSession"),
                                showAriaLabel: !0,
                                onClick: a
                            })
                        })]
                    })]
                })
            })
        };
        const {
            Context: wh,
            Consumer: jh,
            Provider: Eh
        } = (e => {
            const t = i.a.createContext(e);
            class n extends i.a.Component {
                constructor(n) {
                    super(n), this.state = {
                        value: e
                    }, t._updateProviderValue = e => this.setState({
                        value: e
                    })
                }
                render() {
                    return Object(hs.jsx)(t.Provider, {
                        value: this.state.value,
                        children: this.props.children
                    })
                }
            }
            class o extends i.a.Component {
                componentDidMount() {
                    var e;
                    null === (e = t._updateProviderValue) || void 0 === e || e.call(t, this.props.value)
                }
                componentDidUpdate() {
                    var e;
                    null === (e = t._updateProviderValue) || void 0 === e || e.call(t, this.props.value)
                }
                render() {
                    return Object(hs.jsx)(t.Consumer, {
                        children: () => this.props.children
                    })
                }
            }
            return {
                Context: t,
                Consumer: n,
                Provider: o
            }
        })({
            api: null
        });
        class Sh extends o.PureComponent {
            constructor(e) {
                super(e), this.portal = void 0, this.excalidrawAPI = void 0, this.isCollaborating = !1, this.activeIntervalId = void 0, this.idleTimeoutId = void 0, this.socketInitializationTimer = void 0, this.lastBroadcastedOrReceivedSceneVersion = -1, this.collaborators = new Map, this.onUnload = () => {
                    this.destroySocketClient({
                        isUnload: !0
                    })
                }, this.beforeUnload = qe((e => {
                    const t = this.getSyncableElements(this.getSceneElementsIncludingDeleted());
                    if (this.isCollaborating && !lh(this.portal, t) && (this.saveCollabRoomToFirebase(t), e.preventDefault(), e.returnValue = ""), this.isCollaborating || this.portal.roomId) try {
                        var n;
                        null === (n = localStorage) || void 0 === n || n.setItem(mh, JSON.stringify({
                            timestamp: Date.now(),
                            room: this.portal.roomId
                        }))
                    } catch {}
                })), this.saveCollabRoomToFirebase = async (e = this.getSyncableElements(this.excalidrawAPI.getSceneElementsIncludingDeleted())) => {
                    try {
                        await ch(this.portal, e)
                    } catch (t) {
                        console.error(t)
                    }
                }, this.openPortal = async () => (Object(l.a)("share", "room creation"), this.initializeSocketClient(null)), this.closePortal = () => {
                    this.saveCollabRoomToFirebase(), window.confirm(w("alerts.collabStopOverridePrompt")) && (window.history.pushState({}, d.b, window.location.origin), this.destroySocketClient(), Object(l.a)("share", "room closed"))
                }, this.destroySocketClient = e => {
                    (null === e || void 0 === e ? void 0 : e.isUnload) || (this.collaborators = new Map, this.excalidrawAPI.updateScene({
                        collaborators: this.collaborators
                    }), this.setState({
                        activeRoomLink: ""
                    }), this.isCollaborating = !1), this.portal.close()
                }, this.initializeSocketClient = async e => {
                    if (this.portal.socket) return null;
                    let t, o;
                    var i;
                    e ? ({
                        roomId: t,
                        roomKey: o
                    } = e) : (({
                        roomId: t,
                        roomKey: o
                    } = await Qd()), window.history.pushState({}, d.b, (i = {
                        roomId: t,
                        roomKey: o
                    }, "".concat(window.location.origin).concat(window.location.pathname, "#room=").concat(i.roomId, ",").concat(i.roomKey))));
                    const s = Ze();
                    this.isCollaborating = !0;
                    const {
                        default: a
                    } = await Promise.all([n.e(1), n.e(47), n.e(46)]).then(n.t.bind(null, 214, 7));
                    if (this.portal.open(a("https://portal.excalidraw.com"), t, o), e) {
                        this.excalidrawAPI.resetScene();
                        try {
                            const e = await dh(t, o, this.portal.socket);
                            e && s.resolve({
                                elements: e,
                                scrollToContent: !0
                            })
                        } catch (r) {
                            console.error(r)
                        }
                    } else {
                        const e = this.excalidrawAPI.getSceneElements();
                        this.excalidrawAPI.history.clear(), this.excalidrawAPI.updateScene({
                            elements: e,
                            commitToHistory: !0
                        })
                    }
                    return this.socketInitializationTimer = setTimeout((() => {
                        this.initializeSocket(), s.resolve(null)
                    }), 5e3), this.portal.socket.on("client-broadcast", (async (e, t) => {
                        if (!this.portal.roomKey) return;
                        const n = await (async (e, t, n) => {
                            try {
                                const o = await $d(t, "decrypt"),
                                    i = await window.crypto.subtle.decrypt({
                                        name: "AES-GCM",
                                        iv: n
                                    }, o, e),
                                    s = new TextDecoder("utf-8").decode(new Uint8Array(i));
                                return JSON.parse(s)
                            } catch (r) {
                                window.alert(w("alerts.decryptFailed")), console.error(r)
                            }
                            return {
                                type: "INVALID_RESPONSE"
                            }
                        })(e, this.portal.roomKey, t);
                        switch (n.type) {
                            case "INVALID_RESPONSE":
                                return;
                            case Kd.INIT:
                                if (!this.portal.socketInitialized) {
                                    this.initializeSocket();
                                    const e = n.payload.elements,
                                        t = this.reconcileElements(e);
                                    this.handleRemoteSceneUpdate(t, {
                                        init: !0
                                    }), s.resolve({
                                        elements: t,
                                        scrollToContent: !0
                                    })
                                }
                                break;
                            case Kd.UPDATE:
                                this.handleRemoteSceneUpdate(this.reconcileElements(n.payload.elements));
                                break;
                            case "MOUSE_LOCATION":
                                {
                                    const {
                                        pointer: e,
                                        button: t,
                                        username: o,
                                        selectedElementIds: i
                                    } = n.payload,
                                    s = n.payload.socketId || n.payload.socketID,
                                    a = new Map(this.collaborators),
                                    r = a.get(s) || {};r.pointer = e,
                                    r.button = t,
                                    r.selectedElementIds = i,
                                    r.username = o,
                                    a.set(s, r),
                                    this.excalidrawAPI.updateScene({
                                        collaborators: a
                                    });
                                    break
                                }
                            case "IDLE_STATUS":
                                {
                                    const {
                                        userState: e,
                                        socketId: t,
                                        username: o
                                    } = n.payload,
                                    i = new Map(this.collaborators),
                                    s = i.get(t) || {};s.userState = e,
                                    s.username = o,
                                    this.excalidrawAPI.updateScene({
                                        collaborators: i
                                    });
                                    break
                                }
                        }
                    })), this.portal.socket.on("first-in-room", (() => {
                        this.portal.socket && this.portal.socket.off("first-in-room"), this.initializeSocket(), s.resolve(null)
                    })), this.initializeIdleDetector(), this.setState({
                        activeRoomLink: window.location.href
                    }), s
                }, this.initializeSocket = () => {
                    this.portal.socketInitialized = !0, clearTimeout(this.socketInitializationTimer)
                }, this.reconcileElements = e => {
                    const t = this.getSceneElementsIncludingDeleted(),
                        n = Ui(t),
                        o = this.excalidrawAPI.getAppState(),
                        i = e.reduce(((e, t) => {
                            var i, s, a;
                            return t.id === (null === (i = o.editingElement) || void 0 === i ? void 0 : i.id) || t.id === (null === (s = o.resizingElement) || void 0 === s ? void 0 : s.id) || t.id === (null === (a = o.draggingElement) || void 0 === a ? void 0 : a.id) || (n.hasOwnProperty(t.id) && n[t.id].version > t.version ? (e.push(n[t.id]), delete n[t.id]) : n.hasOwnProperty(t.id) && n[t.id].version === t.version && n[t.id].versionNonce !== t.versionNonce ? (n[t.id].versionNonce < t.versionNonce ? e.push(n[t.id]) : e.push(t), delete n[t.id]) : (e.push(t), delete n[t.id])), e
                        }), []).concat(...Object.values(n));
                    return this.setLastBroadcastedOrReceivedSceneVersion(Gi(i)), i
                }, this.handleRemoteSceneUpdate = (e, {
                    init: t = !1
                } = {}) => {
                    this.excalidrawAPI.updateScene({
                        elements: e,
                        commitToHistory: !!t
                    }), this.excalidrawAPI.history.clear()
                }, this.onPointerMove = () => {
                    this.idleTimeoutId && (window.clearTimeout(this.idleTimeoutId), this.idleTimeoutId = null), this.idleTimeoutId = window.setTimeout(this.reportIdle, d.v), this.activeIntervalId || (this.activeIntervalId = window.setInterval(this.reportActive, d.a))
                }, this.onVisibilityChange = () => {
                    document.hidden ? (this.idleTimeoutId && (window.clearTimeout(this.idleTimeoutId), this.idleTimeoutId = null), this.activeIntervalId && (window.clearInterval(this.activeIntervalId), this.activeIntervalId = null), this.onIdleStateChange(yr.AWAY)) : (this.idleTimeoutId = window.setTimeout(this.reportIdle, d.v), this.activeIntervalId = window.setInterval(this.reportActive, d.a), this.onIdleStateChange(yr.ACTIVE))
                }, this.reportIdle = () => {
                    this.onIdleStateChange(yr.IDLE), this.activeIntervalId && (window.clearInterval(this.activeIntervalId), this.activeIntervalId = null)
                }, this.reportActive = () => {
                    this.onIdleStateChange(yr.ACTIVE)
                }, this.initializeIdleDetector = () => {
                    document.addEventListener(d.p.POINTER_MOVE, this.onPointerMove), document.addEventListener(d.p.VISIBILITY_CHANGE, this.onVisibilityChange)
                }, this.setLastBroadcastedOrReceivedSceneVersion = e => {
                    this.lastBroadcastedOrReceivedSceneVersion = e
                }, this.getLastBroadcastedOrReceivedSceneVersion = () => this.lastBroadcastedOrReceivedSceneVersion, this.getSceneElementsIncludingDeleted = () => this.excalidrawAPI.getSceneElementsIncludingDeleted(), this.onPointerUpdate = e => {
                    e.pointersMap.size < 2 && this.portal.socket && this.portal.broadcastMouseLocation(e)
                }, this.onIdleStateChange = e => {
                    this.setState({
                        userState: e
                    }), this.portal.broadcastIdleChange(e)
                }, this.broadcastElements = e => {
                    Gi(e) > this.getLastBroadcastedOrReceivedSceneVersion() && (this.portal.broadcastScene(Kd.UPDATE, this.getSyncableElements(e), !1), this.lastBroadcastedOrReceivedSceneVersion = Gi(e), this.queueBroadcastAllElements())
                }, this.queueBroadcastAllElements = Xd()((() => {
                    this.portal.broadcastScene(Kd.UPDATE, this.getSyncableElements(this.excalidrawAPI.getSceneElementsIncludingDeleted()), !0);
                    const e = this.getLastBroadcastedOrReceivedSceneVersion(),
                        t = Math.max(e, Gi(this.getSceneElementsIncludingDeleted()));
                    this.setLastBroadcastedOrReceivedSceneVersion(t)
                }), 2e4), this.handleClose = () => {
                    this.setState({
                        modalIsShown: !1
                    })
                }, this.onUsernameChange = e => {
                    this.setState({
                        username: e
                    }), (e => {
                        try {
                            localStorage.setItem(ph, JSON.stringify({
                                username: e
                            }))
                        } catch (t) {
                            console.error(t)
                        }
                    })(e)
                }, this.onCollabButtonClick = () => {
                    this.setState({
                        modalIsShown: !0
                    })
                }, this.getSyncableElements = e => e.filter((e => e.isDeleted || !bn(e))), this.contextValue = null, this.getContextValue = () => (this.contextValue || (this.contextValue = {}), this.contextValue.isCollaborating = () => this.isCollaborating, this.contextValue.username = this.state.username, this.contextValue.onPointerUpdate = this.onPointerUpdate, this.contextValue.initializeSocketClient = this.initializeSocketClient, this.contextValue.onCollabButtonClick = this.onCollabButtonClick, this.contextValue.broadcastElements = this.broadcastElements, this.contextValue), this.state = {
                    modalIsShown: !1,
                    errorMessage: "",
                    username: gh() || "",
                    userState: yr.ACTIVE,
                    activeRoomLink: ""
                }, this.portal = new vh(this), this.excalidrawAPI = e.excalidrawAPI, this.activeIntervalId = null, this.idleTimeoutId = null
            }
            componentDidMount() {
                window.addEventListener(d.p.BEFORE_UNLOAD, this.beforeUnload), window.addEventListener(d.p.UNLOAD, this.onUnload), "production" !== d.o.TEST && "production" !== d.o.DEVELOPMENT || (window.collab = window.collab || {}, Object.defineProperties(window, {
                    collab: {
                        configurable: !0,
                        value: this
                    }
                }))
            }
            componentWillUnmount() {
                window.removeEventListener(d.p.BEFORE_UNLOAD, this.beforeUnload), window.removeEventListener(d.p.UNLOAD, this.onUnload), window.removeEventListener(d.p.POINTER_MOVE, this.onPointerMove), window.removeEventListener(d.p.VISIBILITY_CHANGE, this.onVisibilityChange), this.activeIntervalId && (window.clearInterval(this.activeIntervalId), this.activeIntervalId = null), this.idleTimeoutId && (window.clearTimeout(this.idleTimeoutId), this.idleTimeoutId = null)
            }
            setCollaborators(e) {
                this.setState((t => {
                    const n = new Map;
                    for (const o of e) this.collaborators.has(o) ? n.set(o, this.collaborators.get(o)) : n.set(o, {});
                    this.collaborators = n, this.excalidrawAPI.updateScene({
                        collaborators: n
                    })
                }))
            }
            render() {
                const {
                    modalIsShown: e,
                    username: t,
                    errorMessage: n,
                    activeRoomLink: o
                } = this.state;
                return Object(hs.jsxs)(hs.Fragment, {
                    children: [e && Object(hs.jsx)(xh, {
                        handleClose: this.handleClose,
                        activeRoomLink: o,
                        username: t,
                        onUsernameChange: this.onUsernameChange,
                        onRoomCreate: this.openPortal,
                        onRoomDestroy: this.closePortal,
                        setErrorMessage: e => {
                            this.setState({
                                errorMessage: e
                            })
                        },
                        theme: this.excalidrawAPI.getAppState().theme
                    }), n && Object(hs.jsx)(Dd, {
                        message: n,
                        onClose: () => this.setState({
                            errorMessage: ""
                        })
                    }), Object(hs.jsx)(Eh, {
                        value: {
                            api: this.getContextValue()
                        }
                    })]
                })
            }
        }
        "production" !== d.o.TEST && "production" !== d.o.DEVELOPMENT || (window.collab = window.collab || {});
        var Ch = Sh;
        const Oh = ({
                onChange: e,
                languages: t = m,
                currentLangCode: n = f().code
            }) => Object(hs.jsx)(i.a.Fragment, {
                children: Object(hs.jsxs)("select", {
                    className: "dropdown-select dropdown-select__language",
                    onChange: ({
                        target: t
                    }) => e(t.value),
                    value: n,
                    "aria-label": w("buttons.selectLanguage"),
                    children: [Object(hs.jsx)("option", {
                        value: p.code,
                        children: p.label
                    }, p.code), t.map((e => Object(hs.jsx)("option", {
                        value: e.code,
                        children: e.label
                    }, e.code)))]
                })
            }),
            kh = _e((e => {
                e({
                    scene: bh(),
                    total: yh()
                })
            }), 500);
        var Ih = e => {
            const [t, n] = Object(o.useState)({
                scene: 0,
                total: 0
            });
            Object(o.useEffect)((() => {
                kh((e => {
                    n(e)
                }))
            })), Object(o.useEffect)((() => () => kh.cancel()), []);
            const i = Qe();
            let s, a;
            return i !== d.j ? (a = i.slice(0, 16).replace("T", " "), s = i.slice(21)) : a = w("stats.versionNotAvailable"), Object(hs.jsxs)(hs.Fragment, {
                children: [Object(hs.jsx)("tr", {
                    children: Object(hs.jsx)("th", {
                        colSpan: 2,
                        children: w("stats.storage")
                    })
                }), Object(hs.jsxs)("tr", {
                    children: [Object(hs.jsx)("td", {
                        children: w("stats.scene")
                    }), Object(hs.jsx)("td", {
                        children: Je(t.scene, 1)
                    })]
                }), Object(hs.jsxs)("tr", {
                    children: [Object(hs.jsx)("td", {
                        children: w("stats.total")
                    }), Object(hs.jsx)("td", {
                        children: Je(t.total, 1)
                    })]
                }), Object(hs.jsx)("tr", {
                    children: Object(hs.jsx)("th", {
                        colSpan: 2,
                        children: w("stats.version")
                    })
                }), Object(hs.jsx)("tr", {
                    children: Object(hs.jsxs)("td", {
                        colSpan: 2,
                        style: {
                            textAlign: "center",
                            cursor: "pointer"
                        },
                        onClick: async () => {
                            try {
                                await Sl(Qe()), e.setToastMessage(w("toast.copyToClipboard"))
                            } catch {}
                        },
                        title: w("stats.versionCopy"),
                        children: [a, Object(hs.jsx)("br", {}), s]
                    })
                })]
            })
        };
        n(78);
        const Ah = bs(Object(hs.jsxs)(hs.Fragment, {
                children: [Object(hs.jsx)("path", {
                    d: "M72.652 63.598c-1.368.91-1.191 2.833-.953 4.572.702 5.104.47 5.323 1.073 7.016.649 1.826.433 2.553-.08 3.292-.406.588-1.207 1.371-1.906 1.516-.98.204-2.967.01-3.922-.246-.643-.174-1.292-.94-1.598-1.53-.389-.751-1.256-1.951-.694-3.593.56-1.64 1.325-5.374 1.363-6.108.098-1.904.02-3.934-1.085-5.014-1.104-1.082-3.941-1.055-5.739-1.038-1.723.017-3.583 1.207-5.045 1.141-1.343-.061-2.939-.686-3.728-1.536-.79-.852-1.082-2.469-1.007-3.57.074-1.1.726-2.398 1.454-3.033.727-.635 1.91-.867 2.909-.777 1.472.13 4.1 1.342 5.928 1.564 1.67.203 4.016.501 5.04-.227 1.021-.73 1.048-2.717 1.094-4.145.07-2.063-1.021-6.528-.683-8.23.22-1.098 1.709-1.696 2.717-1.979 1.007-.282 2.521-.125 3.328.285.788.398 1.499 1.29 1.516 2.173.031 1.68-1.209 5.66-1.322 7.905-.058 1.133-.61 3.124.482 3.764 1.264.74 2.95 1.778 7.1.673 1.765-.47 3.157-.689 4.62-.622 1.342.06 2.939.685 3.728 1.536.787.85 1.08 2.468 1.006 3.568-.074 1.101-.726 2.4-1.454 3.035-.727.634-1.908.866-2.908.777-1.473-.13-3.164-.68-4.88-1.248-2.526-.835-5.176-.708-6.354.079z",
                    fill: "currentColor"
                }), Object(hs.jsx)("path", {
                    d: "M51.396 25.807c0 .237-.285.474-.617.474-.284 0-1.09 1.328-1.708 2.941-1.897 4.934-20.873 42.46-20.92 41.273 0-.616-.285-1.043-.76-1.043-.664 0-.759.38-.474 2.23.284 2.134.095 2.609-6.642 15.702-3.795 7.448-7.875 15.228-9.06 17.316-1.234 2.182-2.183 4.554-2.278 5.55-.142 1.708.047 1.945 4.175 5.503 2.372 2.088 5.408 4.697 6.736 5.883 5.978 5.456 8.777 7.638 9.536 7.496 1.138-.19 18.739-18.644 18.786-19.688 0-.475-.854-7.685-1.898-16.035-1.802-14.232-3.51-30.884-3.32-32.497.142-.996-.57-6.024-1.092-8.207-.426-1.708-.237-2.42 3.179-10.2 1.992-4.601 4.602-10.247 5.74-12.524 1.091-2.277 2.04-4.27 2.04-4.412 0-.142-.332-.237-.711-.237-.38 0-.712.19-.712.475zM40.485 61.245c.522 3.32 1.565 11.29 2.324 17.695 1.47 11.765 3.179 24.811 3.653 28.132.285 1.66.095 1.992-2.989 5.408-5.36 6.025-11.053 11.955-12.998 13.473l-1.803 1.423-9.25-8.634c-8.54-7.875-9.252-8.681-8.73-9.63.285-.522 2.704-4.934 5.361-9.773 2.657-4.839 6.167-11.29 7.78-14.327 1.66-3.084 3.179-5.74 3.463-5.882.332-.19.427 4.601.332 14.8-.19 15.23-.142 15.277 1.376 14.945.19 0 .332-7.686.332-17.031V74.86l4.981-9.963c2.752-5.503 5.03-9.915 5.124-9.867.095.047.57 2.846 1.044 6.215zM20.228 3.842c-3.51 2.799-8.919 7.543-13.189 11.623l-3.368 3.178.617 4.175c.332 2.277.949 6.736 1.328 9.867.427 3.132.854 6.073.996 6.5.19.57 0 .854-.521.854-.902 0-.95-.237 1.518 7.59.901 2.989 1.755 5.74 1.85 6.025.095.332.474.474.901.332.427-.19.664-.57.522-.901-.142-.38.095-.76.474-.902.522-.19.475-.569-.332-1.945-1.28-2.134-4.554-20.352-4.744-26.234-.142-4.175-.142-4.222 1.613-6.594 1.708-2.325 5.646-5.835 11.718-10.295 1.708-1.28 3.416-2.704 3.89-3.178.712-.854 1.044-.617 7.021 5.74 3.463 3.653 7.306 7.4 8.54 8.35l2.277 1.707-1.756 3.7c-.948 1.993-4.791 9.678-8.586 16.984-7.923 15.37-6.31 13.9-15.513 14.043l-5.978.047-1.992 2.277c-2.088 2.42-2.372 3.32-1.376 4.839.38.522.664 1.376.664 1.898 0 .854.332.996 2.23 1.09 1.186.048 2.277.19 2.42.333.142.142.331 3.083.474 6.547l.19 6.262-3.179 6.831c-5.266 11.386-7.353 16.604-7.353 18.312 0 .901.19 1.66.38 1.66.474 0 .474-.047 19.782-40.324 8.966-18.691 17.458-36.292 18.881-39.185 1.423-2.894 2.704-5.55 2.799-5.93.095-.427-3.178-3.7-8.397-8.303-4.696-4.174-8.824-7.97-9.203-8.396-1.091-1.329-2.704-.902-5.598 1.423zm-2.372 62.147c-.38.996-1.376 3.083-2.183 4.649-1.328 2.656-1.47 2.751-1.802 1.66-.19-.664-.332-2.61-.38-4.364-.047-3.464-.142-3.416 3.843-3.653l1.28-.048-.758 1.756zm3.985-7.59c-2.183 4.221-2.277 4.269-8.255 4.553-5.266.285-5.36.238-5.36-.759 0-.569-.19-1.328-.428-1.708-.284-.426-.094-1.186.57-2.23l1.043-1.612h4.744c2.61-.048 5.598-.237 6.642-.427 1.044-.19 1.945-.285 2.04-.237.095.047-.38 1.138-.996 2.42zm-.19-43.266c-.854.616-1.091 1.233-1.091 2.799 0 1.85.142 2.134 1.423 2.656 1.28.522 1.613.475 3.084-.522 1.945-1.328 1.992-1.66.569-3.795-1.234-1.85-2.467-2.182-3.985-1.138z",
                    fill: "currentColor"
                }), Object(hs.jsx)("path", {
                    d: "M50.141 24.917c.352-.615 1.06-1.085 1.967-1.085.804 0 1.477.34 1.734.597.342.342.477.74.477 1.14 0 .089-.006.305-.119.612-.168.461-1.056 2.337-2.08 4.471-1.131 2.264-3.724 7.875-5.708 12.457-1.671 3.806-2.558 5.881-2.97 7.216-.301.975-.279 1.406-.123 2.032.558 2.33 1.27 7.704 1.122 8.73-.187 1.596 1.537 18.06 3.32 32.136 1.056 8.446 1.91 15.74 1.91 16.22l-.002.07c-.009.184-.087.607-.447 1.14-.506.747-1.932 2.414-3.805 4.476-4.242 4.672-10.806 11.46-13.673 14.059-.682.617-1.199 1.023-1.472 1.182a1.872 1.872 0 01-.612.236c-.41.077-1.225-.015-2.35-.737-1.495-.959-4.19-3.217-8.46-7.114-1.327-1.184-4.36-3.79-6.718-5.865-1.712-1.476-2.767-2.405-3.411-3.096-.677-.727-.994-1.291-1.16-1.839-.165-.544-.18-1.09-.117-1.847.104-1.1 1.103-3.737 2.466-6.15 1.182-2.08 5.247-9.833 9.031-17.26 3.34-6.491 5.06-9.853 5.906-11.859.677-1.603.696-2.113.587-2.93-.18-1.168-.195-1.884-.111-2.308.1-.511.321-.851.58-1.1.346-.331.813-.55 1.488-.55.199 0 .391.024.574.07 4.068-7.268 18.093-35.143 19.705-39.334.585-1.53 1.353-2.823 1.794-3.288.228-.24.462-.39.677-.482zM38.72 59.573a448.835 448.835 0 00-3.06 5.995l-4.823 9.646v16.63c0 8.501-.124 15.643-.287 16.987-.142 1.166-1.002 1.462-1.384 1.526l.16-.017c-.671.147-1.214.135-1.647-.047-.495-.209-1.058-.629-1.33-1.813-.332-1.439-.336-5.202-.22-14.563.04-4.272.047-7.59.016-9.984-.33.582-.666 1.188-.986 1.783-1.615 3.04-5.13 9.5-7.79 14.345-2.383 4.34-4.576 8.338-5.207 9.493.131.186.356.489.61.77 1.165 1.287 3.451 3.428 7.667 7.316l8.316 7.76.798-.63c1.917-1.495 7.517-7.35 12.808-13.295.898-.995 1.544-1.72 2-2.29.37-.464.594-.76.675-1.06.067-.247.004-.478-.051-.8l-.007-.041c-.475-3.324-2.184-16.382-3.657-28.168-.757-6.384-1.797-14.328-2.317-17.639l-.004-.023c-.089-.635-.185-1.272-.28-1.881zM19.289 2.67c1.673-1.343 3-2.096 4.04-2.364 1.537-.394 2.687.004 3.621 1.119.396.44 4.46 4.165 9.071 8.264 4.274 3.769 7.265 6.676 8.244 7.909.69.868.68 1.598.625 1.844-.002.013-.006.026-.009.038-.1.398-1.416 3.195-2.908 6.228-1.423 2.893-9.912 20.488-18.875 39.173C7.581 97.252 4.465 103.75 3.6 105.058c-.497.751-.885.854-1.111.924a1.729 1.729 0 01-.526.076c-.42 0-.964-.148-1.368-.767-.223-.342-.511-1.288-.511-2.394 0-.606.19-1.592.67-3.03.955-2.866 3.1-7.864 6.821-15.911l3.03-6.513-.178-5.89a153.908 153.908 0 00-.33-5.346c-.352-.041-.773-.081-1.14-.096-.98-.049-1.616-.131-2.03-.261-.645-.204-1.016-.535-1.267-.928-.221-.348-.358-.79-.358-1.4 0-.282-.173-.735-.377-1.016l-.04-.059c-.621-.945-.859-1.757-.79-2.608.085-1.023.72-2.222 2.283-4.034l1.607-1.836c-.218-.687-.996-3.199-1.807-5.89-1.558-4.942-2.122-6.841-2.152-7.56-.034-.83.282-1.245.57-1.51a1.53 1.53 0 01.406-.265c-.217-1.235-.55-3.498-.875-5.878a488.89 488.89 0 00-1.323-9.829l-.617-4.175a1.5 1.5 0 01.455-1.31l3.361-3.172c4.301-4.11 9.749-8.888 13.287-11.709zm-3.879 71.31c-.31.283-.612.394-.858.441a1.547 1.547 0 01-1.04-.132l.103 3.418v.018l1.795-3.746zm12.426 1.473a23.55 23.55 0 01-.225.553 43.912 43.912 0 01-.763 1.686c.328-.11.65-.094.966.015l.022.008v-2.262zm1.524-3.996l-.032.037a1.575 1.575 0 01-.862.5c.042.411.057.798 0 1.25l.894-1.787zM16.286 65.87c-.566.056-1.034.117-1.267.149-.014.118-.03.275-.035.408-.012.4-.001.889.007 1.466.006.237.014.477.024.716.49-.997.97-2.02 1.271-2.739zm4.486-3.076a4.31 4.31 0 01-.88.654c.136.22.21.469.22.721l.281-.585.38-.79zm-.299-5.017c-1.381.168-3.98.324-6.29.365h-3.956l-.594.92c-.19.298-.36.7-.429.874.215.444.399 1.073.478 1.666h.014c.771.012 1.964-.048 3.819-.148 2.63-.125 3.979-.11 4.898-.616.326-.18.561-.453.817-.83.374-.551.75-1.276 1.243-2.23zm4.52-3.77a6.345 6.345 0 01-1.098.892c.156.141.3.333.383.595l.714-1.487zm15.241-3.122c-.47.934-.941 1.866-1.41 2.789.6-.264 1.192-.034 1.288.014.079.04.308.15.517.425a27.335 27.335 0 00-.224-1.044c-.185-.74-.289-1.336-.17-2.184zM24.148 5.38c-.758.673-2.198 1.856-3.649 2.944-5.896 4.33-9.738 7.717-11.4 9.978-.594.803-.97 1.279-1.177 1.801-.316.802-.217 1.685-.143 3.852.132 4.065 1.762 14.092 3.157 20.466.555 2.535 1.023 4.46 1.383 5.059.528.9.771 1.5.842 1.889.088.484.016.86-.118 1.167a1.86 1.86 0 01-.27.446l2.687-.021c1.825-.028 3.22.008 4.349-.038.897-.038 1.587-.111 2.187-.396.71-.336 1.26-.968 1.948-2.018 1.313-2.003 2.904-5.314 5.721-10.782 3.785-7.286 7.618-14.95 8.563-16.935l1.23-2.593-1.311-.984c-1.258-.967-5.182-4.782-8.717-8.51-2.604-2.769-4.52-4.608-5.282-5.325zm-11.86 47.181l-.001-.003-.026-.064.027.067zm-1.503-1.764l.059-.024a1.07 1.07 0 00-.059.024zm42.106-24.884l-.002.022.001-.009.001-.013zm.003-.035l.002-.071-.002.071zM20.773 13.917c-1.241.896-1.713 1.74-1.713 4.015 0 1.663.252 2.444.727 3.002.334.391.822.714 1.63 1.043.743.303 1.275.437 1.771.44.735.005 1.457-.254 2.72-1.109 1.495-1.02 2.072-1.825 2.19-2.615.111-.744-.188-1.715-1.214-3.254-.872-1.307-1.805-2.006-2.727-2.266-1.036-.292-2.15-.105-3.356.723l-.028.02zm4.263 4.285c-.128-.242-.375-.69-.648-1.099-.4-.598-.691-1.03-1.123-1.056-.24-.015-.473.123-.744.308-.461.337-.461.721-.461 1.577 0 .417.04.883.058 1.064.1.052.282.142.431.203.283.115.47.216.66.218.084 0 .152-.057.255-.113.215-.115.46-.275.757-.476.311-.213.632-.472.815-.626zM19.293 2.669l-.005.003.005-.003z",
                    fill: "currentColor"
                })]
            }), {
                width: 89,
                height: 131,
                style: {
                    transform: "translateX(4px)"
                }
            }),
            Th = async (e, t) => {
                const o = await (async () => {
                        const e = await sh();
                        return ih || (ih = Promise.all([n.e(0), n.e(57)]).then(n.bind(null, 219)), await ih), e
                    })(),
                    i = "".concat(Object(lt.a)(12)),
                    s = await qd(),
                    a = await (async (e, t) => {
                        const n = await $d(e, "encrypt"),
                            o = Jd(),
                            i = (new TextEncoder).encode(t),
                            s = await window.crypto.subtle.encrypt({
                                name: "AES-GCM",
                                iv: o
                            }, n, i);
                        return {
                            blob: new Blob([new Uint8Array(s)]),
                            iv: o
                        }
                    })(s, Kr(e, t)),
                    r = new Blob([a.iv, a.blob], {
                        type: "application/octet-stream"
                    });
                await o.storage().ref("/migrations/scenes/".concat(i)).put(r, {
                    customMetadata: {
                        data: JSON.stringify({
                            version: 1,
                            name: t.name
                        }),
                        created: Date.now().toString()
                    }
                }), window.open("https://plus.excalidraw.com/import?excalidraw=".concat(i, ",").concat(s))
            },
            Mh = ({
                elements: e,
                appState: t,
                onError: n
            }) => Object(hs.jsxs)(od, {
                color: "indigo",
                children: [Object(hs.jsx)("div", {
                    className: "Card-icon",
                    children: Ah
                }), Object(hs.jsx)("h2", {
                    children: "Excalidraw+"
                }), Object(hs.jsx)("div", {
                    className: "Card-details",
                    children: w("exportDialog.excalidrawplus_description")
                }), Object(hs.jsx)(us, {
                    className: "Card-button",
                    type: "button",
                    title: w("exportDialog.excalidrawplus_button"),
                    "aria-label": w("exportDialog.excalidrawplus_button"),
                    showAriaLabel: !0,
                    onClick: async () => {
                        try {
                            await Th(e, t)
                        } catch (o) {
                            console.error(o), n(new Error(w("exportDialog.excalidrawplus_exportError")))
                        }
                    }
                })]
            }),
            Lh = new r.a;
        Lh.init({
            languageUtils: {
                formatLanguageCode: e => e,
                isWhitelisted: () => !0
            },
            checkWhitelist: !1
        });
        const Ph = _e(((e, t) => {
                ((e, t) => {
                    try {
                        localStorage.setItem(hh, JSON.stringify(Zi(e))), localStorage.setItem(uh, JSON.stringify(ot(t)))
                    } catch (n) {
                        console.error(n)
                    }
                })(e, t)
            }), 300),
            _h = () => {
                Ph.flush()
            },
            Dh = async e => {
                const t = new URLSearchParams(window.location.search).get("id"),
                    n = window.location.hash.match(/^#json=([0-9]+),([a-zA-Z0-9_-]+)$/),
                    o = window.location.hash.match(/^#url=(.*)$/),
                    i = (() => {
                        let e = null,
                            t = null;
                        try {
                            e = localStorage.getItem(hh), t = localStorage.getItem(uh)
                        } catch (i) {
                            console.error(i)
                        }
                        let n = [];
                        if (e) try {
                            n = Zi(JSON.parse(e))
                        } catch (i) {
                            console.error(i)
                        }
                        let o = null;
                        if (t) try {
                            o = { ...et(),
                                ...ot(JSON.parse(t))
                            }
                        } catch (i) {
                            console.error(i)
                        }
                        return {
                            elements: n,
                            appState: o
                        }
                    })();
                let s = await th(null, null, i),
                    a = (e => {
                        const t = new URL(e).hash.match(/^#room=([a-zA-Z0-9_-]+),([a-zA-Z0-9_-]+)$/);
                        return t && 22 !== t[2].length ? (window.alert(w("alerts.invalidEncryptionKey")), null) : t ? {
                            roomId: t[1],
                            roomKey: t[2]
                        } : null
                    })(window.location.href);
                if (!!(t || n || a))
                    if (!s.elements.length || a || window.confirm(w("alerts.loadSceneOverridePrompt"))) t ? s = await th(t, null, i) : n && (s = await th(n[1], n[2], i)), s.scrollToContent = !0, a || window.history.replaceState({}, d.b, window.location.origin);
                    else {
                        if (document.hidden) return new Promise(((t, n) => {
                            window.addEventListener("focus", (() => Dh(e).then(t).catch(n)), {
                                once: !0
                            })
                        }));
                        a = null, window.history.replaceState({}, d.b, window.location.origin)
                    }
                else if (o) {
                    window.history.replaceState({}, d.b, window.location.origin);
                    const e = o[1];
                    try {
                        const t = await fetch(window.decodeURIComponent(e)),
                            n = await Gr(await t.blob(), null, null);
                        if (!s.elements.length || window.confirm(w("alerts.loadSceneOverridePrompt"))) return n
                    } catch (r) {
                        return {
                            appState: {
                                errorMessage: w("alerts.invalidSceneUrl")
                            }
                        }
                    }
                }
                return a ? e.collabAPI.initializeSocketClient(a) : s || null
            },
            Rh = Object(hs.jsxs)("p", {
                style: {
                    direction: "ltr",
                    unicodeBidi: "embed"
                },
            }),
            zh = () => {
                var e;
                const [t, n] = Object(o.useState)(""), i = Lh.detect() || p.code, [s, a] = Object(o.useState)(i), r = Object(o.useRef)({
                    promise: null
                });
                r.current.promise || (r.current.promise = Ze()), Object(o.useEffect)((() => {
                    setTimeout((() => {
                        Object(l.a)("load", "version", Qe())
                    }), d.P)
                }), []);
                const [c, h] = at(), u = null === (e = Object(o.useContext)(wh)) || void 0 === e ? void 0 : e.api;
                Object(o.useEffect)((() => {
                    if (!u || !c) return;
                    Dh({
                        collabAPI: u
                    }).then((e => {
                        if (e) try {
                            e.libraryItems = JSON.parse(localStorage.getItem(d.G.LOCAL_STORAGE_LIBRARY)) || []
                        } catch (t) {
                            console.error(t)
                        }
                        r.current.promise.resolve(e)
                    }));
                    const e = e => {
                            e.preventDefault();
                            const t = new URLSearchParams(window.location.hash.slice(1)),
                                n = t.get(d.N.addLibrary);
                            n ? (window.history.replaceState({}, "", e.oldURL), c.importLibrary(n, t.get("token"))) : Dh({
                                collabAPI: u
                            }).then((e => {
                                e && c.updateScene({ ...e,
                                    appState: Br(e.appState, null)
                                })
                            }))
                        },
                        t = setTimeout((() => document.title = d.b), d.K);
                    return window.addEventListener(d.p.HASHCHANGE, e, !1), window.addEventListener(d.p.UNLOAD, _h, !1), window.addEventListener(d.p.BLUR, _h, !1), () => {
                        window.removeEventListener(d.p.HASHCHANGE, e, !1), window.removeEventListener(d.p.UNLOAD, _h, !1), window.removeEventListener(d.p.BLUR, _h, !1), clearTimeout(t)
                    }
                }), [u, c]), Object(o.useEffect)((() => {
                    Lh.cacheUserLanguage(s)
                }), [s]);
                const g = Object(o.useCallback)(((e, t) => Object(hs.jsx)("div", {
                        style: {
                            width: "24ch",
                            fontSize: "0.7em",
                            textAlign: "center"
                        },
                        children: Rh
                    })), []),
                    b = Object(o.useCallback)((e => {
                        const t = () => Object(hs.jsx)(Oh, {
                            onChange: e => a(e),
                            languages: m,
                            currentLangCode: s
                        });
                        if (e) {
                            const e = window.innerWidth < 362;
                            return Object(hs.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: e ? "column" : "row"
                                },
                                children: [Object(hs.jsxs)("fieldset", {
                                    children: [Object(hs.jsx)("legend", {
                                        children: w("labels.language")
                                    }), t()]
                                }), Object(hs.jsx)("div", {
                                    style: {
                                        width: "24ch",
                                        fontSize: "0.7em",
                                        textAlign: "center",
                                        marginTop: e ? 16 : void 0,
                                        marginLeft: "auto",
                                        marginRight: e ? "auto" : void 0,
                                        padding: "4px 2px",
                                        border: "1px dashed #aaa",
                                        borderRadius: 12
                                    },
                                    children: Rh
                                })]
                            })
                        }
                        return Object(hs.jsxs)(hs.Fragment, {
                            children: [Object(hs.jsx)("a", {
                                className: "encrypted-icon tooltip",
                                href: "https://blog.excalidraw.com/end-to-end-encryption/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                "aria-label": w("encrypted.link"),
                                children: Object(hs.jsx)(ur, {
                                    label: w("encrypted.tooltip"),
                                    long: !0,
                                    children: na
                                })
                            }), t()]
                        })
                    }), [s]);
                return Object(hs.jsxs)(hs.Fragment, {
                    children: [Object(hs.jsx)(Ud, {
                        ref: h,
                        onChange: (e, t) => {
                            (null === u || void 0 === u ? void 0 : u.isCollaborating()) ? u.broadcastElements(e): Ph(e, t)
                        },
                        initialData: r.current.promise,
                        onCollabButtonClick: null === u || void 0 === u ? void 0 : u.onCollabButtonClick,
                        isCollaborating: null === u || void 0 === u ? void 0 : u.isCollaborating(),
                        onPointerUpdate: null === u || void 0 === u ? void 0 : u.onPointerUpdate,
                        UIOptions: {
                            canvasActions: {
                                export: {
                                    onExportToBackend: async (e, t, o) => {
                                        if (0 === e.length) return window.alert(w("alerts.cannotExportEmptyCanvas"));
                                        if (o) try {
                                            await (async (e, t) => {
                                                const n = Kr(e, t),
                                                    o = (new TextEncoder).encode(n),
                                                    i = await window.crypto.subtle.generateKey({
                                                        name: "AES-GCM",
                                                        length: 128
                                                    }, !0, ["encrypt", "decrypt"]),
                                                    s = Jd(),
                                                    a = await window.crypto.subtle.encrypt({
                                                        name: "AES-GCM",
                                                        iv: s
                                                    }, i, o),
                                                    r = new Blob([s.buffer, a]),
                                                    l = await new Response(r).arrayBuffer(),
                                                    c = await window.crypto.subtle.exportKey("jwk", i);
                                                try {
                                                    const e = await fetch("https://json.excalidraw.com/api/v2/post/", {
                                                            method: "POST",
                                                            body: l
                                                        }),
                                                        t = await e.json();
                                                    if (t.id) {
                                                        const e = new URL(window.location.href);
                                                        e.hash = "json=".concat(t.id, ",").concat(c.k);
                                                        const n = e.toString();
                                                        window.prompt("\ud83d\udd12".concat(w("alerts.uploadedSecurly")), n)
                                                    } else "RequestTooLargeError" === t.error_class ? window.alert(w("alerts.couldNotCreateShareableLinkTooBig")) : window.alert(w("alerts.couldNotCreateShareableLink"))
                                                } catch (d) {
                                                    console.error(d), window.alert(w("alerts.couldNotCreateShareableLink"))
                                                }
                                            })(e, { ...t,
                                                viewBackgroundColor: t.exportBackground ? t.viewBackgroundColor : et().viewBackgroundColor
                                            })
                                        } catch (i) {
                                            if ("AbortError" !== i.name) {
                                                const {
                                                    width: e,
                                                    height: t
                                                } = o;
                                                console.error(i, {
                                                    width: e,
                                                    height: t
                                                }), n(i.message)
                                            }
                                        }
                                    },
                                    renderCustomUI: (e, t) => Object(hs.jsx)(Mh, {
                                        elements: e,
                                        appState: t,
                                        onError: e => {
                                            null === c || void 0 === c || c.updateScene({
                                                appState: {
                                                    errorMessage: e.message
                                                }
                                            })
                                        }
                                    })
                                }
                            }
                        },
                        renderTopRightUI: g,
                        renderFooter: b,
                        langCode: s,
                        renderCustomStats: () => Object(hs.jsx)(Ih, {
                            setToastMessage: e => c.setToastMessage(e)
                        }),
                        detectScroll: !1,
                        handleKeyboardGlobally: !0,
                        onLibraryChange: async e => {
                            if (!e.length) return void localStorage.removeItem(d.G.LOCAL_STORAGE_LIBRARY);
                            const t = JSON.stringify(e);
                            localStorage.setItem(d.G.LOCAL_STORAGE_LIBRARY, t)
                        },
                        autoFocus: !0
                    }), c && Object(hs.jsx)(Ch, {
                        excalidrawAPI: c
                    }), t && Object(hs.jsx)(Dd, {
                        message: t,
                        onClose: () => n("")
                    })]
                })
            };
        var Nh = () => Object(hs.jsx)(zd, {
            children: Object(hs.jsx)(jh, {
                children: Object(hs.jsx)(zh, {})
            })
        });
        const Bh = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)),
            Hh = (e, t) => {
                navigator.serviceWorker.register(e).then((e => {
                    e.onupdatefound = () => {
                        const n = e.installing;
                        null != n && (n.onstatechange = () => {
                            "installed" === n.state && (navigator.serviceWorker.controller ? (console.info("New content is available and will be used when all tabs for this page are closed."), t && t.onUpdate && t.onUpdate(e)) : (console.info("Content is cached for offline use."), t && t.onSuccess && t.onSuccess(e)))
                        })
                    }
                })).catch((e => {
                    console.error("Error during service worker registration:", e)
                }))
            },
            Vh = (e, t) => {
                fetch(e, {
                    headers: {
                        "Service-Worker": "script"
                    }
                }).then((n => {
                    const o = n.headers.get("content-type");
                    404 === n.status || null != o && -1 === o.indexOf("javascript") ? navigator.serviceWorker.ready.then((e => {
                        e.unregister().then((() => {
                            window.location.reload()
                        }))
                    })) : Hh(e, t)
                })).catch((e => {
                    console.info("No internet connection found. App is running in offline mode.", e.message)
                }))
            };
        /\b(iPad|iPhone|iPod|Safari)\b/.test(navigator.userAgent) && !matchMedia("(display-mode: standalone)").matches && n.e(44).then(n.t.bind(null, 216, 7)), (e => {
            if ("serviceWorker" in navigator) {
                if (new URL(".", window.location.href).origin !== window.location.origin) return;
                window.addEventListener("load", (() => {
                    const t = "".concat(".", "/service-worker.js");
                    Bh ? (Vh(t, e), navigator.serviceWorker.ready.then((() => {
                        console.info("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")
                    }))) : Hh(t, e)
                }))
            }
        })({
            onUpdate: e => {
                const t = e.waiting;
                t && (t.addEventListener(d.p.STATE_CHANGE, (e => {
                    "activated" === e.target.state && window.location.reload()
                })), t.postMessage({
                    type: "SKIP_WAITING"
                }))
            }
        });
        var Fh = n(124),
            Uh = n(123);
        const Gh = {
                "excalidraw.com": "production",
                "vercel.app": "staging"
            },
            Wh = !("true" === Object({
                NODE_ENV: "production",
                PUBLIC_URL: ".",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
                REACT_APP_VERCEL_GIT_COMMIT_SHA: "982cba20352f1e8be5d06c60d8030f96d2372c0f",
                REACT_APP_VERCEL_URL: "excalidraw-92ci8ek81-excalidraw.vercel.app",
                REACT_APP_GIT_SHA: "982cba20352f1e8be5d06c60d8030f96d2372c0f",
                REACT_APP_VERCEL_ENV: "production",
                REACT_APP_VERCEL_GIT_COMMIT_AUTHOR_LOGIN: "excalibot",
                REACT_APP_VERCEL_GIT_PROVIDER: "github",
                REACT_APP_VERCEL_GIT_COMMIT_AUTHOR_NAME: "Excalidraw Bot",
                REACT_APP_VERCEL_GIT_REPO_OWNER: "excalidraw",
                REACT_APP_VERCEL_GIT_REPO_SLUG: "excalidraw",
                REACT_APP_VERCEL_GIT_COMMIT_MESSAGE: "chore: Update translations from Crowdin (#3996)",
                REACT_APP_VERCEL_GIT_REPO_ID: "231283452",
                REACT_APP_VERCEL_GIT_COMMIT_REF: "master",
                REACT_APP_GOOGLE_ANALYTICS_ID: "UA-387204-13",
                REACT_APP_BACKEND_V1_GET_URL: "https://json.excalidraw.com/api/v1/",
                REACT_APP_BACKEND_V2_GET_URL: "https://json.excalidraw.com/api/v2/",
                REACT_APP_BACKEND_V2_POST_URL: "https://json.excalidraw.com/api/v2/post/",
                REACT_APP_SOCKET_SERVER_URL: "https://portal.excalidraw.com",
                REACT_APP_FIREBASE_CONFIG: '{"apiKey":"AIzaSyAd15pYlMci_xIp9ko6wkEsDzAAA0Dn0RU","authDomain":"excalidraw-room-persistence.firebaseapp.com","databaseURL":"https://excalidraw-room-persistence.firebaseio.com","projectId":"excalidraw-room-persistence","storageBucket":"excalidraw-room-persistence.appspot.com","messagingSenderId":"654800341332","appId":"1:654800341332:web:4a692de832b55bd57ce0c1"}'
            }).REACT_APP_DISABLE_SENTRY) && Object.keys(Gh).find((e => window.location.hostname.indexOf(e) >= 0));
        Fh.a({
            dsn: Wh ? "https://7bfc596a5bf945eda6b660d3015a5460@sentry.io/5179260" : void 0,
            environment: Wh ? Gh[Wh] : void 0,
            release: "982cba20352f1e8be5d06c60d8030f96d2372c0f",
            ignoreErrors: ["undefined is not an object (evaluating 'window.__pad.performLoop')"],
            integrations: [new Uh.a({
                levels: ["error"]
            })],
            beforeSend(e) {
                var t;
                return (null === (t = e.request) || void 0 === t ? void 0 : t.url) && (e.request.url = e.request.url.replace(/#.*$/, "")), e
            }
        }), window.__EXCALIDRAW_SHA__ = "982cba20352f1e8be5d06c60d8030f96d2372c0f", a.a.render(Object(hs.jsx)(Nh, {}), document.getElementById("root"))
    }],
    [
        [79, 45, 48]
    ]
]);
//# sourceMappingURL=main.72e204aa.chunk.js.map