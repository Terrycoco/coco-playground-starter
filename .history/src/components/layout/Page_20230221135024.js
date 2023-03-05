import styled from "styled-components";
import { useTheme, useViewport } from "@/hooks";

let StyledPage = styled.div`
  min-height: 100vh;
  width: calc(100vw - 1px);
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 0;
  background-color: black;
  position: absolute;
  top: 0;
`;

const Page = (props) => {
  const { theme } = useTheme();
  const { width } = useViewport();
  const breakpoint = 620;

  return (
    <StyledPage
      style={theme.layout.page}
      {...props}
      onClick={(e) =>
        props.onClick ? props.onClick(e, "layout", "page") : null
      }
    >
      {props.children}
    </StyledPage>
  );
};

export default Page;
