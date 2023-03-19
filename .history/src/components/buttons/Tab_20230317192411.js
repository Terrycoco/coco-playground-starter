import css from "./buttons.module.css";

const TabContainer = (props) => {
  return <button className={css.tabbtn}>{props.children}</button>;
};

export default TabContainer;
