import Link from "next/link";
import { useState, useEffect } from "react";
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
    setDevice(props.device);
  }, [props.device]);

  useEffect(() => {
    setShowMe(showSettings);
  }, [showSettings]);

  const toggleSettings = () => {
    props.onClickSettings();
  };

  const getCN = (id) => {
    if (device === id || (id === "settings" && showMe === true)) {
      return styles.selected;
    } else {
      return styles.unselected;
    }
  };

  return (
    <>
      <div className={styles.devicemenu}>
        <nav>
          <ul>
            <li>
              <a id="mobile" onClick={changeDevice} className={getCN("mobile")}>
                Mobile
              </a>
            </li>
            <li>
              <a id="tablet" onClick={changeDevice} className={getCN("tablet")}>
                Tablet
              </a>
            </li>
            <li>
              <a id="laptop" onClick={changeDevice} className={getCN("laptop")}>
                Laptop
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default DeviceMenu;
