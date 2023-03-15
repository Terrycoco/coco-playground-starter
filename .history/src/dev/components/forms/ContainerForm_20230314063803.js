import { useState, useMemo, useId } from "react";
import FormWrapper from "@/dev/components/forms/FormWrapper";
import StyleGrid from "@/dev/components/forms/StyleGrid";
import StyleGridItem from "@/dev/components/forms/StyleGridItem";
import { useSelector, useDispatch } from "react-redux";
import { selectContainers } from "@/store/containersSlice";
import RangeSlider from "@/dev/components/forms/sliders/RangeSlider";

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

  const getElements = () => {
    if (containers !== undefined) {
      Object.keys(containers).map((el) => {
        <StyleGrid title={el}></StyleGrid>;
      });
    }
  };

  return <FormWrapper>{getElements()}</FormWrapper>;
};

export default ContainerForm;
