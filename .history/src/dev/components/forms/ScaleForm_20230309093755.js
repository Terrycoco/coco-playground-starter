import { DeviceMenu } from "@/dev/components/layout";
import { useSelector, useDispatch } from "react-redux";
import {
  addLevel,
  update,
  updateDevice,
  selectAllDevices,
  selectCurrentDeviceSizes,
  deleteLevel,
} from "@/store/fontSizesSlice";

const ScaleForm = ({ device, ...props }) => {
  const dispatch = useDispatch();
  const currentSizes = useSelector(selectCurrentDeviceSizes);
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

  const changeDevice = () => {};

  const reset = () => {};

  const deleteLastLevel = () => {};

  const addHeadingLevel = () => {};

  const showLevels = () => {
    //only show levels if count is correct
    let result = [];
    let levelCount = Object.keys(currentSizes).length;

    for (let i = 0; i < levelCount; i++) {
      let levelName = i == 0 ? "body" : `fs${i}`;
      let fs = currentSizes[levelName].fontSize;
      //   // console.log("fs to ", levelName, fs);
      result.unshift(
        <FontLevel
          key={`${device}${levelName}`}
          fontSize={fs}
          lineHeight={currentSizes[levelName].lineHeight}
          levelName={levelName}
          onLineHeightChange={handleLineHeightChange}
          onFontSizeChange={handleFontSizeChange}
        />
      );
    }
    return result;
  };

  return (
    <div style={styles.form}>
      <DeviceMenu device={device} onChange={changeDevice} />
      <div>
        <div style={styles.buttonrow}>
          <Button onClick={reset}>Reset</Button>
          <Button onClick={deleteLastLevel}>Delete</Button>
          <Button onClick={addHeadingLevel}>Add Heading Level</Button>
        </div>

        {showLevels()}
      </div>
    </div>
  );
};

export default ScaleForm;
