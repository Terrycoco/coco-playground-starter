import styled from "styled-components";

let StyledDiv = styled.div`
  width: 100%,
  display: flex;
  flex-direction: row;

  @media (min-width: 1024px) {
    flex-direction: column;
  }
`;

const FlexLayout = (props) => {
  return <StyledDiv {...props}>{props.children}</StyledDiv>;
};

export default FlexLayout;
