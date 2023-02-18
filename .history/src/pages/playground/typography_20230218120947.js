import { useState, useEffect } from "react";
import Head from "next/head";
import { useTheme } from "@/hooks";
import StyleForm from "@/dev/components/StyleForm";
import { FlexColumn, FlexLayout } from "@/components/flex";
import { Page } from "@/components/layout";
import TextForm from "@/dev/components/TextForm";

export default function TypographyPage() {
  const { theme } = useTheme();
  const [section, setSection] = useState("text");
  const [element, setElement] = useState("h1");
  const [styleObj, setStyleObj] = useState({}); //copy of theme obj
  //hold temp styles here
  const [h1, setH1] = useState({});
  const [h2, setH2] = useState({});

  useEffect(() => {
    //load up initial styles
    setStyleObj(theme[section][element]);
    setH1(theme.styles.h1);
    setH2(theme.styles.h2);
  }, []);

  // let styles = {
  //   h1: {
  //     color: "var(--clr-primary)",
  //     fontFamily: "var(--font-display)",
  //     fontSize: "2rem",
  //     lineHeight: 1,
  //     fontVariationSettings: `"wght" 400`,
  //     fontStretch: "100%", //50 - 200
  //     letterSpacing: "-1.5px",
  //     wordSpacing: "-5px",
  //   },
  // };

  const clickMe = (e) => {
    e.stopPropagation();
    e.preventDefault();
    let el = e.target.getAttribute("data-el");
    setStyleObj(theme.text[el]); //sets theme obj ? is ref or val?
    console.log("styleobj: ", theme.text[el]);
    setSection("text");
    setElement(el);
    // setFontSize(theme.text[el].fontSize);
  };

  const handleChange = (prop, newval) => {
    //   console.log("back to page changed: ", prop, newval);
    //   if (prop == "fontSize") {
    //     setFontSize(`${newval}rem`);
    //   } else {
    //     //font variation settings
    //     setFv(newval);
    //   }
  };

  return (
    <>
      <main>
        <Page>
          <FlexLayout>
            <FlexColumn>
              <section>
                <h1 style={theme.text.h1}>Typography Playground</h1>
                <h1 data-el="h1" onClick={clickMe} style={theme.text.h1}>
                  I am a h1 heading
                </h1>
                <p>
                  Heading 1 should be roughly 2 times larger than the base size.
                </p>

                <h2
                  key={Math.random()}
                  data-el="h2"
                  onClick={clickMe}
                  style={theme.text.h2}
                >
                  I am a h2 heading
                </h2>
                <h3
                  key={Math.random()}
                  data-el="h3"
                  onClick={clickMe}
                  style={theme.text.h3}
                >
                  I am a h3 heading
                </h3>
                <h4
                  key={Math.random()}
                  data-el="h4"
                  onClick={clickMe}
                  style={theme.text.h4}
                >
                  I am a h4 heading
                </h4>

                <h5
                  key={Math.random()}
                  data-el="h5"
                  onClick={clickMe}
                  style={theme.text.h5}
                >
                  I am a h5 heading
                </h5>
                <h6
                  key={Math.random()}
                  data-el="h6"
                  onClick={clickMe}
                  style={theme.text.h6}
                >
                  I am a h6 heading
                </h6>
                <div
                  key={Math.random()}
                  elem="subtitle1"
                  onClick={(e) => clickMe(e, "text", "h1")}
                >
                  I am a subtitle1
                </div>
                <div
                  key={Math.random()}
                  elem="subtitle2"
                  onClick={(e) => clickMe(e, "text", "h1")}
                >
                  I am a subtitle2
                </div>
              </section>
            </FlexColumn>
            <FlexColumn>
              <TextForm
                key={`${section}${element}`}
                section={section}
                element={element}
                styleObj={styleObj}
                onChange={handleChange}
              />
            </FlexColumn>
          </FlexLayout>
        </Page>
      </main>
    </>
  );
}
