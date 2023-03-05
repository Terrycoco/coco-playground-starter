import { useState } from "react";

const ScreenEmulator = (props) => {
  const [screen, setScreen] = useState();
  return <div>{props.children}</div>;
};

export default ScreenEmulator;
