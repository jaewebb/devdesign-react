import type { GetStaticProps, InferGetStaticPropsType, Metadata } from 'next'

import Fade from '../components/Fade'

export interface Skill {
  id: number
  name: string
  typeId: number
  link: string
}

export interface SkillType {
  id: number
  title: string
  description: string
}

export const metadata: Metadata = {
  title: 'Skills',
  description: 'Categorized lists of my skills',
}

export default async function Skills() {
  const skillData = await fetch(`${process.env.API_BASE_URL}/skills/skill`)
  const skills: Skill[] = await skillData.json()
  const skillTypeData = await fetch(`${process.env.API_BASE_URL}/skills/skilltype`)
  const skillTypes: SkillType[] = await skillTypeData.json()

  return (
    <Fade fadeOnce={false}>
      <div className="flex flex-col 2xl:w-2/3 w-full mx-auto">
        <h1 className="text-lime-500 sr-only">Skills</h1>
        {/* I enjoy learning new skills, frameworks, and languages */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7">
        {skillTypes.map((skillType) => {
            return (
              <div
                key={`skill-type-${skillType.id}`}
                className={`
                  flex flex-col justify-between
                  skill-box
                  drop-shadow
                  md:px-5 md:py-4 px-3 py-2
                  ${skillType.id % 2 == 0 ? 'skill-box-blue text-sky-400' : 'skill-box-lime text-lime-400' }
                `}
                >
                <div>
                  <h2 className={`h4 ${skillType.id % 2 == 0 ? 'text-sky-400' : 'text-lime-400' }`}>
                    { skillType.title }
                  </h2>
                  <ul>
                    {skills.filter(skill => skill.typeId == skillType.id).map((skill) => {
                      if (skill.link) return (
                        <li key={`skill-${skill.id}`}>
                          <a
                            href={skill.link}
                            className="underline font-bold"
                          >
                            {skill.name}
                          </a>
                        </li>
                      )
                      else return <li key={`skill-${skill.id}`}>{skill.name}</li>
                    })}
                  </ul>
                </div>
                <h3 className={`subtitle ${skillType.id % 2 == 0 ? 'text-sky-400' : 'text-lime-400' }`}>
                  { skillType.description }
                </h3>
              </div>
            )
          })}
        </div>
      </div>
    </Fade>
  )
}
