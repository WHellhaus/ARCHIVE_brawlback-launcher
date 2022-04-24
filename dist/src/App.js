"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.routesObj = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var CssBaseline_1 = __importDefault(require("@mui/material/CssBaseline"));
var styles_1 = require("@mui/material/styles");
var useMediaQuery_1 = __importDefault(require("@mui/material/useMediaQuery"));
var react_router_dom_1 = require("react-router-dom");
var theme_1 = __importDefault(require("./theme"));
var Pages_1 = require("./Pages/");
function Home() {
    return ((0, jsx_runtime_1.jsx)("h3", { children: "Home" }));
}
function Replay() {
    return ((0, jsx_runtime_1.jsx)("h3", { children: "Replay" }));
}
exports.routesObj = [
    {
        path: '/',
        element: (0, jsx_runtime_1.jsx)(Pages_1.AppBase, {}),
        name: 'base',
        children: [
            {
                index: true,
                element: (0, jsx_runtime_1.jsx)(Home, {}),
                name: 'home'
            },
            {
                path: 'replays',
                element: (0, jsx_runtime_1.jsx)(Replay, {}),
                name: 'replays'
            },
            {
                path: 'settings',
                name: 'settings'
            }
        ]
    }
];
function App() {
    var themeMode = (0, useMediaQuery_1["default"])('(prefers-color-scheme: dark)');
    var _a = (0, react_1.useState)(themeMode ? 'dark' : 'light'), mode = _a[0], setMode = _a[1];
    var theme = (0, react_1.useMemo)(function () { return (0, styles_1.createTheme)((0, theme_1["default"])(mode)); }, [themeMode]);
    var routes = (0, react_router_dom_1.useRoutes)(exports.routesObj);
    return ((0, jsx_runtime_1.jsxs)(styles_1.ThemeProvider, __assign({ theme: theme }, { children: [(0, jsx_runtime_1.jsx)(CssBaseline_1["default"], {}), routes] })));
}
exports["default"] = App;
