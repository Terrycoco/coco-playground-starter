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

  const changeDevice = (dev) => {
    dispatch(updateDevice(dev)); //will update all subscribers
  };

  return (
    <div style={styles.form}>
      <DeviceMenu device={currentDevice} onChange={changeDevice} />
    </div>
  );
};

export default ScaleForm;
