"use client";
import React, { useReducer } from "react";
import ThemeContext from "./themeContext";

const initMode = {
  theme: "dark",
};

function modeReducer(state: any, action: any) {
  switch (action.type) {
    case "LIGHT_MODE":
      return {
        ...state,
        theme: "light",
      };
    case "DARK_MODE":
      return {
        ...state,
        theme: "dark",
      };
  }
  return {
    ...state,
  };
}

function ModeProvider({ children }: { children: React.ReactNode }) {
  const [modeState, modeDispatch] = useReducer(modeReducer, initMode);

  const darkMode = () => {
    modeDispatch({
      type: "DARK_MODE",
    });
  };

  const lightMode = () => {
    modeDispatch({
      type: "LIGHT_MODE",
    });
  };

  const modeContext = {
    theme: modeState.theme,
    setDarkMode: darkMode,
    setLightMode: lightMode,
  };

  return (
    <ThemeContext.Provider value={modeContext}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ModeProvider;
