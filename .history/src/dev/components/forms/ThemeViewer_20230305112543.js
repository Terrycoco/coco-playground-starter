//import useStorage from "../utils/useStorage"; //do I want to do this?
import { useState, useEffect } from "react";
import { Button } from "@/components/buttons";
import { FlexLayout } from "@/components/flex";
import { useTheme } from "@/hooks";
import { Modal } from "@/components/modals";
//present theme (as yet unsaved to user)
//ability to copy into clipboard

const styles = {
  container: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    top: "var(--sp-heading-height)",
    zIndex: "1000",
    padding: "20px",
  },
  instructions: {
    display: "flex",
    flexDirection: "column",
    paddingRight: "1rem",
    width: "30%",
  },
  buttonRow: {
    display: "flex",
    flexDirection: "row",
    marginTop: "1rem",
  },
  slate: {
    backgroundColor: "steelblue",
    color: "white",
    width: "100%",
    padding: "1rem",
    maxHeight: "100vh",
    overflowY: "scroll",
  },
  alert: {
    position: "relative",
    backgroundColor: "white",
    color: "green",
    fontFamily: "Arial",
    padding: "3px",
  },
};

const pre = `//theme.js
const _default = {

    `;

const post = `
};

module.exports = _default;

`;

const ThemeViewer = (props) => {
  const [showMe, setShowMe] = useState(props.show);
  const [showAlert, setShowAlert] = useState(false);
  const { theme } = useTheme();

  const getThemeToRender = () => {
    let rendered = loopThroughTheme(theme, "");
    //console.log(rendered);
    return rendered;
  };

  function loopThroughTheme(obj, result, level = 0) {
    let indent = "";
    for (let i = 0; i < level; i++) {
      indent += "\t";
    }
    for (var k in obj) {
      if (typeof obj[k] === "object" && obj[k] !== null) {
        //is parent
        result += `${indent}${k}: {\n\r`;
        result = loopThroughTheme(obj[k], result, level + 1);
        result += `${indent}},\n\r`;
      } else if (obj.hasOwnProperty(k)) {
        result += `${indent}${k}: "${obj[k]}",\n\r`;
      }
    }
    return result;
  }

  const getThemeToCopy = () => {
    const themeObj = theme;
    return loopThroughTheme(themeObj, "");
  };

  const closeMe = () => {
    setShowMe(false);
    props.onClose();
  };

  useEffect(() => {
    setShowMe(props.show);
  }, [props.show]);

  const copy = () => {
    // Get the text field
    var copyText = `${pre} ${getThemeToCopy()} ${post}`;
    navigator.clipboard.writeText(copyText);
    console.log("text copied");
    // Alert the copied text
    setShowAlert(true);
    setTimeout(closeAlert, 3000);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  const renderAlert = () => {
    if (showAlert == true) {
      return <div style={styles.alert}>Copied into Clipboard!</div>;
    } else {
      return null;
    }
  };

  return (
    <>
      <Modal onClose={closeMe} show={showMe}>
        <div style={styles.container}>
          <div style={styles.instructions}>
            <div>
              This is your new adjusted theme. Copy and paste it into{" "}
              <b>themes/theme.js</b> or make a new theme.
            </div>
            <div style={styles.buttonRow}>
              <Button onClick={closeMe}>Close</Button>
              <Button onClick={copy}>Copy</Button>
              {renderAlert()}
            </div>
          </div>
          <div style={styles.slate}>
            <FlexLayout className={"py-4 justify-between h-20"}>
              <FlexLayout className="justify-end space-x-3"></FlexLayout>
            </FlexLayout>
            <div className="font-mono top-0 w-full z-50  min-h-screen bg-zinc-700 text-whitish pt-2 px-20">
              <pre className="whitespace-pre" key="preamble">
                {pre}
              </pre>
              <pre className="whitespace-pre max-w-xl" key="themetext">
                {getThemeToRender()}
              </pre>
              <pre className="whitespace-pre" key="post">
                {post}
              </pre>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ThemeViewer;
