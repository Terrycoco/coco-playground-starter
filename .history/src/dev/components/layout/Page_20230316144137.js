import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectContainers } from "@/store/containersSlice";

const Page = (props) => {
  const { theme } = useTheme();

  const getStyles = () => {
    if (theme.containers.page === undefined) return;
    return {
      minHeight: "100vh",
      width: "100vw",
      overflowY: "scroll",
      zIndex: "0",
      paddingTop: theme.containers.header.paddingTop,
      paddingBottom: theme.containers.page.paddingBottom,
      paddingLeft: theme.containers.page.paddingLeft,
      paddingRight: theme.containers.page.paddingRight,
    };
  };

  return <div style={getStyles()}>{props.children}</div>;
};

export default Page;
