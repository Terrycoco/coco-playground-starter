import styled from "styled-components";

let StyledDiv = styled.div``;

const Page = (props) => {
  return <StyledDiv {...props}>{props.children}</StyledDiv>;
};

export default Page;
