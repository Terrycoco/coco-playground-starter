//for use in selecting project font variables
//dumb component - is not connected to store
import Select, { components } from "react-select";
import { Fragment, useState, useCallback, useEffect, useId } from "react";

const AllFontDropdown = ({
  category,
  options,
  onSelect,
  defaultValue, //will be a font name
  ...props
}) => {
  const [selectedOption, setSelectedOption] = useState();

  useEffect(() => {
    if (defaultValue && defaultValue !== selectedOption.label) {
      let opt = options.find((item) => item.label === defaultValue);
      setSelectedOption(opt);
    }
  }, []);

  useEffect(() => {
    let opt = options.find((item) => item.label === defaultValue);
    setSelectedOption(opt);
  }, [defaultValue]);

  const customStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      border: "none",
      fontFamily: "Arial",
      fontSize: "14px",
    }),
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      textAlign: "left",
      border: "none",
    }),
  };

  const handleSelect = (e) => {
    onSelect(e, category); //back up to parent
  };

  const Option = (props) => {
    //console.log("option gets props:", props.data.value);
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
            <div style={{ fontFamily: props.data.value }}>{props.children}</div>
          </div>
        </components.Option>
      </Fragment>
    );
  };

  return (
    <div style={{ width: "100%" }}>
      <Select
        instanceId={useId}
        options={options}
        styles={customStyles}
        components={{ Option }}
        value={selectedOption}
        onChange={handleSelect}
      />
    </div>
  );
};

export default AllFontDropdown;
