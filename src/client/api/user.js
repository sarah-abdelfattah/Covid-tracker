
import { useQuery, useMutation } from 'react-query'
import { http } from '@/config'
import { useClear } from '@/api'

export const user = {
  get: () => http.get(`/user`),
  all: () => http.get(`/user/all`),
  update: (data) => http.post(`/user/update`, data),
}

const options = { suspense: true }
export const useUserInfo = () => useQuery(['user/get'], user.get, options)
export const useUsers = () => useQuery(['user/all'], user.all, options)
export const useUpdateUser = () => useMutation(['user/update'], user.update)
