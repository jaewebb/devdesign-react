'use client'

import Link from 'next/link'
import Image from 'next/image'

import Fade from './Fade'

export default function Header() {
  return (
    <Fade fadeOnce={true}>
      <header
        className="
          flex
          justify-between
          md:flex-row flex-col
          md:mb-5
          2xl:w-2/3 w-full
          2xl:mx-auto"
        >
        <div className="flex justify-between">
          <a href="/">
            <Image
              className=""
              priority
              src="/images/logo.png"
              height={58}
              width={58}
              alt=""
            />
          </a>
          <div className="md:hidden block grow text-right">
            <h2 className="text-lime-500">Jae Webb</h2>
            <h3 className="text-sky-500">Senior Web Application Developer</h3>
          </div>
        </div>
        <nav className="flex justify-between md:my-0 my-10">
          <Link
            href="/"
            className="md:pr-10 hover:underline hover:text-lime-500"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="md:pr-10 hover:underline hover:text-lime-500"
          >
            About
          </Link>
          <Link
            href="/skills"
            className="md:pr-10 hover:underline hover:text-lime-500"
          >
            Skills
          </Link>
          <Link
            href="/portfolio"
            className="md:pr-10 hover:underline hover:text-lime-500"
          >
            Portfolio
          </Link>
          <Link href="/contact">
            Contact
          </Link>
        </nav>
      </header>
    </Fade>
  )
}
