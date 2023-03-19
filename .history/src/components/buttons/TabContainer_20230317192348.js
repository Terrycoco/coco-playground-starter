import css from "./buttons.module.css";

const TabContainer = (props) => {
  return <div className={css.tab}>{props.children}</div>;
};

export default TabContainer;
