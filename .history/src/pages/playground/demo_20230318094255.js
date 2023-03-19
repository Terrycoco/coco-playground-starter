import { useEffect } from "react";
import Head from "next/head";
import css from "@/styles/demo.module.css";

const style = {
  height: "100vh",
  width: "100vw",
};

export default function Result() {
  return (
    <>
      <Head>
        <title>Result Page</title>
        <meta name="description" content="Style Results" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header id="header" className={css.element}>
        <nav>
          <ul>
            <li>
              <a href="#">nav</a>
            </li>
            <li>
              <a href="#">within </a>
            </li>
            <li>
              <a href="#header">header</a>
            </li>
          </ul>
        </nav>
      </header>
      <main id="main" className={css.element}>
        <nav>
          <ul>
            <li>
              <a href="#">nav</a>
            </li>
            <li>
              <a href="#">within</a>
            </li>
            <li>
              <a href="#main">main</a>
            </li>
          </ul>
        </nav>
        <article>
          <h1> An article about us </h1>
          <p> Article content </p>

          <aside>
            <p> It's sunny today </p>
          </aside>
        </article>
        Progress:{" "}
        <progress min="0" max="100" value="50">
          {" "}
        </progress>
      </main>
      <footer id="#footer"> Copyright 2022-2099. All Rights Reserved. </footer>
    </>
  );
}
