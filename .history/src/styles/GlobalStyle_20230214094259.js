//to create global CSS variables dependent on Theme
import { createGlobalStyle } from "styled-components";
import { currentTheme } from "@/themes";

const GlobalVariables = createGlobalStyle`
    --font-body: ${currentTheme.fonts.body};
    --font-display: ${currentTheme.fonts.display};
    --font-special: ${currentTheme.fonts.special};
    --font-mono: ${currentTheme.fonts.mono};
`;
