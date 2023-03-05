import Link from "next/link";
import { useState, useEffect } from "react";
//import styled from "styled-components";
import styles from "./layout.module.css";
import { useTheme } from "@/hooks";

const DeviceMenu = (props) => {
  const { theme } = useTheme();
  const [device, setDevice] = useState(props.device);
  const [showSettings] = useState(props.showSettings);

  const changeDevice = (e) => {
    props.onChange(e);
  };

  const toggleSettings = () => {
    props.onClickSettings();
  };

  const getStyle = (e) => {
    if (
      device === e.target.id ||
      (e.target.id === "settings" && showSettings === true)
    ) {
      return {
        color: "var(--clr-primary)",
      };
    } else {
      return {
        color: "var(--clr-blackish)",
      };
    }
  };

  return (
    <>
      <div className={styles.devicemenu}>
        <nav>
          <ul>
            <li>
              <a id="mobile" onClick={changeDevice}>
                Mobile
              </a>
            </li>
            <li>
              <a id="lgMobile" onClick={changeDevice}>
                Lg Mobile
              </a>
            </li>
            <li>
              <a id="tablet" onClick={changeDevice}>
                Tablet
              </a>
            </li>
            <li>
              <a id="laptop" onClick={changeDevice}>
                Laptop
              </a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <a id="settings" onClick={toggleSettings}>
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default DeviceMenu;
