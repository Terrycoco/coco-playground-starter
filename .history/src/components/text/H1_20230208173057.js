import { styled } from "styled-components";

const StyledH1 = (props) => styled.h1`
  color: var(--primary);
  background-color: var(--secondary);
`;

const H1 = (props) => {
  <>
    <h1>{props.children}</h1>
    <style jsx>
      {`
        h1 {
          color: var(--primary);
        }
      `}
    </style>
  </>;
};

export default H1;
