import { useState, useMemo } from "react";
import FormWrapper from "@/dev/components/forms/FormWrapper";
import StyleGrid from "@/dev/components/forms/StyleGrid";
import StyleGridItem from "@/dev/components/forms/StyleGridItem";
import { useSelector, useDispatch } from "react-redux";
import { selectContainers } from "@/store/containersSlice";
import { RangeSlider } from "@/dev/forms/sliders";

const ContainerItem = ({ element, propName, value }) => {
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
    let newtheme = Object.assign({}, theme);
    newtheme.containers[section][propName] = newval;
    setTheme(newtheme);
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
  return (
    <FormWrapper>
      <StyleGrid title="header">
        <StyleGridItem label="height"></StyleGridItem>
      </StyleGrid>
    </FormWrapper>
  );
};

export default ContainerForm;
