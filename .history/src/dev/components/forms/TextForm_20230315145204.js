import { useState, useEffect, useMemo, useId } from "react";
import FormWrapper from "@/dev/components/forms/FormWrapper";
import StyleGridExpander from "@/dev/components/forms/StyleGridExpander";
import StyleGridItem from "@/dev/components/forms/StyleGridItem";
import { useSelector, useDispatch } from "react-redux";
import { selectText, updateText } from "@/store/textSlice";
import RangeSlider from "@/dev/components/forms/sliders/RangeSlider";
import ColorDropdown from "@/dev/components/dropdowns/ColorDropdown";

const SliderItem = ({ element, propName, value, onSelect }) => {
  const [val, setVal] = useState(value);

  useEffect(() => {
    setVal(value);
  }, [value]);

  //each slider needs own props
  const sliderProps = useMemo(
    () => ({
      min: 0,
      max: 20,
      value: val,
      step: 0.5,
      unit: "rem",
      onChange: (newval) => handleValueChange(newval),
    }),
    [val]
  );

  //update comes from Slider
  function handleValueChange(newval) {
    setVal(newval);
    onSelect({ element: element, propName: propName, value: newval });
  }

  return (
    <StyleGridItem label={propName}>
      <RangeSlider key={useId} {...sliderProps} />
    </StyleGridItem>
  );
};

const TextForm = (props) => {
  const dispatch = useDispatch();
  const text = useSelector(selectText);

  const updateColor = (obj) => {
    console.log("obj received:", obj);
    //send the variable name here
    let varName = `var(--clr-${obj.key})`;
    // dispatch(
    //   updateText({
    //     element: obj.element,
    //     key: obj.propName,
    //     value: varName,
    //   })
    // );
  };

  const updateValue = (obj) => {
    console.log("obj received:", obj);
    // dispatch(
    //   updateContainer({
    //     element: obj.element,
    //     key: obj.propName,
    //     value: obj.value,
    //   })
    // );
  };

  const getElementValues = (el) => {
    let result = [];
    Object.keys(text[el]).map((prop) => {
      //if prop is backgroundColor return color dropdown else return slider
      if (prop.includes("olor")) {
        //or other props with color
        result.push(
          <StyleGridItem label={prop}>
            <ColorDropdown
              element={el}
              propName={prop}
              id={`${el}${prop}`}
              defaultValue={text[el][prop]} //should be var(--clr-primary)
              onSelect={updateColor}
            />
          </StyleGridItem>
        );
      } else {
        result.push(
          <SliderItem
            element={el}
            propName={prop}
            value={text[el][prop]}
            onSelect={updateValue}
          />
        );
      }
    });
    return result;
  };

  const getElements = () => {
    let result = [];
    if (text !== undefined) {
      Object.keys(text).map((el) => {
        result.push(
          <StyleGridExpander title={el}>
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
