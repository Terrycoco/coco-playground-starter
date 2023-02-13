import theme from "@/themes";

//overrides that coming down from parent(theme)
const StyledH1 = styled.h1`
  color: yellow;
  background-color: var(--secondary);
  font-family: var(--font-montserrat);
`;

const H1 = (props) => {
  return <StyledH1>{props.children}</StyledH1>;
};

export default H1;
