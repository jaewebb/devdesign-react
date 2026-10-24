import BioSection from '@/app/components/BioSection'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
  description: 'This is my site made with React and Next.js!',
}

export default function Home() {
  return (
    <BioSection blobUrl={process.env.BLOB_STORE_URL} url={process.env.API_BASE_URL} />
  )
}
