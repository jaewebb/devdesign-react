import useSWR from 'swr'

import type { PortfolioItem } from '@/app/types/PortfolioItem'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function usePortfolioItem(url: string) {
  const { data, error, isLoading, } = useSWR<PortfolioItem[], string>(url, fetcher)

  return {
    portfolioItems: data,
    isLoadingPortfolioItems: isLoading,
    portfolioItemError: error,
  }
}
