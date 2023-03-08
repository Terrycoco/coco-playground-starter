import { useEffect, useState, useMemo, useId } from "react";
import { useTheme } from "@/hooks";
import { RangeSlider, StyleGrid, StyleGridItem } from "@/dev/components/forms";

const SpacingItem = ({ section, propName, value }) => {
  const { theme, setTheme } = useTheme();
  const [val, setVal] = useState(value);

  useEffect(() => {
    setVal(value);
  }, [value]);

  //each slider needs own props
  const sliderProps = useMemo(
    () => ({
      min: 0,
      max: 10,
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
    newtheme.spacing[section][propName] = newval;
    setTheme(newtheme);
  }

  return (
    <StyleGridItem label={propName}>
      <RangeSlider key={useId} {...sliderProps} />
    </StyleGridItem>
  );
};

const SpacingForm = (props) => {
  const { theme } = useTheme();

  const styles = {
    form: {
      backgroundColor: "var(--clr-whitish)",
      overflowY: "scroll",
      paddingTop: "0.5rem",
      paddingLeft: "1rem",
      paddingRight: "1rem",
      paddingBottom: "3rem",
      overflowY: "scroll",
    },
  };

  const getItems = () => {
    let result = [];
    for (const section in theme.spacing) {
      let children = [];
      for (const propName in theme.spacing[section]) {
        children.push(
          <SpacingItem
            section={section}
            propName={propName}
            value={theme.spacing[section][propName]}
          />
        );
      }
      result.push(<StyleGrid title={section}>{children}</StyleGrid>);
    }
    return result;
  };

  return <div style={styles.form}>{getItems()}</div>;
};

export default SpacingForm;
