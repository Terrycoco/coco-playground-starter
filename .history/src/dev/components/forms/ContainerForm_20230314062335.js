import FormWrapper from "@/dev/components/forms/FormWrapper";
import StyleGrid from "@/dev/components/forms/StyleGrid";
import StyleGridItem from "@/dev/components/forms/StyleGridItem";
import { useSelector, useDispatch } from "react-redux";
import { selectContainers } from "@/store/containersSlice";

const ContainerForm = (props) => {
  const dispatch = useDispatch();
  const containers = useSelector(selectContainers);
  return (
    <FormWrapper>
      <StyleGrid title="header"></StyleGrid>
    </FormWrapper>
  );
};

export default ContainerForm;
