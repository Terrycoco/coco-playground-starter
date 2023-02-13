import styled from "styled-components";

//overrides that coming down from parent(theme)
const StyledH1 = styled.h1`
  color: yellow;
  background-color: var(--secondary);
`;

const H1 = (props) => {
  return <h1>{props.children}</h1>;
};

export default H1;
