import PortfolioItemList from '@/app/components/PortfolioItemList'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My portfolio page',
}

export default function Portfolio() {
  return (
    <PortfolioItemList url={process.env.API_BASE_URL} />
  )
}
