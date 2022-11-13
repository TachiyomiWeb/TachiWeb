import dark from './dark';
import light from './light';

export interface Theme {
    colorPrimary: string;
    colorOnPrimary: string;
    colorPrimaryContainer: string;
    colorOnPrimaryContainer: string;
    colorSecondary: string;
    colorOnSecondary: string;
    colorSecondaryContainer: string;
    colorOnSecondaryContainer: string;
    colorTertiary: string;
    colorOnTertiary: string;
    colorTertiaryContainer: string;
    colorOnTertiaryContainer: string;
    colorBackground: string;
    colorOnBackground: string;
    colorSurface: string;
    colorOnSurface: string;
    colorSurfaceVariant: string;
    colorOnSurfaceVariant: string;
    colorOutline: string;
    colorOnSurfaceInverse: string;
    colorSurfaceInverse: string;
    colorPrimaryInverse: string;
    elevationOverlayColor?: string;
}

export interface ThemeList {
    dark: Record<keyof typeof dark, Theme>;
    light: Record<keyof typeof light, Theme>;
}

export type Themes = keyof typeof dark & keyof typeof light;

const themeList: ThemeList = {
    dark, light
};

export default themeList;