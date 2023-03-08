import Icon from "@mdi/react";
import { mdiPencilRuler, mdiViewDashboardEdit, mdiPencil } from "@mdi/js";
import styles from "./buttons.module.css";

const IconButton = (props) => {
  const triggerParent = () => {
    props.onClick();
  };

  return (
    <Icon
      className={styles.icon}
      path={mdiPencil}
      size="1rem"
      color="white"
      onClick={triggerParent}
    />
  );
};

export default IconButton;

/* <Icon
path={mdiPencilRuler}
title="Design"
size={1}
horizontal
vertical
rotate={90}
color="white"
spin
/> */
