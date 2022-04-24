"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var client_1 = require("react-dom/client");
var react_router_dom_1 = require("react-router-dom");
var App_1 = __importDefault(require("./App"));
var container = document.getElementById('root');
var root = (0, client_1.createRoot)(container);
root.render((0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsx)(App_1["default"], {}) }));
