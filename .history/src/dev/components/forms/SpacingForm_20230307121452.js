import { useEffect, useState, useMemo } from "react";
import { useTheme } from "@/hooks";
import { RangeSlider, StyleGrid, StyleGridItem } from "@/dev/components/forms";

const SpacingForm = (props) => {
  const { theme, setTheme } = useTheme();
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

  const headerProps = useMemo(
    () => ({
      min: 0,
      max: 10,
      value: theme.spacing.header.height,
      step: 0.5,
      unit: "rem",
      onChange: (e) => handleValueChange(e, "header", "height"),
    }),
    [theme.spacing.header.height]
  );

  const pageTopProps = useMemo(
    () => ({
      min: 0,
      max: 10,
      value: theme.spacing.page.paddingTop,
      step: 0.5,
      unit: "rem",
      onChange: (e) => handleValueChange(e, "page", "paddingTop"),
    }),
    [theme.spacing.page.paddingTop]
  );

  const handleValueChange = (newval, section, property) => {
    // setHeaderH(newval);
    let newtheme = Object.assign({}, theme);
    newtheme.spacing[section][property] = newval + "rem";
    setTheme(newtheme);
  };

  if (theme) {
    return;
    <div style={styles.form}>
      <StyleGrid title="Header" key="header">
        <StyleGridItem label="height" key="headerht">
          <RangeSlider key="headerht1" {...headerProps} />
        </StyleGridItem>
      </StyleGrid>
    </div>;
  } else {
    return null;
  }
};

export default SpacingForm;
