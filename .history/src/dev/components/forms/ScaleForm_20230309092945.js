const ScaleForm = (props) => {
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
