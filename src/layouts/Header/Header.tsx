"use client";
import ThemeContext from "@/providers/themes/themeContext";
import React, { useContext } from "react";
import styles from "./Header.module.scss";
import Socials from "@/components/Socials/Socials";
import Link from "next/link";

const Header = () => {
  const { theme } = useContext(ThemeContext);

  const themeLogo = (theme: string) => {
    return theme === "dark" ? (
      <Link href="#home">
        <img src="/assets/images/logo/thantung2_white.svg" alt="logo" />
      </Link>
    ) : (
      <Link href="#home">
        <img src="/assets/images/logo/thantung2_black.svg" alt="logo" />
      </Link>
    );
  };

  return (
    <div className={`${styles[theme]}`}>
      <div className={`${styles["header"]}`}>
        <picture className={`${styles["logo"]}`}>{themeLogo(theme)}</picture>
        <div className={`${styles["links_wrapper"]}`}>
          <div className={`${styles["link"]}`}>
            <Link href="#educations">Educations</Link>
            <div className={`${styles["border_line"]}`}></div>
          </div>
          <div className={`${styles["link"]}`}>
            <Link href="#certificates">Certificates</Link>
            <div className={`${styles["border_line"]}`}></div>
          </div>
          <div className={`${styles["link"]}`}>
            <Link href="#technologies">Technologies</Link>
            <div className={`${styles["border_line"]}`}></div>
          </div>
          <div className={`${styles["link"]}`}>
            <Link href="#projects">Projects</Link>
            <div className={`${styles["border_line"]}`}></div>
          </div>
          <div className={`${styles["link"]}`}>
            <Link href="#work_experiences">Work Experiences</Link>
            <div className={`${styles["border_line"]}`}></div>
          </div>
        </div>
        <Socials />
      </div>
    </div>
  );
};

export default Header;
