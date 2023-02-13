import Select, { components } from "react-select";
import { Fragment, useState, useEffect } from "react";
import { useTheme } from "@/hooks";

const ColorDropdown = ({ section, element }) => {
  const { theme } = useTheme();
  const [styleObj, setStyleObj] = useState();

  useEffect(() => {
    if (!element === undefined) {
      setStyleObj(Object.assign({}, theme[section][element]));
    }
  }, [section, element, theme]);

  const Option = (props) => {
    return (
      <Fragment>
        <components.Option {...props}>
          <span style={{ backgroundColor: `` }}></span>
          {props.children}
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

  return <Select options={getOptions()} />;
};

export default ColorDropdown;
