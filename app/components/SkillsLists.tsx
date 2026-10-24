'use client'

import Fade from '@/app/components/Fade'
import Loading from '@/app/components/Loading'

import useSkill from '@/app/hooks/useSkill'
import useSkillType from '@/app/hooks/useSkillType'

export default function SkillsLists({ url, }: { url: string | undefined }) {
  const { skills, isLoadingSkills, skillError, } = useSkill(`${url}/skills/skill`)
  const { skillTypes, isLoadingSkillTypes, skillTypeError, } = useSkillType(`${url}/skills/skilltype`)

  if (isLoadingSkills || isLoadingSkillTypes) return <Loading />

  if (skillError || skillTypeError) return <div>{ skillError?.toString() ?? skillTypeError?.toString() }</div>

  if (!url) return <div>Configuration issue, no backend url found.</div>

  return (
    <Fade fadeOnce={false}>
      <h1 className="text-lime-500 sr-only">Skills</h1>
      {skillTypes?.length && skills?.length && (
        <div className="grid 3xl:grid-cols-3 grid-cols-1 gap-7">
          {skillTypes?.map((skillType) => {
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
                    {skills?.filter(skill => skill.typeId == skillType.id).map((skill) => {
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
      )}
    </Fade>
  )
}
