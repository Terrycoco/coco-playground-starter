import { useTheme } from "@/hooks";
import styled from "styled-components";

let StyledText = styled.div`
  color: black;
`;

const Text = (props) => {
  const { theme } = useTheme();

  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    props.clicked(e, "text", props.elem);
  };

  return (
    props.elem && (
      <StyledText
        style={theme.text[props.elem]}
        onClick={handleClick}
        {...props}
      >
        {props.children}
      </StyledText>
    )
  );
};

export default Text;
