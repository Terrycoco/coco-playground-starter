import { useTheme } from "@/hooks";
import styled from "styled-components";

let StyledText = styled.div`
  color: black;
`;

const Text = ({ element, ...props }) => {
  const { theme } = useTheme();

  const handleClick = (e) => {
    props.onClick ? props.onClick(e, theme.text[element]) : null;
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
