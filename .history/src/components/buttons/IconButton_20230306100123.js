import Icon from "@mdi/react";
import { mdiPencilRuler } from "@mdi/js";

const IconButton = (props) => {
  const styles = {
    width: "1rem",
  };

  const triggerParent = () => {
    props.onClick();
  };

  return (
    <Icon
      style={styles}
      path={mdiPencilRuler}
      title="Design"
      size={1}
      color="white"
      onClick={triggerParent}
    />
  );
};

export default IconButton;

{
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
}
