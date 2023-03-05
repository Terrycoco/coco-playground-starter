import Link from "next/link";
import { useState, useEffect } from "react";
import styled from "styled-components";
//import SVGLoader from "../components/loaders/SVGLoader";
//import { clearStorage, setStorage } from "../utils";
//import ActionModal from "../components/modals/ActionModal";
import { useTheme, useColorChanger } from "../hooks";

const StyledNav = styled.nav`
  nav {
    position: sticky;
    top: 0;
  }
  ul {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
    padding: 20px;
    background: #fff;
  }
  li {
    list-style: none;
    margin-right: 20px;
    font-size: 25px;
    font-weight: bold;
  }
  li a {
    text-decoration: none;
    color: #1ac;
  }
`;

const StickyHeader = (props) => {
  const { theme } = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [outer, setOuter] = useState();
  const [isChanged, setIsChanged] = useState(false);
  //   const [cl, setCl] = useState(
  //     mergeStyles(style, theme.layout.header, props.className)
  //   );

  // useEffect(() => {
  //   console.log("navbar receives cl:", props.className);
  //   let newcl = mergeStyles(style, theme.layout.navbar, props.className);
  //   setCl(newcl);
  // }, [theme.layout.navbar, props.className]);

  // const resetTheme = () => {
  //   // props.onThemeReset(); //from parent
  //   // setShowModal(false);
  // };

  return (
    <>
      <StyledNav>
        <ul>
          <li>
            <a href="#first">First</a>
          </li>
          <li>
            <a href="#second">Second</a>
          </li>
          <li>
            <a href="#third">Third</a>
          </li>
        </ul>
      </StyledNav>
    </>
  );
};

export default StickyHeader;
