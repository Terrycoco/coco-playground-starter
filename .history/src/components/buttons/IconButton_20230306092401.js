import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const styles = {
  fontSize: "48px",
  color: "var(--clr-whitish)",
};

const IconButton = (props) => {
  const triggerParent = (e) => {
    props.onClick(e, props.name);
  };

  return (
    <button style={styles} className={props.className} onClick={triggerParent}>
      <FontAwesomeIcon icon={props.icon} />
    </button>
  );
};

export default IconButton;
