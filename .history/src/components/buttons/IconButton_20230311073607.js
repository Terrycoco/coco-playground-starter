import Icon from "@mdi/react";
import styles from "./buttons.module.css";

const IconButton = (props) => {
  const triggerParent = () => {
    props.onClick();
  };

  return (
    <Icon
      className={styles.icon}
      path={props.type}
      size={props.size ? props.size : "1.5rem"}
      color={props.color ? props.color : "white"}
      onClick={triggerParent}
      {...props}
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
