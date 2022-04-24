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
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Drawer_1 = __importDefault(require("@mui/material/Drawer"));
var List_1 = __importDefault(require("@mui/material/List"));
var ListItem_1 = __importDefault(require("@mui/material/ListItem"));
var ListItemText_1 = __importDefault(require("@mui/material/ListItemText"));
var Collapse_1 = __importDefault(require("@mui/material/Collapse"));
var ExpandLess_1 = __importDefault(require("@mui/icons-material/ExpandLess"));
var ExpandMore_1 = __importDefault(require("@mui/icons-material/ExpandMore"));
var Divider_1 = __importDefault(require("@mui/material/Divider"));
var Box_1 = __importDefault(require("@mui/material/Box"));
var brawlback_logo_png_1 = __importDefault(require("./assets/brawlback_logo.png"));
var drawerWidth = 270;
var menuOption;
(function (menuOption) {
    menuOption[menuOption["Home"] = 0] = "Home";
    menuOption[menuOption["ReplaysBrawl"] = 1] = "ReplaysBrawl";
    menuOption[menuOption["ReplaysPPlus"] = 2] = "ReplaysPPlus";
    menuOption[menuOption["Settings"] = 3] = "Settings";
})(menuOption || (menuOption = {}));
function Menu() {
    var _a = (0, react_1.useState)(true), openReplayMenu = _a[0], handleOpenReplayMenu = _a[1];
    var navigate = (0, react_router_dom_1.useNavigate)();
    var currentUrl = (0, react_router_dom_1.useLocation)();
    var handleButtonClick = function (ev, option) {
        switch (option) {
            case menuOption.Home:
                navigate('/');
                break;
            case menuOption.ReplaysBrawl:
                navigate('replays?vBrawl');
                break;
            case menuOption.ReplaysPPlus:
                navigate('replays?P+');
                break;
            case menuOption.Settings:
                navigate('settings');
                break;
            default:
                break;
        }
    };
    return ((0, jsx_runtime_1.jsxs)(Drawer_1["default"], __assign({ sx: {
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                border: "none",
                overflowX: 'hidden'
            }
        }, variant: 'permanent', anchor: 'left', PaperProps: { elevation: 9 } }, { children: [(0, jsx_runtime_1.jsx)(Box_1["default"], __assign({ sx: { textAlign: 'center', marginBottom: "25px" } }, { children: (0, jsx_runtime_1.jsx)("img", { src: brawlback_logo_png_1["default"], width: 150, height: 150 }) })), (0, jsx_runtime_1.jsxs)(List_1["default"], { children: [(0, jsx_runtime_1.jsx)(ListItem_1["default"], __assign({ button: true, selected: currentUrl.pathname === '/', onClick: function (ev) { return handleButtonClick(ev, menuOption.Home); } }, { children: (0, jsx_runtime_1.jsx)(ListItemText_1["default"], { primary: "Home" }) })), (0, jsx_runtime_1.jsx)(Divider_1["default"], {}), (0, jsx_runtime_1.jsxs)(ListItem_1["default"], __assign({ button: true, onClick: function () { return handleOpenReplayMenu(!openReplayMenu); } }, { children: [(0, jsx_runtime_1.jsx)(ListItemText_1["default"], { primary: "Replays" }), openReplayMenu ? (0, jsx_runtime_1.jsx)(ExpandLess_1["default"], {}) : (0, jsx_runtime_1.jsx)(ExpandMore_1["default"], {})] })), (0, jsx_runtime_1.jsx)(Divider_1["default"], {}), (0, jsx_runtime_1.jsxs)(Collapse_1["default"], __assign({ "in": openReplayMenu, timeout: "auto", unmountOnExit: true }, { children: [(0, jsx_runtime_1.jsxs)(List_1["default"], __assign({ component: "div", disablePadding: true }, { children: [(0, jsx_runtime_1.jsx)(ListItem_1["default"], __assign({ button: true, sx: { paddingLeft: 0, marginLeft: 4, borderLeft: 1 }, selected: currentUrl.pathname === '/replays' && currentUrl.search === '?P+', onClick: function (ev) { return handleButtonClick(ev, menuOption.ReplaysPPlus); } }, { children: (0, jsx_runtime_1.jsx)(ListItemText_1["default"], { sx: { paddingLeft: 1 }, primary: "P+" }) })), (0, jsx_runtime_1.jsx)(ListItem_1["default"], __assign({ button: true, sx: { paddingLeft: 0, marginLeft: 4, borderLeft: 1 }, selected: currentUrl.pathname === '/replays' && currentUrl.search === '?vBrawl', onClick: function (ev) { return handleButtonClick(ev, menuOption.ReplaysBrawl); } }, { children: (0, jsx_runtime_1.jsx)(ListItemText_1["default"], { sx: { paddingLeft: 1 }, primary: "vBrawl" }) }))] })), (0, jsx_runtime_1.jsx)(Divider_1["default"], {})] })), (0, jsx_runtime_1.jsx)(ListItem_1["default"], __assign({ button: true, selected: currentUrl.pathname === '/settings', onClick: function (ev) { return handleButtonClick(ev, menuOption.Settings); } }, { children: (0, jsx_runtime_1.jsx)(ListItemText_1["default"], { primary: "Settings" }) }))] })] })));
}
exports["default"] = Menu;
