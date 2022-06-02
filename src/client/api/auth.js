import { storage } from "@/client/config";

export const auth = {}

export const useLogin = (token) => {
  return storage.set('token', token)
}

export const useLogout = () => {
  return storage.remove('token')
}