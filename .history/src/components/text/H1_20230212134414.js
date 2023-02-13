import styled from "styled-components";
import { useTheme } from "@/hooks";

let StyledH1 = styled.h1`
  color: black;
`;

const H1 = (props) => {
  const { theme } = useTheme();

  const handleClick = (e) => {
    props.onClick(e, "text", "h1");
  };

  return (
    <StyledH1 style={theme.text.h1} onClick={handleClick}>
      {props.children}
    </StyledH1>
  );
};

export default H1;
