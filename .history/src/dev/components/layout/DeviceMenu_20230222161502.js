import Link from "next/link";
import { useState, useEffect } from "react";
//import styled from "styled-components";
import styles from "./layout.module.css";
import { useTheme } from "@/hooks";

const DeviceMenu = (props) => {
  const { theme } = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [outer, setOuter] = useState();
  const [isChanged, setIsChanged] = useState(false);

  return (
    <>
      <div>
        <nav className={styles.devicemenu}>
          <ul>
            <li>
              <button>Mobile</button>
            </li>
            <li>
              <button>Lg Mobile</button>
            </li>
            <li>
              <button>Tablet</button>
            </li>
            <li>
              <button>Laptop</button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default DeviceMenu;
