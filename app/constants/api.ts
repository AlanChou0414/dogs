import { ENDPOINT, VERSION } from '@env'

export const API = {
  GET_HEADLINES: (language: string) => `${ENDPOINT}/${VERSION}/top-headlines?language=${language}`,
  SEARCH_IN: (query: string) => `${ENDPOINT}/${VERSION}/everything?q=${query}`
}