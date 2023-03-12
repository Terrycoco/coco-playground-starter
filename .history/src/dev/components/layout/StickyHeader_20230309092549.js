import Link from "next/link";
import { useState, useEffect } from "react";
import css from "./layout.module.css";
import { useTheme } from "@/hooks";
import { IconButton } from "@/components/buttons";

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

  const toggleSpacing = () => {
    props.onClickSpacing();
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
              <Link href="#fonts">Fonts</Link>
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
              <IconButton onClick={toggleDrawer} />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default StickyHeader;
