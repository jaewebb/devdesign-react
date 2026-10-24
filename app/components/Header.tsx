'use client'

import Link from 'next/link'
import Image from 'next/image'

import Fade from './Fade'

export default function Header({ blobUrl } : { blobUrl: string }) {
  return (
    <Fade fadeOnce={true}>
      <header
        className="
          flex
          justify-between
          mb-5
          3k:w-1/3 w-full
          mx-auto"
      >
        {blobUrl && (
          <a href="/">
            <Image
              className=""
              priority
              src={blobUrl}
              height={58}
              width={58}
              alt=""
            />
          </a>
        )}
        <nav className="flex items-center sm:gap-10 gap-5">
          <Link
            href="/"
            className="hover:underline hover:text-lime-500"
          >
            Home
          </Link>
          <Link
            href="/skills"
            className="hover:underline hover:text-lime-500"
          >
            Skills
          </Link>
          <Link
            href="/portfolio"
            className="hover:underline hover:text-lime-500"
          >
            Portfolio
          </Link>
        </nav>
      </header>
    </Fade>
  )
}
