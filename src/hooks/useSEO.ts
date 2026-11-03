import { useEffect } from 'react'

interface SEOOptions {
  title: string
  description: string
}

function setMeta(selector: string, content: string) {
  const element = document.querySelector(selector)
  if (element) element.setAttribute('content', content)
}

/** Updates the document title and the description tags that already exist in index.html. */
const useSEO = ({ title, description }: SEOOptions) => {
  useEffect(() => {
    document.title = title
    setMeta('meta[name="description"]', description)
    setMeta('meta[property="og:title"]', title)
    setMeta('meta[property="og:description"]', description)
    setMeta('meta[name="twitter:title"]', title)
    setMeta('meta[name="twitter:description"]', description)
  }, [title, description])
}

export default useSEO
