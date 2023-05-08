import { ENDPOINT, VERSION } from '@env'

export const API = {
  GET_HEADLINES: (language: string) => `${ENDPOINT}/${VERSION}/top-headlines?language=${language}`
}