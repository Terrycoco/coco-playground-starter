import styled from "styled-components";

let StyledDiv = styled.div`
    display: flex,
    flex-direction: column,
`;

const FlexColumn = (props) => {
  return <StyledDiv>{props.children}</StyledDiv>;
};

export default FlexColumn;
