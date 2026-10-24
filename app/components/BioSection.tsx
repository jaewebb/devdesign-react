'use client'
import Image from 'next/image'

import Fade from '@/app/components/Fade'
import Loading from '@/app/components/Loading'

import useBio from '@/app/hooks/useBio'

interface BioSectionProps {
  blobUrl: string | undefined
  url: string | undefined
}
export default function BioSection({ blobUrl, url, }: BioSectionProps) {
  const { bio, isLoadingBio, bioError, } = useBio(`${url}/bio/bio`)

  if (isLoadingBio) return <Loading />

  if (bioError) return <div>{ bioError?.toString() }</div>

  if (!url) return <div>Configuration issue, no backend url found.</div>

  const avatarUrl = `${blobUrl}/${bio?.avatar?.url}`

  return (
    <Fade fadeOnce={false}>
      {bio && (
        <div className="2k:w-1/2 2xl:w-2/3 w-full mx-auto gap-4">
          <div className="flex sm:flex-row flex-col sm:items-start items-center sm:text-left text-center">
            {bio.avatar?.url && (
              <Image
                priority
                src={avatarUrl}
                height={100}
                width={100}
                alt={bio.avatar?.alt ?? "Photo of Jae Webb"}
              />
            )}
            <div className="flex flex-col justify-center sm:px-6 px-0 sm:pt-0 pt-4">
              <h1 className="text-lime-500 neon-green">{ bio.firstName } { bio.lastName }</h1>
              <h2 className="text-sky-500 neon-blue">{ bio.title }</h2>
            </div>
          </div>
          {bio.description && (
            <div className="flex flex-col gap-4 my-4">
              {bio.description?.map((paragraph: string, i: number) => (
                <p key={`paragraph-${i}`}>
                  { paragraph }
                </p>
              ))}
            </div>
          )}
          {bio.goals && (
            <div>
              <h6>My career goals are:</h6>
              <ul>
                {bio.goals.map((goal: string, i: number) => (
                <li key={`goal-${i}`}>
                  { goal }
                </li>
              ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </Fade>
  )
}
