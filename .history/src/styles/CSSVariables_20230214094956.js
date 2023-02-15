//to create global CSS variables dependent on Theme
import { createGlobalStyle } from "styled-components";
//import { currentTheme } from "@/themes";

//TODO MAKE THIS DYNAMIC LOADING OF FONT CATEGORIES?
const GlobalStyle = createGlobalStyle`
    --font-body: ${props.theme.fonts.body};
    --font-display: ${props.theme.fonts.display};
    --font-special: ${props.theme.fonts.special};
    --font-mono: ${props.theme.fonts.mono};
`;

const CSSVariables = (props) => {
  return <GlobalStyle theme={props.theme} />;
};

export default CSSVariables;
