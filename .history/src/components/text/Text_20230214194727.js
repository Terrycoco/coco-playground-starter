import { useTheme } from "@/hooks";
import styled from "styled-components";

let StyledText = styled.div`
  color: black;
`;

const Text = ({ elem, ...props }) => {
  const { theme } = useTheme();

  const handleClick = (e) => {
    props.onClick ? props.onClick(e, "text", elem) : null;
  };

  return (
    element && (
      <StyledText style={theme.text[element]} onClick={handleClick} {...props}>
        {props.children}
      </StyledText>
    )
  );
};

export default Text;
