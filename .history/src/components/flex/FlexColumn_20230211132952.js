import styled from "styled-components";

let StyledDiv = styled.div`
    width: 100%,
    display: flex,
    flex-direction: column,
`;

const FlexColumn = (props) => {
  return <StyledDiv {...props}>{props.children}</StyledDiv>;
};

export default FlexColumn;
