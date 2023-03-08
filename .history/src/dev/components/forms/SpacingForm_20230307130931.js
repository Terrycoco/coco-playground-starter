import { useEffect, useState, useMemo } from "react";
import { useTheme } from "@/hooks";
import { RangeSlider, StyleGrid, StyleGridItem } from "@/dev/components/forms";

const SpacingForm = (props) => {
  const { theme, setTheme } = useTheme();
  const [header, setHeader] = useState();
  const [page, setPage] = useState();

  let headerH;
  let pageTop;

  useEffect(() => {
    setHeader({ ...theme.spacing.header });
    setPage({ ...theme.spacing.page });

    headerH = useMemo(
      () => ({
        min: 0,
        max: 10,
        value: header.height,
        step: 0.5,
        unit: "rem",
        onChange: (e) => handleValueChange(e, "header", "height"),
      }),
      [header.height]
    );

    pageTop = useMemo(
      () => ({
        min: 0,
        max: 10,
        value: page.paddingTop,
        step: 0.5,
        unit: "rem",
        onChange: (e) => handleValueChange(e, "page", "paddingTop"),
      }),
      [page.paddingTop]
    );
  }, []);

  useEffect(() => {
    setHeader({ ...theme.spacing.header });
    setPage({ ...theme.spacing.page });
  }, [theme]);

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

  const handleValueChange = (newval, section, property) => {
    // setHeaderH(newval);
    let newtheme = Object.assign({}, theme);
    newtheme.spacing[section][property] = newval + "rem";
    setTheme(newtheme);
  };

  return <div style={styles.form}></div>;
};

export default SpacingForm;

// <div style={styles.form}>
// <StyleGrid title="Header" key="header">
//   <StyleGridItem label="height" key="headerht">
//     <RangeSlider key="headerht1" {...headerH} />
//   </StyleGridItem>
// </StyleGrid>
// </div>
