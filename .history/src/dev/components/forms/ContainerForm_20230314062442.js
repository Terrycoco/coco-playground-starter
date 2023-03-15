import FormWrapper from "@/dev/components/forms/FormWrapper";
import StyleGrid from "@/dev/components/forms/StyleGrid";
import StyleGridItem from "@/dev/components/forms/StyleGridItem";
import { useSelector, useDispatch } from "react-redux";
import { selectContainers } from "@/store/containersSlice";
import { RangeSlider } from "@/dev/forms/sliders";

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
