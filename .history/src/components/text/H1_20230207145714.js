import { useTheme } from "styled-components";

const H1 = (props) => {
  const theme = useTheme();

  console.log("Current theme: ", theme);
  return <h1>{props.children}</h1>;
};

export default H1;
