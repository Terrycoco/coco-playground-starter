import { globalColorVars } from "@/theme-config/colors";
import { createGlobalStyle } from "styled-components";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {globalColorVars()}
      </style>
    </>
  );
}
