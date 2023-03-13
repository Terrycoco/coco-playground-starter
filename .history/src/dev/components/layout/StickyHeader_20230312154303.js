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
} from "@/store/playgroundSlice";
//can I add drawer here?

const StickyHeader = (props) => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
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

  const selectOption = (option) => {
    props.onSelect(option); //to parent
  };

  //todo: add theme spacing ??
  const styles = {
    header: {
      height: theme.spacing.header.height + "rem",
      lineHeight: theme.spacing.header.height + "rem",
    },
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
              <Link href="#colors">Colors</Link>
            </li>
            <li>
              <Link
                href="/playground/#fonts"
                onClick={(e) => dispatch(setCurrentForm("fonts"))}
              >
                Fonts
              </Link>
            </li>
            <li>
              <Link
                href="/playground/scale"
                onClick={(e) => setCurrentForm("scale")}
              >
                Scale
              </Link>
            </li>
            <li>
              <a
                id="typography"
                onClick={(e) => selectOption("typography")}
                className={getCN("typography")}
              >
                Typography
              </a>
            </li>
            <li>
              <a
                id="spacing"
                onClick={(e) => selectOption("spacing")}
                className={getCN("spacing")}
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
