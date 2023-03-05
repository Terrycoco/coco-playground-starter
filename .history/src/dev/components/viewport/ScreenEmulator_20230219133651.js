import { useState } from "react";
import { useViewport } from "@/hooks";

const ScreenEmulator = (props) => {
  const [screen, setScreen] = useState();

  return <div>{props.children}</div>;
};

export default ScreenEmulator;
