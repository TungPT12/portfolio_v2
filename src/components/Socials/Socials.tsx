"use client";
import ModeContext from "@/providers/themes/themeContext";
import React, { useContext } from "react";
import styles from "./Socials.module.scss";
import Link from "next/link";

const Socials = () => {
  const { theme } = useContext(ModeContext);

  const socialDarkTheme = [
    {
      icon: "/assets/images/tech_icon/dark_theme/github.svg",
      link: "https://github.com/TungPT12",
      alt: "github",
    },
    {
      icon: "/assets/images/icons/linked.svg",
      link: "https://www.linkedin.com/in/tungpt12/",
      alt: "linkedIn",
    },
  ];
  const socialLightTheme = [
    {
      icon: "/assets/images/icons/github.svg",
      link: "",
      alt: "github",
    },
    {
      icon: "/assets/images/icons/github.svg",
      link: "",
      alt: "github",
    },
  ];

  const renderSocial = (
    socialsTheme: Array<{ icon: string; link: string; alt: string }>
  ) => {
    return socialsTheme.map((social) => {
      return (
        <Link key={social.alt} href={social.link}>
          <picture>
            <img src={social.icon} alt={social.alt} />
          </picture>
        </Link>
      );
    });
  };
  return (
    <div className={`${styles[theme]}`}>
      <div className={`${styles["socials"]}`}>
        {renderSocial(socialDarkTheme)}
      </div>
    </div>
  );
};

export default Socials;
