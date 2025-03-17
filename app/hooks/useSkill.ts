import useSWR from 'swr'

import type { Skill } from '@/app/types/Skill'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function useSkill(url: string) {
  const { data, error, isLoading, } = useSWR<Skill[], string>(url, fetcher)

  return {
    skills: data,
    isLoadingSkills: isLoading,
    skillError: error,
  }
}
