import { useState, useEffect, useMemo, useId } from "react";
import FormWrapper from "@/dev/components/forms/FormWrapper";
import StyleGridExpander from "@/dev/components/forms/StyleGridExpander";
import StyleGridItem from "@/dev/components/forms/StyleGridItem";
import { useSelector, useDispatch } from "react-redux";
import { selectContainers, updateContainer } from "@/store/containersSlice";
import RangeSlider from "@/dev/components/forms/sliders/RangeSlider";
import ColorDropdown from "@/dev/components/dropdowns/ColorDropdown";

const SliderItem = ({ element, propName, value }) => {
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
    //send to parent or handle here?
  }

  return (
    <StyleGridItem label={propName}>
      <RangeSlider key={useId} {...sliderProps} />
    </StyleGridItem>
  );
};

const ContainerForm = (props) => {
  const dispatch = useDispatch();
  const containers = useSelector(selectContainers);

  const handleSelect = (obj) => {
    console.log("obj received:", obj);
    //send the variable name here
    let varName = `var(--clr-${obj.key}`;
    dispatch(
      updateContainer({
        element: obj.element,
        key: obj.propName,
        value: varName,
      })
    );
  };

  const getElementValues = (el) => {
    let result = [];
    Object.keys(containers[el]).map((p) => {
      //if prop is backgroundColor return color dropdown else return slider
      if (p.includes("olor")) {
        //or other props with color
        result.push(
          <StyleGridItem label={p}>
            <ColorDropdown
              element={el}
              propName={p}
              id={`${el}${p}`}
              defaultValue={containers[el][p]} //should be var(--clr-primary)
              onSelect={handleSelect}
            />
          </StyleGridItem>
        );
      } else {
        result.push(
          <SliderItem element={el} propName={p} value={containers[el][p]} />
        );
      }
    });
    return result;
  };

  const getElements = () => {
    let result = [];
    if (containers !== undefined) {
      Object.keys(containers).map((el) => {
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

export default ContainerForm;
