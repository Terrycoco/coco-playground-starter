import { useState } from "react";
import Head from "next/head";
import { useTheme } from "@/hooks";
import StyleForm from "@/dev/components/StyleForm";
import { FlexColumn, FlexLayout } from "@/components/flex";
import { Page } from "@/components/layout";
import TextForm from "@/dev/components/TextForm";

export default function TypographyPage() {
  const { theme } = useTheme();
  const [section, setSection] = useState(); //TODO flatten theme?
  const [element, setElement] = useState();
  const [styleObj, setStyleObj] = useState({});
  const [h1Wght, setH1Wght] = useState(400);

  const clickMe = (e, sect, el) => {
    e.stopPropagation();
    e.preventDefault();
    setStyleObj(theme[sect][el]);
    setSection(sect);
    setElement(el);
  };

  return (
    <>
      <main>
        <Page>
          <FlexLayout>
            <FlexColumn>
              <section>
                <h1>Define Project Typography here</h1>
                <h1
                  elem="h1"
                  onClick={(e) => clickMe(e, "text", "h1")}
                  style={{ fontVariationSettings: `'wght' ${h1Wght}` }}
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
              />
            </FlexColumn>
          </FlexLayout>
        </Page>
      </main>
    </>
  );
}
