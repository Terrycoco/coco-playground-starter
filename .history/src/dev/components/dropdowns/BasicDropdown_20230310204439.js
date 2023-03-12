import css from "./dropdowns.module.css";

const Dropdown = (props) => {
  return (
    <div className={css.dropdown}>
      <span>label</span>
      <div className="dropdown-content">
        <div onClick={handleSelect}>Option 1</div>
        <div onClick={handleSelect}>Option 2</div>
        <div onClick={handleSelect}>Option 3</div>
      </div>
    </div>
  );
};
