/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi/providers/alchemy */ \"wagmi/providers/alchemy\");\n/* harmony import */ var wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__]);\n_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nconst { chains , provider , webSocketProvider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.configureChains)([\n    wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.mainnet,\n    wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.polygon,\n    wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.optimism,\n    wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.arbitrum,\n    ...process.env.NEXT_PUBLIC_ENABLE_TESTNETS === \"true\" ? [\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.goerli,\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.kovan,\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.rinkeby,\n        wagmi__WEBPACK_IMPORTED_MODULE_3__.chain.ropsten\n    ] : [], \n], [\n    (0,wagmi_providers_alchemy__WEBPACK_IMPORTED_MODULE_4__.alchemyProvider)({\n        apiKey: \"_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC\"\n    }),\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__.publicProvider)(), \n]);\nconst { wallets  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.getDefaultWallets)({\n    appName: \"RainbowKit demo\",\n    chains\n});\nconst demoAppInfo = {\n    appName: \"Rainbowkit Demo\"\n};\nconst connectors = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.connectorsForWallets)([\n    ...wallets,\n    {\n        groupName: \"Other\",\n        wallets: [\n            _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.wallet.argent({\n                chains\n            }),\n            _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.wallet.trust({\n                chains\n            }),\n            _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.wallet.ledger({\n                chains\n            }), \n        ]\n    }, \n]);\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider,\n    webSocketProvider\n});\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_3__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.RainbowKitProvider, {\n            appInfo: demoAppInfo,\n            chains: chains,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/emeraldfallarme/Documents/workspace/rainbowkit-next/pages/_app.tsx\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/emeraldfallarme/Documents/workspace/rainbowkit-next/pages/_app.tsx\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/emeraldfallarme/Documents/workspace/rainbowkit-next/pages/_app.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE4QjtBQUNhO0FBT1g7QUFDMEM7QUFDaEI7QUFDRjtBQUV4RCxNQUFNLEVBQUVVLE1BQU0sR0FBRUMsUUFBUSxHQUFFQyxpQkFBaUIsR0FBRSxHQUFHUCxzREFBZSxDQUM3RDtJQUNFRCxnREFBYTtJQUNiQSxnREFBYTtJQUNiQSxpREFBYztJQUNkQSxpREFBYztPQUNWYSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsMkJBQTJCLEtBQUssTUFBTSxHQUNsRDtRQUFDZiwrQ0FBWTtRQUFFQSw4Q0FBVztRQUFFQSxnREFBYTtRQUFFQSxnREFBYTtLQUFDLEdBQ3pELEVBQUU7Q0FDUCxFQUNEO0lBQ0VJLHdFQUFlLENBQUM7UUFBRWdCLE1BQU0sRUFBRSxrQ0FBa0M7S0FBRSxDQUFDO0lBQy9EZixzRUFBYyxFQUFFO0NBQ2pCLENBQ0Y7QUFFRCxNQUFNLEVBQUVnQixPQUFPLEdBQUUsR0FBR3hCLHlFQUFpQixDQUFDO0lBQ3BDeUIsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQmhCLE1BQU07Q0FDUCxDQUFDO0FBRUYsTUFBTWlCLFdBQVcsR0FBRztJQUNsQkQsT0FBTyxFQUFFLGlCQUFpQjtDQUMzQjtBQUVELE1BQU1FLFVBQVUsR0FBRzFCLDRFQUFvQixDQUFDO09BQ25DdUIsT0FBTztJQUNWO1FBQ0VJLFNBQVMsRUFBRSxPQUFPO1FBQ2xCSixPQUFPLEVBQUU7WUFDUHRCLGlFQUFhLENBQUM7Z0JBQUVPLE1BQU07YUFBRSxDQUFDO1lBQ3pCUCxnRUFBWSxDQUFDO2dCQUFFTyxNQUFNO2FBQUUsQ0FBQztZQUN4QlAsaUVBQWEsQ0FBQztnQkFBRU8sTUFBTTthQUFFLENBQUM7U0FDMUI7S0FDRjtDQUNGLENBQUM7QUFFRixNQUFNdUIsV0FBVyxHQUFHM0IsbURBQVksQ0FBQztJQUMvQjRCLFdBQVcsRUFBRSxJQUFJO0lBQ2pCTixVQUFVO0lBQ1ZqQixRQUFRO0lBQ1JDLGlCQUFpQjtDQUNsQixDQUFDO0FBRUYsU0FBU3VCLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBWSxFQUFFO0lBQ2pELHFCQUNFLDhEQUFDOUIsOENBQVc7UUFBQytCLE1BQU0sRUFBRUwsV0FBVztrQkFDOUIsNEVBQUNqQyxzRUFBa0I7WUFBQ3VDLE9BQU8sRUFBRVosV0FBVztZQUFFakIsTUFBTSxFQUFFQSxNQUFNO3NCQUN0RCw0RUFBQzBCLFNBQVM7Z0JBQUUsR0FBR0MsU0FBUzs7Ozs7b0JBQUk7Ozs7O2dCQUNUOzs7OztZQUNULENBQ2Q7QUFDSixDQUFDO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dpdGgtbmV4dC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLmNzcyc7XG5pbXBvcnQgJ0ByYWluYm93LW1lL3JhaW5ib3draXQvc3R5bGVzLmNzcyc7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHtcbiAgUmFpbmJvd0tpdFByb3ZpZGVyLFxuICBnZXREZWZhdWx0V2FsbGV0cyxcbiAgY29ubmVjdG9yc0ZvcldhbGxldHMsXG4gIHdhbGxldCxcbn0gZnJvbSAnQHJhaW5ib3ctbWUvcmFpbmJvd2tpdCc7XG5pbXBvcnQgeyBjaGFpbiwgY29uZmlndXJlQ2hhaW5zLCBjcmVhdGVDbGllbnQsIFdhZ21pQ29uZmlnIH0gZnJvbSAnd2FnbWknO1xuaW1wb3J0IHsgYWxjaGVteVByb3ZpZGVyIH0gZnJvbSAnd2FnbWkvcHJvdmlkZXJzL2FsY2hlbXknO1xuaW1wb3J0IHsgcHVibGljUHJvdmlkZXIgfSBmcm9tICd3YWdtaS9wcm92aWRlcnMvcHVibGljJztcblxuY29uc3QgeyBjaGFpbnMsIHByb3ZpZGVyLCB3ZWJTb2NrZXRQcm92aWRlciB9ID0gY29uZmlndXJlQ2hhaW5zKFxuICBbXG4gICAgY2hhaW4ubWFpbm5ldCxcbiAgICBjaGFpbi5wb2x5Z29uLFxuICAgIGNoYWluLm9wdGltaXNtLFxuICAgIGNoYWluLmFyYml0cnVtLFxuICAgIC4uLihwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19FTkFCTEVfVEVTVE5FVFMgPT09ICd0cnVlJ1xuICAgICAgPyBbY2hhaW4uZ29lcmxpLCBjaGFpbi5rb3ZhbiwgY2hhaW4ucmlua2VieSwgY2hhaW4ucm9wc3Rlbl1cbiAgICAgIDogW10pLFxuICBdLFxuICBbXG4gICAgYWxjaGVteVByb3ZpZGVyKHsgYXBpS2V5OiAnX2dnN3dTU2kwS01Cc2RLbkdWZkhEdWVxNnhNQjlFa0MnIH0pLFxuICAgIHB1YmxpY1Byb3ZpZGVyKCksXG4gIF1cbik7XG5cbmNvbnN0IHsgd2FsbGV0cyB9ID0gZ2V0RGVmYXVsdFdhbGxldHMoe1xuICBhcHBOYW1lOiAnUmFpbmJvd0tpdCBkZW1vJyxcbiAgY2hhaW5zLFxufSk7XG5cbmNvbnN0IGRlbW9BcHBJbmZvID0ge1xuICBhcHBOYW1lOiAnUmFpbmJvd2tpdCBEZW1vJyxcbn07XG5cbmNvbnN0IGNvbm5lY3RvcnMgPSBjb25uZWN0b3JzRm9yV2FsbGV0cyhbXG4gIC4uLndhbGxldHMsXG4gIHtcbiAgICBncm91cE5hbWU6ICdPdGhlcicsXG4gICAgd2FsbGV0czogW1xuICAgICAgd2FsbGV0LmFyZ2VudCh7IGNoYWlucyB9KSxcbiAgICAgIHdhbGxldC50cnVzdCh7IGNoYWlucyB9KSxcbiAgICAgIHdhbGxldC5sZWRnZXIoeyBjaGFpbnMgfSksXG4gICAgXSxcbiAgfSxcbl0pO1xuXG5jb25zdCB3YWdtaUNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gIGF1dG9Db25uZWN0OiB0cnVlLFxuICBjb25uZWN0b3JzLFxuICBwcm92aWRlcixcbiAgd2ViU29ja2V0UHJvdmlkZXIsXG59KTtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxXYWdtaUNvbmZpZyBjbGllbnQ9e3dhZ21pQ2xpZW50fT5cbiAgICAgIDxSYWluYm93S2l0UHJvdmlkZXIgYXBwSW5mbz17ZGVtb0FwcEluZm99IGNoYWlucz17Y2hhaW5zfT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9SYWluYm93S2l0UHJvdmlkZXI+XG4gICAgPC9XYWdtaUNvbmZpZz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiUmFpbmJvd0tpdFByb3ZpZGVyIiwiZ2V0RGVmYXVsdFdhbGxldHMiLCJjb25uZWN0b3JzRm9yV2FsbGV0cyIsIndhbGxldCIsImNoYWluIiwiY29uZmlndXJlQ2hhaW5zIiwiY3JlYXRlQ2xpZW50IiwiV2FnbWlDb25maWciLCJhbGNoZW15UHJvdmlkZXIiLCJwdWJsaWNQcm92aWRlciIsImNoYWlucyIsInByb3ZpZGVyIiwid2ViU29ja2V0UHJvdmlkZXIiLCJtYWlubmV0IiwicG9seWdvbiIsIm9wdGltaXNtIiwiYXJiaXRydW0iLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfRU5BQkxFX1RFU1RORVRTIiwiZ29lcmxpIiwia292YW4iLCJyaW5rZWJ5Iiwicm9wc3RlbiIsImFwaUtleSIsIndhbGxldHMiLCJhcHBOYW1lIiwiZGVtb0FwcEluZm8iLCJjb25uZWN0b3JzIiwiZ3JvdXBOYW1lIiwiYXJnZW50IiwidHJ1c3QiLCJsZWRnZXIiLCJ3YWdtaUNsaWVudCIsImF1dG9Db25uZWN0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjbGllbnQiLCJhcHBJbmZvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/providers/alchemy":
/*!******************************************!*\
  !*** external "wagmi/providers/alchemy" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/alchemy");

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/public");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();