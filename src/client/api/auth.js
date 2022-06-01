import { useAuth } from '../context/index'

export const auth = {}

export const useStorageUpdate = (token) => {
  const authContext = useAuth()
  return authContext.set({ token })

}