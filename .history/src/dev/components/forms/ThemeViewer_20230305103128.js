//import useStorage from "../utils/useStorage"; //do I want to do this?
import { useState, useEffect } from "react";
import { Button } from "@/components/buttons";
import { FlexLayout } from "@/components/flex";
import { useTheme } from "@/hooks";
//present theme (as yet unsaved to user)
//ability to copy into clipboard

const styles = {
  container: {
    width: "auto",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    top: "var(--sp-heading-height)",
    margin: "40px auto",
    zIndex: "1000",
    margin: "auto",
    border: "2px solid black",
  },
  slate: {
    backgroundColor: "steelblue",
    color: "white",
  },
};

const pre = `
//theme.js
const _default = {

    `;

const post = `
};

module.exports = _default;

`;

const ThemeViewer = (props) => {
  const [showMe, setShowMe] = useState(false);
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

  useEffect(() => {
    if (props.show) {
      setShowMe(true);
    } else {
      setShowMe(false);
    }
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
      return (
        <div
          className={`leading-tight flex flex-col justify-center items-center bg-green-500 text-whitish text-xs px-3 font-medium`}
        >
          Copied!
        </div>
      );
    } else {
      return null;
    }
  };

  const closeMe = () => {
    props.onClose(false);
  };

  return (
    <>
      {showMe && (
        <div style={styles.container}>
          <div style={styles.slate}>
            <FlexLayout className={"py-4 justify-between h-20"}>
              <div>
                This is your new adjusted theme. Copy and paste it into{" "}
                <b>themes/theme.js</b> or make a new theme.
              </div>
              <FlexLayout className="justify-end space-x-3">
                {renderAlert()}
                <Button onClick={closeMe}>Close</Button>
                <Button onClick={copy}>Copy</Button>
              </FlexLayout>
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
      )}
    </>
  );
};

export default ThemeViewer;
