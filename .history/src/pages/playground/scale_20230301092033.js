import { useState } from "react";
import Head from "next/head";
import { fontVariables } from "@/utils/fonts";
import { Text } from "@/components/text";
import css from "@/styles/Playground.module.css";
import { useTheme } from "@/hooks";
import { FlexColumn, FlexLayout } from "@/components/flex";
import { Layout } from "@/dev/components/layout";
import {
  SpacingForm,
  Slider,
  TextForm,
  ScaleForm,
} from "@/dev/components/forms";
import Notepaper from "@/dev/components/Notepaper";

export default function Scale() {
  return (
    <>
      <Head>
        <title>Style Playground</title>
        <meta name="description" content="Play with Project Styles" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout
          onClickSpacing={toggleSpacing}
          onClickTypography={toggleTypography}
        >
          <section style={{}}>
            <div>
              To start setting the scale for the project, select your body font.
              Play with the size of the font, until it looks crisp and "right".
              When you've selected the size, enter it into the calculator. Then,
              select a ratio, or how much contrast you want between different
              sizes. The calculator will generate sizes on the scale.
            </div>
          </section>
        </Layout>
      </main>
    </>
  );
}
