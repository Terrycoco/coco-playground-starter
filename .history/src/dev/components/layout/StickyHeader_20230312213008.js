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
//can I add drawer here?

const StickyHeader = (props) => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  const currentForm = useSelector(selectCurrentForm);
  const drawerIsOpen = useSelector(selectDrawerIsOpen);
  const { theme } = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [outer, setOuter] = useState();
  const [isChanged, setIsChanged] = useState(false);
  const [showMe, setShowMe] = useState(false);

  const getCN = (id) => {
    if (id === "spacing" && showMe === true) {
      return styles.selected;
    } else {
      return styles.unselected;
    }
  };

  //todo: add theme spacing ??
  const styles = {
    header: {
      height: theme.spacing.header.height + "rem",
      lineHeight: theme.spacing.header.height + "rem",
    },
  };

  const clickScale = () => {
    console.log("got here");
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
              <Link href="/playground">Theme</Link>
            </li>
            <li>
              <Link href="/playground/#colors" onClick={clickColors}>
                Colors
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
              <a id="typography" className={getCN("typography")}>
                Typography
              </a>
            </li>
            <li>
              <a id="spacing" className={getCN("spacing")}>
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
