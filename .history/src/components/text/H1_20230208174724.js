import styled from "styled-components";

const StyledH1 = styled.h1`
  color: red;
  background-color: var(--secondary);
`;

const H1 = (props) => {
  return <StyledH1>{props.children}</StyledH1>;
};

export default H1;
