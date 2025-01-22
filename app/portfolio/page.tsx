import type { Metadata } from 'next'

import Fade from '../components/Fade'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My portfolio page',
}

export default function Portfolio() {
  return (
    <Fade fadeOnce={false}>
      <div className="2xl:w-1/2 xl:w-2/3 w-full mx-auto">
        <h1 className="text-lime-500">Portfolio</h1>
        <p>
          Most of what I&apos;ve worked on has been used internally,
          so I&apos;m starting a portfolio page with proof of concepts!
        </p>
        <h2 className="h4 text-lime-500">Github</h2>
        <p>Visit my <a href="https://github.com/jaewebb" className="underline">GitHub</a> page to check out my code</p>
        <ul>
          <li>
            <a href="https://jae-webb-character-sheet.vercel.app/" target="_blank">
              <span className="underline">My Character Sheet</span>, a profile in the style of D&D
            </a>
          </li>
          <li>
            <a href="https://portfolio-dashboard-jae.vercel.app/" target="_blank">
              <span className="underline">MakenBank</span>, a sample dashboard
            </a>
          </li>
          <li>
            <a href="https://mint-salon.vercel.app/" target="_blank">
              <span className="underline">Mint Salon</span>,
              a pretend salon site
            </a>
          </li>
          <li>
            <a href="https://kitty-city-demo.vercel.app/" target="_blank">
              <span className="underline">Kitty City</span>,
              a pretend cat adoption site
            </a>
          </li>
        </ul>
      </div>
    </Fade>
  )
}
