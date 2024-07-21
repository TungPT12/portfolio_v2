"use client";
import React, { useContext } from "react";
import styles from "./Banner.module.scss";
import ThemeContext from "@/providers/themes/themeContext";

function Banner() {
  const { theme } = useContext(ThemeContext);
  return (
    <div id="home" className={`${styles[theme]}`}>
      <div className={`${styles["banner"]}`}>
        <div className={`${styles["introduce"]}`}>
          <p className={``}>Hi,</p>
          <p>My name is</p>
          <p className={`${styles["name"]}`}>Pham Thanh Tung</p>
          <p>I am Front-end Developer</p>
        </div>
        <picture>
          <img alt="banner" src="/assets/images/avatar/developer_banner.svg" />
        </picture>
      </div>
    </div>
  );
}

export default Banner;
