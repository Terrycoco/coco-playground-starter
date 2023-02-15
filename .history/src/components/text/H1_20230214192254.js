import { useTheme } from "@/hooks";
let StyledH1 = styled.h1`
  color: black;
`;

const H1 = (props) => {
  const { theme } = useTheme();

  const handleClick = (e) => {
    props.onClick ? props.onClick(e, "text", "h1") : null;
  };

  return <StyledH1>{props.children}</StyledH1>;
};

export default H1;
