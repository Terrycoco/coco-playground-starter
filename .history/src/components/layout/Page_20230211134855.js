import styled from "styled-components";
import { useTheme } from "@/hooks";

let StyledDiv = styled.div``;

const Page = (props) => {
  const { theme } = useTheme();
  return <StyledDiv {...props}>{props.children}</StyledDiv>;
};

export default Page;
