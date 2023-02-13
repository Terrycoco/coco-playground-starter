import styled from "styled-components";
import { useTheme } from "@/hooks";

let StyledH1 = styled.h1`
  color: black;
`;

const Page = (props) => {
  const { theme } = useTheme();

  return (
    <StyledH1
      style={theme.layout.page}
      {...props}
      onClick={(e) => props.onClick(e, "layout", "page")}
    >
      {props.children}
    </StyledH1>
  );
};

export default Page;
