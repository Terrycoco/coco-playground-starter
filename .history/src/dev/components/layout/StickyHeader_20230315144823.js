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
      height: containers.header.height + "rem",
      lineHeight: containers.header.height + "rem",
      backgroundColor: variables[containers.header.backgroundColor], //need from variablesSlice
      paddingLeft: containers.header.paddingLeft + "rem",
      paddingRight: containers.header.paddingRight + "rem",
    },
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
              <Link href="/playground" onClick={clickTheme}>
                Theme
              </Link>
            </li>
            <li>
              <Link href="/playground/#colors" onClick={clickColors}>
                Palette
              </Link>
            </li>
            <li>
              <Link href="/playground/#fonts" onClick={clickFonts}>
                Fonts
              </Link>
            </li>
            <li>
              <Link href="/playground/scale" onClick={clickScale}>
                Scale
              </Link>
            </li>
            <li>
              <a id="text" className={getCN("text")}>
                Text
              </a>
            </li>
            <li>
              <a
                id="spacing"
                className={getCN("containers")}
                onClick={clickContainers}
              >
                Containers
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
