import Link from "next/link";
import { useState, useEffect } from "react";
//import styled from "styled-components";
import styles from "./layout.module.css";
import { useTheme } from "@/hooks";

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
    <div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#first">Mobile</a>
          </li>
          <li>
            <a href="#second">Lg Mobile</a>
          </li>
          <li>
            <a href="#third">Tablet</a>
          </li>
          <li>
            <a href="#third">Laptop</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#first">Mobile</a>
          </li>
          <li>
            <a href="#second">Lg Mobile</a>
          </li>
          <li>
            <a href="#third">Tablet</a>
          </li>
          <li>
            <a href="#third">Laptop</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default StickyHeader;
