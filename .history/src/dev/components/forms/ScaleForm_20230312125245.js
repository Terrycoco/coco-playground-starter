import { DeviceMenu } from "@/dev/components/layout";
import { useSelector, useDispatch } from "react-redux";
import { updateDevice, selectCurrentDevice } from "@/store/fontSizesSlice";

const ScaleForm = (props) => {
  const dispatch = useDispatch();
  const currentDevice = useSelector(selectCurrentDevice);
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

  const reset = () => {
    //TODO WARN THAT WILL LOSE ANY HEADINGS SET SO FAR
  };

  return (
    <div style={styles.form}>
      <DeviceMenu />
      <div>
        <div style={styles.buttonrow}>
          <Button onClick={reset}>Reset</Button>
          {/*}
            <Button onClick={deleteLastLevel}>Delete</Button>
            <Button onClick={addHeadingLevel}>Add Heading Level</Button> */}
        </div>
      </div>
    </div>
  );
};

export default ScaleForm;
