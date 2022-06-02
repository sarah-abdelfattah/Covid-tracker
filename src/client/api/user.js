
import { useQuery } from 'react-query'
import { http } from '@/client/config'

export const user = {
  user: () => http.get(`/user`),
}

const options = { suspense: false } //TODO
export const useUser = () => useQuery(['user/user'], () => user.user(), options)
