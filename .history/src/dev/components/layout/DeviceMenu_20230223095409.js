import Link from "next/link";
import { useState, useEffect } from "react";
//import styled from "styled-components";
import styles from "./layout.module.css";
import { useTheme } from "@/hooks";

const DeviceMenu = ({ showSettings, ...props }) => {
  const { theme } = useTheme();
  const [device, setDevice] = useState(props.device);
  const [showMe, setShowMe] = useState(showSettings);

  const changeDevice = (e) => {
    props.onChange(e);
  };

  useEffect(() => {
    setShowMe(showSettings);
  }, [showSettings]);

  const toggleSettings = () => {
    props.onClickSettings();
  };

  const getCN = (e) => {
    if (
      device === e.target.id ||
      (e.target.id === "settings" && showMe === true)
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
              <a id="mobile" onClick={changeDevice} className={(e) => getCN(e)}>
                Mobile
              </a>
            </li>
            <li>
              <a
                id="lgMobile"
                onClick={changeDevice}
                className={(e) => getCN(e)}
              >
                Lg Mobile
              </a>
            </li>
            <li>
              <a id="tablet" onClick={changeDevice} className={(e) => getCN(e)}>
                Tablet
              </a>
            </li>
            <li>
              <a id="laptop" onClick={changeDevice} className={(e) => getCN(e)}>
                Laptop
              </a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <a
                id="settings"
                onClick={toggleSettings}
                className={(e) => getCN(e)}
              >
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
