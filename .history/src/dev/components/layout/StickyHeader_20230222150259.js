import Link from "next/link";
import { useState, useEffect } from "react";
//import styled from "styled-components";
import styles from "./layout.module.css";
import { useTheme } from "@/hooks";

// const StyledNav = styled.div`
//   nav {
//     position: fixed;
//     right: 0;
//     left: 0;
//     z-index: 999;
//   }
//   ul {
//     width: 100%;
//     display: flex;
//     justify-content: flex-end;
//     box-sizing: border-box;
//     margin-top: 0;
//     height: 3rem;
//     background: white;
//     align-items: center;
//   }
//   li {
//     list-style: none;
//     margin-right: 20px;
//     font-size: 25px;
//     font-weight: bold;
//     &:hover: {
//       color: var(--clr-primary);
//     }
//   }
//   li a {
//     text-decoration: none;
//     color: var(--clr-blackish);
//     text-transform: uppercase;
//     font-family: var(--font-display);
//     font-size: 0.75rem;
//     font-weight: normal;
//     letter-spacing: 0.1em;
//     &:hover: {
//       color: var(--clr-primary);
//     }
//   }
// `;

// const StyledLi = styled.li`
//   list-style: none;
//   margin-right: 20px;
//   font-size: 25px;
//   font-weight: bold;
//   &:hover: {
//     color: var(--clr-primary);
//   }
// `;

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
      </nav>
    </div>
  );
};

export default StickyHeader;
