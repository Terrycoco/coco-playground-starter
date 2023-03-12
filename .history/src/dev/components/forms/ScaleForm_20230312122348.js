import { DeviceMenu } from "@/dev/components/layout";

const ScaleForm = (props) => {
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
    <div style={styles.form}>
      <DeviceMenu device={currentDevice} onChange={changeDevice} />
    </div>
  );
};

export default ScaleForm;
