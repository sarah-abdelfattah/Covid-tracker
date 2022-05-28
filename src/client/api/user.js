import { useQuery } from 'react-query'

export const user = {
  user: () => http.get(`/user`),
}

const options = { suspense: false } //TODO
export const useUser = () => useQuery(['user/user'], () => user.user(), options)
export const useUserTest = () => useQuery(['user/test'], () => 'test', options)
