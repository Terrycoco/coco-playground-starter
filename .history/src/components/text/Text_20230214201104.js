import { useTheme } from "@/hooks";
import styled from "styled-components";

let StyledText = styled.div`
  color: black;
`;

const Text = (props) => {
  const { theme } = useTheme();

  return (
    props.elem && (
      <StyledText
        style={theme.text[props.elem]}
        onClick={(e) => props.onClick(e, "text", props.elem)}
        {...props}
      >
        {props.children}
      </StyledText>
    )
  );
};

export default Text;
