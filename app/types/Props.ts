import { ReactNode } from "react"
import { Method } from "axios"

export interface ChildrenProps {
  children: ReactNode
}

export interface ApiProps {
  URL: string
  options: {
    method?: Method,
    headers?: {},
    data?: any
  }
}

export interface HeadlinesProps {
  articles: {
    source: {
      name: string
    },
    title: string,
    description?: string,
    url?: string,
    urlToImage: string,
    publishedAt: string,
    content: string
  }[]
}