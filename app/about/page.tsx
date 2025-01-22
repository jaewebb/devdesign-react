import type { Metadata } from 'next'

import Fade from '../components/Fade'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about me',
}

export default function About() {
  return (
    <Fade fadeOnce={false}>
      <div className="2xl:w-1/2 xl:w-2/3 w-full mx-auto">
        <h1 className="text-lime-500">About Me</h1>
        <div>
          <p>
            I&apos;ve always had a passion for web design and technology.
            In my early teens,
            I would play around with layouts on social media websites,
            create pixel art, and design simple graphics for use online.
            My interest in these domains continued into high school,
            where I focused on programming and design courses,
            and eventually led me to study
            Computer Science at the University of Guelph.
          </p>

          <p>
            After two years of obtaining foundational knowledge
            in computer programming and UI design at the University of Guelph,
            I decided that the practical application offered by college
            would be a better fit for my personal career goals.
            I chose to study Computer Programming at Conestoga College,
            where I spent 3 years (and 2 co-op work terms)
            acquiring technical skills in languages such as
            C#, ASP.NET, HTML, CSS, Javascript, and PHP.
          </p>

          <p>
            After graduating, I acquired professional web experience
            working with C#, ASP.NET MVC, and React.
            In recent years, most of my time has been spent
            using Vue.js and an internal design framework,
            but I&apos;ve also gained valuable experience with
            Bootstrap and Tailwind CSS.
          </p>

          <h6>My career goals are:</h6>
          <ul>
            <li>To never stop learning</li>
            <li>To foster and express my natural creativity through my work</li>
            <li>
              To build and create beautiful,
              useful web apps that I can be proud of
            </li>
          </ul>

          <p>
            To achieve my goals,
            I work on personal projects
            and watch training videos in my off hours.
            I take pride in the quality of my work,
            and strive to produce the best product possible for my employers
            - I am happy to say that previous employers have been
            more than satisfied with the results!
          </p>
        </div>
      </div>
    </Fade>
  )
}
