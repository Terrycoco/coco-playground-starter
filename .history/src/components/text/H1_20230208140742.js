import { styled } from "styled-components";

const styledH1 = (props) => styled.h1`
  color: var(--primary);
`;

const H1 = (props) => {
  <StyledH1>{props.children}</StyledH1>;
};

export default H1;
