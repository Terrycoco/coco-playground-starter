import styled from "styled-components";
import { useTheme } from "@/hooks";

let StyledPage = styled.div`
  minheight: 100vh;
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
      onClick={props.onClick}
      section="layout"
      el="page"
    >
      {props.children}
    </StyledPage>
  );
};

export default Page;
