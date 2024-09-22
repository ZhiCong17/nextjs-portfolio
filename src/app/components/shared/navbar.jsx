"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Lobster } from "next/font/google";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ToggleThemeButton from "../toggle-theme-button";

const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
  preload: false,
})

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let navLinksClass;

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  isMenuOpen === false ? navLinksClass = "hidden md:flex gap-x-5" : navLinksClass = "absolute right-0 text-right ";

  return (
    <nav className="bg-lightNavBg dark:bg-darkNavBg h-20 w-full sticky top-0 z-50">
      <div className="px-6 mx-auto max-w-sm md:max-w-3xl flex flex-row justify-between h-full items-center">
        <Link className={`${lobster.className} text-3xl`} href="/" onClick={() => setIsMenuOpen(false)}>ZHICONG</Link>
        <div className="relative text-right">
          <button className="md:hidden border p-2 rounded-md border-foreground dark:border-darkText" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} size="2xl"/>
          </button>
          <ul className={navLinksClass}>
            <li className="my-4 font-bold">
              <Link href="/about" onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
            </li>
            <li className="my-4 font-bold">
              <Link href="/portfolio" onClick={() => setIsMenuOpen(false)}>PORTFOLIO</Link>
            </li>
            <li className="my-4 font-bold">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
            </li>
            <ToggleThemeButton />
          </ul>
        </div>
      </div>
    </nav>
  )
}
