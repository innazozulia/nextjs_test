"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Accordion.js":
/*!*********************************!*\
  !*** ./components/Accordion.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar Accordion = function() {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_1___default().useState(null), 2), selected = ref[0], setSelected = ref[1];\n    var data = [\n        {\n            question: \"What can i do to protect our planet?\",\n            answer: \"Not to make an open fire \"\n        },\n        {\n            question: \"How to save nature ecologe?\",\n            answer: \"lihnksdjnc sbcskubc hvbds kjsbdc kjsdbsdc ksjdbsck\"\n        },\n        {\n            question: \"What is nature convertation?\",\n            answer: \"lihnksdjnc sbcskubc hvbds kjsbdc kjsdbsdc ksjdbsck\"\n        }, \n    ];\n    var toggle = function(i) {\n        if (selected === i) {\n            return setSelected(null);\n        }\n        setSelected(i);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"accordion\",\n            children: data.map(function(item, i) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"item\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"title\",\n                            onClick: function() {\n                                return toggle(i);\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: item.question\n                                }, void 0, false, {\n                                    fileName: \"/Users/inna/Documents/Project/Front/React/next/components/Accordion.js\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: selected === i ? \"-\" : \"+\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/inna/Documents/Project/Front/React/next/components/Accordion.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/inna/Documents/Project/Front/React/next/components/Accordion.js\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: selected === i ? \"content__show\" : \"content\",\n                            children: item.answer\n                        }, void 0, false, {\n                            fileName: \"/Users/inna/Documents/Project/Front/React/next/components/Accordion.js\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, i, true, {\n                    fileName: \"/Users/inna/Documents/Project/Front/React/next/components/Accordion.js\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/inna/Documents/Project/Front/React/next/components/Accordion.js\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/inna/Documents/Project/Front/React/next/components/Accordion.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, _this);\n};\n_s(Accordion, \"PVKrpNrydW4BpnDEq9OT3cVmCk4=\");\n_c = Accordion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Accordion);\nvar _c;\n$RefreshReg$(_c, \"Accordion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FjY29yZGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUEwQjtBQUUxQixJQUFNQyxTQUFTLEdBQUcsV0FBTTs7SUFDdEIsSUFBZ0NELEdBQW9CLG9GQUFwQkEscURBQWMsQ0FBQyxJQUFJLENBQUMsTUFBN0NHLFFBQVEsR0FBaUJILEdBQW9CLEdBQXJDLEVBQUVJLFdBQVcsR0FBSUosR0FBb0IsR0FBeEI7SUFFNUIsSUFBTUssSUFBSSxHQUFHO1FBQ1g7WUFDRUMsUUFBUSxFQUFFLHNDQUFzQztZQUNoREMsTUFBTSxFQUFFLDJCQUEyQjtTQUNwQztRQUNEO1lBQ0VELFFBQVEsRUFBRSw2QkFBNkI7WUFDdkNDLE1BQU0sRUFBRSxvREFBb0Q7U0FDN0Q7UUFDRDtZQUNFRCxRQUFRLEVBQUUsOEJBQThCO1lBQ3hDQyxNQUFNLEVBQUUsb0RBQW9EO1NBQzdEO0tBQ0Y7SUFFRCxJQUFNQyxNQUFNLEdBQUcsU0FBQ0MsQ0FBQyxFQUFLO1FBQ3BCLElBQUlOLFFBQVEsS0FBS00sQ0FBQyxFQUFFO1lBQ2xCLE9BQU9MLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxQjtRQUNEQSxXQUFXLENBQUNLLENBQUMsQ0FBQyxDQUFDO0tBQ2hCO0lBQ0QscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLFdBQVc7a0JBQ3hCLDRFQUFDRCxLQUFHO1lBQUNDLFNBQVMsRUFBQyxXQUFXO3NCQUN2Qk4sSUFBSSxDQUFDTyxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFSixDQUFDO3FDQUNoQiw4REFBQ0MsS0FBRztvQkFBU0MsU0FBUyxFQUFDLE1BQU07O3NDQUMzQiw4REFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLE9BQU87NEJBQUNHLE9BQU8sRUFBRTt1Q0FBTU4sTUFBTSxDQUFDQyxDQUFDLENBQUM7NkJBQUE7OzhDQUM3Qyw4REFBQ00sSUFBRTs4Q0FBRUYsSUFBSSxDQUFDUCxRQUFROzs7Ozt5Q0FBTTs4Q0FDeEIsOERBQUNVLE1BQUk7OENBQUViLFFBQVEsS0FBS00sQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHOzs7Ozt5Q0FBUTs7Ozs7O2lDQUNyQztzQ0FFTiw4REFBQ0MsS0FBRzs0QkFBQ0MsU0FBUyxFQUFFUixRQUFRLEtBQUtNLENBQUMsR0FBRyxlQUFlLEdBQUcsU0FBUztzQ0FDekRJLElBQUksQ0FBQ04sTUFBTTs7Ozs7aUNBQ1I7O21CQVJFRSxDQUFDOzs7O3lCQVNMO2FBQ1AsQ0FBQzs7Ozs7aUJBQ0U7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0dBMUNLUixTQUFTO0FBQVRBLEtBQUFBLFNBQVM7QUEyQ2YsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FjY29yZGlvbi5qcz85YTU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQWNjb3JkaW9uID0gKCkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IGRhdGEgPSBbXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBjYW4gaSBkbyB0byBwcm90ZWN0IG91ciBwbGFuZXQ/XCIsXG4gICAgICBhbnN3ZXI6IFwiTm90IHRvIG1ha2UgYW4gb3BlbiBmaXJlIFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcXVlc3Rpb246IFwiSG93IHRvIHNhdmUgbmF0dXJlIGVjb2xvZ2U/XCIsXG4gICAgICBhbnN3ZXI6IFwibGlobmtzZGpuYyBzYmNza3ViYyBodmJkcyBranNiZGMga2pzZGJzZGMga3NqZGJzY2tcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHF1ZXN0aW9uOiBcIldoYXQgaXMgbmF0dXJlIGNvbnZlcnRhdGlvbj9cIixcbiAgICAgIGFuc3dlcjogXCJsaWhua3Nkam5jIHNiY3NrdWJjIGh2YmRzIGtqc2JkYyBranNkYnNkYyBrc2pkYnNja1wiLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgdG9nZ2xlID0gKGkpID0+IHtcbiAgICBpZiAoc2VsZWN0ZWQgPT09IGkpIHtcbiAgICAgIHJldHVybiBzZXRTZWxlY3RlZChudWxsKTtcbiAgICB9XG4gICAgc2V0U2VsZWN0ZWQoaSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3JkaW9uXCI+XG4gICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCIgb25DbGljaz17KCkgPT4gdG9nZ2xlKGkpfT5cbiAgICAgICAgICAgICAgPGgyPntpdGVtLnF1ZXN0aW9ufTwvaDI+XG4gICAgICAgICAgICAgIDxzcGFuPntzZWxlY3RlZCA9PT0gaSA/IFwiLVwiIDogXCIrXCJ9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzZWxlY3RlZCA9PT0gaSA/IFwiY29udGVudF9fc2hvd1wiIDogXCJjb250ZW50XCJ9PlxuICAgICAgICAgICAgICB7aXRlbS5hbnN3ZXJ9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBY2NvcmRpb24iLCJ1c2VTdGF0ZSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJkYXRhIiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJ0b2dnbGUiLCJpIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaXRlbSIsIm9uQ2xpY2siLCJoMiIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Accordion.js\n"));

/***/ })

});