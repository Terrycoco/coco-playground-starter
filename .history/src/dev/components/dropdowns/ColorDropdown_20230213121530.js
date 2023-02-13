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
    return (
      <Fragment>
        <components.Option {...props} key={Math.random()}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon
              icon={["fas", "square"]}
              style={{
                color: `${props.data.value}`,
                height: "2rem",
                width: "2rem",
                paddingRight: "1rem",
              }}
              fixedwidth
            />
            {props.children}
          </div>
        </components.Option>
      </Fragment>
    );
  };

  const getOptions = () => {
    let groupedOptions = [];
    let mainOptions = [];
    let variants = [];

    for (const p in theme.colors) {
      mainOptions.push({
        value: theme.colors[p],
        label: p,
      });
    }
    groupedOptions.push({ label: "main colors", options: mainOptions });
    for (const v in theme.colorVariants) {
      variants.push({
        value: theme.colorVariants[v],
        label: v,
      });
    }
    groupedOptions.push({ label: "variants", options: variants });

    return groupedOptions;
  };

  return <Select options={getOptions()} components={{ Option }} />;
};

export default ColorDropdown;
