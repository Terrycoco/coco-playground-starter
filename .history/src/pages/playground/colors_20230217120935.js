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
          <section></section>
        </Page>
      </main>
    </>
  );
}
