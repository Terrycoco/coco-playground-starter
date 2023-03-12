//for use in selecting project font variables
//smart component - is connected to store
import Select, { components } from "react-select";
import { useState, useCallback, useEffect, useId } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFonts, selectAllFonts, selectVars } from "@/store/fontsSlice";

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

  //get the current val in store
  const getSelected = (label) => {
    var result = options.find((item) => item.label === label);
    console.log("default?: ", result);
    return result;
  };

  return <Select instanceId={useId} options={options} />;
};

export default AllFontDropdown;
