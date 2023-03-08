import { useState, useEffect } from "react";
import { useTheme } from "@/hooks";

const Page = (props) => {
  const { theme } = useTheme();
  // const [pageProps, setPageProps] = useState();

  // useEffect(() => {
  //   setPageProps({ ...theme.spacing.page });
  // }, []);

  // useEffect(() => {
  //   setPageProps({ ...theme.spacing.page });
  // }, [theme]);

  const getStyles = () => {
    if (pageProps === undefined) return;
    return {
      minHeight: "100vh",
      width: "100vw",
      overflowY: "scroll",
      zIndex: "0",
      paddingTop: theme.spacing.page.paddingTop + "rem",
      paddingBottom: theme.spacing.page.paddingBottom + "rem",
      paddingLeft: theme.spacing.page.paddingLeft + "rem",
      paddingRight: theme.spacing.page.paddingRight + "rem",
    };
  };

  return <div style={getStyles()}>{props.children}</div>;
};

export default Page;
