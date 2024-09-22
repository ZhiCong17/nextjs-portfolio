"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export default function ToggleThemeButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  let buttonContent;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  };

  buttonContent = theme === "light" ?
  <div className="w-16 h-8 rounded-full bg-foreground flex justify-between items-center">
    <div className="w-6 h-6 rounded-full bg-lightNavBg ml-1"></div>
    <FontAwesomeIcon icon={faMoon} className="mr-2 text-background" size="xl" />
  </div> :
  <div className="w-16 h-8 rounded-full bg-darkText flex justify-between items-center">
    <FontAwesomeIcon icon={faSun} className="ml-2 text-darkBg" size="lg" />
    <div className="w-6 h-6 rounded-full bg-darkNavBg mr-1"></div>
  </div>

  return (
    <button onClick={() => {theme === "dark" ? setTheme("light") : setTheme("dark")}}>
      {buttonContent}
    </button>
  )
}
