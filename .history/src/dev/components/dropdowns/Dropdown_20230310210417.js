import css from "./dropdowns.module.css";

const Dropdown = (props) => {
  const handleSelect = (e) => {
    console.log("clicked", e);
  };

  return (
    <div className={css.dropdown}>
      <div className={css.dropbtn}>Click me</div>
      <ul className={css.dropdown - content}>
        <li data-value="1" onClick={handleSelect}>
          Option 1
        </li>
        <li data-value="2" onClick={handleSelect}>
          Option 2
        </li>
        <li data-value="3" onClick={handleSelect}>
          Option 3
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
