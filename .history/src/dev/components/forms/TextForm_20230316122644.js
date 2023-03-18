import { useState, useEffect, useMemo, useId } from "react";
import FormWrapper from "@/dev/components/forms/FormWrapper";
import StyleGridExpander from "@/dev/components/forms/StyleGridExpander";
import StyleGridItem from "@/dev/components/forms/StyleGridItem";
import { useSelector, useDispatch } from "react-redux";
import { selectText, updateText } from "@/store/textSlice";
import { selectFontObjs } from "@/store/fontsSlice";
import RangeSlider from "@/dev/components/forms/sliders/RangeSlider";
import ColorDropdown from "@/dev/components/dropdowns/ColorDropdown";
import FontDropdown from "@/dev/components/dropdowns/FontDropdown";

const SliderItem = ({ element, propName, value, onSelect, unit }) => {
  const [val, setVal] = useState(value);

  useEffect(() => {
    if (value) {
      let num = value.replace(/\D/g, "");
      setVal(num);
    }
  }, [value]);

  const getSliderProps = () => {
    //props vary depending on propName
    switch (propName) {
      case "letterSpacing":
      case "wordSpacing":
        return {
          min: -1,
          max: 8,
          value: val,
          step: 0.1,
          unit: "px",
          onChange: (newval) => handleValueChange(newval, unit),
        };
        break;
      case "fontWeight":
        return {
          min: 100,
          max: 900,
          value: val,
          step: 100,
          unit: "",
          onChange: (newval) => handleValueChange(newval, unit),
        };
        break;
      case "maxWidth":
        return {
          min: 15,
          max: 100,
          value: val,
          step: 100,
          unit: "ch",
          onChange: (newval) => handleValueChange(newval, unit),
        };
        break;
      default:
        return {
          min: 0,
          max: 20,
          value: val,
          step: 0.5,
          unit: "rem",
          onChange: (newval) => handleValueChange(newval, unit),
        };
    }
  };

  //each slider needs own props
  const sliderProps = useMemo(() => getSliderProps(), [val]);

  //update comes from Slider
  function handleValueChange(newval, unit) {
    setVal(newval);
    onSelect({
      element: element,
      propName: propName,
      value: newval,
      unit: unit,
    });
  }

  return (
    <StyleGridItem label={propName} key={`${element}${propName}`}>
      <RangeSlider key={useId} unit={sliderProps.unit} {...sliderProps} />
    </StyleGridItem>
  );
};

const TextForm = (props) => {
  const dispatch = useDispatch();
  const text = useSelector(selectText);
  const themedFonts = useSelector(selectFontObjs);

  console.log("text state:", text);

  const updateColor = (obj) => {
    console.log("obj received:", obj);
    dispatch(
      updateText({
        element: obj.element,
        propName: obj.propName,
        value: obj.themeVar,
      })
    );
  };

  const updateTextFont = (obj) => {
    console.log("obj received:", obj);
    dispatch(
      updateText({
        element: obj.element,
        propName: obj.propName,
        value: obj.themeVar,
      })
    );
  };

  const updateTextValue = (obj) => {
    console.log("obj received:", obj);
    dispatch(
      updateText({
        element: obj.element,
        propName: obj.propName,
        value: obj.themeVar,
      })
    );
  };

  const getElementValues = (el) => {
    let result = [];
    if (text !== undefined) {
      Object.keys(text[el]).map((prop, idx) => {
        if (prop.includes("fontFamily")) {
          let thisObj = themedFonts.find(
            (obj) => obj.themeVar == text[el][prop]
          );
          if (thisObj !== undefined) {
            //TODO HANDLE ERROR HERE?
            result.push(
              <StyleGridItem label={prop} key={`${el}${prop}${idx}`}>
                <FontDropdown
                  element={el}
                  propName={prop}
                  key={`${el}${prop}${idx}fdd`}
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
            <StyleGridItem label={prop} key={`${el}${prop}${idx}`}>
              <ColorDropdown
                key={`${el}${prop}${idx}cdd`}
                element={el}
                propName={prop}
                id={`${el}${prop}`}
                defaultValue={text[el][prop]} //should be var(--clr-primary)
                onSelect={updateColor}
              />
            </StyleGridItem>
          );
        } else {
          console.log("prop:", prop, text[el][prop]);
          result.push(
            <SliderItem
              key={`${el}${prop}${idx}`}
              element={el}
              propName={prop}
              value={text[el][prop]}
              onSelect={updateTextValue}
              unit={prop.includes("letterSpacing") ? "px" : "rem"}
            />
          );
        }
      });
      return result;
    }
  };

  const getElements = () => {
    let result = [];
    if (text !== undefined) {
      Object.keys(text).map((el) => {
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

export default TextForm;
