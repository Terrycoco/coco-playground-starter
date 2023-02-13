import { styled } from "styled-components";

const StyledH1 = (props) => styled.h1`
  color: var(--primary);
  background-color: var(--secondary);
`;

const H1 = (props) => {
  <>
    <h1>{props.children}</h1>
  </>;
};

export default H1;
