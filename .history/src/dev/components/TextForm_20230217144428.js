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
  const [grad, setGrad] = useState("");

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    setThisSO(styleObj);
    // console.log("something changed! old", thisSO, "new", styleObj);
  }, [styleObj, thisSO]);

  const handleChange = (e) => {
    //do nothing here
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

  // const renderElement = () => {
  //   let result = [];
  //   for (const p in thisSO) {
  //     if (p.toLowerCase().includes("color")) {
  //       result.push(
  //         <div id={p} style={styles.row}>
  //           <div style={styles.prop}>{p}</div>
  //           <ColorDropdown
  //             key={`clr-${section}${element}${p}`}
  //             section={section}
  //             element={element}
  //             property={p}
  //           />
  //         </div>
  //       );
  //     } else if (p.toLowerCase().includes("fontfamily")) {
  //       result.push(
  //         <div id={p} style={styles.row}>
  //           <div style={styles.prop}>{p}</div>
  //           {/* <FontDropdown
  //             key={`font-${section}${element}${p}`}
  //             section={section}
  //             element={element}
  //             property={p}
  //           /> */}
  //         </div>
  //       );
  //     } else {
  //       result.push(
  //         <div key={`row-${p}`} id={p} style={styles.row}>
  //           <div style={styles.prop}>{p}</div>
  //           <input
  //             type="text"
  //             key={`${section}-${element}-${p}`}
  //             data-propname={p}
  //             defaultValue={thisSO[p]}
  //             style={styles.val}
  //             onChange={handleChange}
  //             onBlur={handleBlur}
  //           />
  //         </div>
  //       );
  //     }
  //   }

  //   return result;
  // };

  return thisSO ? (
    <>
      <div style={styles.form} onClick={handleClick}>
        <div style={styles.heading}>{element}</div>
        <div key={"weight-row"} style={styles.row}>
          <div style={styles.prop}>weight</div>
          <div style={styles.val}>
            <Slider id="wght" min="1" max="1000" defaultValue={wght} />
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default TextForm;
