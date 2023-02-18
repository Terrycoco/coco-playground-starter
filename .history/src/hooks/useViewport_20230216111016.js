import { useState, useEffect } from "react";

const useViewport = () => {
  const { width, setWidth } = useState(window.innerWidth);

  useEffect(() => {}, []);
};
