import styled from "styled-components";
import { useTheme } from "@/hooks";

let StyledDiv = styled.div`
  minheight: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Page = (props) => {
  const { theme } = useTheme();
  return <StyledDiv {...props}>{props.children}</StyledDiv>;
};

export default Page;
