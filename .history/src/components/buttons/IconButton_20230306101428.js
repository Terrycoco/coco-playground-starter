import Icon from "@mdi/react";
import { mdiPencilRuler } from "@mdi/js";

const IconButton = (props) => {
  const triggerParent = () => {
    props.onClick();
  };

  return (
    <Icon
      path={mdiPencilRuler}
      title="Design"
      size={"1rem"}
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
