import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./layout.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentDevice, updateDevice } from "@/store/fontSizesSlice";

const DeviceMenu = ({ ...props }) => {
  const { theme } = useTheme();
  const [device, setDevice] = useState(props.device);

  const changeDevice = (e) => {
    props.onChange(e.target.id);
  };

  useEffect(() => {
    setDevice(props.device);
  }, [props.device]);

  const getCN = (id) => {
    if (device === id) {
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
            <li>
              <a
                id="desktop"
                onClick={changeDevice}
                className={getCN("desktop")}
              >
                Desktop
              </a>
            </li>
            <li>
              <a id="tv" onClick={changeDevice} className={getCN("tv")}>
                TV
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default DeviceMenu;
