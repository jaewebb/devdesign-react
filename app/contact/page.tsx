import type { Metadata } from 'next'

import Fade from '../components/Fade'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Please email me with opportunities, thank you for considering me!',
}

export default function Contact() {
  return (
    <Fade fadeOnce={false}>
      <div className="2xl:w-1/2 xl:w-2/3 w-full mx-auto">
        <h1 className="text-lime-500">Contact</h1>
        <ul>
          <li>
            <a href="mailto:jaewebbdevdesign@gmail.com">
              <i className="fa-regular fa-envelope mr-1"></i>
              jaewebbdevdesign@gmail.com
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jae-webb/">
              <i className="fa-brands fa-linkedin mr-1"></i>
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </Fade>
  )
}
