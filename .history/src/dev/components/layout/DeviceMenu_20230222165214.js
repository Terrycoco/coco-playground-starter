import Link from "next/link";
import { useState, useEffect } from "react";
//import styled from "styled-components";
import styles from "./layout.module.css";
import { useTheme } from "@/hooks";

const DeviceMenu = (props) => {
  const { theme } = useTheme();
  const [device, setDevice] = useState("laptop");

  return (
    <>
      <div className={styles.devicemenu}>
        <nav>
          <ul>
            <li>
              <a id="mobile">Mobile</a>
            </li>
            <li>
              <a id="lgMobile">Lg Mobile</a>
            </li>
            <li>
              <a id="tablet">Tablet</a>
            </li>
            <li>
              <a id="laptop">Laptop</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default DeviceMenu;
