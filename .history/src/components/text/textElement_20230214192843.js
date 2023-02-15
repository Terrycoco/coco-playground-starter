import { useTheme } from "@/hooks";
import styled from "styled-components";

let StyledText = styled.h1`
  color: black;
`;

const H1 = ({ element, ...props }) => {
  const { theme } = useTheme();

  const handleClick = (e) => {
    props.onClick ? props.onClick(e, "text", element) : null;
  };

  return (
    <StyledH1 style={theme.text.h1} onClick={handleClick}>
      {props.children}
    </StyledH1>
  );
};

export default StyledText;
