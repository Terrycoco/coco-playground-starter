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

  const getCN = (e) => {
    if (
      device === e.target.id ||
      (e.target.id === "settings" && showSettings === true)
    ) {
      return "selected";
    } else {
      return "unselected";
    }
  };

  return (
    <>
      <div className={styles.devicemenu}>
        <nav>
          <ul>
            <li>
              <a id="mobile" onClick={changeDevice} className={getCN}>
                Mobile
              </a>
            </li>
            <li>
              <a id="lgMobile" onClick={changeDevice} style={getStyle}>
                Lg Mobile
              </a>
            </li>
            <li>
              <a id="tablet" onClick={changeDevice} style={getStyle}>
                Tablet
              </a>
            </li>
            <li>
              <a id="laptop" onClick={changeDevice} style={getStyle}>
                Laptop
              </a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <a id="settings" onClick={toggleSettings} style={getStyle}>
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
