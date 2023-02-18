import styled from "styled-components";
import { useTheme } from "@/hooks";
import { useState, useEffect } from "react";

let StyledPage = styled.div`
  min-height: 100vh;
  width: calc(100vw - 1px);
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 0;
  background-color: white;
`;

const Page = (props) => {
  const { theme } = useTheme();

  return (
    <StyledPage
      style={theme.layout.page}
      {...props}
      onClick={(e) => props.onClick(e, "layout", "page")}
    >
      {props.children}
    </StyledPage>
  );
};

export default Page;
