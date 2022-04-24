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
var system_1 = require("@mui/system");
var material_1 = require("@mui/material");
var Avatar_1 = __importDefault(require("@mui/material/Avatar"));
var BrawlbackCover_transparent_png_1 = __importDefault(require("../../assets/BrawlbackCover-transparent.png"));
var UserHeader = function (_a) {
    var children = _a.children;
    var username = 'Hellhaus';
    var connectCode = 'Hell#533';
    return ((0, jsx_runtime_1.jsxs)(system_1.Box, __assign({ sx: { display: 'flex', width: '100%', justifyContent: 'space-between' } }, { children: [(0, jsx_runtime_1.jsx)(system_1.Box, { children: (0, jsx_runtime_1.jsx)("img", { src: BrawlbackCover_transparent_png_1["default"], width: 315, height: 77 }) }), (0, jsx_runtime_1.jsxs)(system_1.Box, __assign({ sx: { display: 'inline-flex', marginRight: '30px' } }, { children: [(0, jsx_runtime_1.jsx)(Avatar_1["default"], __assign({ sx: { bgcolor: 'primary.main', marginTop: '15px', marginRight: '15px' } }, { children: "N" })), (0, jsx_runtime_1.jsxs)(system_1.Box, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ variant: 'h6' }, { children: username })), (0, jsx_runtime_1.jsx)(material_1.Typography, __assign({ variant: 'caption', sx: { color: 'text.secondary' } }, { children: connectCode }))] })] }))] })));
};
exports["default"] = UserHeader;
