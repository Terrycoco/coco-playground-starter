import Link from "next/link";
import { useState, useEffect } from "react";
import css from "./layout.module.css";
import { useTheme } from "@/hooks";
import { IconButton } from "@/components/buttons";
import { mdiPencil } from "@mdi/js";

const StickyHeader = (props) => {
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

  const toggleSpacing = () => {
    props.onClickSpacing();
    setOption("spacing");
  };

  const styles = {
    header: {
      height: theme.spacing.header.height + "rem",
      lineHeight: theme.spacing.header.height + "rem",
    },
  };

  const toggleTypography = () => {
    props.onClickTypography();
  };

  const toggleScale = () => {
    props.onClickScale();
  };

  const toggleDrawer = () => {
    props.onClickDesign();
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
                onClick={(e) => selectOption("fonts")}
              >
                Fonts
              </Link>
            </li>
            <li>
              <Link href="/playground/scale">Scale</Link>
            </li>
            <li>
              <a
                id="typography"
                onClick={toggleTypography}
                className={getCN("typography")}
              >
                Typography
              </a>
            </li>
            <li>
              <a
                id="spacing"
                onClick={toggleSpacing}
                className={getCN("spacing")}
              >
                Spacing
              </a>
            </li>
            <li>
              <IconButton onClick={toggleDrawer} type={mdiPencil} />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default StickyHeader;
