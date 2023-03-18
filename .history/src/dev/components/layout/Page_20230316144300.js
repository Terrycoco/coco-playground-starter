import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectContainers } from "@/store/containersSlice";

const Page = (props) => {
  const containers = useSelector(selectContainers);

  const getStyles = () => {
    if (containers.page === undefined) return;
    return {
      minHeight: "100vh",
      width: "100vw",
      overflowY: "scroll",
      zIndex: "0",
      ...containers.page,
    };
  };

  return <div style={getStyles()}>{props.children}</div>;
};

export default Page;
