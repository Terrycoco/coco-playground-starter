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
              <a>Mobile</a>
            </li>
            <li>
              <a>Lg Mobile</a>
            </li>
            <li>
              <a>Tablet</a>
            </li>
            <li>
              <a>Laptop</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default DeviceMenu;
