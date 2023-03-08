import { useState, useEffect } from "react";
import { useTheme } from "@/hooks";

const Page = (props) => {
  const { theme } = useTheme();
  const [pageProps, setPageProps] = useState();

  useEffect(() => {
    setPageProps({ ...theme.spacing.page });
  }, []);

  useEffect(() => {
    setPageProps({ ...theme.spacing.page });
  }, [theme]);

  const getStyles = () => {
    console.log("pageprops:", pageProps);
    return {
      minHeight: "100vh",
      width: "100vw",
      overflowY: "scroll",
      zIndex: "0",
    };
  };

  return <div style={getStyles()}>{props.children}</div>;
};

export default Page;
