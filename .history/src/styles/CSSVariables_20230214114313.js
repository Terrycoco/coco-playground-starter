//to create global CSS variables dependent on Theme
import { createGlobalStyle } from "styled-components";
import { useTheme } from "@/hooks";
import { fontVariables } from "@/utils/fonts";
//import { currentTheme } from "@/themes";

//TODO MAKE THIS DYNAMIC LOADING OF FONT CATEGORIES?
const GlobalStyle = createGlobalStyle`
 html: {
   --font-body: ${(props) => props.theme.fonts.display};
   --font-display: ${(props) => props.theme.fonts.display};
   --font-special: ${(props) => props.theme.fonts.display};
   --font-mono: ${(props) => props.theme.fonts.display};
 }
`;

const CSSVariables = (props) => {
  const { theme } = useTheme();
  return (
    <div className={fontVariables}>
      <GlobalStyle theme={theme} />
    </div>
  );
};

export default CSSVariables;

// --font-body: ${(props) => props.theme.fonts.display};
// --font-display: ${(props) => props.theme.fonts.display};
// --font-special: ${(props) => props.theme.fonts.display};
// --font-mono: ${(props) => props.theme.fonts.display};
