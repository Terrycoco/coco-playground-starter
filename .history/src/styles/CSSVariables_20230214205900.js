//to create global CSS variables dependent on Theme
import styled from "styled-components";
import { useTheme } from "@/hooks";
import { fontVariables, getFontVariable } from "@/utils/fonts";
//import { currentTheme } from "@/themes";

//TODO MAKE THIS DYNAMIC LOADING OF FONT CATEGORIES?
const Vars = styled.div`
  --bp-horiz-mobile: "640px";
  --bp-tablet: "768px";
  --bp-laptop: "1028px";
  --bp-desktop: "1280px";
  --bp-tv: "1536px";
  --font-body: ${(props) => props.theme.fonts.body};
  --font-display: ${(props) => props.theme.fonts.display};
  --font-special: ${(props) => props.theme.fonts.special};
  --font-mono: ${(props) => props.theme.fonts.mono};
`;

const CSSVariables = (props) => {
  const { theme } = useTheme();
  return <Vars theme={theme}>{props.children}</Vars>;
};

export default CSSVariables;
