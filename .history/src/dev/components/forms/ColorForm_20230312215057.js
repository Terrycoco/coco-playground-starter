import { useSelector, useDispatch } from "react-redux";
import { selectColors, selectVariants, updateColor } from "@/store/colorsSlice";
import StyleGrid from "@/dev/components/forms/StyleGrid";
import StyleGridItem from "@/dev/components/forms/StyleGridItem";

const ColorForm = (props) => {
  const styles = {
    form: {
      backgroundColor: "var(--clr-whitish)",
      overflowY: "scroll",
      paddingTop: "0.5rem",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingBottom: "3rem",
      overflowY: "scroll",
      height: "100vh",
    },
    buttonrow: {
      marginTop: "1rem",
    },
  };
  return <div>Color form</div>;
};

export default ColorForm;
