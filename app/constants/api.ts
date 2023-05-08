import { ENDPOINT, VERSION } from '@env'

export const API = {
  GET_HEADLINES: (language: string, page: number, size: number) => `${ENDPOINT}/${VERSION}/top-headlines?language=${language}&page=${page}&pageSize=${size}`,
  SEARCH_IN: (query: string) => `${ENDPOINT}/${VERSION}/everything?q=${query}`
}