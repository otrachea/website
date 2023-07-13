import { createContext } from "react";

export enum THEME {
    LIGHT = "light",
    DARK = "dark",
}

export const ThemeContext = createContext(THEME.LIGHT)