import { StyleGrid, StyleGridItem } from "@/dev/components/forms";

const FontForm = (props) => {

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
        buttonrow: {
          marginTop: "1rem",
        },
      };
  return (
    <div style={}
    <StyleGrid title={levelName}>
      <StyleGridItem label="Font Size">
        <RangeSlider key={`${levelName}fs`} {...fsProps} />
      </StyleGridItem>

      <StyleGridItem label="Line Height">
        <RangeSlider key={`${levelName}lh`} {...lhProps} />
      </StyleGridItem>
    </StyleGrid>
  );
};
