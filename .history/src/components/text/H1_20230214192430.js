import { useTheme } from "@/hooks";
import styled from "styled-components";

let StyledH1 = styled.h1`
  color: black;
`;

const H1 = (props) => {
  const { theme } = useTheme();

  const handleClick = (e) => {
    props.onClick ? props.onClick(e, "text", "h1") : null;
  };

  return (
    <StyledH1 style={theme.text.h1} onClick={handleClick}>
      {props.children}
    </StyledH1>
  );
};

export default H1;
