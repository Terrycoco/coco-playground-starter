import Icon from "@mdi/react";
import { mdiPencilRuler } from "@mdi/js";

const IconButton = (props) => {
  const styles = {
    width: "1.5rem",
  };

  return (
    <Icon
      path={mdiPencilRuler}
      title="Design"
      size={1}
      horizontal
      vertical
      color="white"
      spin
    />
  );
};

export default IconButton;
