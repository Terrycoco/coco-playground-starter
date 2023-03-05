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
  const [showMe, setShowMe] = useState(false);

  const getCN = (id) => {
    if (device === id || (id === "spacing" && showMe === true)) {
      return styles.selected;
    } else {
      return styles.unselected;
    }
  };

  return (
    <>
      <div className={styles.mainmenu}>
        <nav>
          <ul>
            <li>
              <Link href="/playground">Home</Link>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <Link href="/playground/colors">Palette</Link>
            </li>
            <li>
              <Link href="/playground/typography">Typography</Link>
            </li>
            <li>
              <a
                id="spacing"
                onClick={toggleSpacing}
                className={getCN("spacing")}
              >
                Spacing
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default StickyHeader;
