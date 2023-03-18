import { useState, useEffect, useMemo } from "react";
import FormWrapper from "@/dev/components/forms/FormWrapper";
import StyleGridExpander from "@/dev/components/forms/StyleGridExpander";
import StyleGridItem from "@/dev/components/forms/StyleGridItem";
import { useSelector, useDispatch } from "react-redux";
import { selectContainers, updateContainer } from "@/store/containersSlice";
import { selectFontObjs } from "@/store/fontsSlice";
import RangeSlider from "@/dev/components/forms/sliders/RangeSlider";
import ColorDropdown from "@/dev/components/dropdowns/ColorDropdown";
import FontDropdown from "@/dev/components/dropdowns/FontDropdown";

const SliderItem = ({ element, propName, defaultValue, onSelect }) => {
  const [val, setVal] = useState(null);

  useEffect(() => {
    if (defaultValue) {
      let num = parseFloat(defaultValue.match(/[\d\.]+/));
      setVal(num);
      console.log(propName, "val is:", num);
    }
  }, []);

  //update comes from SliderItem
  function handleValueChange(newval, unit) {
    setVal(newval);
    //to parent form
    onSelect({
      element: element,
      propName: propName,
      value: newval,
      unit: unit,
    });
  }

  //prop specific values
  const getSliderProps = () => {
    //props vary depending on propName
    switch (propName) {
      case "letterSpacing":
      case "wordSpacing":
        return {
          min: -1,
          max: 8,
          value: val,
          step: 1,
          unit: "px",
          onChange: (newval) => handleValueChange(newval, "px"),
        };
        break;
      case "fontWeight":
        return {
          min: 100,
          max: 1000,
          value: val,
          step: 100,
          unit: "",
          onChange: (newval) => handleValueChange(newval, ""),
        };
        break;
      case "maxWidth":
        return {
          min: 15,
          max: 100,
          value: val,
          step: 1,
          unit: "ch",
          onChange: (newval) => handleValueChange(newval, "ch"),
        };
        break;
      default:
        return {
          min: 0,
          max: 20,
          value: val,
          step: 0.5,
          unit: "rem",
          onChange: (newval) => handleValueChange(newval, "rem"),
        };
    }
  };

  //each slider needs own props
  const sliderProps = useMemo(() => getSliderProps(), [val]);

  return (
    <StyleGridItem label={propName} key={element + propName}>
      <RangeSlider
        key={element + propName}
        unit={sliderProps.unit}
        defaultValue={val}
        {...sliderProps}
      />
    </StyleGridItem>
  );
};

const ContainerForm = (props) => {
  const dispatch = useDispatch();
  const containers = useSelector(selectContainers);
  const themedFonts = useSelector(selectFontObjs);

  console.log("container state:", containers);

  const updateColor = (obj) => {
    console.log("obj received:", obj);
    dispatch(
      updateContainer({
        element: obj.element,
        propName: obj.propName,
        value: obj.themeVar,
      })
    );
  };

  const updateTextFont = (obj) => {
    console.log("obj received:", obj);
    dispatch(
      updateContainer({
        element: obj.element,
        propName: obj.propName,
        value: obj.themeVar,
      })
    );
  };

  const updateTextValue = (obj) => {
    console.log("obj received:", obj);
    dispatch(
      updateContainer({
        element: obj.element,
        propName: obj.propName,
        value: obj.value + obj.unit,
      })
    );
  };

  const getElementValues = (el) => {
    let result = [];
    if (containers !== undefined) {
      Object.keys(containers[el]).map((prop, idx) => {
        const propkey = el + prop + idx;
        //skip over font size and line height
        if (prop.includes("fontSize") || prop.includes("lineHeight")) {
        } else if (prop.includes("fontFamily")) {
          let thisObj = themedFonts.find(
            (obj) => obj.themeVar == containers[el][prop]
          );
          if (thisObj !== undefined) {
            //TODO HANDLE ERROR HERE?
            result.push(
              <StyleGridItem label={prop} key={propkey}>
                <FontDropdown
                  key={propkey}
                  element={el}
                  propName={prop}
                  options={themedFonts}
                  id={`${el}${prop}${idx}fdd`}
                  defaultObj={thisObj}
                  onSelect={updateTextFont}
                  section="text"
                />
              </StyleGridItem>
            );
          }
        } else if (prop.includes("olor")) {
          //or other props with color
          result.push(
            <StyleGridItem label={prop} key={propkey}>
              <ColorDropdown
                key={propkey}
                element={el}
                propName={prop}
                id={`${el}${prop}`}
                defaultValue={containers[el][prop]} //should be var(--clr-primary)
                onSelect={updateColor}
              />
            </StyleGridItem>
          );
        } else {
          console.log("prop:", prop, text[el][prop]);
          result.push(
            <SliderItem
              key={propkey}
              element={el}
              propName={prop}
              defaultValue={containers[el][prop]}
              onSelect={updateTextValue}
            />
          );
        }
      });
      return result;
    }
  };

  const getElements = () => {
    let result = [];
    if (containers !== undefined) {
      Object.keys(containers).map((el) => {
        result.push(
          <StyleGridExpander title={el} key={el}>
            {getElementValues(el)}
          </StyleGridExpander>
        );
      });
      return result;
    }
  };

  return <FormWrapper>{getElements()}</FormWrapper>;
};

export default ContainerForm;
