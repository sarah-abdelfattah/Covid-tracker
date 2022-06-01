import { createContext, useContext, useMemo, useState } from 'react'

import { storage } from '../config/storage'

const AuthContext = createContext({
  user: { token: '' },
  set: ({ token }) => null,
  clear: () => null,
})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    token: storage.get('token') || '',
  })

  const value = useMemo(
    () => ({
      user,
      set: ({ token }) => {
        setUser({ token, name, email })
        storage.set('token', token)
      },
      clear: () => {
        setUser({ token: '', })
        storage.remove('token')
      },
    }),
    [user]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw Error('useAuth() should be used within <AuthProvider>')
  return context
}
