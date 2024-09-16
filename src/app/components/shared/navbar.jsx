"use client";

import { useState } from "react";
import Link from "next/link";
import { Lobster } from "next/font/google";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

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

  return (
    <nav className="bg-neutral-300 h-20 w-full sticky top-0 z-50">
      <div className="px-6 mx-auto max-w-sm md:max-w-3xl flex flex-row justify-between h-full items-center">
        <Link className={`${lobster.className} text-3xl`} href="/" onClick={() => setIsMenuOpen(false)}>ZHICONG</Link>
        <button className="md:hidden border p-2 rounded-md border-black" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} size="2xl"/>
        </button>
        <div className="hidden md:block">
          <Link href="/about" className="font-bold mx-6 hover:text-2xl duration-300 motion-reduce:transition-none motion-reduce:hover:transform-none">ABOUT</Link>
          <Link href="/portfolio" className="font-bold font-bold mx-6 hover:text-2xl duration-300 motion-reduce:transition-none motion-reduce:hover:transform-none">PORTFOLIO</Link>
          <Link href="/contact" className="font-bold mx-6 hover:text-2xl duration-300 motion-reduce:transition-none motion-reduce:hover:transform-none">CONTACT</Link>
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
