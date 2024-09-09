"use client";

import { useState } from "react";
import Link from "next/link";
import { Lobster } from "next/font/google";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const lobster = Lobster({ weight: "400"})

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="px-6 md:px-28 xl:px-96 bg-neutral-300 h-28 w-full">
      <div className="flex flex-row justify-between h-full items-center">
        <Link className={`${lobster.className} text-3xl`} href="/">ZHICONG</Link>
        <button className="md:hidden border p-2 rounded-md border-black" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} size="2xl"/>
        </button>
        <div className="hidden md:block">
          <Link href="/about" className="font-bold mx-6 hover:text-2xl duration-300 motion-reduce:transition-none motion-reduce:hover:transform-none">ABOUT</Link>
          <Link href="/porfolio" className="font-bold font-bold mx-6 hover:text-2xl duration-300 motion-reduce:transition-none motion-reduce:hover:transform-none">PORTFOLIO</Link>
          <Link href="/contact" className="font-bold mx-6 hover:text-2xl duration-300 motion-reduce:transition-none motion-reduce:hover:transform-none">CONTACT</Link>
        </div>
      </div>
      <div className="flex justify-end md:hidden">
        { isMenuOpen &&
          <ul className="">
            <li className="my-4 font-bold">
              <Link href="/about">ABOUT</Link>
            </li>
            <li className="my-4 font-bold">
              <Link href="/porfolio">PORTFOLIO</Link>
            </li>
            <li className="my-4 font-bold">
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
        }
      </div>
    </nav>
  )
}
