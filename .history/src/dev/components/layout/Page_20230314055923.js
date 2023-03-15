import { useState, useEffect } from "react";
import { useTheme } from "@/hooks";

const Page = (props) => {
  const { theme } = useTheme();

  const getStyles = () => {
    if (theme.containers.page === undefined) return;
    return {
      minHeight: "100vh",
      width: "100vw",
      overflowY: "scroll",
      zIndex: "0",
      paddingTop: theme.containers.page.paddingTop + "rem",
      paddingBottom: theme.containers.page.paddingBottom + "rem",
      paddingLeft: theme.containers.page.paddingLeft + "rem",
      paddingRight: theme.containers.page.paddingRight + "rem",
    };
  };

  return <div style={getStyles()}>{props.children}</div>;
};

export default Page;
