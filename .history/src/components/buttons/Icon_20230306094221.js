import Icon from "@mdi/react";

const styles = {
  fontSize: "48px",
  color: "var(--clr-whitish)",
};

const IconButton = (props) => {
  const triggerParent = (e) => {
    props.onClick(e, props.name);
  };

  return (
    <i style={styles} className={props.className} onClick={triggerParent}>
      <FontAwesomeIcon icon={props.icon} />
    </i>
  );
};

export default IconButton;
