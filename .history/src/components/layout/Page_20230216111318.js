import styled from "styled-components";
import { useTheme, useViewport } from "@/hooks";

let StyledPage = styled.div`
  min-height: 100vh;
  width: calc(100vw - 1px);
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 0;
  background-color: white;
`;

const Page = (props) => {
  const { theme } = useTheme();
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 620;

  useEffect(() => {
    //function to call
    const handleWindowResize = () => setWidth(window.innerWidth);

    //listen and call
    window.addEventListener("resize", handleWindowResize);

    //return function that removes event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <StyledPage
      style={theme.layout.page}
      {...props}
      onClick={(e) => props.onClick(e, "layout", "page")}
    >
      {props.children}
    </StyledPage>
  );
};

export default Page;
