import IconButton from "./IconButton";

import css from "./buttons.module.css";
//TODO MERGE css WITH INCOMING

export const Button = (props) => {
  return (
    <button role="button" className={css.btn} {...props}>
      {props.children}
    </button>
  );
};

export const ButtonSketch = (props) => {
  return (
    <button role="button" className={css.btnSketch} {...props}>
      {props.children}
    </button>
  );
};

export const Tab = (props) => {
  return (
    <button role="button" className={css.tab} {...props}>
      {props.children}
    </button>
  );
};

module.exports = { Button, ButtonSketch, IconButton, Tab };
