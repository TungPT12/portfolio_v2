"use client";
import { createContext } from "react";

const ThemeContext = createContext({
  theme: "",
  setDarkMode: () => {},
  setLightMode: () => {},
});

export default ThemeContext;
