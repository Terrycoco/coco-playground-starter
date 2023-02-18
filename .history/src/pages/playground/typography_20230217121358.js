import { useState } from "react";
import Head from "next/head";
import { useTheme } from "@/hooks";
import StyleForm from "@/dev/components/StyleForm";
import { FlexColumn, FlexLayout } from "@/components/flex";
import { Page } from "@/components/layout";

export default function ColorPage() {
  const { theme } = useTheme();
  const [section, setSection] = useState(); //TODO flatten theme?
  const [element, setElement] = useState();
  const [styleObj, setStyleObj] = useState({});

  return (
    <>
      <main>
        <Page>
          <section>
            <h1>Define Project Typography here</h1>
            <h1 key={Math.random()} elem="h1" clicked={clickMe}>
              I am a h1 heading
            </h1>

            <h2 key={Math.random()} elem="h2" clicked={clickMe}>
              I am a h2 heading
            </h2>
            <h3 key={Math.random()} elem="h3" clicked={clickMe}>
              I am a h3 heading
            </h3>
            <h4 key={Math.random()} elem="h4" clicked={clickMe}>
              I am a h4 heading
            </h4>

            <h5 key={Math.random()} elem="h5" clicked={clickMe}>
              I am a h5 heading
            </h5>
            <h6 key={Math.random()} elem="h6" clicked={clickMe}>
              I am a h6 heading
            </h6>
            <div key={Math.random()} elem="subtitle1" clicked={clickMe}>
              I am a subtitle1
            </div>
            <div key={Math.random()} elem="subtitle2" clicked={clickMe}>
              I am a subtitle2
            </div>
          </section>
        </Page>
      </main>
    </>
  );
}
