import { storage } from "@/client/config";

export const auth = {}

export const useLogin = (token, user) => {
  storage.set('token', token)
  storage.set('sub', user.sub)
  return
}

export const useLogout = () => {
  storage.remove('token')
  storage.remove('sub')
  return
}