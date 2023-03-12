//for use in selecting project font variables
//smart component - is connected to store
import Select, { components } from "react-select";
import { Fragment, useState, useCallback, useEffect, useId } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFonts, selectAllFonts, updateFont } from "@/store/fontsSlice";

const AllFontDropdown = ({ category, ...props }) => {
  const dispatch = useDispatch();
  const allFonts = useSelector(selectAllFonts);
  const themeFonts = useSelector(selectFonts);
  const [options, setOptions] = useState([]);

  //load up options only once
  useEffect(() => {
    let opts = [];
    for (const f in allFonts) {
      //label is font name, value is the real font variable in store
      opts.push({ label: allFonts[f], value: f });
    }
    setOptions(opts);
    console.log("options:", opts);
  }, [allFonts]);

  const customStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      border: "none",
      fontFamily: "Arial",
      fontSize: "14px",
      backgroundColor: "yellow",
      flexBasis: "50%",
    }),
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      textAlign: "left",
      border: "none",
    }),
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
    console.log("default?: ", result);
    return result;
  };

  const handleSelect = (e) => {
    //store gets name of font (will internally set variable)
    let label = e.label;
    dispatch(updateFont({ key: category, value: label }));
  };

  return (
    <Select
      instanceId={useId}
      options={options}
      styles={customStyles}
      components={{ Option }}
      value={getSelected()}
      onChange={handleSelect}
    />
  );
};

export default AllFontDropdown;
