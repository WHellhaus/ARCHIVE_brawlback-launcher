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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var system_1 = require("@mui/system");
var Container_1 = __importDefault(require("@mui/material/Container"));
var Menu_1 = __importDefault(require("./Menu"));
var UserHeader_1 = __importDefault(require("./UserHeader"));
var PlayButton_1 = __importDefault(require("./PlayButton"));
var AppBase = function (props) {
    return ((0, jsx_runtime_1.jsxs)(system_1.Box, __assign({ sx: { display: 'flex' } }, { children: [(0, jsx_runtime_1.jsx)(Menu_1["default"], {}), (0, jsx_runtime_1.jsxs)(system_1.Box, __assign({ component: 'main', sx: { display: 'block', width: '100%' } }, { children: [(0, jsx_runtime_1.jsx)(UserHeader_1["default"], {}), (0, jsx_runtime_1.jsx)(Container_1["default"], { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {}) }), (0, jsx_runtime_1.jsx)(system_1.Box, __assign({ sx: { position: "absolute", bottom: 50, right: 50 } }, { children: (0, jsx_runtime_1.jsx)(PlayButton_1["default"], {}) }))] }))] })));
};
exports["default"] = AppBase;
