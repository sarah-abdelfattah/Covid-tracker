
import { useQuery } from 'react-query'
import { http } from '@/client/config'

export const user = {
  user: () => http.get(`/user`),
}

const options = { suspense: true }
export const useUserInfo = () => useQuery(['user/user'], () => user.user(), options)
