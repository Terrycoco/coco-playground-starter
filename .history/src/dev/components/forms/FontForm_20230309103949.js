import { StyleGrid, StyleGridItem } from "@/dev/components/forms";

const FontForm = (props) => {
  return (
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
