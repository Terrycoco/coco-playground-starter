import styled from "styled-components";
import { useTheme } from "@/hooks";

let StyledH1 = styled.h1`
  color: black;
`;

const H1 = (props) => {
  const { theme } = useTheme();

  return (
    <StyledH1
      style={theme.text.h1}
      {...props}
      onClick={(e) => props.onClick(e, "text", "h1")}
    >
      {props.children}
    </StyledH1>
  );
};

export default H1;
