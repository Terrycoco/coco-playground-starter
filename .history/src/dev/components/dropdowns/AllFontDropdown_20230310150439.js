//for use in selecting project font variables
//dumb component - is not connected to store
import Select, { components } from "react-select";
import { Fragment, useState, useCallback, useEffect, useId } from "react";

const AllFontDropdown = ({ category, options, onSelect, ...props }) => {
  const dispatch = useDispatch();
  const themeFonts = useSelector(selectFonts);

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

  //get the current val in store
  const getSelected = () => {
    //what is in store now?
    let label = themeFonts[category]; //is label
    var result = options.find((item) => item.label === label);
    // console.log("default?: ", result);
    return result;
  };

  return (
    <div style={{ width: "100%" }}>
      <Select
        instanceId={useId}
        options={options}
        styles={customStyles}
        components={{ Option }}
        value={getSelected()}
        onChange={handleSelect}
      />
    </div>
  );
};

export default AllFontDropdown;
