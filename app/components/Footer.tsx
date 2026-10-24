'use client'

import Fade from './Fade'

export default function Navbar() {
  const year = new Date().getFullYear()

  return (
    <Fade fadeOnce={true}>
      <footer>
    <div className="flex flex-col text-center gap-4 pt-8">
      <ul className="flex justify-center gap-4">
        <li>
          <i className="fa-regular fa-envelope"></i>{' '}
          <a href="mailto:jaewebbdevdesign@gmail.com">
            jaewebbdevdesign@gmail.com
          </a>
        </li>
        <li>
          <i className="fa-brands fa-linkedin"></i>{' '}
          <a className="https://www.linkedin.com/in/jae-webb/">
            LinkedIn
          </a>
        </li>
      </ul>
      <div>
        &copy; Jae Webb { year }
      </div>
      <div>
        Click
          <a
            href="https://www.webbdevdesign.ca"
            className="underline font-bold mx-1"
          >
            here
          </a>
          to see the Vue.js
          <i className="fa-brands fa-vuejs mx-1"></i>
          version of this site
      </div>
    </div>
  </footer>
    </Fade>
  )
}
