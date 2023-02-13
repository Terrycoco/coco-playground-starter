import styled from "styled-components";
import { useTheme } from "@/hooks";

let StyledPage = styled.div`
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 0;
  background-color: white;
`;

const Page = (props) => {
  const { theme } = useTheme();

  return (
    <StyledPage
      style={theme.layout.page}
      {...props}
      onClick={(e) => props.onClick(e, "layout", "page")}
    >
      {props.children}
    </StyledPage>
  );
};

export default Page;
