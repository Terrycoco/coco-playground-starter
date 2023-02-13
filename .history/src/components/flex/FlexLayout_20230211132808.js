import styled from "styled-components";

let StyledDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const FlexLayout = (props) => {
  return <StyledDiv {...props}>{props.children}</StyledDiv>;
};

export default FlexLayout;
