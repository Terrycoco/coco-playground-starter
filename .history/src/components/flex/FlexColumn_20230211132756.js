import styled from "styled-components";

let StyledDiv = styled.div`
    display: flex,
    flex-direction: row,
`;

const FlexColumn = (props) => {
  return <StyledDiv {...props}>{props.children}</StyledDiv>;
};

export default FlexColumn;
