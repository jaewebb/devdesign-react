import SkillsLists from '@/app/components/SkillsLists'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skills',
  description: 'Categorized lists of my skills',
}

export default function Skills() {
  return (
    <SkillsLists url={process.env.API_BASE_URL} />
  )
}
