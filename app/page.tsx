import type { Metadata } from 'next'

import Fade from './components/Fade'

export const metadata: Metadata = {
  title: 'Home',
  description: 'This is my site made with React and Next.js!',
}

export default function Home() {
  return (
    <Fade fadeOnce={false}>
      <div
         className="
         flex
         md:flex-row flex-col
         items-center
         justify-between
         2xl:w-1/2 w-full
         mx-auto"
      >
        <div className="md:block hidden mr-2">
          <h2 className="text-lime-500 neon-green">Jae Webb</h2>
          <h3 className="text-sky-500 neon-blue">Senior Web Application Developer</h3>
        </div>
        <div className="md:w-2/4 w-full">
          <h1 className="text-lime-500">Mobile Friendly Web Sites and Apps</h1>
          <div>
          <p>
            When we plan to go somewhere new, whether that be a beach,
            a board game cafe, or even a new city,
            what&apos;s the first thing that we do?
            We look it up online!
          </p>

          <p>
            These days,
            it&apos;s vital to have a solid source of information on the web
            in order to attract new customers and keep current ones updated.
            When potential customers are given a choice
            between two similar business options,
            having a strong online presence can tip the scales in your favour.
          </p>

          <p>
            This is where I come in!
            I will work with you to create a custom informational website,
            or web app, that can attract potential customers and communicate
            the unique benefits that your company has to offer.
          </p>
          </div>
        </div>
      </div>
    </Fade>
  )
}
