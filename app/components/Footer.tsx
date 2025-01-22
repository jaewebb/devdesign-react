'use client'

import Fade from './Fade'

export default function Navbar() {
  const footerDate = new Date().getFullYear()

  return (
    <Fade fadeOnce={true}>
      <footer>
        <div className="text-center mt-5">
          &copy; Jae Webb { footerDate }<br />
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
      </footer>
    </Fade>
  )
}
