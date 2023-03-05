import { useState, useEffect } from "react";
import Head from "next/head";
import { useTheme, useViewport } from "@/hooks";
import StyleForm from "@/dev/components/StyleForm";
import { FlexColumn, FlexLayout } from "@/components/flex";
import { Page } from "@/components/layout";
import TextForm from "@/dev/components/TextForm";
import css from "@/styles/Typography.module.css";
import ScreenEmulator from "@/dev/components/viewport/ScreenEmulator";
import { calcFontSizes } from "@/dev/utils/scaleUtils";
import { Layout, DeviceMenu } from "@/dev/components/layout";

export default function TypographyPage() {
  const { theme } = useTheme();
  const [device, setDevice] = useState("mobile");
  const [section, setSection] = useState("text");
  const [element, setElement] = useState("p");
  const [styleObj, setStyleObj] = useState({}); //to send to form
  const [showSettings, setShowSettings] = useState(false);

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
    setStyleObj(theme.text.p); //default
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
    e.currentTarget;
  };

  const runTest = (e) => {
    calcFontSizes();
  };

  const handleDeviceChange = (e) => {
    setDevice(e.target.id);
    console.log("changed to:", e.target.id);
  };

  const handleStyleChange = (el, newobj) => {
    // console.log("back to page  -changed: ", el, newobj);
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
        setH3(newobj);
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

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <>
      <main>
        <Layout>
          <DeviceMenu
            onChange={handleDeviceChange}
            onClickSettings={toggleSettings}
            showSettings={showSettings}
            device={device}
          />
          <section style={theme.spacing.section}>
            <ScreenEmulator id="emulator" device={device}>
              <h1
                data-el="h1"
                style={h1}
                onClick={clickMe}
                className={element == "h1" ? css.isSelected : css.isNotSelected}
              >
                Typography Playground
              </h1>
              <p
                data-el="p"
                onClick={clickMe}
                style={p}
                className={element == "p" ? css.isSelected : css.isNotSelected}
              >
                Play with typography here. I am a paragraph style. Lorem Ipsum
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <p
                data-el="p"
                onClick={clickMe}
                style={p}
                className={element == "p" ? css.isSelected : css.isNotSelected}
              >
                Play with typography here. I am a paragraph style. Lorem Ipsum
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised
                in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <h1
                data-el="h1"
                onClick={clickMe}
                style={h1}
                className={element == "h1" ? css.isSelected : css.isNotSelected}
              >
                I am a h1 heading
              </h1>

              <h2
                key={Math.random()}
                data-el="h2"
                onClick={clickMe}
                style={h2}
                className={element == "h2" ? css.isSelected : css.isNotSelected}
              >
                I am a h2 heading
              </h2>
              <h3
                key={Math.random()}
                data-el="h3"
                onClick={clickMe}
                style={h3}
                className={element == "h3" ? css.isSelected : css.isNotSelected}
              >
                I am a h3 heading
              </h3>
              <h4
                key={Math.random()}
                data-el="h4"
                onClick={clickMe}
                style={h4}
                className={element == "h4" ? css.isSelected : css.isNotSelected}
              >
                I am a h4 heading
              </h4>

              <h5
                key={Math.random()}
                data-el="h5"
                onClick={clickMe}
                style={h5}
                className={element == "h5" ? css.isSelected : css.isNotSelected}
              >
                I am a h5 heading
              </h5>
              <h6
                key={Math.random()}
                data-el="h6"
                onClick={clickMe}
                style={h6}
                className={element == "h6" ? css.isSelected : css.isNotSelected}
              >
                I am a h6 heading
              </h6>
            </ScreenEmulator>
          </section>
          {showSettings && (
            <section>
              <TextForm
                styleObj={styleObj}
                element={element}
                section={section}
                device={device}
                onChange={handleStyleChange}
              />
            </section>
          )}
        </Layout>
      </main>
    </>
  );
}
