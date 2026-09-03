import { createContext, useContext } from 'react'
import useContent from '../hooks/useContent.js'
import localSite from './site.js'

const ContentContext = createContext(localSite)

export function ContentProvider({ children }) {
  const site = useContent()
  return <ContentContext.Provider value={site}>{children}</ContentContext.Provider>
}

/** Access the site content anywhere below <ContentProvider>. */
export function useSite() {
  return useContext(ContentContext)
}
