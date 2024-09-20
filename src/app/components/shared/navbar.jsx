"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Lobster } from "next/font/google";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
  preload: false,
})

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function ToggleThemeButton() {
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
    <div className="w-16 h-8 rounded-full bg-background flex justify-between items-center">
      <div className="w-6 h-6 rounded-full bg-lightnavbg ml-1"></div>
      <FontAwesomeIcon icon={faMoon} className="mr-2 text-foreground" size="xl" />
    </div> :
    <div className="w-16 h-8 rounded-full bg-darkbg flex justify-between items-center">
      <FontAwesomeIcon icon={faSun} className="ml-2 text-darktext" size="lg" />
      <div className="w-6 h-6 rounded-full bg-darknavbg mr-1"></div>
    </div>

    return (
      <button onClick={() => {theme === "dark" ? setTheme("light") : setTheme("dark")}}>
        {buttonContent}
      </button>
    )
  }

  return (
    <nav className="bg-lightnavbg dark:bg-darknavbg h-20 w-full sticky top-0 z-50">
      <div className="px-6 mx-auto max-w-sm md:max-w-3xl flex flex-row justify-between h-full items-center">
        <Link className={`${lobster.className} text-3xl`} href="/" onClick={() => setIsMenuOpen(false)}>ZHICONG</Link>
        <button className="md:hidden border p-2 rounded-md border-black" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} size="2xl"/>
        </button>
        <div className="hidden md:flex items-center gap-x-5">
          <Link href="/about" className="font-bold hover:text-2xl duration-300 motion-reduce:transition-none motion-reduce:hover:transform-none">ABOUT</Link>
          <Link href="/portfolio" className="font-bold font-bold hover:text-2xl duration-300 motion-reduce:transition-none motion-reduce:hover:transform-none">PORTFOLIO</Link>
          <Link href="/contact" className="font-bold hover:text-2xl duration-300 motion-reduce:transition-none motion-reduce:hover:transform-none">CONTACT</Link>
          <ToggleThemeButton />
        </div>
      </div>
      <div className="flex justify-end md:hidden">
        { isMenuOpen &&
          <ul className="">
            <li className="my-4 font-bold">
              <Link href="/about" onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
            </li>
            <li className="my-4 font-bold">
              <Link href="/portfolio" onClick={() => setIsMenuOpen(false)}>PORTFOLIO</Link>
            </li>
            <li className="my-4 font-bold">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
            </li>
          </ul>
        }
      </div>
    </nav>
  )
}
