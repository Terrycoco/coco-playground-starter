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
  const [styleObj, setStyleObj] = useState({}); //to send to form

  //hold temp styles here
  const [p, setP] = useState({});
  const [h1, setH1] = useState({});
  const [h2, setH2] = useState({});
  const [h3, setH3] = useState({});
  const [h4, setH4] = useState({});
  const [h5, setH5] = useState({});
  const [h6, setH6] = useState({});

  useEffect(() => {
    //load up initial styles
    setStyleObj(theme.text.h1); //default
    setH1(theme.text.h1);
    setH2(theme.text.h2);
    setH3(theme.text.h3);
    setH4(theme.text.h4);
    setH5(theme.text.h5);
    setH6(theme.text.h6);
    setP(theme.text.p);
  }, []);

  const clickMe = (e) => {
    e.stopPropagation();
    e.preventDefault();
    let el = e.target.getAttribute("data-el");
    //set currentStyleObj for sending to form
    switch (el) {
      case "h1":
        setStyleObj(h1);
        break;
      case "h2": {
        setStyleObj(h2);
        break;
      }
      case "h3":
        setStyleObj(h3);
        break;
      case "h4": {
        setStyleObj(h4);
        break;
      }
      case "h5":
        setStyleObj(h5);
        break;
      case "h6": {
        setStyleObj(h6);
        break;
      }
      case "p": {
        setStyleObj(p);
        break;
      }
    }
    setSection("text");
    setElement(el);
    // setFontSize(theme.text[el].fontSize);
  };

  const handleChange = (el, newobj) => {
    console.log("back to page  -changed: ", el, newobj);
    setStyleObj(newobj);
    switch (el) {
      case "h1":
        setH1(newobj);
        break;
      case "h2": {
        setH2(newobj);
        break;
      }
      case "h3":
        H3(newobj);
        break;
      case "h4": {
        setH4(newobj);
        break;
      }
      case "h5":
        setH5(newobj);
        break;
      case "h6": {
        setH6(newobj);
        break;
      }
      case "p": {
        setP(newobj);
        break;
      }
    }
  };

  return (
    <>
      <main>
        <Page>
          <FlexLayout>
            <FlexColumn>
              <section>
                <h1 data-el="h1" style={h1}>
                  Typography Playground
                </h1>
                <p data-el="p" onClick={clickMe} style={p}>
                  Heading 1 should be roughly 2 times larger than the base size.
                </p>
                <h1 data-el="h1" onClick={clickMe} style={h1}>
                  I am a h1 heading
                </h1>

                <h2
                  key={Math.random()}
                  data-el="h2"
                  onClick={clickMe}
                  style={h2}
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
                styleObj={styleObj} //currently selected
                onChange={handleChange}
              />
            </FlexColumn>
          </FlexLayout>
        </Page>
      </main>
    </>
  );
}
