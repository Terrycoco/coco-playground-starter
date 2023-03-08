import Icon from "@mdi/react";
import { mdiPencilRuler } from "@mdi/js";

const IconButton = (props) => {
  return (
    <Icon
      path={mdiPencilRuler}
      title="User Profile"
      size={1}
      horizontal
      vertical
      rotate={90}
      color="red"
      spin
    />
  );
};

export default IconButton;
