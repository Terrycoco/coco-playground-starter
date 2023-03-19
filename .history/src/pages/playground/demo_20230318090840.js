import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
//import { Inter } from "@next/font/google";
import Link from "next/link";

const style = {
  height: "100vh",
  width: "100vw",
  backgroundColor: "#FFFFE0",
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
      <header>
        <h1> Welcome </h1>
        <h3> Hello World! </h3>
      </header>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">About us</a>
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
      <footer> Copyright 2022-2099. All Rights Reserved. </footer>
      <main>
        <Link type="button" href="/playground">
          To Playground
        </Link>

        <p>
          <a href="/" target="_blank">
            {" "}
            Anchor tag{" "}
          </a>
        </p>
        <p>
          <i> italic text </i>
        </p>
        <p>
          <b>bold text </b>
        </p>
        <p>
          <strong> strong text </strong>
        </p>
        <p>
          <em> strong text </em>
        </p>
        <p>
          <sub> subscripted text </sub>
        </p>
        <p>
          <sup> superscripted text </sup>
        </p>
        <p>
          <small> small text </small>
        </p>
        <p>
          <del> deleted text </del>
        </p>
        <p>
          <ins> inserted text </ins>
        </p>
        <p>
          <blockquote> blockquote </blockquote>
        </p>
        <p>
          <q> inline quote </q>
        </p>
        <p>
          <cite> cited text </cite>
        </p>
        <p>
          <address> address </address>
        </p>
        <p>
          <abbr> inserted text </abbr>
        </p>
        <p>
          <code> code snippet </code>
        </p>
        <p>
          <mark> marked text </mark>
        </p>
      </main>
    </>
  );
}
