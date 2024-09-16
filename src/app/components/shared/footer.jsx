"use client";

import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className="text-center">
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="mb-5">Back To Top</button>
      <div className="space-x-6 mb-5">
        <Link href="https://github.com/ZhiCong17" target="_blank">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </Link>
        <Link href="https://www.linkedin.com/in/zhicong-ore/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </Link>
      </div>
      <p className="mb-5">© Copyright 2024. Made by Ore Zhi Cong</p>
    </div>
  )
}
