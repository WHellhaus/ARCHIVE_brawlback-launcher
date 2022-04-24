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
exports.__esModule = true;
var styles_1 = require("@mui/material/styles");
// default theme with correct primary color for accessing theme props in styleoverrides
var defaultTheme = (0, styles_1.createTheme)({
    palette: {
        primary: { main: '#4CEBB4' }
    }
});
var getThemeOptions = function (mode) { return ({
    palette: __assign({ mode: mode }, (mode === 'light' ?
        // Theme for Light mode
        {
            primary: { main: '#4CEBB4' },
            text: {
                primary: '#000000',
                secondary: '#444444'
            },
            divider: '#000000',
            background: {
                "default": '#FFFFFF',
                paper: '#CCCCCC'
            }
        } :
        // Theme for Dark mode
        {
            primary: { main: '#4CEBB4' },
            text: {
                primary: '#FFFFFF',
                secondary: '#DDDDDD'
            },
            divider: '#FFFFFF',
            background: {
                "default": '#414242',
                paper: '#595A5A'
            }
        })),
    // CSS Class Overrides for both themes
    components: {
        MuiListItem: {
            styleOverrides: {
                "root": {
                    "&.Mui-selected": {
                        "background": defaultTheme.palette.primary.main
                    }
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                primary: {
                    fontWeight: defaultTheme.typography.fontWeightMedium
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                "root": {
                    "&:hover": {
                        "background": defaultTheme.palette.primary.dark
                    }
                }
            }
        }
    }
}); };
exports["default"] = getThemeOptions;
