import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = (props) => {
  const triggerParent = (e) => {
    props.onClick(e, props.name);
  };

  return (
    <button className={props.className} onClick={triggerParent}>
      <FontAwesomeIcon icon={props.icon} />
    </button>
  );
};

export default Icon;
