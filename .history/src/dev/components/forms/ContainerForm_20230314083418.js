import { useState, useEffect, useMemo, useId } from "react";
import FormWrapper from "@/dev/components/forms/FormWrapper";
import StyleGridExpander from "@/dev/components/forms/StyleGridExpander";
import StyleGridItem from "@/dev/components/forms/StyleGridItem";
import { useSelector, useDispatch } from "react-redux";
import { selectContainers } from "@/store/containersSlice";
import RangeSlider from "@/dev/components/forms/sliders/RangeSlider";

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

  console.log("containers:", containers);

  const getElementValues = (el) => {
    let result = [];
    Object.keys(containers[el]).map((p) => {
      //if prop is backgroundColor return color dropdown else return stlider
      if (p === "backgroundColor") {
        result.push(<StyleGridItem label={p}>i am a color</StyleGridItem>);
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
