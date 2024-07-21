"use client";
import ThemeContext from "@/providers/themes/themeContext";
import React, { useContext } from "react";
import styles from "./SkillAndTechnology.module.scss";
import Technologies from "@/components/Technologies/Technologies";

const SkillAndTechnology = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div id="technologies" className={`${styles[theme]}`}>
      <div className={`${styles["technologies"]}`}>
        <div className={`${styles["title"]}`}>
          <h3>Technologies</h3>
          <p>Technologies i have been study</p>
        </div>
        <div className={`${styles["technologies_wrapper"]}`}>
          <Technologies />
        </div>
      </div>
    </div>
  );
};

export default SkillAndTechnology;
