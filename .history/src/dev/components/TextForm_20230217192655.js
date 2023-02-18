import { useState, useEffect } from "react";
import { useTheme } from "@/hooks";
import { ColorDropdown, FontDropdown } from "@/dev/components/dropdowns";
import Slider from "@/dev/components/Slider";

const TextForm = ({ styleObj, section, element, ...props }) => {
  const { theme, setTheme } = useTheme();
  const [thisSO, setThisSO] = useState(styleObj);
  const [wght, setWght] = useState("400");
  const [wdth, setWdth] = useState("100");
  const [slnt, setSlnt] = useState("0");
  const [ital, setItal] = useState(false);
  const [grad, setGrad] = useState("88");

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    if (!element) return;
    setThisSO(styleObj);
    setWght(styleObj.text[element].weight);
    setWdth(styleObj.text[element].width);
    setSlnt(styleObj.text[element].slant);
    setGrad(styleObj.text[element].grade);
  }, [styleObj, thisSO, element]);

  const handleChange = (e) => {
    //do nothing here
  };

  const handleValueChange = (newval, id) => {
    //coming in from slider
    switch (id) {
      case "wdth": {
        setWdth(newval);
        break;
      }
      case "wght": {
        setWght(newval);
        break;
      }
    }

    //send to parent
    //make new font variation string
    let fv = `"wdth" ${wdth}, "wght" ${wght}, "slnt" ${slnt}, "grad" ${grad}`;
    props.onChange(fv);
  };

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleBlur = (e) => {
    let propname = e.target.dataset.propname;
    if (thisSO[propname] !== e.target.value) {
      //console.log("property to change:", propname);
      let newtheme = Object.assign({}, theme);
      newtheme[section][element][propname] = e.target.value;
      //  console.log("newtheme:", newtheme);
      setTheme(newtheme);
    }
  };

  const styles = {
    form: {
      width: "100%",
      backgroundColor: theme.colors.whitish,
      zIndex: 10,
      position: "fixed",
      top: "20px",
      right: "0px",
      maxWidth: "400px",
    },
    heading: {
      fontSize: "1.4rem",
      fontWeight: "bold",
      color: "var(--clr-primary)",
      fontFamily: "var(--font-body)",
      marginBottom: ".5rem",
    },
    element: {
      fontWeight: "normal",
      fontFamily: "var(--font-body)",
      fontSize: "16px",
    },
    row: {
      display: "grid",
      gridTemplateColumns: "50% 50%",
    },
    prop: {
      fontWeight: "bold",
      border: "1px solid gray",
      padding: "5%",
    },
    val: {
      fontWeight: "normal",
      border: "1px solid gray",
      textAlign: "left",
      padding: "10px",
      fontSize: "1rem",
    },
  };

  return thisSO ? (
    <>
      <div style={styles.form} onClick={handleClick}>
        <div style={styles.heading}>{element}</div>

        <div key={"weight-row"} style={styles.row}>
          <div style={styles.prop}>weight</div>
          <div style={styles.val}>
            <Slider
              id="wght"
              min="1"
              max="1000"
              defaultValue={wght}
              onChange={handleValueChange}
            />
          </div>
        </div>

        <div key={"width-row"} style={styles.row}>
          <div style={styles.prop}>width</div>
          <div style={styles.val}>
            <Slider
              id="wdth"
              min="1"
              max="1000"
              defaultValue={wdth}
              onChange={handleValueChange}
            />
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default TextForm;
