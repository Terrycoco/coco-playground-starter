import { useState, useEffect } from "react";
import { useTheme } from "@/hooks";

const Page = (props) => {
  const { theme } = useTheme();
  const [pageProps, setPageProps] = useState();

  useEffect(() => {
    setPageProps({ ...theme.spacing.page });
  }, [theme]);

  const getStyles = () => {
    return {
      minHeight: "100vh",
      width: "100vw",
      overflowY: "scroll",
      zIndex: "0",
    };
  };

  return <div styles={getStyles()}>{props.children}</div>;
};

export default Page;
