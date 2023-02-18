//to create global CSS variables dependent on Theme
import styled from "styled-components";
import { useTheme } from "@/hooks";
import { fontVariables, getFontVariable } from "@/utils/fonts";
//import { currentTheme } from "@/themes";

//TODO MAKE THIS DYNAMIC LOADING OF FONT CATEGORIES?
const Vars = styled.div`
  --font-body: ${(props) => props.theme.fonts.body};
  --font-display: ${(props) => props.theme.fonts.display};
  --font-special: ${(props) => props.theme.fonts.special};
  --font-mono: ${(props) => props.theme.fonts.mono};
  --clr-primary: ${(props) => props.theme.colors.primary};
  --clr-blackish75: ${(props) => props.theme.colors.blackish75};
`;

const CSSVariables = (props) => {
  const { theme } = useTheme();
  return <Vars theme={theme}>{props.children}</Vars>;
};

export default CSSVariables;
