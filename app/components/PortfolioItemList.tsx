'use client'

import Fade from '@/app/components/Fade'
import Loading from '@/app/components/Loading'

import usePortfolioItem from '@/app/hooks/usePortfolioItem'

export default function PortfolioItemLists({ url, }: { url: string | undefined }) {
  const { portfolioItems, isLoadingPortfolioItems, portfolioItemError, } = usePortfolioItem(`${url}/portfolioItems/portfolioItem`)

  if (isLoadingPortfolioItems) return <Loading />

  if (portfolioItemError) return <div>{ portfolioItemError.toString() }</div>

  if (!url) return <div>Configuration issue, no backend url found.</div>

  return (
    <Fade fadeOnce={false}>
      {portfolioItems &&
        <div className="3k:w-1/2 xl:w-2/3 w-full mx-auto">
          <h1 className="text-lime-500">Portfolio</h1>
          <p>
            Most of what I've worked on has been used internally or is client-only,
            so I started a portfolio page with proof of concepts!
          </p>
          <ul>
            {portfolioItems.map(item => (
              <li key={`porfolioItem-${item.id}`}>
                <a href={item.link} target="_blank" className="underline">
                  { item.name }
                </a>
                { ` ${item.description}` }
              </li>
            ))}
          </ul>
        </div>
      }
    </Fade>
  )
}
