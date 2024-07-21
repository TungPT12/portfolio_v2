"use client";
import ThemeContext from "@/providers/themes/themeContext";
import React, { useContext, useMemo } from "react";
import styles from "./Technologies.module.scss";
import CardTechnology from "./CardTechnology/CardTechnology";

function Technologies() {
  const { theme } = useContext(ThemeContext);
  const technologies = useMemo(() => {
    return [
      {
        name: "HTML",
        image: "/assets/images/tech_icon/dark_theme/html5.svg",
      },
      {
        name: "CSS",
        image: "/assets/images/tech_icon/dark_theme/css.svg",
      },
      {
        name: "NodeJS",
        image: "/assets/images/tech_icon/dark_theme/nodejs.svg",
      },
      ////
      {
        name: "Javascript",
        image: "/assets/images/tech_icon/dark_theme/javascript.svg",
      },
      // {
      //   name: "Java",
      //   image: "/assets/images/icons/java.svg",
      // },
      ////
      {
        name: "ExpressJS",
        image: "/assets/images/tech_icon/dark_theme/express_js.svg",
      },
      {
        name: "NextJS",
        image: "/assets/images/tech_icon/dark_theme/nextjs.svg",
      },
      //////
      {
        name: "ReactJS",
        image: "/assets/images/tech_icon/dark_theme/reactjs.svg",
      },
      {
        name: "JQuery",
        image: "/assets/images/tech_icon/dark_theme/jquery.svg",
      },
      ///
      // {
      //   name: "MongoDB",
      //   image: "/assets/images/icons/mongo.svg",
      // },
      {
        name: "GitHub",
        image: "/assets/images/tech_icon/dark_theme/github.svg",
      },
    ];
  }, []);

  const renderTech = (technologies: any) => {
    return technologies.map((tech: any) => {
      return (
        <CardTechnology key={tech.name} image={tech.image} name={tech.name} />
      );
    });
  };
  return (
    <div className={`${styles[theme]}`}>
      <div className={`${styles["technologies"]}`}>
        {renderTech(technologies)}
      </div>
    </div>
  );
}

export default Technologies;
