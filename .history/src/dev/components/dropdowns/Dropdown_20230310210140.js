import css from "./dropdowns.module.css";

const Dropdown = (props) => {
  const handleSelect = (e) => {
    console.log("clicked", e);
  };

  return (
    <div className={css.dropdown}>
      <div className="dropbtn">Click me</div>
      <ul className="dropdown-content">
        <li onClick={handleSelect}>Option 1</li>
        <li onClick={handleSelect}>Option 2</li>
        <li onClick={handleSelect}>Option 3</li>
      </ul>
    </div>
  );
};

export default Dropdown;
