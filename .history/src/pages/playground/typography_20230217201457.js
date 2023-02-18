import { useState } from "react";
import Head from "next/head";
import { useTheme } from "@/hooks";
import StyleForm from "@/dev/components/StyleForm";
import { FlexColumn, FlexLayout } from "@/components/flex";
import { Page } from "@/components/layout";
import TextForm from "@/dev/components/TextForm";

export default function TypographyPage() {
  const { theme } = useTheme();
  const [section, setSection] = useState("text"); //TODO flatten theme?
  const [element, setElement] = useState();
  const [styleObj, setStyleObj] = useState({});
  const [size, setSize] = useState();
  const [fv, setFv] = useState(`"wght" 400`);

  const clickMe = (e) => {
    e.stopPropagation();
    e.preventDefault();
    let el = e.target.getAttribute("data-el");
    setStyleObj(theme.text[el]);
    console.log("styleobj: ", theme.text[el]);
    setSection("text");
    setElement(el);
  };

  const handleChange = (prop, newval) => {
    console.log("back to page changed: ", newval);
    if (prop == "size") {
      setSize(newval + "rem");
    }
    //the big cahuna
    setFv(newval);
  };

  return (
    <>
      <main>
        <Page>
          <FlexLayout>
            <FlexColumn>
              <section>
                <h1 style={{ fontVariationSettings: `${fv}` }}>
                  Define Project Typography here
                </h1>
                <h1
                  data-el="h1"
                  onClick={(e) => clickMe(e, "text", "h1")}
                  style={{ fontVariationSettings: `${fv}` }}
                >
                  I am a h1 heading
                </h1>
                <p>
                  Heading 1 should be roughly 2 times larger than the base size.
                </p>

                <h2
                  key={Math.random()}
                  elem="h2"
                  onClick={(e) => clickMe(e, "text", "h2")}
                >
                  I am a h2 heading
                </h2>
                <h3
                  key={Math.random()}
                  elem="h3"
                  onClick={(e) => clickMe(e, "text", "h3")}
                >
                  I am a h3 heading
                </h3>
                <h4
                  key={Math.random()}
                  elem="h4"
                  onClick={(e) => clickMe(e, "text", "h4")}
                >
                  I am a h4 heading
                </h4>

                <h5
                  key={Math.random()}
                  elem="h5"
                  onClick={(e) => clickMe(e, "text", "h5")}
                >
                  I am a h5 heading
                </h5>
                <h6
                  key={Math.random()}
                  elem="h6"
                  onClick={(e) => clickMe(e, "text", "h6")}
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
