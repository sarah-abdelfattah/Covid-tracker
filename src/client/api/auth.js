import { storage } from "@/client/config";

export const auth = {}

export const useStorageUpdate = (token) => {
  return storage.set('token', token)
}