import useSWR from 'swr'

import type { Bio } from '@/app/types/Bio'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function useBio(url: string) {
  const { data, error, isLoading, } = useSWR<Bio, string>(url, fetcher)

  return {
    bio: data,
    isLoadingBio: isLoading,
    bioError: error,
  }
}
