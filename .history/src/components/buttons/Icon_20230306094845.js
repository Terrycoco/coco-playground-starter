import Icon from "@mdi/react";
import { mdiPencilRuler } from "@mdi/js";

const IconButton = (props) => {
  return (
    <Icon
      path={mdiPencilRuler}
      title="Design"
      size={1}
      horizontal
      vertical
      rotate={90}
      color="white"
      spin
    />
  );
};

export default IconButton;
