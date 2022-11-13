import themeList, { Theme, Themes } from './colors';
import { createTheme, darkScrollbar } from '@mui/material';

export function getThemeColors(name: Themes, isDark: boolean) {
    return themeList[isDark ? 'dark' : 'light'][name];
};

export function toAmoled(colors: Theme): Theme {
    return {
        ...colors,
        colorBackground: "#000000",
        colorSurface: "#000001"
    };
}

export function create(theme: 'dark' | 'light') {
    return createTheme({
        palette: { mode: theme },
        ...(theme == 'dark' ? ({
            components: {
                MuiCssBaseline: {
                    styleOverrides: {
                        body: darkScrollbar()
                    }
                }
            }
        }) : {})
    });
}
