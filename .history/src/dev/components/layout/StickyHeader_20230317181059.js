import Link from "next/link";
import { useState, useEffect } from "react";
import css from "./layout.module.css";
import { useTheme } from "@/hooks";
import { IconButton } from "@/components/buttons";
import { mdiPencil } from "@mdi/js";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentPage,
  setCurrentForm,
  setDrawerIsOpen,
  selectCurrentPage,
  selectDrawerIsOpen,
  selectCurrentForm,
} from "@/store/playgroundSlice";

import { selectContainers } from "@/store/containersSlice";
import { selectColors } from "@/store/colorsSlice";
import { selectVariables } from "@/store/variablesSlice";
//can I add drawer here?

const StickyHeader = (props) => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const currentForm = useSelector(selectCurrentForm);
  const drawerIsOpen = useSelector(selectDrawerIsOpen);
  const containers = useSelector(selectContainers);
  const colors = useSelector(selectColors);
  const variables = useSelector(selectVariables);
  const [showModal, setShowModal] = useState(false);
  const [outer, setOuter] = useState();
  const [isChanged, setIsChanged] = useState(false);
  const [showMe, setShowMe] = useState(false);

  const getCN = (id) => {
    if (id === "containers" && showMe === true) {
      return styles.selected;
    } else {
      return styles.unselected;
    }
  };

  const styles = {
    header: {
      height: containers.header.height,
      lineHeight: containers.header.height,
      backgroundColor: variables[containers.header.backgroundColor], //need from variablesSlice
      paddingLeft: containers.header.paddingLeft,
      paddingRight: containers.header.paddingRight,
    },
  };

  const getLinkStyle = (opt) => {
    if (currentForm === opt) {
      return { fontWeight: "bold" };
    } else {
      return { fontWeight: "normal" };
    }
  };

  const clickScale = () => {
    dispatch(setCurrentForm("scale"));
    dispatch(setDrawerIsOpen(true));
  };

  const clickFonts = () => {
    //if not already there switch and open
    if (currentForm !== "fonts") {
      dispatch(setCurrentForm("fonts"));
      dispatch(setDrawerIsOpen(true));
    } else {
      //just toggle
      dispatch(setDrawerIsOpen(!drawerIsOpen));
    }
  };
  const clickColors = () => {
    //if not already there switch and open
    if (currentForm !== "colors") {
      dispatch(setCurrentForm("colors"));
      dispatch(setDrawerIsOpen(true));
    } else {
      //just toggle
      dispatch(setDrawerIsOpen(!drawerIsOpen));
    }
  };

  const clickTheme = () => {
    //if not already there switch and open

    //dispatch(setCurrentForm("colors"));
    dispatch(setDrawerIsOpen(false));
  };

  const clickContainers = () => {
    //if not already there switch and open
    if (currentForm !== "containers") {
      dispatch(setCurrentForm("containers"));
      dispatch(setDrawerIsOpen(true));
    } else {
      //just toggle
      dispatch(setDrawerIsOpen(!drawerIsOpen));
    }
  };
  const clickText = () => {
    //if not already there switch and open
    if (currentForm !== "text") {
      dispatch(setCurrentForm("text"));
      dispatch(setDrawerIsOpen(true));
    } else {
      //just toggle
      dispatch(setDrawerIsOpen(!drawerIsOpen));
    }
  };

  return (
    <>
      <header style={styles.header} className={css.mainmenu}>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <Link
                href="/playground/#colors"
                onClick={clickColors}
                style={getLinkStyle("colors")}
              >
                Colors
              </Link>
            </li>

            <li>
              <a
                id="text"
                className={getCN("text")}
                style={getLinkStyle("text")}
                onClick={clickText}
              >
                Typography
              </a>
            </li>
            <li>
              <a
                id="containers"
                className={getCN("containers")}
                style={getLinkStyle("containers")}
                onClick={clickContainers}
              >
                Spacing
              </a>
            </li>
            <li>
              <IconButton
                onClick={(e) => dispatch(setDrawerIsOpen(!drawerIsOpen))}
                type={mdiPencil}
              />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default StickyHeader;
