
import { useQuery } from 'react-query'
import { http } from '../config/index'

export const user = {
  user: () => http.get(`/user`),
  test: () => http.get(`/`),
}

const options = { suspense: false } //TODO
export const useUser = () => useQuery(['user/user'], () => user.user(), options)
export const useUserTest = () => useQuery(['/test'], () => user.test(), options)
