import { useTheme } from "@/hooks";
import styled from "styled-components";

let StyledText = styled.div`
  color: black;
`;

const Text = ({ type, ...props }) => {
  const { theme } = useTheme();

  const handleClick = (e) => {
    props.onClick(e, "text", type);
  };

  return (
    elem && (
      <StyledText style={theme.text[type]} onClick={handleClick} {...props}>
        {props.children}
      </StyledText>
    )
  );
};

export default Text;
