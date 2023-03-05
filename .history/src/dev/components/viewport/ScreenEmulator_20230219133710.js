import { useState } from "react";
import { useViewport } from "@/hooks";

const ScreenEmulator = (props) => {
  const [screen, setScreen] = useState();
  const { viewport } = useViewport();

  return <div>{props.children}</div>;
};

export default ScreenEmulator;
