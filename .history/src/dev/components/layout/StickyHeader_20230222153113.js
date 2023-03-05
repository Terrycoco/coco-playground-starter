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
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <a href="#second">Typography</a>
          </li>
          <li>
            <a href="#third">Spacing</a>
          </li>
          <li>
            <a href="#theme">Theme</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default StickyHeader;
