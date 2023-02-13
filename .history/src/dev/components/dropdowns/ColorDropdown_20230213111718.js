import Select, { components } from "react-select";
import { Fragment, useState, useEffect } from "react";
import { useTheme } from "@/hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ColorDropdown = ({ section, element }) => {
  const { theme } = useTheme();
  const [styleObj, setStyleObj] = useState();

  useEffect(() => {
    if (!element === undefined) {
      setStyleObj(Object.assign({}, theme[section][element]));
    }
  }, [section, element, theme]);

  const Option = (props) => {
    console.log("optionprops:", props);
    return (
      <Fragment>
        <components.Option {...props} key={Math.random()}>
          <FontAwesomeIcon icon="faSquare" />
          <div>{props.children}</div>
        </components.Option>
      </Fragment>
    );
  };

  const getOptions = () => {
    const options = [];

    for (const p in theme.colors) {
      options.push({
        value: theme.colors[p],
        label: p,
      });
    }
    return options;
  };

  return <Select options={getOptions()} components={{ Option }} />;
};

export default ColorDropdown;
