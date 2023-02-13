import { globalColorVars } from "@/theme-config/colors";
import { createGlobalStyle } from "styled-components";

export default function App({ Component, pageProps }) {
  const colors = globalColorVars();
  console.log("colors", colors);
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {colors}
      </style>
    </>
  );
}
