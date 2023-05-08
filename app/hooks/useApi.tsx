import useSWR from 'swr'
import axios from 'axios'
import { API_KEY } from '@env'
import { ApiProps } from '@Types/Props'

const useApi = ({ URL, options }: ApiProps) => {
  const { data, mutate } = useSWR(URL, async (URL) => {
    const response = await axios(URL, {
      headers: {
        'X-Api-Key': API_KEY
      },
      method: options.method,
      data: options.data
    })
    return response.data
  })
  return { data, mutate }
}

export default useApi