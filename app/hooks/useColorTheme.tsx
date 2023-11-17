"use client";
import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useColorTheme = () => {
  const [colorTheme, setColorTheme] = useLocalStorage("color-theme", "light");

  useEffect(() => {
    const className = "dark";
    const bodyRef = window.document.body.classList;
    colorTheme === "dark" ? bodyRef.add(className) : bodyRef.remove(className);
  }, [colorTheme]);

  return [colorTheme, setColorTheme];
};

export default useColorTheme;
