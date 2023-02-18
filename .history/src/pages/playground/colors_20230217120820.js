import { useState } from "react";
import Head from "next/head";
import { fontVariables } from "@/utils/fonts";
import { Text } from "@/components/text";
import css from "@/styles/Playground.module.css";
import { useTheme } from "@/hooks";
import StyleForm from "@/dev/components/StyleForm";
import { FlexColumn, FlexLayout } from "@/components/flex";
import { Page } from "@/components/layout";

export default function Playground() {
  const { theme } = useTheme();
  const [section, setSection] = useState(); //TODO flatten theme?
  const [element, setElement] = useState();
  const [styleObj, setStyleObj] = useState({});

  const clickMe = (e, sect, el) => {
    e.stopPropagation();
    e.preventDefault();
    setStyleObj(theme[sect][el]);
    setSection(sect);
    setElement(el);
  };

  //console.log("playground gets theme: ", theme);
  return (
    <>
      <main>
        <Page>
          <section></section>
        </Page>
      </main>
    </>
  );
}
