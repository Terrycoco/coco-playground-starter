import { useTheme } from "@/hooks";
import styled from "styled-components";

let StyledText = styled.div`
  color: black;
`;

const Text = (props) => {
  const { theme } = useTheme();

  const handleClick = (e) => {
    //props.onClick(e, "text", props.elem);
    console.log("got here");
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
