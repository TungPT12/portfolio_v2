"use client";
import React, { useContext } from "react";
import styles from "./CardTechnology.module.scss";
import ThemeContext from "@/providers/themes/themeContext";

function CardTechnology({ image, name }: { image: string; name: string }) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles[theme]}`}>
      <div className={`${styles["card_technology"]}`}>
        <picture className={`${styles["tech_logo"]} block`}>
          <img src={image} />
        </picture>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default CardTechnology;
