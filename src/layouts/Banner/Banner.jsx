"use client";
import React, { useContext } from "react";
import styles from "./Banner.module.scss";
import ThemeContext from "@/providers/themes/themeContext";
import useFadeInFadeOut from "@/hooks/useFadeInFadeOut";
import { setFadeInFadeOut } from "@/utils/FadeInFadeOut";

function Banner() {
  const [isInViewTitle1, loadingTimeTitle1, targetElTitle1] = useFadeInFadeOut({
    threshold: 0.7,
    rootMargin: "0px",
  });
  const [isInViewTitle2, loadingTimeTitle2, targetElTitle2] = useFadeInFadeOut({
    threshold: 0.7,
    rootMargin: "0px",
  });
  const [isInViewTitle3, loadingTimeTitle3, targetElTitle3] = useFadeInFadeOut({
    threshold: 0.7,
    rootMargin: "0px",
  });
  const [isInViewTitle4, loadingTimeTitle4, targetElTitle4] = useFadeInFadeOut({
    threshold: 0.7,
    rootMargin: "0px",
  });
  const [isInViewPicture, loadingTimePicture, targetElPicture] = useFadeInFadeOut({
    threshold: 0.7,
    rootMargin: "0px",
  });
  const { theme } = useContext(ThemeContext);
  return (
    <div id="home" className={`${styles[theme]}`}>
      <div className={`${styles["banner"]}`}>
        <div className={`${styles["introduce"]}`}>
          <p
            ref={targetElTitle1}
            className={` ${setFadeInFadeOut(
              isInViewTitle1,
              loadingTimeTitle1
            )}`}
          >
            Hi,
          </p>
          <p
            ref={targetElTitle2}
            className={` ${setFadeInFadeOut(
              isInViewTitle2,
              loadingTimeTitle2
            )}`}
          >
            My name is
          </p>
          <p ref={targetElTitle3} className={`${styles["name"]} ${setFadeInFadeOut(
            isInViewTitle3,
            loadingTimeTitle3
          )}`}>
            Pham Thanh Tung
          </p>
          <p ref={targetElTitle4} className={` ${setFadeInFadeOut(
            isInViewTitle4,
            loadingTimeTitle4
          )}`}>
            I am Front-end Developer
          </p>
        </div>
        <picture
          ref={targetElPicture}
          className={`animationEffectFadeInFadeOut ${setFadeInFadeOut(
            isInViewPicture,
            loadingTimePicture
          )}`}
        >
          <img alt="banner" src="/assets/images/avatar/developer_banner.svg" />
        </picture>
      </div>
    </div>
  );
}

export default Banner;
