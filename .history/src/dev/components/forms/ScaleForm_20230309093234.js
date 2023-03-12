import { DeviceMenu } from "@/dev/components/layout";

const ScaleForm = ({ device, ...props }) => {
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
      <DeviceMenu device={device} onChange={changeDevice} />
      <div>
        <div style={styles.buttonrow}>
          <Button onClick={reset}>Reset</Button>
          <Button onClick={deleteLastLevel}>Delete</Button>
          <Button onClick={addHeadingLevel}>Add Heading Level</Button>
          <Button onClick={toggleTheme}>View Theme</Button>
        </div>

        {showLevels()}
      </div>
    </div>
  );
};

export default ScaleForm;
