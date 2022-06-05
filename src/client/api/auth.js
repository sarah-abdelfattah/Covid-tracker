import { storage } from "@/config";

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

export const useIsAuthenticated = () => {
  return !!localStorage.getItem('token')
}

export const useClear = () => {
  window.location.reload(false);
  storage.clear()
  return
}