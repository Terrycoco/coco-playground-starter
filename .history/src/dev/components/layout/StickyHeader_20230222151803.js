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

  return (
    <div>
      <nav className={styles.nav}>
        <div>
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
        </div>
        <div>
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
        </div>
      </nav>
    </div>
  );
};

export default StickyHeader;
