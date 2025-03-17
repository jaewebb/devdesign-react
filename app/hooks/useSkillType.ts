import useSWR from 'swr'

import type { SkillType } from '@/app/types/SkillType'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function useSkillType(url: string) {
  const { data, error, isLoading, } = useSWR<SkillType[], string>(url, fetcher)

  return {
    skillTypes: data,
    isLoadingSkillTypes: isLoading,
    skillTypeError: error,
  }
}
